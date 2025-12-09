// /pages/api/wiki-proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug as string;
  const lang = req.query.lang || 'en';
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);
  let url = `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(slug)}`;
  if (isMobile) {
    url = `https://${lang}.m.wikipedia.org/wiki/${encodeURIComponent(slug)}`;
  }

  const html = await fetch(url, {
    headers: {
      "User-Agent": userAgent,
      "Accept": req.headers["accept"] || "*/*",
    },
  }).then(r => r.text());

  const $ = cheerio.load(html);

  $('link[rel="stylesheet"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href?.startsWith('/w/')) {
      $(el).attr('href', `https://${lang}.wikipedia.org${href}`);
    }
  });

  $('a[href^="/wiki/"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      const slug = href.replace('/wiki/', '');
      $(el).attr('href', `/${lang}/wiki/${slug}/wikipedia`);
      $(el).attr('target', '_parent'); // make sure it opens in the parent window
    }
  });

  $('script').each((_, el) => {
    const src = $(el).attr('src');
    if (src?.startsWith('/w/')) {
      $(el).attr('src', `https://${lang}.wikipedia.org${src}`);
    }
  });

  $('.hatnote').each((_, el) => {
    $(el).css('background-color', 'transparent !important');
  });

  $('img').each((_, el) => {
    const src = $(el).attr('src');
    if (src?.startsWith('/w/')) {
      $(el).attr('src', `https://${lang}.wikipedia.org${src}`);
    }
  });

  $('.navbox').remove();
  $('.vector-body-before-content').remove();
  $('.mwe-popups').remove();
  $('.mw-editsection').remove();

  if (isMobile) {
    $('head').append(`
      <style>
      .infobox.biota {
        width: 100% !important;
      }
      .mw-parser-output div.hatnote {
        padding-left: 0 !important;
      }
      </style>
    `);

    $('#toc').remove();
    $('.clade-gallery').remove();
  } else {
    $('head').append(`
      <style>
        #mw-content-text {
          line-height: 1.5 !important;
        }
      </style>
    `);

    $('#contentSub').remove();
  }

  $('head').append(`
    <script>
window.addEventListener('message', (event) => {
  // Optional: validate event.origin for security
  const data = event.data || {};
  if (data?.type === 'theme') {
    const html = document.documentElement;
    if (data.theme === 'dark') html.classList.add('skin-theme-clientpref-night');
    else html.classList.remove('skin-theme-clientpref-night');
  }
}, false);

// Optionally notify parent it's ready:
window.parent.postMessage({ type: 'iframe-ready' }, '*');
</script>
    `);

  // Keep head for CSS/JS
  $('head').append(`
  <style>
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
      max-width: 100% !important;
      background: transparent !important;
    }

    html.skin-theme-clientpref-night {
      color-scheme: normal !important;
    }

    body {
      box-sizing: border-box;
    }

    img, table, pre {
      max-width: 100%;
      height: auto;
    }
  </style>
  `);

  $('head').append(`
  <script>
    function sendHeight() {
      // Use the wrapper or fallback to body/documentElement
      const wrapper = document.getElementById("bodyContentWrapper");
      const body = document.body;
      const html = document.documentElement;
      
      if (!wrapper && !body) return;

      // Calculate the maximum possible height to ensure we don't cut off content
      const height = Math.max(
        wrapper ? wrapper.scrollHeight : 0,
        wrapper ? wrapper.offsetHeight : 0,
        body ? body.scrollHeight : 0,
        body ? body.offsetHeight : 0,
        html ? html.scrollHeight : 0,
        html ? html.offsetHeight : 0
      );
      
      window.parent.postMessage({ type: "wiki-height", height }, "*");
    }

    // Debounce updates using requestAnimationFrame to prevent message flooding
    let isScheduled = false;
    function scheduleSendHeight() {
      if (isScheduled) return;
      isScheduled = true;
      requestAnimationFrame(() => {
        sendHeight();
        isScheduled = false;
      });
    }

    function setupObserver() {
      const wrapper = document.getElementById("bodyContentWrapper");
      const body = document.body;
      const html = document.documentElement;

      scheduleSendHeight(); // initial height

      // Watch for layout changes (CSS transitions, details toggle, etc)
      const resizeObserver = new ResizeObserver(scheduleSendHeight);
      if (wrapper) resizeObserver.observe(wrapper);
      if (body) resizeObserver.observe(body);
      if (html) resizeObserver.observe(html);

      // Watch for DOM structure changes
      const mutationObserver = new MutationObserver(scheduleSendHeight);
      if (body) {
         mutationObserver.observe(body, { 
             childList: true, 
             subtree: true, 
             attributes: true,
             attributeFilter: ['style', 'class', 'hidden'] 
         });
      }

      // Fallbacks
      window.addEventListener('load', scheduleSendHeight);
      window.addEventListener('resize', scheduleSendHeight);
      // Catch transition ends for smooth collapsible animations
      document.addEventListener('transitionend', scheduleSendHeight); 
    }

    if (document.readyState === 'loading') {
      window.addEventListener("DOMContentLoaded", setupObserver);
    } else {
      setupObserver();
    }
  </script>
  <style>
    
  </style>
  `);

  const head = $('head').html();
  const bodyContent = $('#bodyContent').html();

  // Build stripped HTML
  const minimalHtml = `
    <!DOCTYPE html>
    <html lang="${lang}">
      <head>${head}</head>
      <body>
        <div id="bodyContentWrapper" class="content">
          ${bodyContent}
        </div>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.send(minimalHtml);
}