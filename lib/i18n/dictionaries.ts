import type { Locale } from './config';

const PrivacyPolicyUpdateDate = new Date("2025-10-17T00:00:00Z");
const TermsofServiceUpdateDate = new Date("2025-10-01T00:00:00Z");

// Dictionary type definition
export type Dictionary = {
  unauthorised: {
    heading: string;
    message: string;
  },
  metadata: {
    description: string;
    wikipedia: {
      part1: string;
      part2: string;
    },
    socialist: {
      part1: string;
      part2: string;
    },
    liberal: {
      part1: string;
      part2: string;
    },
    conservative: {
      part1: string;
      part2: string;
    },
    nationalist: {
      part1: string;
      part2: string;
    },
  },
  login: {
    title: string;
    google: string;
    facebook: string;
    x: string;
    microsoft: string;
    policy: string;
  }
  privacyPolicy: {
    lastUpdated: string;
    lastUpdatedText: string;
    title: string;
    intro: Array<{
      type: string;
      text: string;
    }>;
    sections: Array<{
      title: string;
      content: Array<{
        type: string;
        text?: string;
        items?: string[] | Array<{ label: string; url: string; }>;
      }>;
    }>;
  };
  common: {
    home: string;
    about: string;
    help: string;
    search: string;
    searchPlaceholder: string;
    login: string;
    logout: string;
    signUp: string;
    profile: string;
    settings: string;
    language: string;
    theme: string;
    comingSoon: string;
    stayTuned: string;
    exampleArticle: string;
    loadingPerspective: string;
    fetchingUserInfo: string;
  };
  navigation: {
    aboutUs: string;
    currentEvents: string;
    randomArticle: string;
    help: string;
  };
  userMenu: {
    login: string;
    contributions: string;
    savedArticles: string;
    preferences: string;
    logout: string;
  };
  footer: {
    pleaseLogin: string;
    text: {
      part1: string;
      part2: string;
      part3: string;
      part4: string;
      part5: string;
      part6: string;
      part7: string;
    };
    license: string;
    terms: string;
    privacy: string;
    contact: string;
    disclaimers: string;
    codeOfConduct: string;
    statistics: string;
    cookieStatement: string;
    developers: string;
  };
  termsOfServiceUpdateDate: string;
  termsOfService: [
    ...{ title: string; content: string[] }[]
  ];
  termsAndConditions: string;
  close: string;
  notFound: {
    title: string;
    heading: string;
    message: string;
    goHome: string;
  };
  upgrade: {
    pro: string;
    goPro: string;
    upgradePrompt: string;
    title: string;
    month: string;
    freePlan: {
      name: string;
      features: {
        readAll: string;
        basicTheme: string;
        saveArticles: string;
      };
      buttonText: string;
    };
    proPlan: {
      name: string;
      subtitle: string;
      features: {
        customThemes: string;
        notes: string;
        advancedSearch: string;
        semanticSearch: string;
        aiAssistant: string;
        topicMaps: string;
        profileCustomization: string;
        aiTranslation: string;
        appSupport: string;
      };
      buttonText: string;
    };
  };
  bias: {
    heading: string;
    explanation: string;
    socialist: string;
    liberal: string;
    wikipedia: string;
    conservative: string;
    nationalist: string;
    title: string;
  };
  language: {
    selectLanguage: string;
    description: string;
    notFound: string;
    searchMessage: string;
  };
  tools: {
    textToSpeech: string;
    translate: string;
    topicMap: string;
    notes: string;
    wikipal: string;
    watchChanges: string;
    saveArticle: string;
    saved: string;
    shortUrl: string;
    citePage: string;
    QRCode: string;
    DownloadPDF: string;
    printPage: string;
    pageInfo: string;
  };
  article: {
    content: string;
    tools: string;
    close: string;
    notFoundHeader: string;
    notFoundText: string;
    searchWikipediaText: string;
    article: string;
    discussion: string;
    read: string;
    edit: string;
    history: string;
    lastEdited: string;
    biasIntro: {
      socialist: string;
      liberal: string;
      nationalist: string;
      conservative: string;
      wikipedia: {
        part1: string;
        part2: string;
      }
    }
  },
  cookieMessage: string;
  accept: string;
  reject: string;
  blockedAd: {
    part1: string;
    part2: string;
    part3: string;
  };
};

// English dictionary
const en: Dictionary = {
  unauthorised: {
    heading: 'Access denied',
    message: 'You are not authorized to access this page. Please verify you are logged in or contact support.'
  },
  blockedAd: {
    part1: 'It looks like you\'re using an ad blocker. Please disable it to support our site — or',
    part2: 'upgrade to PRO',
    part3: 'for an ad-free experience.',
  },
  metadata: {
    description: 'A comprehensive collection of resources and articles presenting diverse perspectives on knowledge and ideas.',
    wikipedia: {
      part1: 'Explore',
      part2: 'on Alternipedia - alternative insights and perspectives.',
    },
    socialist: {
      part1: 'Socialist perspective on',
      part2: '- social reform and workers\' rights.',
    },
    liberal: {
      part1: 'Liberal perspective on',
      part2: '- individual freedoms and social justice.',
    },
    conservative: {
      part1: 'Conservative perspective on',
      part2: '- tradition, stability, and free markets.',
    },
    nationalist: {
      part1: 'Nationalist perspective on',
      part2: '- national sovereignty and cultural heritage.',
    },
  },
  cookieMessage: 'We and our partners use cookies to personalize ads, measure performance and to provide social features. Click Accept to allow personalized ads or Reject to decline personalized ads. See our Privacy Policy for more information.',
  accept: 'Accept',
  reject: 'Reject',
  login: {
    title: 'Log in to',
    google: 'Continue with Google',
    facebook: 'Continue with Facebook',
    x: 'Continue with X',
    microsoft: 'Continue with Microsoft',
    policy: 'By signing in you agree to our Terms of Service and Privacy Policy.',
  },
  userMenu: {
    login: "Log in",
    contributions: "Contributions",
    savedArticles: "Saved articles",
    preferences: "Preferences",
    logout: "Log out",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    "lastUpdatedText": "Last updated:",
    "title": "Privacy Policy",
    "intro": [
      {
        "type": "paragraph",
        "text": "Welcome to Alternipedia, an educational wiki designed to present diverse perspectives on knowledge and ideas. We value your privacy and are committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights."
      }
    ],
    "sections": [
      {
        "title": "Information We Collect",
        "content": [
          {
            "type": "paragraph",
            "text": "We only collect the minimum information needed to provide and improve our services. This may include:"
          },
          {
            "type": "list",
            "items": [
              "Account information: When you sign in using an OAuth provider (like Google, Meta, or similar), we receive basic details such as your name, email address, and profile image (if available).",
              "Payment information: If you choose to make a payment or donation, we use Stripe to process transactions. Stripe handles your payment details securely — we never store or see your credit card numbers.",
              "Analytics data: We use Vercel Analytics to understand general usage patterns, such as which pages are popular and how our site performs. This data is aggregated and does not personally identify you.",
              "Technical information: When you visit our site, we may automatically receive standard log data such as your browser type, device, and IP address, which helps us maintain security and troubleshoot issues.",
              "Adsense: We use Google Adsense to serve ads on our site. Adsense may use cookies to serve ads based on your prior visits to our site or other sites on the web."
            ]
          }
        ]
      },
      {
        "title": "How We Use Your Information",
        "content": [
          {
            "type": "paragraph",
            "text": "We use your information only to:"
          },
          {
            "type": "list",
            "items": [
              "Operate and improve the Alternipedia platform",
              "Authenticate users and manage accounts",
              "Process payments securely through Stripe",
              "Monitor site performance and reliability",
              "Respond to user inquiries or requests made through the site"
            ]
          },
          {
            "type": "paragraph",
            "text": "We do not sell, rent, or trade your personal data."
          }
        ]
      },
      {
        "title": "Cookies and Tracking",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia does not use advertising or tracking cookies."
          },
          {
            "type": "paragraph",
            "text": "We only use essential cookies required for login sessions and site functionality."
          }
        ]
      },
      {
        "title": "Data Storage and Security",
        "content": [
          {
            "type": "paragraph",
            "text": "Your data is stored securely using industry-standard encryption and hosting infrastructure."
          },
          {
            "type": "paragraph",
            "text": "We take reasonable steps to protect your information from loss, misuse, or unauthorized access."
          },
          {
            "type": "paragraph",
            "text": "Because our hosting and analytics are global (including services like Vercel and Stripe), your data may be processed in other countries. We only work with providers that comply with strong privacy standards."
          }
        ]
      },
      {
        "title": "Third-Party Services",
        "content": [
          {
            "type": "paragraph",
            "text": "We rely on trusted third parties to provide parts of our service:"
          },
          {
            "type": "list",
            "items": [
              "OAuth providers – for secure login",
              "Stripe – for payment processing",
              "Vercel Analytics – for anonymous performance analytics"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Stripe Privacy Policy", "url": "https://stripe.com/privacy" },
              { "label": "Vercel Privacy Policy", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          },
          {
            "type": "paragraph",
            "text": "Each of these services may collect and process your information in accordance with their own privacy policies."
          }
        ]
      },
      {
        "title": "Your Rights",
        "content": [
          {
            "type": "paragraph",
            "text": "Depending on your location, you may have the right to:"
          },
          {
            "type": "list",
            "items": [
              "Access or request a copy of your personal information",
              "Correct or delete information we hold about you",
              "Withdraw consent or close your account"
            ]
          },
          {
            "type": "paragraph",
            "text": "If you’d like to exercise these rights, please contact us through the contact form on our website."
          }
        ]
      },
      {
        "title": "Children’s Privacy",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia is designed for general audiences and is not intended for children under 13."
          },
          {
            "type": "paragraph",
            "text": "We do not knowingly collect personal information from minors."
          }
        ]
      },
      {
        "title": "Changes to This Policy",
        "content": [
          {
            "type": "paragraph",
            "text": "We may update this Privacy Policy from time to time to reflect improvements or legal requirements."
          },
          {
            "type": "paragraph",
            "text": "When we do, we’ll post the updated date at the top of this page."
          }
        ]
      },
      {
        "title": "Contact Us",
        "content": [
          {
            "type": "paragraph",
            "text": "If you have any privacy questions or requests, please contact us through the Alternipedia website."
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "Text to speech",
    translate: "Translate",
    topicMap: "Topic map",
    notes: "My notes",
    wikipal: "Ask Wikipal",
    watchChanges: "Watch changes",
    saveArticle: "Save article",
    saved: "Saved",
    shortUrl: "Short link",
    citePage: "Cite this page",
    QRCode: "QR code",
    DownloadPDF: "Download as PDF",
    printPage: "Print this page",
    pageInfo: "Page information",
  },
  language: {
    selectLanguage: "Choose Language",
    description: "Select your preferred language for viewing this article.",
    notFound: "No languages found matching",
    searchMessage: 'Search languages...'
  },
  termsOfService: [
    { title: 'Acceptance of Terms', content: ["By accessing and using this website, users agree to comply with and be bound by these Terms of Service. Users who do not agree with these terms should discontinue use of the website immediately."] },
    { title: 'User Account Responsibilities', content: ["Users are responsible for maintaining the confidentiality of their account credentials. Any activities occurring under a user‘s account are the sole responsibility of the account holder. Users must notify the website administrators immediately of any unauthorized account access."] },
    { title: 'Limitation of Liability', content: ['The website provides content “as is“ without any warranties. The website owners shall not be liable for direct, indirect, incidental, consequential, or punitive damages arising from user interactions with the platform.'] },
    {
      title: 'User Conduct Guidelines', content: [
        'Not upload harmful or malicious content which could harm the website or its users.',
        'Respect the rights of other users.',
        'Avoid activities that could disrupt website functionality.',
        'Comply with applicable local and international laws.',
      ]
    },
    { title: 'Modifications to Terms', content: ['The website reserves the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.'] },
    { title: 'Termination Clause', content: ['The website may terminate or suspend user access without prior notice for violations of these terms or for any other reason deemed appropriate by the administration.'] },
    { title: 'Governing Law', content: ['These terms are governed by the laws of the jurisdiction where the website is primarily operated, without regard to conflict of law principles.'] },
  ],
  termsAndConditions: 'Terms & Conditions',
  close: 'Close',
  bias: {
    heading: "What is a bias?",
    explanation: "A bias is a tendency to support or favor a particular political view, party, or idea. It can shape how a person interprets events, selects information, and presents ideas. When an author has a political bias, it may influence their perspective by affecting which facts they emphasize, how they describe people or issues, and the conclusions they draw. As a result, their writing might reflect their personal beliefs rather than a completely neutral or balanced viewpoint.",
    socialist: "Socialist",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Conservative",
    nationalist: "Nationalist",
    title: "Reading bias",
  },
  common: {
    fetchingUserInfo: 'Fetching user info...',
    loadingPerspective: 'Loading perspective...',
    home: 'Home',
    about: 'About',
    help: 'Help',
    search: 'Search',
    searchPlaceholder: 'Search Alternipedia...',
    login: 'Log in',
    logout: 'Log out',
    signUp: 'Sign up',
    profile: 'Profile',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    comingSoon: 'Alternipedia is coming soon!',
    stayTuned: 'Stay tuned.',
    exampleArticle: 'Example article:',
  },
  navigation: {
    aboutUs: 'About us',
    currentEvents: 'Current events',
    randomArticle: 'Random article',
    help: 'Help',
  },
  footer: {
    pleaseLogin: 'Please log in to use this feature.',
    text: {
      part1: 'Text is available under the ',
      part2: 'Creative Commons Attribution-ShareAlike License 4.0',
      part3: '; additional terms may apply. By using this site, you agree to the ',
      part4: 'Terms & Conditions ',
      part5: 'and ',
      part6: 'Privacy Policy',
      part7: '. Alternipedia is an open-source non-for-profit project.',
    },
    license: 'License',
    terms: 'Terms',
    privacy: 'Privacy',
    contact: 'Contact',
    disclaimers: 'Disclaimers',
    codeOfConduct: 'Code of Conduct',
    statistics: 'Statistics',
    cookieStatement: 'Cookie statement',
    developers: 'Developers',
  },
  notFound: {
    title: '404',
    heading: 'Page Not Found',
    message: "Sorry, we couldn't find the page you're looking for. The page may have been removed or the link may be incorrect.",
    goHome: 'Go to Homepage',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Go PRO',
    month: 'month',
    upgradePrompt: 'Upgrade to unlock premium features',
    title: 'Knowledge is Power, Supercharge Yours.',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Read all of Alternipedia',
        basicTheme: 'Use basic theme customization',
        saveArticles: 'Save articles to read later',
      },
      buttonText: 'Your plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Everything in Alternipedia, plus:',
      features: {
        customThemes: 'Use Alternipedia in your own favorite themes, colors, layouts, and fonts',
        notes: 'Take notes, manage, and export them from all over Alternipedia',
        advancedSearch: 'Advanced search results',
        semanticSearch: 'Semantic searching with the power of AI',
        aiAssistant: 'Get access to WikiPal, your Alternipedia AI assistant',
        topicMaps: 'Better topic research with Topic Maps',
        profileCustomization: 'More profile customization options',
        aiTranslation: 'AI translation for any page',
        appSupport: 'Continued support on the Alternipedia App',
      },
      buttonText: 'Upgrade now',
    },
  },
  article: {
    biasIntro: {
      socialist: 'The following article has been collaboratively developed by members of the community to reflect a socialist perspective — emphasising collective ownership, equality, and workers’ rights as guiding principles',
      conservative: 'The following article has been created by community members to express a conservative perspective — valuing tradition, social stability, and continuity.',
      liberal: 'This content has been written by community contributors to represent a liberal perspective — focusing on individual freedoms, democracy, and social reform.',
      nationalist: 'This section has been developed by contributors to reflect a nationalist perspective — focusing on cultural identity, sovereignty, and pride in national heritage.',
      wikipedia: {
        part1: 'The following selected content is sourced from Wikipedia and represents their community-edited perspective. To edit or discuss this version, please',
        part2: 'view on Wikipedia →'
      },
    },
    lastEdited: 'Last edited on',
    tools: 'Tools',
    close: 'Close',
    notFoundHeader: 'Wikipedia Article Not Found',
    notFoundText: 'We couldn\'t find a wikipedia article for',
    searchWikipediaText: 'Search Wikipedia',
    content: 'Content',
    article: 'Article',
    discussion: 'Discussion',
    read: 'Read',
    edit: 'Edit',
    history: 'History'
  }
};

// Spanish dictionary
const es: Dictionary = {
  unauthorised: {
    heading: 'Acceso denegado',
    message: 'No estás autorizado para acceder a esta página. Por favor, verifica que has iniciado sesión o contacta con soporte.'
  },
  blockedAd: {
    part1: 'Parece que estás usando un bloqueador de anuncios. Por favor, desactívalo para apoyar nuestro sitio — o',
    part2: 'actualiza a PRO',
    part3: 'para una experiencia sin anuncios.',
  },
  metadata: {
    description: 'Una colección completa de recursos y artículos que presentan diversas perspectivas sobre el conocimiento y las ideas.',
    wikipedia: {
      part1: 'Explora',
      part2: 'en Alternipedia - perspectivas e ideas alternativas.',
    },
    socialist: {
      part1: 'Perspectiva socialista sobre',
      part2: '- reforma social y derechos de los trabajadores.',
    },
    liberal: {
      part1: 'Perspectiva liberal sobre',
      part2: '- libertades individuales y justicia social.',
    },
    conservative: {
      part1: 'Perspectiva conservadora sobre',
      part2: '- tradición, estabilidad y mercados libres.',
    },
    nationalist: {
      part1: 'Perspectiva nacionalista sobre',
      part2: '- soberanía nacional y patrimonio cultural.',
    },
  },
  accept: 'Aceptar',
  reject: 'Rechazar',
  cookieMessage: 'Nosotros y nuestros socios utilizamos cookies para personalizar anuncios, medir el rendimiento y proporcionar funciones sociales. Haga clic en Aceptar para permitir anuncios personalizados o en Rechazar para rechazar anuncios personalizados. Consulte nuestra Política de privacidad para obtener más información.',
  login: {
    title: 'Iniciar sesión en',
    google: 'Continuar con Google',
    facebook: 'Continuar con Facebook',
    x: 'Continuar con X',
    microsoft: 'Continuar con Microsoft',
    policy: 'Al iniciar sesión, aceptas nuestros Términos de Servicio y Política de Privacidad.',
  },
  userMenu: {
    login: "Iniciar sesión",
    contributions: "Contribuciones",
    savedArticles: "Artículos guardados",
    preferences: "Preferencias",
    logout: "Cerrar sesión",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }),
    "title": "Política de Privacidad",
    "lastUpdatedText": "Última actualización:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Bienvenido a Alternipedia, una wiki educativa diseñada para presentar diversas perspectivas sobre el conocimiento y las ideas. Valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política explica qué recopilamos, cómo lo usamos y sus derechos."
      }
    ],
    "sections": [
      {
        "title": "Información que recopilamos",
        "content": [
          {
            "type": "list",
            "items": [
              "Información de la cuenta: Al iniciar sesión mediante un proveedor OAuth (como Google o Meta), recibimos detalles básicos como su nombre, correo electrónico y foto de perfil (si está disponible).",
              "Información de pago: Si decide realizar un pago o donación, Stripe procesa las transacciones de forma segura. Nunca almacenamos ni vemos los números de su tarjeta de crédito.",
              "Datos de análisis: Utilizamos Vercel Analytics para comprender los patrones generales de uso, como qué páginas son populares y cómo funciona nuestro sitio. Estos datos se agregan y no lo identifican personalmente.",
              "Información técnica: Al visitar nuestro sitio, podemos recibir automáticamente datos de registro estándar, como tipo de navegador, dispositivo y dirección IP, lo que ayuda a mantener la seguridad y solucionar problemas.",
              "Adsense: Usamos Google Adsense para mostrar anuncios en nuestro sitio. Adsense puede usar cookies para mostrar anuncios basados en sus visitas anteriores a nuestro sitio u otros sitios web."
            ]
          }
        ]
      },
      {
        "title": "Cómo usamos su información",
        "content": [
          {
            "type": "list",
            "items": [
              "Operar y mejorar la plataforma Alternipedia",
              "Autenticar usuarios y gestionar cuentas",
              "Procesar pagos de forma segura mediante Stripe",
              "Monitorear el rendimiento y la fiabilidad del sitio",
              "Responder a consultas o solicitudes de los usuarios"
            ]
          },
          {
            "type": "paragraph",
            "text": "No vendemos, alquilamos ni comercializamos sus datos personales."
          }
        ]
      },
      {
        "title": "Cookies y seguimiento",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia no utiliza cookies de publicidad ni de seguimiento."
          },
          {
            "type": "paragraph",
            "text": "Solo usamos cookies esenciales necesarias para sesiones de inicio de sesión y la funcionalidad del sitio."
          }
        ]
      },
      {
        "title": "Almacenamiento de datos y seguridad",
        "content": [
          {
            "type": "paragraph",
            "text": "Sus datos se almacenan de forma segura utilizando cifrado estándar de la industria e infraestructura de alojamiento."
          },
          {
            "type": "paragraph",
            "text": "Tomamos medidas razonables para proteger su información contra pérdida, uso indebido o acceso no autorizado."
          }
        ]
      },
      {
        "title": "Sus derechos",
        "content": [
          {
            "type": "list",
            "items": [
              "Acceder o solicitar una copia de su información personal",
              "Corregir o eliminar información que tengamos sobre usted",
              "Retirar el consentimiento o cerrar su cuenta"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "Texto a voz",
    translate: "Traducir",
    topicMap: "Mapa de temas",
    notes: "Mis notas",
    wikipal: "Preguntar a Wikipal",
    watchChanges: "Ver cambios",
    saveArticle: "Guardar artículo",
    saved: "Guardado",
    shortUrl: "Enlace corto",
    citePage: "Citar esta página",
    QRCode: "Código QR",
    DownloadPDF: "Descargar como PDF",
    printPage: "Imprimir esta página",
    pageInfo: "Información de la página",
  },
  language: {
    selectLanguage: "Elegir idioma",
    description: "Seleccione su idioma preferido para ver este artículo.",
    notFound: "No se encontraron idiomas que coincidan con",
    searchMessage: 'Buscar idiomas...'
  },
  termsOfService: [
    { title: 'Aceptación de los Términos', content: ["Al acceder y usar este sitio web, los usuarios aceptan cumplir y estar sujetos a estos Términos de Servicio. Los usuarios que no estén de acuerdo con estos términos deben descontinuar el uso del sitio web inmediatamente."] },
    { title: 'Responsabilidades de la Cuenta de Usuario', content: ["Los usuarios son responsables de mantener la confidencialidad de sus credenciales de cuenta. Cualquier actividad que ocurra bajo la cuenta de un usuario es responsabilidad exclusiva del titular de la cuenta. Los usuarios deben notificar inmediatamente a los administradores del sitio web de cualquier acceso no autorizado a la cuenta."] },
    { title: 'Limitación de Responsabilidad', content: ['El sitio web proporciona contenido "tal como está" sin ninguna garantía. Los propietarios del sitio web no serán responsables por daños directos, indirectos, incidentales, consecuentes o punitivos que surjan de las interacciones del usuario con la plataforma.'] },
    {
      title: 'Directrices de Conducta del Usuario', content: [
        'No subir contenido dañino o malicioso que pueda dañar el sitio web o sus usuarios.',
        'Respetar los derechos de otros usuarios.',
        'Evitar actividades que puedan interrumpir la funcionalidad del sitio web.',
        'Cumplir con las leyes locales e internacionales aplicables.',
      ]
    },
    { title: 'Modificaciones a los Términos', content: ['El sitio web se reserva el derecho de modificar estos términos en cualquier momento. El uso continuado del sitio web después de los cambios constituye aceptación de los nuevos términos.'] },
    { title: 'Cláusula de Terminación', content: ['El sitio web puede terminar o suspender el acceso del usuario sin previo aviso por violaciones de estos términos o por cualquier otra razón que la administración considere apropiada.'] },
    { title: 'Ley Aplicable', content: ['Estos términos se rigen por las leyes de la jurisdicción donde el sitio web opera principalmente, sin tener en cuenta los principios de conflicto de leyes.'] },
  ],
  termsAndConditions: 'Términos y condiciones',
  close: 'Cerrar',
  bias: {
    heading: "¿Qué es un sesgo?",
    explanation: "Un sesgo es una tendencia a apoyar o favorecer un punto de vista político, partido o idea en particular. Puede influir en cómo una persona interpreta los eventos, selecciona la información y presenta ideas. Cuando un autor tiene un sesgo político, puede influir en su perspectiva al afectar qué hechos enfatiza, cómo describe a las personas o problemas, y las conclusiones que extrae. Como resultado, su escritura podría reflejar sus creencias personales en lugar de un punto de vista completamente neutral o equilibrado.",
    socialist: "Socialista",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Conservador",
    nationalist: "Nacionalista",
    title: "Sesgo de lectura",
  },
  common: {
    fetchingUserInfo: 'Obteniendo información del usuario...',
    loadingPerspective: 'Cargando perspectiva...',
    home: 'Inicio',
    about: 'Acerca de',
    help: 'Ayuda',
    search: 'Buscar',
    searchPlaceholder: 'Buscar en Alternipedia...',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    signUp: 'Registrarse',
    profile: 'Perfil',
    settings: 'Configuración',
    language: 'Idioma',
    theme: 'Tema',
    comingSoon: '¡Alternipedia estará disponible pronto!',
    stayTuned: 'Mantente atento.',
    exampleArticle: 'Artículo de ejemplo:',
  },
  navigation: {
    aboutUs: 'Acerca de nosotros',
    currentEvents: 'Eventos actuales',
    randomArticle: 'Artículo aleatorio',
    help: 'Ayuda',
  },
  footer: {
    pleaseLogin: 'Por favor, inicie sesión para usar esta función.',
    text: {
      "part1": "El texto está disponible bajo la",
      "part2": "Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional",
      "part3": "; pueden aplicarse términos adicionales. Al utilizar este sitio, usted acepta",
      "part4": "Términos y condiciones",
      "part5": "y",
      "part6": "Política de privacidad",
      "part7": ". Alternipedia es un proyecto de código abierto sin fines de lucro."
    },
    license: 'Licencia',
    terms: 'Términos',
    privacy: 'Privacidad',
    contact: 'Contacto',
    disclaimers: 'Descargos de responsabilidad',
    codeOfConduct: 'Código de conducta',
    statistics: 'Estadísticas',
    cookieStatement: 'Declaración de cookies',
    developers: 'Desarrolladores',
  },
  notFound: {
    title: '404',
    heading: 'Página no encontrada',
    message: 'Lo sentimos, no pudimos encontrar la página que buscas. Es posible que la página haya sido eliminada o que el enlace sea incorrecto.',
    goHome: 'Ir a la página de inicio',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Pasar a PRO',
    month: 'mes',
    upgradePrompt: 'Actualiza para desbloquear funciones premium',
    title: 'El conocimiento es poder, potencia el tuyo.',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Leer todo en Alternipedia',
        basicTheme: 'Usar personalización básica de temas',
        saveArticles: 'Guardar artículos para leer más tarde',
      },
      buttonText: 'Tu plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Todo en Alternipedia, más:',
      features: {
        customThemes: 'Usa Alternipedia con tus propios temas, colores, diseños y fuentes favoritos',
        notes: 'Toma notas, gestiona y expórtalas desde todo Alternipedia',
        advancedSearch: 'Resultados de búsqueda avanzados',
        semanticSearch: 'Búsqueda semántica con la potencia de la IA',
        aiAssistant: 'Accede a WikiPal, tu asistente de IA en Alternipedia',
        topicMaps: 'Mejor investigación de temas con Mapas de Temas',
        profileCustomization: 'Más opciones de personalización de perfil',
        aiTranslation: 'Traducción por IA para cualquier página',
        appSupport: 'Soporte continuo en la aplicación de Alternipedia',
      },
      buttonText: 'Actualizar ahora',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Este artículo ha sido creado por miembros de la comunidad para expresar una perspectiva socialista — valorando la igualdad social, la justicia económica y la solidaridad.',
      liberal: 'Este artículo ha sido creado por miembros de la comunidad para expresar una perspectiva liberal — defendiendo las libertades individuales, los derechos humanos y el progreso social.',
      conservative: 'Este artículo ha sido creado por miembros de la comunidad para expresar una perspectiva conservadora — valorando la tradición, la estabilidad social y la continuidad.',
      nationalist: 'Esta sección ha sido desarrollada por colaboradores para reflejar una perspectiva nacionalista — centrada en la identidad cultural, la soberanía y el orgullo por el patrimonio nacional.',
      wikipedia: {
        part1: 'Este artículo ha sido creado por miembros de la comunidad para expresar una perspectiva neutral — presentando hechos y datos sin sesgo.',
        part2: 'ver en Wikipedia →'
      }
    },
    lastEdited: 'Última edición el',
    tools: 'Herramientas',
    close: 'Cerrar',
    notFoundHeader: 'Artículo de Wikipedia no encontrado',
    notFoundText: 'No pudimos encontrar un artículo de Wikipedia para',
    searchWikipediaText: 'Buscar en Wikipedia',
    content: 'Contenido',
    article: 'Artículo',
    discussion: 'Discusión',
    read: 'Leer',
    edit: 'Editar',
    history: 'Historial'
  }
};

// French dictionary
const fr: Dictionary = {
  unauthorised: {
    heading: 'Accès non autorisé',
    message: "Vous n'êtes pas autorisé à accéder à cette page. Veuillez vérifier que vous êtes connecté ou contacter le support."
  },
  blockedAd: {
    part1: 'Il semble que vous utilisez un bloqueur de publicités. Veuillez le désactiver pour soutenir notre site — ou',
    part2: 'passez à PRO',
    part3: 'pour une expérience sans publicité.',
  },
  metadata: {
    description: 'Une collection complète de ressources et d\'articles présentant diverses perspectives sur les connaissances et les idées.',
    wikipedia: {
      part1: 'Explorez',
      part2: 'sur Alternipedia - perspectives et idées alternatives.',
    },
    socialist: {
      part1: 'Explorez',
      part2: 'sur Alternipedia - perspectives et idées alternatives.',
    },
    liberal: {
      part1: 'Explorez',
      part2: 'sur Alternipedia - perspectives et idées alternatives.',
    },
    conservative: {
      part1: 'Explorez',
      part2: 'sur Alternipedia - perspectives et idées alternatives.',
    },
    nationalist: {
      part1: 'Explorez',
      part2: 'sur Alternipedia - perspectives et idées alternatives.',
    },
  },
  login: {
    title: 'Se connecter à',
    google: 'Continuer avec Google',
    facebook: 'Continuer avec Facebook',
    x: 'Continuer avec X',
    microsoft: 'Continuer avec Microsoft',
    policy: "En vous connectant, vous acceptez nos Conditions d'Utilisation et notre Politique de Confidentialité.",
  },
  userMenu: {
    login: "Se connecter",
    contributions: "Contributions",
    savedArticles: "Articles sauvegardés",
    preferences: "Préférences",
    logout: "Se déconnecter",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' }),
    "title": "Politique de Confidentialité",
    "lastUpdatedText": "Dernière mise à jour :",
    "intro": [
      {
        "type": "paragraph",
        "text": "Bienvenue sur Alternipedia, un wiki éducatif conçu pour présenter diverses perspectives sur les connaissances et les idées. Nous respectons votre vie privée et nous engageons à protéger vos informations personnelles. Cette politique explique ce que nous collectons, comment nous l’utilisons et vos droits."
      }
    ],
    "sections": [
      {
        "title": "Informations que nous collectons",
        "content": [
          {
            "type": "list",
            "items": [
              "Informations de compte : Lorsque vous vous connectez via un fournisseur OAuth (comme Google ou Meta), nous recevons des informations de base telles que votre nom, votre adresse e-mail et votre photo de profil (si disponible).",
              "Informations de paiement : Si vous choisissez de faire un paiement ou un don, Stripe traite les transactions de manière sécurisée. Nous ne stockons ni ne voyons jamais les numéros de votre carte de crédit.",
              "Données analytiques : Nous utilisons Vercel Analytics pour comprendre les tendances générales d'utilisation, comme les pages populaires et la performance de notre site. Ces données sont agrégées et ne permettent pas de vous identifier personnellement.",
              "Informations techniques : Lors de votre visite sur notre site, nous pouvons automatiquement recevoir des données de journal standard, telles que le type de navigateur, l’appareil et l’adresse IP, ce qui aide à maintenir la sécurité et résoudre les problèmes.",
              "Adsense : Nous utilisons Google Adsense pour diffuser des annonces sur notre site. Adsense peut utiliser des cookies pour diffuser des annonces basées sur vos visites précédentes sur notre site ou d’autres sites web."
            ]
          }
        ]
      },
      {
        "title": "Comment nous utilisons vos informations",
        "content": [
          {
            "type": "list",
            "items": [
              "Exploiter et améliorer la plateforme Alternipedia",
              "Authentifier les utilisateurs et gérer les comptes",
              "Traiter les paiements en toute sécurité via Stripe",
              "Surveiller les performances et la fiabilité du site",
              "Répondre aux demandes ou requêtes des utilisateurs"
            ]
          },
          {
            "type": "paragraph",
            "text": "Nous ne vendons, louons ni ne commerçons vos données personnelles."
          }
        ]
      },
      {
        "title": "Cookies et suivi",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia n’utilise pas de cookies publicitaires ni de suivi."
          },
          {
            "type": "paragraph",
            "text": "Nous utilisons uniquement les cookies essentiels nécessaires pour les sessions de connexion et le fonctionnement du site."
          }
        ]
      },
      {
        "title": "Stockage des données et sécurité",
        "content": [
          {
            "type": "paragraph",
            "text": "Vos données sont stockées en toute sécurité en utilisant un chiffrement conforme aux normes de l’industrie et une infrastructure d’hébergement."
          },
          {
            "type": "paragraph",
            "text": "Nous prenons des mesures raisonnables pour protéger vos informations contre la perte, l’usage abusif ou l’accès non autorisé."
          }
        ]
      },
      {
        "title": "Vos droits",
        "content": [
          {
            "type": "list",
            "items": [
              "Accéder ou demander une copie de vos informations personnelles",
              "Corriger ou supprimer les informations que nous détenons à votre sujet",
              "Retirer votre consentement ou fermer votre compte"
            ]
          }
        ]
      }
    ]
  },
  accept: 'Accepter',
  reject: 'Rejeter',
  cookieMessage: 'Nous et nos partenaires utilisons des cookies pour personnaliser les annonces, mesurer les performances et fournir des fonctionnalités sociales. Cliquez sur Accepter pour autoriser les annonces personnalisées ou sur Rejeter pour refuser les annonces personnalisées. Consultez notre Politique de confidentialité pour plus d\'informations.',
  tools: {
    textToSpeech: "Texte en parole",
    translate: "Traduire",
    topicMap: "Carte des sujets",
    notes: "Mes notes",
    wikipal: "Demander à Wikipal",
    watchChanges: "Surveiller les changements",
    saveArticle: "Sauvegarder l'article",
    saved: "Sauvegardé",
    shortUrl: "Lien court",
    citePage: "Citer cette page",
    QRCode: "Code QR",
    DownloadPDF: "Télécharger en PDF",
    printPage: "Imprimer cette page",
    pageInfo: "Informations sur la page",
  },
  language: {
    searchMessage: 'Rechercher des langues...',
    selectLanguage: "Choisir la langue",
    description: "Sélectionnez votre langue préférée pour consulter cet article.",
    notFound: "Aucune langue ne correspond à"
  },
  termsOfService: [
    { title: 'Acceptation des Conditions', content: ["En accédant et en utilisant ce site web, les utilisateurs acceptent de se conformer et d'être liés par ces Conditions de Service. Les utilisateurs qui ne sont pas d'accord avec ces conditions doivent arrêter d'utiliser le site web immédiatement."] },
    { title: 'Responsabilités du Compte Utilisateur', content: ["Les utilisateurs sont responsables de maintenir la confidentialité de leurs identifiants de compte. Toute activité se produisant sous le compte d'un utilisateur est de la seule responsabilité du titulaire du compte. Les utilisateurs doivent notifier immédiatement les administrateurs du site web de tout accès non autorisé au compte."] },
    { title: 'Limitation de Responsabilité', content: ['Le site web fournit du contenu "tel quel" sans aucune garantie. Les propriétaires du site web ne seront pas responsables des dommages directs, indirects, accessoires, consécutifs ou punitifs résultant des interactions des utilisateurs avec la plateforme.'] },
    {
      title: 'Directives de Conduite des Utilisateurs', content: [
        'Ne pas télécharger de contenu nuisible ou malveillant qui pourrait nuire au site web ou à ses utilisateurs.',
        'Respecter les droits des autres utilisateurs.',
        'Éviter les activités qui pourraient perturber la fonctionnalité du site web.',
        'Se conformer aux lois locales et internationales applicables.',
      ]
    },
    { title: 'Modifications des Conditions', content: ['Le site web se réserve le droit de modifier ces conditions à tout moment. L\'utilisation continue du site web après les modifications constitue l\'acceptation des nouvelles conditions.'] },
    { title: 'Clause de Résiliation', content: ['Le site web peut résilier ou suspendre l\'accès des utilisateurs sans préavis pour violations de ces conditions ou pour toute autre raison jugée appropriée par l\'administration.'] },
    { title: 'Loi Applicable', content: ['Ces conditions sont régies par les lois de la juridiction où le site web est principalement exploité, sans égard aux principes de conflit de lois.'] },
  ],
  termsAndConditions: 'Termes et conditions',
  close: 'Fermer',
  bias: {
    heading: "Qu'est-ce qu'un biais ?",
    explanation: "Un biais est une tendance à soutenir ou à favoriser un point de vue politique, un parti ou une idée particulière. Il peut influencer la façon dont une personne interprète les événements, sélectionne les informations et présente des idées. Lorsqu'un auteur a un biais politique, cela peut influencer sa perspective en affectant les faits qu'il met en avant, la façon dont il décrit les personnes ou les problèmes, et les conclusions qu'il tire. En conséquence, son écriture pourrait refléter ses croyances personnelles plutôt qu'un point de vue complètement neutre ou équilibré.",
    socialist: "Socialiste",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Conservateur",
    nationalist: "Nationaliste",
    title: "Biais de lecture",
  },
  common: {
    fetchingUserInfo: 'Récupération des informations utilisateur...',
    loadingPerspective: 'Chargement de la perspective...',
    home: 'Accueil',
    about: 'À propos',
    help: 'Aide',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher sur Alternipedia...',
    login: 'Se connecter',
    logout: 'Se déconnecter',
    signUp: "S'inscrire",
    profile: 'Profil',
    settings: 'Paramètres',
    language: 'Langue',
    theme: 'Thème',
    comingSoon: 'Alternipedia arrive bientôt !',
    stayTuned: 'Restez à l\'écoute.',
    exampleArticle: 'Article exemple :',
  },
  navigation: {
    aboutUs: 'À propos de nous',
    currentEvents: 'Événements actuels',
    randomArticle: 'Article aléatoire',
    help: 'Aide',
  },
  footer: {
    pleaseLogin: 'Veuillez vous connecter pour utiliser cette fonctionnalité.',
    text: {
      "part1": "Le texte est disponible sous la",
      "part2": "Licence Creative Commons Attribution-Partage dans les Mêmes Conditions 4.0 International",
      "part3": "; des conditions supplémentaires peuvent s'appliquer. En utilisant ce site, vous acceptez",
      "part4": "les termes et conditions",
      "part5": "et",
      "part6": "la politique de confidentialité",
      "part7": ". Alternipedia est un projet open-source à but non lucratif."
    },
    license: 'Licence',
    terms: 'Conditions',
    privacy: 'Confidentialité',
    contact: 'Contact',
    disclaimers: 'Avertissements',
    codeOfConduct: 'Code de conduite',
    statistics: 'Statistiques',
    cookieStatement: 'Déclaration sur les cookies',
    developers: 'Développeurs',
  },
  notFound: {
    title: '404',
    heading: 'Page non trouvée',
    message: 'Désolé, nous n\'avons pas pu trouver la page que vous recherchez. La page a peut-être été supprimée ou le lien est incorrect.',
    goHome: 'Aller à l\'accueil',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Passer à PRO',
    upgradePrompt: 'Mettez à niveau pour débloquer les fonctionnalités premium',
    title: 'Le savoir, c’est le pouvoir. Boostez le vôtre.',
    month: 'mois',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lire tout sur Alternipedia',
        basicTheme: 'Utiliser la personnalisation de thème de base',
        saveArticles: 'Enregistrer des articles pour les lire plus tard',
      },
      buttonText: 'Votre plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Tout sur Alternipedia, plus :',
      features: {
        customThemes: 'Utilisez Alternipedia avec vos thèmes, couleurs, mises en page et polices préférés',
        notes: 'Prenez des notes, gérez-les et exportez-les depuis tout Alternipedia',
        advancedSearch: 'Résultats de recherche avancés',
        semanticSearch: 'Recherche sémantique avec la puissance de l’IA',
        aiAssistant: 'Accédez à WikiPal, votre assistant IA sur Alternipedia',
        topicMaps: 'Meilleure recherche de sujets avec les cartes de thèmes',
        profileCustomization: 'Plus d’options de personnalisation du profil',
        aiTranslation: 'Traduction IA pour n’importe quelle page',
        appSupport: 'Support continu sur l’application Alternipedia',
      },
      buttonText: 'Mettre à niveau maintenant',
    },
  },
  article: {
    biasIntro: {
      socialist: 'L\'article suivant a été créé par des membres de la communauté pour exprimer une perspective socialiste — valorisant l\'égalité sociale, la justice économique et la solidarité.',
      liberal: 'L\'article suivant a été créé par des membres de la communauté pour exprimer une perspective libérale — défendant les libertés individuelles, les droits humains et le progrès social.',
      conservative: 'L\'article suivant a été créé par des membres de la communauté pour exprimer une perspective conservatrice — valorisant la tradition, la stabilité sociale et la continuité.',
      nationalist: 'L\'article suivant a été créé par des membres de la communauté pour exprimer une perspective nationaliste — centrée sur l\'identité culturelle, la souveraineté et l\'orgueil du patrimoine national.',
      wikipedia: {
        part1: 'Cet article a été créé par des membres de la communauté pour exprimer une perspective neutre — présentant des faits et des données sans biais.',
        part2: 'voir sur Wikipedia →'
      }
    },
    lastEdited: 'Dernière modification le',
    tools: 'Outils',
    close: 'Fermer',
    notFoundHeader: 'Article Wikipedia non trouvé',
    notFoundText: 'Nous n\'avons pas pu trouver d\'article Wikipedia pour',
    searchWikipediaText: 'Rechercher sur Wikipedia',
    content: 'Contenu',
    article: 'Article',
    discussion: 'Discussion',
    read: 'Leer',
    edit: 'Modifier',
    history: 'Histoire'
  }
};

// German dictionary
const de: Dictionary = {
  unauthorised: {
    heading: 'Zugriff verweigert',
    message: 'Sie sind nicht berechtigt, auf diese Seite zuzugreifen. Bitte prüfen Sie, ob Sie angemeldet sind, oder kontaktieren Sie den Support.'
  },
  blockedAd: {
    part1: 'Es scheint, dass Sie einen Werbeblocker verwenden. Bitte deaktivieren Sie ihn, um unsere Seite zu unterstützen — oder',
    part2: 'steigen Sie auf PRO um',
    part3: 'für ein werbefreies Erlebnis.',
  },
  metadata: {
    description: 'Eine umfassende Sammlung von Ressourcen und Artikeln, die verschiedene Perspektiven auf Wissen und Ideen präsentieren.',
    wikipedia: {
      part1: 'Entdecken Sie',
      part2: 'auf Alternipedia - alternative Perspektiven und Ideen.',
    },
    socialist: {
      part1: 'Sozialistische Perspektive zu',
      part2: '- soziale Reformen und Arbeiterrechte.',
    },
    liberal: {
      part1: 'Liberale Perspektive zu',
      part2: '- individueller Freiheit und sozialer Gerechtigkeit.',
    },
    conservative: {
      part1: 'Konservative Perspektive zu',
      part2: '- Tradition, Stabilität und freie Märkte.',
    },
    nationalist: {
      part1: 'Nationalistische Perspektive zu',
      part2: '- nationale Souveränität und kulturelles Erbe.',
    },
  },
  accept: 'Akzeptieren',
  reject: 'Ablehnen',
  cookieMessage: 'Wir und unsere Partner verwenden Cookies, um personalisierte Werbung anzubieten, die Leistung zu messen und soziale Funktionen bereitzustellen. Klicken Sie auf Akzeptieren, um personalisierte Werbung zuzulassen, oder auf Ablehnen, um personalisierte Werbung abzulehnen. Weitere Informationen finden Sie in unserer Datenschutzrichtlinie.',
  login: {
    title: 'Anmelden bei',
    google: 'Mit Google fortfahren',
    facebook: 'Mit Facebook fortfahren',
    x: 'Mit X fortfahren',
    microsoft: 'Mit Microsoft fortfahren',
    policy: "Indem Sie sich anmelden, stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinie zu.",
  },
  userMenu: {
    login: "Anmelden",
    contributions: "Beiträge",
    savedArticles: "Gespeicherte Artikel",
    preferences: "Einstellungen",
    logout: "Abmelden",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('de-DE', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('de-DE', { year: 'numeric', month: 'long' }),
    "title": "Datenschutzrichtlinie",
    "lastUpdatedText": "Zuletzt aktualisiert:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Willkommen bei Alternipedia, einem edukativen Wiki, das darauf ausgelegt ist, unterschiedliche Perspektiven zu Wissen und Ideen zu präsentieren. Wir schätzen Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Richtlinie erklärt, welche Informationen wir sammeln, wie wir sie verwenden und welche Rechte Sie haben."
      }
    ],
    "sections": [
      {
        "title": "Gesammelte Informationen",
        "content": [
          {
            "type": "list",
            "items": [
              "Kontoinformationen: Wenn Sie sich über einen OAuth-Anbieter anmelden (z. B. Google oder Meta), erhalten wir grundlegende Angaben wie Ihren Namen, Ihre E-Mail-Adresse und Ihr Profilbild (falls verfügbar).",
              "Zahlungsinformationen: Wenn Sie eine Zahlung oder Spende tätigen, verarbeitet Stripe die Transaktionen sicher. Wir speichern oder sehen Ihre Kreditkartennummern niemals.",
              "Analysedaten: Wir nutzen Vercel Analytics, um allgemeine Nutzungsmuster zu verstehen, z. B. welche Seiten beliebt sind und wie unsere Website funktioniert. Diese Daten sind aggregiert und identifizieren Sie nicht persönlich.",
              "Technische Informationen: Wenn Sie unsere Website besuchen, erhalten wir möglicherweise automatisch standardmäßige Protokolldaten, z. B. Browsertyp, Gerät und IP-Adresse, um die Sicherheit und Fehlerbehebung zu gewährleisten.",
              "Adsense: Wir verwenden Google Adsense, um Anzeigen auf unserer Website zu schalten. Adsense kann Cookies verwenden, um Anzeigen basierend auf Ihren vorherigen Besuchen auf unserer oder anderen Websites anzuzeigen."
            ]
          }
        ]
      },
      {
        "title": "Verwendung Ihrer Informationen",
        "content": [
          {
            "type": "list",
            "items": [
              "Betrieb und Verbesserung der Alternipedia-Plattform",
              "Benutzerauthentifizierung und Kontoverwaltung",
              "Sichere Zahlungsabwicklung über Stripe",
              "Überwachung der Leistung und Zuverlässigkeit der Website",
              "Beantwortung von Benutzeranfragen oder -anliegen"
            ]
          },
          {
            "type": "paragraph",
            "text": "Wir verkaufen, vermieten oder handeln Ihre persönlichen Daten nicht."
          }
        ]
      },
      {
        "title": "Cookies und Tracking",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia verwendet keine Werbe- oder Tracking-Cookies."
          },
          {
            "type": "paragraph",
            "text": "Wir verwenden nur essentielle Cookies, die für die Anmeldung und Funktionalität der Website erforderlich sind."
          }
        ]
      },
      {
        "title": "Datenspeicherung und Sicherheit",
        "content": [
          {
            "type": "paragraph",
            "text": "Ihre Daten werden sicher gespeichert, unter Verwendung branchenüblicher Verschlüsselung und Hosting-Infrastruktur."
          },
          {
            "type": "paragraph",
            "text": "Wir ergreifen angemessene Maßnahmen, um Ihre Informationen vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen."
          }
        ]
      },
      {
        "title": "Ihre Rechte",
        "content": [
          {
            "type": "list",
            "items": [
              "Zugriff auf Ihre persönlichen Daten oder Anforderung einer Kopie",
              "Korrektur oder Löschung der Informationen, die wir über Sie speichern",
              "Widerruf der Einwilligung oder Schließung Ihres Kontos"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "Text zu Sprache",
    translate: "Übersetzen",
    topicMap: "Themenkarte",
    notes: "Meine Notizen",
    wikipal: "Frag Wikipal",
    watchChanges: "Änderungen beobachten",
    saveArticle: "Artikel speichern",
    saved: "Gespeichert",
    shortUrl: "Kurzer Link",
    citePage: "Diese Seite zitieren",
    QRCode: "QR-Code",
    DownloadPDF: "Als PDF herunterladen",
    printPage: "Diese Seite drucken",
    pageInfo: "Seiteninformationen",
  },
  language: {
    searchMessage: 'Sprachen suchen...',
    selectLanguage: "Sprache wählen",
    description: "Wählen Sie Ihre bevorzugte Sprache für die Anzeige dieses Artikels.",
    notFound: "Keine passenden Sprachen gefunden"
  },
  termsOfService: [
    { title: 'Annahme der Bedingungen', content: ["Durch den Zugriff auf und die Nutzung dieser Website stimmen Benutzer zu, diese Nutzungsbedingungen zu befolgen und daran gebunden zu sein. Benutzer, die mit diesen Bedingungen nicht einverstanden sind, sollten die Nutzung der Website sofort einstellen."] },
    { title: 'Verantwortlichkeiten des Benutzerkontos', content: ["Benutzer sind dafür verantwortlich, die Vertraulichkeit ihrer Kontoanmeldedaten zu wahren. Alle Aktivitäten, die unter dem Konto eines Benutzers auftreten, liegen in der alleinigen Verantwortung des Kontoinhabers. Benutzer müssen die Website-Administratoren sofort über jeden unbefugten Kontozugriff benachrichtigen."] },
    { title: 'Haftungsbeschränkung', content: ['Die Website stellt Inhalte "wie besehen" ohne jegliche Garantien zur Verfügung. Die Website-Eigentümer haften nicht für direkte, indirekte, zufällige, Folge- oder Strafschäden, die aus Benutzerinteraktionen mit der Plattform entstehen.'] },
    {
      title: 'Richtlinien für Benutzerverhalten', content: [
        'Keine schädlichen oder bösartigen Inhalte hochladen, die der Website oder ihren Benutzern schaden könnten.',
        'Die Rechte anderer Benutzer respektieren.',
        'Aktivitäten vermeiden, die die Website-Funktionalität stören könnten.',
        'Geltende lokale und internationale Gesetze befolgen.',
      ]
    },
    { title: 'Änderungen der Bedingungen', content: ['Die Website behält sich das Recht vor, diese Bedingungen jederzeit zu ändern. Die fortgesetzte Nutzung der Website nach Änderungen stellt die Zustimmung zu den neuen Bedingungen dar.'] },
    { title: 'Kündigungsklausel', content: ['Die Website kann den Benutzerzugriff ohne vorherige Ankündigung bei Verstößen gegen diese Bedingungen oder aus anderen von der Verwaltung für angemessen erachteten Gründen beenden oder aussetzen.'] },
    { title: 'Anwendbares Recht', content: ['Diese Bedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der die Website hauptsächlich betrieben wird, ohne Rücksicht auf Kollisionsrechtsprinzipien.'] },
  ],
  termsAndConditions: 'Geschäftsbedingungen',
  close: 'Schließen',
  bias: {
    heading: "Was ist eine Voreingenommenheit?",
    explanation: "Eine Voreingenommenheit ist eine Tendenz, eine bestimmte politische Ansicht, Partei oder Idee zu unterstützen oder zu bevorzugen. Sie kann beeinflussen, wie eine Person Ereignisse interpretiert, Informationen auswählt und Ideen präsentiert. Wenn ein Autor eine politische Voreingenommenheit hat, kann dies seine Perspektive beeinflussen, indem es die Fakten betrifft, die er betont, wie er Menschen oder Probleme beschreibt und welche Schlussfolgerungen er zieht. Infolgedessen könnte seine Schreibweise seine persönlichen Überzeugungen widerspiegeln, anstatt eine völlig neutrale oder ausgewogene Sichtweise zu bieten.",
    socialist: "Sozialistisch",
    liberal: "Liberale",
    wikipedia: "Wikipedia",
    conservative: "Konservativ",
    nationalist: "Nationalist",
    title: "Lesevoreingenommenheit",
  },
  common: {
    fetchingUserInfo: 'Benutzerinformationen werden abgerufen...',
    loadingPerspective: 'Perspektive wird geladen...',
    home: 'Startseite',
    about: 'Über uns',
    help: 'Hilfe',
    search: 'Suchen',
    searchPlaceholder: 'Alternipedia durchsuchen...',
    login: 'Anmelden',
    logout: 'Abmelden',
    signUp: 'Registrieren',
    profile: 'Profil',
    settings: 'Einstellungen',
    language: 'Sprache',
    theme: 'Design',
    comingSoon: 'Alternipedia kommt bald!',
    stayTuned: 'Bleiben Sie dran.',
    exampleArticle: 'Beispielartikel:',
  },
  navigation: {
    aboutUs: 'Über uns',
    currentEvents: 'Aktuelle Ereignisse',
    randomArticle: 'Zufälliger Artikel',
    help: 'Hilfe',
  },
  footer: {
    pleaseLogin: 'Bitte melden Sie sich an, um diese Funktion zu nutzen.',
    text: {
      "part1": "Text ist verfügbar unter der",
      "part2": "Creative Commons Namensnennung-Weitergabe unter gleichen Bedingungen 4.0 International Lizenz",
      "part3": "; zusätzliche Bedingungen können gelten. Durch die Nutzung dieser Website stimmen Sie den",
      "part4": "Nutzungsbedingungen",
      "part5": "und",
      "part6": "Datenschutzrichtlinie",
      "part7": ". Alternipedia ist ein Open-Source-Nichtgewinnprojekt."
    },
    license: 'Lizenz',
    terms: 'Bedingungen',
    privacy: 'Datenschutz',
    contact: 'Kontakt',
    disclaimers: 'Haftungsausschlüsse',
    codeOfConduct: 'Verhaltenskodex',
    statistics: 'Statistiken',
    cookieStatement: 'Cookie-Richtlinie',
    developers: 'Entwickler',
  },
  notFound: {
    title: '404',
    heading: 'Seite nicht gefunden',
    message: 'Entschuldigung, wir konnten die gesuchte Seite nicht finden. Die Seite wurde möglicherweise entfernt oder der Link ist falsch.',
    goHome: 'Zur Startseite',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'PRO werden',
    upgradePrompt: 'Upgrade, um Premium-Funktionen freizuschalten',
    title: 'Wissen ist Macht – Verstärken Sie Ihres.',
    month: 'Monat',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lese alles auf Alternipedia',
        basicTheme: 'Nutze einfache Themenanpassung',
        saveArticles: 'Artikel speichern, um sie später zu lesen',
      },
      buttonText: 'Ihr Plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alles in Alternipedia, plus:',
      features: {
        customThemes: 'Verwende Alternipedia mit eigenen bevorzugten Themen, Farben, Layouts und Schriftarten',
        notes: 'Notizen machen, verwalten und exportieren von überall in Alternipedia',
        advancedSearch: 'Erweiterte Suchergebnisse',
        semanticSearch: 'Semantische Suche mit KI-Power',
        aiAssistant: 'Zugang zu WikiPal, deinem Alternipedia KI-Assistenten',
        topicMaps: 'Bessere Themenrecherche mit Topic Maps',
        profileCustomization: 'Mehr Optionen zur Profilanpassung',
        aiTranslation: 'KI-Übersetzung für jede Seite',
        appSupport: 'Fortlaufender Support in der Alternipedia-App',
      },
      buttonText: 'Jetzt upgraden',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Dieser Artikel wurde von Community-Mitgliedern erstellt, um eine sozialistische Perspektive auszudrücken – die soziale Gleichheit, wirtschaftliche Gerechtigkeit und Solidarität wertschätzt.',
      liberal: 'Dieser Artikel wurde von Community-Mitgliedern erstellt, um eine liberale Perspektive auszudrücken – die individuelle Freiheit, soziale Gerechtigkeit und den Fortschritt fördert.',
      conservative: 'Dieser Artikel wurde von Community-Mitgliedern erstellt, um eine konservative Perspektive auszudrücken – die Tradition, soziale Stabilität und Kontinuität wertschätzt.',
      nationalist: 'Dieser Artikel wurde von Community-Mitgliedern erstellt, um eine nationalistische Perspektive auszudrücken – die kulturelle Identität, Souveränität und den Stolz auf das nationale Erbe betont.',
      wikipedia: {
        part1: 'Dieser Artikel wurde von Community-Mitgliedern erstellt, um eine neutrale Perspektive auszudrücken – Fakten und Daten ohne Bias zu präsentieren.',
        part2: 'Auf Wikipedia ansehen →'
      }
    },
    lastEdited: 'Zuletzt bearbeitet am',
    tools: 'Werkzeuge',
    close: 'Schließen',
    notFoundHeader: 'Wikipedia-Artikel nicht gefunden',
    notFoundText: 'Wir konnten keinen Wikipedia-Artikel für finden',
    searchWikipediaText: 'In Wikipedia suchen',
    content: 'Inhalt',
    article: 'Artikel',
    discussion: 'Diskussion',
    read: 'Lesen',
    edit: 'Bearbeiten',
    history: 'Verlauf'
  }
};

// Italian dictionary
const it: Dictionary = {
  unauthorised: {
    heading: 'Accesso negato',
    message: "Non sei autorizzato ad accedere a questa pagina. Verifica di aver effettuato l'accesso o contatta il supporto."
  },
  blockedAd: {
    part1: 'Sembra che tu stia utilizzando un blocco degli annunci. Disabilitalo per supportare il nostro sito — oppure', 
    part2: 'aggiorna a PRO',
    part3: 'per un\'esperienza senza annunci.'
  },
  metadata: {
    description: 'Una collezione completa di risorse e articoli che presentano diverse prospettive sulla conoscenza e le idee.',
    wikipedia: {
      part1: 'Esplora',
      part2: 'su Alternipedia - prospettive e idee alternative.',
    },
    socialist: {
      part1: 'Prospettiva socialista su',
      part2: '- riforme sociali e diritti dei lavoratori.',
    },
    conservative: {
      part1: 'Prospettiva conservatrice su',
      part2: '- tradizione, stabilità e mercati liberi.',
    },
    liberal: {
      part1: 'Prospettiva liberale su',
      part2: '- libertà individuale e giustizia sociale.',
    },
    nationalist: {
      part1: 'Prospettiva nazionalista su',
      part2: '- sovranità nazionale e patrimonio culturale.',
    },
  },
  login: {
    title: 'Accedi a',
    google: 'Continua con Google',
    facebook: 'Continua con Facebook',
    x: 'Continua con X',
    microsoft: 'Continua con Microsoft',
    policy: "Accedendo, accetti i nostri Termini di servizio e l'Informativa sulla privacy.",
  },
  userMenu: {
    login: "Accedi",
    contributions: "Contributi",
    savedArticles: "Articoli salvati",
    preferences: "Preferenze",
    logout: "Esci",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('it-IT', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('it-IT', { year: 'numeric', month: 'long' }),
    "title": "Politica sulla Privacy",
    "lastUpdatedText": "Ultimo aggiornamento:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Benvenuti su Alternipedia, un wiki educativo progettato per presentare diverse prospettive sulla conoscenza e le idee. Rispettiamo la tua privacy e ci impegniamo a proteggere le tue informazioni personali. Questa politica spiega quali dati raccogliamo, come li utilizziamo e quali sono i tuoi diritti."
      }
    ],
    "sections": [
      {
        "title": "Informazioni che raccogliamo",
        "content": [
          {
            "type": "list",
            "items": [
              "Informazioni sull'account: Quando accedi tramite un provider OAuth (come Google o Meta), riceviamo dettagli di base come il tuo nome, indirizzo email e immagine del profilo (se disponibile).",
              "Informazioni sul pagamento: Se scegli di effettuare un pagamento o una donazione, Stripe elabora le transazioni in modo sicuro. Non memorizziamo né vediamo mai i numeri della tua carta di credito.",
              "Dati analitici: Utilizziamo Vercel Analytics per comprendere i modelli generali di utilizzo, come le pagine più visitate e le prestazioni del sito. Questi dati sono aggregati e non ti identificano personalmente.",
              "Informazioni tecniche: Quando visiti il nostro sito, possiamo ricevere automaticamente dati di registro standard, come tipo di browser, dispositivo e indirizzo IP, per aiutare a mantenere la sicurezza e risolvere eventuali problemi.",
              "Adsense: Utilizziamo Google Adsense per mostrare annunci sul nostro sito. Adsense può utilizzare i cookie per mostrare annunci basati sulle tue visite precedenti al nostro sito o ad altri siti."
            ]
          }
        ]
      },
      {
        "title": "Come utilizziamo le tue informazioni",
        "content": [
          {
            "type": "list",
            "items": [
              "Gestire e migliorare la piattaforma Alternipedia",
              "Autenticare gli utenti e gestire gli account",
              "Elaborare pagamenti in sicurezza tramite Stripe",
              "Monitorare le prestazioni e l'affidabilità del sito",
              "Rispondere alle richieste o domande degli utenti"
            ]
          },
          {
            "type": "paragraph",
            "text": "Non vendiamo, affittiamo né commercializziamo i tuoi dati personali."
          }
        ]
      },
      {
        "title": "Cookie e tracciamento",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia non utilizza cookie pubblicitari o di tracciamento."
          },
          {
            "type": "paragraph",
            "text": "Utilizziamo solo cookie essenziali necessari per le sessioni di accesso e la funzionalità del sito."
          }
        ]
      },
      {
        "title": "Archiviazione dei dati e sicurezza",
        "content": [
          {
            "type": "paragraph",
            "text": "I tuoi dati vengono archiviati in sicurezza utilizzando standard di crittografia del settore e infrastruttura di hosting."
          },
          {
            "type": "paragraph",
            "text": "Prendiamo misure ragionevoli per proteggere le tue informazioni da perdite, uso improprio o accessi non autorizzati."
          }
        ]
      },
      {
        "title": "I tuoi diritti",
        "content": [
          {
            "type": "list",
            "items": [
              "Accedere o richiedere una copia dei tuoi dati personali",
              "Correggere o cancellare le informazioni che deteniamo su di te",
              "Ritirare il consenso o chiudere il tuo account"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "Sintesi vocale",
    translate: "Traduci",
    topicMap: "Mappa degli argomenti",
    notes: "Le mie note",
    wikipal: "Chiedi a Wikipal",
    watchChanges: "Guarda le modifiche",
    saveArticle: "Salva articolo",
    saved: "Salvato",
    shortUrl: "Link breve",
    citePage: "Cita questa pagina",
    QRCode: "Codice QR",
    DownloadPDF: "Scarica come PDF",
    printPage: "Stampa questa pagina",
    pageInfo: "Informazioni sulla pagina",
  },
  accept: 'Accetta',
  reject: 'Rifiuta',
  cookieMessage: 'Noi e i nostri partner utilizziamo cookie per personalizzare gli annunci, misurare le prestazioni e fornire funzionalità social. Clicca Accetta per consentire annunci personalizzati o Rifiuta per rifiutare gli annunci personalizzati. Consulta la nostra Informativa sulla privacy per maggiori informazioni.',
  language: {
    searchMessage: 'Cerca lingue...',
    selectLanguage: "Scegli la lingua",
    description: "Seleziona la tua lingua preferita per visualizzare questo articolo.",
    notFound: "Nessuna lingua trovata corrispondente"
  },
  termsOfService: [
    { title: 'Accettazione dei Termini', content: ["Accedendo e utilizzando questo sito web, gli utenti accettano di rispettare ed essere vincolati da questi Termini di Servizio. Gli utenti che non sono d'accordo con questi termini dovrebbero interrompere immediatamente l'uso del sito web."] },
    { title: 'Responsabilità dell\'Account Utente', content: ["Gli utenti sono responsabili di mantenere la riservatezza delle loro credenziali di account. Qualsiasi attività che si verifica sotto l'account di un utente è di esclusiva responsabilità del titolare dell'account. Gli utenti devono notificare immediatamente agli amministratori del sito web qualsiasi accesso non autorizzato all'account."] },
    { title: 'Limitazione di Responsabilità', content: ['Il sito web fornisce contenuti "così come sono" senza alcuna garanzia. I proprietari del sito web non saranno responsabili per danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dalle interazioni degli utenti con la piattaforma.'] },
    {
      title: 'Linee Guida per la Condotta degli Utenti', content: [
        'Non caricare contenuti dannosi o malevoli che potrebbero danneggiare il sito web o i suoi utenti.',
        'Rispettare i diritti degli altri utenti.',
        'Evitare attività che potrebbero interrompere la funzionalità del sito web.',
        'Rispettare le leggi locali e internazionali applicabili.',
      ]
    },
    { title: 'Modifiche ai Termini', content: ['Il sito web si riserva il diritto di modificare questi termini in qualsiasi momento. L\'uso continuato del sito web dopo le modifiche costituisce accettazione dei nuovi termini.'] },
    { title: 'Clausola di Risoluzione', content: ['Il sito web può terminare o sospendere l\'accesso degli utenti senza preavviso per violazioni di questi termini o per qualsiasi altra ragione ritenuta appropriata dall\'amministrazione.'] },
    { title: 'Legge Applicabile', content: ['Questi termini sono governati dalle leggi della giurisdizione dove il sito web è principalmente operato, senza riguardo ai principi di conflitto di leggi.'] },
  ],
  termsAndConditions: 'Termini e condizioni',
  close: 'Chiudi',
  bias: {
    heading: "Cos'è un bias?",
    explanation: "Un bias è una tendenza a supportare o favorire un particolare punto di vista politico, partito o idea. Può influenzare il modo in cui una persona interpreta gli eventi, seleziona le informazioni e presenta le idee. Quando un autore ha un bias politico, può influenzare la sua prospettiva influenzando quali fatti enfatizza, come descrive le persone o i problemi e le conclusioni che trae. Di conseguenza, la sua scrittura potrebbe riflettere le sue convinzioni personali piuttosto che un punto di vista completamente neutrale o equilibrato.",
    socialist: "Socialista",
    liberal: "Liberale",
    wikipedia: "Wikipedia",
    conservative: "Konservativ",
    nationalist: "Nationlist",
    title: "Pregiudizio di lettura",
  },
  common: {
    loadingPerspective: 'Caricamento della prospettiva...',
    fetchingUserInfo: 'Recupero delle informazioni utente...',
    home: 'Home',
    about: 'Informazioni',
    help: 'Aiuto',
    search: 'Cerca',
    searchPlaceholder: 'Cerca su Alternipedia...',
    login: 'Accedi',
    logout: 'Esci',
    signUp: 'Registrati',
    profile: 'Profilo',
    settings: 'Impostazioni',
    language: 'Lingua',
    theme: 'Tema',
    comingSoon: 'Alternipedia arriverà presto!',
    stayTuned: 'Rimani sintonizzato.',
    exampleArticle: 'Articolo di esempio:',
  },
  navigation: {
    aboutUs: 'Chi siamo',
    currentEvents: 'Eventi attuali',
    randomArticle: 'Articolo casuale',
    help: 'Aiuto',
  },
  footer: {
    pleaseLogin: 'Effettua il login per utilizzare questa funzione.',
    text: {
      "part1": "Il testo è disponibile sotto la",
      "part2": "Licenza Creative Commons Attribuzione-Condividi allo stesso modo 4.0 Internazionale",
      "part3": "; possono applicarsi termini aggiuntivi. Utilizzando questo sito, accetti",
      "part4": "Termini e Condizioni",
      "part5": "e",
      "part6": "Informativa sulla privacy",
      "part7": ". Alternipedia è un progetto open-source senza scopo di lucro."
    },
    license: 'Licenza',
    terms: 'Termini',
    privacy: 'Privacy',
    contact: 'Contatto',
    disclaimers: 'Dichiarazioni di non responsabilità',
    codeOfConduct: 'Codice di condotta',
    statistics: 'Statistiche',
    cookieStatement: 'Informativa sui cookie',
    developers: 'Sviluppatori',
  },
  notFound: {
    title: '404',
    heading: 'Pagina non trovata',
    message: 'Spiacenti, non siamo riusciti a trovare la pagina che stai cercando. La pagina potrebbe essere stata rimossa o il link potrebbe essere errato.',
    goHome: 'Vai alla home',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Diventa PRO',
    upgradePrompt: 'Aggiorna per sbloccare le funzionalità premium',
    title: 'La conoscenza è potere, potenzia la tua.',
    month: 'mese',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Leggi tutto di Alternipedia',
        basicTheme: 'Usa la personalizzazione del tema base',
        saveArticles: 'Salva articoli per leggerli dopo',
      },
      buttonText: 'Il tuo piano',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Tutto in Alternipedia, più:',
      features: {
        customThemes: 'Usa Alternipedia con i tuoi temi, colori, layout e font preferiti',
        notes: 'Prendi appunti, gestiscili ed esportali da tutto Alternipedia',
        advancedSearch: 'Risultati di ricerca avanzata',
        semanticSearch: 'Ricerca semantica con il potere dell’IA',
        aiAssistant: 'Accesso a WikiPal, il tuo assistente IA di Alternipedia',
        topicMaps: 'Migliore ricerca degli argomenti con le mappe tematiche',
        profileCustomization: 'Più opzioni di personalizzazione del profilo',
        aiTranslation: 'Traduzione AI per qualsiasi pagina',
        appSupport: "Supporto continuo sull'app Alternipedia",
      },
      buttonText: 'Aggiorna ora',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Questo articolo è stato creato da membri della comunità per esprimere una prospettiva socialista — valorizzando l\'uguaglianza sociale, la giustizia economica e la solidarietà.',
      liberal: 'Questo articolo è stato creato da membri della comunità per esprimere una prospettiva liberale — difendendo le libertà individuali, i diritti umani e il progresso sociale.',
      conservative: 'Questo articolo è stato creato da membri della comunità per esprimere una prospettiva conservatrice — valorizzando la tradizione, la stabilità sociale e la continuità.',
      nationalist: 'Questo articolo è stato creato da membri della comunità per esprimere una prospettiva nazionalista — incentrata sull\'identità culturale, la sovranità e l\'orgoglio del patrimonio nazionale.',
      wikipedia: {
        part1: 'Questo articolo è stato creato da membri della comunità per esprimere una prospettiva neutra — presentando fatti e dati senza bias.',
        part2: 'vedi su Wikipedia →'
      }
    },
    lastEdited: 'Ultima modifica il',
    tools: 'Strumenti',
    close: 'Chiudi',
    notFoundHeader: 'Articolo di Wikipedia non trovato',
    notFoundText: 'Non siamo riusciti a trovare un articolo di Wikipedia per',
    searchWikipediaText: 'Cerca su Wikipedia',
    content: 'Contenuto',
    article: 'Articolo',
    discussion: 'Discussione',
    read: 'Leggi',
    edit: 'Modifica',
    history: 'Cronologia'
  },
};

// Portuguese dictionary
const pt: Dictionary = {
  unauthorised: {
    heading: 'Acesso negado',
    message: 'Você não está autorizado a acessar esta página. Verifique se está logado ou entre em contato com o suporte.'
  },
  blockedAd: {
    part1: 'Parece que está a usar um bloqueador de anúncios. Desative-o para apoiar o nosso site — ou', 
    part2: 'faça upgrade para PRO',
    part3: 'para uma experiência sem anúncios.'
  },
  metadata: {
    description: 'Uma coleção abrangente de recursos e artigos que apresentam diversas perspectivas sobre conhecimento e ideias.',
    wikipedia: {
      part1: 'Explore',
      part2: 'na Alternipedia - perspectivas e ideias alternativas.',
    },
    socialist: {
      part1: 'Perspetiva socialista sobre',
      part2: '- reformas sociais e direitos dos trabalhadores.',
    },
    conservative: {
      part1: 'Perspetiva conservadora sobre',
      part2: '- tradição, estabilidade e mercados livres.',
    },
    nationalist: {
      part1: 'Perspetiva nacionalista sobre',
      part2: '- soberania nacional e identidade cultural.',
    },
    liberal: {
      part1: 'Perspetiva liberal sobre',
      part2: '- liberdade individual e direitos civis.',
    },
  },
  cookieMessage: 'Nós e nossos parceiros usamos cookies para personalizar anúncios, medir desempenho e fornecer recursos sociais. Clique em Aceitar para permitir anúncios personalizados ou Rejeitar para recusar anúncios personalizados. Consulte nossa Política de Privacidade para mais informações.',
  accept: 'Aceitar',
  reject: 'Rejeitar',
  login: {
    title: 'Entrar em',
    google: 'Continuar com o Google',
    facebook: 'Continuar com o Facebook',
    x: 'Continuar com o X',
    microsoft: 'Continuar com o Microsoft',
    policy: "Ao fazer login, você concorda com nossos Termos de Serviço e Política de Privacidade.",
  },
  userMenu: {
    login: "Entrar",
    contributions: "Contribuições",
    savedArticles: "Artigos salvos",
    preferences: "Preferências",
    logout: "Sair",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('pt-PT', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('pt-PT', { year: 'numeric', month: 'long' }),
    "title": "Política de Privacidade",
    "lastUpdatedText": "Última atualização:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Bem-vindo ao Alternipedia, uma wiki educativa concebida para apresentar diversas perspetivas sobre o conhecimento e as ideias. Valorizamos a sua privacidade e comprometemo-nos a proteger as suas informações pessoais. Esta política explica quais os dados que recolhemos, como os utilizamos e quais os seus direitos."
      }
    ],
    "sections": [
      {
        "title": "Informações que Recolhemos",
        "content": [
          {
            "type": "list",
            "items": [
              "Informações da conta: Ao iniciar sessão através de um fornecedor OAuth (como Google ou Meta), recebemos informações básicas, como o seu nome, endereço de e-mail e imagem de perfil (se disponível).",
              "Informações de pagamento: Caso opte por efectuar um pagamento ou donativo, a Stripe processa as transações de forma segura. Nunca armazenamos nem vemos os números do seu cartão de crédito.",
              "Dados analíticos: Utilizamos o Vercel Analytics para compreender padrões gerais de utilização, tais como páginas populares e desempenho do site. Estes dados são agregados e não permitem identificar pessoalmente o utilizador.",
              "Informações técnicas: Ao visitar o nosso site, podemos receber automaticamente dados de registo padrão, como tipo de navegador, dispositivo e endereço IP, o que ajuda a manter a segurança e a resolver problemas.",
              "Adsense: Utilizamos o Google Adsense para exibir anúncios no nosso site. O Adsense pode usar cookies para exibir anúncios com base nas suas visitas anteriores ao nosso site ou a outros sites."
            ]
          }
        ]
      },
      {
        "title": "Como Utilizamos as Suas Informações",
        "content": [
          {
            "type": "list",
            "items": [
              "Operar e melhorar a plataforma Alternipedia",
              "Autenticar utilizadores e gerir contas",
              "Processar pagamentos de forma segura através da Stripe",
              "Monitorizar o desempenho e fiabilidade do site",
              "Responder a perguntas ou solicitações dos utilizadores"
            ]
          },
          {
            "type": "paragraph",
            "text": "Não vendemos, alugamos nem comercializamos os seus dados pessoais."
          }
        ]
      },
      {
        "title": "Cookies e Rastreio",
        "content": [
          {
            "type": "paragraph",
            "text": "O Alternipedia não utiliza cookies de publicidade ou de rastreio."
          },
          {
            "type": "paragraph",
            "text": "Usamos apenas os cookies essenciais necessários para sessões de login e funcionalidades do site."
          }
        ]
      },
      {
        "title": "Armazenamento e Segurança de Dados",
        "content": [
          {
            "type": "paragraph",
            "text": "Os seus dados são armazenados de forma segura, utilizando encriptação padrão do sector e infraestrutura de alojamento."
          },
          {
            "type": "paragraph",
            "text": "Tomamos medidas razoáveis para proteger as suas informações contra perda, uso indevido ou acesso não autorizado."
          }
        ]
      },
      {
        "title": "Os Seus Direitos",
        "content": [
          {
            "type": "list",
            "items": [
              "Aceder ou solicitar uma cópia das suas informações pessoais",
              "Corrigir ou eliminar informações que detemos sobre si",
              "Retirar consentimento ou encerrar a sua conta"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "Texto para fala",
    translate: "Traduzir",
    topicMap: "Mapa de tópicos",
    notes: "Minhas notas",
    wikipal: "Pergunte ao Wikipal",
    watchChanges: "Assistir mudanças",
    saveArticle: "Salvar artigo",
    saved: "Salvo",
    shortUrl: "Link curto",
    citePage: "Citar esta página",
    QRCode: "Código QR",
    DownloadPDF: "Baixar como PDF",
    printPage: "Imprimir esta página",
    pageInfo: "Informações da página",
  },
  language: {
    searchMessage: 'Procurar idiomas...',
    selectLanguage: "Escolher idioma",
    description: "Selecione seu idioma preferido para visualizar este artigo.",
    notFound: "Nenhum idioma correspondente encontrado"
  },
  termsOfService: [
    { title: 'Aceitação dos Termos', content: ["Ao acessar e usar este site, os usuários concordam em cumprir e estar vinculados a estes Termos de Serviço. Usuários que não concordam com estes termos devem descontinuar o uso do site imediatamente."] },
    { title: 'Responsabilidades da Conta do Usuário', content: ["Os usuários são responsáveis por manter a confidencialidade de suas credenciais de conta. Quaisquer atividades que ocorram sob a conta de um usuário são de responsabilidade exclusiva do titular da conta. Os usuários devem notificar imediatamente os administradores do site sobre qualquer acesso não autorizado à conta."] },
    { title: 'Limitação de Responsabilidade', content: ['O site fornece conteúdo "como está" sem quaisquer garantias. Os proprietários do site não serão responsáveis por danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes de interações do usuário com a plataforma.'] },
    {
      title: 'Diretrizes de Conduta do Usuário', content: [
        'Não enviar conteúdo prejudicial ou malicioso que possa prejudicar o site ou seus usuários.',
        'Respeitar os direitos de outros usuários.',
        'Evitar atividades que possam interromper a funcionalidade do site.',
        'Cumprir as leis locais e internacionais aplicáveis.',
      ]
    },
    { title: 'Modificações nos Termos', content: ['O site se reserva o direito de modificar estes termos a qualquer momento. O uso continuado do site após as alterações constitui aceitação dos novos termos.'] },
    { title: 'Cláusula de Rescisão', content: ['O site pode encerrar ou suspender o acesso do usuário sem aviso prévio por violações destes termos ou por qualquer outro motivo considerado apropriado pela administração.'] },
    { title: 'Lei Aplicável', content: ['Estes termos são governados pelas leis da jurisdição onde o site é operado principalmente, sem considerar os princípios de conflito de leis.'] },
  ],
  termsAndConditions: 'Termos e condições',
  close: 'Fechar',
  bias: {
    heading: "O que é um viés?",
    explanation: "Um viés é uma tendência a apoiar ou favorecer um determinado ponto de vista político, partido ou ideia. Pode influenciar a forma como uma pessoa interpreta eventos, seleciona informações e apresenta ideias. Quando um autor tem um viés político, isso pode influenciar sua perspectiva ao afetar quais fatos ele enfatiza, como descreve pessoas ou questões e as conclusões que tira. Como resultado, sua escrita pode refletir suas crenças pessoais em vez de um ponto de vista completamente neutro ou equilibrado.",
    socialist: "Socialista",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Conservador",
    nationalist: "Nacionalista",
    title: "Viés de leitura",
  },
  common: {
    loadingPerspective: 'Carregando perspectiva...',
    fetchingUserInfo: 'Buscando informações do usuário...',
    home: 'Início',
    about: 'Sobre',
    help: 'Ajuda',
    search: 'Pesquisar',
    searchPlaceholder: 'Pesquisar na Alternipedia...',
    login: 'Entrar',
    logout: 'Sair',
    signUp: 'Cadastrar',
    profile: 'Perfil',
    settings: 'Configurações',
    language: 'Idioma',
    theme: 'Tema',
    comingSoon: 'Alternipedia em breve!',
    stayTuned: 'Fique ligado.',
    exampleArticle: 'Artigo de exemplo:',
  },
  navigation: {
    aboutUs: 'Sobre nós',
    currentEvents: 'Eventos atuais',
    randomArticle: 'Artigo aleatório',
    help: 'Ajuda',
  },
  footer: {
    pleaseLogin: 'Por favor, faça login para usar este recurso.',
    text: {
      "part1": "O texto está disponível sob a",
      "part2": "Licença Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional",
      "part3": "; podem ser aplicados termos adicionais. Ao usar este site, você concorda com",
      "part4": "Termos e Condições",
      "part5": "e",
      "part6": "Política de Privacidade",
      "part7": ". Alternipedia é um projeto de código aberto sem fins lucrativos."
    },
    license: 'Licença',
    terms: 'Termos',
    privacy: 'Privacidade',
    contact: 'Contato',
    disclaimers: 'Avisos legais',
    codeOfConduct: 'Código de conduta',
    statistics: 'Estatísticas',
    cookieStatement: 'Declaração de cookies',
    developers: 'Desenvolvedores',
  },
  notFound: {
    title: '404',
    heading: 'Página não encontrada',
    message: 'Desculpe, não conseguimos encontrar a página que você está procurando. A página pode ter sido removida ou o link pode estar incorreto.',
    goHome: 'Ir para a página inicial',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Tornar-se PRO',
    upgradePrompt: 'Faça upgrade para desbloquear recursos premium',
    title: 'Conhecimento é poder, potencialize o seu.',
    month: 'mês',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Leia tudo da Alternipedia',
        basicTheme: 'Use personalização básica de tema',
        saveArticles: 'Salve artigos para ler depois',
      },
      buttonText: 'Seu plano',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Tudo na Alternipedia, mais:',
      features: {
        customThemes: 'Use Alternipedia com seus próprios temas, cores, layouts e fontes favoritas',
        notes: 'Tome notas, gerencie e exporte de toda a Alternipedia',
        advancedSearch: 'Resultados de pesquisa avançados',
        semanticSearch: 'Pesquisa semântica com o poder da IA',
        aiAssistant: 'Acesse WikiPal, seu assistente de IA da Alternipedia',
        topicMaps: 'Melhor pesquisa de tópicos com Mapas de Tópicos',
        profileCustomization: 'Mais opções de personalização de perfil',
        aiTranslation: 'Tradução por IA para qualquer página',
        appSupport: 'Suporte contínuo no App Alternipedia',
      },
      buttonText: 'Atualize agora',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Este artigo foi criado por membros da comunidade para expressar uma perspectiva socialista — valorizando a igualdade social, a justiça econômica e a solidariedade.',
      liberal: 'Este artigo foi criado por membros da comunidade para expressar uma perspectiva liberal — defendendo as liberdades individuais, os direitos humanos e o progresso social.',
      conservative: 'Este artigo foi criado por membros da comunidade para expressar uma perspectiva conservadora — valorizando a tradição, a estabilidade social e a continuidade.',
      nationalist: 'Este artigo foi criado por membros da comunidade para expressar uma perspectiva nacionalista — centrada na identidade cultural, na soberania e no orgulho do patrimônio nacional.',
      wikipedia: {
        part1: 'Este artigo foi criado por membros da comunidade para expressar uma perspectiva neutra — apresentando fatos e dados sem viés.',
        part2: 'ver na Wikipedia →'
      }
    },
    lastEdited: 'Última edição em',
    tools: 'Ferramentas',
    content: 'Conteúdo',
    close: 'Fechar',
    notFoundHeader: 'Artigo da Wikipedia não encontrado',
    notFoundText: 'Não conseguimos encontrar um artigo da Wikipedia para',
    searchWikipediaText: 'Pesquisar na Wikipedia',
    article: 'Artigo',
    discussion: 'Discussão',
    read: 'Ler',
    edit: 'Editar',
    history: 'Histórico'
  }
};

// Japanese dictionary
const ja: Dictionary = {
  unauthorised: {
    heading: 'アクセス拒否',
    message: 'このページにアクセスする権限がありません。ログインしているか、サポートにお問い合わせください。'
  },
  blockedAd: {
    part1: '広告ブロッカーを使用しているようです。サイトをサポートするために無効にするか、',
    part2: 'PROにアップグレード',
    part3: 'して広告なしの体験をお楽しみください。'
  },
  metadata: {
    description: '知識と思想に関する多様な視点を提示する包括的なリソースと記事のコレクション。',
    wikipedia: {
      part1: 'Alternipediaで\',探る',
      part2: '- 代替の視点とアイデア。',
    },
    socialist: {
      part1: '社会主義的視点からの',
      part2: '- 社会改革と労働者の権利。',
    },
    conservative: {
      part1: '保守的視点からの',
      part2: '- 伝統、安定、自由市場。',
    },
    nationalist: {
      part1: '国家主義的視点からの',
      part2: '- 国家主権と文化的アイデンティティ。',
    },
    liberal: {
      part1: '自由主義的視点からの',
      part2: '- 個人の自由と市民権。',
    },
  },
  login: {
    title: 'ログイン',
    google: 'Googleで続行',
    facebook: 'Facebookで続行',
    x: 'Xで続行',
    microsoft: 'Microsoftで続行',
    policy: "ログインすることで、利用規約とプライバシーポリシーに同意したことになります。",
  },
  userMenu: {
    login: "ログイン",
    contributions: "貢献",
    savedArticles: "保存した記事",
    preferences: "設定",
    logout: "ログアウト",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' }),
    "title": "プライバシーポリシー",
    "lastUpdatedText": "最終更新日：",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipediaへようこそ — 知識と思想に関する多様な視点を提示する教育的なウィキです。私たちはあなたのプライバシーを尊重し、個人情報を保護することをお約束します。本ポリシーでは、収集する情報、使用方法、そしてあなたの権利について説明します。"
      }
    ],
    "sections": [
      {
        "title": "収集する情報",
        "content": [
          {
            "type": "paragraph",
            "text": "私たちはサービスを提供・改善するために必要最低限の情報のみを収集します。これには以下が含まれます："
          },
          {
            "type": "list",
            "items": [
              "アカウント情報：GoogleやMetaなどのOAuthプロバイダーを使用してログインする場合、氏名、メールアドレス、プロフィール画像（利用可能な場合）などの基本情報を受け取ります。",
              "支払い情報：支払いまたは寄付を行う場合、Stripeを使用して安全に処理します。クレジットカード情報を保存または表示することはありません。",
              "分析データ：どのページが人気か、サイトのパフォーマンスがどのようであるかを理解するためにVercel Analyticsを使用します。このデータは集計されており、個人を特定するものではありません。",
              "技術情報：サイト訪問時に、ブラウザの種類、デバイス、IPアドレスなどの標準的なログデータを自動的に受け取ることがあります。",
              "Adsense：当サイトではGoogle Adsenseを使用して広告を表示しています。Adsenseは、過去に当サイトまたは他のサイトを訪れた履歴に基づいて広告を表示するためにクッキーを使用する場合があります。"
            ]
          }
        ]
      },
      {
        "title": "情報の利用方法",
        "content": [
          {
            "type": "paragraph",
            "text": "私たちはあなたの情報を以下の目的のみに使用します："
          },
          {
            "type": "list",
            "items": [
              "Alternipediaプラットフォームの運営と改善",
              "ユーザー認証およびアカウント管理",
              "Stripeを通じた安全な支払い処理",
              "サイトのパフォーマンスと信頼性の監視",
              "サイト経由でのユーザーからの問い合わせへの対応"
            ]
          },
          {
            "type": "paragraph",
            "text": "私たちはあなたの個人データを販売、貸与、または取引することはありません。"
          }
        ]
      },
      {
        "title": "クッキーとトラッキング",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipediaは広告やトラッキングクッキーを使用しません。"
          },
          {
            "type": "paragraph",
            "text": "ログインセッションおよびサイト機能に必要な基本的なクッキーのみを使用します。"
          }
        ]
      },
      {
        "title": "データの保存とセキュリティ",
        "content": [
          {
            "type": "paragraph",
            "text": "あなたのデータは業界標準の暗号化と安全なホスティングインフラを使用して保護されています。"
          },
          {
            "type": "paragraph",
            "text": "情報の紛失、不正利用、または不正アクセスを防ぐために合理的な措置を講じています。"
          },
          {
            "type": "paragraph",
            "text": "ホスティングおよび分析サービス（例：VercelやStripe）はグローバルに展開しており、データは他国で処理される場合があります。私たちは強力なプライバシー基準を遵守するプロバイダーのみと提携しています。"
          }
        ]
      },
      {
        "title": "サードパーティサービス",
        "content": [
          {
            "type": "paragraph",
            "text": "サービスの一部には信頼できる第三者を利用しています："
          },
          {
            "type": "list",
            "items": [
              "OAuthプロバイダー — 安全なログインのため",
              "Stripe — 支払い処理のため",
              "Vercel Analytics — 匿名のパフォーマンス分析のため"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Stripeプライバシーポリシー", "url": "https://stripe.com/privacy" },
              { "label": "Vercelプライバシーポリシー", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          }
        ]
      },
      {
        "title": "あなたの権利",
        "content": [
          {
            "type": "paragraph",
            "text": "お住まいの地域により、以下の権利を有する場合があります："
          },
          {
            "type": "list",
            "items": [
              "個人情報へのアクセスまたはコピーの要求",
              "保有する情報の修正または削除",
              "同意の撤回またはアカウントの閉鎖"
            ]
          }
        ]
      },
      {
        "title": "子どものプライバシー",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipediaは一般向けであり、13歳未満の子どもを対象としていません。"
          },
          {
            "type": "paragraph",
            "text": "未成年者から意図的に個人情報を収集することはありません。"
          }
        ]
      },
      {
        "title": "本ポリシーの変更",
        "content": [
          {
            "type": "paragraph",
            "text": "改善または法的要件を反映するため、プライバシーポリシーを随時更新することがあります。"
          }
        ]
      },
      {
        "title": "お問い合わせ",
        "content": [
          {
            "type": "paragraph",
            "text": "プライバシーに関する質問やリクエストがある場合は、Alternipediaのウェブサイトを通じてお問い合わせください。"
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "テキスト読み上げ",
    translate: "翻訳",
    topicMap: "トピックマップ",
    notes: "マイノート",
    wikipal: "ウィキパルに聞く",
    watchChanges: "変更を監視",
    saveArticle: "記事を保存",
    saved: "保存済み",
    shortUrl: "短縮リンク",
    citePage: "このページを引用",
    QRCode: "QRコード",
    DownloadPDF: "PDFとしてダウンロード",
    printPage: "このページを印刷",
    pageInfo: "ページ情報",
  },
  cookieMessage: '当社およびパートナーは、広告のパーソナライズ、パフォーマンスの測定、ソーシャル機能の提供のためにクッキーを使用します。パーソナライズされた広告を許可するには「受け入れる」を、拒否するには「拒否する」をクリックしてください。詳細はプライバシーポリシーをご覧ください。',
  accept: '受け入れる',
  reject: '拒否する',
  language: {
    searchMessage: "言語を検索",
    selectLanguage: "言語を選択",
    description: "この記事を表示するための希望の言語を選択してください。",
    notFound: "一致する言語が見つかりません"
  },
  termsOfService: [
    { title: '利用規約の同意', content: ["このウェブサイトにアクセスし、使用することにより、ユーザーはこれらの利用規約を遵守し、拘束されることに同意します。これらの条件に同意しないユーザーは、直ちにウェブサイトの使用を中止する必要があります。"] },
    { title: 'ユーザーアカウントの責任', content: ["ユーザーは、アカウント認証情報の機密性を維持する責任があります。ユーザーのアカウントで発生するすべての活動は、アカウント所有者の単独の責任です。ユーザーは、不正なアカウントアクセスについて、ウェブサイト管理者に直ちに通知する必要があります。"] },
    { title: '責任の制限', content: ['ウェブサイトは、いかなる保証もなしに「現状のまま」でコンテンツを提供します。ウェブサイト所有者は、プラットフォームとのユーザーのやり取りから生じる直接的、間接的、偶発的、結果的、または懲罰的損害について責任を負いません。'] },
    {
      title: 'ユーザー行動規範', content: [
        'ウェブサイトやそのユーザーに害を与える可能性のある有害または悪意のあるコンテンツをアップロードしないでください。',
        '他のユーザーの権利を尊重してください。',
        'ウェブサイトの機能を妨害する可能性のある活動を避けてください。',
        '適用される地方および国際法を遵守してください。',
      ]
    },
    { title: '利用規約の変更', content: ['ウェブサイトは、これらの条件をいつでも変更する権利を留保します。変更後のウェブサイトの継続使用は、新しい条件への同意を構成します。'] },
    { title: '終了条項', content: ['ウェブサイトは、これらの条件の違反またはその他の管理者が適切と判断する理由により、事前の通知なしにユーザーアクセスを終了または停止することができます。'] },
    { title: '準拠法', content: ['これらの条件は、法の抵触原則を考慮することなく、ウェブサイトが主に運営されている管轄区域の法律に準拠します。'] },
  ],
  termsAndConditions: '利用規約',
  close: '閉じる',
  bias: {
    heading: "バイアスとは？",
    explanation: "バイアスとは、特定の政治的見解、政党、またはアイデアを支持または好む傾向のことです。これは、人が出来事を解釈し、情報を選択し、アイデアを提示する方法に影響を与える可能性があります。著者が政治的なバイアスを持っている場合、強調する事実、人物や問題の説明方法、そして導き出す結論に影響を与えることで、その視点に影響を与える可能性があります。その結果、その著者の執筆は完全に中立的またはバランスの取れた視点ではなく、個人的な信念を反映する可能性があります。",
    socialist: "社会主義者",
    liberal: "リベラル",
    wikipedia: "ウィキペディア",
    conservative: "保守派",
    nationalist: "ナショナリスト",
    title: "読書バイアス",
  },
  common: {
    loadingPerspective: '視点を読み込み中...',
    fetchingUserInfo: 'ユーザー情報を取得中...',
    home: 'ホーム',
    about: '概要',
    help: 'ヘルプ',
    search: '検索',
    searchPlaceholder: 'Alternipediaを検索...',
    login: 'ログイン',
    logout: 'ログアウト',
    signUp: '登録',
    profile: 'プロフィール',
    settings: '設定',
    language: '言語',
    theme: 'テーマ',
    comingSoon: 'Alternipediaは近日公開！',
    stayTuned: 'お楽しみに。',
    exampleArticle: '例記事：',
  },
  navigation: {
    aboutUs: '私たちについて',
    currentEvents: '最近の出来事',
    randomArticle: 'ランダム記事',
    help: 'ヘルプ',
  },
  footer: {
    pleaseLogin: 'この機能を使用するにはログインしてください。',
    text: {
      "part1": "テキストは以下のライセンスの下で利用可能です：",
      "part2": "クリエイティブ・コモンズ 表示-継承 4.0 国際ライセンス",
      "part3": "；追加の条件が適用される場合があります。このサイトを使用することで、あなたは",
      "part4": "利用規約",
      "part5": "および",
      "part6": "プライバシーポリシーに同意したことになります",
      "part7": "。Alternipediaはオープンソースの非営利プロジェクトです。"
    },
    license: 'ライセンス',
    terms: '利用規約',
    privacy: 'プライバシー',
    contact: '連絡先',
    disclaimers: '免責事項',
    codeOfConduct: '行動規範',
    statistics: '統計',
    cookieStatement: 'クッキーステートメント',
    developers: '開発者',
  },
  notFound: {
    title: '404',
    heading: 'ページが見つかりません',
    message: '申し訳ございません。お探しのページが見つかりませんでした。ページが削除されたか、リンクが正しくない可能性があります。',
    goHome: 'ホームへ',
  },
  upgrade: {
    pro: 'プロ',
    goPro: 'プロになる',
    upgradePrompt: 'アップグレードしてプレミアム機能をアンロック',
    title: '知識は力、あなたの力を強化しましょう。',
    month: '月',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipediaの全てを読む',
        basicTheme: '基本テーマのカスタマイズを使用',
        saveArticles: '記事を保存して後で読む',
      },
      buttonText: 'あなたのプラン',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipediaの全機能、さらに:',
      features: {
        customThemes: '自分の好きなテーマ、色、レイアウト、フォントでAlternipediaを使用',
        notes: 'ノートを取って管理し、Alternipedia全体からエクスポート',
        advancedSearch: '高度な検索結果',
        semanticSearch: 'AIの力を使った意味検索',
        aiAssistant: 'WikiPal、あなたのAlternipedia AIアシスタントにアクセス',
        topicMaps: 'トピックマップでより良いトピックリサーチ',
        profileCustomization: 'プロフィールのカスタマイズオプションを増やす',
        aiTranslation: 'どのページでもAI翻訳',
        appSupport: 'Alternipediaアプリで継続的なサポート',
      },
      buttonText: '今すぐアップグレード',
    },
  },
  article: {
    biasIntro: {
      socialist: 'この記事は、社会的平等、経済的公正、連帯を重視する社会主義的視点を表現するためにコミュニティメンバーによって作成されました。',
      liberal: 'この記事は、個人の自由、権利、社会的進歩を重視するリベラルな視点を表現するためにコミュニティメンバーによって作成されました。',
      conservative: 'この記事は、伝統、社会的安定、継続性を重視する保守的な視点を表現するためにコミュニティメンバーによって作成されました。',
      nationalist: 'この記事は、文化的アイデンティティ、主権、国家的誇りを中心とした国家主義的視点を表現するためにコミュニティメンバーによって作成されました。',
      wikipedia: {
        part1: 'この記事は、事実とデータを偏りなく提示する中立的な視点を表現するためにコミュニティメンバーによって作成されました。',
        part2: 'ウィキペディアで見る →'
      }
    },
    lastEdited: '最終編集日',
    tools: 'ツール',
    content: 'コンテンツ',
    article: '記事',
    close: '閉じる',
    notFoundHeader: 'Wikipedia記事が見つかりません',
    notFoundText: '以下のWikipedia記事が見つかりませんでした：',
    searchWikipediaText: 'Wikipediaを検索',
    discussion: '議論',
    read: '読む',
    edit: '編集',
    history: '履歴'
  }
};

// Chinese dictionary
const zh: Dictionary = {
  unauthorised: {
    heading: '拒绝访问',
    message: '您无权访问此页面。请检查您是否已登录，或联系支持。'
  },
  blockedAd: {
    part1: '看起来您正在使用广告拦截器。请禁用它以支持我们的网站，或',
    part2: '升级到PRO',
    part3: '以享受无广告体验。'
  },
  metadata: {
    description: '一个全面的资源和文章集合，展示了关于知识和思想的多样化观点。',
    wikipedia: {
      part1: '在Alternipedia探索',
      part2: '- 替代视角和想法。',
    },
    conservative: {
      part1: '从保守主义视角看',
      part2: '- 传统、稳定和自由市场。',
    },
    nationalist: {
      part1: '从民族主义视角看',
      part2: '- 国家主权和文化认同。',
    },
    liberal: {
      part1: '从自由主义视角看',
      part2: '- 个人自由和公民权利。',
    },
    socialist: {
      part1: '从社会主义视角看',
      part2: '- 社会改革和工人权利。',
    },
  },
  accept: '接受',
  reject: '拒绝',
  cookieMessage: '我们和我们的合作伙伴使用 cookie 来个性化广告、衡量性能并提供社交功能。点击 接受 以允许个性化广告，或 点击 拒绝 以拒绝个性化广告。有关更多信息，请参阅我们的隐私政策。',
  login: {
    title: '登录',
    google: '使用 Google 继续',
    facebook: '使用 Facebook 继续',
    x: '使用 X 继续',
    microsoft: '使用 Microsoft 继续',
    policy: "登录即表示您同意我们的服务条款和隐私政策。",
  },
  userMenu: {
    login: "登录",
    contributions: "贡献",
    savedArticles: "已保存的文章",
    preferences: "偏好设置",
    logout: "登出",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' }),
    "title": "隐私政策",
    "lastUpdatedText": "最后更新：",
    "intro": [
      {
        "type": "paragraph",
        "text": "欢迎来到 Alternipedia，这是一个旨在呈现多样化知识和观点的教育型维基。我们重视您的隐私，并致力于保护您的个人信息。本政策解释了我们收集哪些信息、如何使用这些信息以及您的权利。"
      }
    ],
    "sections": [
      {
        "title": "我们收集的信息",
        "content": [
          {
            "type": "list",
            "items": [
              "账户信息：当您通过 OAuth 提供商（如 Google 或 Meta）登录时，我们会收到您的姓名、电子邮件地址及个人资料图片（如果有）。",
              "支付信息：如果您选择付款或捐赠，Stripe 会安全地处理交易。我们不会存储或查看您的信用卡号码。",
              "分析数据：我们使用 Vercel Analytics 了解一般使用模式，如哪些页面受欢迎以及网站性能。数据是汇总的，不会识别您的个人身份。",
              "技术信息：访问我们网站时，我们可能会自动接收标准日志数据，如浏览器类型、设备和 IP 地址，以帮助维护安全性并排查问题。",
              "Adsense：我们的网站使用 Google Adsense 来展示广告。Adsense 可能会使用 cookies，根据您过去访问过我们网站或其他网站的历史记录来展示广告。"
            ]
          }
        ]
      },
      {
        "title": "我们如何使用您的信息",
        "content": [
          {
            "type": "list",
            "items": [
              "运营和改进 Alternipedia 平台",
              "认证用户并管理账户",
              "通过 Stripe 安全处理支付",
              "监控网站性能和可靠性",
              "响应用户通过网站提出的询问或请求"
            ]
          },
          {
            "type": "paragraph",
            "text": "我们不会出售、出租或交易您的个人数据。"
          }
        ]
      },
      {
        "title": "Cookies 与追踪",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia 不使用广告或追踪 cookies。"
          },
          {
            "type": "paragraph",
            "text": "我们仅使用登录会话和网站功能所需的基本 cookies。"
          }
        ]
      },
      {
        "title": "数据存储与安全",
        "content": [
          {
            "type": "paragraph",
            "text": "您的数据通过行业标准的加密和托管基础设施安全存储。"
          },
          {
            "type": "paragraph",
            "text": "我们采取合理措施保护您的信息，防止丢失、滥用或未经授权访问。"
          }
        ]
      },
      {
        "title": "您的权利",
        "content": [
          {
            "type": "list",
            "items": [
              "访问或请求您的个人信息副本",
              "更正或删除我们持有的关于您的信息",
              "撤回同意或关闭账户"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "文本朗读",
    translate: "翻译",
    topicMap: "主题图",
    notes: "我的笔记",
    wikipal: "问问Wikipal",
    watchChanges: "监视更改",
    saveArticle: "保存文章",
    saved: "已保存",
    shortUrl: "短链接",
    citePage: "引用此页面",
    QRCode: "二维码",
    DownloadPDF: "下载为PDF",
    printPage: "打印此页面",
    pageInfo: "页面信息",
  },
  language: {
    searchMessage: "搜索语言...",
    selectLanguage: "选择语言",
    description: "选择您喜欢的语言来查看本文。",
    notFound: "未找到匹配的语言"
  },
  termsOfService: [
    { title: '接受条款', content: ["通过访问和使用本网站，用户同意遵守并受这些服务条款的约束。不同意这些条款的用户应立即停止使用网站。"] },
    { title: '用户账户责任', content: ["用户负责保持其账户凭据的机密性。用户账户下发生的任何活动都是账户持有者的唯一责任。用户必须立即通知网站管理员任何未经授权的账户访问。"] },
    { title: '责任限制', content: ['网站"按原样"提供内容，不提供任何保证。网站所有者不对用户与平台交互产生的直接、间接、偶然、后果性或惩罚性损害负责。'] },
    {
      title: '用户行为准则', content: [
        '不要上传可能损害网站或其用户的有害或恶意内容。',
        '尊重其他用户的权利。',
        '避免可能破坏网站功能的活动。',
        '遵守适用的本地和国际法律。',
      ]
    },
    { title: '条款修改', content: ['网站保留随时修改这些条款的权利。修改后继续使用网站即表示接受新条款。'] },
    { title: '终止条款', content: ['网站可能因违反这些条款或管理层认为适当的任何其他原因，在不事先通知的情况下终止或暂停用户访问。'] },
    { title: '适用法律', content: ['这些条款受网站主要运营所在管辖区的法律管辖，不考虑法律冲突原则。'] },
  ],
  termsAndConditions: '条款和条件',
  close: '关闭',
  bias: {
    heading: "什么是偏见？",
    explanation: "偏见是支持或偏爱特定政治观点、政党或想法的倾向。它可以影响一个人如何解释事件、选择信息和呈现想法。当作者有政治偏见时，这可能会通过影响他们强调哪些事实、如何描述人物或问题以及得出哪些结论来影响他们的观点。因此，他们的写作可能反映了他们的个人信仰，而不是完全中立或平衡的观点。",
    socialist: "社会主义者",
    liberal: "自由主义者",
    wikipedia: "维基百科",
    conservative: "保守派",
    nationalist: "民族主义者",
    title: "阅读偏见",
  },
  common: {
    loadingPerspective: '正在加载视角...',
    fetchingUserInfo: '正在获取用户信息...',
    home: '首页',
    about: '关于',
    help: '帮助',
    search: '搜索',
    searchPlaceholder: '搜索 Alternipedia...',
    login: '登录',
    logout: '登出',
    signUp: '注册',
    profile: '个人资料',
    settings: '设置',
    language: '语言',
    theme: '主题',
    comingSoon: 'Alternipedia 即将推出！',
    stayTuned: '敬请期待。',
    exampleArticle: '示例文章：',
  },
  navigation: {
    aboutUs: '关于我们',
    currentEvents: '时事',
    randomArticle: '随机文章',
    help: '帮助',
  },
  footer: {
    pleaseLogin: '请登录以使用此功能。',
    text: {
      "part1": "文本可在以下许可下使用：",
      "part2": "知识共享署名-相同方式共享 4.0 国际许可协议",
      "part3": "；可能适用附加条款。使用本网站即表示您同意",
      "part4": "服务条款",
      "part5": "和",
      "part6": "隐私政策",
      "part7": "。Alternipedia 是一个开源非营利项目。"
    },
    license: '许可证',
    terms: '条款',
    privacy: '隐私',
    contact: '联系',
    disclaimers: '免责声明',
    codeOfConduct: '行为准则',
    statistics: '统计',
    cookieStatement: 'Cookie声明',
    developers: '开发者',
  },
  notFound: {
    title: '404',
    heading: '页面未找到',
    message: '抱歉，我们找不到您要查找的页面。该页面可能已被删除或链接不正确。',
    goHome: '返回首页',
  },
  upgrade: {
    pro: '专业版',
    goPro: '升级到专业版',
    upgradePrompt: '升级以解锁高级功能',
    title: '知识就是力量，强化你的力量。',
    month: '月',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: '阅读Alternipedia的所有内容',
        basicTheme: '使用基础主题自定义',
        saveArticles: '保存文章以便稍后阅读',
      },
      buttonText: '你的计划',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia的全部内容，以及更多:',
      features: {
        customThemes: '使用你自己喜欢的主题、颜色、布局和字体',
        notes: '做笔记、管理并从Alternipedia各处导出',
        advancedSearch: '高级搜索结果',
        semanticSearch: '利用AI进行语义搜索',
        aiAssistant: '访问WikiPal，你的Alternipedia AI助手',
        topicMaps: '使用主题地图进行更好的主题研究',
        profileCustomization: '更多的个人资料自定义选项',
        aiTranslation: '任何页面的AI翻译',
        appSupport: '在Alternipedia应用中持续支持',
      },
      buttonText: '立即升级',
    },
  },
  article: {
    biasIntro: {
      socialist: '本文由社区成员创建，旨在表达一种社会主义视角，强调社会平等、经济公正和团结。',
      liberal: '本文由社区成员创建，旨在表达一种自由主义视角，强调个人自由、权利和社会进步。',
      conservative: '本文由社区成员创建，旨在表达一种保守主义视角，强调传统、社会稳定和延续性。',
      nationalist: '本文由社区成员创建，旨在表达一种民族主义视角，强调文化认同、主权和国家自豪感。',
      wikipedia: {
        part1: '本文由社区成员创建，旨在表达一种中立视角，强调事实和数据的客观呈现。',
        part2: '维基百科中查看 →'
      }
    },
    lastEdited: '最后编辑于',
    tools: '工具',
    content: '内容',
    article: '文章',
    discussion: '讨论',
    read: '阅读',
    edit: '编辑',
    history: '历史',
    close: '关闭',
    notFoundHeader: '未找到维基百科文章',
    notFoundText: '未找到以下维基百科文章：',
    searchWikipediaText: '搜索维基百科',
  }
};

// Korean dictionary
const ko: Dictionary = {
  unauthorised: {
    heading: '접근 거부됨',
    message: '이 페이지에 접근할 권한이 없습니다. 로그인되어 있는지 확인하거나 지원팀에 문의하세요.'
  },
  blockedAd: {
    part1: '광고 차단기를 사용 중인 것 같습니다. 사이트를 지원하려면 비활성화하거나',
    part2: 'PRO로 업그레이드',
    part3: '광고 없는 환경을 이용하세요.'
  },
  metadata: {
    description: '지식과 아이디어에 대한 다양한 관점을 제공하는 포괄적인 리소스 및 기사 모음입니다.',
    wikipedia: {
      part1: 'Alternipedia에서 탐색',
      part2: '- 대안적 관점과 아이디어.',
    },
    conservative: {
      part1: '보수주의 관점에서',
      part2: '- 전통, 안정성, 자유 시장.',
    },
    nationalist: {
      part1: '민족주의 관점에서',
      part2: '- 국가 주권과 문화적 정체성.',
    },
    socialist: {
      part1: '사회주의 관점에서',
      part2: '- 사회적 평등과 공동체 권리.',
    },
    liberal: {
      part1: '자유주의 관점에서',
      part2: '- 개인의 자유와 권리, 사회적 진보.',
    },
  },
  accept: '수락',
  reject: '거부',
  cookieMessage: '당사 및 파트너는 광고 개인화, 성능 측정 및 소셜 기능 제공을 위해 쿠키를 사용합니다. 맞춤형 광고를 허용하려면 수락을 클릭하거나 맞춤형 광고를 거부하려면 거부를 클릭하세요. 자세한 내용은 개인정보 처리방침을 참조하세요.',
  login: {
    title: '로그인',
    google: 'Google로 계속하기',
    facebook: 'Facebook으로 계속하기',
    x: 'X로 계속하기',
    microsoft: 'Microsoft로 계속하기',
    policy: "로그인하면 서비스 약관 및 개인정보 보호정책에 동의하는 것입니다.",
  },
  userMenu: {
    login: "로그인",
    contributions: "기여",
    savedArticles: "저장된 문서",
    preferences: "환경설정",
    logout: "로그아웃",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' }),
    "title": "개인정보 보호정책",
    "lastUpdatedText": "최종 업데이트:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipedia에 오신 것을 환영합니다. 이는 지식과 아이디어에 대한 다양한 관점을 제공하기 위해 설계된 교육용 위키입니다. 우리는 사용자의 개인정보를 소중히 여기며, 이를 보호하기 위해 최선을 다하고 있습니다. 이 정책은 우리가 수집하는 정보, 사용 방법 및 사용자의 권리를 설명합니다."
      }
    ],
    "sections": [
      {
        "title": "수집하는 정보",
        "content": [
          {
            "type": "list",
            "items": [
              "계정 정보: Google, Meta 등 OAuth 제공자를 통해 로그인할 경우, 이름, 이메일 주소 및 프로필 사진(사용 가능 시)과 같은 기본 정보를 수집합니다.",
              "결제 정보: 결제 또는 기부를 선택하면 Stripe를 통해 안전하게 처리됩니다. 우리는 신용카드 번호를 저장하거나 확인하지 않습니다.",
              "분석 데이터: Vercel Analytics를 사용하여 일반적인 사용 패턴을 파악합니다. 예를 들어 인기 페이지 및 사이트 성능 등을 분석합니다. 데이터는 집계되어 개인을 식별하지 않습니다.",
              "기술 정보: 사이트 방문 시 브라우저 유형, 기기, IP 주소 등의 표준 로그 데이터를 자동으로 수신할 수 있으며, 이는 보안 유지와 문제 해결에 도움을 줍니다.",
              "Adsense: 당사 웹사이트는 Google Adsense를 사용하여 광고를 게재합니다. Adsense는 쿠키를 사용하여 사용자가 이전에 당사 웹사이트 또는 다른 웹사이트를 방문한 기록을 기반으로 광고를 표시할 수 있습니다."
            ]
          }
        ]
      },
      {
        "title": "정보 사용 방법",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia 플랫폼 운영 및 개선",
              "사용자 인증 및 계정 관리",
              "Stripe를 통한 안전한 결제 처리",
              "사이트 성능 및 안정성 모니터링",
              "사용자의 문의나 요청에 응답"
            ]
          },
          {
            "type": "paragraph",
            "text": "우리는 개인 데이터를 판매, 임대 또는 거래하지 않습니다."
          }
        ]
      },
      {
        "title": "쿠키 및 추적",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia는 광고용 또는 추적용 쿠키를 사용하지 않습니다."
          },
          {
            "type": "paragraph",
            "text": "로그인 세션과 사이트 기능에 필요한 필수 쿠키만 사용합니다."
          }
        ]
      },
      {
        "title": "데이터 저장 및 보안",
        "content": [
          {
            "type": "paragraph",
            "text": "귀하의 데이터는 업계 표준 암호화 및 호스팅 인프라를 통해 안전하게 저장됩니다."
          },
          {
            "type": "paragraph",
            "text": "우리는 데이터 손실, 오용 또는 무단 접근으로부터 보호하기 위해 합리적인 조치를 취합니다."
          }
        ]
      },
      {
        "title": "사용자의 권리",
        "content": [
          {
            "type": "list",
            "items": [
              "개인정보에 접근하거나 사본 요청",
              "보유 정보 수정 또는 삭제",
              "동의 철회 또는 계정 종료"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "텍스트 음성 변환",
    translate: "번역",
    topicMap: "주제 맵",
    notes: "내 노트",
    wikipal: "Wikipal에게 물어보기",
    watchChanges: "변경 사항 보기",
    saveArticle: "기사 저장",
    saved: "저장됨",
    shortUrl: "짧은 링크",
    citePage: "이 페이지 인용",
    QRCode: "QR 코드",
    DownloadPDF: "PDF로 다운로드",
    printPage: "이 페이지 인쇄",
    pageInfo: "페이지 정보",
  },
  language: {
    searchMessage: "언어 검색...",
    selectLanguage: "언어 선택",
    description: "이 기사를 보는 데 선호하는 언어를 선택하세요.",
    notFound: "일치하는 언어를 찾을 수 없음"
  },
  termsOfService: [
    { title: '이용약관 동의', content: ["이 웹사이트에 접근하고 사용함으로써 사용자는 이러한 서비스 약관을 준수하고 구속받는 데 동의합니다. 이러한 조건에 동의하지 않는 사용자는 즉시 웹사이트 사용을 중단해야 합니다."] },
    { title: '사용자 계정 책임', content: ["사용자는 자신의 계정 자격 증명의 기밀성을 유지할 책임이 있습니다. 사용자의 계정에서 발생하는 모든 활동은 계정 소유자의 단독 책임입니다. 사용자는 무단 계정 접근에 대해 웹사이트 관리자에게 즉시 알려야 합니다."] },
    { title: '책임 제한', content: ['웹사이트는 어떠한 보증도 없이 "있는 그대로" 콘텐츠를 제공합니다. 웹사이트 소유자는 플랫폼과의 사용자 상호작용으로 인해 발생하는 직접적, 간접적, 우발적, 결과적 또는 징벌적 손해에 대해 책임지지 않습니다.'] },
    {
      title: '사용자 행동 지침', content: [
        '웹사이트나 사용자에게 해를 끼칠 수 있는 유해하거나 악의적인 콘텐츠를 업로드하지 마세요.',
        '다른 사용자의 권리를 존중하세요.',
        '웹사이트 기능을 방해할 수 있는 활동을 피하세요.',
        '적용 가능한 현지 및 국제 법률을 준수하세요.',
      ]
    },
    { title: '약관 수정', content: ['웹사이트는 언제든지 이러한 조건을 수정할 권리를 보유합니다. 변경 후 웹사이트의 지속적인 사용은 새로운 조건에 대한 동의를 구성합니다.'] },
    { title: '해지 조항', content: ['웹사이트는 이러한 조건의 위반 또는 관리자가 적절하다고 판단하는 기타 이유로 사전 통지 없이 사용자 접근을 종료하거나 정지시킬 수 있습니다.'] },
    { title: '준거법', content: ['이러한 조건은 법률 충돌 원칙을 고려하지 않고 웹사이트가 주로 운영되는 관할권의 법률에 의해 규율됩니다.'] },
  ],
  termsAndConditions: '약관',
  close: '닫기',
  bias: {
    heading: "편향이란 무엇인가요?",
    explanation: "편향은 특정 정치적 견해, 정당 또는 아이디어를 지지하거나 선호하는 경향입니다. 이는 개인이 사건을 해석하고, 정보를 선택하며, 아이디어를 제시하는 방식에 영향을 미칠 수 있습니다. 저자가 정치적 편향을 가지고 있는 경우, 그들이 강조하는 사실, 사람이나 문제를 설명하는 방식, 그리고 도출하는 결론에 영향을 미쳐 그들의 관점에 영향을 줄 수 있습니다. 결과적으로 그들의 글은 완전히 중립적이거나 균형 잡힌 관점보다는 개인적인 신념을 반영할 수 있습니다.",
    socialist: "사회주의자",
    liberal: "자유주의자",
    wikipedia: "위키피디아",
    conservative: "보수적인",
    nationalist: "민족주의자",
    title: "읽기 편향",
  },
  common: {
    loadingPerspective: '관점 로딩 중...',
    fetchingUserInfo: '사용자 정보 가져오는 중...',
    home: '홈',
    about: '소개',
    help: '도움말',
    search: '검색',
    searchPlaceholder: 'Alternipedia 검색...',
    login: '로그인',
    logout: '로그아웃',
    signUp: '회원가입',
    profile: '프로필',
    settings: '설정',
    language: '언어',
    theme: '테마',
    comingSoon: 'Alternipedia가 곧 출시됩니다!',
    stayTuned: '기대해 주세요.',
    exampleArticle: '예시 문서:',
  },
  navigation: {
    aboutUs: '소개',
    currentEvents: '최근 사건',
    randomArticle: '임의 문서',
    help: '도움말',
  },
  footer: {
    pleaseLogin: '이 기능을 사용하려면 로그인하세요.',
    text: {
      "part1": "텍스트는 다음 라이선스 하에 제공됩니다:",
      "part2": "크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스",
      "part3": "; 추가 조건이 적용될 수 있습니다. 이 사이트를 사용함으로써, 귀하는 다음에 동의합니다",
      "part4": "이용약관",
      "part5": "및",
      "part6": "개인정보처리방침",
      "part7": ". Alternipedia는 오픈 소스 비영리 프로젝트입니다."
    },
    license: '라이선스',
    terms: '약관',
    privacy: '개인정보',
    contact: '연락처',
    disclaimers: '면책 조항',
    codeOfConduct: '행동 강령',
    statistics: '통계',
    cookieStatement: '쿠키 정책',
    developers: '개발자',
  },
  notFound: {
    title: '404',
    heading: '페이지를 찾을 수 없습니다',
    message: '죄송합니다. 찾으시는 페이지를 찾을 수 없습니다. 페이지가 삭제되었거나 링크가 잘못되었을 수 있습니다.',
    goHome: '홈으로 이동',
  },
  upgrade: {
    pro: '프로',
    goPro: '프로로 전환',
    upgradePrompt: '프리미엄 기능을 사용하려면 업그레이드하세요',
    title: '지식은 힘, 당신의 힘을 강화하세요.',
    month: '월',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipedia 전체 읽기',
        basicTheme: '기본 테마 사용자 지정 사용',
        saveArticles: '나중에 읽을 수 있도록 기사 저장',
      },
      buttonText: '내 플랜',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia의 모든 기능, 추가:',
      features: {
        customThemes: '내가 좋아하는 테마, 색상, 레이아웃, 글꼴로 Alternipedia 사용',
        notes: '메모 작성, 관리, Alternipedia 전체에서 내보내기',
        advancedSearch: '고급 검색 결과',
        semanticSearch: 'AI의 힘으로 의미 기반 검색',
        aiAssistant: 'Alternipedia AI 비서 WikiPal 사용 가능',
        topicMaps: '토픽 맵으로 더 나은 주제 연구',
        profileCustomization: '더 많은 프로필 맞춤 설정 옵션',
        aiTranslation: '모든 페이지 AI 번역',
        appSupport: 'Alternipedia 앱에서 지속적인 지원',
      },
      buttonText: '지금 업그레이드',
    },
  },
  article: {
    biasIntro: {
      socialist: '이 기사는 사회적 평등, 경제적 공정성 및 연대를 강조하는 사회주의적 관점을 표현하기 위해 커뮤니티 구성원이 작성했습니다.',
      liberal: '이 기사는 개인의 자유, 권리 및 사회적 진보를 강조하는 자유주의적 관점을 표현하기 위해 커뮤니티 구성원이 작성했습니다.',
      conservative: '이 기사는 전통, 사회적 안정 및 지속 가능성을 강조하는 보수적 관점을 표현하기 위해 커뮤니티 구성원이 작성했습니다.',
      nationalist: '이 기사는 문화적 정체성, 주권 및 국가적 자부심을 강조하는 민족주의적 관점을 표현하기 위해 커뮤니티 구성원이 작성했습니다.',
      wikipedia: {
        part1: '이 기사는 사실과 데이터를 편향 없이 제시하는 중립적 관점을 표현하기 위해 커뮤니티 구성원이 작성했습니다.',
        part2: '위키백과에서 보기 →'
      }
    },
    lastEdited: '마지막 편집',
    tools: '도구',
    close: '닫기',
    notFoundHeader: '위키피디아 문서를 찾을 수 없습니다',
    notFoundText: '다음 위키피디아 문서를 찾을 수 없습니다:',
    searchWikipediaText: '위키피디아 검색',
    content: '콘텐츠',
    article: '문서',
    discussion: '토론',
    read: '읽기',
    edit: '편집',
    history: '역사'
  }
};

// Russian dictionary
const ru: Dictionary = {
  unauthorised: {
    heading: 'Доступ запрещён',
    message: 'У вас нет прав для доступа к этой странице. Пожалуйста, убедитесь, что вы вошли в систему, или свяжитесь со службой поддержки.'
  },
  blockedAd: {
    part1: 'Похоже, вы используете блокировщик рекламы. Пожалуйста, отключите его, чтобы поддержать наш сайт — или',
    part2: 'перейдите на PRO',
    part3: 'для использования без рекламы.'
  },
  metadata: {
    description: 'Всесторонний ресурс и коллекция статей, представляющих разнообразные точки зрения на знания и идеи.',
    wikipedia: {
      part1: 'Исследуйте в Alternipedia',
      part2: '- альтернативные взгляды и идеи.',
    },
    conservative: {
      part1: 'С консервативной точки зрения',
      part2: '- традиции, стабильность и свободный рынок.',
    },
    nationalist: {
      part1: 'С националистической точки зрения',
      part2: '- национальный суверенитет и культурная идентичность.',
    },
    socialist: {
      part1: 'С социалистической точки зрения',
      part2: '- социальное равенство и права сообщества.',
    },
    liberal: {
      part1: 'С либеральной точки зрения',  
      part2: '- индивидуальная свобода и права, социальный прогресс.',
    },
  },
  accept: 'Принять',
  reject: 'Отклонить',
  cookieMessage: 'Мы и наши партнёры используем файлы cookie для персонализации рекламы, измерения производительности и предоставления социальных функций. Нажмите Принять, чтобы разрешить персонализированную рекламу, или Отклонить, чтобы отказаться от персонализированной рекламы. Подробнее см. в нашей Политике конфиденциальности.',
  login: {
    title: 'Войти',
    google: 'Продолжить с Google',
    facebook: 'Продолжить с Facebook',
    x: 'Продолжить с X',
    microsoft: 'Продолжить с Microsoft',
    policy: "Вход означает ваше согласие с нашими Условиями обслуживания и Политикой конфиденциальности.",
  },
  userMenu: {
    login: "Войти",
    contributions: "Вклад",
    savedArticles: "Сохранённые статьи",
    preferences: "Настройки",
    logout: "Выйти",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' }),
    "title": "Политика конфиденциальности",
    "lastUpdatedText": "Последнее обновление:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Добро пожаловать в Alternipedia — образовательную вики, созданную для представления различных точек зрения на знания и идеи. Мы ценим вашу конфиденциальность и обязуемся защищать вашу личную информацию. В этой политике объясняется, какие данные мы собираем, как мы их используем и какие у вас есть права."
      }
    ],
    "sections": [
      {
        "title": "Собираемая информация",
        "content": [
          {
            "type": "list",
            "items": [
              "Информация об аккаунте: при входе через провайдер OAuth (например, Google или Meta) мы получаем базовые данные, такие как имя, адрес электронной почты и изображение профиля (если доступно).",
              "Платежная информация: если вы совершаете платеж или пожертвование, Stripe безопасно обрабатывает транзакции. Мы никогда не храним и не видим номера вашей кредитной карты.",
              "Аналитические данные: мы используем Vercel Analytics для понимания общих шаблонов использования, таких как популярные страницы и работа сайта. Данные агрегированы и не идентифицируют вас лично.",
              "Техническая информация: при посещении сайта мы можем автоматически получать стандартные данные журнала, такие как тип браузера, устройство и IP-адрес, что помогает поддерживать безопасность и устранять неполадки.",
              "Adsense: наш веб-сайт использует Google Adsense для показа рекламы. Adsense может использовать файлы cookie для показа рекламы на основе вашей истории посещений нашего сайта или других сайтов."
            ]
          }
        ]
      },
      {
        "title": "Как мы используем вашу информацию",
        "content": [
          {
            "type": "list",
            "items": [
              "Операция и улучшение платформы Alternipedia",
              "Аутентификация пользователей и управление аккаунтами",
              "Безопасная обработка платежей через Stripe",
              "Мониторинг производительности и надежности сайта",
              "Ответы на запросы и обращения пользователей"
            ]
          },
          {
            "type": "paragraph",
            "text": "Мы не продаем, не сдаем в аренду и не передаем ваши личные данные."
          }
        ]
      },
      {
        "title": "Файлы cookie и отслеживание",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia не использует рекламные или отслеживающие файлы cookie."
          },
          {
            "type": "paragraph",
            "text": "Мы используем только необходимые файлы cookie, необходимые для сеансов входа и работы сайта."
          }
        ]
      },
      {
        "title": "Хранение данных и безопасность",
        "content": [
          {
            "type": "paragraph",
            "text": "Ваши данные надежно хранятся с использованием отраслевых стандартов шифрования и инфраструктуры хостинга."
          },
          {
            "type": "paragraph",
            "text": "Мы предпринимаем разумные меры для защиты ваших данных от потери, неправильного использования или несанкционированного доступа."
          }
        ]
      },
      {
        "title": "Ваши права",
        "content": [
          {
            "type": "list",
            "items": [
              "Доступ к личной информации или запрос её копии",
              "Исправление или удаление информации, которую мы храним о вас",
              "Отзыв согласия или закрытие аккаунта"
            ]
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "Текст в речь",
    translate: "Перевести",
    topicMap: "Карта тем",
    notes: "Мои заметки",
    wikipal: "Спросить у Wikipal",
    watchChanges: "Следить за изменениями",
    saveArticle: "Сохранить статью",
    saved: "Сохранено",
    shortUrl: "Короткая ссылка",
    citePage: "Цитировать эту страницу",
    QRCode: "QR код",
    DownloadPDF: "Скачать в PDF",
    printPage: "Напечатать эту страницу",
    pageInfo: "Информация о странице",
  },
  language: {
    searchMessage: "Поиск языка...",
    selectLanguage: "Выберите язык",
    description: "Выберите предпочитаемый язык для просмотра этой статьи.",
    notFound: "Не найдено подходящих языков"
  },
  termsOfService: [
    { title: 'Принятие Условий', content: ["Получая доступ и используя этот веб-сайт, пользователи соглашаются соблюдать и быть связанными данными Условиями обслуживания. Пользователи, которые не согласны с данными условиями, должны немедленно прекратить использование веб-сайта."] },
    { title: 'Ответственности Учетной Записи Пользователя', content: ["Пользователи несут ответственность за поддержание конфиденциальности учетных данных своей учетной записи. Любая деятельность, происходящая под учетной записью пользователя, является исключительной ответственностью владельца учетной записи. Пользователи должны немедленно уведомить администраторов веб-сайта о любом несанкционированном доступе к учетной записи."] },
    { title: 'Ограничение Ответственности', content: ['Веб-сайт предоставляет контент "как есть" без каких-либо гарантий. Владельцы веб-сайта не несут ответственности за прямые, косвенные, случайные, косвенные или штрафные убытки, возникающие в результате взаимодействия пользователей с платформой.'] },
    {
      title: 'Руководящие Принципы Поведения Пользователей', content: [
        'Не загружайте вредоносный или злонамеренный контент, который может навредить веб-сайту или его пользователям.',
        'Уважайте права других пользователей.',
        'Избегайте деятельности, которая может нарушить функциональность веб-сайта.',
        'Соблюдайте применимые местные и международные законы.',
      ]
    },
    { title: 'Изменения в Условиях', content: ['Веб-сайт оставляет за собой право изменять эти условия в любое время. Продолжение использования веб-сайта после изменений означает принятие новых условий.'] },
    { title: 'Пункт о Прекращении', content: ['Веб-сайт может прекратить или приостановить доступ пользователя без предварительного уведомления за нарушения данных условий или по любой другой причине, которую администрация сочтет подходящей.'] },
    { title: 'Применимое Право', content: ['Данные условия регулируются законами юрисдикции, где веб-сайт в основном работает, без учета принципов коллизии права.'] },
  ],
  termsAndConditions: 'Условия и положения',
  close: 'Закрыть',
  bias: {
    heading: "Что такое предвзятость?",
    explanation: "Предвзятость - это склонность поддерживать или благоприятствовать определенной политической точке зрения, партии или идее. Она может влиять на то, как человек интерпретирует события, выбирает информацию и представляет идеи. Когда у автора есть политическая предвзятость, это может повлиять на его перспективу, влияя на то, какие факты он подчеркивает, как он описывает людей или проблемы и какие выводы он делает. В результате его писание может отражать его личные убеждения, а не полностью нейтральную или сбалансированную точку зрения.",
    socialist: "Социалист",
    liberal: "Либерал",
    wikipedia: "Википедия",
    conservative: "Консервативный",
    nationalist: "Националист",
    title: "Предвзятость при чтении",
  },
  common: {
    loadingPerspective: 'Загрузка перспективы...',
    fetchingUserInfo: 'Получение информации о пользователе...',
    home: 'Главная',
    about: 'О нас',
    help: 'Помощь',
    search: 'Поиск',
    searchPlaceholder: 'Поиск в Alternipedia...',
    login: 'Войти',
    logout: 'Выйти',
    signUp: 'Регистрация',
    profile: 'Профиль',
    settings: 'Настройки',
    language: 'Язык',
    theme: 'Тема',
    comingSoon: 'Alternipedia скоро появится!',
    stayTuned: 'Следите за обновлениями.',
    exampleArticle: 'Пример статьи:',
  },
  navigation: {
    aboutUs: 'О нас',
    currentEvents: 'Текущие события',
    randomArticle: 'Случайная статья',
    help: 'Помощь',
  },
  footer: {
    pleaseLogin: 'Пожалуйста, войдите, чтобы использовать эту функцию.',
    text: {
      "part1": "Текст доступен по",
      "part2": "Лицензии Creative Commons Attribution-ShareAlike 4.0 International",
      "part3": "; могут применяться дополнительные условия. Используя этот сайт, вы соглашаетесь с",
      "part4": "Условиями",
      "part5": "и",
      "part6": "Политикой конфиденциальности",
      "part7": ". Alternipedia — это проект с открытым исходным кодом и некоммерческой организацией."
    },
    license: 'Лицензия',
    terms: 'Условия',
    privacy: 'Конфиденциальность',
    contact: 'Контакт',
    disclaimers: 'Отказ от ответственности',
    codeOfConduct: 'Кодекс поведения',
    statistics: 'Статистика',
    cookieStatement: 'Заявление о файлах cookie',
    developers: 'Разработчики',
  },
  notFound: {
    title: '404',
    heading: 'Страница не найдена',
    message: 'К сожалению, мы не смогли найти страницу, которую вы ищете. Страница могла быть удалена или ссылка неверна.',
    goHome: 'На главную',
  },
  upgrade: {
    pro: 'ПРО',
    goPro: 'Перейти на PRO',
    upgradePrompt: 'Обновите, чтобы открыть премиум функции',
    title: 'Знание — сила, увеличьте свою.',
    month: 'месяц',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Читать весь Alternipedia',
        basicTheme: 'Использовать базовую настройку темы',
        saveArticles: 'Сохранять статьи для последующего чтения',
      },
      buttonText: 'Ваш план',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Всё в Alternipedia, плюс:',
      features: {
        customThemes: 'Использовать Alternipedia с любимыми темами, цветами, макетами и шрифтами',
        notes: 'Создавайте заметки, управляйте ими и экспортируйте их из всего Alternipedia',
        advancedSearch: 'Расширенные результаты поиска',
        semanticSearch: 'Семантический поиск с помощью ИИ',
        aiAssistant: 'Доступ к WikiPal, вашему AI-ассистенту Alternipedia',
        topicMaps: 'Лучшее исследование тем с помощью Topic Maps',
        profileCustomization: 'Больше настроек профиля',
        aiTranslation: 'AI-перевод для любой страницы',
        appSupport: 'Поддержка в приложении Alternipedia',
      },
      buttonText: 'Обновить сейчас',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Эта статья была создана членами сообщества, чтобы выразить социалистическую точку зрения, подчеркивающую социальное равенство, экономическую справедливость и солидарность.',
      liberal: 'Эта статья была создана членами сообщества, чтобы выразить либеральную точку зрения, подчеркивающую индивидуальную свободу, права и социальный прогресс.',
      conservative: 'Эта статья была создана членами сообщества, чтобы выразить консервативную точку зрения, подчеркивающую традиции, социальную стабильность и преемственность.',
      nationalist: 'Эта статья была создана членами сообщества, чтобы выразить националистическую точку зрения, подчеркивающую культурную идентичность, суверенитет и национальную гордость.',
      wikipedia: {
        part1: 'Эта статья была создана членами сообщества, чтобы выразить нейтральную точку зрения, подчеркивающую беспристрастное представление фактов и данных.',
        part2: 'Смотреть на Википедии →'
      }
    },
    lastEdited: 'Последнее редактирование',
    tools: 'Инструменты',
    content: 'Содержание',
    close: 'Закрыть',
    notFoundHeader: 'Статья Википедии не найдена',
    notFoundText: 'Не найдена следующая статья Википедии:',
    searchWikipediaText: 'Искать в Википедии',
    article: 'Статья',
    discussion: 'Обсуждение',
    read: 'Читать',
    edit: 'Редактировать',
    history: 'История'
  }
};

// Arabic
const ar: Dictionary = {
  unauthorised: {
    heading: 'تم رفض الوصول',
    message: 'أنت غير مخول للوصول إلى هذه الصفحة. يرجى التحقق من تسجيل الدخول أو الاتصال بالدعم.'
  },
  blockedAd: {
    part1: 'يبدو أنك تستخدم مانع الإعلانات. الرجاء تعطيله لدعم موقعنا — أو',
    part2: 'الترقية إلى PRO',
    part3: 'لتجربة خالية من الإعلانات.'
  },
  metadata: {
    description: 'مصدر شامل ومجموعة من المقالات التي تقدم وجهات نظر متنوعة حول المعرفة والأفكار.',
    wikipedia: {
      part1: 'استكشف في Alternipedia',
      part2: '- وجهات نظر وأفكار بديلة.',
    },
    conservative: {
      part1: 'من منظور محافظ',
      part2: '- التقاليد، الاستقرار، والسوق الحرة.',
    },
    nationalist: {
      part1: 'من منظور قومي',
      part2: '- السيادة الوطنية والهوية الثقافية.',
    },
    socialist: {
      part1: 'من منظور اشتراكي',  
      part2: '- العدالة الاجتماعية، والمساواة، وحقوق العمال.',
    },
    liberal: {
      part1: 'من منظور ليبرالي',
      part2: '- الحرية الفردية، والحقوق، والتقدم الاجتماعي.',
    },
  },
  accept: 'قبول',
  reject: 'رفض',
  cookieMessage: 'نحن وشركاؤنا نستخدم ملفات تعريف الارتباط لتخصيص الإعلانات وقياس الأداء وتوفير ميزات اجتماعية. انقر على قبول للسماح بالإعلانات المخصصة أو رفض لرفض الإعلانات المخصصة. راجع سياسة الخصوصية لمزيد من المعلومات.',
  login: {
    title: 'تسجيل الدخول',
    google: 'المتابعة مع Google',
    facebook: 'المتابعة مع Facebook',
    x: 'المتابعة مع X',
    microsoft: 'المتابعة مع Microsoft',
    policy: "بتسجيل الدخول، فإنك توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا.",
  },
  userMenu: {
    login: "تسجيل الدخول",
    contributions: "المساهمات",
    savedArticles: "المقالات المحفوظة",
    preferences: "التفضيلات",
    logout: "تسجيل الخروج",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' }),
    "title": "سياسة الخصوصية",
    "lastUpdatedText": "آخر تحديث:",
    "intro": [
      {
        "type": "paragraph",
        "text": "مرحبًا بك في Alternipedia، وهي موسوعة تعليمية تهدف إلى تقديم وجهات نظر متنوعة حول المعرفة والأفكار. نحن نُقدّر خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح هذه السياسة ما نجمعه، وكيف نستخدمه، وما هي حقوقك."
      }
    ],
    "sections": [
      {
        "title": "المعلومات التي نجمعها",
        "content": [
          {
            "type": "paragraph",
            "text": "نجمع فقط الحد الأدنى من المعلومات اللازمة لتقديم خدماتنا وتحسينها. وقد يشمل ذلك:"
          },
          {
            "type": "list",
            "items": [
              "معلومات الحساب: عند تسجيل الدخول باستخدام مزود OAuth (مثل Google أو Meta أو غيرها)، نحصل على تفاصيل أساسية مثل اسمك وعنوان بريدك الإلكتروني وصورة ملفك الشخصي (إن وجدت).",
              "معلومات الدفع: إذا اخترت إجراء دفعة أو تبرع، فنحن نستخدم Stripe لمعالجة المعاملة بأمان. Stripe تتعامل مع تفاصيل الدفع الخاصة بك — نحن لا نخزن أو نرى أرقام بطاقتك الائتمانية.",
              "بيانات التحليلات: نستخدم Vercel Analytics لفهم أنماط الاستخدام العامة مثل الصفحات الأكثر زيارة وأداء الموقع. يتم تجميع هذه البيانات ولا تحدد هويتك الشخصية.",
              "المعلومات التقنية: عند زيارة موقعنا، قد نتلقى تلقائيًا بيانات السجل القياسية مثل نوع المتصفح والجهاز وعنوان IP للمساعدة في الحفاظ على الأمان وحل المشكلات.",
              "Adsense: يستخدم موقعنا Google Adsense لعرض الإعلانات. قد يستخدم Adsense ملفات تعريف الارتباط لعرض إعلانات بناءً على تاريخ زياراتك لموقعنا أو مواقع أخرى."
            ]
          }
        ]
      },
      {
        "title": "كيف نستخدم معلوماتك",
        "content": [
          {
            "type": "paragraph",
            "text": "نستخدم معلوماتك فقط من أجل:"
          },
          {
            "type": "list",
            "items": [
              "تشغيل وتحسين منصة Alternipedia",
              "توثيق المستخدمين وإدارة الحسابات",
              "معالجة المدفوعات بأمان عبر Stripe",
              "مراقبة أداء الموقع وموثوقيته",
              "الرد على استفسارات المستخدمين وطلباتهم عبر الموقع"
            ]
          },
          {
            "type": "paragraph",
            "text": "نحن لا نبيع أو نؤجر أو نتاجر ببياناتك الشخصية."
          }
        ]
      },
      {
        "title": "ملفات تعريف الارتباط والتتبع",
        "content": [
          {
            "type": "paragraph",
            "text": "لا تستخدم Alternipedia أي ملفات تعريف ارتباط للإعلانات أو التتبع."
          },
          {
            "type": "paragraph",
            "text": "نستخدم فقط ملفات تعريف الارتباط الأساسية المطلوبة لجلسات تسجيل الدخول ووظائف الموقع."
          }
        ]
      },
      {
        "title": "تخزين البيانات والأمان",
        "content": [
          {
            "type": "paragraph",
            "text": "يتم تخزين بياناتك بشكل آمن باستخدام تشفير وبنية استضافة بمعايير صناعية."
          },
          {
            "type": "paragraph",
            "text": "نتخذ خطوات معقولة لحماية معلوماتك من الفقدان أو إساءة الاستخدام أو الوصول غير المصرح به."
          },
          {
            "type": "paragraph",
            "text": "نظرًا لأن الاستضافة والتحليلات لدينا عالمية (بما في ذلك خدمات مثل Vercel وStripe)، فقد تتم معالجة بياناتك في بلدان أخرى. نحن نتعامل فقط مع مزودين يلتزمون بمعايير قوية للخصوصية."
          }
        ]
      },
      {
        "title": "الخدمات التابعة لأطراف ثالثة",
        "content": [
          {
            "type": "paragraph",
            "text": "نحن نعتمد على أطراف ثالثة موثوقة لتقديم بعض خدماتنا:"
          },
          {
            "type": "list",
            "items": [
              "موفرو OAuth – لتسجيل الدخول الآمن",
              "Stripe – لمعالجة المدفوعات",
              "Vercel Analytics – لتحليلات الأداء المجهولة"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "سياسة خصوصية Stripe", "url": "https://stripe.com/privacy" },
              { "label": "سياسة خصوصية Vercel", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          },
          {
            "type": "paragraph",
            "text": "قد تقوم كل من هذه الخدمات بجمع ومعالجة معلوماتك وفقًا لسياسات الخصوصية الخاصة بها."
          }
        ]
      },
      {
        "title": "حقوقك",
        "content": [
          {
            "type": "paragraph",
            "text": "اعتمادًا على موقعك، قد يكون لديك الحق في:"
          },
          {
            "type": "list",
            "items": [
              "الوصول إلى معلوماتك الشخصية أو طلب نسخة منها",
              "تصحيح أو حذف المعلومات التي نحتفظ بها عنك",
              "سحب الموافقة أو إغلاق حسابك"
            ]
          },
          {
            "type": "paragraph",
            "text": "إذا كنت ترغب في ممارسة هذه الحقوق، يرجى الاتصال بنا من خلال نموذج الاتصال على موقعنا."
          }
        ]
      },
      {
        "title": "خصوصية الأطفال",
        "content": [
          {
            "type": "paragraph",
            "text": "تم تصميم Alternipedia لجمهور عام وليس للأطفال دون سن 13 عامًا."
          },
          {
            "type": "paragraph",
            "text": "نحن لا نجمع عن عمد معلومات شخصية من القاصرين."
          }
        ]
      },
      {
        "title": "التغييرات في هذه السياسة",
        "content": [
          {
            "type": "paragraph",
            "text": "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التحسينات أو المتطلبات القانونية."
          },
          {
            "type": "paragraph",
            "text": "عندما نقوم بذلك، سننشر تاريخ التحديث في أعلى هذه الصفحة."
          }
        ]
      },
      {
        "title": "اتصل بنا",
        "content": [
          {
            "type": "paragraph",
            "text": "إذا كانت لديك أي أسئلة أو طلبات تتعلق بالخصوصية، يرجى الاتصال بنا عبر موقع Alternipedia."
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "قبول الشروط", "content": ["بالوصول إلى هذا الموقع واستخدامه، يوافق المستخدمون على الالتزام بهذه الشروط. يجب على المستخدمين الذين لا يوافقون على هذه الشروط التوقف عن استخدام الموقع فوراً."] },
    { "title": "مسؤوليات حساب المستخدم", "content": ["المستخدمون مسؤولون عن الحفاظ على سرية بيانات حساباتهم. أي نشاط يتم تحت حساب المستخدم يقع على عاتق صاحب الحساب وحده. يجب على المستخدمين إخطار إدارة الموقع فوراً بأي وصول غير مصرح به."] },
    { "title": "تحديد المسؤولية", "content": ["الموقع يقدم المحتوى 'كما هو' دون أي ضمانات. مالكو الموقع غير مسؤولين عن أي أضرار مباشرة، غير مباشرة، عرضية، تبعية أو جزائية ناتجة عن تفاعل المستخدمين مع المنصة."] },
    { "title": "إرشادات سلوك المستخدم", "content": ["عدم تحميل محتوى ضار أو خبيث قد يضر بالموقع أو المستخدمين.", "احترام حقوق المستخدمين الآخرين.", "تجنب الأنشطة التي قد تعطل وظائف الموقع.", "الالتزام بالقوانين المحلية والدولية المعمول بها."] },
    { "title": "تعديلات الشروط", "content": ["يحتفظ الموقع بالحق في تعديل هذه الشروط في أي وقت. استمرار استخدام الموقع بعد التعديلات يعني قبول الشروط الجديدة."] },
    { "title": "بند الإنهاء", "content": ["يجوز للموقع إنهاء أو تعليق وصول المستخدم دون إشعار مسبق في حال انتهاك الشروط أو لأي سبب آخر تراه الإدارة مناسباً."] },
    { "title": "القانون الواجب التطبيق", "content": ["تخضع هذه الشروط لقوانين الولاية القضائية التي يُدار فيها الموقع أساسياً، بغض النظر عن مبادئ تعارض القوانين."] }

  ],
  tools: {
    textToSpeech: "تحويل النص إلى كلام",
    translate: "ترجمة",
    topicMap: "خريطة الموضوعات",
    notes: "ملاحظاتي",
    wikipal: "اسأل ويكيبال",
    watchChanges: "مراقبة التغييرات",
    saveArticle: "حفظ المقالة",
    saved: "تم الحفظ",
    shortUrl: "رابط قصير",
    citePage: "استشهد بهذه الصفحة",
    QRCode: "رمز الاستجابة السريعة",
    DownloadPDF: "تنزيل كملف PDF",
    printPage: "طباعة هذه الصفحة",
    pageInfo: "معلومات الصفحة",
  },
  language: {
    searchMessage: "البحث عن اللغة...",
    selectLanguage: "اختر اللغة",
    description: "اختر لغتك المفضلة لعرض هذه المقالة.",
    notFound: "لم يتم العثور على لغات مطابقة"
  },
  termsAndConditions: 'الشروط والأحكام',
  close: 'إغلاق',
  bias: {
    heading: "ما هو التحيز؟",
    explanation: "التحيز هو ميل لدعم أو تفضيل وجهة نظر سياسية معينة أو حزب أو فكرة. يمكن أن يؤثر على كيفية تفسير الشخص للأحداث واختيار المعلومات وتقديم الأفكار. عندما يكون لدى المؤلف تحيز سياسي، فقد يؤثر ذلك على وجهة نظره من خلال التأثير على الحقائق التي يبرزها، وكيف يصف الأشخاص أو القضايا، والاستنتاجات التي يتوصل إليها. نتيجة لذلك، قد تعكس كتاباته معتقداته الشخصية بدلاً من وجهة نظر محايدة أو متوازنة تمامًا.",
    socialist: "اشتراكي",
    liberal: "ليبرالي",
    wikipedia: "ويكيبيديا",
    conservative: "محافظ",
    nationalist: "قومي",
    title: "التحيز في القراءة",
  },
  common: {
    loadingPerspective: 'جارٍ تحميل المنظور...',
    fetchingUserInfo: 'جارٍ جلب معلومات المستخدم...',
    home: 'الرئيسية',
    about: 'حول',
    help: 'مساعدة',
    search: 'بحث',
    searchPlaceholder: 'ابحث في Alternipedia...',
    login: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
    signUp: 'إنشاء حساب',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    language: 'اللغة',
    theme: 'السمة',
    comingSoon: 'Alternipedia قادم قريبًا!',
    stayTuned: 'تابعنا.',
    exampleArticle: 'مقالة نموذجية:',
  },
  navigation: {
    aboutUs: 'معلومات عنا',
    currentEvents: 'الأحداث الجارية',
    randomArticle: 'مقالة عشوائية',
    help: 'مساعدة',
  },
  footer: {
    pleaseLogin: 'يرجى تسجيل الدخول لاستخدام هذه الميزة.',
    text: {
      "part1": "النص متاح بموجب",
      "part2": "ترخيص المشاع الإبداعي النسب-مشاركة على نفس الرخصة 4.0 الدولي",
      "part3": "; قد تنطبق شروط إضافية. باستخدامك لهذا الموقع، فإنك توافق على",
      "part4": "الشروط والأحكام",
      "part5": "و",
      "part6": "سياسة الخصوصية",
      "part7": ". Alternipedia هو مشروع مفتوح المصدر غير ربحي."
    },
    license: 'الرخصة',
    terms: 'الشروط',
    privacy: 'الخصوصية',
    contact: 'اتصل بنا',
    disclaimers: 'إخلاء المسؤولية',
    codeOfConduct: 'مدونة السلوك',
    statistics: 'الإحصائيات',
    cookieStatement: 'بيان ملفات تعريف الارتباط',
    developers: 'المطورون',
  },
  notFound: {
    title: '404',
    heading: 'الصفحة غير موجودة',
    message: 'عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون الصفحة قد تمت إزالتها أو أن الرابط غير صحيح.',
    goHome: 'الذهاب إلى الصفحة الرئيسية',
  },
  upgrade: {
    pro: 'برو',
    goPro: 'اشترك في برو',
    upgradePrompt: 'قم بالترقية لفتح الميزات المميزة',
    title: 'المعرفة قوة، عزز معرفتك.',
    month: 'شهر',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'اقرأ كل المحتوى في Alternipedia',
        basicTheme: 'استخدم تخصيص السمة الأساسية',
        saveArticles: 'احفظ المقالات للقراءة لاحقًا',
      },
      buttonText: 'خطةك',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'كل شيء في Alternipedia، بالإضافة إلى:',
      features: {
        customThemes: 'استخدم Alternipedia بالسمات والألوان والتصميمات والخطوط المفضلة لديك',
        notes: 'قم بتدوين الملاحظات وإدارتها وتصديرها من جميع أنحاء Alternipedia',
        advancedSearch: 'نتائج بحث متقدمة',
        semanticSearch: 'بحث دلالي مع قوة الذكاء الاصطناعي',
        aiAssistant: 'الوصول إلى WikiPal، مساعدك الذكي في Alternipedia',
        topicMaps: 'بحث أفضل عن المواضيع باستخدام خرائط المواضيع',
        profileCustomization: 'خيارات تخصيص الملف الشخصي أكثر',
        aiTranslation: 'ترجمة ذكية لأي صفحة',
        appSupport: 'الدعم المستمر في تطبيق Alternipedia',
      },
      buttonText: 'قم بالترقية الآن',
    },
  },
  article: {
    biasIntro: {
      socialist: 'تم إنشاء هذه المقالة بواسطة أعضاء المجتمع للتعبير عن وجهة نظر اشتراكية تبرز المساواة الاجتماعية والعدالة الاقتصادية والتضامن.',
      liberal: 'تم إنشاء هذه المقالة بواسطة أعضاء المجتمع للتعبير عن وجهة نظر ليبرالية تبرز الحرية الفردية والحقوق والتقدم الاجتماعي.',
      conservative: 'تم إنشاء هذه المقالة بواسطة أعضاء المجتمع للتعبير عن وجهة نظر محافظة تبرز التقاليد والاستقرار الاجتماعي والاستمرارية.',
      nationalist: 'تم إنشاء هذه المقالة بواسطة أعضاء المجتمع للتعبير عن وجهة نظر قومية تبرز الهوية الثقافية  والسيادة والفخر الوطني.',
      wikipedia: {
        part1: 'تم إنشاء هذه المقالة بواسطة أعضاء المجتمع للتعبير عن وجهة نظر محايدة تبرز العرض غير المتحيز للحقائق والبيانات.',
        part2: 'عرض على ويكيبيديا →'  
      }
    },
    lastEdited: 'آخر تعديل',
    tools: 'الأدوات',
    content: 'المحتوى',
    article: 'مقال',
    close: 'إغلاق',
    notFoundHeader: 'لم يتم العثور على مقالة ويكيبيديا',
    notFoundText: 'لم يتم العثور على مقالة ويكيبيديا التالية:',
    searchWikipediaText: 'ابحث في ويكيبيديا',
    discussion: 'مناقشة',
    read: 'قراءة',
    edit: 'تحرير',
    history: 'السجل'
  }
};

// Hindi
const hi: Dictionary = {
  unauthorised: {
    heading: 'प्रवेश अस्वीकृत',
    message: 'आपको इस पृष्ठ तक पहुँचने की अनुमति नहीं है। कृपया जांचें कि क्या आप लॉग इन हैं या समर्थन से संपर्क करें।'
  },
  blockedAd: {
    part1: 'ऐसा लगता है आप एक विज्ञापन ब्लॉकर का उपयोग कर रहे हैं। कृपया इसे अक्षम करें ताकि आप हमारी साइट का समर्थन कर सकें — या',
    part2: 'PRO में अपग्रेड करें',
    part3: 'एक विज्ञापन-मुक्त अनुभव के लिए।'
  },
  metadata: {
    description: 'एक व्यापक संसाधन और लेखों का संग्रह जो ज्ञान और विचारों पर विविध दृष्टिकोण प्रस्तुत करता है।',
    wikipedia: {
      part1: 'Alternipedia में एक्सप्लोर करें',
      part2: '- वैकल्पिक दृष्टिकोण और विचार।',
    },
    conservative: {
      part1: 'एक रूढ़िवादी दृष्टिकोण से',
      part2: '- परंपरा, स्थिरता, और मुक्त बाजार।',
    },
    nationalist: {
      part1: 'एक राष्ट्रवादी दृष्टिकोण से',
      part2: '- राष्ट्रीय संप्रभुता और सांस्कृतिक पहचान।',
    },
    socialist: {
      part1: 'एक समाजवादी दृष्टिकोण से',  
      part2: '- सामाजिक न्याय, समानता, और श्रमिक अधिकार।',
    },
    liberal: {
      part1: 'एक उदारवादी दृष्टिकोण से',
      part2: '- व्यक्तिगत स्वतंत्रता, अधिकार, और सामाजिक प्रगति।',
    },
  },
  accept: 'स्वीकार करें',
  reject: 'अस्वीकार करें',
  cookieMessage: 'हम और हमारे भागीदार विज्ञापन को व्यक्तिगत बनाने, प्रदर्शन मापने और सामाजिक सुविधाएँ प्रदान करने के लिए कुकीज़ का उपयोग करते हैं। व्यक्तिगत विज्ञापनों की अनुमति देने के लिए स्वीकार पर क्लिक करें या व्यक्तिगत विज्ञापन अस्वीकार करने के लिए अस्वीकार पर क्लिक करें। अधिक जानकारी के लिए हमारी गोपनीयता नीति देखें।',
  login: {
    title: 'लॉग इन करें',
    google: 'Google के साथ जारी रखें',
    facebook: 'Facebook के साथ जारी रखें',
    x: 'X के साथ जारी रखें',
    microsoft: 'Microsoft के साथ जारी रखें',
    policy: "लॉग इन करने का मतलब है कि आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं।",
  },
  userMenu: {
    login: "लॉग इन करें",
    contributions: "योगदान",
    savedArticles: "सहेजे गए लेख",
    preferences: "प्राथमिकताएं",
    logout: "लॉग आउट",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('hi-IN', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('hi-IN', { year: 'numeric', month: 'long' }),
    "title": "गोपनीयता नीति",
    "lastUpdatedText": "अंतिम अपडेट:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipedia में आपका स्वागत है — एक शैक्षिक विकी जिसे ज्ञान और विचारों पर विविध दृष्टिकोण प्रस्तुत करने के लिए डिज़ाइन किया गया है। हम आपकी गोपनीयता को महत्व देते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह नीति बताती है कि हम क्या एकत्र करते हैं, इसका उपयोग कैसे करते हैं, और आपके अधिकार क्या हैं।"
      }
    ],
    "sections": [
      {
        "title": "हम कौन सी जानकारी एकत्र करते हैं",
        "content": [
          {
            "type": "paragraph",
            "text": "हम केवल उतनी ही जानकारी एकत्र करते हैं जो हमारी सेवाएं प्रदान करने और सुधारने के लिए आवश्यक है। इसमें शामिल हो सकता है:"
          },
          {
            "type": "list",
            "items": [
              "खाता जानकारी: जब आप किसी OAuth प्रदाता (जैसे Google, Meta, आदि) से साइन इन करते हैं, तो हमें आपका नाम, ईमेल पता और प्रोफ़ाइल चित्र (यदि उपलब्ध हो) जैसी बुनियादी जानकारी प्राप्त होती है।",
              "भुगतान जानकारी: यदि आप भुगतान या दान करना चुनते हैं, तो हम Stripe का उपयोग करते हैं। Stripe आपके भुगतान विवरण को सुरक्षित रूप से संसाधित करता है — हम कभी भी आपके कार्ड नंबर नहीं देखते या संग्रहीत करते।",
              "एनालिटिक्स डेटा: हम Vercel Analytics का उपयोग करते हैं ताकि यह समझा जा सके कि कौन से पृष्ठ लोकप्रिय हैं और साइट कैसे प्रदर्शन कर रही है। ये डेटा एकत्रित रूप में होता है और आपकी व्यक्तिगत पहचान नहीं करता।",
              "तकनीकी जानकारी: जब आप हमारी साइट पर आते हैं, तो हमें स्वचालित रूप से आपके ब्राउज़र प्रकार, डिवाइस और IP पता जैसी मानक लॉग जानकारी प्राप्त हो सकती है, जिससे सुरक्षा बनाए रखने में मदद मिलती है।",
              "Adsense: हमारी साइट Google Adsense का उपयोग करती है विज्ञापन दिखाने के लिए। Adsense कुकीज़ का उपयोग कर सकता है ताकि आपकी हमारी साइट या अन्य साइटों पर आपकी यात्रा के आधार पर विज्ञापन दिखाए जा सकें।"
            ]
          }
        ]
      },
      {
        "title": "हम आपकी जानकारी का उपयोग कैसे करते हैं",
        "content": [
          {
            "type": "paragraph",
            "text": "हम आपकी जानकारी का उपयोग केवल निम्नलिखित उद्देश्यों के लिए करते हैं:"
          },
          {
            "type": "list",
            "items": [
              "Alternipedia प्लेटफ़ॉर्म को संचालित और सुधारने के लिए",
              "उपयोगकर्ताओं को प्रमाणित करने और खातों का प्रबंधन करने के लिए",
              "Stripe के माध्यम से सुरक्षित भुगतान प्रक्रिया के लिए",
              "साइट प्रदर्शन और विश्वसनीयता की निगरानी के लिए",
              "उपयोगकर्ता प्रश्नों या अनुरोधों का उत्तर देने के लिए"
            ]
          },
          {
            "type": "paragraph",
            "text": "हम आपकी व्यक्तिगत जानकारी को न बेचते हैं, न किराए पर देते हैं, न साझा करते हैं।"
          }
        ]
      },
      {
        "title": "कुकीज़ और ट्रैकिंग",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia विज्ञापन या ट्रैकिंग कुकीज़ का उपयोग नहीं करता।"
          },
          {
            "type": "paragraph",
            "text": "हम केवल लॉगिन और साइट कार्यक्षमता के लिए आवश्यक कुकीज़ का उपयोग करते हैं।"
          }
        ]
      },
      {
        "title": "डेटा भंडारण और सुरक्षा",
        "content": [
          {
            "type": "paragraph",
            "text": "आपका डेटा उद्योग-मानक एन्क्रिप्शन और होस्टिंग ढांचे का उपयोग करके सुरक्षित रूप से संग्रहीत किया जाता है।"
          },
          {
            "type": "paragraph",
            "text": "हम आपकी जानकारी को हानि, दुरुपयोग या अनधिकृत पहुंच से बचाने के लिए उचित कदम उठाते हैं।"
          },
          {
            "type": "paragraph",
            "text": "हमारे होस्टिंग और एनालिटिक्स वैश्विक हैं (जैसे Vercel और Stripe), इसलिए आपका डेटा अन्य देशों में संसाधित हो सकता है। हम केवल उन प्रदाताओं के साथ काम करते हैं जो मजबूत गोपनीयता मानकों का पालन करते हैं।"
          }
        ]
      },
      {
        "title": "तृतीय-पक्ष सेवाएं",
        "content": [
          {
            "type": "paragraph",
            "text": "हमारी कुछ सेवाओं को विश्वसनीय तृतीय पक्षों के माध्यम से प्रदान किया जाता है:"
          },
          {
            "type": "list",
            "items": [
              "OAuth प्रदाता – सुरक्षित लॉगिन के लिए",
              "Stripe – भुगतान प्रसंस्करण के लिए",
              "Vercel Analytics – प्रदर्शन विश्लेषण के लिए"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Stripe गोपनीयता नीति", "url": "https://stripe.com/privacy" },
              { "label": "Vercel गोपनीयता नीति", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          },
          {
            "type": "paragraph",
            "text": "इन सेवाओं में से प्रत्येक अपनी स्वयं की गोपनीयता नीतियों के अनुसार आपका डेटा एकत्र और संसाधित कर सकती है।"
          }
        ]
      },
      {
        "title": "आपके अधिकार",
        "content": [
          {
            "type": "paragraph",
            "text": "आपके स्थान के आधार पर, आपके पास निम्नलिखित अधिकार हो सकते हैं:"
          },
          {
            "type": "list",
            "items": [
              "अपनी व्यक्तिगत जानकारी तक पहुंचना या उसकी प्रति प्राप्त करना",
              "हमारे पास संग्रहीत जानकारी को सही या हटाना",
              "सहमति वापस लेना या खाता बंद करना"
            ]
          },
          {
            "type": "paragraph",
            "text": "यदि आप इन अधिकारों का उपयोग करना चाहते हैं, तो कृपया हमारी वेबसाइट पर संपर्क फ़ॉर्म के माध्यम से हमसे संपर्क करें।"
          }
        ]
      },
      {
        "title": "बच्चों की गोपनीयता",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia सामान्य दर्शकों के लिए डिज़ाइन किया गया है और 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है।"
          },
          {
            "type": "paragraph",
            "text": "हम जानबूझकर नाबालिगों से व्यक्तिगत जानकारी एकत्र नहीं करते।"
          }
        ]
      },
      {
        "title": "इस नीति में परिवर्तन",
        "content": [
          {
            "type": "paragraph",
            "text": "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं ताकि सुधार या कानूनी आवश्यकताओं को दर्शाया जा सके।"
          },
          {
            "type": "paragraph",
            "text": "जब हम ऐसा करते हैं, तो हम इस पृष्ठ के शीर्ष पर अद्यतन तिथि पोस्ट करेंगे।"
          }
        ]
      },
      {
        "title": "हमसे संपर्क करें",
        "content": [
          {
            "type": "paragraph",
            "text": "यदि आपके पास गोपनीयता से संबंधित कोई प्रश्न या अनुरोध हैं, तो कृपया Alternipedia वेबसाइट के माध्यम से हमसे संपर्क करें।"
          }
        ]
      }
    ]
  },
  tools: {
    textToSpeech: "टेक्स्ट टू स्पीच",
    translate: "अनुवाद करें",
    topicMap: "टॉपिक मैप",
    notes: "मेरे नोट्स",
    wikipal: "विकिपाल से पूछें",
    watchChanges: "परिवर्तन देखें",
    saveArticle: "लेख सहेजें",
    saved: "सहेजा गया",
    shortUrl: "शॉर्ट लिंक",
    citePage: "इस पृष्ठ का संदर्भ दें",
    QRCode: "QR कोड",
    DownloadPDF: "PDF के रूप में डाउनलोड करें",
    printPage: "इस पृष्ठ को प्रिंट करें",
    pageInfo: "पृष्ठ जानकारी",
  },
  common: {
    loadingPerspective: 'परिप्रेक्ष्य लोड हो रहा है...',
    fetchingUserInfo: 'उपयोगकर्ता जानकारी ला रहा है...',
    home: 'होम',
    about: 'हमारे बारे में',
    help: 'मदद',
    search: 'खोजें',
    searchPlaceholder: 'Alternipedia में खोजें...',
    login: 'लॉग इन करें',
    logout: 'लॉग आउट करें',
    signUp: 'साइन अप करें',
    profile: 'प्रोफाइल',
    settings: 'सेटिंग्स',
    language: 'भाषा',
    theme: 'थीम',
    comingSoon: 'Alternipedia जल्द ही आ रहा है!',
    stayTuned: 'जुड़े रहें।',
    exampleArticle: 'उदाहरण लेख:',
  },
  notFound: {
    title: '404',
    heading: 'पृष्ठ नहीं मिला',
    message: 'क्षमा करें, हम उस पृष्ठ को नहीं ढूंढ सके जिसे आप खोज रहे थे। पृष्ठ को हटा दिया गया हो सकता है या लिंक गलत है।',
    goHome: 'मुख पृष्ठ पर जाएं',
  },
  termsOfService: [
    { "title": "Terms की स्वीकृति", "content": ["इस वेबसाइट का उपयोग करके, उपयोगकर्ता इन सेवा शर्तों से सहमत होते हैं और इन्हें स्वीकार करते हैं। जो उपयोगकर्ता इन शर्तों से सहमत नहीं हैं, उन्हें वेबसाइट का उपयोग तुरंत बंद कर देना चाहिए।"] },
    { "title": "उपयोगकर्ता खाता जिम्मेदारियाँ", "content": ["उपयोगकर्ता अपने खाता क्रेडेंशियल्स की गोपनीयता बनाए रखने के लिए जिम्मेदार हैं। उपयोगकर्ता के खाते के तहत होने वाली कोई भी गतिविधियाँ खाता धारक की एकमात्र जिम्मेदारी हैं। उपयोगकर्ताओं को किसी भी अनधिकृत खाता पहुँच के बारे में तुरंत वेबसाइट प्रशासकों को सूचित करना चाहिए।"] },
    { "title": "जिम्मेदारी की सीमा", "content": ["वेबसाइट 'जैसा है' के आधार पर सामग्री प्रदान करती है, बिना किसी वारंटी के। वेबसाइट मालिक उपयोगकर्ता के प्लेटफ़ॉर्म के साथ इंटरएक्शन से उत्पन्न होने वाले प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, परिणामी, या दंडात्मक नुकसानों के लिए जिम्मेदार नहीं होंगे।"] },
    { "title": "उपयोगकर्ता आचार संहिता दिशानिर्देश", "content": ["ऐसा हानिकारक या दुर्भावनापूर्ण सामग्री अपलोड न करें जो वेबसाइट या इसके उपयोगकर्ताओं को नुकसान पहुँचा सकती है।", "अन्य उपयोगकर्ताओं के अधिकारों का सम्मान करें।", "ऐसी गतिविधियों से बचें जो वेबसाइट की कार्यक्षमता को बाधित कर सकती हैं।", "लागू स्थानीय और अंतरराष्ट्रीय कानूनों का पालन करें।"] },
    { "title": "शर्तों में संशोधन", "content": ["वेबसाइट इन शर्तों को किसी भी समय संशोधित करने का अधिकार सुरक्षित रखती है। परिवर्तनों के बाद वेबसाइट का निरंतर उपयोग नए शर्तों की स्वीकृति मानी जाती है।"] },
    { "title": "समाप्ति खंड", "content": ["वेबसाइट इन शर्तों का उल्लंघन करने या प्रशासन द्वारा उचित समझे जाने वाले किसी अन्य कारण से उपयोगकर्ता की पहुँच को पूर्व सूचना के बिना समाप्त या निलंबित कर सकती है।"] },
    { "title": "प्रभावी कानून", "content": ["ये शर्तें उस क्षेत्राधिकार के कानूनों द्वारा शासित हैं जहाँ वेबसाइट मुख्य रूप से संचालित होती है, कानूनों के संघर्ष के सिद्धांतों की परवाह किए बिना।"] }
  ],
  termsAndConditions: 'नियम और शर्तें',
  close: 'बंद करें',
  upgrade: {
    pro: 'प्रो',
    goPro: 'प्रो बनें',
    upgradePrompt: 'प्रीमियम सुविधाओं को अनलॉक करने के लिए अपग्रेड करें',
    title: 'ज्ञान शक्ति है, अपनी शक्ति बढ़ाएँ।',
    month: 'महीना',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipedia का पूरा पढ़ें',
        basicTheme: 'बुनियादी थीम कस्टमाइज़ेशन का उपयोग करें',
        saveArticles: 'आर्टिकल्स को बाद में पढ़ने के लिए सेव करें',
      },
      buttonText: 'आपकी योजना',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia में सब कुछ, साथ में:',
      features: {
        customThemes: 'अपने पसंदीदा थीम, रंग, लेआउट और फॉन्ट में Alternipedia का उपयोग करें',
        notes: 'नोट्स लें, प्रबंधित करें और पूरे Alternipedia से एक्सपोर्ट करें',
        advancedSearch: 'उन्नत खोज परिणाम',
        semanticSearch: 'एआई की शक्ति से सिमेंटिक खोज',
        aiAssistant: 'WikiPal, आपका Alternipedia AI सहायक प्राप्त करें',
        topicMaps: 'टॉपिक मैप्स के साथ बेहतर टॉपिक रिसर्च',
        profileCustomization: 'अधिक प्रोफाइल कस्टमाइजेशन विकल्प',
        aiTranslation: 'किसी भी पेज के लिए AI अनुवाद',
        appSupport: 'Alternipedia ऐप में निरंतर समर्थन',
      },
      buttonText: 'अभी अपग्रेड करें',
    },
  },
  navigation: {
    aboutUs: 'हमारे बारे में',
    currentEvents: 'वर्तमान घटनाएं',
    randomArticle: 'रैंडम आर्टिकल',
    help: 'मदद',
  },
  footer: {
    pleaseLogin: 'इस फीचर का उपयोग करने के लिए कृपया लॉगिन करें।',
    text: {
      "part1": "पाठ उपलब्ध है:",
      "part2": "क्रिएटिव कॉमन्स एट्रिब्यूशन-शेयरअलाइक 4.0 अंतर्राष्ट्रीय लाइसेंस के तहत",
      "part3": "। अतिरिक्त शर्तें लागू हो सकती हैं। इस साइट का उपयोग करके, आप सहमत होते हैं",
      "part4": "नियम और शर्तें",
      "part5": "और",
      "part6": "गोपनीयता नीति",
      "part7": "। Alternipedia एक ओपन-सोर्स गैर-लाभकारी परियोजना है।"
    },
    license: 'लाइसेंस',
    terms: 'शर्तें',
    privacy: 'गोपनीयता',
    contact: 'संपर्क करें',
    disclaimers: 'अस्वीकरण',
    codeOfConduct: 'आचार संहिता',
    statistics: 'आंकड़े',
    cookieStatement: 'कुकी स्टेटमेंट',
    developers: 'डेवलपर्स',
  },
  bias: {
    heading: "पक्षपात क्या है?",
    explanation: "पक्षपात एक प्रवृत्ति है जो किसी विशेष राजनीतिक दृष्टिकोण, पार्टी या विचार का समर्थन या पक्ष लेने की होती है। यह प्रभावित कर सकता है कि कोई व्यक्ति घटनाओं की व्याख्या कैसे करता है, जानकारी का चयन कैसे करता है, और विचारों को कैसे प्रस्तुत करता है। जब किसी लेखक में राजनीतिक पक्षपात होता है, तो यह उनके दृष्टिकोण को प्रभावित कर सकता है कि वे किन तथ्यों पर जोर देते हैं, वे लोगों या मुद्दों का वर्णन कैसे करते हैं, और वे कौन से निष्कर्ष निकालते हैं। परिणामस्वरूप, उनकी लेखन शैली उनके व्यक्तिगत विश्वासों को प्रतिबिंबित कर सकती है बजाय एक पूरी तरह से तटस्थ या संतुलित दृष्टिकोण के।",
    socialist: "समाजवादी",
    liberal: "उदारवादी",
    wikipedia: "विकिपीडिया",
    conservative: "रूढ़िवादी",
    nationalist: "राष्ट्रवादी",
    title: "पढ़ने का पक्षपात",
  },
  language: {
    searchMessage: "भाषा खोजें...",
    selectLanguage: "भाषा चुनें",
    description: "इस लेख को देखने के लिए अपनी पसंदीदा भाषा चुनें।",
    notFound: "कोई मेल खाने वाली भाषा नहीं मिली"
  },
  article: {
    biasIntro: {
      socialist: 'यह लेख समुदाय के सदस्यों द्वारा एक समाजवादी दृष्टिकोण व्यक्त करने के लिए बनाया गया है जो सामाजिक समानता, आर्थिक न्याय, और श्रमिक अधिकारों को उजागर करता है।',
      liberal: 'यह लेख समुदाय के सदस्यों द्वारा एक उदारवादी दृष्टिकोण व्यक्त करने के लिए बनाया गया है जो व्यक्तिगत स्वतंत्रता, अधिकारों, और सामाजिक प्रगति को उजागर करता है।',
      conservative: 'यह लेख समुदाय के सदस्यों द्वारा एक रूढ़िवादी दृष्टिकोण व्यक्त करने के लिए बनाया गया है जो परंपरा, सामाजिक स्थिरता, और निरंतरता को उजागर करता है।',
      nationalist: 'यह लेख समुदाय के सदस्यों द्वारा एक राष्ट्रवादी दृष्टिकोण व्यक्त करने के लिए बनाया गया है जो सांस्कृतिक पहचान, संप्रभुता, और राष्ट्रीय गर्व को उजागर करता है।',
      wikipedia: {
        part1: 'यह लेख समुदाय के सदस्यों द्वारा एक तटस्थ दृष्टिकोण व्यक्त करने के लिए बनाया गया है जो तथ्यों और आंकड़ों की निष्पक्ष प्रस्तुति को उजागर करता है।',
        part2: 'विकिपीडिया पर देखें →',
      }
    },
    lastEdited: 'अंतिम संपादन',
    tools: 'उपकरण',
    content: 'सामग्री',
    close: 'बंद करें',
    notFoundHeader: 'विकिपीडिया लेख नहीं मिला',
    notFoundText: 'निम्नलिखित विकिपीडिया लेख नहीं मिला:',
    searchWikipediaText: 'विकिपीडिया में खोजें',
    article: 'लेख',
    discussion: 'चर्चा',
    read: 'पढ़ें',
    edit: 'संपादित करें',
    history: 'इतिहास'
  }
};

// Bengali
const bn: Dictionary = {
  unauthorised: {
    heading: 'অ্যাক্সেস অস্বীকৃত',
    message: 'আপনি এই পৃষ্ঠায় অ্যাক্সেস করার অনুমোদন নেই। অনুগ্রহ করে যাচাই করুন যে আপনি লগইন করেছেন অথবা সহায়তার জন্য যোগাযোগ করুন।'
  },
  blockedAd: {
    part1: 'মনে হচ্ছে আপনি একটি বিজ্ঞাপন ব্লকার ব্যবহার করছেন। অনুগ্রহ করে এটি অক্ষম করে আমাদের সাইটকে সমর্থন করুন — অথবা',
    part2: 'PRO-এ আপগ্রেড করুন',
    part3: 'বিজ্ঞাপনবিহীন অভিজ্ঞতার জন্য।'
  },
  metadata: {
    description: 'একটি বিস্তৃত সম্পদ এবং নিবন্ধ সংগ্রহ যা জ্ঞান এবং ধারণা সম্পর্কে বিভিন্ন দৃষ্টিভঙ্গি উপস্থাপন করে।',
    wikipedia: {
      part1: 'Alternipedia অন্বেষণ করুন',
      part2: '- বিকল্প দৃষ্টিভঙ্গি এবং ধারণা।',
    },
    conservative: {
      part1: 'একটি রক্ষণশীল দৃষ্টিভঙ্গি থেকে',
      part2: '- ঐতিহ্য, স্থিতিশীলতা, এবং মুক্ত বাজার।',
    },
    nationalist: {
      part1: 'একটি জাতীয়তাবাদী দৃষ্টিভঙ্গি থেকে',
      part2: '- জাতীয় সার্বভৌমত্ব এবং সাংস্কৃতিক পরিচয়।',
    },  
    socialist: {
      part1: 'একটি সমাজতান্ত্রিক দৃষ্টিভঙ্গি থেকে',  
      part2: '- সামাজিক ন্যায়, সমতা, এবং শ্রমিক অধিকার।',
    },  
    liberal: {
      part1: 'একটি উদার দৃষ্টিভঙ্গি থেকে',
      part2: '- ব্যক্তিগত স্বাধীনতা, অধিকার, এবং সামাজিক অগ্রগতি।',
    },
  },
  accept: 'গৃহীত করুন',
  reject: 'প্রত্যাখ্যান',
  cookieMessage: 'আমরা এবং আমাদের অংশীদার কুকি ব্যবহার করি বিজ্ঞাপন ব্যক্তিগতকরণ, কার্যক্ষমতা পরিমাপ এবং সামাজিক বৈশিষ্ট্য প্রদান করার জন্য। ব্যক্তিগতকৃত বিজ্ঞাপন অনুমোদনের জন্য গ্রহণ ক্লিক করুন বা ব্যক্তিগতকৃত বিজ্ঞাপন প্রত্যাখ্যান করার জন্য প্রত্যাখ্যান ক্লিক করুন। আরও তথ্যের জন্য আমাদের গোপনীয়তা নীতি দেখুন।',
  login: {
    title: 'লগইন করুন',
    google: 'Google দিয়ে চালিয়ে যান',
    facebook: 'Facebook দিয়ে চালিয়ে যান',
    x: 'X দিয়ে চালিয়ে যান',
    microsoft: 'Microsoft দিয়ে চালিয়ে যান',
    policy: "লগইন করার মানে আপনি আমাদের পরিষেবার শর্তাবলী এবং গোপনীয়তা নীতির সাথে সম্মত হচ্ছেন।",
  },
  userMenu: {
    login: "লগইন",
    contributions: "অবদান",
    savedArticles: "সংরক্ষিত নিবন্ধ",
    preferences: "পছন্দসমূহ",
    logout: "লগআউট",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long' }),
    "title": "গোপনীয়তা নীতি",
    "lastUpdatedText": "সর্বশেষ আপডেট:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipedia-তে স্বাগতম — এটি একটি শিক্ষামূলক উইকি যা জ্ঞান ও ধারণা সম্পর্কে বিভিন্ন দৃষ্টিভঙ্গি উপস্থাপন করার জন্য তৈরি করা হয়েছে। আমরা আপনার গোপনীয়তাকে গুরুত্ব দিই এবং আপনার ব্যক্তিগত তথ্য রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই নীতিতে আমরা কী তথ্য সংগ্রহ করি, কীভাবে এটি ব্যবহার করি এবং আপনার অধিকারগুলি ব্যাখ্যা করা হয়েছে।"
      }
    ],
    "sections": [
      {
        "title": "আমরা যে তথ্য সংগ্রহ করি",
        "content": [
          {
            "type": "paragraph",
            "text": "আমরা শুধুমাত্র পরিষেবা প্রদান ও উন্নত করার জন্য প্রয়োজনীয় সর্বনিম্ন তথ্য সংগ্রহ করি। এতে অন্তর্ভুক্ত থাকতে পারে:"
          },
          {
            "type": "list",
            "items": [
              "অ্যাকাউন্ট তথ্য: আপনি যখন কোনো OAuth প্রদানকারী (যেমন Google, Meta, ইত্যাদি) ব্যবহার করে সাইন ইন করেন, আমরা আপনার নাম, ইমেল ঠিকানা এবং প্রোফাইল ছবি (যদি থাকে) এর মতো মৌলিক তথ্য পাই।",
              "পেমেন্ট তথ্য: আপনি যদি পেমেন্ট বা অনুদান করতে চান, আমরা Stripe ব্যবহার করি। Stripe নিরাপদে আপনার পেমেন্ট প্রক্রিয়া করে — আমরা কখনও আপনার কার্ড নম্বর সংরক্ষণ বা দেখতে পাই না।",
              "বিশ্লেষণ ডেটা: আমরা Vercel Analytics ব্যবহার করি যাতে বুঝতে পারি কোন পৃষ্ঠা জনপ্রিয় এবং আমাদের সাইটের পারফরম্যান্স কেমন। এই ডেটা সামগ্রিকভাবে সংগ্রহ করা হয় এবং আপনাকে ব্যক্তিগতভাবে শনাক্ত করে না।",
              "প্রযুক্তিগত তথ্য: আপনি যখন আমাদের সাইটে যান, তখন আমরা আপনার ব্রাউজারের ধরন, ডিভাইস এবং IP ঠিকানার মতো মানক লগ ডেটা পেতে পারি, যা নিরাপত্তা বজায় রাখতে সাহায্য করে।",
              "Adsense: আমাদের সাইট Google Adsense ব্যবহার করে বিজ্ঞাপন প্রদর্শনের জন্য। Adsense কুকিজ ব্যবহার করতে পারে যাতে আপনার আমাদের সাইট বা অন্যান্য সাইটে ভ্রমণের উপর ভিত্তি করে বিজ্ঞাপন দেখানো যায়।"
            ]
          }
        ]
      },
      {
        "title": "আমরা আপনার তথ্য কীভাবে ব্যবহার করি",
        "content": [
          {
            "type": "paragraph",
            "text": "আমরা আপনার তথ্য শুধুমাত্র নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:"
          },
          {
            "type": "list",
            "items": [
              "Alternipedia প্ল্যাটফর্ম পরিচালনা ও উন্নত করা",
              "ব্যবহারকারী যাচাই করা এবং অ্যাকাউন্ট পরিচালনা করা",
              "Stripe-এর মাধ্যমে নিরাপদভাবে পেমেন্ট প্রক্রিয়া করা",
              "সাইটের পারফরম্যান্স এবং নির্ভরযোগ্যতা পর্যবেক্ষণ করা",
              "সাইটের মাধ্যমে ব্যবহারকারীর অনুরোধের উত্তর দেওয়া"
            ]
          },
          {
            "type": "paragraph",
            "text": "আমরা আপনার ব্যক্তিগত তথ্য বিক্রি, ভাড়া বা বাণিজ্য করি না।"
          }
        ]
      },
      {
        "title": "কুকিজ এবং ট্র্যাকিং",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia বিজ্ঞাপন বা ট্র্যাকিং কুকি ব্যবহার করে না।"
          },
          {
            "type": "paragraph",
            "text": "আমরা শুধুমাত্র লগইন সেশন এবং সাইটের কার্যকারিতার জন্য প্রয়োজনীয় কুকিজ ব্যবহার করি।"
          }
        ]
      },
      {
        "title": "ডেটা সংরক্ষণ এবং নিরাপত্তা",
        "content": [
          {
            "type": "paragraph",
            "text": "আপনার তথ্য শিল্প-মানের এনক্রিপশন এবং হোস্টিং পরিকাঠামো ব্যবহার করে নিরাপদে সংরক্ষণ করা হয়।"
          },
          {
            "type": "paragraph",
            "text": "আমরা আপনার তথ্য হারানো, অপব্যবহার বা অননুমোদিত অ্যাক্সেস থেকে রক্ষা করতে যুক্তিসঙ্গত পদক্ষেপ গ্রহণ করি।"
          },
          {
            "type": "paragraph",
            "text": "আমাদের হোস্টিং এবং বিশ্লেষণ পরিষেবা (যেমন Vercel এবং Stripe) বৈশ্বিক হওয়ায়, আপনার তথ্য অন্যান্য দেশে প্রক্রিয়া করা হতে পারে। আমরা শুধুমাত্র সেই পরিষেবা প্রদানকারীদের সাথে কাজ করি যারা শক্তিশালী গোপনীয়তার মান বজায় রাখে।"
          }
        ]
      },
      {
        "title": "তৃতীয় পক্ষের পরিষেবা",
        "content": [
          {
            "type": "paragraph",
            "text": "আমরা আমাদের কিছু পরিষেবা বিশ্বস্ত তৃতীয় পক্ষের মাধ্যমে প্রদান করি:"
          },
          {
            "type": "list",
            "items": [
              "OAuth প্রদানকারী – নিরাপদ লগইনের জন্য",
              "Stripe – পেমেন্ট প্রসেসিংয়ের জন্য",
              "Vercel Analytics – বেনামী পারফরম্যান্স বিশ্লেষণের জন্য"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Stripe গোপনীয়তা নীতি", "url": "https://stripe.com/privacy" },
              { "label": "Vercel গোপনীয়তা নীতি", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          },
          {
            "type": "paragraph",
            "text": "এই পরিষেবাগুলির প্রত্যেকটি তাদের নিজস্ব গোপনীয়তা নীতির অধীনে আপনার তথ্য সংগ্রহ ও প্রক্রিয়া করতে পারে।"
          }
        ]
      },
      {
        "title": "আপনার অধিকার",
        "content": [
          {
            "type": "paragraph",
            "text": "আপনার অবস্থানের উপর নির্ভর করে, আপনার নিম্নলিখিত অধিকার থাকতে পারে:"
          },
          {
            "type": "list",
            "items": [
              "আপনার ব্যক্তিগত তথ্য অ্যাক্সেস বা একটি কপি চাওয়া",
              "আমাদের কাছে থাকা তথ্য সংশোধন বা মুছে ফেলা",
              "সম্মতি প্রত্যাহার করা বা আপনার অ্যাকাউন্ট বন্ধ করা"
            ]
          },
          {
            "type": "paragraph",
            "text": "যদি আপনি এই অধিকারগুলি ব্যবহার করতে চান, অনুগ্রহ করে আমাদের ওয়েবসাইটের যোগাযোগ ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"
          }
        ]
      },
      {
        "title": "শিশুদের গোপনীয়তা",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia সাধারণ শ্রোতাদের জন্য ডিজাইন করা হয়েছে এবং 13 বছরের কম বয়সী শিশুদের জন্য নয়।"
          },
          {
            "type": "paragraph",
            "text": "আমরা ইচ্ছাকৃতভাবে নাবালকদের কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না।"
          }
        ]
      },
      {
        "title": "এই নীতিতে পরিবর্তন",
        "content": [
          {
            "type": "paragraph",
            "text": "আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি যাতে উন্নতি বা আইনি প্রয়োজনীয়তা প্রতিফলিত হয়।"
          },
          {
            "type": "paragraph",
            "text": "যখন আমরা তা করব, আমরা এই পৃষ্ঠার উপরে আপডেটের তারিখটি পোস্ট করব।"
          }
        ]
      },
      {
        "title": "আমাদের সাথে যোগাযোগ করুন",
        "content": [
          {
            "type": "paragraph",
            "text": "যদি আপনার গোপনীয়তা সম্পর্কিত কোনো প্রশ্ন বা অনুরোধ থাকে, অনুগ্রহ করে Alternipedia ওয়েবসাইটের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "শর্তাবলী মেনে চলা", "content": ["এই ওয়েবসাইটে প্রবেশ এবং এটি ব্যবহার করে, ব্যবহারকারীরা এই সেবা শর্তাবলী মেনে চলতে এবং এগুলির দ্বারা আবদ্ধ হতে সম্মত হন। যারা এই শর্তাবলী মেনে চলতে সম্মত নন, তাদের উচিত অবিলম্বে ওয়েবসাইট ব্যবহার বন্ধ করা।"] },
    { "title": "ব্যবহারকারী অ্যাকাউন্ট দায়িত্ব", "content": ["ব্যবহারকারীরা তাদের অ্যাকাউন্টের পরিচয়পত্রের গোপনীয়তা বজায় রাখার জন্য দায়ী। ব্যবহারকারীর অ্যাকাউন্টের অধীনে ঘটে যাওয়া কোনো কার্যক্রম শুধুমাত্র অ্যাকাউন্ট ধারকের দায়িত্ব। ব্যবহারকারীদের উচিত অবিলম্বে ওয়েবসাইট প্রশাসকদের অবৈধ অ্যাকাউন্ট অ্যাক্সেস সম্পর্কে জানানো।"] },
    { "title": "দায়িত্বের সীমাবদ্ধতা", "content": ["ওয়েবসাইট 'যেমন আছে' তেমনভাবে বিষয়বস্তু প্রদান করে, কোনো ওয়ারেন্টি ছাড়া। ওয়েবসাইটের মালিকরা প্ল্যাটফর্মের সাথে ব্যবহারকারীদের মিথস্ক্রিয়া থেকে উদ্ভূত সরাসরি, পরোক্ষ, অনাকাঙ্ক্ষিত, পরিণামস্বরূপ বা শাস্তিমূলক ক্ষতির জন্য দায়ী নয়।"] },
    { "title": "ব্যবহারকারী আচরণ নির্দেশিকা", "content": ["এমন ক্ষতিকর বা ক্ষতিকারক বিষয়বস্তু আপলোড করবেন না যা ওয়েবসাইট বা এর ব্যবহারকারীদের ক্ষতি করতে পারে।", "অন্যান্য ব্যবহারকারীদের অধিকার সম্মান করুন।", "এমন কার্যক্রম এড়িয়ে চলুন যা ওয়েবসাইটের কার্যক্ষমতা বিঘ্নিত করতে পারে।", "প্রযোজ্য স্থানীয় এবং আন্তর্জাতিক আইন মেনে চলুন।"] },
    { "title": "শর্তাবলীতে পরিবর্তন", "content": ["ওয়েবসাইট যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করে। পরিবর্তনের পর ওয়েবসাইটের অব্যাহত ব্যবহার নতুন শর্তাবলী মেনে নেওয়ার সমতুল্য।"] },
    { "title": "সমাপ্তি ধারা", "content": ["ওয়েবসাইট প্রশাসন এই শর্তাবলী লঙ্ঘন বা অন্য কোনো কারণে ব্যবহারকারীর অ্যাক্সেস পূর্বানুমতি ছাড়াই বাতিল বা স্থগিত করতে পারে।"] },
    { "title": "প্রযোজ্য আইন", "content": ["এই শর্তাবলী সেই অঞ্চলের আইন দ্বারা শাসিত যেখানে ওয়েবসাইট মূলত পরিচালিত হয়, আইনের দ্বন্দ্ব নীতির প্রতি লক্ষ্য না করে।"] }
  ],
  tools: {
    textToSpeech: "টেক্সট টু স্পিচ",
    translate: "অনুবাদ করুন",
    topicMap: "টপিক ম্যাপ",
    notes: "আমার নোটস",
    wikipal: "ওইকিপালকে জিজ্ঞাসা করুন",
    watchChanges: "পরিবর্তনগুলি দেখুন",
    saveArticle: "লেখা সংরক্ষণ করুন",
    saved: "সংরক্ষিত",
    shortUrl: "শর্ট লিঙ্ক",
    citePage: "এই পৃষ্ঠার উদ্ধৃতি দিন",
    QRCode: "QR কোড",
    DownloadPDF: "PDF হিসাবে ডাউনলোড করুন",
    printPage: "এই পৃষ্ঠাটি মুদ্রণ করুন",
    pageInfo: "পৃষ্ঠার তথ্য",
  },
  common: {
    loadingPerspective: 'দৃষ্টিভঙ্গি লোড হচ্ছে...',
    fetchingUserInfo: 'ব্যবহারকারীর তথ্য আনছে...',
    home: 'হোম',
    about: 'আমাদের সম্পর্কে',
    help: 'মদদ',
    search: 'খোজ',
    searchPlaceholder: 'Alternipedia তে খোজ...',
    login: 'লগ ইন করুন',
    logout: 'লগ আউট করুন',
    signUp: 'সাইন আপ করুন',
    profile: 'প্রোফাইল',
    settings: 'সেটিংস',
    language: 'ভাষা',
    theme: 'থিম',
    comingSoon: 'Alternipedia শীঘ্রই আসছে!',
    stayTuned: 'জুড়ে থাকুন।',
    exampleArticle: 'উদাহরণ নিবন্ধ:',
  },
  notFound: {
    title: '404',
    heading: 'পৃষ্ঠাটি পাওয়া যায়নি',
    message: 'দুঃখিত, আমরা সেই পৃষ্ঠাটি খুঁজে পেতে পারিনি যা আপনি খুঁজছিলেন। পৃষ্ঠাটি মুছে ফেলা হয়েছে বা লিঙ্কটি ভুল হতে পারে।',
    goHome: 'মুখ পৃষ্ঠায় যান',
  },
  upgrade: {
    pro: 'প্রো',
    goPro: 'প্রো ব্যবহার করুন',
    upgradePrompt: 'প্রিমিয়াম ফিচার আনলক করতে আপগ্রেড করুন',
    title: 'জ্ঞানই শক্তি, আপনার শক্তি বাড়ান।',
    month: 'মাস',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipedia সম্পূর্ণ পড়ুন',
        basicTheme: 'বেসিক থিম কাস্টমাইজেশন ব্যবহার করুন',
        saveArticles: 'পরে পড়ার জন্য আর্টিকেল সংরক্ষণ করুন',
      },
      buttonText: 'আপনার প্ল্যান',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia-র সব কিছু, প্লাস:',
      features: {
        customThemes: 'আপনার পছন্দের থিম, রঙ, লেআউট এবং ফন্টে Alternipedia ব্যবহার করুন',
        notes: 'নোট নিন, পরিচালনা করুন এবং Alternipedia থেকে এক্সপোর্ট করুন',
        advancedSearch: 'অ্যাডভান্সড সার্চ রেজাল্ট',
        semanticSearch: 'AI-এর শক্তি দিয়ে সেমান্টিক সার্চ',
        aiAssistant: 'WikiPal, আপনার Alternipedia AI সহকারী পান',
        topicMaps: 'টপিক ম্যাপের মাধ্যমে আরও ভালো বিষয় গবেষণা',
        profileCustomization: 'আরও প্রোফাইল কাস্টমাইজেশন অপশন',
        aiTranslation: 'যে কোনো পৃষ্ঠার জন্য AI অনুবাদ',
        appSupport: 'Alternipedia অ্যাপে ধারাবাহিক সহায়তা',
      },
      buttonText: 'এখনই আপগ্রেড করুন',
    },
  },
  navigation: {
    aboutUs: 'আমাদের সম্পর্কে',
    currentEvents: 'বর্তমান ঘটনা',
    randomArticle: 'র্যান্ডম নিবন্ধ',
    help: 'মদদ',
  },
  termsAndConditions: 'শর্তাবলী',
  close: 'বন্ধ করুন',
  footer: {
    pleaseLogin: 'এই ফিচারটি ব্যবহার করতে দয়া করে লগইন করুন।',
    text: {
      "part1": "পাঠ উপলব্ধ:",
      "part2": "ক্রিয়েটিভ কমন্স অ্যাট্রিবিউশন-শেয়ারঅ্যালাইক 4.0 আন্তর্জাতিক লাইসেন্সের অধীনে",
      "part3": "; অতিরিক্ত শর্ত প্রযোজ্য হতে পারে। এই সাইটটি ব্যবহার করে, আপনি সম্মত হন",
      "part4": "শর্তাবলী",
      "part5": "এবং",
      "part6": "গোপনীয়তা নীতি",
      "part7": "। Alternipedia একটি ওপেন-সোর্স অলাভজনক প্রকল্প।"
    },
    license: 'লাইসেন্স',
    terms: 'শর্তাবলী',
    privacy: 'গোপনীয়তা',
    contact: 'যোগাযোগ করুন',
    disclaimers: 'অস্বীকার',
    codeOfConduct: 'আচার সংহিতা',
    statistics: 'পরিসংখ্যান',
    cookieStatement: 'কুকি বিবৃতি',
    developers: 'ডেভেলপাররা',
  },
  bias: {
    heading: "পক্ষপাত কি?",
    explanation: "পক্ষপাত একটি প্রবণতা যা একটি নির্দিষ্ট রাজনৈতিক দৃষ্টিভঙ্গি, দল বা ধারণার সমর্থন বা পক্ষ নেওয়ার সাথে সম্পর্কিত। এটি প্রভাবিত করতে পারে যে একজন ব্যক্তি ঘটনাগুলির ব্যাখ্যা কিভাবে করে, তথ্য নির্বাচন কিভাবে করে এবং ধারণাগুলি কিভাবে উপস্থাপন করে। যখন একজন লেখকের মধ্যে রাজনৈতিক পক্ষপাত থাকে, এটি তাদের দৃষ্টিভঙ্গিকে প্রভাবিত করতে পারে যে তারা কোন তথ্যগুলিতে জোর দেয়, তারা মানুষ বা বিষয়গুলিকে কিভাবে বর্ণনা করে এবং তারা কোন উপসংহারগুলি টানে। ফলস্বরূপ, তাদের লেখার শৈলী তাদের ব্যক্তিগত বিশ্বাসগুলিকে প্রতিফলিত করতে পারে একটি সম্পূর্ণ নিরপেক্ষ বা ভারসাম্যপূর্ণ দৃষ্টিভঙ্গির পরিবর্তে।",
    socialist: "সমাজবাদী",
    liberal: "উদারবাদী",
    wikipedia: "উইকিপিডিয়া",
    conservative: "রক্ষণশীল",
    nationalist: "জাতীয়তাবাদী",
    title: "পড়ার পক্ষপাত",
  },
  language: {
    searchMessage: "ভাষা খুঁজুন...",
    selectLanguage: "ভাষা নির্বাচন করুন",
    description: "এই লেখাটি দেখার জন্য আপনার পছন্দের ভাষা নির্বাচন করুন।",
    notFound: "কোন মিল খুঁজে পাওয়া যায়নি"
  },
  article: {
    biasIntro: {
      socialist: 'এই নিবন্ধটি সম্প্রদায়ের সদস্যদের দ্বারা একটি সমাজতান্ত্রিক দৃষ্টিভঙ্গি প্রকাশ করার জন্য তৈরি করা হয়েছে যা সামাজিক সমতা, অর্থনৈতিক ন্যায় এবং শ্রমিক অধিকারকে তুলে ধরে।',
      liberal: 'এই নিবন্ধটি সম্প্রদায়ের সদস্যদের দ্বারা একটি উদার দৃষ্টিভঙ্গি প্রকাশ করার জন্য তৈরি করা হয়েছে যা ব্যক্তিগত স্বাধীনতা, অধিকার এবং সামাজিক অগ্রগতিকে তুলে ধরে।',
      conservative: 'এই নিবন্ধটি সম্প্রদায়ের সদস্যদের দ্বারা একটি রক্ষণশীল দৃষ্টিভঙ্গি প্রকাশ করার জন্য তৈরি করা হয়েছে যা ঐতিহ্য, সামাজিক স্থিতিশীলতা এবং ধারাবাহিকতাকে তুলে ধরে।',
      nationalist: 'এই নিবন্ধটি সম্প্রদায়ের সদস্যদের দ্বারা একটি জাতীয়তাবাদী দৃষ্টিভঙ্গি প্রকাশ করার জন্য তৈরি করা হয়েছে যা সাংস্কৃতিক পরিচয়, সার্বভৌমত্ব এবং জাতীয় গর্বকে তুলে ধরে।',
      wikipedia: {
        part1: 'এই নিবন্ধটি সম্প্রদায়ের সদস্যদের দ্বারা একটি নিরপেক্ষ দৃষ্টিভঙ্গি প্রকাশ করার জন্য তৈরি করা হয়েছে যা তথ্য এবং পরিসংখ্যানের ন্যায়সঙ্গত উপস্থাপনাকে তুলে ধরে।',
        part2: 'উইকিপিডিয়ায় দেখুন →',
      } 
    },
    lastEdited: 'সর্বশেষ সম্পাদিত',
    tools: 'সরঞ্জাম',
    content: 'বিষয়বস্তু',
    close: 'বন্ধ করুন',
    notFoundHeader: 'উইকিপিডিয়া নিবন্ধ পাওয়া যায়নি',
    notFoundText: 'নিম্নলিখিত উইকিপিডিয়া নিবন্ধ পাওয়া যায়নি:',
    searchWikipediaText: 'উইকিপিডিয়ায় অনুসন্ধান করুন',
    article: 'প্রবন্ধ',
    discussion: 'আলোচনা',
    read: 'পড়ুন',
    edit: 'সম্পাদনা করুন',
    history: 'ইতিহাস'
  }
};

// Urdu
const ur: Dictionary = {
  unauthorised: {
    heading: 'رسائی مسترد',
    message: 'آپ کو اس صفحے تک رسائی کی اجازت نہیں ہے۔ براہ کرم چیک کریں کہ آیا آپ لاگ ان ہیں یا سپورٹ سے رابطہ کریں۔'
  },
  blockedAd: {
    part1: 'لگتا ہے آپ اشتہاب روکنے والا استعمال کر رہے ہیں۔ براہ کرم ہماری سائٹ کی حمایت کے لیے اسے غیر فعال کریں — یا',
    part2: 'PRO میں اپ گریڈ کریں',
    part3: 'اشتہارات سے پاک تجربے کے لیے۔'
  },
  metadata: {
    description: 'علم اور نظریات پر مختلف نقطہ نظر پیش کرنے والے ایک جامع وسائل اور مضامین کا مجموعہ۔',
    wikipedia: {
      part1: 'Alternipedia کو دریافت کریں',
      part2: '- متبادل نقطہ نظر اور نظریات۔',
    },
    conservative: {
      part1: 'ایک قدامت پسند نقطہ نظر سے',
      part2: '- روایت، استحکام، اور آزاد بازار۔',
    },
    nationalist: {
      part1: 'ایک قوم پرست نقطہ نظر سے',
      part2: '- قومی خودمختاری اور ثقافتی شناخت۔',
    },  
    liberal: {
      part1: 'ایک لبرل نقطہ نظر سے',
      part2: '- ذاتی آزادی، حقوق، اور سماجی ترقی۔',
    },
    socialist: {
      part1: 'ایک سوشلسٹ نقطہ نظر سے',  
      part2: '- سماجی انصاف، مساوات، اور مزدور کے حقوق۔', 
    }
  },
  accept: 'قبول کریں',
  reject: 'نامنظور',
  cookieMessage: 'ہم اور ہمارے پارٹنرز ذاتی نوعیت کے اشتہارات کو ذاتی بنانے، کارکردگی کو ماپنے اور سماجی خصوصیات فراہم کرنے کے لیے کوکیز استعمال کرتے ہیں۔ ذاتی نوعیت کے اشتہارات کی اجازت دینے کے لیے قبول پر کلک کریں یا ذاتی نوعیت کے اشتہارات مسترد کرنے کے لیے نامنظور پر کلک کریں۔ مزید معلومات کے لیے ہماری رازداری کی پالیسی دیکھیں۔',
  login: {
    title: 'لاگ ان کریں',
    google: 'Google کے ساتھ جاری رکھیں',
    facebook: 'Facebook کے ساتھ جاری رکھیں',
    x: 'X کے ساتھ جاری رکھیں',
    microsoft: 'Microsoft کے ساتھ جاری رکھیں',
    policy: "لاگ ان کرنے کا مطلب ہے کہ آپ ہماری سروس کی شرائط اور پرائیویسی پالیسی سے اتفاق کرتے ہیں۔",
  },
  userMenu: {
    login: "لاگ ان کریں",
    contributions: "حصہ جات",
    savedArticles: "محفوظ شدہ مضامین",
    preferences: "ترجیحات",
    logout: "لاگ آؤٹ کریں",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ur-PK', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ur-PK', { year: 'numeric', month: 'long' }),
    "title": "رازداری کی پالیسی",
    "lastUpdatedText": "آخری بار اپ ڈیٹ کیا گیا:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipedia میں خوش آمدید — ایک تعلیمی وِکی جو علم اور نظریات پر مختلف نقطہ نظر پیش کرتا ہے۔ ہم آپ کی رازداری کا احترام کرتے ہیں اور آپ کی ذاتی معلومات کے تحفظ کے لیے پُرعزم ہیں۔ اس پالیسی میں وضاحت کی گئی ہے کہ ہم کون سا ڈیٹا جمع کرتے ہیں، اسے کیسے استعمال کرتے ہیں، اور آپ کے کیا حقوق ہیں۔"
      }
    ],
    "sections": [
      {
        "title": "ہم کون سی معلومات جمع کرتے ہیں",
        "content": [
          {
            "type": "paragraph",
            "text": "ہم صرف وہی معلومات جمع کرتے ہیں جو ہماری خدمات فراہم کرنے اور بہتر بنانے کے لیے ضروری ہوں۔ اس میں شامل ہو سکتا ہے:"
          },
          {
            "type": "list",
            "items": [
              "اکاؤنٹ کی معلومات: جب آپ OAuth فراہم کنندہ (جیسے Google یا Meta) کے ذریعے لاگ ان کرتے ہیں، تو ہمیں آپ کا نام، ای میل پتہ اور پروفائل تصویر (اگر دستیاب ہو) جیسی بنیادی معلومات حاصل ہوتی ہیں۔",
              "ادائیگی کی معلومات: اگر آپ ادائیگی یا عطیہ کرتے ہیں، تو ہم Stripe استعمال کرتے ہیں تاکہ لین دین کو محفوظ طریقے سے انجام دیا جا سکے۔ ہم آپ کے کارڈ کی تفصیلات کو کبھی ذخیرہ یا دیکھتے نہیں۔",
              "تجزیاتی ڈیٹا: ہم Vercel Analytics استعمال کرتے ہیں تاکہ یہ سمجھ سکیں کہ کون سے صفحات زیادہ دیکھے جاتے ہیں اور سائٹ کی کارکردگی کیسی ہے۔ یہ ڈیٹا مجموعی طور پر جمع کیا جاتا ہے اور آپ کی شناخت نہیں کرتا۔",
              "تکنیکی معلومات: جب آپ ہماری سائٹ پر جاتے ہیں، تو ہمیں خودکار طور پر براؤزر، ڈیوائس اور IP ایڈریس جیسی معیاری لاگ معلومات مل سکتی ہیں۔",
              "Adsense: ہماری سائٹ Google Adsense استعمال کرتی ہے تاکہ اشتہارات دکھائے جا سکیں۔ Adsense کوکیز استعمال کر سکتا ہے تاکہ آپ کو ہماری سائٹ یا دیگر سائٹس پر آپ کی براؤزنگ کی بنیاد پر اشتہارات دکھائے جا سکیں۔"
            ]
          }
        ]
      },
      {
        "title": "ہم آپ کا ڈیٹا کیسے استعمال کرتے ہیں",
        "content": [
          {
            "type": "paragraph",
            "text": "ہم آپ کا ڈیٹا صرف درج ذیل مقاصد کے لیے استعمال کرتے ہیں:"
          },
          {
            "type": "list",
            "items": [
              "Alternipedia پلیٹ فارم کو چلانے اور بہتر بنانے کے لیے",
              "صارفین کی توثیق اور اکاؤنٹس کا انتظام کرنے کے لیے",
              "Stripe کے ذریعے محفوظ ادائیگیوں کی پروسیسنگ کے لیے",
              "سائٹ کی کارکردگی اور استحکام کی نگرانی کے لیے",
              "صارفین کے سوالات یا درخواستوں کا جواب دینے کے لیے"
            ]
          },
          {
            "type": "paragraph",
            "text": "ہم آپ کا ذاتی ڈیٹا کسی تیسرے فریق کو فروخت، کرایہ یا شیئر نہیں کرتے۔"
          }
        ]
      },
      {
        "title": "کوکیز اور ٹریکنگ",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia اشتہارات یا ٹریکنگ کوکیز استعمال نہیں کرتا۔"
          },
          {
            "type": "paragraph",
            "text": "ہم صرف وہ کوکیز استعمال کرتے ہیں جو لاگ ان سیشنز اور سائٹ کی بنیادی فعالیت کے لیے ضروری ہوں۔"
          }
        ]
      },
      {
        "title": "ڈیٹا اسٹوریج اور سیکیورٹی",
        "content": [
          {
            "type": "paragraph",
            "text": "آپ کا ڈیٹا جدید انکرپشن اور محفوظ ہوسٹنگ انفراسٹرکچر کے ذریعے محفوظ رکھا جاتا ہے۔"
          },
          {
            "type": "paragraph",
            "text": "ہم نقصان، غلط استعمال یا غیر مجاز رسائی سے بچاؤ کے لیے مناسب اقدامات کرتے ہیں۔"
          },
          {
            "type": "paragraph",
            "text": "ہماری ہوسٹنگ اور تجزیاتی خدمات (جیسے Vercel اور Stripe) عالمی ہیں، لہٰذا آپ کا ڈیٹا مختلف ممالک میں پروسیس ہو سکتا ہے۔ ہم صرف ان فراہم کنندگان کے ساتھ کام کرتے ہیں جو مضبوط رازداری کے معیارات پر عمل کرتے ہیں۔"
          }
        ]
      },
      {
        "title": "تیسرے فریق کی خدمات",
        "content": [
          {
            "type": "paragraph",
            "text": "ہم چند معتبر تیسرے فریقوں پر انحصار کرتے ہیں جو ہماری خدمات کو چلانے میں مدد دیتے ہیں:"
          },
          {
            "type": "list",
            "items": [
              "OAuth فراہم کنندگان – محفوظ لاگ ان کے لیے",
              "Stripe – ادائیگیوں کی پروسیسنگ کے لیے",
              "Vercel Analytics – کارکردگی کے تجزیے کے لیے"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Stripe رازداری کی پالیسی", "url": "https://stripe.com/privacy" },
              { "label": "Vercel رازداری کی پالیسی", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          }
        ]
      },
      {
        "title": "آپ کے حقوق",
        "content": [
          {
            "type": "paragraph",
            "text": "آپ کے مقام کے لحاظ سے، آپ کے درج ذیل حقوق ہو سکتے ہیں:"
          },
          {
            "type": "list",
            "items": [
              "اپنی ذاتی معلومات تک رسائی یا اس کی کاپی حاصل کرنا",
              "معلومات کو درست یا حذف کروانا",
              "رضامندی واپس لینا یا اکاؤنٹ بند کرنا"
            ]
          }
        ]
      },
      {
        "title": "بچوں کی رازداری",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia عام سامعین کے لیے ہے اور 13 سال سے کم عمر بچوں کے لیے نہیں۔"
          },
          {
            "type": "paragraph",
            "text": "ہم شعوری طور پر بچوں سے ذاتی معلومات جمع نہیں کرتے۔"
          }
        ]
      },
      {
        "title": "پالیسی میں تبدیلیاں",
        "content": [
          {
            "type": "paragraph",
            "text": "ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں تاکہ تبدیلیاں یا قانونی تقاضے ظاہر ہوں۔"
          }
        ]
      },
      {
        "title": "ہم سے رابطہ کریں",
        "content": [
          {
            "type": "paragraph",
            "text": "اگر آپ کو رازداری سے متعلق کوئی سوال ہو، تو براہ کرم Alternipedia ویب سائٹ کے ذریعے ہم سے رابطہ کریں۔"
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "شرائط کی منظوری", "content": ["اس ویب سائٹ تک رسائی حاصل کر کے اور اسے استعمال کر کے، صارفین ان سروس کی شرائط پر عمل کرنے اور ان سے پابند ہونے پر راضی ہیں۔ جو صارفین ان شرائط سے متفق نہیں ہیں، انہیں فوری طور پر ویب سائٹ کا استعمال بند کر دینا چاہیے۔"] },
    { "title": "صارف اکاؤنٹ کی ذمہ داریاں", "content": ["صارفین اپنے اکاؤنٹ کی اسناد کی رازداری برقرار رکھنے کے ذمہ دار ہیں۔ صارف کے اکاؤنٹ کے تحت ہونے والی کسی بھی سرگرمی کی مکمل ذمہ داری اکاؤنٹ ہولڈر کی ہے۔ صارفین کو کسی بھی غیر مجاز اکاؤنٹ تک رسائی کے بارے میں فوری طور پر ویب سائٹ کے منتظمین کو مطلع کرنا چاہیے۔"] },
    { "title": "ذمہ داری کی حد", "content": ["ویب سائٹ 'جیسا ہے' کی بنیاد پر مواد فراہم کرتی ہے، کسی بھی وارنٹی کے بغیر۔ ویب سائٹ کے مالکان صارفین کے پلیٹ فارم کے ساتھ تعامل سے پیدا ہونے والے براہ راست، بالواسطہ، حادثاتی، نتیجے کے طور پر یا تعزیری نقصانات کے ذمہ دار نہیں ہوں گے۔"] },
    { "title": "صارف کے رویے کی رہنما اصول", "content": ["ایسا نقصان دہ یا بدنیتی پر مبنی مواد اپ لوڈ نہ کریں جو ویب سائٹ یا اس کے صارفین کو نقصان پہنچا سکتا ہو۔", "دوسرے صارفین کے حقوق کا احترام کریں۔", "ایسی سرگرمیوں سے گریز کریں جو ویب سائٹ کی فعالیت میں خلل ڈال سکتی ہیں۔", "مناسب مقامی اور بین الاقوامی قوانین کی پابندی کریں۔"] },
    { "title": "شرائط میں تبدیلی", "content": ["ویب سائٹ کسی بھی وقت ان شرائط کو تبدیل کرنے کا حق محفوظ رکھتی ہے۔ تبدیلی کے بعد ویب سائٹ کا جاری استعمال نئی شرائط کی منظوری کے مترادف ہوگا۔"] },
    { "title": "اختتامی شق", "content": ["ویب سائٹ ان شرائط کی خلاف ورزی یا انتظامیہ کی مناسب سمجھی جانے والی کسی بھی وجہ سے صارف کی رسائی کو بغیر پیشگی اطلاع کے ختم یا معطل کر سکتی ہے۔"] },
    { "title": "حاکم قانون", "content": ["یہ شرائط اس دائرہ اختیار کے قوانین کے تابع ہیں جہاں ویب سائٹ بنیادی طور پر چلائی جاتی ہے، قانون کے تصادم کے اصولوں کی پرواہ کیے بغیر۔"] }

  ],
  tools: {
    textToSpeech: "ٹیکسٹ ٹو اسپیچ",
    translate: "ترجمہ کریں",
    topicMap: "موضوع کا نقشہ",
    notes: "میرے نوٹس",
    wikipal: "ویکیپال سے پوچھیں",
    watchChanges: "تبدیلیاں دیکھیں",
    saveArticle: "مضمون محفوظ کریں",
    saved: "محفوظ شدہ",
    shortUrl: "مختصر لنک",
    citePage: "اس صفحے کا حوالہ دیں",
    QRCode: "QR کوڈ",
    DownloadPDF: "PDF کے طور پر ڈاؤن لوڈ کریں",
    printPage: "اس صفحے کو پرنٹ کریں",
    pageInfo: "صفحے کی معلومات",
  },
  language: {
    searchMessage: "زبان تلاش کریں...",
    selectLanguage: "زبان منتخب کریں",
    description: "اس مضمون کو دیکھنے کے لیے اپنی پسند کی زبان منتخب کریں۔",
    notFound: "کوئی زبانیں نہیں ملیں"
  },
  termsAndConditions: 'شرائط و ضوابط',
  close: 'بند کریں',
  bias: {
    heading: "پہلو کیا ہے؟",
    explanation: "پہلو ایک رجحان ہے جو کسی خاص سیاسی نقطہ نظر، جماعت یا خیال کی حمایت یا طرفداری سے متعلق ہے۔ یہ متاثر کر سکتا ہے کہ ایک شخص واقعات کی تشریح کیسے کرتا ہے، معلومات کا انتخاب کیسے کرتا ہے اور خیالات کو کیسے پیش کرتا ہے۔ جب ایک مصنف میں سیاسی پہلو ہوتا ہے، تو یہ ان کے نقطہ نظر کو متاثر کر سکتا ہے کہ وہ کون سی معلومات پر زور دیتے ہیں، وہ لوگوں یا موضوعات کو کیسے بیان کرتے ہیں اور وہ کون سے نتائج اخذ کرتے ہیں۔ نتیجتاً، ان کے لکھنے کا انداز ان کے ذاتی عقائد کی عکاسی کر سکتا ہے بجائے اس کے کہ ایک مکمل غیر جانبدار یا متوازن نقطہ نظر ہو۔",
    socialist: "سماج پسند",
    liberal: "لبرل",
    wikipedia: "ویکیپیڈیا",
    conservative: "محافظ",
    nationalist: "قوم پرست",
    title: "پڑھنے کا پہلو",
  },
  common: {
    loadingPerspective: 'نقطہ نظر لوڈ ہو رہا ہے...',
    fetchingUserInfo: 'صارف کی معلومات لا رہا ہے...',
    home: 'ہوم',
    about: 'ہمارے بارے میں',
    help: 'مدد',
    search: 'تلاش',
    searchPlaceholder: 'الٹرنیپیڈیا تلاش کریں...',
    login: 'لاگ ان کریں',
    logout: 'لاگ آؤٹ کریں',
    signUp: 'سائن اپ کریں',
    profile: 'پروفائل',
    settings: 'ترتیبات',
    language: 'زبان',
    theme: 'تھیم',
    comingSoon: 'الٹرنیپیڈیا جلد آرہا ہے!',
    stayTuned: 'جڑے رہیں۔',
    exampleArticle: 'مثالی مضمون:',
  },
  navigation: {
    aboutUs: 'ہمارے بارے میں',
    currentEvents: 'موجودہ واقعات',
    randomArticle: 'بے ترتیب مضمون',
    help: 'مدد',
  },
  footer: {
    pleaseLogin: 'اس خصوصیت کو استعمال کرنے کے لیے براہ کرم لاگ ان کریں۔',
    text: {
      "part1": "متن دستیاب ہے:",
      "part2": "کریئیٹو کامنس ایٹریبیوشن-شیئرالائیک 4.0 انٹرنیشنل لائسنس کے تحت",
      "part3": "; اضافی شرائط لاگو ہو سکتی ہیں۔ اس سائٹ کو استعمال کرتے ہوئے، آپ متفق ہیں",
      "part4": "شرائط و ضوابط",
      "part5": "اور",
      "part6": "پرائیویسی پالیسی",
      "part7": "۔Alternipedia ایک اوپن سورس غیر منافع بخش منصوبہ ہے۔"
    },
    license: 'لائسنس',
    terms: 'شرائط',
    privacy: 'رازداری',
    contact: 'رابطہ کریں',
    disclaimers: 'تردید',
    codeOfConduct: 'ضابطہ اخلاق',
    statistics: 'شماریات',
    cookieStatement: 'کوکی بیان',
    developers: 'ڈویلپرز',
  },
  notFound: {
    title: '404',
    heading: 'صفحہ نہیں ملا',
    message: "ہم اس صفحے کو تلاش نہیں کر سکے جس کی آپ تلاش کر رہے ہیں۔",
    goHome: 'ہوم پیج پر جائیں',
  },
  upgrade: {
    pro: 'پرو',
    goPro: 'پرو بنیں',
    upgradePrompt: 'پریمیم خصوصیات حاصل کرنے کے لیے اپ گریڈ کریں',
    title: 'علم طاقت ہے، اپنی طاقت بڑھائیں۔',
    month: 'ماہ',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipedia کا مکمل مطالعہ کریں',
        basicTheme: 'بنیادی تھیم کی تخصیص استعمال کریں',
        saveArticles: 'مضمون بعد میں پڑھنے کے لیے محفوظ کریں',
      },
      buttonText: 'آپ کا منصوبہ',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia میں سب کچھ، اس کے ساتھ:',
      features: {
        customThemes: 'اپنے پسندیدہ تھیمز، رنگ، لے آؤٹ اور فونٹس میں Alternipedia استعمال کریں',
        notes: 'نوٹس لیں، منظم کریں اور Alternipedia سے برآمد کریں',
        advancedSearch: 'اعلی درجے کے تلاش کے نتائج',
        semanticSearch: 'AI کی طاقت کے ساتھ معنوی تلاش',
        aiAssistant: 'WikiPal تک رسائی حاصل کریں، آپ کا Alternipedia AI معاون',
        topicMaps: 'موضوعات کے مطالعہ کے لیے بہتر Topic Maps',
        profileCustomization: 'مزید پروفائل تخصیص کے اختیارات',
        aiTranslation: 'کسی بھی صفحے کے لیے AI ترجمہ',
        appSupport: 'Alternipedia ایپ پر مستقل سپورٹ',
      },
      buttonText: 'اب اپ گریڈ کریں',
    },
  },
  article: {
    biasIntro: {
      socialist: 'یہ مضمون کمیونٹی کے ارکان کی طرف سے ایک سوشلسٹ نقطہ نظر پیش کرنے کے لیے تیار کیا گیا ہے جو سماجی مساوات، اقتصادی انصاف، اور مزدوروں کے حقوق کو اجاگر کرتا ہے۔',   
      liberal: 'یہ مضمون کمیونٹی کے ارکان کی طرف سے ایک لبرل نقطہ نظر پیش کرنے کے لیے تیار کیا گیا ہے جو ذاتی آزادی، حقوق، اور سماجی ترقی کو اجاگر کرتا ہے۔',
      conservative: 'یہ مضمون کمیونٹی کے ارکان کی طرف سے ایک قدامت پسند نقطہ نظر پیش کرنے کے لیے تیار کیا گیا ہے جو روایت، سماجی استحکام، اور تسلسل کو اجاگر کرتا ہے۔',
      nationalist: 'یہ مضمون کمیونٹی کے ارکان کی طرف سے ایک قوم پرست نقطہ نظر پیش کرنے کے لیے تیار کیا گیا ہے جو ثقافتی شناخت، خودمختاری، اور قومی فخر کو اجاگر کرتا ہے۔',
      wikipedia: {
        part1: 'یہ مضمون کمیونٹی کے ارکان کی طرف سے ایک غیر جانبدار نقطہ نظر پیش کرنے کے لیے تیار کیا گیا ہے جو معلومات اور اعداد و شمار کی منصفانہ نمائندگی کو اجاگر کرتا ہے۔',
        part2: 'ویکیپیڈیا پر دیکھیں →',
      } 
    },
    lastEdited: 'آخری ترمیم',
    tools: 'اوزار',
    content: 'مواد',
    close: 'بند کریں',
    notFoundHeader: 'ویکیپیڈیا مضمون نہیں ملا',
    notFoundText: 'مندرجہ ذیل ویکیپیڈیا مضمون نہیں ملا:',
    searchWikipediaText: 'ویکیپیڈیا میں تلاش کریں',
    article: 'مضمون',
    discussion: 'بحث',
    read: 'پڑھیں',
    edit: 'ترمیم کریں',
    history: 'تاریخ'
  }
};

// indonesia
const id: Dictionary = {
  unauthorised: {
    heading: 'Akses Ditolak',
    message: 'Anda tidak diizinkan mengakses halaman ini. Silakan periksa apakah Anda sudah masuk atau hubungi dukungan.'
  },
  blockedAd: {
    part1: 'Sepertinya Anda menggunakan pemblokir iklan. Nonaktifkan untuk mendukung situs kami — atau',
    part2: 'tingkatkan ke PRO',
    part3: 'untuk pengalaman tanpa iklan.'
  },
  metadata: {
    description: 'Sumber daya komprehensif dan kumpulan artikel yang menyajikan berbagai perspektif tentang pengetahuan dan ide.',
    wikipedia: {
      part1: 'Jelajahi Alternipedia',
      part2: '- Perspektif dan ide alternatif.',
    },
    conservative: {
      part1: 'Dari perspektif konservatif',
      part2: '- Tradisi, stabilitas, dan pasar bebas.',
    },
    nationalist: {
      part1: 'Dari perspektif nasionalis',
      part2: '- Kedaulatan nasional dan identitas budaya.',
    },
    socialist: {
      part1: 'Dari perspektif sosialis',
      part2: '- Keadilan sosial, kesetaraan, dan hak-hak buruh.',
    },
    liberal: {
      part1: 'Dari perspektif liberal',
      part2: '- Kebebasan individu, hak asasi manusia, dan pasar terbuka.',
    },
  },
  accept: 'Terima',
  reject: 'Tolak',
  cookieMessage: 'Kami dan mitra kami menggunakan cookie untuk mempersonalisasi iklan, mengukur kinerja, dan menyediakan fitur sosial. Klik Terima untuk mengizinkan iklan yang dipersonalisasi atau Tolak untuk menolak iklan yang dipersonalisasi. Lihat Kebijakan Privasi kami untuk informasi lebih lanjut.',
  login: {
    title: 'Masuk',
    google: 'Lanjutkan dengan Google',
    facebook: 'Lanjutkan dengan Facebook',
    x: 'Lanjutkan dengan X',
    microsoft: 'Lanjutkan dengan Microsoft',
    policy: "Dengan masuk, Anda menyetujui Syarat Layanan dan Kebijakan Privasi kami.",
  },
  userMenu: {
    login: "Masuk",
    contributions: "Kontribusi",
    savedArticles: "Artikel Tersimpan",
    preferences: "Preferensi",
    logout: "Keluar",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('id-ID', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('id-ID', { year: 'numeric', month: 'long' }),
    "title": "Kebijakan Privasi",
    "lastUpdatedText": "Terakhir diperbarui:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Selamat datang di Alternipedia — sebuah wiki pendidikan yang bertujuan untuk menyajikan berbagai perspektif tentang pengetahuan dan ide. Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hak Anda."
      }
    ],
    "sections": [
      {
        "title": "Informasi yang Kami Kumpulkan",
        "content": [
          {
            "type": "paragraph",
            "text": "Kami hanya mengumpulkan informasi minimum yang diperlukan untuk menyediakan dan meningkatkan layanan kami. Ini dapat mencakup:"
          },
          {
            "type": "list",
            "items": [
              "Informasi akun: Saat Anda masuk menggunakan penyedia OAuth (seperti Google atau Meta), kami menerima informasi dasar seperti nama, alamat email, dan foto profil Anda (jika tersedia).",
              "Informasi pembayaran: Jika Anda melakukan pembayaran atau donasi, kami menggunakan Stripe untuk memprosesnya dengan aman. Kami tidak pernah menyimpan atau melihat detail kartu Anda.",
              "Data analitik: Kami menggunakan Vercel Analytics untuk memahami pola penggunaan dan kinerja situs. Data ini bersifat agregat dan tidak mengidentifikasi Anda secara pribadi.",
              "Informasi teknis: Saat Anda mengunjungi situs kami, kami dapat menerima data log standar seperti jenis browser, perangkat, dan alamat IP.",
              "Adsense: Situs kami menggunakan Google Adsense untuk menampilkan iklan. Adsense dapat menggunakan cookie untuk menampilkan iklan berdasarkan penelusuran Anda di situs kami atau situs lain."
            ]
          }
        ]
      },
      {
        "title": "Bagaimana Kami Menggunakan Informasi Anda",
        "content": [
          {
            "type": "paragraph",
            "text": "Kami menggunakan informasi Anda hanya untuk tujuan berikut:"
          },
          {
            "type": "list",
            "items": [
              "Mengoperasikan dan meningkatkan platform Alternipedia",
              "Memverifikasi pengguna dan mengelola akun",
              "Memproses pembayaran dengan aman melalui Stripe",
              "Memantau kinerja dan keandalan situs",
              "Menanggapi permintaan pengguna melalui situs"
            ]
          },
          {
            "type": "paragraph",
            "text": "Kami tidak menjual, menyewakan, atau menukar data pribadi Anda."
          }
        ]
      },
      {
        "title": "Cookie dan Pelacakan",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia tidak menggunakan cookie iklan atau pelacak."
          },
          {
            "type": "paragraph",
            "text": "Kami hanya menggunakan cookie yang diperlukan untuk sesi login dan fungsi dasar situs."
          }
        ]
      },
      {
        "title": "Penyimpanan dan Keamanan Data",
        "content": [
          {
            "type": "paragraph",
            "text": "Data Anda disimpan dengan aman menggunakan enkripsi dan infrastruktur hosting standar industri."
          },
          {
            "type": "paragraph",
            "text": "Kami mengambil langkah-langkah yang wajar untuk melindungi informasi Anda dari kehilangan, penyalahgunaan, atau akses tidak sah."
          },
          {
            "type": "paragraph",
            "text": "Karena layanan hosting dan analitik kami bersifat global (termasuk Vercel dan Stripe), data Anda dapat diproses di negara lain. Kami hanya bekerja dengan penyedia yang memiliki standar privasi tinggi."
          }
        ]
      },
      {
        "title": "Layanan Pihak Ketiga",
        "content": [
          {
            "type": "paragraph",
            "text": "Kami mengandalkan layanan pihak ketiga tepercaya untuk beberapa fungsi penting:"
          },
          {
            "type": "list",
            "items": [
              "Penyedia OAuth – untuk login aman",
              "Stripe – untuk pemrosesan pembayaran",
              "Vercel Analytics – untuk analisis performa anonim"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Kebijakan Privasi Stripe", "url": "https://stripe.com/privacy" },
              { "label": "Kebijakan Privasi Vercel", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          }
        ]
      },
      {
        "title": "Hak Anda",
        "content": [
          {
            "type": "paragraph",
            "text": "Bergantung pada lokasi Anda, Anda mungkin memiliki hak untuk:"
          },
          {
            "type": "list",
            "items": [
              "Mengakses atau meminta salinan data pribadi Anda",
              "Memperbaiki atau menghapus informasi yang kami miliki tentang Anda",
              "Menarik persetujuan atau menutup akun Anda"
            ]
          }
        ]
      },
      {
        "title": "Privasi Anak-Anak",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ditujukan untuk audiens umum dan tidak ditujukan untuk anak di bawah usia 13 tahun."
          },
          {
            "type": "paragraph",
            "text": "Kami tidak sengaja mengumpulkan data pribadi dari anak di bawah umur."
          }
        ]
      },
      {
        "title": "Perubahan pada Kebijakan Ini",
        "content": [
          {
            "type": "paragraph",
            "text": "Kami dapat memperbarui kebijakan ini dari waktu ke waktu untuk mencerminkan perbaikan atau persyaratan hukum."
          }
        ]
      },
      {
        "title": "Hubungi Kami",
        "content": [
          {
            "type": "paragraph",
            "text": "Jika Anda memiliki pertanyaan atau permintaan terkait privasi, silakan hubungi kami melalui situs Alternipedia."
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Penerimaan Syarat", "content": ["Dengan mengakses dan menggunakan situs web ini, pengguna setuju untuk mematuhi dan terikat oleh Syarat Layanan ini. Pengguna yang tidak setuju dengan syarat ini harus segera menghentikan penggunaan situs web."] },
    { "title": "Tanggung Jawab Akun Pengguna", "content": ["Pengguna bertanggung jawab untuk menjaga kerahasiaan kredensial akun mereka. Setiap aktivitas yang terjadi di bawah akun pengguna adalah tanggung jawab pemilik akun sepenuhnya. Pengguna harus segera memberitahu administrator situs tentang akses akun yang tidak sah."] },
    { "title": "Batasan Tanggung Jawab", "content": ["Situs web menyediakan konten 'apa adanya' tanpa jaminan apapun. Pemilik situs tidak bertanggung jawab atas kerusakan langsung, tidak langsung, insidental, konsekuensial, atau hukuman yang timbul dari interaksi pengguna dengan platform."] },
    { "title": "Pedoman Perilaku Pengguna", "content": ["Jangan mengunggah konten berbahaya atau berbahaya yang dapat merusak situs web atau penggunanya.", "Hormati hak pengguna lain.", "Hindari aktivitas yang dapat mengganggu fungsionalitas situs web.", "Patuhi hukum lokal dan internasional yang berlaku."] },
    { "title": "Modifikasi Syarat", "content": ["Situs web berhak untuk mengubah syarat ini kapan saja. Penggunaan situs web yang berkelanjutan setelah perubahan dianggap sebagai penerimaan terhadap syarat baru."] },
    { "title": "Klausul Penghentian", "content": ["Situs web dapat menghentikan atau menangguhkan akses pengguna tanpa pemberitahuan sebelumnya jika terjadi pelanggaran syarat ini atau alasan lain yang dianggap sesuai oleh pihak administrasi."] },
    { "title": "Hukum yang Mengatur", "content": ["Syarat ini diatur oleh hukum yurisdiksi di mana situs web beroperasi terutama, tanpa memandang prinsip konflik hukum."] }

  ],
  tools: {
    textToSpeech: "Teks ke Ucapan",
    translate: "Terjemahkan",
    topicMap: "Peta Topik",
    notes: "Catatan Saya",
    wikipal: "Tanya Wikipal",
    watchChanges: "Lihat Perubahan",
    saveArticle: "Simpan Artikel",
    saved: "Tersimpan",
    shortUrl: "Tautan Pendek",
    citePage: "Kutip Halaman Ini",
    QRCode: "Kode QR",
    DownloadPDF: "Unduh sebagai PDF",
    printPage: "Cetak Halaman Ini",
    pageInfo: "Informasi Halaman",
  },
  language: {
    searchMessage: "Cari bahasa...",
    selectLanguage: "Pilih Bahasa",
    description: "Pilih bahasa yang Anda inginkan untuk melihat artikel ini.",
    notFound: "Tidak ada bahasa yang ditemukan"
  },
  termsAndConditions: 'Syarat dan Ketentuan',
  close: 'Tutup',
  bias: {
    heading: "Apa itu bias?",
    explanation: "Bias adalah kecenderungan untuk mendukung atau berpihak pada sudut pandang, partai, atau ideologi politik tertentu. Ini dapat memengaruhi cara seseorang menafsirkan peristiwa, memilih informasi, dan menyajikan argumen. Ketika seorang penulis memiliki bias politik, itu dapat memengaruhi sudut pandangnya tentang informasi mana yang ditekankan, bagaimana orang atau topik digambarkan, dan kesimpulan apa yang diambil. Akibatnya, gaya penulisan mereka dapat mencerminkan keyakinan pribadi mereka daripada sudut pandang yang sepenuhnya netral atau seimbang.",
    socialist: "Sosialis",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konservatif",
    nationalist: "Nasionalis",
    title: "Pihak Bacaan",
  },
  common: {
    loadingPerspective: 'Memuat perspektif...',
    fetchingUserInfo: 'Mengambil info pengguna...',
    home: 'Beranda',
    about: 'Tentang',
    help: 'Bantuan',
    search: 'Cari',
    searchPlaceholder: 'Cari Alternipedia...',
    login: 'Masuk',
    logout: 'Keluar',
    signUp: 'Daftar',
    profile: 'Profil',
    settings: 'Pengaturan',
    language: 'Bahasa',
    theme: 'Tema',
    comingSoon: 'Alternipedia akan segera hadir!',
    stayTuned: 'Tetap disini.',
    exampleArticle: 'Artikel Contoh:',
  },
  navigation: {
    aboutUs: 'Tentang Kami',
    currentEvents: 'Peristiwa Terkini',
    randomArticle: 'Artikel Acak',
    help: 'Bantuan',
  },
  footer: {
    pleaseLogin: 'Silakan masuk untuk menggunakan fitur ini.',
    text: {
      "part1": "Teks tersedia di bawah",
      "part2": "Lisensi Creative Commons Atribusi-BerbagiSerupa 4.0 Internasional",
      "part3": "; syarat tambahan dapat berlaku. Dengan menggunakan situs ini, Anda setuju dengan",
      "part4": "Syarat dan Ketentuan",
      "part5": "dan",
      "part6": "Kebijakan Privasi",
      "part7": ". Alternipedia adalah proyek sumber terbuka nirlaba."
    },
    license: 'Lisensi',
    terms: 'Syarat dan Ketentuan',
    privacy: 'Kebijakan Privasi',
    contact: 'Kontak',
    disclaimers: 'Penafian',
    codeOfConduct: 'Kode Etik',
    statistics: 'Statistik',
    cookieStatement: 'Pernyataan Cookie',
    developers: 'Pengembang',
  },
  notFound: {
    title: '404',
    heading: 'Halaman Tidak Ditemukan',
    message: 'Maaf, kami tidak dapat menemukan halaman yang Anda cari...',
    goHome: 'Kembali ke Beranda',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Jadi PRO',
    upgradePrompt: 'Tingkatkan untuk membuka fitur premium',
    title: 'Pengetahuan adalah Kekuatan, Tingkatkan Milikmu.',
    month: 'bulan',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Baca seluruh Alternipedia',
        basicTheme: 'Gunakan kustomisasi tema dasar',
        saveArticles: 'Simpan artikel untuk dibaca nanti',
      },
      buttonText: 'Rencanamu',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Semua di Alternipedia, ditambah:',
      features: {
        customThemes: 'Gunakan Alternipedia dengan tema, warna, tata letak, dan font favoritmu',
        notes: 'Catat, kelola, dan ekspor catatan dari seluruh Alternipedia',
        advancedSearch: 'Hasil pencarian lanjutan',
        semanticSearch: 'Pencarian semantik dengan kekuatan AI',
        aiAssistant: 'Dapatkan akses ke WikiPal, asisten AI Alternipedia Anda',
        topicMaps: 'Penelitian topik lebih baik dengan Peta Topik',
        profileCustomization: 'Opsi kustomisasi profil lebih banyak',
        aiTranslation: 'Terjemahan AI untuk halaman apa pun',
        appSupport: 'Dukungan berkelanjutan di Aplikasi Alternipedia',
      },
      buttonText: 'Tingkatkan sekarang',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Artikel ini disusun oleh anggota komunitas untuk menyajikan perspektif sosialis yang menyoroti kesetaraan sosial, keadilan ekonomi, dan hak-hak pekerja.',
      liberal: 'Artikel ini disusun oleh anggota komunitas untuk menyajikan perspektif liberal yang menekankan kebebasan individu, hak asasi manusia, dan kemajuan sosial.',
      conservative: 'Artikel ini disusun oleh anggota komunitas untuk menyajikan perspektif konservatif yang menekankan tradisi, stabilitas, dan nilai-nilai keluarga.',
      nationalist: 'Artikel ini disusun oleh anggota komunitas untuk menyajikan perspektif nasionalis yang menekankan kedaulatan nasional, identitas budaya, dan kebanggaan nasional.',
      wikipedia: {
        part1: 'Artikel ini disusun oleh anggota komunitas untuk menyajikan perspektif netral yang menekankan representasi yang adil dari informasi dan data.',
        part2: 'Lihat di Wikipedia →',
      }
    },
    lastEdited: 'Terakhir Diedit',
    tools: 'Alat',
    content: 'Konten',
    close: 'Tutup',
    notFoundHeader: 'Artikel Wikipedia Tidak Ditemukan',
    notFoundText: 'Artikel Wikipedia berikut tidak ditemukan:',
    searchWikipediaText: 'Cari di Wikipedia',
    article: 'Artikel',
    discussion: 'Diskusi',
    read: 'Baca',
    edit: 'Sunting',
    history: 'Riwayat'
  }
};

// Marathi
const mr: Dictionary = {
  unauthorised: {
    heading: 'प्रवेश नाकारला',
    message: 'आपल्याला या पृष्ठावर प्रवेश करण्याची परवानगी नाही. कृपया तपासा की आपण प्रवेश केला आहे का किंवा सहाय्यासाठी संपर्क करा.'
  },
  blockedAd: {
    part1: 'तुम्ही जाहिराती ब्लॉकर वापरत आहात असे दिसते. कृपया आमच्या साइटला समर्थन देण्यासाठी ते अक्षम करा — किंवा',
    part2: 'PRO मध्ये अपग्रेड करा',
    part3: 'जाहिरातविरहित अनुभवासाठी.'
  },
  metadata: {
    description: 'ज्ञान आणि कल्पनांवरील विविध दृष्टीकोन सादर करण्यासाठी डिझाइन केलेले एक शैक्षणिक विकी.',
    wikipedia: {
      part1: 'Alternipedia अन्वेषण करा',
      part2: '- पर्यायी दृष्टीकोन आणि कल्पना.',
    },
    conservative: {
      part1: 'रक्षणवादी दृष्टीकोनातून',
      part2: '- परंपरा, स्थिरता आणि मुक्त बाजार.',
    },
    nationalist: {
      part1: 'राष्ट्रीयवादी दृष्टीकोनातून',
      part2: '- राष्ट्रीय सार्वभौमत्व आणि सांस्कृतिक ओळख.',
    },
    socialist: {
      part1: 'समाजवादी दृष्टीकोनातून',
      part2: '- सामाजिक न्याय, समता आणि कामगार हक्क.',
    },
    liberal: {
      part1: 'उदारमतवादी दृष्टीकोनातून',
      part2: '- वैयक्तिक स्वातंत्र्य, मानवाधिकार आणि मुक्त बाजार.',
    },
  },
  accept: 'स्वीकार करा',
  reject: 'नाको',
  cookieMessage: 'आम्ही आणि आमचे भागीदार जाहिराती वैयक्तिकृत करण्यासाठी, कामगिरी मोजण्यासाठी आणि सामाजिक वैशिष्ट्ये प्रदान करण्यासाठी कुकीज वापरतो. वैयक्तिकृत जाहिरातींसाठी परवानगी देण्यासाठी स्वीकार क्लिक करा किंवा वैयक्तिकृत जाहिराती नाकारण्यासाठी नकार क्लिक करा. अधिक माहितीसाठी आमची गोपनीयता धोरण पहा.',
  login: {
    title: 'लॉग इन करा',
    google: 'Google सह सुरू ठेवा',
    facebook: 'Facebook सह सुरू ठेवा',
    x: 'X सह सुरू ठेवा',
    microsoft: 'Microsoft सह सुरू ठेवा',
    policy: "लॉग इन केल्याने, आपण आमच्या सेवा अटी आणि गोपनीयता धोरणास सहमत आहात.",
  },
  userMenu: {
    login: "लॉग इन",
    contributions: "योगदान",
    savedArticles: "जतन केलेले लेख",
    preferences: "प्राधान्ये",
    logout: "लॉग आउट",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('mr-IN', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('mr-IN', { year: 'numeric', month: 'long' }),
    "title": "गोपनीयता धोरण",
    "lastUpdatedText": "शेवटचे अद्यतन:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipedia मध्ये आपले स्वागत आहे — ज्ञान आणि विचारांवरील विविध दृष्टीकोन सादर करण्यासाठी डिझाइन केलेले एक शैक्षणिक विकी. आम्ही तुमच्या गोपनीयतेचा आदर करतो आणि तुमची वैयक्तिक माहिती सुरक्षित ठेवण्यासाठी वचनबद्ध आहोत. हे धोरण आम्ही कोणती माहिती गोळा करतो, ती कशी वापरतो आणि तुमचे अधिकार काय आहेत हे स्पष्ट करते."
      }
    ],
    "sections": [
      {
        "title": "आम्ही कोणती माहिती गोळा करतो",
        "content": [
          {
            "type": "paragraph",
            "text": "आम्ही फक्त आमच्या सेवा चालवण्यासाठी आणि सुधारण्यासाठी आवश्यक असलेली किमान माहिती गोळा करतो. यामध्ये समाविष्ट असू शकते:"
          },
          {
            "type": "list",
            "items": [
              "खाते माहिती: आपण Google किंवा Meta सारख्या OAuth प्रदात्यामार्फत लॉग इन केल्यास, आम्हाला तुमचे नाव, ईमेल आणि प्रोफाइल फोटो (असल्यास) प्राप्त होतात.",
              "देयक माहिती: आपण पेमेंट किंवा देणगी करण्याचे निवडल्यास, आम्ही Stripe द्वारे सुरक्षित प्रक्रिया करतो. आम्ही तुमची कार्ड माहिती कधीही जतन किंवा पाहत नाही.",
              "विश्लेषण डेटा: कोणते पृष्ठ लोकप्रिय आहे आणि साइट कशी कार्य करते हे समजण्यासाठी आम्ही Vercel Analytics वापरतो. हे डेटा अनामिक आहे आणि तुमची वैयक्तिक ओळख दर्शवत नाही.",
              "तांत्रिक माहिती: आपण साइटला भेट दिल्यास, आम्हाला ब्राउझर प्रकार, उपकरण आणि IP पत्ता यासारखी मूलभूत लॉग माहिती आपोआप मिळू शकते.",
              "Adsense: आमची साइट जाहिराती दाखवण्यासाठी Google Adsense वापरते. Adsense तुमच्या किंवा इतर साइट्सवरील शोधांवर आधारित जाहिराती दाखवण्यासाठी कुकीज वापरू शकते."
            ]
          }
        ]
      },
      {
        "title": "माहितीचा वापर कसा केला जातो",
        "content": [
          {
            "type": "paragraph",
            "text": "आम्ही तुमची माहिती खालील हेतूसाठी वापरतो:"
          },
          {
            "type": "list",
            "items": [
              "Alternipedia प्लॅटफॉर्म चालवणे आणि सुधारणे",
              "वापरकर्ता प्रमाणीकरण आणि खाते व्यवस्थापन",
              "Stripe द्वारे सुरक्षित देयके हाताळणे",
              "साइटची कामगिरी आणि विश्वासार्हता निरीक्षण करणे",
              "वापरकर्त्यांच्या विनंत्यांना प्रतिसाद देणे"
            ]
          },
          {
            "type": "paragraph",
            "text": "आम्ही तुमची वैयक्तिक माहिती विकत नाही, भाड्याने देत नाही किंवा व्यापार करत नाही."
          }
        ]
      },
      {
        "title": "कुकीज आणि ट्रॅकिंग",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia जाहिरात किंवा ट्रॅकिंग कुकीज वापरत नाही."
          },
          {
            "type": "paragraph",
            "text": "आम्ही फक्त लॉगिन सत्र आणि साइट कार्यक्षमतेसाठी आवश्यक असलेल्या मूलभूत कुकीज वापरतो."
          }
        ]
      },
      {
        "title": "डेटा संचयन आणि सुरक्षा",
        "content": [
          {
            "type": "paragraph",
            "text": "तुमचा डेटा उद्योग-मानक एन्क्रिप्शन आणि सुरक्षित होस्टिंगसह संरक्षित आहे."
          },
          {
            "type": "paragraph",
            "text": "आम्ही तुमची माहिती हरवणे, गैरवापर होणे किंवा अनधिकृत प्रवेश होऊ नये म्हणून वाजवी उपाययोजना करतो."
          },
          {
            "type": "paragraph",
            "text": "होस्टिंग आणि विश्लेषण सेवा (उदा. Vercel, Stripe) जागतिक पातळीवर असू शकतात, त्यामुळे तुमचा डेटा इतर देशांमध्ये प्रक्रिया केला जाऊ शकतो. आम्ही फक्त मजबूत गोपनीयता मानके पाळणाऱ्या भागीदारांसोबत काम करतो."
          }
        ]
      },
      {
        "title": "तुमचे अधिकार",
        "content": [
          {
            "type": "list",
            "items": [
              "तुमच्या डेटाला प्रवेश मागणे किंवा त्याची प्रत मिळवणे",
              "डेटा सुधारणा किंवा विलोपनाची विनंती करणे",
              "संमती मागे घेणे किंवा खाते हटवणे"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "अटींचे स्वीकार", "content": ["या वेबसाइटचा प्रवेश आणि वापर करून, वापरकर्ते या सेवा अटींचे पालन करण्यास आणि त्यांचे बांधील राहण्यास सहमत असतात. जे वापरकर्ते या अटींशी सहमत नाहीत, त्यांनी त्वरित वेबसाइटचा वापर थांबवावा."] },
    { "title": "वापरकर्ता खाते जबाबदाऱ्या", "content": ["वापरकर्ते त्यांच्या खात्याच्या प्रमाणपत्रांची गोपनीयता राखण्यासाठी जबाबदार आहेत. वापरकर्त्याच्या खात्यातील कोणतीही क्रियाकलाप केवळ खाते धारकाची जबाबदारी आहे. वापरकर्त्यांनी कोणत्याही अनधिकृत खाते प्रवेशाबद्दल त्वरित वेबसाइट प्रशासकांना सूचित करणे आवश्यक आहे."] },
    { "title": "जबाबदारीची मर्यादा", "content": ["वेबसाइट सामग्री 'जशी आहे' तशी प्रदान करते, कोणतीही हमी न देता. वेबसाइट मालक वापरकर्त्यांच्या प्लॅटफॉर्मवरील संवादामुळे उद्भवणाऱ्या थेट, अप्रत्यक्ष, आकस्मिक, परिणामी किंवा शिक्षापरक हानीसाठी जबाबदार नाहीत."] },
    { "title": "वापरकर्ता आचारसंहिता मार्गदर्शक तत्त्वे", "content": ["अशा हानिकारक किंवा दुष्ट सामग्री अपलोड करू नका ज्यामुळे वेबसाइट किंवा तिच्या वापरकर्त्यांना हानी होऊ शकते.", "इतर वापरकर्त्यांचे हक्क सन्मान करा.", "अशा क्रियाकलाप टाळा ज्यामुळे वेबसाइटच्या कार्यक्षमतेमध्ये व्यत्यय येऊ शकतो.", "लागू स्थानिक आणि आंतरराष्ट्रीय कायद्याचे पालन करा."] },
    { "title": "अटींमध्ये बदल", "content": ["वेबसाइटला या अटी कोणत्याही वेळी बदलण्याचा अधिकार राखीव आहे. बदलांनंतर वेबसाइटचा सतत वापर नवीन अटींचे स्वीकृती मानले जाईल."] },
    { "title": "समाप्ती कलम", "content": ["वेबसाइट प्रशासन या अटींचे उल्लंघन किंवा इतर कोणत्याही योग्य कारणास्तव वापरकर्त्याचा प्रवेश पूर्वसूचना न देता समाप्त किंवा निलंबित करू शकते."] },
    { "title": "संचालक कायदा", "content": ["या अटी त्या अधिकार क्षेत्राच्या कायद्याने नियंत्रित होतात जिथे वेबसाइट मुख्यत्वे कार्यरत आहे, कायद्याच्या संघर्षाच्या तत्त्वांचा विचार न करता."] }

  ],
  tools: {
    textToSpeech: "टेक्स्ट टू स्पीच",
    translate: "अनुवाद",
    topicMap: "विषय नकाशा",
    notes: "माझ्या नोट्स",
    wikipal: "विकिपालला विचारा",
    watchChanges: "बदल पहा",
    saveArticle: "लेख जतन करा",
    saved: "जतन केले",
    shortUrl: "लघु लिंक",
    citePage: "या पृष्ठाचा संदर्भ द्या",
    QRCode: "QR कोड",
    DownloadPDF: "पीडीएफ म्हणून डाउनलोड करा",
    printPage: "या पृष्ठाची छापील आवृत्ती",
    pageInfo: "पृष्ठ माहिती",
  },
  termsAndConditions: 'अटी व शर्ती',
  close: 'बंद करा',
  language: {
    searchMessage: "भाषा शोधा...",
    selectLanguage: "भाषा निवडा",
    description: "या लेखाचे प्रदर्शन करण्यासाठी आपली आवडती भाषा निवडा.",
    notFound: "कोणतीही भाषा सापडली नाही"
  },
  bias: {
    heading: "पक्षपाती म्हणजे काय?",
    explanation: "पक्षपाती म्हणजे विशिष्ट दृष्टिकोन, पक्ष किंवा राजकीय विचारधारेला समर्थन देण्याची प्रवृत्ती. यामुळे एखाद्या व्यक्तीच्या घटनांचे अर्थ लावण्याच्या, माहिती निवडण्याच्या आणि तर्क सादर करण्याच्या पद्धतीवर परिणाम होऊ शकतो. जेव्हा एखादा लेखक राजकीय पक्षपाती असतो, तेव्हा यामुळे त्याच्या माहितीवर जोर देण्याच्या, व्यक्ती किंवा विषयांचे वर्णन करण्याच्या आणि कोणते निष्कर्ष काढण्याच्या पद्धतीवर परिणाम होऊ शकतो. परिणामी, त्यांचा लेखनशैली त्यांच्या वैयक्तिक विश्वासांचे प्रतिबिंबित करू शकते, न कि पूर्णपणे तटस्थ किंवा संतुलित दृष्टिकोन.",
    socialist: "सामाजिकवादी",
    liberal: "लिबरल",
    wikipedia: "विकिपीडिया",
    conservative: "संरक्षणवादी",
    nationalist: "राष्ट्रीयवादी",
    title: "वाचन पक्षपाती",
  },
  common: {
    loadingPerspective: 'दृष्टीकोन लोड करत आहे...',
    fetchingUserInfo: 'वापरकर्ता माहिती मिळवत आहे...',
    home: 'मुख्यपृष्ठ',
    about: 'आमच्याबद्दल',
    help: 'सहाय्य',
    search: 'शोधा',
    searchPlaceholder: 'Alternipedia शोधा...',
    login: 'लॉग इन करा',
    logout: 'लॉग आऊट करा',
    signUp: 'साइन अप करा',
    profile: 'प्रोफाइल',
    settings: 'सेटिंग्ज',
    language: 'भाषा',
    theme: 'थीम',
    comingSoon: 'Alternipedia लवकरच येत आहे!',
    stayTuned: 'तयार रहा.',
    exampleArticle: 'उदाहरण लेख:',
  },
  navigation: {
    aboutUs: 'आमच्याबद्दल',
    currentEvents: 'सध्याचे कार्यक्रम',
    randomArticle: 'यादृच्छिक लेख',
    help: 'सहाय्य',
  },
  footer: {
    pleaseLogin: 'ही वैशिष्ट्ये वापरण्यासाठी कृपया लॉगिन करा.',
    text: {
      "part1": "पाठ उपलब्ध आहे:",
      "part2": "क्रिएटिव्ह कॉमन्स अ‍ॅट्रिब्यूशन-शेअरअलाइक 4.0 आंतरराष्ट्रीय परवाना अंतर्गत",
      "part3": "; अतिरिक्त अटी लागू होऊ शकतात. या साइटचा वापर करून, आपण सहमत आहात",
      "part4": "नियम आणि अटी",
      "part5": "आणि",
      "part6": "गोपनीयता धोरण",
      "part7": ". Alternipedia हे एक मुक्त स्रोत, नफा न कमवणारे प्रकल्प आहे."
    },
    license: 'लायसन्स',
    terms: 'अटी',
    privacy: 'गोपनीयता',
    contact: 'संपर्क करा',
    disclaimers: 'अस्वीकरण',
    codeOfConduct: 'वर्तन संहिता',
    statistics: 'सांख्यिकी',
    cookieStatement: 'कुकी विधान',
    developers: 'विकसक',
  },
  notFound: {
    title: '404',
    heading: 'पृष्ठ सापडले नाही',
    message: 'आम्हाला खेद आहे, आम्ही तुम्हाला हवे असलेले पृष्ठ सापडले नाही...',
    goHome: 'मुखपृष्ठावर जा',
  },
  upgrade: {
    pro: 'प्रो',
    goPro: 'प्रो व्हा',
    upgradePrompt: 'प्रीमियम फीचर्स अनलॉक करण्यासाठी अपग्रेड करा',
    title: 'ज्ञान म्हणजे शक्ति, आपली शक्ति वाढवा.',
    month: 'महिना',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipedia पूर्ण वाचा',
        basicTheme: 'मूलभूत थीम सानुकूलन वापरा',
        saveArticles: 'लेख नंतर वाचण्यासाठी जतन करा',
      },
      buttonText: 'तुमचा प्लॅन',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia मधील सर्वकाही, शिवाय:',
      features: {
        customThemes: 'तुमच्या आवडत्या थीम, रंग, लेआउट आणि फॉन्टमध्ये Alternipedia वापरा',
        notes: 'नोंदी घ्या, व्यवस्थापित करा, आणि Alternipedia मधून निर्यात करा',
        advancedSearch: 'प्रगत शोध परिणाम',
        semanticSearch: 'AI च्या शक्तीने सिमॅंटिक शोध',
        aiAssistant: 'WikiPal, तुमचा Alternipedia AI सहाय्यक वापरा',
        topicMaps: 'टॉपिक मॅप्ससह उत्तम विषय संशोधन',
        profileCustomization: 'अधिक प्रोफाइल सानुकूलन पर्याय',
        aiTranslation: 'कोणत्याही पृष्ठासाठी AI अनुवाद',
        appSupport: 'Alternipedia अ‍ॅपवर सतत समर्थन',
      },
      buttonText: 'आता अपग्रेड करा',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'हा लेख सामाजिक न्याय, आर्थिक समता आणि कामगार हक्क यावर भर देणारा समाजवादी दृष्टीकोन सादर करण्यासाठी समुदाय सदस्यांनी तयार केला आहे.',
      liberal: 'हा लेख वैयक्तिक स्वातंत्र्य, मानवाधिकार आणि सामाजिक प्रगती यावर भर देणारा उदारमतवादी दृष्टीकोन सादर करण्यासाठी समुदाय सदस्यांनी तयार केला आहे.',
      conservative: 'हा लेख परंपरा, स्थिरता आणि कौटुंबिक मूल्ये यावर भर देणारा संरक्षणवादी दृष्टीकोन सादर करण्यासाठी समुदाय सदस्यांनी तयार केला आहे.',
      socialist: 'हा लेख सामाजिक न्याय, आर्थिक समता आणि कामगार हक्क यावर भर देणारा समाजवादी दृष्टीकोन सादर करण्यासाठी समुदाय सदस्यांनी तयार केला आहे.',
      wikipedia: {
        part1: 'हा लेख माहिती आणि डेटा यांचे न्याय्य प्रतिनिधित्व यावर भर देणारा तटस्थ दृष्टीकोन सादर करण्यासाठी समुदाय सदस्यांनी तयार केला आहे.',
        part2: 'विकिपीडियावर पहा →',
      }
    },
    lastEdited: 'शेवटचे संपादन',
    tools: 'साधने',
    content: 'सामग्री',
    article: 'लेख',
    close: 'बंद करा',
    notFoundHeader: 'विकिपीडिया लेख सापडला नाही',
    notFoundText: 'खालील विकिपीडिया लेख सापडला नाही:',
    searchWikipediaText: 'विकिपीडियावर शोधा',
    discussion: 'चर्चा',
    read: 'वाचा',
    edit: 'संपादित करा',
    history: 'इतिहास'
  }
};

// Telugu
const te: Dictionary = {
  unauthorised: {
    heading: 'ప్రవేశం నిరాకరించబడింది',
    message: 'ఈ పేజీకి మీకు ప్రాక్సెస్ చేయడానికి అనుమతి లేదు. దయచేసి మీరు లాగిన్ అయి ఉన్నారా లేదా సపోర్ట్‌ను సంప్రదించండి అని నిర్ధారించండి.'
  },
  blockedAd: {
    part1: 'మీరు ప్రకటన బ్లాకర్‌ను ఉపయోగిస్తున్నట్లు కనిపిస్తోంది. దయచేసి మా సైట్‌ను మద్దతు ఇవ్వడానికి దాన్ని నిలిపివేయండి — లేదా',
    part2: 'PROకు అగ్రేడ్ చేయండి',
    part3: 'జాహిరాతులేని అనుభవం కోసం.'
  },
  metadata: {
    description: 'జ్ఞానం మరియు అభిప్రాయాలపై విభిన్న దృక్కోణాలను అందించడానికి రూపొందించబడిన విద్యా వికీ.',
    wikipedia: {
      part1: 'Alternipedia అన్వేషించండి',
      part2: '- ప్రత్యామ్నాయ దృక్కోణాలు మరియు ఆలోచనలు.',
    },
    conservative: {
      part1: 'రక్షణాత్మక దృక్కోణం నుండి',
      part2: '- సంప్రదాయం, స్థిరత్వం మరియు స్వేచ్చ మార్కెట్.',
    },
    nationalist: {
      part1: 'జాతీయవాద దృక్కోణం నుండి',
      part2: '- జాతీయ సార్వభౌమత్వం మరియు సాంస్కృతిక గుర్తింపు.',
    },
    liberal: {
      part1: 'లిబరల్ దృక్కోణం నుండి',
      part2: '- వ్యక్తిగత స్వేచ్ఛ, మానవ హక్కులు మరియు స్వేచ్ఛ మార్కెట్.',
    },
    socialist: {    
      part1: 'సామ్యవాది దృక్కోణం నుండి',
      part2: '- సామాజిక న్యాయం, సమానత్వం మరియు కార్మిక హక్కులు.',
    },
  },
  accept: 'అంగీకరించండి',
  reject: 'నిరాకరించండి',
  cookieMessage: 'మేము మరియు మా భాగస్వాములు ప్రకటనలను వ్యక్తిగతీకరించడానికి, పనితీరును కొలవడానికి మరియు సామాజిక ఫీచర్లను అందించడానికి కుకీలు ఉపయోగిస్తారు. వ్యక్తిగతీకరించిన ప్రకటనలను అనుమతించడానికి అంగీకరించండి క్లిక్ చేయండి లేదా వ్యక్తిగతీకరించిన ప్రకటనలను తిరస్కరించడానికి నిరాకరించండి క్లిక్ చేయండి. మరిన్ని కోసం మా గోప్యతా విధానం చూడండి.',
  login: {
    title: 'లాగిన్',
    google: 'Google తో కొనసాగించండి',
    facebook: 'Facebook తో కొనసాగించండి',
    x: 'X తో కొనసాగించండి',
    microsoft: 'Microsoft తో కొనసాగించండి',
    policy: "లాగిన్ చేయడం ద్వారా, మీరు మా సేవా నిబంధనలు మరియు గోప్యతా విధానానికి అంగీకరిస్తున్నారు.",
  },
  userMenu: {
    login: "లాగిన్",
    contributions: "కాంట్రిబ్యూషన్స్",
    savedArticles: "సేవ్ చేసిన ఆర్టికల్స్",
    preferences: "ప్రిఫరెన్సెస్",
    logout: "లాగ్ అవుట్",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('te-IN', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('te-IN', { year: 'numeric', month: 'long' }),
    "title": "గోప్యతా విధానం",
    "lastUpdatedText": "చివరిసారిగా నవీకరించబడింది:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipediaకి స్వాగతం — జ్ఞానం మరియు అభిప్రాయాలపై విభిన్న దృక్కోణాలను అందించడానికి రూపొందించబడిన విద్యా వికీ. మేము మీ గోప్యతను గౌరవిస్తాము మరియు మీ వ్యక్తిగత సమాచారాన్ని రక్షించడానికి కట్టుబడి ఉన్నాము. ఈ విధానం మేము ఏ సమాచారం సేకరిస్తాము, దాన్ని ఎలా ఉపయోగిస్తాము మరియు మీ హక్కులు ఏమిటో వివరిస్తుంది."
      }
    ],
    "sections": [
      {
        "title": "మేము సేకరించే సమాచారం",
        "content": [
          {
            "type": "list",
            "items": [
              "ఖాతా సమాచారం: మీరు Google లేదా Meta వంటి OAuth ప్రొవైడర్‌తో లాగిన్ అయితే, మీ పేరు, ఇమెయిల్ మరియు ప్రొఫైల్ చిత్రాన్ని పొందుతాము.",
              "చెల్లింపు సమాచారం: మీరు చెల్లింపు లేదా విరాళం ఇవ్వాలని ఎంచుకుంటే, మేము Stripe ద్వారా సురక్షితంగా ప్రాసెస్ చేస్తాము. మేము మీ కార్డ్ వివరాలను ఎప్పుడూ నిల్వ చేయము లేదా వీక్షించము.",
              "విశ్లేషణ డేటా: ఏ పేజీలు ప్రాచుర్యం పొందుతున్నాయి మరియు సైట్ ఎలా పనిచేస్తుంది అనే దానిని అర్థం చేసుకోవడానికి మేము Vercel Analyticsని ఉపయోగిస్తాము.",
              "సాంకేతిక సమాచారం: మీరు సైట్ సందర్శించినప్పుడు, బ్రౌజర్ రకం, పరికరం మరియు IP చిరునామా వంటి ప్రామాణిక లాగ్ డేటాను స్వయంచాలకంగా స్వీకరిస్తాము.",
              "Adsense: మా సైట్ ప్రకటనలను ప్రదర్శించడానికి Google Adsenseని ఉపయోగిస్తుంది. Adsense కుకీలను ఉపయోగించి మీ లేదా ఇతర సైట్లపై మీ శోధనల ఆధారంగా ప్రకటనలను ప్రదర్శించవచ్చు."
            ]
          }
        ]
      },
      {
        "title": "సమాచారాన్ని ఎలా ఉపయోగిస్తాము",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia ప్లాట్‌ఫారమ్‌ను నడపడం మరియు మెరుగుపరచడం",
              "వినియోగదారుల గుర్తింపు మరియు ఖాతా నిర్వహణ",
              "Stripe ద్వారా సురక్షిత చెల్లింపులు నిర్వహించడం",
              "సైట్ పనితీరును మరియు స్థిరత్వాన్ని పర్యవేక్షించడం",
              "వినియోగదారుల అభ్యర్థనలకు స్పందించడం"
            ]
          }
        ]
      },
      {
        "title": "కుకీలు మరియు ట్రాకింగ్",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ప్రకటన లేదా ట్రాకింగ్ కుకీలను ఉపయోగించదు."
          },
          {
            "type": "paragraph",
            "text": "లాగిన్ సెషన్ మరియు సైట్ ఫంక్షన్ కోసం అవసరమైన ప్రాథమిక కుకీలను మాత్రమే మేము ఉపయోగిస్తాము."
          }
        ]
      },
      {
        "title": "డేటా నిల్వ మరియు భద్రత",
        "content": [
          {
            "type": "paragraph",
            "text": "మీ డేటా పరిశ్రమ ప్రామాణిక గూఢీకరణ మరియు సురక్షిత హోస్టింగ్ మౌలిక సదుపాయాలతో రక్షించబడుతుంది."
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "నియమాల స్వీకారం", "content": ["ఈ వెబ్‌సైట్‌ని యాక్సెస్ చేసి ఉపయోగించడం ద్వారా, వినియోగదారులు ఈ సేవా నిబంధనలను పాటించడానికి మరియు వాటికి బంధించబడటానికి అంగీకరిస్తారు. ఈ నిబంధనలకు అంగీకరించని వినియోగదారులు వెంటనే వెబ్‌సైట్ వాడకాన్ని నిలిపివేయాలి."] },
    { "title": "వినియోగదారు ఖాతా బాధ్యతలు", "content": ["వినియోగదారులు తమ ఖాతా గుర్తింపు సమాచార గోప్యతను కాపాడడానికి బాధ్యత వహిస్తారు. వినియోగదారుని ఖాతా క్రింద జరిగే ఏదైనా కార్యకలాపం ఖాతా యజమాని యొక్క ప్రత్యేక బాధ్యత. అనధికారిక ఖాతా యాక్సెస్ ఏమైనా ఉంటే, వినియోగదారులు వెంటనే వెబ్‌సైట్ నిర్వాహకులను తెలియజేయాలి."] },
    { "title": "బాధ్యత పరిమితి", "content": ["వెబ్‌సైట్ 'అనుసరించి' కంటెంట్‌ను అందిస్తుంది, ఎలాంటి వారంటీలు లేవు. వినియోగదారుల వేదికతో ఉన్న పరస్పర చర్యల కారణంగా వచ్చిన నేరుగా, పరోక్ష, అనూహ్య, ఫలితాత్మక లేదా శిక్షాత్మక నష్టాలకు వెబ్‌సైట్ యజమానులు బాధ్యులు కావరు."] },
    { "title": "వినియోగదారు నడక మార్గదర్శకాలు", "content": ["వెబ్‌సైట్ లేదా దాని వినియోగదారులను హానిచేసే హానికరమైన లేదా చెడైన కంటెంట్‌ను అప్లోడ్ చేయవద్దు.", "ఇతర వినియోగదారుల హక్కులను గౌరవించండి.", "వెబ్‌సైట్ ఫంక్షనాలిటీకి వ్యతిరేకంగా వచ్చే కార్యకలాపాలను నివారించండి.", "ప్రసక్తి ఉన్న స్థానిక మరియు అంతర్జాతీయ చట్టాలను పాటించండి."] },
    { "title": "నియమాలలో మార్పులు", "content": ["వెబ్‌సైట్ ఈ నియమాలను ఎప్పుడు అయినా మార్చుకునే హక్కును సురక్షితం చేసుకుంటుంది. మార్పుల తరువాత వెబ్‌సైట్‌ను కొనసాగించే వాడకం కొత్త నియమాలను అంగీకరించడం అంటే."] },
    { "title": "పరిమాణపు క్లాజ్", "content": ["వెబ్‌సైట్ ఈ నియమాలను ఉల్లంఘించినందుకు లేదా పరిపాలన సరియని భావించే ఇతర కారణాల కోసం వినియోగదారుల యాక్సెస్‌ను ముందస్తు నోటీసు లేకుండా ముగించవచ్చు లేదా నిలిపివేయవచ్చు."] },
    { "title": "ప్రభావవంతమైన చట్టం", "content": ["ఈ నియమాలు వెబ్‌సైట్ ప్రధానంగా నడుస్తున్న అధికారిక ప్రాంతంలోని చట్టాలచే పాలించబడతాయి, చట్టం ఘర్షణ సిద్ధాంతాల పట్ల సంబంధం లేకుండా."] }
  ],
  tools: {
    textToSpeech: "టెక్స్ట్ టు స్పీచ్",
    translate: "అనువాదం",
    topicMap: "విషయ పటము",
    notes: "నా నోట్స్",
    wikipal: "వికిపాల్‌ను అడగండి",
    watchChanges: "మార్పులను చూడండి",
    saveArticle: "వ్యాసాన్ని సేవ్ చేయండి",
    saved: "సేవ్ చేయబడింది",
    shortUrl: "చిన్న లింక్",
    citePage: "ఈ పేజీని ఉల్లేఖించండి",
    QRCode: "QR కోడ్",
    DownloadPDF: "PDFగా డౌన్లోడ్ చేయండి",
    printPage: "ఈ పేజీని ముద్రించండి",
    pageInfo: "పేజీ సమాచారం",
  },
  termsAndConditions: 'నియమాలు మరియు షరతులు',
  close: 'మూసివేయి',
  language: {
    searchMessage: "భాషను శోధించండి...",
    selectLanguage: "భాషను ఎంచుకోండి",
    description: "ఈ వ్యాసాన్ని వీక్షించడానికి మీ ఇష్టమైన భాషను ఎంచుకోండి.",
    notFound: "భాష కనుగొనబడలేదు"
  },
  bias: {
    heading: "పక్షపాతం అంటే ఏమిటి?",
    explanation: "పక్షపాతం అనేది నిర్దిష్ట రాజకీయ అభిప్రాయం, పార్టీ లేదా ఆలోచనకు మద్దతు లేదా ప్రాధాన్యత ఇవ్వడానికి ఉన్న ప్రవర్తన. ఇది వ్యక్తి ఒక ఘటనను ఎలా అర్థం చేసుకుంటాడు, ఏ సమాచారం ఎంచుకుంటాడు, మరియు ఏ విధంగా ఆలోచనలను సమర్పిస్తాడో ప్రభావితం చేయవచ్చు. రచయిత రాజకీయ పక్షపాతి ఉంటే, వారి వ్యాసం వ్యక్తిగత నమ్మకాలను ప్రతిబింబించవచ్చు, పూర్తిగా న్యూట్రల్ లేదా సమతౌల్య దృష్టికోణం కాకుండా.",
    socialist: "సామ్యవాది",
    liberal: "లిబరల్",
    wikipedia: "వికీపీడియా",
    conservative: "రక్షణపరుడు",
    nationalist: "జాతివాది",
    title: "పక్షపాత దృష్టిలో చదవడం",
  },
  common: {
    loadingPerspective: 'దృష్టికోణం లోడ్ అవుతోంది...',
    fetchingUserInfo: 'వినియోగదారు సమాచారం పొందుతోంది...',
    home: 'హోమ్',
    about: 'మన గురించి',
    help: 'సహాయం',
    search: 'శోధించండి',
    searchPlaceholder: 'Alternipediaని శోధించండి...',
    login: 'లాగిన్',
    logout: 'లాగ్ అవుట్',
    signUp: 'సైన్ అప్',
    profile: 'ప్రొఫైల్',
    settings: 'సెట్టింగ్స్',
    language: 'భాష',
    theme: 'థీమ్',
    comingSoon: 'Alternipedia త్వరలో రాబోతుంది!',
    stayTuned: 'కలిగి ఉండండి.',
    exampleArticle: 'ఉదాహరణ వ్యాసం:',
  },
  navigation: {
    aboutUs: 'మన గురించి',
    currentEvents: 'ప్రస్తుత విషయాలు',
    randomArticle: 'యాదృచ్ఛిక వ్యాసం',
    help: 'సహాయం',
  },
  footer: {
    pleaseLogin: 'ఈ ఫీచర్‌ను ఉపయోగించడానికి దయచేసి లాగిన్ చేయండి.',
    text: {
      "part1": "పాఠ్యం అందుబాటులో ఉంది:",
      "part2": "క్రియేటివ్ కామన్స్ అట్రిబ్యూషన్-షేర్‌అలైక్ 4.0 ఇంటర్నేషనల్ లైసెన్స్ కింద",
      "part3": "; అదనపు నిబంధనలు వర్తించవచ్చు. ఈ సైట్‌ను ఉపయోగించడం ద్వారా, మీరు అంగీకరిస్తున్నారు",
      "part4": "నిబంధనలు మరియు షరతులు",
      "part5": "మరియు",
      "part6": "గోప్యతా విధానం",
      "part7": ". Alternipedia అనేది ఓపెన్ సోర్స్ లాభాపేక్ష లేని ప్రాజెక్ట్."
    },
    license: 'లైసెన్స్',
    terms: 'నిబంధనలు',
    privacy: 'గోప్యత',
    contact: 'సంప్రదించండి',
    disclaimers: 'అస్వీకరణలు',
    codeOfConduct: 'ఆచరణ నియమాలు',
    statistics: 'సంఖ్యాశాస్త్రం',
    cookieStatement: 'కుకీ ప్రకటన',
    developers: 'డెవలపర్లు',
  },
  notFound: {
    title: '404',
    heading: 'పేజీ కనుగొనబడలేదు',
    message: 'క్షమించండి, మీరు వెతకడం పేజీ కనుగొనబడలేదు. పేజీ తొలగించబడినట్లయితే లేదా లింక్ తప్పుగా ఉన్నట్లయితే ఇది జరుగుతుంది.',
    goHome: 'హోమ్ కి వెళ్ళండి',
  },
  upgrade: {
    pro: 'ప్రో',
    goPro: 'ప్రో అయ్యి',
    upgradePrompt: 'ప్రీమియం ఫీచర్లను అన్లాక్ చేయడానికి అప్‌గ్రేడ్ చేయండి',
    title: 'జ్ఞానం శక్తి, మీ శక్తిని పెంచండి.',
    month: 'నెల',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipediaలోని అన్ని విషయాలను చదవండి',
        basicTheme: 'ప్రాథమిక థీమ్ అనుకూలీకరణ ఉపయోగించండి',
        saveArticles: 'తరువాత చదవడానికి వ్యాసాలను సేవ్ చేయండి',
      },
      buttonText: 'మీ ప్లాన్',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipediaలోని అన్ని విషయాలు, అదనంగా:',
      features: {
        customThemes: 'మీకు ఇష్టమైన థీమ్స్, రంగులు, లేఅవుట్‌లు మరియు ఫాంట్‌లలో Alternipediaని ఉపయోగించండి',
        notes: 'నోట్లు తీసుకోండి, నిర్వహించండి, మరియు Alternipedia నుండి ఎగుమతి చేయండి',
        advancedSearch: 'అడ్వాన్స్‌డ్ శోధన ఫలితాలు',
        semanticSearch: 'AI శక్తితో సెమాంటిక్ శోధన',
        aiAssistant: 'WikiPal, మీ Alternipedia AI అసిస్టెంట్ యాక్సెస్ పొందండి',
        topicMaps: 'టాపిక్ మ్యాప్స్‌తో మెరుగైన విషయ పరిశోధన',
        profileCustomization: 'మరింత ప్రొఫైల్ అనుకూలీకరణ ఎంపికలు',
        aiTranslation: 'ఏదైనా పేజీకి AI అనువాదం',
        appSupport: 'Alternipedia యాప్‌లో నిరంతర మద్దతు',
      },
      buttonText: 'ఇప్పుడు అప్‌గ్రేడ్ చేయండి',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'ఈ వ్యాసం సామాజిక న్యాయం, ఆర్థిక సమానత్వం మరియు కార్మిక హక్కులపై దృష్టి సారించే జాతీయవాద దృక్కోణాన్ని సమర్పించడానికి కమ్యూనిటీ సభ్యులు రూపొందించారు.', 
      liberal: 'ఈ వ్యాసం వ్యక్తిగత స్వేచ్ఛ, మానవ హక్కులు మరియు సామాజిక పురోగతిపై దృష్టి సారించే లిబరల్ దృక్కోణాన్ని సమర్పించడానికి కమ్యూనిటీ సభ్యులు రూపొందించారు.',
      conservative: 'ఈ వ్యాసం సంప్రదాయం, స్థిరత్వం మరియు కుటుంబ విలువలపై దృష్టి సారించే రక్షణాత్మక దృక్కోణాన్ని సమర్పించడానికి కమ్యూనిటీ సభ్యులు రూపొందించారు.',
      socialist: 'ఈ వ్యాసం సామాజిక న్యాయం, ఆర్థిక సమానత్వం మరియు కార్మిక హక్కులపై దృష్టి సారించే సామాజికవాద దృక్కోణాన్ని సమర్పించడానికి కమ్యూనిటీ సభ్యులు రూపొందించారు.',
      wikipedia: {
        part1: 'ఈ వ్యాసం సమాచార మరియు డేటా యొక్క న్యాయమైన ప్రాతినిధ్యంపై దృష్టి సారించే తటస్థ దృక్కోణాన్ని సమర్పించడానికి కమ్యూనిటీ సభ్యులు రూపొందించారు.',
        part2: 'వికీపీడియాను చూడండి →',
      } 
    },
    lastEdited: 'చివరిసారిగా సవరించబడింది',
    tools: 'పరికరాలు',
    content: 'విషయం',
    close: 'మూసివేయి',
    notFoundHeader: 'వికీపీడియా వ్యాసం కనుగొనబడలేదు',
    notFoundText: 'క్రింద ఇచ్చిన వికీపీడియా వ్యాసం కనుగొనబడలేదు:',
    searchWikipediaText: 'వికీపీడియాలో శోధించండి',
    article: 'వ్యాసం',
    discussion: 'చర్చ',
    read: 'చదవండి',
    edit: 'సవరించండి',
    history: 'చరిత్ర'
  }
};

// Turkish dictionary
const tr: Dictionary = {
  unauthorised: {
    heading: 'Erişim reddedildi',
    message: 'Bu sayfaya erişim izniniz yok. Lütfen oturum açtığınızdan emin olun veya destek ile iletişime geçin.'
  },
  blockedAd: {
    part1: 'Reklam engelleyici kullanıyor gibi görünüyorsunuz. Lütfen sitemizi desteklemek için devre dışı bırakın — veya',
    part2: 'PRO\'ya yükseltin',
    part3: 'reklamsız bir deneyim için.'
  },
  metadata: {
    description: 'Bilgi ve fikirler üzerine farklı bakış açılarını sunmak için tasarlanmış bir eğitim vikisidir.',
    wikipedia: {
      part1: 'Alternipedia\'yı keşfedin',
      part2: '- Alternatif bakış açıları ve düşünceler.',
    },
    conservative: {
      part1: 'Muhafazakar bakış açısından',
      part2: '- Gelenek, istikrar ve serbest piyasa.',
    },
    nationalist: {
      part1: 'Milliyetçi bakış açısından',
      part2: '- Ulusal egemenlik ve kültürel kimlik.',
    },
    socialist: {
      part1: 'Sosyalist bakış açısından',
      part2: '- Sosyal adalet, eşitlik ve işçi hakları.',
    },
    liberal: {
      part1: 'Liberal bakış açısından',
      part2: '- Bireysel özgürlükler, insan hakları ve serbest piyasa.',
    },
  },
  accept: 'Kabul et',
  reject: 'Reddet',
  cookieMessage: 'Biz ve ortaklarımız, reklamları kişiselleştirmek, performansı ölçmek ve sosyal özellikler sağlamak için çerezler kullanıyoruz. Kişiselleştirilmiş reklamlara izin vermek için Kabul et\'e veya kişiselleştirilmiş reklamlardan vazgeçmek için Reddet\'e tıklayın. Daha fazla bilgi için Gizlilik Politikamıza bakın.',
  login: {
    title: 'Giriş yap',
    google: 'Google ile devam et',
    facebook: 'Facebook ile devam et',
    x: 'X ile devam et',
    microsoft: 'Microsoft ile devam et',
    policy: "Giriş yaparak Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz.",
  },
  userMenu: {
    login: "Giriş yap",
    contributions: "Katkılar",
    savedArticles: "Kaydedilen makaleler",
    preferences: "Tercihler",
    logout: "Çıkış yap",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' }),
    "title": "Gizlilik Politikası",
    "lastUpdatedText": "Son güncelleme:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Alternipedia’ya hoş geldiniz — bilgi ve fikirler üzerine farklı bakış açılarını sunmak için tasarlanmış bir eğitim vikisidir. Gizliliğinize değer veriyoruz ve kişisel bilgilerinizi korumaya kararlıyız. Bu politika, hangi bilgileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar."
      }
    ],
    "sections": [
      {
        "title": "Topladığımız Bilgiler",
        "content": [
          {
            "type": "paragraph",
            "text": "Yalnızca hizmetlerimizi sağlamak ve geliştirmek için gerekli olan minimum bilgileri toplarız. Bu şunları içerebilir:"
          },
          {
            "type": "list",
            "items": [
              "Hesap bilgileri: Google veya Meta gibi bir OAuth sağlayıcısı ile giriş yaptığınızda, adınız, e-posta adresiniz ve profil resminiz (varsa) gibi temel bilgileri alırız.",
              "Ödeme bilgileri: Ödeme veya bağış yapmayı seçerseniz, işlemleri güvenli bir şekilde gerçekleştirmek için Stripe kullanırız. Kart bilgilerinizi asla saklamayız veya görüntülemeyiz.",
              "Analitik veriler: Hangi sayfaların popüler olduğunu ve sitemizin nasıl çalıştığını anlamak için Vercel Analytics kullanırız. Bu veriler anonimdir ve sizi kişisel olarak tanımlamaz.",
              "Teknik bilgiler: Sitemizi ziyaret ettiğinizde, tarayıcı türü, cihaz ve IP adresi gibi standart günlük verilerini otomatik olarak alabiliriz.",
              "Adsense: Sitemizde reklam göstermek için Google Adsense kullanıyoruz. Adsense, çerezler aracılığıyla sizin veya diğer sitelerdeki aramalarınıza dayalı olarak reklamlar gösterebilir."
            ]
          }
        ]
      },
      {
        "title": "Bilgilerinizi Nasıl Kullanıyoruz",
        "content": [
          {
            "type": "paragraph",
            "text": "Bilgilerinizi yalnızca aşağıdaki amaçlarla kullanırız:"
          },
          {
            "type": "list",
            "items": [
              "Alternipedia platformunu işletmek ve geliştirmek",
              "Kullanıcıları doğrulamak ve hesapları yönetmek",
              "Stripe aracılığıyla güvenli ödeme işlemlerini yürütmek",
              "Site performansını ve güvenilirliğini izlemek",
              "Kullanıcı taleplerine yanıt vermek"
            ]
          },
          {
            "type": "paragraph",
            "text": "Kişisel verilerinizi satmayız, kiralamayız veya ticaretini yapmayız."
          }
        ]
      },
      {
        "title": "Çerezler ve Takip",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia reklam veya takip çerezleri kullanmaz."
          },
          {
            "type": "paragraph",
            "text": "Yalnızca oturum açma ve site işlevselliği için gerekli temel çerezleri kullanıyoruz."
          }
        ]
      },
      {
        "title": "Veri Depolama ve Güvenlik",
        "content": [
          {
            "type": "paragraph",
            "text": "Verileriniz endüstri standardı şifreleme ve güvenli barındırma altyapısı ile korunmaktadır."
          },
          {
            "type": "paragraph",
            "text": "Bilgilerinizi kayıp, kötüye kullanım veya yetkisiz erişime karşı korumak için makul önlemler alıyoruz."
          },
          {
            "type": "paragraph",
            "text": "Barındırma ve analitik hizmetlerimiz küresel olduğundan (örneğin Vercel ve Stripe), verileriniz başka ülkelerde işlenebilir. Sadece güçlü gizlilik standartlarına uyan sağlayıcılarla çalışıyoruz."
          }
        ]
      },
      {
        "title": "Üçüncü Taraf Hizmetleri",
        "content": [
          {
            "type": "paragraph",
            "text": "Hizmetimizin bazı kısımları için güvenilir üçüncü taraflara güveniyoruz:"
          },
          {
            "type": "list",
            "items": [
              "OAuth sağlayıcıları – güvenli giriş için",
              "Stripe – ödeme işlemleri için",
              "Vercel Analytics – anonim performans analizi için"
            ]
          },
          {
            "type": "links",
            "items": [
              { "label": "Stripe Gizlilik Politikası", "url": "https://stripe.com/privacy" },
              { "label": "Vercel Gizlilik Politikası", "url": "https://vercel.com/legal/privacy-policy" }
            ]
          }
        ]
      },
      {
        "title": "Haklarınız",
        "content": [
          {
            "type": "paragraph",
            "text": "Bulunduğunuz yere bağlı olarak aşağıdaki haklara sahip olabilirsiniz:"
          },
          {
            "type": "list",
            "items": [
              "Kişisel bilgilerinize erişmek veya bir kopyasını istemek",
              "Hakkınızdaki bilgileri düzeltmek veya silmek",
              "Onayı geri çekmek veya hesabınızı kapatmak"
            ]
          }
        ]
      },
      {
        "title": "Çocukların Gizliliği",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia genel kitleye yöneliktir ve 13 yaşın altındaki çocuklar için tasarlanmamıştır."
          },
          {
            "type": "paragraph",
            "text": "Reşit olmayanlardan bilerek kişisel bilgi toplamıyoruz."
          }
        ]
      },
      {
        "title": "Bu Politikadaki Değişiklikler",
        "content": [
          {
            "type": "paragraph",
            "text": "Bu gizlilik politikasını zaman zaman iyileştirmeler veya yasal gereklilikleri yansıtmak için güncelleyebiliriz."
          }
        ]
      },
      {
        "title": "Bizimle İletişime Geçin",
        "content": [
          {
            "type": "paragraph",
            "text": "Gizlilikle ilgili herhangi bir sorunuz varsa, lütfen Alternipedia web sitesi aracılığıyla bizimle iletişime geçin."
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Hükümlerin Kabulü", "content": ["Bu web sitesine erişerek ve kullanarak, kullanıcılar bu Hizmet Şartlarına uymayı ve bunlara bağlı kalmayı kabul eder. Bu şartları kabul etmeyen kullanıcılar web sitesini derhal kullanmayı bırakmalıdır."] },
    { "title": "Kullanıcı Hesabı Sorumlulukları", "content": ["Kullanıcılar, hesap bilgilerinin gizliliğini korumaktan sorumludur. Kullanıcının hesabı altında gerçekleşen tüm faaliyetler hesap sahibinin sorumluluğundadır. Kullanıcılar, yetkisiz hesap erişimlerini derhal web site yöneticilerine bildirmelidir."] },
    { "title": "Sorumluluğun Sınırlandırılması", "content": ["Web sitesi, içeriği 'olduğu gibi' sağlar, herhangi bir garanti vermez. Web sitesi sahipleri, kullanıcıların platformla etkileşimlerinden kaynaklanan doğrudan, dolaylı, rastlantısal, sonuçsal veya cezai zararlardan sorumlu değildir."] },
    { "title": "Kullanıcı Davranış Kuralları", "content": ["Web sitesine veya kullanıcılarına zarar verebilecek zararlı veya kötü niyetli içerik yüklemeyin.", "Diğer kullanıcıların haklarına saygı gösterin.", "Web sitesinin işlevselliğini bozabilecek faaliyetlerden kaçının.", "Geçerli yerel ve uluslararası yasalara uyun."] },
    { "title": "Şartlarda Değişiklikler", "content": ["Web sitesi, bu şartları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişikliklerden sonra web sitesinin kullanılması, yeni şartların kabulü anlamına gelir."] },
    { "title": "Fesih Maddesi", "content": ["Web sitesi, bu şartların ihlali veya yönetim tarafından uygun görülen diğer herhangi bir nedenle, kullanıcı erişimini önceden bildirimde bulunmadan sonlandırabilir veya askıya alabilir."] },
    { "title": "Geçerli Hukuk", "content": ["Bu şartlar, web sitesinin öncelikle faaliyet gösterdiği yargı bölgesinin yasalarına tabidir, hukuk çatışması ilkeleri dikkate alınmaz."] }
  ],
  tools: {
    textToSpeech: "Metinden Sese",
    translate: "Çeviri",
    topicMap: "Konu Haritası",
    notes: "Notlarım",
    wikipal: "Wikipal'a Sor",
    watchChanges: "Değişiklikleri İzle",
    saveArticle: "Makale Kaydet",
    saved: "Kaydedildi",
    shortUrl: "Kısa bağlantı",
    citePage: "Bu sayfayı alıntıla",
    QRCode: "QR kodu",
    DownloadPDF: "PDF olarak indir",
    printPage: "Bu sayfayı yazdır",
    pageInfo: "Sayfa bilgisi",
  },
  termsAndConditions: 'Hüküm ve Koşullar',
  close: 'Kapat',
  language: {
    searchMessage: "Dili ara...",
    selectLanguage: "Dil Seçin",
    description: "Bu makaleyi görüntülemek için tercih ettiğiniz dili seçin.",
    notFound: "Eşleşen dil bulunamadı"
  },
  bias: {
    heading: "Önyargı nedir?",
    explanation: "Önyargı, belirli bir bakış açısını, tarafı veya siyasi düşünceyi destekleme eğilimidir. Bu, bir kişinin olayları yorumlama, bilgi seçme ve argüman sunma biçimini etkileyebilir. Bir yazar siyasi olarak önyargılı olduğunda, bu, sunduğu bilgilerin vurgulanma biçimini, kişilerin veya konuların tanımlanma biçimini ve hangi sonuçların çıkarılacağını etkileyebilir. Sonuç olarak, yazım tarzı kişisel inançları yansıtabilir, tamamen tarafsız veya dengeli bir bakış açısını değil.",
    socialist: "Sosyalist",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Muhafazakar",
    nationalist: "Milliyetçi",
    title: "Okuma önyargısı",
  },
  common: {
    loadingPerspective: 'Bakış açısı yükleniyor...',
    fetchingUserInfo: 'Kullanıcı bilgileri alınıyor...',
    home: 'Ana Sayfa',
    about: 'Hakkında',
    help: 'Yardım',
    search: 'Ara',
    searchPlaceholder: 'Alternipedia\'da ara...',
    login: 'Giriş yap',
    logout: 'Çıkış yap',
    signUp: 'Kaydol',
    profile: 'Profil',
    settings: 'Ayarlar',
    language: 'Dil',
    theme: 'Tema',
    comingSoon: 'Alternipedia çok yakında!',
    stayTuned: 'Bizi izlemeye devam edin.',
    exampleArticle: 'Örnek makale:',
  },
  navigation: {
    aboutUs: 'Hakkında',
    currentEvents: 'Sıcak Gelişmeler',
    randomArticle: 'Rastgele Makale',
    help: 'Yardım',
  },
  footer: {
    pleaseLogin: 'Bu özelliği kullanmak için lütfen giriş yapın.',
    text: {
      "part1": "Metin aşağıdaki lisansla mevcuttur:",
      "part2": "Creative Commons Atıf-Benzer Paylaş 4.0 Uluslararası Lisansı",
      "part3": "; ek şartlar uygulanabilir. Bu siteyi kullanarak, aşağıdaki şartları kabul etmiş olursunuz",
      "part4": "Şartlar ve Koşullar",
      "part5": "ve",
      "part6": "Gizlilik Politikası",
      "part7": ". Alternipedia, açık kaynaklı kar amacı gütmeyen bir projedir."
    },
    license: 'Lisans',
    terms: 'Şartlar',
    privacy: 'Gizlilik',
    contact: 'İletişim',
    disclaimers: 'Feragatnameler',
    codeOfConduct: 'Davranış Kuralları',
    statistics: 'İstatistikler',
    cookieStatement: 'Çerez Bildirimi',
    developers: 'Geliştiriciler',
  },
  notFound: {
    title: '404',
    heading: 'Sayfa Bulunamadı',
    message: "Üzgünüz, aradığınız sayfayı bulamadık...",
    goHome: 'Ana Sayfaya Git',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'PRO Ol',
    upgradePrompt: 'Premium özelliklerin kilidini açmak için yükseltin',
    title: 'Bilgi Güçtür, Gücünüzü Artırın.',
    month: 'ay',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Alternipedia\'yı tamamen okuyun',
        basicTheme: 'Temel tema özelleştirmesini kullanın',
        saveArticles: 'Makale kaydedin ve sonra okuyun',
      },
      buttonText: 'Planınız',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia\'daki her şey, artı:',
      features: {
        customThemes: 'Alternipedia\'yı kendi favori temalarınız, renkleriniz, düzenleriniz ve fontlarınızla kullanın',
        notes: 'Not alın, yönetin ve Alternipedia\'dan dışa aktarın',
        advancedSearch: 'Gelişmiş arama sonuçları',
        semanticSearch: 'AI gücüyle semantik arama',
        aiAssistant: 'WikiPal\'a, Alternipedia AI asistanınıza erişim sağlayın',
        topicMaps: 'Konu Haritaları ile daha iyi konu araştırması',
        profileCustomization: 'Daha fazla profil özelleştirme seçenekleri',
        aiTranslation: 'Herhangi bir sayfa için AI çevirisi',
        appSupport: 'Alternipedia Uygulamasında sürekli destek',
      },
      buttonText: 'Şimdi Yükselt',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Bu makale, sosyal adalet, ekonomik eşitlik ve işçi haklarına odaklanan sosyalist bir bakış açısını sunmak üzere topluluk üyeleri tarafından oluşturulmuştur.',
      liberal: 'Bu makale, bireysel özgürlükler, insan hakları ve sosyal ilerleme konularına odaklanan liberal bir bakış açısını sunmak üzere topluluk üyeleri tarafından oluşturulmuştur.',
      conservative: 'Bu makale, gelenek, istikrar ve aile değerlerine odaklanan muhafazakar bir bakış açısını sunmak üzere topluluk üyeleri tarafından oluşturulmuştur.',
      nationalist: 'Bu makale, ulusal egemenlik ve kültürel kimlik konularına odaklanan milliyetçi bir bakış açısını sunmak üzere topluluk üyeleri tarafından oluşturulmuştur.',
      wikipedia: {
        part1: 'Bu makale, bilgi ve verilerin adil temsiline odaklanan tarafsız bir bakış açısını sunmak üzere topluluk üyeleri tarafından oluşturulmuştur.',
        part2: 'Vikipedi\'ne bakın →',
      },
    },
    lastEdited: 'Son düzenleme',
    tools: 'Araçlar',
    content: 'İçerik',
    close: 'Kapat',
    notFoundHeader: 'Wikipedia makalesi bulunamadı',
    notFoundText: 'Aşağıdaki Wikipedia makalesi bulunamadı:',
    searchWikipediaText: 'Wikipedia\'da ara',
    article: 'Makale',
    discussion: 'Tartışma',
    read: 'Oku',
    edit: 'Düzenle',
    history: 'Geçmiş'
  }
};

// Tamil dictionary
const ta: Dictionary = {
  unauthorised: {
    heading: 'அணுகல் மறுத்துவிடப்பட்டது',
    message: 'இந்தப் பக்கத்தை அணுக நீங்கள் அனுமதிக்கப்படவில்லை. நீங்கள் உள்நுழைந்துள்ளீர்களா அல்லது ஆதரவு அணுகுமாறு பரிசீலிக்கவும்.'
  },
  blockedAd: {
    part1: 'பிரசார தடுப்பாளியை பயன்படுத்துகிறீர்கள் போல் தோன்றுகிறது. எங்கள் தளத்தை ஆதரிக்க அதை முடக்கவோ அல்லது',
    part2: 'PROக்கு மேம்படுத்தவும்',
    part3: 'விளம்பரமில்லா அனுபவத்திற்காக.'
  },
  metadata: {
    description: 'அறிவு மற்றும் எண்ணங்கள் குறித்த பல்வேறு பார்வைகளை வழங்க உருவாக்கப்பட்ட கல்வி விக்கி.',
    wikipedia: {
      part1: 'Alternipedia ஐ ஆராயுங்கள்',
      part2: '- மாற்று பார்வைகள் மற்றும் எண்ணங்கள்.',
    },
    conservative: {
      part1: 'பாரம்பரியவாத பார்வை',
      part2: '- பாரம்பரியம், நிலைத்தன்மை மற்றும் சுதந்திர சந்தை.',
    },
    nationalist: {
      part1: 'தேசியவாத பார்வை',
      part2: '- தேசிய சுயாட்சி மற்றும் பண்பாட்டு அடையாளம்.',
    },
    liberal: {
      part1: 'லிபரல் பார்வை',
      part2: '- தனிப்பட்ட சுதந்திரங்கள், மனித உரிமைகள் மற்றும் சுதந்திர சந்தை.',
    },
    socialist: {
      part1: 'சமூகவாத பார்வை',
      part2: '- சமூக நீதி, சமத்துவம் மற்றும் தொழிலாளர் உரிமைகள்.',
    },
  },
  accept: 'ஏற்கவும்',
  reject: 'நிராகரிக்கவும்',
  cookieMessage: 'நாங்கள் மற்றும் எங்கள் கூட்டாளிகள் விளம்பரங்களை தனிப்பயனாக்க, செயல்திறனை அளவிட மற்றும் சமூக அம்சங்களை வழங்க குக்கீகளைப் பயன்படுத்துகிறோம். தனிப்பயனாக்கப்பட்ட விளம்பரங்களுக்கு அனுமதிக்க "ஏற்கவும்" அல்லது தனிப்பயனாக்கப்பட்ட விளம்பரங்களை மறுக்க "நிராகரிக்கவும்" என்பதைக் கிளிக் செய்யவும். மேலும் தகவலுக்கு எங்கள் தனியுரிமைக் கொள்கையைப் பார்க்கவும்.',
  login: {
    title: 'உள்நுழைய',
    google: 'Google மூலம் தொடரவும்',
    facebook: 'Facebook மூலம் தொடரவும்',
    x: 'X மூலம் தொடரவும்',
    microsoft: 'Microsoft மூலம் தொடரவும்',
    policy: "உள்நுழையும்போது, நீங்கள் எங்கள் சேவை நிபந்தங்களை மற்றும் தனியுரிமைக் கொள்கையை ஏற்றுக்கொள்கிறீர்கள்.",
  },
  userMenu: {
    login: "உள்நுழைய",
    contributions: "பங்களிப்புகள்",
    savedArticles: "சேமிக்கப்பட்ட கட்டுரைகள்",
    preferences: "விருப்பங்கள்",
    logout: "வெளியேறு",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ta-LK', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ta-LK', { year: 'numeric', month: 'long' }),
    "title": "தனியுரிமைக் கொள்கை",
    "lastUpdatedText": "கடைசியாக புதுப்பிக்கப்பட்டது:",
    "intro": [
      {
        "type": "paragraph",
        "text": "அல்டர்நிபீடியாவிற்கு வரவேற்கிறோம் — அறிவு மற்றும் எண்ணங்கள் குறித்த பல்வேறு பார்வைகளை வழங்க உருவாக்கப்பட்ட கல்வி விக்கி. நாங்கள் உங்கள் தனியுரிமையை மதிக்கிறோம் மற்றும் உங்கள் தனிப்பட்ட தகவலை பாதுகாப்பதில் உறுதியாக இருக்கிறோம். இந்தக் கொள்கை எங்களைப் பற்றி, எதைச் சேகரிக்கிறோம், அதை எவ்வாறு பயன்படுத்துகிறோம் மற்றும் உங்கள் உரிமைகள் என்ன என்பதைக் விளக்குகிறது."
      }
    ],
    "sections": [
      {
        "title": "நாங்கள் சேகரிக்கும் தகவல்",
        "content": [
          {
            "type": "list",
            "items": [
              "கணக்கு தகவல்: நீங்கள் Google அல்லது Meta போன்ற OAuth வழங்குநருடன் உள்நுழைந்தால், உங்கள் பெயர், மின்னஞ்சல் மற்றும் சுயவிவரப் படம் (இருந்தால்) எங்களுக்கு கிடைக்கும்.",
              "கட்டணத் தகவல்: நீங்கள் கட்டணம் செலுத்தவோ அல்லது நன்கொடை வழங்கவோ விரும்பினால், Stripe மூலம் பாதுகாப்பாக செயலாக்கப்படுகிறது. நாங்கள் உங்கள் கார்டு விவரங்களை சேமிக்கவோ அல்லது பார்ப்பதற்கோ இல்லை.",
              "பகுப்பாய்வு தரவு: எந்த பக்கங்கள் பிரபலமானவை மற்றும் எங்கள் தளம் எப்படி செயல்படுகிறது என்பதைப் புரிந்துகொள்வதற்கு நாங்கள் Vercel Analytics ஐப் பயன்படுத்துகிறோம்.",
              "தொழில்நுட்ப தகவல்: நீங்கள் தளத்தைப் பார்வையிடும் போது, உலாவி வகை, சாதனம் மற்றும் IP முகவரி போன்ற அடிப்படை பதிவுத் தரவை தானாகப் பெறலாம்.",
              "Adsense: எங்கள் தளத்தில் விளம்பரங்களை காட்சிப்படுத்த Google Adsense ஐப் பயன்படுத்துகிறோம். Adsense, குக்கீகளைப் பயன்படுத்தி உங்கள் அல்லது பிற தளங்களில் உங்கள் தேடல்களின் அடிப்படையில் விளம்பரங்களை காட்சிப்படுத்தலாம்."
            ]
          }
        ]
      },
      {
        "title": "தகவலை எவ்வாறு பயன்படுத்துகிறோம்",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia தளத்தை இயக்கவும் மேம்படுத்தவும்",
              "பயனர்களை அங்கீகரித்து கணக்குகளை நிர்வகிக்கவும்",
              "Stripe மூலம் பாதுகாப்பான கட்டணங்களை செயலாக்கவும்",
              "தளத்தின் செயல்திறனை கண்காணிக்கவும்",
              "பயனர் கோரிக்கைகளுக்கு பதிலளிக்கவும்"
            ]
          },
          {
            "type": "paragraph",
            "text": "நாங்கள் உங்கள் தனிப்பட்ட தகவலை விற்கவோ, வாடகைக்கு விடவோ அல்லது வர்த்தகம் செய்யவோ மாட்டோம்."
          }
        ]
      },
      {
        "title": "குக்கிகள் மற்றும் கண்காணிப்பு",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia விளம்பர அல்லது கண்காணிப்பு குக்கிகளைப் பயன்படுத்தாது."
          },
          {
            "type": "paragraph",
            "text": "நாங்கள் உள்நுழைவு மற்றும் தள செயல்பாட்டுக்குத் தேவையான முக்கிய குக்கிகளை மட்டுமே பயன்படுத்துகிறோம்."
          }
        ]
      },
      {
        "title": "தரவு சேமிப்பு மற்றும் பாதுகாப்பு",
        "content": [
          {
            "type": "paragraph",
            "text": "உங்கள் தரவு தொழில் தரநிலைகள் கொண்ட குறியாக்கம் மற்றும் பாதுகாப்பான ஹோஸ்டிங் மூலம் பாதுகாக்கப்படுகிறது."
          }
        ]
      },
      {
        "title": "உங்கள் உரிமைகள்",
        "content": [
          {
            "type": "list",
            "items": [
              "தனிப்பட்ட தகவலுக்கான அணுகல் அல்லது நகல் கோருதல்",
              "தகவலை திருத்தவோ நீக்கவோ கோருதல்",
              "ஒப்புதலை வாபஸ் பெறவோ கணக்கை மூடவோ கோருதல்"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "கொள்கைகளின் ஏற்றுக்கொள்கை", "content": ["இந்த வலைத்தளத்தை அணுகி பயன்படுத்துவதன் மூலம், பயனர்கள் இந்த சேவை விதிமுறைகளை பின்பற்றவும், அதற்கே உட்பட்டவராக இருக்கவும் சம்மதிக்கிறார்கள். இந்த விதிமுறைகளை ஒப்புக்கொள்ளாத பயனர்கள் உடனடியாக வலைத்தள பயன்பாட்டை நிறுத்த வேண்டும்."] },
    { "title": "பயனர் கணக்கு பொறுப்புகள்", "content": ["பயனர்கள் தங்கள் கணக்கு நற்சான்றுகளை ரகசியமாக வைத்திருப்பதில் பொறுப்பாக இருக்க வேண்டும். பயனர் கணக்கின் கீழ் நடக்கும் அனைத்து செயல்பாடுகளும் கணக்கு உரிமையாளரின் தனிப்பட்ட பொறுப்பாகும். பயனர்கள் எந்தவொரு அனுமதி இல்லாத கணக்கு அணுகலையும் உடனடியாக வலைத்தள நிர்வாகிகளுக்கு தெரிவிக்க வேண்டும்."] },
    { "title": "பொறுப்பின் வரம்பு", "content": ["வலைத்தளம் உள்ளடக்கத்தை 'அப்படியே' வழங்குகிறது, எந்தவொரு உத்தரவாதமும் இல்லை. வலைத்தள உரிமையாளர்கள், பயனர் பரிமாற்றங்களால் நேரடியாக, மறைமுக, அவசர, விளைவுசார்ந்த அல்லது தண்டனைச் சேதங்களுக்குப் பொறுப்பாக இல்லை."] },
    { "title": "பயனர் நடத்தை வழிகாட்டிகள்", "content": ["வலைத்தளம் அல்லது அதன் பயனர்களுக்கு தீங்கு விளைவிக்கும் தீங்கான அல்லது தீய செயல்பாடுகளைக் பதிவேற்ற வேண்டாம்.", "மற்ற பயனர்களின் உரிமைகளை மதிக்கவும்.", "வலைத்தள செயல்பாட்டை இடையூறு செய்யக்கூடிய செயல்பாடுகளைத் தவிர்க்கவும்.", "பயன்படும் உள்ளூர் மற்றும் சர்வதேச சட்டங்களை பின்பற்றவும்."] },
    { "title": "விதிமுறைகளில் மாற்றங்கள்", "content": ["வலைத்தளத்திற்கு இந்த விதிமுறைகளை எந்த நேரத்திலும் மாற்ற உரிமை உள்ளது. மாற்றங்களுக்குப் பிறகு வலைத்தளத்தின் தொடர்ந்த பயன்பாடு புதிய விதிமுறைகளை ஏற்கும் என பொருள்."] },
    { "title": "முடிவு கிளாசு", "content": ["வலைத்தளம் இந்த விதிமுறைகளை மீறினால் அல்லது நிர்வாகம் ஏற்றுக்கொண்ட பிற காரணங்களுக்காக பயனர் அணுகலை முன்கூட்டிய அறிவிப்பின்றி நிறுத்தவோ, இடைநிறுத்தவோ செய்யலாம்."] },
    { "title": "ஆட்சி சட்டம்", "content": ["இந்த விதிமுறைகள் வலைத்தளம் முதன்மையாக இயங்கும் பிராந்தியத்தின் சட்டங்களினால் நிர்வகிக்கப்படும், சட்ட மோதல் கொள்கைகளை புறக்கணித்து."] }

  ],
  tools: {
    textToSpeech: "டெக்ஸ்ட் டு ஸ்பீச்",
    translate: "மொழிபெயர்ப்பு",
    topicMap: "தலைப்பு வரைபடம்",
    notes: "என் குறிப்புகள்",
    wikipal: "விக்கிபாலுக்கு கேளுங்கள்",
    watchChanges: "மாற்றங்களை கவனிக்கவும்",
    saveArticle: "கட்டுரையை சேமிக்கவும்",
    saved: "சேமிக்கப்பட்டது",
    shortUrl: "குறுகிய இணைப்பு",
    citePage: "இந்த பக்கத்தை மேற்கோள் காட்டவும்",
    QRCode: "QR குறியீடு",
    DownloadPDF: "PDF ஆக பதிவிறக்கம் செய்யவும்",
    printPage: "இந்த பக்கத்தை அச்சிடவும்",
    pageInfo: "பக்கம் தகவல்",
  },
  termsAndConditions: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
  close: 'மூடு',
  language: {
    searchMessage: "மொழியைத் தேடவும்...",
    selectLanguage: "மொழி தேர்ந்தெடுக்கவும்",
    description: "இந்த கட்டுரையை காண்பதற்கான உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.",
    notFound: "எந்த மொழிகளும் கிடைக்கவில்லை"
  },
  bias: {
    heading: "என்னது ஒரு முன்னுரிமை?",
    explanation: "ஒரு முன்னுரிமை என்பது ஒரு குறிப்பிட்ட பார்வையை, பக்கம் அல்லது அரசியல் எண்ணத்தை ஆதரிக்க உள்ள ஒரு போக்கு ஆகும். இது ஒரு நபர் நிகழ்வுகளை விளக்க, தகவல்களை தேர்ந்தெடுக்க மற்றும் வாதங்களை முன்வைக்கும் முறையை பாதிக்கலாம். ஒரு எழுத்தாளர் அரசியல் ரீதியாக முன்னுரிமை கொண்டிருந்தால், இது வழங்கப்படும் தகவல்களின் வலிமையை, நபர்கள் அல்லது தலைப்புகளை வரையறுக்கும் முறையை மற்றும் எந்த முடிவுகள் எடுக்கப்படும் என்பதை பாதிக்கலாம். முடிவாக, எழுத்து பாணி தனிப்பட்ட நம்பிக்கைகளை பிரதிபலிக்கலாம், முற்றிலும் தரவில்லா அல்லது சமநிலையற்ற பார்வையை அல்ல.",
    socialist: "சமூகவாதி",
    liberal: "லிபரல்",
    wikipedia: "விக்கிபீடியா",
    conservative: "முயற்சியாளர்",
    nationalist: "தேசியவாதி",
    title: "படிக்கையில் முன்னுரிமை",
  },
  common: {
    loadingPerspective: 'பார்வை ஏற்றுகிறது...',
    fetchingUserInfo: 'பயனர் தகவல் பெறப்படுகிறது...',
    home: 'முகப்பு',
    about: 'பற்றி',
    help: 'உதவி',
    search: 'தேடல்',
    searchPlaceholder: 'Alternipedia-வில் தேடவும்...',
    login: 'உள்நுழைக',
    logout: 'வெளியேறு',
    signUp: 'பதிவு செய்யவும்',
    profile: 'சுயவிவரம்',
    settings: 'அமைப்புகள்',
    language: 'மொழி',
    theme: 'தீம்',
    comingSoon: 'Alternipedia மிகவும் விரைவில் வருகிறது!',
    stayTuned: 'எங்களை கவனிக்கவும்.',
    exampleArticle: 'உதாரண கட்டுரை:',
  },
  navigation: {
    aboutUs: 'எங்களைப் பற்றி',
    currentEvents: 'சமீபத்திய நிகழ்வுகள்',
    randomArticle: 'ராஸ்டம் கட்டுரை',
    help: 'உதவி',
  },
  footer: {
    pleaseLogin: 'இந்த அம்சத்தை பயன்படுத்த தயவுசெய்து உள்நுழைக.',
    text: {
      "part1": "உரை கீழ்காணும் உரிமத்தின் கீழ் கிடைக்கிறது:",
      "part2": "கிரியேட்டிவ் காமன்ஸ் அசைப்ரூஷன்-ஷேர் அலைக் 4.0 சர்வதேச உரிமம்",
      "part3": "; கூடுதல் நிபந்தனைகள் பொருந்தலாம். இந்த தளத்தை பயன்படுத்துவதன் மூலம், நீங்கள்",
      "part4": "விபரங்கள் மற்றும் நிபந்தனைகள்",
      "part5": "மற்றும்",
      "part6": "தனியுரிமை கொள்கை", // TODO: verify translation
      "part7": "Alternipedia என்பது திறந்த மூல, இலாப நோக்கமற்ற திட்டமாகும்."
    },
    license: 'லிசென்ஸ்',
    terms: 'விதிமுறைகள்',
    privacy: 'தனியுரிமை',
    contact: 'தொடர்பு கொள்ளவும்',
    disclaimers: 'மறுப்புகள்',
    codeOfConduct: 'நடத்தை குறியீடு',
    statistics: 'புள்ளிவிவரங்கள்',
    cookieStatement: 'குக்கீ அறிக்கை',
    developers: 'வளர்ச்சியாளர்கள்',
  },
  notFound: {
    title: '404',
    heading: 'பக்கம் காணப்படவில்லை',
    message: "மன்னிக்கவும், நீங்கள் தேடிய பக்கம் கிடைக்கவில்லை...",
    goHome: 'முகப்புக்கு செல்லவும்',
  },
  upgrade: {
    pro: 'புரோ',
    goPro: 'புரோ ஆகவும்',
    upgradePrompt: 'பிரீமியம் அம்சங்களை திறக்க மேம்படுத்தவும்',
    title: 'அறிவு சக்தி, உங்கள் சக்தியை அதிகரிக்கவும்.',
    month: 'மாதம்',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'அனைத்து Alternipedia ஐ வாசிக்கவும்',
        basicTheme: 'அடிப்படை தீம் தனிப்பயன் அமைப்பை பயன்படுத்தவும்',
        saveArticles: 'பின் வாசிக்க கட்டுரைகளை சேமிக்கவும்',
      },
      buttonText: 'உங்கள் திட்டம்',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia இல் உள்ள எல்லாம், கூடுதல்:',
      features: {
        customThemes: 'உங்கள் விருப்பமான தீம்கள், வண்ணங்கள், ஒழுங்குகள் மற்றும் எழுத்துருக்களில் Alternipedia ஐ பயன்படுத்தவும்',
        notes: 'குறிப்புகள் எடுத்து, நிர்வகித்து, Alternipedia இலிருந்து ஏற்றுமதி செய்யவும்',
        advancedSearch: 'மேம்பட்ட தேடல் முடிவுகள்',
        semanticSearch: 'AI சக்தியுடன் செமாண்டிக் தேடல்',
        aiAssistant: 'WikiPal, உங்கள் Alternipedia AI உதவியாளரை அணுகவும்',
        topicMaps: 'தலைப்பு வரைபடங்களுடன் சிறந்த தலைப்பு ஆராய்ச்சி',
        profileCustomization: 'மேலும் சுயவிவர தனிப்பயன் விருப்பங்கள்',
        aiTranslation: 'எந்தப் பக்கத்திற்கும் AI மொழிபெயர்ப்பு',
        appSupport: 'Alternipedia செயலியில் தொடர்ச்சியான ஆதரவு',
      },
      buttonText: 'இப்போதே மேம்படுத்தவும்',
    },
  },
  article: {
    biasIntro: {
      liberal: 'இந்த கட்டுரை, தனிப்பட்ட சுதந்திரங்கள், மனித உரிமைகள் மற்றும் சமூக முன்னேற்றம் ஆகியவற்றில் கவனம் செலுத்தும் லிபரல் பார்வையை வழங்குவதற்காக சமூக உறுப்பினர்களால் உருவாக்கப்பட்டுள்ளது.',
      conservative: 'இந்த கட்டுரை, பாரம்பரியம், நிலைத்தன்மை மற்றும் குடும்ப மதிப்புகள் ஆகியவற்றில் கவனம் செலுத்தும் முறைபாட்டாளர் பார்வையை வழங்குவதற்காக சமூக உறுப்பினர்களால் உருவாக்கப்பட்டுள்ளது.',
      nationalist: 'இந்த கட்டுரை, தேசிய சுதந்திரம் மற்றும் கலாச்சார அடையாளம் ஆகியவற்றில் கவனம் செலுத்தும் தேசியவாத பார்வையை வழங்குவதற்காக சமூக உறுப்பினர்களால் உருவாக்கப்பட்டுள்ளது.',
      socialist: 'இந்த கட்டுரை, சமூக நீதியியல், பொருளாதார சமத்துவம் மற்றும் தொழிலாளர் உரிமைகள் ஆகியவற்றில் கவனம் செலுத்தும் சமூகவாத பார்வையை வழங்குவதற்காக சமூக உறுப்பினர்களால் உருவாக்கப்பட்டுள்ளது.',
      wikipedia: {
        part1: 'இந்த கட்டுரை, தகவல் மற்றும் தரவுகளின் நியாயமான பிரதிநிதித்துவத்தில் கவனம் செலுத்தும் பக்கமற்ற பார்வையை வழங்குவதற்காக சமூக உறுப்பினர்களால் உருவாக்கப்பட்டுள்ளது.',
        part2: 'விக்கிபீடியாவை பார்க்கவும் →',  
      },
    },
    lastEdited: 'கடைசியாக தொகுக்கப்பட்டது',
    tools: 'கருவிகள்',
    close: 'மூடு',
    notFoundHeader: 'விக்கிபீடியா கட்டுரை காணப்படவில்லை',
    notFoundText: 'கீழ்காணும் விக்கிபீடியா கட்டுரை காணப்படவில்லை:',
    searchWikipediaText: 'விக்கிபீடியாவில் தேடவும்',
    content: 'உள்ளடக்கம்',
    article: 'கட்டுரை',
    discussion: 'பேச்சு',
    read: 'படிக்க',
    edit: 'தொகு',
    history: 'வரலாறு'
  }
};

// Cantonese dictionary
const yue: Dictionary = {
  unauthorised: {
    heading: '拒絕存取',
    message: '您無權存取此頁面。請確認您已登入或聯絡支援。'
  },
  blockedAd: {
    part1: '你好像使用緊廣告阻擋器。為咗支持本站，請關閉佢，或者',
    part2: '升級到 PRO',
    part3: '以獲得無廣告體驗。',
  },
  metadata: {
    description: '一個為呈現多角度知識同思想而設計嘅教育百科全書網站。',
    wikipedia: {
      part1: '探索 Alternipedia',
      part2: '—— 多角度同思想。',
    },
    conservative: {
      part1: '保守派觀點',
      part2: '—— 傳統、穩定同自由市場。',
    },
    nationalist: {
      part1: '民族主義觀點',
      part2: '—— 民族自決同文化認同。',
    },
    liberal: {
      part1: '自由派觀點',
      part2: '—— 個人自由、人權同自由市場。',
    },
    socialist: {
      part1: '社會主義觀點',
      part2: '—— 社會公義、平等同勞工權益。',
    },
  },
  accept: '接受',
  reject: '拒絕',
  cookieMessage: '我們和合作夥伴使用 cookies 來個人化廣告、衡量效能並提供社交功能。按「接受」以允許個人化廣告，或按「拒絕」以拒絕。詳情請參閱我們的私隱政策。',
  login: {
    title: '登入',
    google: '用 Google 繼續',
    facebook: '用 Facebook 繼續',
    x: '用 X 繼續',
    microsoft: '用 Microsoft 繼續',
    policy: "登入即表示您同意我們的服務條款和隱私政策。",
  },
  userMenu: {
    login: "登入",
    contributions: "貢獻",
    savedArticles: "已儲存文章",
    preferences: "偏好",
    logout: "登出",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('zh-HK', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('zh-HK', { year: 'numeric', month: 'long' }),
    "title": "私隱政策",
    "lastUpdatedText": "最後更新：",
    "intro": [
      {
        "type": "paragraph",
        "text": "歡迎嚟到 Alternipedia —— 一個為咗呈現多角度知識同思想嘅教育百科網站。我哋重視你嘅私隱，並致力保障你嘅個人資料。呢份政策會解釋我哋收集乜嘢資料、點樣使用佢，以及你擁有嘅權利。"
      }
    ],
    "sections": [
      {
        "title": "我哋收集嘅資料",
        "content": [
          {
            "type": "paragraph",
            "text": "我哋只會收集提供同改善服務所需嘅最少資料，包括："
          },
          {
            "type": "list",
            "items": [
              "帳戶資料：當你用 OAuth 供應商（例如 Google、Meta）登入時，我哋會收到你嘅姓名、電郵地址同頭像（如有）。",
              "付款資料：如果你選擇付款或捐款，我哋會透過 Stripe 安全處理交易。我哋唔會儲存或睇到你嘅信用卡資料。",
              "分析數據：我哋會用 Vercel Analytics 去了解邊啲頁面最受歡迎同網站表現。呢啲資料係匯總嘅，唔會識別你個人身份。",
              "技術資料：當你瀏覽網站時，我哋可能自動收到瀏覽器類型、裝置、IP 地址等標準記錄資料，用嚟維持安全同解決問題。",
              "Adsense：我哋會用 Google Adsense 喺我哋網站展示廣告。Adsense 可能會用 cookies 根據你喺呢個網站或其他網站嘅搜索記錄嚟展示廣告。"
            ]
          }
        ]
      },
      {
        "title": "我哋點樣使用你嘅資料",
        "content": [
          {
            "type": "list",
            "items": [
              "運作同改善 Alternipedia 平台",
              "驗證用戶同管理帳戶",
              "透過 Stripe 安全處理付款",
              "監察網站效能同穩定性",
              "回應用戶查詢或要求"
            ]
          },
          {
            "type": "paragraph",
            "text": "我哋唔會出售、出租或者交易你嘅個人資料。"
          }
        ]
      },
      {
        "title": "Cookies 同追蹤",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia 唔使用廣告或追蹤 Cookies。"
          },
          {
            "type": "paragraph",
            "text": "我哋只使用登入同網站功能所需嘅必要 Cookies。"
          }
        ]
      },
      {
        "title": "資料儲存同安全",
        "content": [
          {
            "type": "paragraph",
            "text": "你嘅資料會用業界標準嘅加密技術同安全伺服器儲存。"
          },
          {
            "type": "paragraph",
            "text": "我哋會採取合理措施防止資料遺失、濫用或者未經授權嘅存取。"
          }
        ]
      },
      {
        "title": "你嘅權利",
        "content": [
          {
            "type": "list",
            "items": [
              "要求查閱或索取你嘅個人資料副本",
              "要求更正或刪除你嘅資料",
              "撤回同意或刪除帳戶"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "接受條款", "content": ["透過訪問及使用本網站，用戶同意遵守並受這些服務條款約束。不接受條款的用戶應立即停止使用本網站。"] },
    { "title": "用戶帳戶責任", "content": ["用戶需負責保密其帳戶資料。帳戶下的任何活動均由帳戶持有人全權負責。若發現未經授權的帳戶訪問，用戶須立即通知網站管理員。"] },
    { "title": "責任限制", "content": ["網站提供內容「按現狀」提供，不作任何保證。網站擁有者對使用者與平台互動所引致的直接、間接、附帶、衍生或懲罰性損害概不負責。"] },
    { "title": "用戶行為準則", "content": ["不要上載可能傷害網站或用戶的有害或惡意內容。", "尊重其他用戶的權利。", "避免可能破壞網站功能的行為。", "遵守適用的本地及國際法律。"] },
    { "title": "條款修改", "content": ["網站保留隨時修改條款的權利。條款更改後繼續使用網站即表示接受新的條款。"] },
    { "title": "終止條款", "content": ["如違反條款或管理層認為適當的其他原因，網站可在無需提前通知的情況下終止或暫停用戶的訪問權限。"] },
    { "title": "適用法律", "content": ["這些條款受網站主要運營地區法律管轄，不考慮法律衝突原則。"] }

  ],
  tools: {
    textToSpeech: "文本轉語音",
    translate: "翻譯",
    topicMap: "主題地圖",
    notes: "我的筆記",
    wikipal: "詢問Wikipal",
    watchChanges: "監視變更",
    saveArticle: "保存文章",
    saved: "已保存",
    shortUrl: "短鏈接",
    citePage: "引用此頁面",
    QRCode: "QR碼",
    DownloadPDF: "下載為PDF",
    printPage: "列印此頁面",
    pageInfo: "頁面資訊",
  },
  termsAndConditions: '條款與細則',
  close: '關閉',
  language: {
    searchMessage: "搜索語言...",
    selectLanguage: "選擇語言",
    description: "選擇您首選的語言以查看此文章。",
    notFound: "未找到匹配的語言"
  },
  bias: {
    heading: "什麼是偏見？",
    explanation: "偏見是支持某一特定觀點、立場或政治思想的傾向。它可以影響一個人解釋事件、選擇信息和提出論點的方式。如果一位作者在政治上有偏見，這可能會影響所提供信息的強度、對人物或主題的定義方式以及做出的任何結論。最終，寫作風格可能反映個人信念，而不是完全基於數據或平衡的觀點。",
    socialist: "社會主義者",
    liberal: "自由主義者",
    wikipedia: "維基百科",
    conservative: "保守派",
    nationalist: "民族主義者",
    title: "閱讀偏見",
  },
  common: {
    loadingPerspective: '正在加載觀點...',
    fetchingUserInfo: '正在獲取用戶信息...',
    home: '首頁',
    about: '關於',
    help: '幫助',
    search: '搜索',
    searchPlaceholder: '搜索Alternipedia...',
    login: '登錄',
    logout: '登出',
    signUp: '註冊',
    profile: '個人資料',
    settings: '設置',
    language: '語言',
    theme: '主題',
    comingSoon: 'Alternipedia即將推出！',
    stayTuned: '敬請關注。',
    exampleArticle: '示例文章：',
  },
  navigation: {
    aboutUs: '關於我們',
    currentEvents: '當前事件',
    randomArticle: '隨機文章',
    help: '幫助',
  },
  footer: {
    pleaseLogin: '請登錄以使用此功能。',
    text: {
      "part1": "文字可在以下條款下使用：",
      "part2": "創用CC 姓名標示-相同方式分享 4.0 國際授權條款",
      "part3": "；可能適用額外條款。使用本網站即表示您同意",
      "part4": "條款與細則",
      "part5": "及",
      "part6": "私隱政策",
      "part7": "。Alternipedia 是一個開源非牟利項目。"
    },
    license: '許可證',
    terms: '條款',
    privacy: '隱私',
    contact: '聯繫我們',
    disclaimers: '免責聲明',
    codeOfConduct: '行為準則',
    statistics: '統計數據',
    cookieStatement: 'Cookie聲明',
    developers: '開發人員',
  },
  notFound: {
    title: '404',
    heading: '頁面未找到',
    message: '對不起，我們找不到您要查找的頁面...',
    goHome: '返回首頁',
  },
  upgrade: {
    pro: '專業版',
    goPro: '升級專業版',
    upgradePrompt: '升級以解鎖高級功能',
    title: '知識就是力量，提升你的力量。',
    month: '月',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: '閱讀全部 Alternipedia',
        basicTheme: '使用基本主題自訂',
        saveArticles: '保存文章以便稍後閱讀',
      },
      buttonText: '你的方案',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alternipedia 的全部內容，加上：',
      features: {
        customThemes: '以你喜愛的主題、顏色、佈局和字體使用 Alternipedia',
        notes: '做筆記、管理並從 Alternipedia 匯出',
        advancedSearch: '進階搜尋結果',
        semanticSearch: '利用 AI 的語義搜尋',
        aiAssistant: '使用 WikiPal，你的 Alternipedia AI 助手',
        topicMaps: '利用主題地圖更好地研究主題',
        profileCustomization: '更多個人資料自訂選項',
        aiTranslation: '任何頁面的 AI 翻譯',
        appSupport: '在 Alternipedia 應用程式中持續支援',
      },
      buttonText: '立即升級',
    },
  },
  article: {
    biasIntro: {
      socialist: '本文章由社區成員創建，旨在提供一個專注於社會正義、經濟平等和勞工權益的社會主義觀點。',
      liberal: '本文章由社區成員創建，旨在提供一個專注於個人自由、人權和社會進步的自由主義觀點。',
      conservative: '本文章由社區成員創建，旨在提供一個專注於傳統、穩定和家庭價值觀的保守派觀點。',
      nationalist: '本文章由社區成員創建，旨在提供一個專注於民族自決和文化認同的民族主義觀點。',
      wikipedia: {
        part1: '本文章由社區成員創建，旨在提供一個專注於信息和數據的公平代表性的無偏見觀點。',
        part2: '查看維基百科 →',
      }
    },
    lastEdited: '最後編輯於',
    tools: '工具',
    content: '內容',
    article: '文章',
    close: '關閉',
    notFoundHeader: '找不到維基百科文章',
    notFoundText: '找不到以下維基百科文章：',
    searchWikipediaText: '在維基百科中搜索',
    discussion: '討論',
    read: '閱讀',
    edit: '編輯',
    history: '歷史'
  }
};

// Vietnamese dictionary
const vi: Dictionary = {
  unauthorised: {
    heading: 'Truy cập bị từ chối',
    message: 'Bạn không có quyền truy cập trang này. Vui lòng kiểm tra xem bạn đã đăng nhập hay liên hệ bộ phận hỗ trợ.'
  },
  blockedAd: {
    part1: 'Có vẻ bạn đang sử dụng trình chặn quảng cáo. Vui lòng tắt nó để ủng hộ trang, hoặc',
    part2: 'nâng cấp lên PRO',
    part3: 'để có trải nghiệm không quảng cáo.',
  },
  metadata: {
    description: 'Một wiki giáo dục được tạo ra để trình bày nhiều góc nhìn khác nhau về tri thức và ý tưởng.',
    wikipedia: {
      part1: 'Khám phá Alternipedia',
      part2: '—— Nhiều góc nhìn và ý tưởng.',
    },
    conservative: {
      part1: 'Quan điểm bảo thủ',
      part2: '- Truyền thống, ổn định và thị trường tự do.',
    },
    nationalist: {
      part1: 'Quan điểm dân tộc chủ nghĩa',
      part2: '- Quyền tự quyết dân tộc và bản sắc văn hóa.',
    },
    liberal: {
      part1: 'Quan điểm tự do',
      part2: '- Tự do cá nhân, nhân quyền và thị trường tự do.',
    },
    socialist: {
      part1: 'Quan điểm xã hội chủ nghĩa',
      part2: '- Công bằng xã hội, bình đẳng và quyền lợi của người lao động.',
    },
  },
  accept: 'Chấp nhận',
  reject: 'Từ chối',
  cookieMessage: 'Chúng tôi và các đối tác sử dụng cookie để cá nhân hóa quảng cáo, đo hiệu suất và cung cấp tính năng xã hội. Nhấn Chấp nhận để cho phép quảng cáo được cá nhân hóa hoặc Từ chối để từ chối. Xem Chính sách Quyền riêng tư của chúng tôi để biết thêm thông tin.',
  login: {
    title: 'Đăng nhập',
    google: 'Tiếp tục với Google',
    facebook: 'Tiếp tục với Facebook',
    x: 'Tiếp tục với X',
    microsoft: 'Tiếp tục với Microsoft',
    policy: "Bằng việc đăng nhập, bạn đồng ý với Điều khoản Dịch vụ và Chính sách Quyền riêng tư của chúng tôi.",
  },
  userMenu: {
    login: "Đăng nhập",
    contributions: "Đóng góp",
    savedArticles: "Bài viết đã lưu",
    preferences: "Tùy chọn",
    logout: "Đăng xuất",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long' }),
    "title": "Chính Sách Quyền Riêng Tư",
    "lastUpdatedText": "Cập nhật lần cuối:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Chào mừng bạn đến với Alternipedia — một wiki giáo dục được tạo ra để trình bày nhiều góc nhìn khác nhau về tri thức và ý tưởng. Chúng tôi coi trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Chính sách này giải thích những gì chúng tôi thu thập, cách chúng tôi sử dụng và quyền lợi của bạn."
      }
    ],
    "sections": [
      {
        "title": "Thông Tin Chúng Tôi Thu Thập",
        "content": [
          {
            "type": "list",
            "items": [
              "Thông tin tài khoản: Khi bạn đăng nhập bằng nhà cung cấp OAuth (như Google hoặc Meta), chúng tôi nhận được tên, email và ảnh hồ sơ của bạn (nếu có).",
              "Thông tin thanh toán: Nếu bạn chọn thanh toán hoặc quyên góp, Stripe sẽ xử lý giao dịch của bạn một cách an toàn. Chúng tôi không bao giờ lưu trữ hoặc nhìn thấy thông tin thẻ tín dụng của bạn.",
              "Dữ liệu phân tích: Chúng tôi sử dụng Vercel Analytics để hiểu hành vi sử dụng tổng quát như trang nào phổ biến nhất và hiệu suất của trang web. Dữ liệu này được ẩn danh và không định danh cá nhân.",
              "Thông tin kỹ thuật: Khi bạn truy cập trang web, chúng tôi có thể tự động nhận được dữ liệu nhật ký tiêu chuẩn như loại trình duyệt, thiết bị và địa chỉ IP.",
              "Adsense: Chúng tôi sử dụng Google Adsense để hiển thị quảng cáo trên trang web của mình. Adsense có thể sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử tìm kiếm của bạn trên trang web này hoặc các trang web khác."
            ]
          }
        ]
      },
      {
        "title": "Cách Chúng Tôi Sử Dụng Thông Tin",
        "content": [
          {
            "type": "list",
            "items": [
              "Vận hành và cải thiện nền tảng Alternipedia",
              "Xác thực người dùng và quản lý tài khoản",
              "Xử lý thanh toán an toàn thông qua Stripe",
              "Giám sát hiệu suất và độ tin cậy của trang web",
              "Phản hồi các yêu cầu hoặc câu hỏi từ người dùng"
            ]
          },
          {
            "type": "paragraph",
            "text": "Chúng tôi không bán, cho thuê hoặc trao đổi dữ liệu cá nhân của bạn."
          }
        ]
      },
      {
        "title": "Cookie và Theo Dõi",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia không sử dụng cookie quảng cáo hoặc cookie theo dõi."
          },
          {
            "type": "paragraph",
            "text": "Chúng tôi chỉ sử dụng cookie cần thiết để duy trì phiên đăng nhập và chức năng trang web."
          }
        ]
      },
      {
        "title": "Lưu Trữ và Bảo Mật Dữ Liệu",
        "content": [
          {
            "type": "paragraph",
            "text": "Dữ liệu của bạn được lưu trữ an toàn với công nghệ mã hóa và cơ sở hạ tầng bảo mật tiêu chuẩn ngành."
          },
          {
            "type": "paragraph",
            "text": "Chúng tôi thực hiện các biện pháp hợp lý để bảo vệ thông tin của bạn khỏi mất mát, lạm dụng hoặc truy cập trái phép."
          }
        ]
      },
      {
        "title": "Quyền Của Bạn",
        "content": [
          {
            "type": "list",
            "items": [
              "Truy cập hoặc yêu cầu bản sao thông tin cá nhân của bạn",
              "Sửa đổi hoặc xóa thông tin của bạn",
              "Rút lại sự đồng ý hoặc đóng tài khoản"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Chấp nhận Điều khoản", "content": ["Bằng việc truy cập và sử dụng trang web này, người dùng đồng ý tuân thủ và bị ràng buộc bởi Điều khoản Dịch vụ này. Người dùng không đồng ý với các điều khoản này nên ngừng sử dụng trang web ngay lập tức."] },
    { "title": "Trách nhiệm Tài khoản Người dùng", "content": ["Người dùng có trách nhiệm duy trì tính bảo mật của thông tin đăng nhập tài khoản của họ. Mọi hoạt động diễn ra dưới tài khoản của người dùng là trách nhiệm duy nhất của chủ tài khoản. Người dùng phải thông báo ngay cho quản trị viên trang web về bất kỳ truy cập trái phép nào."] },
    { "title": "Giới hạn Trách nhiệm", "content": ["Trang web cung cấp nội dung 'nguyên trạng' mà không có bất kỳ bảo đảm nào. Chủ sở hữu trang web không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, hệ quả hoặc trừng phạt nào phát sinh từ tương tác của người dùng với nền tảng."] },
    { "title": "Hướng dẫn Hành vi Người dùng", "content": ["Không tải lên nội dung gây hại hoặc độc hại có thể gây tổn hại cho trang web hoặc người dùng.", "Tôn trọng quyền của người dùng khác.", "Tránh các hoạt động có thể làm gián đoạn chức năng của trang web.", "Tuân thủ các luật hiện hành ở địa phương và quốc tế."] },
    { "title": "Sửa đổi Điều khoản", "content": ["Trang web có quyền sửa đổi các điều khoản này bất cứ lúc nào. Việc tiếp tục sử dụng trang web sau khi có thay đổi đồng nghĩa với việc chấp nhận các điều khoản mới."] },
    { "title": "Điều khoản Chấm dứt", "content": ["Trang web có thể chấm dứt hoặc tạm ngưng quyền truy cập của người dùng mà không cần thông báo trước nếu vi phạm các điều khoản này hoặc vì bất kỳ lý do nào khác mà ban quản trị thấy phù hợp."] },
    { "title": "Luật Điều chỉnh", "content": ["Các điều khoản này được điều chỉnh bởi luật pháp của khu vực mà trang web chủ yếu hoạt động, không xem xét các nguyên tắc xung đột pháp luật."] }

  ],
  tools: {
    textToSpeech: "Văn bản thành giọng nói",
    translate: "Dịch",
    topicMap: "Bản đồ chủ đề",
    notes: "Ghi chú của tôi",
    wikipal: "Hỏi Wikipal",
    watchChanges: "Theo dõi thay đổi",
    saveArticle: "Lưu bài viết",
    saved: "Đã lưu",
    shortUrl: "Liên kết ngắn",
    citePage: "Trích dẫn trang này",
    QRCode: "Mã QR",
    DownloadPDF: "Tải xuống dưới dạng PDF",
    printPage: "In trang này",
    pageInfo: "Thông tin trang",
  },
  termsAndConditions: 'Điều khoản và Điều kiện',
  close: 'Đóng',
  language: {
    searchMessage: "Tìm kiếm ngôn ngữ...",
    selectLanguage: "Chọn ngôn ngữ",
    description: "Chọn ngôn ngữ ưa thích của bạn để xem bài viết này.",
    notFound: "Không tìm thấy ngôn ngữ nào phù hợp"
  },
  bias: {
    heading: "Định kiến là gì?",
    explanation: "Định kiến là xu hướng ủng hộ một quan điểm, lập trường hoặc tư tưởng chính trị cụ thể. Nó có thể ảnh hưởng đến cách một người giải thích sự kiện, chọn thông tin và đưa ra lập luận. Nếu một tác giả có định kiến về chính trị, điều này có thể ảnh hưởng đến độ mạnh mẽ của thông tin được cung cấp, cách định nghĩa nhân vật hoặc chủ đề và bất kỳ kết luận nào được đưa ra. Cuối cùng, phong cách viết có thể phản ánh niềm tin cá nhân, thay vì hoàn toàn dựa trên dữ liệu hoặc quan điểm cân bằng.",
    socialist: "Xã hội chủ nghĩa",
    liberal: "Tự do",
    wikipedia: "Wikipedia",
    conservative: "Bảo thủ",
    nationalist: "Dân tộc chủ nghĩa",
    title: "Đọc định kiến",
  },
  common: {
    loadingPerspective: 'Đang tải góc nhìn...',
    fetchingUserInfo: 'Đang lấy thông tin người dùng...',
    home: 'Trang chủ',
    about: 'Giới thiệu',
    help: 'Trợ giúp',
    search: 'Tìm kiếm',
    searchPlaceholder: 'Tìm kiếm Alternipedia...',
    login: 'Đăng nhập',
    logout: 'Đăng xuất',
    signUp: 'Đăng ký',
    profile: 'Hồ sơ',
    settings: 'Cài đặt',
    language: 'Ngôn ngữ',
    theme: 'Chủ đề',
    comingSoon: 'Alternipedia sắp ra mắt!',
    stayTuned: 'Hãy theo dõi.',
    exampleArticle: 'Bài viết ví dụ:',
  },
  navigation: {
    aboutUs: 'Về chúng tôi',
    currentEvents: 'Sự kiện hiện tại',
    randomArticle: 'Bài viết ngẫu nhiên',
    help: 'Trợ giúp',
  },
  footer: {
    pleaseLogin: 'Vui lòng đăng nhập để sử dụng tính năng này.',
    text: {
      "part1": "Văn bản có sẵn theo",
      "part2": "Giấy phép Creative Commons Ghi công-Chia sẻ tương tự 4.0 Quốc tế",
      "part3": "; có thể áp dụng các điều khoản bổ sung. Bằng cách sử dụng trang web này, bạn đồng ý với",
      "part4": "Điều khoản & Điều kiện",
      "part5": "và",
      "part6": "Chính sách Quyền riêng tư",
      "part7": ". Alternipedia là một dự án mã nguồn mở phi lợi nhuận."
    },
    license: 'Giấy phép',
    terms: 'Điều khoản',
    privacy: 'Quyền riêng tư',
    contact: 'Liên hệ',
    disclaimers: 'Tuyên bố từ chối trách nhiệm',
    codeOfConduct: 'Quy tắc ứng xử',
    statistics: 'Thống kê',
    cookieStatement: 'Tuyên bố về cookie',
    developers: 'Nhà phát triển',
  },
  notFound: {
    title: '404',
    heading: 'Trang không tìm thấy',
    message: 'Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm...',
    goHome: 'Trở về trang chủ',
  },
  upgrade: {
    pro: 'Chuyên nghiệp',
    goPro: 'Nâng cấp PRO',
    upgradePrompt: 'Nâng cấp để mở khóa các tính năng cao cấp',
    title: 'Kiến thức là sức mạnh, Tăng cường sức mạnh của bạn.',
    month: 'tháng',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Đọc toàn bộ Alternipedia',
        basicTheme: 'Sử dụng tùy chỉnh chủ đề cơ bản',
        saveArticles: 'Lưu bài viết để đọc sau',
      },
      buttonText: 'Gói của bạn',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Tất cả trong Alternipedia, cộng thêm:',
      features: {
        customThemes: 'Sử dụng Alternipedia với chủ đề, màu sắc, bố cục và font bạn yêu thích',
        notes: 'Ghi chú, quản lý và xuất chúng từ khắp Alternipedia',
        advancedSearch: 'Kết quả tìm kiếm nâng cao',
        semanticSearch: 'Tìm kiếm ngữ nghĩa với sức mạnh AI',
        aiAssistant: 'Truy cập WikiPal, trợ lý AI của Alternipedia',
        topicMaps: 'Nghiên cứu chủ đề tốt hơn với Bản đồ Chủ đề',
        profileCustomization: 'Nhiều tùy chọn tùy chỉnh hồ sơ hơn',
        aiTranslation: 'Dịch AI cho bất kỳ trang nào',
        appSupport: 'Hỗ trợ liên tục trên ứng dụng Alternipedia',
      },
      buttonText: 'Nâng cấp ngay',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn xã hội chủ nghĩa tập trung vào công bằng xã hội, bình đẳng và quyền lợi của người lao động.',
      liberal: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn tự do tập trung vào tự do cá nhân, nhân quyền và tiến bộ xã hội.',
      conservative: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn bảo thủ tập trung vào truyền thống, ổn định và giá trị gia đình.',
      nationalist: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn dân tộc chủ nghĩa tập trung vào quyền tự quyết dân tộc và bản sắc văn hóa.',
      wikipedia: {
        part1: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn không thiên vị tập trung vào thông tin và dữ liệu đại diện công bằng.',
        part2: 'Xem Wikipedia →',
      }
    },
    lastEdited: 'Chỉnh sửa lần cuối',
    tools: 'Công cụ',
    content: 'Nội dung',
    close: 'Đóng',
    notFoundHeader: 'Không tìm thấy bài viết Wikipedia',
    notFoundText: 'Không tìm thấy bài viết Wikipedia sau:',
    searchWikipediaText: 'Tìm kiếm trên Wikipedia',
    article: 'Bài viết',
    discussion: 'Thảo luận',
    read: 'Đọc',
    edit: 'Chỉnh sửa',
    history: 'Lịch sử'
  }
};

// Filipino dictionary
const fil: Dictionary = {
  unauthorised: {
    heading: 'Hindi pinapayagan ang pag-access',
    message: 'Wala kang pahintulot upang ma-access ang pahinang ito. Mangyaring tiyakin na naka-log in ka o makipag-ugnayan sa suporta.'
  },
  blockedAd: {
    part1: 'Mukhang gumagamit ka ng ad blocker. Paki-disable ito upang suportahan ang aming site, o',
    part2: 'mag-upgrade sa PRO',
    part3: 'para sa karanasang walang ad.',
  },
  metadata: {
    description: 'Isang edukasyonal na wiki na nilikha upang ipakita ang iba\'t ibang pananaw sa kaalaman at mga ideya.',
    wikipedia: {
      part1: 'Tuklasin ang Alternipedia',
      part2: '—— Iba\'t ibang pananaw at mga ideya.',
    },
    conservative: {
      part1: 'Pananaw ng konserbatibo',
      part2: '—— Tradisyon, katatagan at malayang pamilihan.',
    },
    nationalist: {
      part1: 'Pananaw ng nasyonalismo',
      part2: '—— Pagpapasya ng mga bansa at pagkakakilanlan ng kultura.',
    },
    socialist: {
      part1: 'Pananaw ng sosyalismo',
      part2: '—— Katarungan sa lipunan, pagkakapantay-pantay at mga karapatan ng mga manggagawa.',  
    },
    liberal: {
      part1: 'Pananaw ng liberalismo',
      part2: '—— Kalayaan ng indibidwal, karapatang pantao at malayang pamilihan.',
    },
  },
  accept: 'Tanggapin',
  reject: 'Tanggihan',
  cookieMessage: 'Ginagamit namin at ng aming mga kasosyo ang cookies para i-personalize ang mga ad, sukatin ang performance, at magbigay ng social na mga tampok. I-click ang "Tanggapin" para payagan ang personalized na ads o "Tanggihan" para tanggihan. Tingnan ang aming Patakaran sa Privacy para sa karagdagang impormasyon.',
  login: {
    title: 'Mag-login',
    google: 'Magpatuloy gamit ang Google',
    facebook: 'Magpatuloy gamit ang Facebook',
    x: 'Magpatuloy gamit ang X',
    microsoft: 'Magpatuloy gamit ang Microsoft',
    policy: "Sa pamamagitan ng pag-login, sumasang-ayon ka sa aming Mga Tuntunin sa Serbisyo at Patakaran sa Privacy.",
  },
  userMenu: {
    login: "Mag-login",
    contributions: "Mga Kontribusyon",
    savedArticles: "Mga Nai-save na Artikulo",
    preferences: "Mga Kagustuhan",
    logout: "Mag-log out",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('fil-PH', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('fil-PH', { year: 'numeric', month: 'long' }),
    "title": "Patakaran sa Pagkapribado",
    "lastUpdatedText": "Huling na-update:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Maligayang pagdating sa Alternipedia — isang edukasyonal na wiki na nilikha upang ipakita ang iba’t ibang pananaw sa kaalaman at mga ideya. Pinahahalagahan namin ang iyong privacy at kami ay nakatuon sa pagprotekta ng iyong personal na impormasyon. Ipinaliliwanag ng patakarang ito kung anong impormasyon ang aming kinokolekta, paano ito ginagamit, at kung anu-anong mga karapatan mo."
      }
    ],
    "sections": [
      {
        "title": "Anong Impormasyon ang Aming Kinokolekta",
        "content": [
          {
            "type": "list",
            "items": [
              "Impormasyon ng account: Kapag nag-login ka gamit ang OAuth provider (gaya ng Google o Meta), nakakatanggap kami ng iyong pangalan, email address, at larawan sa profile (kung mayroon).",
              "Impormasyon sa pagbabayad: Kung pipiliin mong magbayad o mag-donate, ligtas na pinoproseso ng Stripe ang iyong transaksyon. Hindi namin nakikita o iniimbak ang iyong impormasyon sa credit card.",
              "Data ng analytics: Ginagamit namin ang Vercel Analytics upang maunawaan kung aling mga pahina ang pinakapopular at kung paano gumaganap ang aming site. Ang mga data na ito ay pinagsama-sama at hindi tumutukoy sa personal na pagkakakilanlan.",
              "Teknikal na impormasyon: Kapag binisita mo ang site, maaaring awtomatikong makuha namin ang impormasyon tulad ng uri ng browser, device, at IP address upang mapanatili ang seguridad at pagganap.",
              "Adsense: Ginagamit namin ang Google Adsense upang magpakita ng mga ad sa aming site. Maaaring gumamit ang Adsense ng cookies upang magpakita ng mga ad batay sa iyong kasaysayan ng pagba-browse sa site na ito o sa iba pang mga site."
            ]
          }
        ]
      },
      {
        "title": "Paano Namin Ginagamit ang Iyong Impormasyon",
        "content": [
          {
            "type": "list",
            "items": [
              "Paganahin at pahusayin ang Alternipedia platform",
              "Beripikahin ang mga user at pamahalaan ang mga account",
              "Proseso ng ligtas na pagbabayad gamit ang Stripe",
              "Subaybayan ang pagganap at katatagan ng site",
              "Tumugon sa mga katanungan o kahilingan ng user"
            ]
          },
          {
            "type": "paragraph",
            "text": "Hindi namin ibinebenta, inuupa, o ipinagpapalit ang iyong personal na impormasyon."
          }
        ]
      },
      {
        "title": "Cookies at Pagsubaybay",
        "content": [
          {
            "type": "paragraph",
            "text": "Hindi gumagamit ang Alternipedia ng mga cookies para sa ads o pagsubaybay."
          },
          {
            "type": "paragraph",
            "text": "Gumagamit lamang kami ng mga kinakailangang cookies para sa pag-login at functionality ng site."
          }
        ]
      },
      {
        "title": "Imbakan at Seguridad ng Data",
        "content": [
          {
            "type": "paragraph",
            "text": "Ang iyong data ay ligtas na nakaimbak gamit ang mga industry-standard na encryption at secure na server."
          },
          {
            "type": "paragraph",
            "text": "Isinasagawa namin ang mga makatuwirang hakbang upang protektahan ang iyong impormasyon laban sa pagkawala, maling paggamit, o hindi awtorisadong pag-access."
          }
        ]
      },
      {
        "title": "Ang Iyong mga Karapatan",
        "content": [
          {
            "type": "list",
            "items": [
              "Humiling ng kopya ng iyong personal na impormasyon",
              "Itama o burahin ang iyong impormasyon",
              "Bawiin ang pahintulot o tanggalin ang account"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Pagtanggap sa Mga Tuntunin", "content": ["Sa pamamagitan ng pag-access at paggamit ng website na ito, sumasang-ayon ang mga gumagamit na sumunod at maging sakop ng Mga Tuntunin ng Serbisyo na ito. Ang mga gumagamit na hindi sumasang-ayon sa mga tuntuning ito ay dapat itigil ang paggamit ng website kaagad."] },
    { "title": "Mga Responsibilidad ng Account ng Gumagamit", "content": ["Ang mga gumagamit ay responsable sa pagpapanatili ng pagiging pribado ng kanilang kredensyal ng account. Ang anumang aktibidad na nagaganap sa ilalim ng account ng isang gumagamit ay tanging responsibilidad ng may-ari ng account. Dapat agad ipaalam ng mga gumagamit sa mga administrador ng website ang anumang hindi awtorisadong pag-access sa account."] },
    { "title": "Limitasyon ng Pananagutan", "content": ["Ang website ay nagbibigay ng nilalaman 'as is' nang walang anumang garantiya. Ang mga may-ari ng website ay hindi mananagot sa anumang direktang, di-direktang, hindi inaasahang, consequential, o punitive na pinsalang nagmumula sa pakikipag-ugnayan ng mga gumagamit sa platform."] },
    { "title": "Patnubay sa Pag-uugali ng Gumagamit", "content": ["Huwag mag-upload ng nakakasama o malisyosong nilalaman na maaaring makasama sa website o sa mga gumagamit nito.", "Igalang ang mga karapatan ng ibang mga gumagamit.", "Iwasan ang mga aktibidad na maaaring makagambala sa functionality ng website.", "Sumunod sa mga umiiral na lokal at internasyonal na batas."] },
    { "title": "Mga Pagbabago sa Mga Tuntunin", "content": ["Ang website ay may karapatang baguhin ang mga tuntunin anumang oras. Ang patuloy na paggamit ng website pagkatapos ng mga pagbabago ay itinuturing na pagtanggap sa mga bagong tuntunin."] },
    { "title": "Klausula sa Pagwawakas", "content": ["Maaaring wakasan o suspindihin ng website ang access ng gumagamit nang walang paunang abiso kung may paglabag sa mga tuntuning ito o para sa anumang dahilan na itinuturing na angkop ng administrasyon."] },
    { "title": "Batas na Namamahala", "content": ["Ang mga tuntuning ito ay pinamamahalaan ng mga batas ng hurisdiksyon kung saan pangunahing pinapatakbo ang website, nang hindi isinasaalang-alang ang mga prinsipyo ng pagtatalo sa batas."] }

  ],
  tools: {
    textToSpeech: "Teksto sa Pananalita",
    translate: "Isalin",
    topicMap: "Mapa ng Paksa",
    notes: "Aking mga Tala",
    wikipal: "Tanungin si Wikipal",
    watchChanges: "Bantayan ang mga Pagbabago",
    saveArticle: "I-save ang artikulo",
    saved: "Naka-save",
    shortUrl: "Maikling link",
    citePage: "Cite this page",
    QRCode: "QR code",
    DownloadPDF: "I-download bilang PDF",
    printPage: "I-print ang pahinang ito",
    pageInfo: "Impormasyon ng pahina",
  },
  termsAndConditions: 'Mga Tuntunin at Kundisyon',
  close: 'Isara',
  language: {
    searchMessage: "Maghanap ng wika...",
    selectLanguage: "Pumili ng Wika",
    description: "Pumili ng wika na gusto mo para sa pagtingin sa artikulong ito.",
    notFound: "Walang natagpuang wika na tumutugma"
  },
  bias: {
    heading: "Ano ang isang bias?",
    explanation: "Ang bias ay isang tendensya na suportahan ang isang partikular na pananaw, posisyon, o ideolohiyang pampulitika. Maaari itong makaapekto sa paraan ng isang tao sa pagbibigay-kahulugan sa mga kaganapan, pagpili ng impormasyon, at paggawa ng mga argumento. Kung ang isang may-akda ay may bias sa pulitika, maaari itong makaapekto sa lakas ng impormasyong ibinibigay, kung paano tinutukoy ang mga tauhan o paksa, at anumang mga konklusyon na ginawa. Sa huli, ang istilo ng pagsusulat ay maaaring sumasalamin sa mga personal na paniniwala, sa halip na ganap na nakabatay sa data o balanseng pananaw.",
    socialist: "Sosyalista",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konserbatibo",
    nationalist: "Nasyonalista",
    title: "Pagbasa ng bias",
  },
  common: {
    loadingPerspective: 'Naglo-load ng pananaw...',
    fetchingUserInfo: 'Kumuha ng impormasyon ng user...',
    home: 'Bahayan',
    about: 'Tungkol',
    help: 'Tulong',
    search: 'Maghanap',
    searchPlaceholder: 'Maghanap sa Alternipedia...',
    login: 'Mag-log in',
    logout: 'Mag-log out',
    signUp: 'Mag-sign up',
    profile: 'Profile',
    settings: 'Mga Setting',
    language: 'Wika',
    theme: 'Tema',
    comingSoon: 'Ang Alternipedia ay malapit nang ilunsad!',
    stayTuned: 'Manatiling nakatutok.',
    exampleArticle: 'Halimbawa ng artikulo:',
  },
  navigation: {
    aboutUs: 'Tungkol sa amin',
    currentEvents: 'Kasalukuyang mga kaganapan',
    randomArticle: 'Random na artikulo',
    help: 'Tulong',
  },
  footer: {
    pleaseLogin: 'Mangyaring mag-log in upang magamit ang tampok na ito.',
    text: {
      "part1": "Ang teksto ay makukuha sa ilalim ng",
      "part2": "Creative Commons Attribution-ShareAlike License 4.0 International",
      "part3": "; maaaring may karagdagang mga tuntunin. Sa paggamit ng site na ito, sumasang-ayon ka sa",
      "part4": "Mga Tuntunin at Kondisyon",
      "part5": "at",
      "part6": "Patakaran sa Privacy",
      "part7": ". Ang Alternipedia ay isang open-source na non-profit na proyekto."
    },
    license: 'Lisensya',
    terms: 'Mga Tuntunin',
    privacy: 'Pribasiya',
    contact: 'Makipag-ugnayan',
    disclaimers: 'Mga Paunawa',
    codeOfConduct: 'Kodigo ng Pag-uugali',
    statistics: 'Mga istatistika',
    cookieStatement: 'Pahayag sa Cookie',
    developers: 'Mga developer',
  },
  notFound: {
    title: '404',
    heading: 'Pahina Hindi Natagpuan',
    message: "Paumanhin, hindi namin mahanap ang pahinang hinahanap mo...",
    goHome: 'Bumalik sa Tahanan',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Maging PRO',
    upgradePrompt: 'Mag-upgrade para ma-unlock ang mga premium na feature',
    title: 'Ang Kaalaman ay Kapangyarihan, Palakasin ang Iyo.',
    month: 'buwan',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Basahin ang lahat ng Alternipedia',
        basicTheme: 'Gamitin ang pangunahing tema ng pag-customize',
        saveArticles: 'I-save ang mga artikulo para basahin mamaya',
      },
      buttonText: 'Ang iyong plano',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Lahat ng nasa Alternipedia, dagdag pa:',
      features: {
        customThemes: 'Gamitin ang Alternipedia sa sarili mong paboritong tema, kulay, layout, at font',
        notes: 'Gumawa ng tala, pamahalaan, at i-export mula sa kabuuan ng Alternipedia',
        advancedSearch: 'Advanced na resulta ng paghahanap',
        semanticSearch: 'Semantic na paghahanap gamit ang kapangyarihan ng AI',
        aiAssistant: 'Makakuha ng access sa WikiPal, ang iyong Alternipedia AI assistant',
        topicMaps: 'Mas mahusay na pananaliksik ng paksa gamit ang Topic Maps',
        profileCustomization: 'Mas maraming opsyon sa pagpapasadya ng profile',
        aiTranslation: 'AI na pagsasalin para sa anumang pahina',
        appSupport: 'Patuloy na suporta sa Alternipedia App',
      },
      buttonText: 'Mag-upgrade ngayon',
    },
  },
  article: {
    biasIntro: {
      liberal: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn tự do tập trung vào tự do cá nhân, nhân quyền và tiến bộ xã hội.',
      conservative: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn bảo thủ tập trung vào truyền thống, ổn định và giá trị gia đình.',
      nationalist: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn dân tộc chủ nghĩa tập trung vào quyền tự quyết dân tộc và bản sắc văn hóa.',
      socialist: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn xã hội chủ nghĩa tập trung vào công bằng xã hội, bình đẳng và quyền lợi của người lao động.',
      wikipedia: {
        part1: 'Bài viết này được tạo bởi các thành viên cộng đồng nhằm cung cấp một góc nhìn không thiên vị tập trung vào thông tin và dữ liệu đại diện công bằng.',
        part2: 'Tingnan ang Wikipedia →',
      }
    },
    lastEdited: 'Huling inedit',
    tools: 'Mga Tool',
    content: 'Nilalaman',
    close: 'Isara',
    notFoundHeader: 'Hindi mahanap ang artikulo sa Wikipedia',
    notFoundText: 'Hindi mahanap ang sumusunod na artikulo sa Wikipedia:',
    searchWikipediaText: 'Maghanap sa Wikipedia',
    article: 'Artikulo',
    discussion: 'Talakayan',
    read: 'Basahin',
    edit: 'I-edit',
    history: 'Kasaysayan'
  }
};

// Hausa dictionary
const ha: Dictionary = {
  unauthorised: {
    heading: 'An hana samun dama',
    message: 'Ba ku da izinin shiga wannan shafin. Da fatan za a tabbatar kun shiga ko tuntuɓi tallafi.'
  },
  blockedAd: {
    part1: 'Ya bayyana kamar kana amfani da mai toshe tallace-tallace. Don tallafawa shafinmu, don Allah ka kashe shi, ko',
    part2: 'haɓaka zuwa PRO',
    part3: 'don samun kwarewa ba tare da talla ba.',
  },
  metadata: {
    description: 'Wani dandalin ilimi da aka ƙirƙira don gabatar da fannoni daban-daban na sani da ra’ayoyi.',
    wikipedia: {  
      part1: 'Gano Alternipedia',
      part2: '—— Daban-daban ra\'ayoyi da tunani.',
    },
    conservative: {
      part1: 'Ra\'ayin masu adawa da canji',
      part2: '- Al\'ada, kwanciyar hankali da kasuwa mai \'yanci.',
    },
    nationalist: {    
      part1: 'Ra\'ayin ƙasashe',  
      part2: '- Ƙasashe masu yanke shawara da al\'adar al\'adu.',
    },
    socialist: {
      part1: 'Ra\'ayin masu son talakawa',
      part2: '- Adalci na zamantakewa, daidaito da hakkokin ma\'aikata.',  
    },
    liberal: {
      part1: 'Ra\'ayin masu son \'yanci',
      part2: '- \'Yancin mutum, hakkin ɗan adam da kasuwa mai \'yanci.',
    },
  },
  accept: 'Yarda',
  reject: 'Ƙi yarda',
  cookieMessage: 'Mu da abokan hulɗa muna amfani da kukis don keɓance talla, auna aikin shafin, da samar da fasalulluka na zamantakewa. Danna "Yarda" don amincewa da tallace-tallacen da aka keɓance ko "Ƙi yarda" don ƙin yarda. Duba Dokar Sirrinmu don ƙarin bayani.',
  login: {
    title: 'Shiga',
    google: 'Ci gaba da Google',
    facebook: 'Ci gaba da Facebook',
    x: 'Ci gaba da X',
    microsoft: 'Ci gaba da Microsoft',
    policy: "Ta hanyar shiga, kun yarda da Sharuɗɗan Sabis ɗinmu da Manufofin Sirri.",
  },
  userMenu: {
    login: "Shiga",
    contributions: "Gudummawa",
    savedArticles: "An adana labarai",
    preferences: "Zaɓuɓɓuka",
    logout: "Fita",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ha', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ha', { year: 'numeric', month: 'long' }),
    "title": "Manufar Sirri",
    "lastUpdatedText": "An sabunta shi a ƙarshe:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Barka da zuwa Alternipedia — wani dandalin ilimi da aka ƙirƙira don gabatar da fannoni daban-daban na sani da ra’ayoyi. Muna daraja sirrinka kuma mun kuduri niyyar kare bayananka na sirri. Wannan manufar ta bayyana abin da muke tattarawa, yadda muke amfani da shi, da hakkinka a kai."
      }
    ],
    "sections": [
      {
        "title": "Abin da Muke Tattara",
        "content": [
          {
            "type": "list",
            "items": [
              "Bayanin asusu: Idan ka shiga ta hanyar mai ba da OAuth (kamar Google ko Meta), muna karɓar sunanka, adireshin imel, da hoton bayananka (idan akwai).",
              "Bayanin biyan kuɗi: Idan ka zaɓi biyan kuɗi ko bayar da gudummawa, Stripe yana sarrafa ma’amalarka cikin tsaro. Ba ma adanawa ko ganin bayanan katin kuɗinka.",
              "Bayanan nazari: Muna amfani da Vercel Analytics don fahimtar shafukan da aka fi ziyarta da yadda rukunin yanar gizo yake aiki. Wadannan bayanai ba su bayyana kai tsaye ba.",
              "Bayanan fasaha: Lokacin da ka shiga shafin, muna iya karɓar bayanai na log kamar irin burauzar da kake amfani da ita, na’ura, da adireshin IP don kiyaye tsaro da aikin shafin.",
              "Adsense: Muna amfani da Google Adsense don nuna tallace-tallace a shafinmu. Adsense na iya amfani da kukis don nuna tallace-tallace bisa ga tarihin bincikenka a wannan shafin ko wasu shafuka."
            ]
          }
        ]
      },
      {
        "title": "Yadda Muke Amfani da Bayananka",
        "content": [
          {
            "type": "list",
            "items": [
              "Gudanar da kuma inganta dandalin Alternipedia",
              "Tabbatar da masu amfani da kuma kula da asusun su",
              "Sarrafawa biyan kuɗi ta hanyar Stripe cikin tsaro",
              "Bibiyar aikin da kwanciyar hankali na shafin",
              "Amsa tambayoyi ko buƙatun masu amfani"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ba mu sayar, ba mu haya, ko musayar bayanan sirrinka da wani ba."
          }
        ]
      },
      {
        "title": "Kuki da Bin Diddi",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ba ta amfani da kuki don talla ko bin diddigi."
          },
          {
            "type": "paragraph",
            "text": "Muna amfani ne kawai da kuki masu mahimmanci don gudanar da zaman shiga da aikin shafin."
          }
        ]
      },
      {
        "title": "Adanawa da Tsaron Bayanai",
        "content": [
          {
            "type": "paragraph",
            "text": "Ana adana bayananka cikin aminci ta amfani da na’urorin tsaro na zamani da ɓoyayyun bayanai."
          },
          {
            "type": "paragraph",
            "text": "Muna ɗaukar matakai masu ma’ana don kare bayananka daga rasa, amfani da ba daidai ba, ko shiga ba bisa ƙa’ida ba."
          }
        ]
      },
      {
        "title": "Hakkinka",
        "content": [
          {
            "type": "list",
            "items": [
              "Neman samun kwafin bayananka na sirri",
              "Gyara ko share bayananka",
              "Janye yardarka ko rufe asusun ka"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Karɓar Sharuɗɗa", "content": ["Ta hanyar samun damar wannan gidan yanar gizo da amfani da shi, masu amfani sun yarda da bin waɗannan Sharuɗɗan Sabis. Masu amfani waɗanda ba su yarda da waɗannan sharuɗɗan ba ya kamata su dakatar da amfani da gidan yanar gizon nan da nan."] },
    { "title": "Hakkokin Asusun Mai Amfani", "content": ["Masu amfani suna da alhakin kiyaye sirrin bayanan asusun su. Duk wani aiki da ya faru a ƙarƙashin asusun mai amfani ya kasance nauyin mai asusun kaɗai. Masu amfani dole ne su sanar da masu gudanar da gidan yanar gizo nan da nan idan wani ya sami damar shiga asusun ba tare da izini ba."] },
    { "title": "Iyakar Alhaki", "content": ["Gidan yanar gizon yana samar da abun ciki 'kamar yadda yake' ba tare da kowace irin garanti ba. Masu mallakar gidan yanar gizon ba za su ɗauki alhaki ba don duk wata lalacewa kai tsaye, ba kai tsaye ba, na bazata, sakamakon haka, ko hukunci da ya taso daga mu'amala da masu amfani da dandamali."] },
    { "title": "Ka’idojin Hali na Mai Amfani", "content": ["Kada a ɗora abun da zai iya cutar da gidan yanar gizo ko masu amfani.", "Girmama hakkin sauran masu amfani.", "Guji ayyukan da za su iya tsangwama ga aikin gidan yanar gizo.", "Bi dokokin gida da na ƙasa da ƙasa da suka dace."] },
    { "title": "Canje-canje ga Sharuɗɗa", "content": ["Gidan yanar gizo yana da haƙƙin canza waɗannan sharuɗɗan a kowane lokaci. Ci gaba da amfani da gidan yanar gizo bayan canje-canje yana nuna amincewa da sabbin sharuɗɗan."] },
    { "title": "Sashe na Ƙarshe", "content": ["Gidan yanar gizo na iya dakatar ko dakatar da samun damar mai amfani ba tare da sanarwa ba idan an karya waɗannan sharuɗɗan ko don kowane dalili da gudanarwa ta dace da shi."] },
    { "title": "Dokar Da Take Jagoranci", "content": ["Waɗannan sharuɗɗan suna ƙarƙashin dokokin yankin da gidan yanar gizo ke aiki a ciki, ba tare da la’akari da ka’idojin rikicin doka ba."] }

  ],
  tools: {
    textToSpeech: "Rubutu zuwa Magana",
    translate: "Fassara",
    topicMap: "Taswirar Jigo",
    notes: "Takalma na",
    wikipal: "Tambayi Wikipal",
    watchChanges: "Kula da Canje-canje",
    saveArticle: "Ajiye labarin",
    saved: "An adana",
    shortUrl: "Gajeren hanyar haɗi",
    citePage: "Ambaci wannan shafin",
    QRCode: "QR code",
    DownloadPDF: "Zazzagewa azaman PDF",
    printPage: "Buga wannan shafin",
    pageInfo: "Bayanan shafi",
  },
  termsAndConditions: 'Sharuɗɗa da Yanayi',
  close: 'Rufe',
  language: {
    searchMessage: "Nemo harshe...",
    selectLanguage: "Zaɓi Harshe",
    description: "Zaɓi harshe da kake so don ganin wannan labarin.",
    notFound: "Babu harsuna da aka samu masu dacewa"
  },
  bias: {
    heading: "Menene son zuciya?",
    explanation: "Son zuciya yana nufin wani yanayi na goyon bayan wani ra'ayi ko matsayi na musamman. Wannan na iya shafar yadda mutum ke fassara abubuwan da suka faru, zaɓin bayanai, da kuma yin hujja. Idan marubuci yana da son zuciya na siyasa, wannan na iya shafar karfin bayanan da aka bayar, yadda aka bayyana haruffa ko batutuwa, da duk wani ƙarshe da aka yanke. A ƙarshe, salon rubutu na iya nuna ra'ayoyin mutum, maimakon kasancewa bisa bayanai ko hangen nesa mai ma'ana.",
    socialist: "Sosyalista",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konserbatibo",
    nationalist: "Ƙasaitacce",
    title: "Menene son zuciya?",
  },
  common: {
    loadingPerspective: 'Ana ɗora ra\'ayi...',
    fetchingUserInfo: 'Ana ɗaukar bayanan mai amfani...',
    home: 'Tafkin Gida',
    about: 'Game da Mu',
    help: 'Taimako',
    search: 'Bincike',
    searchPlaceholder: 'Bincika Alternipedia...',
    login: 'Shiga',
    logout: 'Fita',
    signUp: 'Rajista',
    profile: 'Profile',
    settings: 'Saituna',
    language: 'Harshe',
    theme: 'Jigo',
    comingSoon: 'Alternipedia na zuwa nan ba da jimawa ba!',
    stayTuned: 'Ku kasance tare da mu.',
    exampleArticle: 'Misalin labarin:',
  },
  navigation: {
    aboutUs: 'Game da Mu',
    currentEvents: 'Kasalukuyan abubuwan',
    randomArticle: 'Abu na bazuwar',
    help: 'Taimako',
  },
  footer: {
    pleaseLogin: 'Da fatan za a shiga don amfani da wannan fasalin.',
    text: {
      "part1": "Rubutu yana samuwa ƙarƙashin",
      "part2": "Lasisin Creative Commons Attribution-ShareAlike 4.0 International",
      "part3": "; wasu ƙarin sharuɗɗa na iya aiki. Ta amfani da wannan shafin, kuna yarda da",
      "part4": "Sharuɗɗa da Yanayi",
      "part5": "da",
      "part6": "Manufar Sirri",
      "part7": ". Alternipedia aikin tushen bude ne na rashin riba."
    },
    license: 'Lasisi',
    terms: 'Sharuɗɗa',
    privacy: 'Sirri',
    contact: 'Tuntuɓi mu',
    disclaimers: 'Bayani',
    codeOfConduct: 'Ka\'idojin ɗabi\'u',
    statistics: 'Kididdiga',
    cookieStatement: 'Bayani na kuki',
    developers: 'Masu haɓaka',
  },
  notFound: {
    title: '404',
    heading: 'Babu shafin da aka samo',
    message: "Yi hakuri, ba mu sami shafin da kake nema ba...",
    goHome: 'Bari mu koma shafin gida',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Zama PRO',
    upgradePrompt: 'Haɓaka don buɗe fasalolin premium',
    title: 'Ilimi Shi ne Ƙarfi, Kara Ƙarfinka.',
    month: 'wata',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Karanta duk Alternipedia',
        basicTheme: 'Yi amfani da sauƙaƙan tsarin jigogi',
        saveArticles: 'Ajiye labarai don karantawa daga baya',
      },
      buttonText: 'Tsarinka',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Komai a Alternipedia, da ƙari:',
      features: {
        customThemes: 'Yi amfani da Alternipedia a cikin jigoginka, launuka, tsarin shafi, da fonts da ka fi so',
        notes: 'Yi rubutu, sarrafa, da fitar da su daga duk Alternipedia',
        advancedSearch: 'Sakamakon bincike na ci gaba',
        semanticSearch: 'Bincike na semantik da ƙarfin AI',
        aiAssistant: 'Samun damar WikiPal, mataimakin AI naka na Alternipedia',
        topicMaps: 'Bincike mafi kyau na batutuwa tare da Taswirar Batutuwa',
        profileCustomization: 'Ƙarin zaɓuɓɓukan daidaita bayanan martaba',
        aiTranslation: 'Fassarar AI ga kowace shafi',
        appSupport: 'Ci gaba da goyon baya a cikin Aikace-aikacen Alternipedia',
      },
      buttonText: 'Haɓaka yanzu',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Wannan labarin an ƙirƙira shi ne ta membobin al\'umma don ba da hangen nesa na son talakawa wanda ya mai da hankali kan adalci na zamantakewa, daidaito, da hakkokin ma\'aikata.',
      liberal: 'Wannan labarin an ƙirƙira shi ne ta membobin al\'umma don ba da hangen nesa na son \'yanci wanda ya mai da hankali kan \'yancin mutum, hakkin ɗan adam, da ci gaban al\'uma.',
      wikipedia: {
        part1: 'Wannan labarin an ƙirƙira shi ne ta membobin al\'umma don ba da hangen nesa mara son zuciya wanda ya mai da hankali kan bayani da bayanai na adalci.',
        part2: 'Duba Wikipedia →',
      },
      conservative: 'Wannan labarin an ƙirƙira shi ne ta membobin al\'umma don ba da hangen nesa na masu adawa da canji wanda ya mai da hankali kan al\'ada, kwanciyar hankali, da ƙimar iyali.',
      nationalist: 'Wannan labarin an ƙirƙira shi ne ta membobin al\'umma don ba da hangen nesa na ƙasaitacce wanda ya mai da hankali kan ikon yanke shawara na ƙasa da asalin al\'adu.',
    },
    lastEdited: 'An gyara ƙarshe',
    tools: 'Kayan aiki',
    content: 'Abun ciki',
    close: 'Rufe',
    notFoundHeader: 'Ba a sami labarin Wikipedia ba',
    notFoundText: 'Ba a sami labarin Wikipedia mai zuwa ba:',
    searchWikipediaText: 'Bincika a Wikipedia',
    article: 'Labari',
    discussion: 'Tattaunawa',
    read: 'Karanta',
    edit: 'Gyara',
    history: 'Tarihi'
  }
};

// Egyptian Arabic dictionary
const arz: Dictionary = {
  unauthorised: {
    heading: 'تم رفض الوصول',
    message: 'أنت غير مخول للوصول إلى هذه الصفحة. من فضلك تحقق إن كنت مسجل الدخول أو تواصل مع الدعم.'
  },
  blockedAd: {
    part1: 'يبدو إنك بتستخدم مانع إعلانات. من فضلك عطّله علشان تدعم موقعنا — أو',
    part2: 'اشترك في PRO',
    part3: 'عشان تستمتع بتجربة من غير إعلانات.',
  },
  metadata: {
    description: 'موسوعة تعليمية مصممة لتقديم وجهات نظر متنوعة عن المعرفة والأفكار.',
    wikipedia: {  
      part1: 'اكتشف Alternipedia',
      part2: '—— وجهات نظر وأفكار متنوعة.',
    },
    conservative: {
      part1: 'وجهة نظر المحافظين',
      part2: '- التقاليد، الاستقرار، والسوق الحرة.',
    },
    nationalist: {    
      part1: 'وجهة نظر القوميين',
      part2: '- الدول ذات السيادة والثقافات التقليدية.',
    },
    socialist: {
      part1: 'وجهة نظر الاشتراكيين',
      part2: '- العدالة الاجتماعية، المساواة، وحقوق العمال.',  
    },
    liberal: {  
      part1: 'وجهة نظر الليبراليين',
      part2: '- الحرية الفردية، حقوق الإنسان، والسوق الحرة.',
    },
  },
  accept: 'أوافق',
  reject: 'أرفض',
  cookieMessage: 'نحن وشركاؤنا نستخدم الكوكيز لتخصيص الإعلانات، قياس أداء الموقع، وتوفير ميزات اجتماعية. اضغط على "أوافق" للموافقة على الإعلانات المخصصة أو "أرفض" للرفض. راجع سياسة الخصوصية الخاصة بنا لمزيد من المعلومات.',
  login: {
    title: 'تسجيل الدخول',
    google: 'المتابعة باستخدام جوجل',
    facebook: 'المتابعة باستخدام فيسبوك',
    x: 'المتابعة باستخدام إكس',
    microsoft: 'المتابعة باستخدام مايكروسوفت',
    policy: "بالتسجيل، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا.",
  },
  userMenu: {
    login: "تسجيل الدخول",
    contributions: "المساهمات",
    savedArticles: "المقالات المحفوظة",
    preferences: "التفضيلات",
    logout: "تسجيل الخروج",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' }),
    "title": "سياسة الخصوصية",
    "lastUpdatedText": "آخر تحديث:",
    "intro": [
      {
        "type": "paragraph",
        "text": "أهلاً بيك في Alternipedia — موسوعة تعليمية مصممة لتقديم وجهات نظر متنوعة عن المعرفة والأفكار. إحنا بنقدّر خصوصيتك ومُلزمين بحماية معلوماتك الشخصية. السياسة دي بتوضح إيه اللي بنجمعه، إزاي بنستخدمه، وحقوقك."
      }
    ],
    "sections": [
      {
        "title": "المعلومات اللي بنجمعها",
        "content": [
          {
            "type": "list",
            "items": [
              "معلومات الحساب: لما تسجل دخولك عن طريق مزود OAuth زي Google أو Meta، بنستلم اسمك، بريدك الإلكتروني، وصورة الملف الشخصي (لو موجودة).",
              "معلومات الدفع: لو اخترت تدفع أو تتبرع، Stripe بتعالج المدفوعات بأمان. إحنا عمرنا ما بنخزن أو نشوف بيانات بطاقة الائتمان بتاعتك.",
              "بيانات التحليلات: بنستخدم Vercel Analytics لفهم الصفحات الشائعة وأداء الموقع. البيانات دي ملخصة ومش بتعرفك شخصياً.",
              "معلومات فنية: لما تزور الموقع، ممكن نستلم تلقائياً بيانات تسجيل قياسية زي نوع المتصفح، الجهاز، وعنوان IP عشان نحافظ على الأمان وحل المشاكل.",
              "Adsense: إحنا بنستخدم Google Adsense لعرض الإعلانات على موقعنا. Adsense ممكن يستخدم الكوكيز لعرض إعلانات مخصصة بناءً على تاريخ تصفحك على الموقع ده أو مواقع تانية."
            ]
          }
        ]
      },
      {
        "title": "إزاي بنستخدم معلوماتك",
        "content": [
          {
            "type": "list",
            "items": [
              "تشغيل وتحسين منصة Alternipedia",
              "توثيق المستخدمين وإدارة الحسابات",
              "معالجة المدفوعات بأمان عن طريق Stripe",
              "مراقبة أداء الموقع وموثوقيته",
              "الرد على استفسارات أو طلبات المستخدمين"
            ]
          },
          {
            "type": "paragraph",
            "text": "إحنا ما بنبيعش، ما بنأجرش، وما بنتاجرش بمعلوماتك الشخصية."
          }
        ]
      },
      {
        "title": "كوكيز والتتبع",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia مش بتستخدم كوكيز للإعلانات أو التتبع."
          },
          {
            "type": "paragraph",
            "text": "بنستخدم بس الكوكيز الأساسية اللازمة لتسجيل الدخول ووظائف الموقع."
          }
        ]
      },
      {
        "title": "تخزين البيانات والأمان",
        "content": [
          {
            "type": "paragraph",
            "text": "بياناتك مخزنة بأمان باستخدام تشفير ومعايير استضافة صناعية."
          },
          {
            "type": "paragraph",
            "text": "بنأخذ خطوات معقولة لحماية معلوماتك من الفقد، الاستخدام غير السليم، أو الوصول غير المصرح به."
          }
        ]
      },
      {
        "title": "حقوقك",
        "content": [
          {
            "type": "list",
            "items": [
              "الوصول أو طلب نسخة من معلوماتك الشخصية",
              "تصحيح أو حذف المعلومات التي نحتفظ بها عنك",
              "سحب الموافقة أو إغلاق حسابك"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "قبول الشروط", "content": ["من خلال الوصول إلى هذه الموقع واستخدامه، يوافق المستخدمون على الامتثال لهذه الشروط والأحكام. يجب على المستخدمين الذين لا يوافقون على هذه الشروط التوقف عن استخدام الموقع على الفور."] },
    { "title": "مسؤوليات حساب المستخدم", "content": ["المستخدمون مسؤولون عن الحفاظ على سرية بيانات اعتماد حساباتهم. أي أنشطة تحدث تحت حساب المستخدم هي مسؤولية صاحب الحساب فقط. يجب على المستخدمين إخطار مسؤولي الموقع على الفور بأي وصول غير مصرح به إلى الحساب."] },
    { "title": "تحديد المسؤولية", "content": ["يقدم الموقع المحتوى 'كما هو' دون أي ضمانات. لا يتحمل مالكو الموقع أي مسؤولية عن الأضرار المباشرة أو غير المباشرة أو العرضية أو التبعية أو العقابية الناشئة عن تفاعلات المستخدمين مع المنصة."] },
    { "title": "إرشادات سلوك المستخدم", "content": ["عدم تحميل محتوى ضار أو خبيث قد يضر بالموقع أو مستخدميه.", "احترام حقوق المستخدمين الآخرين.", "تجنب الأنشطة التي قد تعطل وظائف الموقع.", "الامتثال للقوانين المحلية والدولية المعمول بها."] },
    { "title": "تعديلات على الشروط", "content": ["يحتفظ الموقع بالحق في تعديل هذه الشروط في أي وقت. يشكل الاستمرار في استخدام الموقع بعد التغييرات قبولًا للشروط الجديدة."] },
    { "title": "بند الإنهاء", "content": ["قد يقوم الموقع بإنهاء أو تعليق وصول المستخدم دون إشعار مسبق بسبب انتهاك هذه الشروط أو لأي سبب آخر يعتبره مناسبًا من قبل الإدارة."] },
    { "title": "القانون الحاكم", "content": ["تخضع هذه الشروط لقوانين الولاية القضائية التي يتم تشغيل الموقع فيها بشكل رئيسي، دون النظر إلى مبادئ تعارض القوانين."] }
  ],
  tools: {
    textToSpeech: "النص إلى كلام",
    translate: "ترجمة",
    topicMap: "خريطة الموضوع",
    notes: "ملاحظاتي",
    wikipal: "اسأل ويكيبال",
    watchChanges: "راقب التغييرات",
    saveArticle: "احفظ المقال",
    saved: "تم الحفظ",
    shortUrl: "رابط قصير",
    citePage: "اقتبس هذه الصفحة",
    QRCode: "رمز الاستجابة السريعة",
    DownloadPDF: "تحميل كملف PDF",
    printPage: "طباعة هذه الصفحة",
    pageInfo: "معلومات الصفحة",
  },
  termsAndConditions: 'الشروط والأحكام',
  close: 'إغلاق',
  language: {
    searchMessage: "ابحث عن لغة...",
    selectLanguage: "اختر اللغة",
    description: "اختر لغتك المفضلة لعرض هذه المقالة.",
    notFound: "لم يتم العثور على لغات مطابقة"
  },
  bias: {
    heading: "ما هو التحيز؟",
    explanation: "التحيز هو ميل لدعم رأي أو موقف معين. يمكن أن يؤثر ذلك على كيفية تفسير الشخص للأحداث، واختيار المعلومات، وبناء الحجج. إذا كان لدى الكاتب تحيز سياسي، فقد يؤثر ذلك على قوة المعلومات المقدمة، وكيفية تصوير الشخصيات أو الموضوعات، وأي استنتاجات يتم التوصل إليها. في النهاية، يمكن أن يعكس أسلوب الكتابة آراء الفرد، بدلاً من كونه قائمًا على الحقائق أو وجهات نظر موضوعية.",
    socialist: "اشتراكي",
    liberal: "ليبرالي",
    wikipedia: "ويكيبيديا",
    conservative: "محافظ",
    nationalist: "قومي",
    title: "تحيز القراءة",
  },
  common: {
    loadingPerspective: 'جارٍ تحميل وجهة النظر...',
    fetchingUserInfo: 'جارٍ جلب معلومات المستخدم...',
    home: 'الصفحة الرئيسية',
    about: 'معلومات عنا',
    help: 'مساعدة',
    search: 'بحث',
    searchPlaceholder: 'ابحث في Alternipedia...',
    login: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
    signUp: 'إنشاء حساب',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    language: 'اللغة',
    theme: 'السمة',
    comingSoon: 'Alternipedia قادمة قريبًا!',
    stayTuned: 'ترقبوا.',
    exampleArticle: 'مثال على المقالة:',
  },
  navigation: {
    aboutUs: 'معلومات عنا',
    currentEvents: 'الأحداث الحالية',
    randomArticle: 'مقال عشوائي',
    help: 'مساعدة',
  },
  footer: {
    pleaseLogin: 'يرجى تسجيل الدخول لاستخدام هذه الميزة.',
    text: {
      "part1": "النص متاح تحت",
      "part2": "رخصة المشاع الإبداعي النسبة-نفس المشاركة 4.0 الدولية",
      "part3": "; ممكن تطبق شروط إضافية. باستخدامك للموقع ده، انت موافق على",
      "part4": "الشروط والأحكام",
      "part5": "و",
      "part6": "سياسة الخصوصية",
      "part7": ". Alternipedia مشروع مفتوح المصدر غير ربحي."
    },
    license: 'ترخيص',
    terms: 'الشروط',
    privacy: 'الخصوصية',
    contact: 'تواصل معنا',
    disclaimers: 'إخلاء المسؤولية',
    codeOfConduct: 'مدونة السلوك',
    statistics: 'الإحصائيات',
    cookieStatement: 'بيان ملفات تعريف الارتباط',
    developers: 'المطورون',
  },
  notFound: {
    title: '404',
    heading: 'لم يتم العثور على الصفحة',
    message: "عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها...",
    goHome: 'اذهب إلى الصفحة الرئيسية',
  },
  upgrade: {
    pro: 'المحترفين',
    goPro: 'اشترك في برو',
    upgradePrompt: 'طور حسابك عشان تفتح المميزات المميزة',
    title: 'المعرفة قوة، زود قوتك.',
    month: 'شهر',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'اقرأ كل Alternipedia',
        basicTheme: 'استخدم إعدادات الثيم الأساسية',
        saveArticles: 'احفظ المقالات للقراءة لاحقًا',
      },
      buttonText: 'خطتك',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'كل حاجة في Alternipedia، بالإضافة إلى:',
      features: {
        customThemes: 'استخدم Alternipedia بالثيمات، الألوان، التصميمات والخطوط اللي تحبها',
        notes: 'سجل ملاحظاتك، نظمها وصدّرها من كل Alternipedia',
        advancedSearch: 'نتائج بحث متقدمة',
        semanticSearch: 'بحث دلالي بقوة الذكاء الاصطناعي',
        aiAssistant: 'احصل على WikiPal، مساعد AI الخاص بـ Alternipedia',
        topicMaps: 'بحث أفضل عن المواضيع باستخدام خرائط المواضيع',
        profileCustomization: 'خيارات أكثر لتخصيص الملف الشخصي',
        aiTranslation: 'ترجمة AI لأي صفحة',
        appSupport: 'دعم مستمر على تطبيق Alternipedia',
      },
      buttonText: 'طور الآن',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'هذه المقالة أنشأها أعضاء المجتمع لتقديم وجهة نظر قومية تركز على حق تقرير المصير الوطني والهوية الثقافية.',
      socialist: 'هذه المقالة أنشأها أعضاء المجتمع لتقديم وجهة نظر اجتماعية تركز على العدالة الاجتماعية والمساواة وحقوق العمال.',
      liberal: 'هذه المقالة أنشأها أعضاء المجتمع لتقديم وجهة نظر ليبرالية تركز على الحريات الفردية وحقوق الإنسان والتقدم الاجتماعي.',
      conservative: 'هذه المقالة أنشأها أعضاء المجتمع لتقديم وجهة نظر محافظة تركز على التقاليد والاستقرار والقيم الأسرية.',
      wikipedia: {
        part1: 'هذه المقالة أنشأها أعضاء المجتمع لتقديم وجهة نظر غير متحيزة تركز على المعلومات والبيانات التمثيلية العادلة.',
        part2: 'شاهد ويكيبيديا →',  
      },
    },
    lastEdited: 'آخر تعديل',
    tools: 'الأدوات',
    content: 'المحتوى',
    article: 'مقال',
    close: 'إغلاق',
    notFoundHeader: 'لم يتم العثور على مقالة في ويكيبيديا',
    notFoundText: 'لم نتمكن من العثور على المقالة التالية في ويكيبيديا:',
    searchWikipediaText: 'ابحث في ويكيبيديا',
    discussion: 'نقاش',
    read: 'اقرأ',
    edit: 'حرر',
    history: 'السجل'
  }
};

// Javanese dictionary
const jv: Dictionary = {
  unauthorised: {
    heading: 'Akses ditolak',
    message: 'Sampeyan ora duwe ijin kanggo ngakses kaca iki. Priksa manawa sampeyan wis mlebu utawa hubungi dukungan.'
  },
  blockedAd: {
    part1: 'Kayaé kowé lagi nganggo pemblokir iklan. Mangga mateni supaya ndhukung situs iki, utawa',
    part2: 'ng-upgrade menyang PRO',
    part3: 'kanggo pengalaman tanpa iklan.',
  },
  metadata: {
    description: 'Situs web edukatif sing dirancang kanggo nyedhiyakake perspektif sing beda-beda babagan ilmu lan gagasan.',
    wikipedia: {  
      part1: 'Temokake Alternipedia',
      part2: '—— Perspektif lan gagasan sing beda-beda.',
    },
    conservative: {
      part1: 'Pandangan konservatif',
      part2: '- Tradhisi, stabilitas, lan pasar bebas.',
    },
    nationalist: {    
      part1: 'Pandangan nasionalis',  
      part2: '- Negara berdaulat lan budaya tradisional.',
    },
    socialist: {
      part1: 'Pandangan sosialis',
      part2: '- Keadilan sosial, kesetaraan, lan hak-hak pekerja.', 
    },
    liberal: {  
      part1: 'Pandangan liberal',
      part2: '- Kebebasan individu, hak asasi manusia, lan pasar bebas.',
    },
  },
  accept: 'Nampa',
  reject: 'Tolak',
  cookieMessage: 'Kita lan mitra nggunakake cookie kanggo ngatur iklan sing dipersonalisasi, ngukur performa, lan nyedhiyakake fitur sosial. Klik Nampa kanggo ngidini iklan sing dipersonalisasi utawa Tolak kanggo nolak. Delengen Kabijakan Privasi kanggo informasi luwih lengkap.',
  login: {
    title: 'Mlebu',
    google: 'Terus nganggo Google',
    facebook: 'Terus nganggo Facebook',
    x: 'Terus nganggo X',
    microsoft: 'Terus nganggo Microsoft',
    policy: "Kanthi mlebu, sampeyan setuju karo Syarat Layanan lan Kabijakan Privasi kita.",
  },
  userMenu: {
    login: "Mlebu",
    contributions: "Kontribusi",
    savedArticles: "Artikel Disimpen",
    preferences: "Preferensi",
    logout: "Metu",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('jv-ID', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('jv-ID', { year: 'numeric', month: 'long' }),
    "title": "Kabijakan Privasi",
    "lastUpdatedText": "Pungkasan dianyari:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Sugeng rawuh ing Alternipedia — wiki edukatif sing dirancang kanggo nyedhiyakake perspektif sing beda-beda babagan ilmu lan gagasan. Kita ngajeni privasimu lan setya nglindhungi informasi pribadimu. Kabijakan iki nerangake apa sing diklumpukake, carane digunakake, lan hakmu."
      }
    ],
    "sections": [
      {
        "title": "Informasi sing Dikumpulake",
        "content": [
          {
            "type": "list",
            "items": [
              "Informasi akun: Nalika mlebu nggunakake panyedhiya OAuth (kaya Google utawa Meta), kita nampa jenengmu, alamat email, lan gambar profil (yen ana).",
              "Informasi pembayaran: Yen sampeyan milih mbayar utawa nyumbang, Stripe bakal ngolah transaksi kanthi aman. Kita ora nyimpen utawa ndeleng nomer kertu kreditmu.",
              "Data analitik: Kita nggunakake Vercel Analytics kanggo ngerti pola panggunaan umum, kayata kaca sing populer lan kinerja situs. Data iki digabung lan ora ngenali identitas pribadhi.",
              "Informasi teknis: Nalika sampeyan ngunjungi situs, kita bisa kanthi otomatis nampa data log standar kaya jinis browser, piranti, lan alamat IP kanggo njaga keamanan lan ngatasi masalah.",
              "Adsense: Kita nggunakake Google Adsense kanggo nampilake iklan ing situs kita. Adsense bisa nggunakake cookie kanggo nampilake iklan sing disesuaikan adhedhasar riwayat browsingmu ing situs iki utawa situs liyane."
            ]
          }
        ]
      },
      {
        "title": "Cara Nggunakake Informasimu",
        "content": [
          {
            "type": "list",
            "items": [
              "Ngoperasikake lan nambah platform Alternipedia",
              "Mastikake pangguna lan ngatur akun",
              "Nglakokake pembayaran kanthi aman liwat Stripe",
              "Mriksa kinerja lan reliabilitas situs",
              "Nanggepi pitakon utawa panjalukan saka pangguna"
            ]
          },
          {
            "type": "paragraph",
            "text": "Kita ora adol, nyewa, utawa dagang informasi pribadimu."
          }
        ]
      },
      {
        "title": "Cookies lan Pelacakan",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ora nggunakake cookie iklan utawa pelacakan."
          },
          {
            "type": "paragraph",
            "text": "Kita mung nggunakake cookie penting kanggo sesi login lan fungsi situs."
          }
        ]
      },
      {
        "title": "Panyimpenan Data lan Keamanan",
        "content": [
          {
            "type": "paragraph",
            "text": "Data sampeyan disimpen kanthi aman nggunakake enkripsi standar industri lan infrastruktur hosting sing aman."
          },
          {
            "type": "paragraph",
            "text": "Kita njupuk langkah-langkah wajar kanggo nglindhungi informasi saka ilang, panyalahgunaan, utawa akses tanpa idin."
          }
        ]
      },
      {
        "title": "Hakmu",
        "content": [
          {
            "type": "list",
            "items": [
              "Akses utawa njaluk salinan informasi pribadimu",
              "Ngganti utawa mbusak informasi sing kita simpen",
              "Mbatalake ijin utawa nutup akunmu"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Panrimo Syarat", "content": ["Kanthi ngakses lan nggunakake situs web iki, pangguna setuju kanggo tundhuk lan terikat dening Syarat Layanan iki. Pangguna sing ora setuju karo syarat iki kudu langsung mandheg nggunakake situs web."] },
    { "title": "Tanggung Jawab Akun Pangguna", "content": ["Pangguna tanggung jawab kanggo njaga kerahasiaan kredensial akuné. Kabeh aktivitas ing akun pangguna dadi tanggung jawab pemilik akun. Pangguna kudu langsung ngandhani administrator situs babagan akses akun sing ora sah."] },
    { "title": "Watesan Tanggung Jawab", "content": ["Situs web nyedhiyakake konten 'kaya sing ana' tanpa jaminan apa wae. Pemilik situs web ora tanggung jawab kanggo karusakan langsung, ora langsung, kedadeyan, akibat, utawa hukuman sing muncul saka interaksi pangguna karo platform."] },
    { "title": "Pandhuan Tumindak Pangguna", "content": ["Aja ngunggah konten mbebayani utawa ala sing bisa ngrusak situs web utawa pangguna.", "Hormati hak pangguna liyane.", "Aja nindakake aktivitas sing bisa ngalangi fungsi situs web.", "Tundhuk marang hukum lokal lan internasional sing berlaku."] },
    { "title": "Modifikasi Syarat", "content": ["Situs web duwe hak kanggo ngowahi syarat iki kapan wae. Panggunaan situs web sing terus-terusan sawise owah-owahan dianggep minangka panrimo syarat anyar."] },
    { "title": "Klausula Terminasi", "content": ["Situs web bisa mungkasi utawa nundha akses pangguna tanpa kabar sadurunge yen ana pelanggaran syarat iki utawa alasan liya sing dianggep pantes dening administrasi."] },
    { "title": "Hukum sing Mengatur", "content": ["Syarat iki diatur dening hukum yurisdiksi ing ngendi situs web paling utama dioperasikake, tanpa nganggep prinsip konflik hukum."] }

  ],
  tools: {
    textToSpeech: "Teks menyang Pidato",
    translate: "Terjemah",
    topicMap: "Peta topik",
    notes: "Cathetan",
    wikipal: "Takon Wikipal",
    watchChanges: "Ndeleng owah-owahan",
    saveArticle: "Simpen artikel",
    saved: "Wis disimpen",
    shortUrl: "Link cekak",
    citePage: "Kutip kaca iki",
    QRCode: "Kode QR",
    DownloadPDF: "Download minangka PDF",
    printPage: "Print kaca iki",
    pageInfo: "Informasi kaca",
  },
  language: {
    searchMessage: "Golek basa...",
    selectLanguage: "Pilih Basa",
    description: "Pilih basa sing dikarepaké kanggo ndeleng artikel iki.",
    notFound: "Ora ana basa sing cocog",
  },
  bias: {
    heading: "Apa iku bias?",
    explanation:
      "Bias iku kecenderungan kanggo ndhukung utawa nyenengi pandangan politik, partai, utawa gagasan tartamtu. Iki bisa mengaruhi cara wong nerjemahake kedadeyan, milih informasi, lan nyuguhake gagasan. Nalika panulis nduwé bias politik, iku bisa mengaruhi perspektifé kanthi nemtokaké fakta endi sing ditekanké, piye wong utawa masalah diterangaké, lan kesimpulan sing dijupuk. Akibaté, tulisane bisa nggambarake kapercayan pribadine tinimbang sudut pandang sing netral utawa seimbang.",
    socialist: "Sosialis",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konservatif",
    nationalist: "Nasionalis",
    title: "Bias maca",
  },
  common: {
    loadingPerspective: 'Ngundhuh perspektif...',
    fetchingUserInfo: 'Njupuk info pangguna...',
    home: 'Ngarep',
    about: 'Babagan',
    help: 'Pitulung',
    search: 'Golèk',
    searchPlaceholder: 'Golèk Alternipedia...',
    login: 'Mlebu',
    logout: 'Metu',
    signUp: 'Daftar',
    profile: 'Profil',
    settings: 'Pangaturan',
    language: 'Basa',
    theme: 'Téma',
    comingSoon: 'Alternipedia bakal teka enggal!',
    stayTuned: 'Tetep ngawasi.',
    exampleArticle: 'Artikel conto:',
  },
  termsAndConditions: 'Syarat lan Ketentuan',
  close: 'Tutup',
  navigation: {
    aboutUs: 'Babagan kita',
    currentEvents: 'Kedadeyan saiki',
    randomArticle: 'Artikel acak',
    help: 'Pitulung',
  },
  footer: {
    pleaseLogin: 'Mangga mlebu kanggo nggunakake fitur iki.',
    text: {
      "part1": "Tèks kasedhiya ing ngisor",
      "part2": "Lisensi Creative Commons Attribution-ShareAlike 4.0 Internasional",
      "part3": "; bisa uga ana syarat tambahan. Kanthi nggunakake situs iki, sampeyan setuju karo",
      "part4": "Syarat & Ketentuan",
      "part5": "lan",
      "part6": "Kabijakan Privasi",
      "part7": ". Alternipedia iku proyek sumber terbuka non-profit."
    },
    license: 'Lisènsi',
    terms: 'Katentuan',
    privacy: 'Privasi',
    contact: 'Kontak',
    disclaimers: 'Penolakan',
    codeOfConduct: 'Kode Etik',
    statistics: 'Statistik',
    cookieStatement: 'Pernyataan cookie',
    developers: 'Pangembang',
  },
  notFound: {
    title: '404',
    heading: 'Kaca Ora Ditemokaké',
    message:
      "Nyuwun pangapunten, kaca sing kok golèk ora bisa ditemokaké. Bisa waé kaca wis dibusak utawa pranalané salah.",
    goHome: 'Bali menyang Kaca Ngarep',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Melu PRO',
    upgradePrompt: 'Upgrade kanggo mbukak fitur premium',
    title: 'Ilmu iku Kekuatan, Tambah Kekuwatanmu.',
    month: 'sasi',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Waca kabeh Alternipedia',
        basicTheme: 'Gunakake tema dasar kanggo kustomisasi',
        saveArticles: 'Simpen artikel kanggo diwaca mengko',
      },
      buttonText: 'Rencana sampeyan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Kabeh ing Alternipedia, plus:',
      features: {
        customThemes: 'Gunakake Alternipedia nganggo tema, warna, layout, lan font favoritmu',
        notes: 'Cathet, atur, lan ekspor saka sakabehing Alternipedia',
        advancedSearch: 'Hasil panelusuran tingkat lanjut',
        semanticSearch: 'Panelusuran semantik nganggo kekuwatan AI',
        aiAssistant: 'Entuk akses menyang WikiPal, asisten AI Alternipedia-mu',
        topicMaps: 'Riset topik luwih apik nganggo Peta Topik',
        profileCustomization: 'Luwih akeh opsi kustomisasi profil',
        aiTranslation: 'Terjemahan AI kanggo kaca apa wae',
        appSupport: 'Dhukungan terus ing Alternipedia App',
      },
      buttonText: 'Upgrade saiki',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Artikel iki digawe dening anggota komunitas kanggo nyedhiyakake perspektif nasionalis sing fokus ing hak penentuan nasib bangsa lan identitas budaya.',
      socialist: 'Artikel iki digawe dening anggota komunitas kanggo nyedhiyakake perspektif sosialis sing fokus ing keadilan sosial, kesetaraan, lan hak-hak buruh.',
      liberal: 'Artikel iki digawe dening anggota komunitas kanggo nyedhiyakake perspektif liberal sing fokus ing kebebasan individu, hak asasi manusia, lan kemajuan sosial.',
      conservative: 'Artikel iki digawe dening anggota komunitas kanggo nyedhiyakake perspektif konservatif sing fokus ing tradisi, stabilitas, lan nilai-nilai keluarga.',
      wikipedia: {
        part1: 'Artikel iki digawe dening anggota komunitas kanggo nyedhiyakake perspektif sing ora bias sing fokus ing informasi lan data sing adil.',
        part2: 'Deleng Wikipedia →',
      }
    },
    lastEdited: 'Pungkasan disunting',
    tools: 'Piranti',
    close: 'Tutup',
    notFoundHeader: 'Artikel Wikipedia Ora Ditemokaké',
    notFoundText: 'Kita ora bisa nemokaké artikel Wikipedia ing ngisor iki:',
    searchWikipediaText: 'Golek ing Wikipedia',
    content: 'Isi',
    article: 'Artikel',
    discussion: 'Diskusi',
    read: 'Waca',
    edit: 'Sunting',
    history: 'Sajarah'
  }
};

// Dutch dictionary
const nl: Dictionary = {
  unauthorised: {
    heading: 'Toegang geweigerd',
    message: 'Je hebt geen toestemming om deze pagina te bekijken. Controleer of je bent ingelogd of neem contact op met ondersteuning.'
  },
  blockedAd: {
    part1: 'Het lijkt erop dat je een adblocker gebruikt. Schakel deze uit om onze site te ondersteunen, of',
    part2: 'upgrade naar PRO',
    part3: 'voor een advertentievrije ervaring.',
  },
  metadata: {
    description: 'Een educatieve wiki die is ontworpen om verschillende perspectieven op kennis en ideeën te presenteren.',
    wikipedia: {  
      part1: 'Ontdek Alternipedia',
      part2: '—— Verschillende perspectieven en ideeën.',
    },
    conservative: {
      part1: 'Conservatieve kijk',
      part2: '- Traditie, stabiliteit en vrije markt.',
    },
    nationalist: {    
      part1: 'Nationalistische kijk',
      part2: '- Soevereine staten en traditionele culturen.',
    },
    socialist: {
      part1: 'Socialistische kijk',
      part2: '- Sociale rechtvaardigheid, gelijkheid en arbeidsrechten.', 
    },
    liberal: {  
      part1: 'Liberale kijk',
      part2: '- Individuele vrijheid, mensenrechten en vrije markt.',
    },
  },
  accept: 'Accepteren',
  reject: 'Weigeren',
  cookieMessage: 'Wij en onze partners gebruiken cookies om advertenties te personaliseren, prestaties te meten en sociale functies te bieden. Klik Accepteren om gepersonaliseerde advertenties toe te staan of Weigeren om deze te weigeren. Zie ons privacybeleid voor meer informatie.',
  login: {
    title: 'Inloggen',
    google: 'Doorgaan met Google',
    facebook: 'Doorgaan met Facebook',
    x: 'Doorgaan met X',
    microsoft: 'Doorgaan met Microsoft',
    policy: "Door in te loggen, ga je akkoord met onze Servicevoorwaarden en Privacybeleid.",
  },
  userMenu: {
    login: "Inloggen",
    contributions: "Bijdragen",
    savedArticles: "Opgeslagen artikelen",
    preferences: "Voorkeuren",
    logout: "Uitloggen",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long' }),
    "title": "Privacybeleid",
    "lastUpdatedText": "Laatst bijgewerkt:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Welkom bij Alternipedia — een educatieve wiki die is ontworpen om verschillende perspectieven op kennis en ideeën te presenteren. Wij hechten waarde aan uw privacy en zijn toegewijd aan het beschermen van uw persoonlijke gegevens. Dit beleid legt uit welke informatie wij verzamelen, hoe wij deze gebruiken en welke rechten u heeft."
      }
    ],
    "sections": [
      {
        "title": "Informatie die wij verzamelen",
        "content": [
          {
            "type": "list",
            "items": [
              "Accountinformatie: Wanneer u inlogt via een OAuth-provider (zoals Google of Meta), ontvangen wij uw naam, e-mailadres en profielfoto (indien beschikbaar).",
              "Betalingsinformatie: Als u ervoor kiest om te betalen of een donatie te doen, verwerkt Stripe de transacties veilig. Wij slaan uw creditcardgegevens nooit op of zien deze niet.",
              "Analysetgegevens: Wij gebruiken Vercel Analytics om algemene gebruikspatronen te begrijpen, zoals welke pagina's populair zijn en hoe onze site presteert. Deze gegevens zijn geaggregeerd en identificeren u niet persoonlijk.",
              "Technische informatie: Wanneer u onze site bezoekt, kunnen we automatisch standaard loggegevens ontvangen zoals uw browsertype, apparaat en IP-adres, om veiligheid en functionaliteit te waarborgen.",
              "Adsense: Wij gebruiken Google Adsense om advertenties op onze site weer te geven. Adsense kan cookies gebruiken om gepersonaliseerde advertenties weer te geven op basis van uw browsegeschiedenis op deze of andere sites."
            ]
          }
        ]
      },
      {
        "title": "Hoe wij uw informatie gebruiken",
        "content": [
          {
            "type": "list",
            "items": [
              "Het Alternipedia-platform beheren en verbeteren",
              "Gebruikers verifiëren en accounts beheren",
              "Veilig betalingen verwerken via Stripe",
              "De prestaties en betrouwbaarheid van de site monitoren",
              "Reageren op vragen of verzoeken van gebruikers"
            ]
          },
          {
            "type": "paragraph",
            "text": "Wij verkopen, verhuren of verhandelen uw persoonlijke gegevens niet."
          }
        ]
      },
      {
        "title": "Cookies en tracking",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia gebruikt geen advertentie- of trackingcookies."
          },
          {
            "type": "paragraph",
            "text": "We gebruiken alleen essentiële cookies die nodig zijn voor inloggen en sitefunctionaliteit."
          }
        ]
      },
      {
        "title": "Gegevensopslag en beveiliging",
        "content": [
          {
            "type": "paragraph",
            "text": "Uw gegevens worden veilig opgeslagen met behulp van industriestandaard encryptie en hostinginfrastructuur."
          },
          {
            "type": "paragraph",
            "text": "We nemen redelijke maatregelen om uw informatie te beschermen tegen verlies, misbruik of ongeautoriseerde toegang."
          }
        ]
      },
      {
        "title": "Uw rechten",
        "content": [
          {
            "type": "list",
            "items": [
              "Toegang krijgen tot of een kopie van uw persoonlijke gegevens opvragen",
              "Informatie corrigeren of verwijderen die we over u hebben",
              "Toestemming intrekken of uw account sluiten"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Aanvaarding van de Voorwaarden", "content": ["Door toegang te krijgen tot en gebruik te maken van deze website, stemmen gebruikers ermee in deze Servicevoorwaarden na te leven en eraan gebonden te zijn. Gebruikers die niet akkoord gaan met deze voorwaarden dienen het gebruik van de website onmiddellijk te staken."] },
    { "title": "Verantwoordelijkheden van de Gebruikersaccount", "content": ["Gebruikers zijn verantwoordelijk voor het vertrouwelijk houden van hun accountgegevens. Alle activiteiten die plaatsvinden onder het account van een gebruiker zijn uitsluitend de verantwoordelijkheid van de accounthouder. Gebruikers moeten de websitebeheerders onmiddellijk op de hoogte stellen van ongeoorloofde accounttoegang."] },
    { "title": "Beperking van Aansprakelijkheid", "content": ["De website biedt inhoud 'zoals het is' zonder enige garanties. De eigenaren van de website zijn niet aansprakelijk voor directe, indirecte, incidentele, gevolg- of bestraffende schade die voortvloeit uit interacties van gebruikers met het platform."] },
    { "title": "Richtlijnen voor Gebruikersgedrag", "content": ["Upload geen schadelijke of kwaadaardige inhoud die de website of zijn gebruikers kan schaden.", "Respecteer de rechten van andere gebruikers.", "Vermijd activiteiten die de functionaliteit van de website kunnen verstoren.", "Houd u aan de toepasselijke lokale en internationale wetten."] },
    { "title": "Wijzigingen in de Voorwaarden", "content": ["De website behoudt zich het recht voor deze voorwaarden op elk moment te wijzigen. Voortgezet gebruik van de website na wijzigingen geldt als aanvaarding van de nieuwe voorwaarden."] },
    { "title": "Beëindigingsclausule", "content": ["De website kan de toegang van gebruikers zonder voorafgaande kennisgeving beëindigen of opschorten bij schending van deze voorwaarden of om andere redenen die door het beheer als passend worden beschouwd."] },
    { "title": "Toepasselijk Recht", "content": ["Deze voorwaarden worden beheerst door de wetten van de jurisdictie waarin de website voornamelijk wordt geëxploiteerd, ongeacht beginselen van conflicterend recht."] }
  ],
  tools: {
    textToSpeech: "Tekst naar spraak",
    translate: "Vertalen",
    topicMap: "Onderwerpenkaart",
    notes: "Mijn notities",
    wikipal: "Vraag Wikipal",
    watchChanges: "Wijzigingen volgen",
    saveArticle: "Artikel opslaan",
    saved: "Opgeslagen",
    shortUrl: "Korte link",
    citePage: "Citeer deze pagina",
    QRCode: "QR-code",
    DownloadPDF: "Downloaden als PDF",
    printPage: "Deze pagina afdrukken",
    pageInfo: "Pagina-informatie",
  },
  language: {
    searchMessage: "Zoek een taal...",
    selectLanguage: "Kies taal",
    description: "Selecteer uw voorkeurstaal voor het bekijken van dit artikel.",
    notFound: "Geen talen gevonden die overeenkomen met"
  },
  bias: {
    heading: "Wat is een bias?",
    explanation: "Een bias is een neiging om een bepaald politiek standpunt, partij of idee te ondersteunen of te bevoordelen. Het kan beïnvloeden hoe een persoon gebeurtenissen interpreteert, informatie selecteert en ideeën presenteert. Wanneer een auteur een politieke bias heeft, kan dit hun perspectief beïnvloeden door te bepalen welke feiten ze benadrukken, hoe ze mensen of kwesties beschrijven, en welke conclusies ze trekken. Als gevolg hiervan kan hun schrijven hun persoonlijke overtuigingen weerspiegelen in plaats van een volledig neutraal of evenwichtig standpunt.",
    socialist: "Socialistisch",
    liberal: "Liberaal",
    wikipedia: "Wikipedia",
    conservative: "Conservatief",
    nationalist: "Nationalistisch",
    title: "Leesbias",
  },
  termsAndConditions: 'Algemene Voorwaarden',
  close: 'Sluiten',
  common: {
    loadingPerspective: 'Perspectief laden...',
    fetchingUserInfo: 'Gebruikersinformatie ophalen...',
    home: 'Home',
    about: 'Over',
    help: 'Hulp',
    search: 'Zoeken',
    searchPlaceholder: 'Zoek in Alternipedia...',
    login: 'Inloggen',
    logout: 'Uitloggen',
    signUp: 'Registreren',
    profile: 'Profiel',
    settings: 'Instellingen',
    language: 'Taal',
    theme: 'Thema',
    comingSoon: 'Alternipedia komt binnenkort!',
    stayTuned: 'Blijf op de hoogte.',
    exampleArticle: 'Voorbeeldartikel:',
  },
  navigation: {
    aboutUs: 'Over ons',
    currentEvents: 'Actuele gebeurtenissen',
    randomArticle: 'Willekeurig artikel',
    help: 'Hulp',
  },
  footer: {
    pleaseLogin: 'Log in om deze functie te gebruiken.',
    text: {
      "part1": "Tekst is beschikbaar onder de",
      "part2": "Creative Commons Naamsvermelding-GelijkDelen 4.0 Internationale Licentie",
      "part3": "; aanvullende voorwaarden kunnen van toepassing zijn. Door deze site te gebruiken, gaat u akkoord met de",
      "part4": "Algemene Voorwaarden",
      "part5": "en",
      "part6": "Privacybeleid",
      "part7": ". Alternipedia is een open-source non-profit project."
    },
    license: 'Licentie',
    terms: 'Voorwaarden',
    privacy: 'Privacy',
    contact: 'Contact',
    disclaimers: 'Disclaimer',
    codeOfConduct: 'Gedragscode',
    statistics: 'Statistieken',
    cookieStatement: 'Cookieverklaring',
    developers: 'Ontwikkelaars',
  },
  notFound: {
    title: '404',
    heading: 'Pagina niet gevonden',
    message: "Sorry, we konden de pagina die je zoekt niet vinden. De pagina is mogelijk verwijderd of de link is onjuist.",
    goHome: 'Ga naar startpagina',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Word PRO',
    upgradePrompt: 'Upgrade om premium functies te ontgrendelen',
    title: 'Kennis is Macht, Vergroot die van jou.',
    month: 'maand',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lees alles van Alternipedia',
        basicTheme: 'Gebruik basis thema-aanpassing',
        saveArticles: 'Sla artikelen op om later te lezen',
      },
      buttonText: 'Je plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alles in Alternipedia, plus:',
      features: {
        customThemes: 'Gebruik Alternipedia in je favoriete thema’s, kleuren, layouts en lettertypen',
        notes: 'Maak notities, beheer en exporteer ze van overal in Alternipedia',
        advancedSearch: 'Geavanceerde zoekresultaten',
        semanticSearch: 'Semantisch zoeken met de kracht van AI',
        aiAssistant: 'Krijg toegang tot WikiPal, je Alternipedia AI-assistent',
        topicMaps: 'Betere onderwerponderzoeken met Topic Maps',
        profileCustomization: 'Meer opties voor profielaanpassing',
        aiTranslation: 'AI-vertaling voor elke pagina',
        appSupport: 'Voortdurende ondersteuning op de Alternipedia-app',
      },
      buttonText: 'Upgrade nu',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Dit artikel is gemaakt door communityleden om een nationalistisch perspectief te bieden dat zich richt op het recht op zelfbeschikking van naties en culturele identiteit.',
      socialist: 'Dit artikel is gemaakt door communityleden om een socialistisch perspectief te bieden dat zich richt op sociale rechtvaardigheid, gelijkheid en de rechten van arbeiders.',
      liberal: 'Dit artikel is gemaakt door communityleden om een liberaal perspectief te bieden dat zich richt op individuele vrijheid, mensenrechten en sociale vooruitgang.',
      conservative: 'Dit artikel is gemaakt door communityleden om een conservatief perspectief te bieden dat zich richt op traditie, stabiliteit en gezinswaarden.',
      wikipedia: {
        part1: 'Dit artikel is gemaakt door communityleden om een onbevooroordeeld perspectief te bieden dat zich richt op eerlijke informatie en gegevens.',
        part2: 'Bekijk Wikipedia →',
      }
    },
    lastEdited: 'Laatst bewerkt',
    tools: 'Hulpmiddelen',
    content: 'Inhoud',
    article: 'Artikel',
    close: 'Sluiten',
    notFoundHeader: 'Wikipedia-artikel niet gevonden',
    notFoundText: 'We konden het volgende Wikipedia-artikel niet vinden:',
    searchWikipediaText: 'Zoek op Wikipedia',
    discussion: 'Discussie',
    read: 'Lezen',
    edit: 'Bewerken',
    history: 'Geschiedenis'
  }
};

// Greek dictionary
const el: Dictionary = {
  unauthorised: {
    heading: 'Πρόσβαση απορρίφθηκε',
    message: 'Δεν έχετε εξουσιοδότηση για πρόσβαση σε αυτή τη σελίδα. Ελέγξτε ότι έχετε συνδεθεί ή επικοινωνήστε με την υποστήριξη.'
  },
  blockedAd: {
    part1: 'Φαίνεται ότι χρησιμοποιείτε πρόγραμμα αποκλεισμού διαφημίσεων. Απενεργοποιήστε το για να υποστηρίξετε τον ιστότοπό μας — ή',
    part2: 'αναβαθμίστε σε PRO',
    part3: 'για μια εμπειρία χωρίς διαφημίσεις.'
  },
  metadata: {
    description: 'Ένα εκπαιδευτικό wiki σχεδιασμένο για να παρουσιάζει διαφορετικές οπτικές γωνίες σχετικά με τη γνώση και τις ιδέες.',
    wikipedia: {  
      part1: 'Ανακαλύψτε το Alternipedia',
      part2: '—— Διαφορετικές οπτικές γωνίες και ιδέες.',
    },
    conservative: {
      part1: 'Συντηρητική οπτική',
      part2: '- Παράδοση, σταθερότητα και ελεύθερη αγορά.',
    },
    nationalist: {    
      part1: 'Εθνικιστική οπτική',
      part2: '- Κυρίαρχα κράτη και παραδοσιακοί πολιτισμοί.', 
    },
    liberal: {  
      part1: 'Φιλελεύθερη οπτική',
      part2: '- Ατομική ελευθερία, ανθρώπινα δικαιώματα και ελεύθερη αγορά.',
    },
    socialist: {
      part1: 'Σοσιαλιστική οπτική',
      part2: '- Κοινωνική δικαιοσύνη, ισότητα και δικαιώματα εργαζομένων.',
    },
  },
  accept: 'Αποδοχή',
  reject: 'Απόρριψη',
  cookieMessage: 'Εμείς και οι συνεργάτες μας χρησιμοποιούμε cookies για εξατομίκευση διαφημίσεων, μέτρηση απόδοσης και παροχή κοινωνικών λειτουργιών. Κάντε κλικ στο Αποδοχή για να επιτρέψετε εξατομικευμένες διαφημίσεις ή στο Απόρριψη για να τις απορρίψετε. Δείτε την Πολιτική Απορρήτου μας για περισσότερες πληροφορίες.',
  login: {
    title: 'Σύνδεση',
    google: 'Συνέχεια με το Google',
    facebook: 'Συνέχεια με το Facebook',
    x: 'Συνέχεια με το X',
    microsoft: 'Συνέχεια με το Microsoft',
    policy: "Με τη σύνδεση, συμφωνείτε με τους Όρους Παροχής Υπηρεσιών και την Πολιτική Απορρήτου μας.",
  },
  userMenu: {
    login: "Σύνδεση",
    contributions: "Συνεισφορές",
    savedArticles: "Αποθηκευμένα Άρθρα",
    preferences: "Προτιμήσεις",
    logout: "Αποσύνδεση",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('el-GR', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('el-GR', { year: 'numeric', month: 'long' }),
    "title": "Πολιτική Απορρήτου",
    "lastUpdatedText": "Τελευταία ενημέρωση:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Καλώς ήρθατε στο Alternipedia — ένα εκπαιδευτικό wiki σχεδιασμένο για να παρουσιάζει διαφορετικές οπτικές γωνίες σχετικά με τη γνώση και τις ιδέες. Εκτιμούμε το απόρρητό σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά σας δεδομένα. Αυτή η πολιτική εξηγεί ποια δεδομένα συλλέγουμε, πώς τα χρησιμοποιούμε και ποια είναι τα δικαιώματά σας."
      }
    ],
    "sections": [
      {
        "title": "Πληροφορίες που Συλλέγουμε",
        "content": [
          {
            "type": "list",
            "items": [
              "Πληροφορίες λογαριασμού: Όταν συνδέεστε μέσω ενός παρόχου OAuth (π.χ. Google ή Meta), λαμβάνουμε το όνομά σας, τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας και την εικόνα προφίλ σας (αν υπάρχει).",
              "Πληροφορίες πληρωμής: Εάν επιλέξετε να κάνετε πληρωμή ή δωρεά, η Stripe επεξεργάζεται τις συναλλαγές με ασφάλεια. Δεν αποθηκεύουμε ούτε βλέπουμε ποτέ τα στοιχεία της πιστωτικής σας κάρτας.",
              "Δεδομένα αναλυτικών στοιχείων: Χρησιμοποιούμε το Vercel Analytics για να κατανοήσουμε γενικά μοτίβα χρήσης, όπως ποιες σελίδες είναι δημοφιλείς και πώς αποδίδει ο ιστότοπός μας. Αυτά τα δεδομένα είναι συγκεντρωτικά και δεν σας αναγνωρίζουν προσωπικά.",
              "Τεχνικές πληροφορίες: Όταν επισκέπτεστε τον ιστότοπό μας, ενδέχεται να λαμβάνουμε αυτόματα τυπικά δεδομένα καταγραφής όπως τύπο προγράμματος περιήγησης, συσκευή και διεύθυνση IP, για τη διατήρηση της ασφάλειας και την αντιμετώπιση προβλημάτων.",
              "Adsense: Χρησιμοποιούμε το Google Adsense για την προβολή διαφημίσεων στον ιστότοπό μας. Το Adsense μπορεί να χρησιμοποιεί cookies για την προβολή εξατομικευμένων διαφημίσεων βάσει του ιστορικού περιήγησής σας σε αυτόν ή άλλους ιστότοπους."
            ]
          }
        ]
      },
      {
        "title": "Πώς Χρησιμοποιούμε τις Πληροφορίες σας",
        "content": [
          {
            "type": "list",
            "items": [
              "Λειτουργία και βελτίωση της πλατφόρμας Alternipedia",
              "Επαλήθευση χρηστών και διαχείριση λογαριασμών",
              "Ασφαλής επεξεργασία πληρωμών μέσω Stripe",
              "Παρακολούθηση της απόδοσης και αξιοπιστίας του ιστότοπου",
              "Απάντηση σε αιτήματα ή ερωτήσεις χρηστών"
            ]
          },
          {
            "type": "paragraph",
            "text": "Δεν πουλάμε, δεν νοικιάζουμε ούτε εμπορευόμαστε τα προσωπικά σας δεδομένα."
          }
        ]
      },
      {
        "title": "Cookies και Παρακολούθηση",
        "content": [
          {
            "type": "paragraph",
            "text": "Το Alternipedia δεν χρησιμοποιεί cookies για διαφημίσεις ή παρακολούθηση."
          },
          {
            "type": "paragraph",
            "text": "Χρησιμοποιούμε μόνο τα απαραίτητα cookies για συνεδρίες σύνδεσης και λειτουργία του ιστότοπου."
          }
        ]
      },
      {
        "title": "Αποθήκευση Δεδομένων και Ασφάλεια",
        "content": [
          {
            "type": "paragraph",
            "text": "Τα δεδομένα σας αποθηκεύονται με ασφάλεια χρησιμοποιώντας κρυπτογράφηση και υποδομές φιλοξενίας σύμφωνα με τα πρότυπα της βιομηχανίας."
          },
          {
            "type": "paragraph",
            "text": "Λαμβάνουμε εύλογα μέτρα για να προστατεύουμε τις πληροφορίες σας από απώλεια, κακή χρήση ή μη εξουσιοδοτημένη πρόσβαση."
          }
        ]
      },
      {
        "title": "Τα Δικαιώματά σας",
        "content": [
          {
            "type": "list",
            "items": [
              "Πρόσβαση ή αίτηση για αντίγραφο των προσωπικών σας δεδομένων",
              "Διόρθωση ή διαγραφή των πληροφοριών που κατέχουμε για εσάς",
              "Ανάκληση της συγκατάθεσης ή κλείσιμο του λογαριασμού σας"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Αποδοχή Όρων", "content": ["Με την πρόσβαση και χρήση αυτού του ιστότοπου, οι χρήστες συμφωνούν να συμμορφώνονται με αυτούς τους Όρους Παροχής Υπηρεσιών και να δεσμεύονται από αυτούς. Οι χρήστες που δεν συμφωνούν με αυτούς τους όρους πρέπει να σταματήσουν αμέσως τη χρήση του ιστότοπου."] },
    { "title": "Υποχρεώσεις Λογαριασμού Χρήστη", "content": ["Οι χρήστες είναι υπεύθυνοι για τη διατήρηση της εμπιστευτικότητας των στοιχείων του λογαριασμού τους. Οποιαδήποτε δραστηριότητα υπό τον λογαριασμό χρήστη βαρύνει αποκλειστικά τον κάτοχο του λογαριασμού. Οι χρήστες πρέπει να ειδοποιούν άμεσα τους διαχειριστές του ιστότοπου για οποιαδήποτε μη εξουσιοδοτημένη πρόσβαση στον λογαριασμό."] },
    { "title": "Περιορισμός Ευθύνης", "content": ["Ο ιστότοπος παρέχει περιεχόμενο 'ως έχει' χωρίς καμία εγγύηση. Οι ιδιοκτήτες του ιστότοπου δεν φέρουν καμία ευθύνη για άμεσες, έμμεσες, τυχαίες, επακόλουθες ή ποινικές ζημίες που προκύπτουν από τις αλληλεπιδράσεις των χρηστών με την πλατφόρμα."] },
    { "title": "Οδηγίες Συμπεριφοράς Χρηστών", "content": ["Μην ανεβάζετε επιβλαβές ή κακόβουλο περιεχόμενο που μπορεί να βλάψει τον ιστότοπο ή τους χρήστες του.", "Σεβαστείτε τα δικαιώματα άλλων χρηστών.", "Αποφύγετε δραστηριότητες που μπορεί να διαταράξουν τη λειτουργικότητα του ιστότοπου.", "Συμμορφωθείτε με τους ισχύοντες τοπικούς και διεθνείς νόμους."] },
    { "title": "Τροποποιήσεις Όρων", "content": ["Ο ιστότοπος διατηρεί το δικαίωμα να τροποποιεί αυτούς τους όρους οποιαδήποτε στιγμή. Η συνεχής χρήση του ιστότοπου μετά από αλλαγές συνιστά αποδοχή των νέων όρων."] },
    { "title": "Ρήτρα Τερματισμού", "content": ["Ο ιστότοπος μπορεί να τερματίσει ή να αναστείλει την πρόσβαση του χρήστη χωρίς προειδοποίηση σε περίπτωση παραβίασης αυτών των όρων ή για οποιονδήποτε άλλο λόγο που θεωρείται κατάλληλος από τη διαχείριση."] },
    { "title": "Εφαρμοστέο Δίκαιο", "content": ["Αυτοί οι όροι διέπονται από τους νόμους της δικαιοδοσίας στην οποία λειτουργεί κυρίως ο ιστότοπος, ανεξαρτήτως αρχών σύγκρουσης νόμων."] }
  ],
  tools: {
    textToSpeech: "Κείμενο σε ομιλία",
    translate: "Μετάφραση",
    topicMap: "Χάρτης θεμάτων",
    notes: "Οι σημειώσεις μου",
    wikipal: "Ρωτήστε το Wikipal",
    watchChanges: "Παρακολούθηση αλλαγών",
    saveArticle: "Αποθήκευση άρθρου",
    saved: "Αποθηκεύτηκε",
    shortUrl: "Σύντομος σύνδεσμος",
    citePage: "Παραπομπή σελίδας",
    QRCode: "Κωδικός QR",
    DownloadPDF: "Λήψη ως PDF",
    printPage: "Εκτύπωση σελίδας",
    pageInfo: "Πληροφορίες σελίδας",
  },
  termsAndConditions: 'Όροι και Προϋποθέσεις',
  close: 'Κλείσιμο',
  language: {
    searchMessage: "Αναζήτηση γλώσσας...",
    selectLanguage: "Επιλογή γλώσσας",
    description: "Επιλέξτε την προτιμώμενη γλώσσα σας για την προβολή αυτού του άρθρου.",
    notFound: "Δεν βρέθηκαν γλώσσες που να ταιριάζουν με"
  },
  bias: {
    heading: "Τι είναι προκατάληψη;",
    explanation: "Η προκατάληψη είναι μια τάση να υποστηρίζουμε ή να ευνοούμε μια συγκεκριμένη πολιτική άποψη, κόμμα ή ιδέα. Μπορεί να επηρεάσει τον τρόπο με τον οποίο ένα άτομο ερμηνεύει γεγονότα, επιλέγει πληροφορίες και παρουσιάζει ιδέες. Όταν ένας συγγραφέας έχει πολιτική προκατάληψη, μπορεί να επηρεάσει την προοπτική του επηρεάζοντας ποια γεγονότα τονίζει, πώς περιγράφει ανθρώπους ή ζητήματα και τα συμπεράσματα που εξάγει. Ως αποτέλεσμα, η γραφή τους μπορεί να αντανακλά τις προσωπικές τους πεποιθήσεις παρά μια εντελώς ουδέτερη ή ισορροπημένη άποψη.",
    socialist: "Σοσιαλιστής",
    liberal: "Φιλελεύθερος",
    wikipedia: "Wikipedia",
    conservative: "Συντηρητικός",
    nationalist: "Εθνικιστής",
    title: "Προκατάληψη ανάγνωσης",
  },
  common: {
    loadingPerspective: 'Φόρτωση προοπτικής...',
    fetchingUserInfo: 'Ανάκτηση πληροφοριών χρήστη...',
    home: 'Αρχική',
    about: 'Σχετικά',
    help: 'Βοήθεια',
    search: 'Αναζήτηση',
    searchPlaceholder: 'Αναζήτηση στην Alternipedia...',
    login: 'Σύνδεση',
    logout: 'Αποσύνδεση',
    signUp: 'Εγγραφή',
    profile: 'Προφίλ',
    settings: 'Ρυθμίσεις',
    language: 'Γλώσσα',
    theme: 'Θέμα',
    comingSoon: 'Η Alternipedia έρχεται σύντομα!',
    stayTuned: 'Μείνετε συντονισμένοι.',
    exampleArticle: 'Παράδειγμα άρθρου:',
  },
  navigation: {
    aboutUs: 'Σχετικά με εμάς',
    currentEvents: 'Τρέχοντα γεγονότα',
    randomArticle: 'Τυχαίο άρθρο',
    help: 'Βοήθεια',
  },
  footer: {
    pleaseLogin: 'Παρακαλώ συνδεθείτε για να χρησιμοποιήσετε αυτή τη λειτουργία.',
    text: {
      "part1": "Το κείμενο είναι διαθέσιμο υπό την",
      "part2": "Άδεια Creative Commons Αναφορά-Ιδιοκτησία-Παρόμοια 4.0 Διεθνής",
      "part3": "; μπορεί να ισχύουν πρόσθετοι όροι. Χρησιμοποιώντας αυτόν τον ιστότοπο, συμφωνείτε με τους",
      "part4": "Όρους & Προϋποθέσεις",
      "part5": "και",
      "part6": "Πολιτική Απορρήτου",
      "part7": ". Το Alternipedia είναι ένα μη κερδοσκοπικό έργο ανοιχτού κώδικα."
    },
    license: 'Άδεια',
    terms: 'Όροι',
    privacy: 'Απόρρητο',
    contact: 'Επικοινωνία',
    disclaimers: 'Αποποιήσεις',
    codeOfConduct: 'Κώδικας δεοντολογίας',
    statistics: 'Στατιστικά',
    cookieStatement: 'Δήλωση cookie',
    developers: 'Προγραμματιστές',
  },
  notFound: {
    title: '404',
    heading: 'Η σελίδα δεν βρέθηκε',
    message: "Λυπούμαστε, δεν μπορέσαμε να βρούμε τη σελίδα που ψάχνετε. Η σελίδα μπορεί να έχει αφαιρεθεί ή ο σύνδεσμος να είναι εσφαλμένος.",
    goHome: 'Μετάβαση στην αρχική σελίδα',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Γίνε PRO',
    upgradePrompt: 'Αναβάθμισε για να ξεκλειδώσεις premium λειτουργίες',
    title: 'Η γνώση είναι δύναμη, Ενίσχυσε τη δική σου.',
    month: 'μήνας',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Διάβασε όλο το Alternipedia',
        basicTheme: 'Χρησιμοποίησε βασική προσαρμογή θέματος',
        saveArticles: 'Αποθήκευσε άρθρα για να τα διαβάσεις αργότερα',
      },
      buttonText: 'Το πλάνο σου',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Τα πάντα στο Alternipedia, συν:',
      features: {
        customThemes: 'Χρησιμοποίησε το Alternipedia με τα αγαπημένα σου θέματα, χρώματα, διατάξεις και γραμματοσειρές',
        notes: 'Κράτα σημειώσεις, διαχειρίσου και εξάγετέ τες από όλο το Alternipedia',
        advancedSearch: 'Αποτελέσματα προηγμένης αναζήτησης',
        semanticSearch: 'Σημασιολογική αναζήτηση με τη δύναμη της AI',
        aiAssistant: 'Απέκτησε πρόσβαση στο WikiPal, τον AI βοηθό σου στο Alternipedia',
        topicMaps: 'Καλύτερη έρευνα θεμάτων με Χάρτες Θεμάτων',
        profileCustomization: 'Περισσότερες επιλογές προσαρμογής προφίλ',
        aiTranslation: 'Μετάφραση AI για οποιαδήποτε σελίδα',
        appSupport: 'Συνεχής υποστήριξη στην εφαρμογή Alternipedia',
      },
      buttonText: 'Αναβάθμισε τώρα',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Αυτό το άρθρο δημιουργήθηκε από μέλη της κοινότητας για να προσφέρει μια εθνικιστική οπτική που εστιάζει στο δικαίωμα των εθνών για αυτοδιάθεση και πολιτιστική ταυτότητα.',
      socialist: 'Αυτό το άρθρο δημιουργήθηκε από μέλη της κοινότητας για να προσφέρει μια σοσιαλιστική οπτική που εστιάζει στην κοινωνική δικαιοσύνη, την ισότητα και τα δικαιώματα των εργαζομένων.',
      liberal: 'Αυτό το άρθρο δημιουργήθηκε από μέλη της κοινότητας για να προσφέρει μια φιλελεύθερη οπτική που εστιάζει στην ατομική ελευθερία, τα ανθρώπινα δικαιώματα και την κοινωνική πρόοδο.',
      conservative: 'Αυτό το άρθρο δημιουργήθηκε από μέλη της κοινότητας για να προσφέρει μια συντηρητική οπτική που εστιάζει στην παράδοση, τη σταθερότητα και τις οικογενειακές αξίες.',
      wikipedia: {
        part1: 'Αυτό το άρθρο δημιουργήθηκε από μέλη της κοινότητας για να προσφέρει μια αμερόληπτη οπτική που εστιάζει σε δίκαιες πληροφορίες και δεδομένα.',
        part2: 'Δες το Wikipedia →',
      } 
    },
    lastEdited: 'Τελευταία επεξεργασία',
    tools: 'Εργαλεία',
    content: 'Περιεχόμενο',
    article: 'Άρθρο',
    close: 'Κλείσιμο',
    notFoundHeader: 'Το άρθρο Wikipedia δεν βρέθηκε',
    notFoundText: 'Δεν μπορέσαμε να βρούμε το παρακάτω άρθρο Wikipedia:',
    searchWikipediaText: 'Αναζήτηση στο Wikipedia',
    discussion: 'Συζήτηση',
    read: 'Διάβασε',
    edit: 'Επεξεργασία',
    history: 'Ιστορικό'
  }
};

// Swedish dictionary
const sv: Dictionary = {
  unauthorised: {
    heading: 'Åtkomst nekad',
    message: 'Du är inte behörig att komma åt den här sidan. Kontrollera att du är inloggad eller kontakta supporten.'
  },
  blockedAd: {
    part1: 'Det verkar som att du använder en annonsblockerare. Vänligen inaktivera den för att stödja vår sajt — eller',
    part2: 'uppgradera till PRO',
    part3: 'för en annonsfri upplevelse.'
  },
  metadata: {
    description: 'En utbildningswiki som är utformad för att presentera olika perspektiv på kunskap och idéer.',
    wikipedia: {  
      part1: 'Upptäck Alternipedia',
      part2: '—— Olika perspektiv och idéer.',
    },
    conservative: {  
      part1: 'Konservativt perspektiv',
      part2: '- Tradition, stabilitet och fri marknad.',
    },
    nationalist: {    
      part1: 'Nationalistiskt perspektiv',
      part2: '- Suveräna stater och traditionella kulturer.', 
    },
    socialist: {
      part1: 'Socialistiskt perspektiv',
      part2: '- Social rättvisa, jämlikhet och arbetstagares rättigheter.', 
    },
    liberal: {  
      part1: 'Liberalt perspektiv',
      part2: '- Individuell frihet, mänskliga rättigheter och fri marknad.',
    },
  },
  accept: 'Acceptera',
  reject: 'Avvisa',
  cookieMessage: 'Vi och våra partners använder cookies för att anpassa annonser, mäta prestanda och tillhandahålla sociala funktioner. Klicka Acceptera för att tillåta personliga annonser eller Avvisa för att neka. Se vår integritetspolicy för mer information.',
  login: {
    title: 'Logga in',
    google: 'Fortsätt med Google',
    facebook: 'Fortsätt med Facebook',
    x: 'Fortsätt med X',
    microsoft: 'Fortsätt med Microsoft',
    policy: "Genom att logga in godkänner du våra användarvillkor och integritetspolicy.",
  },
  userMenu: {
    login: "Logga in",
    contributions: "Bidrag",
    savedArticles: "Sparade artiklar",
    preferences: "Inställningar",
    logout: "Logga ut",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long' }),
    "title": "Integritetspolicy",
    "lastUpdatedText": "Senast uppdaterad:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Välkommen till Alternipedia — en utbildningswiki skapad för att presentera olika perspektiv på kunskap och idéer. Vi värnar om din integritet och är engagerade i att skydda din personliga information. Denna policy förklarar vilken information vi samlar in, hur vi använder den och dina rättigheter."
      }
    ],
    "sections": [
      {
        "title": "Information vi samlar in",
        "content": [
          {
            "type": "list",
            "items": [
              "Kontoinformation: När du loggar in med en OAuth-leverantör (som Google eller Meta) får vi ditt namn, e-postadress och profilbild (om tillgänglig).",
              "Betalningsinformation: Om du väljer att göra en betalning eller donation behandlar Stripe transaktioner säkert. Vi sparar aldrig eller ser dina kreditkortsuppgifter.",
              "Analysdata: Vi använder Vercel Analytics för att förstå allmänna användarmönster, såsom vilka sidor som är populära och hur vår webbplats presterar. Dessa data är aggregerade och identifierar dig inte personligen.",
              "Teknisk information: När du besöker webbplatsen kan vi automatiskt ta emot standardloggdata som webbläsartyp, enhet och IP-adress för att upprätthålla säkerhet och funktionalitet.",
              "Adsense: Vi använder Google Adsense för att visa annonser på vår webbplats. Adsense kan använda cookies för att visa anpassade annonser baserat på din surfhistorik på denna eller andra webbplatser."
            ]
          }
        ]
      },
      {
        "title": "Hur vi använder din information",
        "content": [
          {
            "type": "list",
            "items": [
              "Driva och förbättra Alternipedia-plattformen",
              "Autentisera användare och hantera konton",
              "Behandla betalningar säkert via Stripe",
              "Övervaka webbplatsens prestanda och tillförlitlighet",
              "Svara på användarförfrågningar eller frågor"
            ]
          },
          {
            "type": "paragraph",
            "text": "Vi säljer, hyr inte ut eller byter dina personuppgifter."
          }
        ]
      },
      {
        "title": "Cookies och spårning",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia använder inga annonserings- eller spårningscookies."
          },
          {
            "type": "paragraph",
            "text": "Vi använder endast nödvändiga cookies som krävs för inloggningssessioner och webbplatsfunktionalitet."
          }
        ]
      },
      {
        "title": "Datalagring och säkerhet",
        "content": [
          {
            "type": "paragraph",
            "text": "Din data lagras säkert med hjälp av industristandard kryptering och hostinginfrastruktur."
          },
          {
            "type": "paragraph",
            "text": "Vi vidtar rimliga åtgärder för att skydda din information från förlust, missbruk eller obehörig åtkomst."
          }
        ]
      },
      {
        "title": "Dina rättigheter",
        "content": [
          {
            "type": "list",
            "items": [
              "Få tillgång till eller begära en kopia av dina personuppgifter",
              "Korrigera eller radera information vi har om dig",
              "Återkalla samtycke eller stänga ditt konto"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "Accepterande av Villkor", "content": ["Genom att få tillgång till och använda denna webbplats samtycker användare till att följa och vara bundna av dessa Användarvillkor. Användare som inte accepterar dessa villkor bör omedelbart sluta använda webbplatsen."] },
  { "title": "Användarkontos Ansvar", "content": ["Användare är ansvariga för att upprätthålla sekretessen för sina kontouppgifter. Alla aktiviteter som sker under en användares konto är helt användarens ansvar. Användare måste omedelbart meddela webbplatsens administratörer om obehörig kontotillgång."] },
  { "title": "Ansvarsbegränsning", "content": ["Webbplatsen tillhandahåller innehåll 'i befintligt skick' utan några garantier. Webbplatsens ägare ansvarar inte för direkta, indirekta, tillfälliga, följd- eller straffrättsliga skador som uppstår från användares interaktion med plattformen."] },
  { "title": "Riktlinjer för Användarbeteende", "content": ["Ladda inte upp skadligt eller illvilligt innehåll som kan skada webbplatsen eller dess användare.", "Respektera andra användares rättigheter.", "Undvik aktiviteter som kan störa webbplatsens funktionalitet.", "Följ tillämpliga lokala och internationella lagar."] },
  { "title": "Ändringar av Villkor", "content": ["Webbplatsen förbehåller sig rätten att ändra dessa villkor när som helst. Fortsatt användning av webbplatsen efter ändringar utgör acceptans av de nya villkoren."] },
  { "title": "Uppsägning Klausul", "content": ["Webbplatsen kan avsluta eller avbryta användarens åtkomst utan föregående meddelande vid överträdelse av dessa villkor eller av annan anledning som administratören anser lämplig."] },
  { "title": "Tillämplig Lag", "content": ["Dessa villkor styrs av lagarna i den jurisdiktion där webbplatsen huvudsakligen drivs, utan hänsyn till principer om lagkonflikter."] }
  ],
  tools: {
    textToSpeech: "Text till tal",
    translate: "Översätt",
    topicMap: "Ämneskarta",
    notes: "Mina anteckningar",
    wikipal: "Fråga Wikipal",
    watchChanges: "Bevaka ändringar",
    saveArticle: "Spara artikel",
    saved: "Sparad",
    shortUrl: "Kort länk",
    citePage: "Citera denna sida",
    QRCode: "QR-kod",
    DownloadPDF: "Ladda ner som PDF",
    printPage: "Skriv ut denna sida",
    pageInfo: "Sidinformation",
  },
  termsAndConditions: 'Villkor och bestämmelser',
  close: 'Stäng',
  language: {
    searchMessage: "Sök språk...",
    selectLanguage: "Välj språk",
    description: "Välj ditt föredragna språk för att visa denna artikel.",
    notFound: "Inga språk hittades som matchar"
  },
  bias: {
    heading: "Vad är en bias?",
    explanation: "En bias är en tendens att stödja eller gynna en viss politisk åsikt, parti eller idé. Det kan påverka hur en person tolkar händelser, väljer information och presenterar idéer. När en författare har en politisk bias kan det påverka deras perspektiv genom att påverka vilka fakta de betonar, hur de beskriver personer eller frågor och vilka slutsatser de drar. Som ett resultat kan deras skrivande återspegla deras personliga övertygelser snarare än en helt neutral eller balanserad synvinkel.",
    socialist: "Socialistisk",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konservativ",
    nationalist: "Nationalistisk",
    title: "Läsningsbias",
  },
  common: {
    loadingPerspective: 'Laddar perspektiv...',
    fetchingUserInfo: 'Hämtar användarinformation...',
    home: 'Hem',
    about: 'Om',
    help: 'Hjälp',
    search: 'Sök',
    searchPlaceholder: 'Sök på Alternipedia...',
    login: 'Logga in',
    logout: 'Logga ut',
    signUp: 'Registrera dig',
    profile: 'Profil',
    settings: 'Inställningar',
    language: 'Språk',
    theme: 'Tema',
    comingSoon: 'Alternipedia kommer snart!',
    stayTuned: 'Håll utkik.',
    exampleArticle: 'Exempelartikel:',
  },
  navigation: {
    aboutUs: 'Om oss',
    currentEvents: 'Aktuella händelser',
    randomArticle: 'Slumpartikel',
    help: 'Hjälp',
  },
  footer: {
    pleaseLogin: 'Logga in för att använda denna funktion.',
    text: {
      "part1": "Texten är tillgänglig under",
      "part2": "Creative Commons Erkännande-DelaLika 4.0 Internationell Licens",
      "part3": "; ytterligare villkor kan gälla. Genom att använda denna webbplats godkänner du",
      "part4": "Villkor",
      "part5": "och",
      "part6": "Integritetspolicy",
      "part7": ". Alternipedia är ett öppen källkod, ideellt projekt."
    },
    license: 'Licens',
    terms: 'Villkor',
    privacy: 'Integritet',
    contact: 'Kontakt',
    disclaimers: 'Ansvarsfriskrivningar',
    codeOfConduct: 'Uppförandekod',
    statistics: 'Statistik',
    cookieStatement: 'Cookie-meddelande',
    developers: 'Utvecklare',
  },
  notFound: {
    title: '404',
    heading: 'Sidan hittades inte',
    message: "Tyvärr kunde vi inte hitta sidan du letar efter. Sidan kan ha tagits bort eller länken kan vara felaktig.",
    goHome: 'Gå till startsidan',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Bli PRO',
    upgradePrompt: 'Uppgradera för att låsa upp premiumfunktioner',
    title: 'Kunskap är makt, Förstärk din.',
    month: 'månad',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Läs allt på Alternipedia',
        basicTheme: 'Använd grundläggande temaanpassning',
        saveArticles: 'Spara artiklar för att läsa senare',
      },
      buttonText: 'Din plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Allt i Alternipedia, plus:',
      features: {
        customThemes: 'Använd Alternipedia i dina favoritteman, färger, layouter och typsnitt',
        notes: 'Ta anteckningar, hantera och exportera dem från hela Alternipedia',
        advancedSearch: 'Avancerade sökresultat',
        semanticSearch: 'Semantisk sökning med kraften av AI',
        aiAssistant: 'Få tillgång till WikiPal, din AI-assistent i Alternipedia',
        topicMaps: 'Bättre ämnesforskning med Ämneskartor',
        profileCustomization: 'Fler alternativ för profilanpassning',
        aiTranslation: 'AI-översättning för vilken sida som helst',
        appSupport: 'Kontinuerligt stöd i Alternipedia-appen',
      },
      buttonText: 'Uppgradera nu',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Denna artikel skapades av medlemmar i communityn för att erbjuda ett nationalistiskt perspektiv som fokuserar på nationers rätt till självbestämmande och kulturell identitet.',
      socialist: 'Denna artikel skapades av medlemmar i communityn för att erbjuda ett socialistiskt perspektiv som fokuserar på social rättvisa, jämlikhet och arbetstagares rättigheter.',
      liberal: 'Denna artikel skapades av medlemmar i communityn för att erbjuda ett liberalt perspektiv som fokuserar på individuell frihet, mänskliga rättigheter och socialt framsteg.',
      conservative: 'Denna artikel skapades av medlemmar i communityn för att erbjuda ett konservativt perspektiv som fokuserar på tradition, stabilitet och familjevärderingar.',
      wikipedia: {
        part1: 'Denna artikel skapades av medlemmar i communityn för att erbjuda ett opartiskt perspektiv som fokuserar på rättvis information och data.',
        part2: 'Se Wikipedia →',
      }
    },
    lastEdited: 'Senast redigerad',
    tools: 'Verktyg',
    content: 'Innehåll',
    close: 'Stäng',
    notFoundHeader: 'Wikipedia-artikeln hittades inte',
    notFoundText: 'Vi kunde inte hitta följande Wikipedia-artikel:',
    searchWikipediaText: 'Sök på Wikipedia',
    article: 'Artikel',
    discussion: 'Diskussion',
    read: 'Läs',
    edit: 'Redigera',
    history: 'Historik'
  }
};

// Norwegian dictionary
const no: Dictionary = {
  unauthorised: {
    heading: 'Tilgang nektet',
    message: 'Du har ikke tillatelse til å få tilgang til denne siden. Kontroller at du er logget inn, eller kontakt support.'
  },
  blockedAd: {
    part1: 'Det ser ut som du bruker en annonseblokker. Vennligst deaktiver den for å støtte nettstedet vårt — eller',
    part2: 'oppgrader til PRO',
    part3: 'for en annonsefri opplevelse.'
  },
  metadata: {
    description: 'Et utdanningswiki designet for å presentere ulike perspektiver på kunnskap og ideer.',
    wikipedia: {  
      part1: 'Oppdag Alternipedia',
      part2: 'Lær om alternative perspektiver på viktige emner.',
    },
    conservative: {
      part1: 'Konservativt perspektiv',
      part2: '- Tradisjon, stabilitet og fri markedsøkonomi.',
    },
    nationalist: {
      part1: 'Nasjonalistisk perspektiv',
      part2: '- Suverene stater og tradisjonelle kulturer.', 
    },
    socialist: {
      part1: 'Sosialistisk perspektiv',
      part2: '- Sosial rettferdighet, likhet og arbeidstakerrettigheter.',  
    },
    liberal: {
      part1: 'Liberalt perspektiv',
      part2: '- Individuelle rettigheter, frihet og likestilling.',
    },
  },
  accept: 'Godta',
  reject: 'Avslå',
  cookieMessage: 'Vi og våre partnere bruker informasjonskapsler for å personalisere annonser, måle ytelse og tilby sosiale funksjoner. Klikk Godta for å tillate personlige annonser eller Avslå for å avslå. Se vår personvernerklæring for mer informasjon.',
  login: {
    title: 'Logg inn',
    google: 'Fortsett med Google',
    facebook: 'Fortsett med Facebook',
    x: 'Fortsett med X',
    microsoft: 'Fortsett med Microsoft',
    policy: "Ved å logge inn godtar du våre vilkår for bruk og personvernregler.",
  },
  userMenu: {
    login: "Logg inn",
    contributions: "Bidrag",
    savedArticles: "Lagrede artikler",
    preferences: "Innstillinger",
    logout: "Logg ut",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long' }),
    "title": "Personvernregler",
    "lastUpdatedText": "Sist oppdatert:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Velkommen til Alternipedia — et utdanningswiki designet for å presentere ulike perspektiver på kunnskap og ideer. Vi verdsetter ditt personvern og er forpliktet til å beskytte din personlige informasjon. Denne policyen forklarer hva vi samler inn, hvordan vi bruker det, og dine rettigheter."
      }
    ],
    "sections": [
      {
        "title": "Informasjon vi samler inn",
        "content": [
          {
            "type": "list",
            "items": [
              "Kontoinformasjon: Når du logger inn via en OAuth-leverandør (som Google eller Meta), mottar vi navn, e-postadresse og profilbilde (hvis tilgjengelig).",
              "Betalingsinformasjon: Hvis du velger å betale eller donere, behandler Stripe transaksjoner sikkert. Vi lagrer aldri eller ser dine kredittkortopplysninger.",
              "Analyser: Vi bruker Vercel Analytics for å forstå generelle bruksmønstre, for eksempel hvilke sider som er populære og hvordan nettstedet presterer. Disse dataene er aggregerte og identifiserer deg ikke personlig.",
              "Teknisk informasjon: Når du besøker nettstedet, kan vi automatisk motta standard loggdata som nettlesertype, enhet og IP-adresse for å opprettholde sikkerhet og funksjonalitet.",
              "Adsense: Vi bruker Google Adsense for å vise annonser på nettstedet vårt. Adsense kan bruke informasjonskapsler for å vise tilpassede annonser basert på din nettleserhistorikk på dette eller andre nettsteder."
            ]
          }
        ]
      },
      {
        "title": "Hvordan vi bruker informasjonen din",
        "content": [
          {
            "type": "list",
            "items": [
              "Drive og forbedre Alternipedia-plattformen",
              "Autentisere brukere og administrere kontoer",
              "Behandle betalinger sikkert via Stripe",
              "Overvåke nettstedets ytelse og pålitelighet",
              "Svare på brukerspørsmål eller forespørsler"
            ]
          },
          {
            "type": "paragraph",
            "text": "Vi selger, leier ikke ut eller bytter dine personlige data."
          }
        ]
      },
      {
        "title": "Cookies og sporing",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia bruker ikke annonserings- eller sporingscookies."
          },
          {
            "type": "paragraph",
            "text": "Vi bruker kun nødvendige cookies som kreves for innlogging og nettstedets funksjonalitet."
          }
        ]
      },
      {
        "title": "Datalagring og sikkerhet",
        "content": [
          {
            "type": "paragraph",
            "text": "Dine data lagres sikkert med industristandard kryptering og hostinginfrastruktur."
          },
          {
            "type": "paragraph",
            "text": "Vi tar rimelige skritt for å beskytte informasjonen din mot tap, misbruk eller uautorisert tilgang."
          }
        ]
      },
      {
        "title": "Dine rettigheter",
        "content": [
          {
            "type": "list",
            "items": [
              "Få tilgang til eller be om en kopi av dine personlige data",
              "Rette eller slette informasjon vi har om deg",
              "Tilbakekalle samtykke eller lukke kontoen din"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Aksept av Vilkår", "content": ["Ved å få tilgang til og bruke denne nettsiden, samtykker brukere til å overholde og være bundet av disse tjenestevilkårene. Brukere som ikke godtar disse vilkårene bør umiddelbart slutte å bruke nettstedet."] },
    { "title": "Brukerkontots Ansvar", "content": ["Brukere er ansvarlige for å opprettholde konfidensialiteten til kontoinformasjonen sin. All aktivitet som skjer under en brukers konto er fullt ansvar for kontoinnehaveren. Brukere må umiddelbart varsle nettstedets administratorer om uautorisert kontotilgang."] },
    { "title": "Ansvarsbegrensning", "content": ["Nettstedet tilbyr innhold 'som det er' uten noen garantier. Nettstedets eiere er ikke ansvarlige for direkte, indirekte, tilfeldige, følgeskader eller straffeskader som oppstår fra brukeres interaksjoner med plattformen."] },
    { "title": "Retningslinjer for Brukeratferd", "content": ["Ikke last opp skadelig eller ondsinnet innhold som kan skade nettstedet eller dets brukere.", "Respekter andre brukeres rettigheter.", "Unngå aktiviteter som kan forstyrre nettstedets funksjonalitet.", "Følg gjeldende lokale og internasjonale lover."] },
    { "title": "Endringer i Vilkår", "content": ["Nettstedet forbeholder seg retten til å endre disse vilkårene når som helst. Fortsatt bruk av nettstedet etter endringer utgjør aksept av de nye vilkårene."] },
    { "title": "Oppsigelsesklausul", "content": ["Nettstedet kan avslutte eller suspendere brukerens tilgang uten forhåndsvarsel ved brudd på disse vilkårene eller av annen grunn som administrasjonen finner passende."] },
    { "title": "Governing Law", "content": ["Disse vilkårene styres av lovene i jurisdiksjonen der nettstedet hovedsakelig opererer, uavhengig av prinsipper om lovkonflikt."] }

  ],
  tools: {
    textToSpeech: "Tekst til tale",
    translate: "Oversett",
    topicMap: "Emnekart",
    notes: "Mine notater",
    wikipal: "Spør Wikipal",
    watchChanges: "Følg endringer",
    saveArticle: "Lagre artikkel",
    saved: "Lagret",
    shortUrl: "Kort lenke",
    citePage: "Siter denne siden",
    QRCode: "QR-kode",
    DownloadPDF: "Last ned som PDF",
    printPage: "Skriv ut denne siden",
    pageInfo: "Sideinformasjon",
  },
  language: {
    searchMessage: "Søk språk...",
    selectLanguage: "Velg språk",
    description: "Velg ditt foretrukne språk for å vise denne artikkelen.",
    notFound: "Ingen språk funnet som samsvarer med"
  },
  bias: {
    heading: "Hva er en bias?",
    explanation: "En bias er en tendens til å støtte eller favorisere et bestemt politisk syn, parti eller idé. Det kan påvirke hvordan en person tolker hendelser, velger informasjon og presenterer ideer. Når en forfatter har en politisk bias, kan det påvirke deres perspektiv ved å påvirke hvilke fakta de fremhever, hvordan de beskriver personer eller saker, og hvilke konklusjoner de trekker. Som et resultat kan skrivingen deres gjenspeile deres personlige overbevisninger fremfor et helt nøytralt eller balansert synspunkt.",
    socialist: "Sosialistisk",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konservativ",
    nationalist: "Nasjonalistisk",
    title: "Lesebias",
  },
  termsAndConditions: 'Vilkår og betingelser',
  close: 'Lukk',
  common: {
    loadingPerspective: 'Laster perspektiv...',
    fetchingUserInfo: 'Henter brukerinformasjon...',
    home: 'Hjem',
    about: 'Om',
    help: 'Hjelp',
    search: 'Søk',
    searchPlaceholder: 'Søk på Alternipedia...',
    login: 'Logg inn',
    logout: 'Logg ut',
    signUp: 'Registrer deg',
    profile: 'Profil',
    settings: 'Innstillinger',
    language: 'Språk',
    theme: 'Tema',
    comingSoon: 'Alternipedia kommer snart!',
    stayTuned: 'Hold deg oppdatert.',
    exampleArticle: 'Eksempelartikkel:',
  },
  navigation: {
    aboutUs: 'Om oss',
    currentEvents: 'Aktuelle hendelser',
    randomArticle: 'Tilfeldig artikkel',
    help: 'Hjelp',
  },
  footer: {
    pleaseLogin: 'Logg inn for å bruke denne funksjonen.',
    text: {
      "part1": "Teksten er tilgjengelig under",
      "part2": "Creative Commons Navngivelse-DelPåSammeVilkår 4.0 Internasjonal Lisens",
      "part3": "; tilleggsvilkår kan gjelde. Ved å bruke dette nettstedet godtar du",
      "part4": "Vilkår og betingelser",
      "part5": "og",
      "part6": "Personvernregler",
      "part7": ". Alternipedia er et åpen kildekode non-profit prosjekt."
    },
    license: 'Lisens',
    terms: 'Vilkår',
    privacy: 'Personvern',
    contact: 'Kontakt',
    disclaimers: 'Ansvarsfraskrivelser',
    codeOfConduct: 'Adferdskodeks',
    statistics: 'Statistikk',
    cookieStatement: 'Cookie-erklæring',
    developers: 'Utviklere',
  },
  notFound: {
    title: '404',
    heading: 'Side ikke funnet',
    message: "Beklager, vi kunne ikke finne siden du leter etter. Siden kan ha blitt fjernet eller lenken kan være feil.",
    goHome: 'Gå til startsiden',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Bli PRO',
    upgradePrompt: 'Oppgrader for å låse opp premiumfunksjoner',
    title: 'Kunnskap er makt, Forsterk din.',
    month: 'måned',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Les alt på Alternipedia',
        basicTheme: 'Bruk grunnleggende tema-tilpasning',
        saveArticles: 'Lagre artikler for senere lesing',
      },
      buttonText: 'Din plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alt i Alternipedia, pluss:',
      features: {
        customThemes: 'Bruk Alternipedia med dine favoritttemaer, farger, oppsett og skrifttyper',
        notes: 'Ta notater, administrer og eksporter dem fra hele Alternipedia',
        advancedSearch: 'Avanserte søkeresultater',
        semanticSearch: 'Semantisk søk med kraften av AI',
        aiAssistant: 'Få tilgang til WikiPal, din Alternipedia AI-assistent',
        topicMaps: 'Bedre emneundersøkelser med Emnekart',
        profileCustomization: 'Flere tilpasningsalternativer for profil',
        aiTranslation: 'AI-oversettelse for enhver side',
        appSupport: 'Kontinuerlig støtte i Alternipedia-appen',
      },
      buttonText: 'Oppgrader nå',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Denne artikkelen ble opprettet av fellesskapsmedlemmer for å tilby et nasjonalistisk perspektiv som fokuserer på nasjoners rett til selvbestemmelse og kulturell identitet.',
      socialist: 'Denne artikkelen ble opprettet av fellesskapsmedlemmer for å tilby et sosialistisk perspektiv som fokuserer på sosial rettferdighet, likhet og arbeidstakerrettigheter.',
      liberal: 'Denne artikkelen ble opprettet av fellesskapsmedlemmer for å tilby et liberalt perspektiv som fokuserer på individuell frihet, menneskerettigheter og sosial fremgang.',
      conservative: 'Denne artikkelen ble opprettet av fellesskapsmedlemmer for å tilby et konservativt perspektiv som fokuserer på tradisjon, stabilitet og familieværdier.',
      wikipedia: {
        part1: 'Denne artikkelen ble opprettet av fellesskapsmedlemmer for å tilby et upartisk perspektiv som fokuserer på rettferdig informasjon og data.',
        part2: 'Se Wikipedia →',
      }
    },
    lastEdited: 'Sist redigert',
    tools: 'Verktøy',
    close: 'Lukk',
    notFoundHeader: 'Wikipedia-artikkelen ble ikke funnet',
    notFoundText: 'Vi kunne ikke finne følgende Wikipedia-artikkel:',
    searchWikipediaText: 'Søk på Wikipedia',
    content: 'Innhold',
    article: 'Artikkel',
    discussion: 'Diskusjon',
    read: 'Les',
    edit: 'Rediger',
    history: 'Historikk'
  }
};

// Polish dictionary
const pl: Dictionary = {
  unauthorised: {
    heading: 'Dostęp zabroniony',
    message: 'Nie masz uprawnień do przeglądania tej strony. Sprawdź, czy jesteś zalogowany lub skontaktuj się z pomocą.'
  },
  blockedAd: {
    part1: 'Wygląda na to, że używasz bloker reklam. Wyłącz go, aby wesprzeć naszą stronę — lub',
    part2: 'zaktualizuj do PRO',
    part3: 'aby korzystać z doświadczenia bez reklam.'
  },
  metadata: {
    description: 'Edukacyjna wiki zaprojektowana, aby przedstawiać różne perspektywy na wiedzę i pomysły.',
    wikipedia: {  
      part1: 'Odkryj Alternipedię',
      part2: '—— Różne perspektywy i pomysły.',
    },
    conservative: {  
      part1: 'Konserwatywna perspektywa',
      part2: '- Tradycja, stabilność i wolny rynek.',
    },
    nationalist: {    
      part1: 'Nacjonalistyczna perspektywa',
      part2: '- Suwerenne państwa i tradycyjne kultury.', 
    },
    socialist: {
      part1: 'Socjalistyczna perspektywa',
      part2: '- Sprawiedliwość społeczna, równość i prawa pracowników.',  
    },
    liberal: {  
      part1: 'Liberałna perspektywa',
      part2: '- Wolność jednostki, prawa człowieka i wolny rynek.',
    },
  },
  accept: 'Akceptuj',
  reject: 'Odrzuć',
  cookieMessage: 'My i nasi partnerzy używamy plików cookie do personalizacji reklam, mierzenia wydajności i udostępniania funkcji społecznościowych. Kliknij Akceptuj, aby zezwolić na spersonalizowane reklamy, lub Odrzuć, aby je odrzucić. Zobacz naszą Politykę prywatności, aby uzyskać więcej informacji.',
  login: {
    title: 'Zaloguj się',
    google: 'Kontynuuj z Google',
    facebook: 'Kontynuuj z Facebook',
    x: 'Kontynuuj z X',
    microsoft: 'Kontynuuj z Microsoft',
    policy: "Logując się, zgadzasz się na nasze Warunki usługi i Politykę prywatności.",
  },
  userMenu: {
    login: "Zaloguj się",
    contributions: "Wkład",
    savedArticles: "Zapisane artykuły",
    preferences: "Ustawienia",
    logout: "Wyloguj się",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long' }),
    "title": "Polityka prywatności",
    "lastUpdatedText": "Ostatnia aktualizacja:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Witamy w Alternipedia — edukacyjnej wiki stworzonej, aby prezentować różne perspektywy na wiedzę i pomysły. Cenimy Twoją prywatność i zobowiązujemy się chronić Twoje dane osobowe. Niniejsza polityka wyjaśnia, jakie informacje zbieramy, jak je wykorzystujemy i jakie masz prawa."
      }
    ],
    "sections": [
      {
        "title": "Informacje, które zbieramy",
        "content": [
          {
            "type": "list",
            "items": [
              "Informacje o koncie: Gdy logujesz się za pomocą dostawcy OAuth (np. Google lub Meta), otrzymujemy Twoje imię i nazwisko, adres e-mail oraz zdjęcie profilowe (jeśli dostępne).",
              "Informacje o płatnościach: Jeśli zdecydujesz się dokonać płatności lub darowizny, Stripe bezpiecznie przetwarza transakcje. Nigdy nie przechowujemy ani nie widzimy numerów Twojej karty kredytowej.",
              "Dane analityczne: Używamy Vercel Analytics, aby zrozumieć ogólne wzorce korzystania, np. które strony są popularne i jak działa nasza strona. Dane te są zagregowane i nie pozwalają na identyfikację osoby.",
              "Informacje techniczne: Podczas odwiedzania naszej strony możemy automatycznie odbierać standardowe dane logowania, takie jak typ przeglądarki, urządzenie i adres IP, aby utrzymać bezpieczeństwo i funkcjonalność.",
              "Adsense: Korzystamy z Google Adsense, aby wyświetlać reklamy na naszej stronie. Adsense może używać plików cookie do wyświetlania spersonalizowanych reklam na podstawie historii przeglądania w tej lub innych witrynach."
            ]
          }
        ]
      },
      {
        "title": "Jak wykorzystujemy Twoje informacje",
        "content": [
          {
            "type": "list",
            "items": [
              "Obsługa i ulepszanie platformy Alternipedia",
              "Uwierzytelnianie użytkowników i zarządzanie kontami",
              "Bezpieczne przetwarzanie płatności przez Stripe",
              "Monitorowanie wydajności i niezawodności strony",
              "Odpowiadanie na zapytania lub prośby użytkowników"
            ]
          },
          {
            "type": "paragraph",
            "text": "Nie sprzedajemy, nie wypożyczamy ani nie handlujemy Twoimi danymi osobowymi."
          }
        ]
      },
      {
        "title": "Ciasteczka i śledzenie",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia nie używa ciasteczek reklamowych ani śledzących."
          },
          {
            "type": "paragraph",
            "text": "Używamy tylko niezbędnych ciasteczek wymaganych do logowania i działania strony."
          }
        ]
      },
      {
        "title": "Przechowywanie danych i bezpieczeństwo",
        "content": [
          {
            "type": "paragraph",
            "text": "Twoje dane są przechowywane w bezpieczny sposób przy użyciu standardowej w branży metody szyfrowania i infrastruktury hostingowej."
          },
          {
            "type": "paragraph",
            "text": "Podejmujemy rozsądne kroki w celu ochrony informacji przed utratą, niewłaściwym użyciem lub nieautoryzowanym dostępem."
          }
        ]
      },
      {
        "title": "Twoje prawa",
        "content": [
          {
            "type": "list",
            "items": [
              "Dostęp do swoich danych osobowych lub żądanie ich kopii",
              "Korekta lub usunięcie informacji, które posiadamy na Twój temat",
              "Wycofanie zgody lub zamknięcie konta"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "Akceptacja Warunków", "content": ["Korzystając z tej witryny i ją odwiedzając, użytkownicy zgadzają się przestrzegać niniejszych Warunków Usługi i być nimi związani. Użytkownicy, którzy nie zgadzają się z tymi warunkami, powinni natychmiast zaprzestać korzystania z witryny."] },
  { "title": "Obowiązki Konta Użytkownika", "content": ["Użytkownicy są odpowiedzialni za zachowanie poufności danych swojego konta. Wszelkie działania prowadzone na koncie użytkownika są wyłączną odpowiedzialnością właściciela konta. Użytkownicy powinni niezwłocznie powiadomić administratorów witryny o wszelkim nieautoryzowanym dostępie do konta."] },
  { "title": "Ograniczenie Odpowiedzialności", "content": ["Witryna udostępnia treści 'takie, jakie są', bez żadnych gwarancji. Właściciele witryny nie ponoszą odpowiedzialności za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, następcze lub karne szkody wynikające z interakcji użytkowników z platformą."] },
  { "title": "Wytyczne dotyczące Zachowania Użytkowników", "content": ["Nie przesyłaj treści szkodliwych ani złośliwych, które mogą zaszkodzić witrynie lub jej użytkownikom.", "Szanuj prawa innych użytkowników.", "Unikaj działań, które mogą zakłócić funkcjonowanie witryny.", "Przestrzegaj obowiązujących przepisów prawa lokalnego i międzynarodowego."] },
  { "title": "Zmiany Warunków", "content": ["Witryna zastrzega sobie prawo do zmiany niniejszych warunków w dowolnym momencie. Kontynuacja korzystania z witryny po wprowadzeniu zmian oznacza akceptację nowych warunków."] },
  { "title": "Klauzula Rozwiązania", "content": ["Witryna może zakończyć lub zawiesić dostęp użytkownika bez wcześniejszego powiadomienia w przypadku naruszenia tych warunków lub z innego powodu uznanego za stosowny przez administrację."] },
  { "title": "Prawo Właściwe", "content": ["Niniejsze warunki podlegają prawu jurysdykcji, w której witryna jest głównie prowadzona, bez względu na zasady kolizji praw."] }
  ],
  tools: {
    textToSpeech: "Tekst na mowę",
    translate: "Tłumacz",
    topicMap: "Mapa tematów",
    notes: "Moje notatki",
    wikipal: "Zapytaj Wikipal",
    watchChanges: "Obserwuj zmiany",
    saveArticle: "Zapisz artykuł",
    saved: "Zapisano",
    shortUrl: "Krótki link",
    citePage: "Cytuj tę stronę",
    QRCode: "Kod QR",
    DownloadPDF: "Pobierz jako PDF",
    printPage: "Wydrukuj tę stronę",
    pageInfo: "Informacje o stronie",
  },
  termsAndConditions: 'Warunki i zasady',
  close: 'Zamknij',
  language: {
    searchMessage: "Szukaj języków...",
    selectLanguage: "Wybierz język",
    description: "Wybierz preferowany język, aby wyświetlić ten artykuł.",
    notFound: "Nie znaleziono języków pasujących do"
  },
  bias: {
    heading: "Czym jest stronniczość?",
    explanation: "Stronniczość to tendencja do wspierania lub faworyzowania określonego poglądu politycznego, partii lub idei. Może to wpływać na sposób, w jaki dana osoba interpretuje wydarzenia, wybiera informacje i prezentuje pomysły. Gdy autor ma polityczną stronniczość, może to wpływać na jego perspektywę, wpływając na to, które fakty podkreśla, jak opisuje ludzi lub kwestie oraz jakie wnioski wyciąga. W rezultacie ich pisanie może odzwierciedlać ich osobiste przekonania, a nie całkowicie neutralny lub zrównoważony punkt widzenia.",
    socialist: "Socjalistyczny",
    liberal: "Liberalny",
    wikipedia: "Wikipedia",
    conservative: "Konserwatywny",
    nationalist: "Nacjonalistyczny",
    title: "Stronniczość czytania",
  },
  common: {
    loadingPerspective: 'Ładowanie perspektywy...',
    fetchingUserInfo: 'Pobieranie informacji o użytkowniku...',
    home: 'Strona główna',
    about: 'O nas',
    help: 'Pomoc',
    search: 'Szukaj',
    searchPlaceholder: 'Szukaj w Alternipedia...',
    login: 'Zaloguj się',
    logout: 'Wyloguj się',
    signUp: 'Zarejestruj się',
    profile: 'Profil',
    settings: 'Ustawienia',
    language: 'Język',
    theme: 'Motyw',
    comingSoon: 'Alternipedia już wkrótce!',
    stayTuned: 'Bądź na bieżąco.',
    exampleArticle: 'Przykładowy artykuł:',
  },
  navigation: {
    aboutUs: 'O nas',
    currentEvents: 'Bieżące wydarzenia',
    randomArticle: 'Losowy artykuł',
    help: 'Pomoc',
  },
  footer: {
    pleaseLogin: 'Zaloguj się, aby skorzystać z tej funkcji.',
    text: {
      "part1": "Tekst dostępny jest na",
      "part2": "Licencji Creative Commons Uznanie Autorstwa-NaTychSamychWarunkach 4.0 Międzynarodowej",
      "part3": "; mogą obowiązywać dodatkowe warunki. Korzystając z tej strony, zgadzasz się na",
      "part4": "Warunki użytkowania",
      "part5": "i",
      "part6": "Politykę prywatności",
      "part7": ". Alternipedia to projekt open-source non-profit."
    },
    license: 'Licencja',
    terms: 'Warunki',
    privacy: 'Prywatność',
    contact: 'Kontakt',
    disclaimers: 'Zastrzeżenia',
    codeOfConduct: 'Kodeks postępowania',
    statistics: 'Statystyki',
    cookieStatement: 'Oświadczenie o plikach cookie',
    developers: 'Deweloperzy',
  },
  notFound: {
    title: '404',
    heading: 'Strona nie została znaleziona',
    message: "Przepraszamy, nie możemy znaleźć strony, której szukasz. Strona mogła zostać usunięta lub link może być nieprawidłowy.",
    goHome: 'Przejdź do strony głównej',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Przejdź na PRO',
    upgradePrompt: 'Ulepsz, aby odblokować funkcje premium',
    title: 'Wiedza to potęga, Wzmocnij swoją.',
    month: 'miesiąc',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Przeczytaj całe Alternipedia',
        basicTheme: 'Użyj podstawowego motywu',
        saveArticles: 'Zapisz artykuły do przeczytania później',
      },
      buttonText: 'Twój plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Wszystko w Alternipedia, plus:',
      features: {
        customThemes: 'Używaj Alternipedia w swoich ulubionych motywach, kolorach, układach i czcionkach',
        notes: 'Twórz notatki, zarządzaj nimi i eksportuj je z całego Alternipedia',
        advancedSearch: 'Zaawansowane wyniki wyszukiwania',
        semanticSearch: 'Wyszukiwanie semantyczne z mocą AI',
        aiAssistant: 'Uzyskaj dostęp do WikiPal, swojego asystenta AI Alternipedia',
        topicMaps: 'Lepsze badania tematów z Mapami Tematów',
        profileCustomization: 'Więcej opcji personalizacji profilu',
        aiTranslation: 'Tłumaczenie AI dla dowolnej strony',
        appSupport: 'Ciągłe wsparcie w aplikacji Alternipedia',
      },
      buttonText: 'Ulepsz teraz',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Ten artykuł został stworzony przez członków społeczności, aby przedstawić nacjonalistyczną perspektywę, koncentrującą się na prawie narodów do samostanowienia i tradycyjnej kulturze.',
      socialist: 'Ten artykuł został stworzony przez członków społeczności, aby przedstawić socjalistyczną perspektywę, koncentrującą się na sprawiedliwości społecznej, równości i prawach pracowników.',
      liberal: 'Ten artykuł został stworzony przez członków społeczności, aby przedstawić liberalną perspektywę, koncentrującą się na wolności jednostki, prawach człowieka i postępie społecznym.',
      conservative: 'Ten artykuł został stworzony przez członków społeczności, aby przedstawić konserwatywną perspektywę, koncentrującą się na tradycji, stabilności i wartościach rodzinnych.',
      wikipedia: {
        part1: 'Ten artykuł został stworzony przez członków społeczności, aby przedstawić bezstronną perspektywę, koncentrującą się na sprawiedliwych informacjach i danych.',
        part2: ' Zobacz Wikipedia →',
      }
    },
    lastEdited: 'Ostatnia edycja',
    tools: 'Narzędzia',
    content: 'Zawartość',
    close: 'Zamknij',
    notFoundHeader: 'Nie znaleziono artykułu Wikipedii',
    notFoundText: 'Nie mogliśmy znaleźć następującego artykułu Wikipedii:',
    searchWikipediaText: 'Szukaj w Wikipedii',
    article: 'Artykuł',
    discussion: 'Dyskusja',
    read: 'Czytaj',
    edit: 'Edytuj',
    history: 'Historia'
  }
};

// Thai dictionary
const th: Dictionary = {
  unauthorised: {
    heading: 'ปฏิเสธการเข้าถึง',
    message: 'คุณไม่ได้รับอนุญาตให้เข้าถึงหน้านี้ โปรดตรวจสอบว่าคุณได้ลงชื่อเข้าใช้แล้ว หรือ ติดต่อฝ่ายสนับสนุน.'
  },
  blockedAd: {
    part1: 'ดูเหมือนว่าคุณกำลังใช้ตัวบล็อกโฆษณา โปรดปิดใช้งานเพื่อสนับสนุนไซต์ของเรา — หรือ',
    part2: 'อัปเกรดเป็น PRO',
    part3: 'เพื่อประสบการณ์ปราศจากโฆษณา.'
  },
  metadata: {
    description: 'วิกิการศึกษาออกแบบมาเพื่อแสดงมุมมองที่หลากหลายเกี่ยวกับความรู้และแนวคิด',
    wikipedia: {  
      part1: 'ค้นพบ Alternipedia',
      part2: '—— มุมมองและแนวคิดที่หลากหลาย',
    },
    conservative: {  
      part1: 'มุมมองแบบอนุรักษ์นิยม',
      part2: '- ประเพณี ความมั่นคง และตลาดเสรี',
    },
    nationalist: {    
      part1: 'มุมมองแบบชาตินิยม',
      part2: '- ชาติอธิปไตยและวัฒนธรรมดั้งเดิม',  
    },
    liberal: {  
      part1: 'มุมมองแบบเสรีนิยม',
      part2: '- เสรีภาพของบุคคล สิทธิมนุษยชน และตลาดเสรี',
    },
    socialist: {
      part1: 'มุมมองแบบสังคมนิยม',
      part2: '- ความยุติธรรมทางสังคม ความเท่าเทียม และสิทธิของคนงาน',  
    },
  },
  accept: 'ยอมรับ',
  reject: 'ปฏิเสธ',
  cookieMessage: 'เราและพันธมิตรของเราใช้คุกกี้เพื่อปรับแต่งโฆษณา วัดประสิทธิภาพ และให้ฟีเจอร์ทางสังคม คลิก ยอมรับ เพื่ออนุญาตโฆษณาที่ปรับแต่ง หรือ ปฏิเสธ เพื่อปฏิเสธ ดูนโยบายความเป็นส่วนตัวของเราสำหรับข้อมูลเพิ่มเติม',
  login: {
    title: 'เข้าสู่ระบบ',
    google: 'ดำเนินการต่อด้วย Google',
    facebook: 'ดำเนินการต่อด้วย Facebook',
    x: 'ดำเนินการต่อด้วย X',
    microsoft: 'ดำเนินการต่อด้วย Microsoft',
    policy: "โดยการเข้าสู่ระบบ คุณยอมรับข้อกำหนดในการให้บริการและนโยบายความเป็นส่วนตัวของเรา",
  },
  userMenu: {
    login: "เข้าสู่ระบบ",
    contributions: "การมีส่วนร่วม",
    savedArticles: "บทความที่บันทึกไว้",
    preferences: "การตั้งค่า",
    logout: "ออกจากระบบ",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'long' }),
    "title": "นโยบายความเป็นส่วนตัว",
    "lastUpdatedText": "อัปเดตล่าสุด:",
    "intro": [
      {
        "type": "paragraph",
        "text": "ยินดีต้อนรับสู่ Alternipedia — วิกิการศึกษาออกแบบมาเพื่อแสดงมุมมองที่หลากหลายเกี่ยวกับความรู้และแนวคิด เราให้ความสำคัญกับความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายนี้อธิบายว่าเรารวบรวมอะไร ใช้อย่างไร และสิทธิของคุณ"
      }
    ],
    "sections": [
      {
        "title": "ข้อมูลที่เรารวบรวม",
        "content": [
          {
            "type": "list",
            "items": [
              "ข้อมูลบัญชี: เมื่อคุณเข้าสู่ระบบผ่านผู้ให้บริการ OAuth (เช่น Google หรือ Meta) เราจะได้รับชื่อ อีเมล และรูปโปรไฟล์ของคุณ (ถ้ามี)",
              "ข้อมูลการชำระเงิน: หากคุณเลือกที่จะชำระเงินหรือบริจาค Stripe จะประมวลผลการทำธุรกรรมอย่างปลอดภัย เราไม่เคยเก็บหรือดูหมายเลขบัตรเครดิตของคุณ",
              "ข้อมูลวิเคราะห์: เราใช้ Vercel Analytics เพื่อทำความเข้าใจรูปแบบการใช้งานทั่วไป เช่น หน้าเว็บที่ได้รับความนิยมและประสิทธิภาพของเว็บไซต์ ข้อมูลเหล่านี้ถูกรวมและไม่ระบุตัวตนของคุณ",
              "ข้อมูลทางเทคนิค: เมื่อคุณเยี่ยมชมเว็บไซต์ เราอาจได้รับข้อมูลบันทึกมาตรฐานโดยอัตโนมัติ เช่น ประเภทเบราว์เซอร์ อุปกรณ์ และที่อยู่ IP เพื่อรักษาความปลอดภัยและแก้ไขปัญหา",
              "Adsense: เราใช้ Google Adsense เพื่อแสดงโฆษณาบนเว็บไซต์ของเรา Adsense อาจใช้คุกกี้เพื่อแสดงโฆษณาที่ปรับแต่งตามประวัติการท่องเว็บของคุณในเว็บไซต์นี้หรือเว็บไซต์อื่นๆ"
            ]
          }
        ]
      },
      {
        "title": "วิธีการใช้ข้อมูลของคุณ",
        "content": [
          {
            "type": "list",
            "items": [
              "ดำเนินการและปรับปรุงแพลตฟอร์ม Alternipedia",
              "ตรวจสอบผู้ใช้และจัดการบัญชี",
              "ประมวลผลการชำระเงินอย่างปลอดภัยผ่าน Stripe",
              "ตรวจสอบประสิทธิภาพและความน่าเชื่อถือของเว็บไซต์",
              "ตอบคำถามหรือคำขอของผู้ใช้"
            ]
          },
          {
            "type": "paragraph",
            "text": "เราไม่ขาย ให้เช่า หรือแลกเปลี่ยนข้อมูลส่วนบุคคลของคุณ"
          }
        ]
      },
      {
        "title": "คุกกี้และการติดตาม",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ไม่ใช้คุกกี้สำหรับโฆษณาหรือการติดตาม"
          },
          {
            "type": "paragraph",
            "text": "เราใช้เฉพาะคุกกี้ที่จำเป็นสำหรับการเข้าสู่ระบบและฟังก์ชันของเว็บไซต์เท่านั้น"
          }
        ]
      },
      {
        "title": "การจัดเก็บข้อมูลและความปลอดภัย",
        "content": [
          {
            "type": "paragraph",
            "text": "ข้อมูลของคุณถูกเก็บอย่างปลอดภัยด้วยการเข้ารหัสมาตรฐานอุตสาหกรรมและโครงสร้างพื้นฐานโฮสติ้ง"
          },
          {
            "type": "paragraph",
            "text": "เราดำเนินมาตรการที่เหมาะสมเพื่อปกป้องข้อมูลของคุณจากการสูญหาย การใช้ผิดวัตถุประสงค์ หรือการเข้าถึงโดยไม่ได้รับอนุญาต"
          }
        ]
      },
      {
        "title": "สิทธิของคุณ",
        "content": [
          {
            "type": "list",
            "items": [
              "เข้าถึงหรือขอสำเนาข้อมูลส่วนบุคคลของคุณ",
              "แก้ไขหรือลบข้อมูลที่เรามีเกี่ยวกับคุณ",
              "ถอนความยินยอมหรือปิดบัญชีของคุณ"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "การยอมรับข้อกำหนด", "content": ["การเข้าถึงและใช้เว็บไซต์นี้ ผู้ใช้ตกลงที่จะปฏิบัติตามและผูกพันตามข้อกำหนดในการให้บริการนี้ ผู้ใช้ที่ไม่เห็นด้วยกับข้อกำหนดนี้ควรหยุดใช้เว็บไซต์ทันที"] },
    { "title": "ความรับผิดชอบบัญชีผู้ใช้", "content": ["ผู้ใช้มีหน้าที่ในการรักษาความลับของข้อมูลประจำตัวบัญชี กิจกรรมใด ๆ ที่เกิดขึ้นภายใต้บัญชีของผู้ใช้เป็นความรับผิดชอบของเจ้าของบัญชีเพียงผู้เดียว ผู้ใช้ต้องแจ้งผู้ดูแลเว็บไซต์ทันทีหากมีการเข้าถึงบัญชีโดยไม่ได้รับอนุญาต"] },
    { "title": "ข้อจำกัดความรับผิด", "content": ["เว็บไซต์ให้เนื้อหา 'ตามสภาพ' โดยไม่มีการรับประกันใด ๆ เจ้าของเว็บไซต์ไม่รับผิดชอบต่อความเสียหายโดยตรง ทางอ้อม บังเอิญ ตามผลลัพธ์ หรือค่าปรับใด ๆ ที่เกิดจากการโต้ตอบของผู้ใช้กับแพลตฟอร์ม"] },
    { "title": "แนวทางการประพฤติของผู้ใช้", "content": ["ห้ามอัปโหลดเนื้อหาที่เป็นอันตรายหรือมีเจตนาร้ายซึ่งอาจทำร้ายเว็บไซต์หรือผู้ใช้", "เคารพสิทธิของผู้ใช้อื่น", "หลีกเลี่ยงกิจกรรมที่อาจรบกวนการทำงานของเว็บไซต์", "ปฏิบัติตามกฎหมายท้องถิ่นและระหว่างประเทศที่เกี่ยวข้อง"] },
    { "title": "การแก้ไขข้อกำหนด", "content": ["เว็บไซต์สงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ตลอดเวลา การใช้งานเว็บไซต์ต่อหลังจากมีการเปลี่ยนแปลงถือเป็นการยอมรับข้อกำหนดใหม่"] },
    { "title": "ข้อกำหนดการสิ้นสุด", "content": ["เว็บไซต์อาจยุติหรือระงับการเข้าถึงของผู้ใช้โดยไม่ต้องแจ้งล่วงหน้า หากมีการละเมิดข้อกำหนดเหล่านี้ หรือด้วยเหตุผลอื่นใดที่ผู้ดูแลเห็นว่าเหมาะสม"] },
    { "title": "กฎหมายที่ใช้บังคับ", "content": ["ข้อกำหนดเหล่านี้อยู่ภายใต้กฎหมายของเขตอำนาจที่เว็บไซต์ดำเนินงานเป็นหลัก โดยไม่คำนึงถึงหลักการข้อพิพาททางกฎหมาย"] }

  ],
  tools: {
    textToSpeech: "ข้อความเป็นเสียงพูด",
    translate: "แปล",
    topicMap: "แผนที่หัวข้อ",
    notes: "บันทึกของฉัน",
    wikipal: "ถามวิกิพาล",
    watchChanges: "ติดตามการเปลี่ยนแปลง",
    saveArticle: "บันทึกบทความ",
    saved: "บันทึกแล้ว",
    shortUrl: "ลิงก์สั้น",
    citePage: "อ้างอิงหน้านี้",
    QRCode: "คิวอาร์โค้ด",
    DownloadPDF: "ดาวน์โหลดเป็น PDF",
    printPage: "พิมพ์หน้านี้",
    pageInfo: "ข้อมูลหน้า",
  },
  language: {
    searchMessage: "ค้นหาภาษา...",
    selectLanguage: "เลือกภาษา",
    description: "เลือกภาษาที่คุณต้องการสำหรับการดูบทความนี้",
    notFound: "ไม่พบภาษาที่ตรงกับ"
  },
  bias: {
    heading: "อคติคืออะไร?",
    explanation: "อคติคือแนวโน้มที่จะสนับสนุนหรือชอบมุมมองทางการเมือง พรรคการเมือง หรือความคิดเฉพาะ มันสามารถกำหนดวิธีที่บุคคลตีความเหตุการณ์ เลือกข้อมูล และนำเสนอความคิด เมื่อผู้เขียนมีอคติทางการเมือง มันอาจส่งผลต่อมุมมองของพวกเขาโดยมีผลต่อข้อเท็จจริงที่พวกเขาเน้น วิธีที่พวกเขาอธิบายบุคคลหรือประเด็น และข้อสรุปที่พวกเขาสรุป ผลที่ตามมา การเขียนของพวกเขาอาจสะท้อนความเชื่อส่วนตัวมากกว่ามุมมองที่เป็นกลางหรือสมดุลอย่างสมบูรณ์",
    socialist: "สังคมนิยม",
    liberal: "เสรีนิยม",
    wikipedia: "วิกิพีเดีย",
    conservative: "อนุรักษ์นิยม",
    nationalist: "ชาตินิยม",
    title: "อคติในการอ่าน",
  },
  common: {
    loadingPerspective: 'กำลังโหลดมุมมอง...',
    fetchingUserInfo: 'กำลังดึงข้อมูลผู้ใช้...',
    home: 'หน้าแรก',
    about: 'เกี่ยวกับ',
    help: 'ช่วยเหลือ',
    search: 'ค้นหา',
    searchPlaceholder: 'ค้นหาใน Alternipedia...',
    login: 'เข้าสู่ระบบ',
    logout: 'ออกจากระบบ',
    signUp: 'สมัครสมาชิก',
    profile: 'โปรไฟล์',
    settings: 'การตั้งค่า',
    language: 'ภาษา',
    theme: 'ธีม',
    comingSoon: 'Alternipedia กำลังจะเปิดตัวเร็วๆ นี้!',
    stayTuned: 'โปรดติดตาม',
    exampleArticle: 'ตัวอย่างบทความ:',
  },
  termsAndConditions: 'ข้อกำหนดและเงื่อนไข',
  close: 'ปิด',
  navigation: {
    aboutUs: 'เกี่ยวกับเรา',
    currentEvents: 'เหตุการณ์ปัจจุบัน',
    randomArticle: 'บทความสุ่ม',
    help: 'ช่วยเหลือ',
  },
  footer: {
    pleaseLogin: 'โปรดเข้าสู่ระบบเพื่อใช้ฟีเจอร์นี้',
    text: {
      "part1": "ข้อความสามารถใช้งานได้ภายใต้",
      "part2": "สัญญาอนุญาตครีเอทีฟคอมมอนส์ อ้างอิง-สืบทอด 4.0 ระหว่างประเทศ",
      "part3": "; อาจมีข้อกำหนดเพิ่มเติม การใช้เว็บไซต์นี้ถือว่าคุณยอมรับ",
      "part4": "ข้อกำหนดและเงื่อนไข",
      "part5": "และ",
      "part6": "นโยบายความเป็นส่วนตัว", // TOOD: verify translation
      "part7": "Alternipedia เป็นโครงการโอเพนซอร์สแบบไม่แสวงหากำไร"
    },
    license: 'ใบอนุญาต',
    terms: 'เงื่อนไข',
    privacy: 'ความเป็นส่วนตัว',
    contact: 'ติดต่อ',
    disclaimers: 'ข้อจำกัดความรับผิดชอบ',
    codeOfConduct: 'จรรยาบรรณ',
    statistics: 'สถิติ',
    cookieStatement: 'คำชี้แจงคุกกี้',
    developers: 'นักพัฒนา',
  },
  notFound: {
    title: '404',
    heading: 'ไม่พบหน้า',
    message: "ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา หน้าอาจถูกลบออกหรือลิงก์อาจไม่ถูกต้อง",
    goHome: 'ไปที่หน้าแรก',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'อัปเกรดเป็น PRO',
    upgradePrompt: 'อัปเกรดเพื่อปลดล็อกฟีเจอร์พรีเมียม',
    title: 'ความรู้คือพลัง เพิ่มพลังของคุณ',
    month: 'เดือน',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'อ่านทั้งหมดใน Alternipedia',
        basicTheme: 'ใช้การปรับแต่งธีมพื้นฐาน',
        saveArticles: 'บันทึกบทความเพื่ออ่านภายหลัง',
      },
      buttonText: 'แผนของคุณ',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'ทุกอย่างใน Alternipedia, รวมถึง:',
      features: {
        customThemes: 'ใช้ Alternipedia ในธีม สี เลย์เอาต์ และฟอนต์ที่คุณชื่นชอบ',
        notes: 'จดบันทึก จัดการ และส่งออกจากทั้ง Alternipedia',
        advancedSearch: 'ผลลัพธ์การค้นหาขั้นสูง',
        semanticSearch: 'ค้นหาด้วยความหมายด้วยพลัง AI',
        aiAssistant: 'เข้าถึง WikiPal ผู้ช่วย AI ของ Alternipedia',
        topicMaps: 'วิจัยหัวข้อได้ดีกว่าด้วยแผนที่หัวข้อ',
        profileCustomization: 'ตัวเลือกปรับแต่งโปรไฟล์มากขึ้น',
        aiTranslation: 'แปล AI สำหรับทุกหน้า',
        appSupport: 'การสนับสนุนอย่างต่อเนื่องในแอป Alternipedia',
      },
      buttonText: 'อัปเกรดตอนนี้',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'บทความนี้สร้างขึ้นโดยสมาชิกชุมชนเพื่อแสดงมุมมองแบบชาตินิยม โดยเน้นที่สิทธิของชาติในการกำหนดตนเองและวัฒนธรรมดั้งเดิม',
      socialist: 'บทความนี้สร้างขึ้นโดยสมาชิกชุมชนเพื่อแสดงมุมมองแบบสังคมนิยม โดยเน้นที่ความยุติธรรมทางสังคม ความเท่าเทียม และสิทธิของคนงาน',
      liberal: 'บทความนี้สร้างขึ้นโดยสมาชิกชุมชนเพื่อแสดงมุมมองแบบเสรีนิยม โดยเน้นที่เสรีภาพของบุคคล สิทธิมนุษยชน และความก้าวหน้าทางสังคม',
      conservative: 'บทความนี้สร้างขึ้นโดยสมาชิกชุมชนเพื่อแสดงมุมมองแบบอนุรักษ์นิยม โดยเน้นที่ประเพณี ความมั่นค ง และค่านิยมของครอบครัว',
      wikipedia: {
        part1: 'บทความนี้สร้างขึ้นโดยสมาชิกชุมชนเพื่อแสดงมุมมองที่เป็นกลาง โดยเน้นที่ข้อมูลและข้อเท็จจริงที่ยุติธรรม',
        part2: ' ดู Wikipedia →',  
      }
    },
    lastEdited: 'แก้ไขล่าสุด',
    tools: 'เครื่องมือ',
    close: 'ปิด',
    notFoundHeader: 'ไม่พบบทความวิกิพีเดีย',
    notFoundText: 'เราไม่พบบทความวิกิพีเดียต่อไปนี้:',
    searchWikipediaText: 'ค้นหาบนวิกิพีเดีย',
    content: 'เนื้อหา',
    article: 'บทความ',
    discussion: 'อภิปราย',
    read: 'อ่าน',
    edit: 'แก้ไข',
    history: 'ประวัติ'
  }
};

// Ukrainian dictionary
const uk: Dictionary = {
  unauthorised: {
    heading: 'Доступ заборонено',
    message: 'Ви не маєте дозволу на доступ до цієї сторінки. Перевірте, чи увійшли ви в систему, або зверніться до служби підтримки.'
  },
  blockedAd: {
    part1: 'Схоже, ви використовуєте блокувальник реклами. Будь ласка, вимкніть його, щоб підтримати наш сайт — або',
    part2: 'оновіть до PRO',
    part3: 'для перегляду без реклами.'
  },
  metadata: {
    description: 'Освітня вікі, створена для представлення різних поглядів на знання та ідеї',
    wikipedia: {  
      part1: 'Відкрийте для себе Alternipedia',
      part2: '— різноманітні погляди та ідеї',
    },
    conservative: {  
      part1: 'Консервативний погляд',
      part2: '- традиції, стабільність і вільний ринок',
    },
    nationalist: {    
      part1: 'Націоналістичний погляд',   
      part2: '— суверенітет нації та традиційна культура',  
    },
    liberal: {
      part1: 'Ліберальний погляд',
      part2: '— індивідуальні права, свобода слова та соціальна справедливість',
    },
    socialist: {
      part1: 'Соціалістичний погляд',
      part2: '— соціальна справедливість, рівність і права працівників',  
    },
  },
  accept: 'Прийняти',
  reject: 'Відхилити',
  cookieMessage: 'Ми та наші партнери використовуємо файли cookie для персоналізації реклами, вимірювання ефективності та надання соціальних функцій. Натисніть Прийняти, щоб дозволити персоналізовану рекламу, або Відхилити, щоб відмовитися. Деталі — у нашій Політиці конфіденційності.',
  login: {
    title: 'Увійти',
    google: 'Продовжити з Google',
    facebook: 'Продовжити з Facebook',
    x: 'Продовжити з X',
    microsoft: 'Продовжити з Microsoft',
    policy: "Увійшовши, ви погоджуєтесь з нашими Умовами обслуговування та Політикою конфіденційності.",
  },
  userMenu: {
    login: "Увійти",
    contributions: "Внесок",
    savedArticles: "Збережені статті",
    preferences: "Налаштування",
    logout: "Вийти",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long' }),
    "title": "Політика конфіденційності",
    "lastUpdatedText": "Останнє оновлення:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Ласкаво просимо до Alternipedia — освітньої вікі, створеної для представлення різних поглядів на знання та ідеї. Ми цінуємо вашу конфіденційність і прагнемо захищати вашу особисту інформацію. Ця політика пояснює, яку інформацію ми збираємо, як ми її використовуємо та які у вас є права."
      }
    ],
    "sections": [
      {
        "title": "Інформація, яку ми збираємо",
        "content": [
          {
            "type": "list",
            "items": [
              "Інформація про обліковий запис: Коли ви входите через провайдера OAuth (наприклад, Google або Meta), ми отримуємо ваше ім’я, електронну пошту та зображення профілю (якщо доступно).",
              "Інформація про платежі: Якщо ви вирішите здійснити оплату або пожертвування, Stripe безпечно обробляє транзакції. Ми ніколи не зберігаємо і не бачимо дані вашої кредитної картки.",
              "Аналітичні дані: Ми використовуємо Vercel Analytics, щоб зрозуміти загальні шаблони використання, наприклад, які сторінки популярні та як працює наш сайт. Дані агреговані та не ідентифікують вас особисто.",
              "Технічна інформація: Під час відвідування сайту ми можемо автоматично отримувати стандартні дані журналів, такі як тип браузера, пристрій і IP-адреса, щоб підтримувати безпеку та функціональність.",
              "Adsense: Ми використовуємо Google Adsense для показу реклами на нашому сайті. Adsense може використовувати файли cookie для показу реклами, адаптованої до вашої історії перегляду на цьому чи інших сайтах."
            ]
          }
        ]
      },
      {
        "title": "Як ми використовуємо вашу інформацію",
        "content": [
          {
            "type": "list",
            "items": [
              "Керування та покращення платформи Alternipedia",
              "Аутентифікація користувачів та управління обліковими записами",
              "Безпечна обробка платежів через Stripe",
              "Моніторинг продуктивності та надійності сайту",
              "Відповіді на запити або питання користувачів"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ми не продаємо, не здаємо в оренду та не торгуємо вашими персональними даними."
          }
        ]
      },
      {
        "title": "Файли cookie та відстеження",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia не використовує рекламні або відстежувальні файли cookie."
          },
          {
            "type": "paragraph",
            "text": "Ми використовуємо лише необхідні файли cookie для входу та функціональності сайту."
          }
        ]
      },
      {
        "title": "Зберігання даних та безпека",
        "content": [
          {
            "type": "paragraph",
            "text": "Ваші дані зберігаються безпечно з використанням галузевих стандартів шифрування та хостингової інфраструктури."
          },
          {
            "type": "paragraph",
            "text": "Ми вживаємо розумних заходів для захисту вашої інформації від втрати, неправомірного використання або несанкціонованого доступу."
          }
        ]
      },
      {
        "title": "Ваші права",
        "content": [
          {
            "type": "list",
            "items": [
              "Доступ або запит копії ваших персональних даних",
              "Виправлення або видалення інформації, яку ми зберігаємо про вас",
              "Відкликання згоди або закриття облікового запису"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Прийняття умов", "content": ["Отримуючи доступ до цього вебсайту та використовуючи його, користувачі погоджуються дотримуватися цих Умов обслуговування та бути зобов’язаними ними. Користувачі, які не погоджуються з цими умовами, повинні негайно припинити використання вебсайту."] },
    { "title": "Обов’язки користувацького облікового запису", "content": ["Користувачі несуть відповідальність за збереження конфіденційності своїх облікових даних. Усі дії, що відбуваються під обліковим записом користувача, є виключною відповідальністю власника облікового запису. Користувачі повинні негайно повідомляти адміністраторів вебсайту про будь-який несанкціонований доступ до облікового запису."] },
    { "title": "Обмеження відповідальності", "content": ["Вебсайт надає контент 'як є' без жодних гарантій. Власники вебсайту не несуть відповідальності за прямі, непрямі, випадкові, наслідкові або штрафні збитки, що виникають із взаємодії користувачів з платформою."] },
    { "title": "Керівні принципи поведінки користувачів", "content": ["Не завантажуйте шкідливий або зловмисний контент, який може зашкодити вебсайту або його користувачам.", "Поважайте права інших користувачів.", "Уникайте дій, які можуть порушити функціональність вебсайту.", "Дотримуйтесь чинного місцевого та міжнародного законодавства."] },
    { "title": "Зміни умов", "content": ["Вебсайт залишає за собою право змінювати ці умови в будь-який час. Продовження використання вебсайту після змін означає прийняття нових умов."] },
    { "title": "Положення про припинення", "content": ["Вебсайт може припинити або призупинити доступ користувача без попереднього повідомлення у випадку порушення цих умов або з будь-якої іншої причини, яку адміністрація вважає доречною."] },
    { "title": "Застосовне право", "content": ["Ці умови регулюються законами юрисдикції, де вебсайт переважно функціонує, без урахування принципів конфлікту законів."] }

  ],
  tools: {
    textToSpeech: "Текст у мовлення",
    translate: "Перекласти",
    topicMap: "Карта тем",
    notes: "Мої нотатки",
    wikipal: "Запитати Wikipal",
    watchChanges: "Стежити за змінами",
    saveArticle: "Зберегти статтю",
    saved: "Збережено",
    shortUrl: "Коротке посилання",
    citePage: "Цитувати цю сторінку",
    QRCode: "QR-код",
    DownloadPDF: "Завантажити як PDF",
    printPage: "Роздрукувати цю сторінку",
    pageInfo: "Інформація про сторінку",
  },
  language: {
    searchMessage: "Пошук мов...",
    selectLanguage: "Вибрати мову",
    description: "Виберіть бажану мову для перегляду цієї статті.",
    notFound: "Не знайдено мов, що відповідають"
  },
  termsAndConditions: 'Умови та положення',
  close: 'Закрити',
  bias: {
    heading: "Що таке упередження?",
    explanation: "Упередження - це тенденція підтримувати або віддавати перевагу певній політичній точці зору, партії чи ідеї. Воно може впливати на те, як людина інтерпретує події, вибирає інформацію та представляє ідеї. Коли автор має політичне упередження, це може вплинути на їхню перспективу, впливаючи на те, які факти вони підкреслюють, як вони описують людей чи питання, і які висновки вони роблять. В результаті їхнє письмо може відображати їхні особисті переконання, а не повністю нейтральну або збалансовану точку зору.",
    socialist: "Соціаліст",
    liberal: "Ліберал",
    wikipedia: "Вікіпедія",
    conservative: "Консерватор",
    nationalist: "Націоналіст",
    title: "Упередження читання",
  },
  common: {
    loadingPerspective: 'Завантаження перспективи...',
    fetchingUserInfo: 'Отримання інформації про користувача...',
    home: 'Головна',
    about: 'Про нас',
    help: 'Довідка',
    search: 'Пошук',
    searchPlaceholder: 'Шукати в Alternipedia...',
    login: 'Увійти',
    logout: 'Вийти',
    signUp: 'Зареєструватися',
    profile: 'Профіль',
    settings: 'Налаштування',
    language: 'Мова',
    theme: 'Тема',
    comingSoon: 'Alternipedia незабаром!',
    stayTuned: 'Слідкуйте за оновленнями.',
    exampleArticle: 'Приклад статті:',
  },
  navigation: {
    aboutUs: 'Про нас',
    currentEvents: 'Поточні події',
    randomArticle: 'Випадкова стаття',
    help: 'Довідка',
  },
  footer: {
    pleaseLogin: 'Увійдіть, щоб скористатися цією функцією.',
    text: {
      "part1": "Текст доступний за",
      "part2": "Ліцензією Creative Commons Attribution-ShareAlike 4.0 International",
      "part3": "; можуть застосовуватися додаткові умови. Використовуючи цей сайт, ви погоджуєтеся з",
      "part4": "Умовами",
      "part5": "та",
      "part6": "Політикою конфіденційності",
      "part7": ". Alternipedia – це відкритий проект без комерційної мети."
    },
    license: 'Ліцензія',
    terms: 'Умови',
    privacy: 'Конфіденційність',
    contact: 'Контакт',
    disclaimers: 'Відмови від відповідальності',
    codeOfConduct: 'Кодекс поведінки',
    statistics: 'Статистика',
    cookieStatement: 'Заява про файли cookie',
    developers: 'Розробники',
  },
  notFound: {
    title: '404',
    heading: 'Сторінку не знайдено',
    message: "Вибачте, ми не змогли знайти сторінку, яку ви шукаєте. Сторінка могла бути видалена або посилання може бути неправильним.",
    goHome: 'Перейти на головну',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Перейти на PRO',
    upgradePrompt: 'Оновіть, щоб розблокувати преміум-функції',
    title: 'Знання – це сила, Посиліть свою.',
    month: 'місяць',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Читати все в Alternipedia',
        basicTheme: 'Використовувати базову тему',
        saveArticles: 'Зберігати статті для пізнішого читання',
      },
      buttonText: 'Ваш план',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Все в Alternipedia, плюс:',
      features: {
        customThemes: 'Використовуйте Alternipedia у ваших улюблених темах, кольорах, макетах і шрифтах',
        notes: 'Робіть нотатки, керуйте ними та експортуйте їх з усього Alternipedia',
        advancedSearch: 'Розширені результати пошуку',
        semanticSearch: 'Семантичний пошук за допомогою AI',
        aiAssistant: 'Отримайте доступ до WikiPal, вашого AI-помічника Alternipedia',
        topicMaps: 'Кращі дослідження тем за допомогою тематичних карт',
        profileCustomization: 'Більше можливостей налаштування профілю',
        aiTranslation: 'AI-переклад для будь-якої сторінки',
        appSupport: 'Постійна підтримка в додатку Alternipedia',
      },
      buttonText: 'Оновити зараз',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Цю статтю створено членами спільноти, щоб представити націоналістичну точку зору, зосереджену на праві нації на самовизначення та традиційну культуру.',
      socialist: 'Цю статтю створено членами спільноти, щоб представити соціалістичну точку зору, зосереджену на соціальній справедливості, рівності та правах працівників.',
      liberal: 'Цю статтю створено членами спільноти, щоб представити ліберальну точку зору, зосереджену на правах людини, свободі слова та соціальному прогресі.',
      conservative: 'Цю статтю створено членами спільноти, щоб представити консервативну точку зору, зосереджену на традиціях, стабільності та сімейних цінностях.',
      wikipedia: {
        part1: 'Цю статтю створено членами спільноти, щоб представити нейтральну точку зору, зосереджену на справедливій інформації та фактах.',
        part2: ' Див. Вікіпедію →',  
      }
    },
    lastEdited: 'Останнє редагування',
    close: 'Закрити',
    notFoundHeader: 'Статтю Вікіпедії не знайдено',
    notFoundText: 'Ми не змогли знайти таку статтю Вікіпедії:',
    searchWikipediaText: 'Шукати у Вікіпедії',
    tools: 'Інструменти',
    content: 'Зміст',
    article: 'Стаття',
    discussion: 'Обговорення',
    read: 'Читати',
    edit: 'Редагувати',
    history: 'Історія'
  }
};

// Romanian dictionary
const ro: Dictionary = {
  unauthorised: {
    heading: 'Acces interzis',
    message: 'Nu sunteți autorizat să accesați această pagină. Verificați dacă sunteți autentificat sau contactați asistența.'
  },
  blockedAd: {
    part1: 'Se pare că folosiți un blocator de reclame. Dezactivați-l pentru a susține site-ul nostru — sau',
    part2: 'faceți upgrade la PRO',
    part3: 'pentru o experiență fără reclame.'
  },
  metadata: {
    description: 'Un wiki educațional conceput pentru a prezenta perspective diverse asupra cunoștințelor și ideilor',
    wikipedia: {  
      part1: 'Descoperiți Alternipedia',
      part2: '— perspective și idei diverse',
    },
    conservative: {  
      part1: 'Perspectiva conservatoare',
      part2: '— tradiție, stabilitate și piață liberă',
    },
    nationalist: {    
      part1: 'Perspectiva naționalistă',   
      part2: '— suveranitate națională și cultură tradițională',  
    },  
    liberal: {
      part1: 'Perspectiva liberală',
      part2: '— drepturi individuale, libertate de exprimare și justiție socială',
    },
    socialist: {
      part1: 'Perspectiva socialistă',
      part2: '— justiție socială, egalitate și drepturile muncitorilor',  
    },
  },
  accept: 'Acceptă',
  reject: 'Refuză',
  cookieMessage: 'Noi și partenerii noștri folosim cookie-uri pentru a personaliza reclamele, a măsura performanța și a oferi funcții sociale. Faceți clic pe Acceptă pentru a permite reclame personalizate sau pe Refuză pentru a le respinge. Consultați Politica noastră de confidențialitate pentru mai multe informații.',
  login: {
    title: 'Conectare',
    google: 'Continuă cu Google',
    facebook: 'Continuă cu Facebook',
    x: 'Continuă cu X',
    microsoft: 'Continuă cu Microsoft',
    policy: "Prin conectare, sunteți de acord cu Termenii și condițiile noastre și Politica de confidențialitate.",
  },
  userMenu: {
    login: "Conectare",
    contributions: "Contribuții",
    savedArticles: "Articole salvate",
    preferences: "Preferințe",
    logout: "Deconectare",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('ro-RO', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('ro-RO', { year: 'numeric', month: 'long' }),
    "title": "Politica de confidențialitate",
    "lastUpdatedText": "Ultima actualizare:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Bine ați venit la Alternipedia — un wiki educațional conceput pentru a prezenta perspective diverse asupra cunoștințelor și ideilor. Apreciem confidențialitatea dvs. și ne angajăm să vă protejăm informațiile personale. Această politică explică ce colectăm, cum utilizăm datele și care sunt drepturile dvs."
      }
    ],
    "sections": [
      {
        "title": "Informațiile pe care le colectăm",
        "content": [
          {
            "type": "list",
            "items": [
              "Informații despre cont: Când vă autentificați printr-un furnizor OAuth (cum ar fi Google sau Meta), primim numele dvs., adresa de e-mail și imaginea de profil (dacă este disponibilă).",
              "Informații de plată: Dacă alegeți să efectuați o plată sau o donație, Stripe procesează tranzacțiile în siguranță. Nu stocăm și nu vedem niciodată numerele cardului dvs. de credit.",
              "Date analitice: Folosim Vercel Analytics pentru a înțelege tiparele generale de utilizare, de exemplu, care pagini sunt populare și cum performează site-ul. Aceste date sunt agregate și nu vă identifică personal.",
              "Informații tehnice: Când vizitați site-ul nostru, putem primi automat date de jurnal standard, cum ar fi tipul browserului, dispozitivul și adresa IP, pentru a menține securitatea și funcționalitatea.",
              "Adsense: Utilizăm Google Adsense pentru a afișa reclame pe site-ul nostru. Adsense poate utiliza cookie-uri pentru a afișa reclame adaptate istoricului dvs. de navigare pe acest site sau pe alte site-uri."
            ]
          }
        ]
      },
      {
        "title": "Cum folosim informațiile dvs.",
        "content": [
          {
            "type": "list",
            "items": [
              "Operarea și îmbunătățirea platformei Alternipedia",
              "Autentificarea utilizatorilor și gestionarea conturilor",
              "Procesarea sigură a plăților prin Stripe",
              "Monitorizarea performanței și fiabilității site-ului",
              "Răspunsul la întrebările sau solicitările utilizatorilor"
            ]
          },
          {
            "type": "paragraph",
            "text": "Nu vindem, închiriem sau schimbăm datele dvs. personale."
          }
        ]
      },
      {
        "title": "Cookie-uri și urmărire",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia nu utilizează cookie-uri de publicitate sau urmărire."
          },
          {
            "type": "paragraph",
            "text": "Folosim doar cookie-urile esențiale necesare pentru sesiuni de autentificare și funcționalitatea site-ului."
          }
        ]
      },
      {
        "title": "Stocarea datelor și securitatea",
        "content": [
          {
            "type": "paragraph",
            "text": "Datele dvs. sunt stocate în siguranță folosind criptare standard din industrie și infrastructură de hosting."
          },
          {
            "type": "paragraph",
            "text": "Luăm măsuri rezonabile pentru a proteja informațiile dvs. împotriva pierderii, utilizării abuzive sau accesului neautorizat."
          }
        ]
      },
      {
        "title": "Drepturile dvs.",
        "content": [
          {
            "type": "list",
            "items": [
              "Accesul sau solicitarea unei copii a datelor dvs. personale",
              "Corectarea sau ștergerea informațiilor pe care le deținem despre dvs.",
              "Retragerea consimțământului sau închiderea contului dvs."
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "Acceptarea Termenilor", "content": ["Accesând și utilizând acest site web, utilizatorii sunt de acord să respecte și să fie obligați de acești Termeni de Serviciu. Utilizatorii care nu sunt de acord cu acești termeni ar trebui să înceteze imediat utilizarea site-ului web."] },
  { "title": "Responsabilitățile Contului Utilizatorului", "content": ["Utilizatorii sunt responsabili pentru menținerea confidențialității datelor contului lor. Orice activitate care are loc în cadrul contului unui utilizator este responsabilitatea exclusivă a deținătorului contului. Utilizatorii trebuie să informeze imediat administratorii site-ului web despre orice acces neautorizat la cont."] },
  { "title": "Limitarea Răspunderii", "content": ["Site-ul web oferă conținut 'ca atare', fără niciun fel de garanție. Proprietarii site-ului nu sunt responsabili pentru daune directe, indirecte, accidentale, consecințe sau punitive care apar din interacțiunile utilizatorilor cu platforma."] },
  { "title": "Ghiduri de Conduită a Utilizatorului", "content": ["Nu încărcați conținut dăunător sau rău intenționat care ar putea dăuna site-ului sau utilizatorilor săi.", "Respectați drepturile celorlalți utilizatori.", "Evitați activitățile care ar putea perturba funcționalitatea site-ului.", "Respectați legile locale și internaționale aplicabile."] },
  { "title": "Modificări ale Termenilor", "content": ["Site-ul își rezervă dreptul de a modifica acești termeni în orice moment. Continuarea utilizării site-ului după modificări constituie acceptarea noilor termeni."] },
  { "title": "Clauza de Încheiere", "content": ["Site-ul poate întrerupe sau suspenda accesul utilizatorului fără notificare prealabilă în cazul încălcării acestor termeni sau pentru orice alt motiv considerat adecvat de către administrație."] },
  { "title": "Legea Aplicabilă", "content": ["Acești termeni sunt guvernați de legile jurisdicției în care site-ul este operat în principal, fără a ține cont de principiile conflictului de legi."] }
  ],
  tools: {
    textToSpeech: "Text către vorbire",
    translate: "Traduce",
    topicMap: "Hartă de subiecte",
    notes: "Notele mele",
    wikipal: "Întreabă Wikipal",
    watchChanges: "Urmărește modificările",
    saveArticle: "Salvează articolul",
    saved: "Salvat",
    shortUrl: "Link scurt",
    citePage: "Citează această pagină",
    QRCode: "Cod QR",
    DownloadPDF: "Descarcă ca PDF",
    printPage: "Imprimă această pagină",
    pageInfo: "Informații despre pagină",
  },
  termsAndConditions: 'Termeni și condiții',
  close: 'Închide',
  language: {
    searchMessage: "Căutare limbi...",
    selectLanguage: "Alegeți limba",
    description: "Selectați limba preferată pentru vizualizarea acestui articol.",
    notFound: "Nu au fost găsite limbi care să corespundă"
  },
  bias: {
    heading: "Ce este o părtinire?",
    explanation: "O părtinire este o tendință de a susține sau favoriza un anumit punct de vedere politic, partid sau idee. Poate afecta modul în care o persoană interpretează evenimentele, selectează informațiile și prezintă ideile. Când un autor are o părtinire politică, aceasta poate influența perspectiva lor, afectând ce fapte subliniază, cum descrie oamenii sau problemele și ce concluzii trage. Ca rezultat, scrisul lor poate reflecta convingerile lor personale, mai degrabă decât un punct de vedere complet neutru sau echilibrat.",
    socialist: "Socialist",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Conservator",
    nationalist: "Naționalist",
    title: "Părtinire în lectură",
  },
  common: {
    loadingPerspective: 'Se încarcă perspectiva...',
    fetchingUserInfo: 'Se preiau informațiile utilizatorului...',
    home: 'Acasă',
    about: 'Despre',
    help: 'Ajutor',
    search: 'Căutare',
    searchPlaceholder: 'Caută în Alternipedia...',
    login: 'Conectare',
    logout: 'Deconectare',
    signUp: 'Înregistrare',
    profile: 'Profil',
    settings: 'Setări',
    language: 'Limbă',
    theme: 'Temă',
    comingSoon: 'Alternipedia vine în curând!',
    stayTuned: 'Rămâi la curent.',
    exampleArticle: 'Articol exemplu:',
  },
  navigation: {
    aboutUs: 'Despre noi',
    currentEvents: 'Evenimente curente',
    randomArticle: 'Articol aleatoriu',
    help: 'Ajutor',
  },
  footer: {
    pleaseLogin: 'Vă rugăm să vă conectați pentru a utiliza această funcție.',
    text: {
      "part1": "Textul este disponibil sub",
      "part2": "Licența Creative Commons Atribuire-Distribuire în condiții identice 4.0 Internațional",
      "part3": "; se pot aplica termeni suplimentari. Prin utilizarea acestui site, sunteți de acord cu",
      "part4": "Termenii și Condițiile",
      "part5": "și",
      "part6": "Politica de Confidențialitate",
      "part7": ". Alternipedia este un proiect open-source non-profit."
    },
    license: 'Licență',
    terms: 'Termeni',
    privacy: 'Confidențialitate',
    contact: 'Contact',
    disclaimers: 'Declinări de responsabilitate',
    codeOfConduct: 'Cod de conduită',
    statistics: 'Statistici',
    cookieStatement: 'Declarație privind cookie-urile',
    developers: 'Dezvoltatori',
  },
  notFound: {
    title: '404',
    heading: 'Pagina nu a fost găsită',
    message: "Ne pare rău, nu am putut găsi pagina pe care o căutați. Pagina ar fi putut fi eliminată sau linkul ar putea fi incorect.",
    goHome: 'Mergi la pagina principală',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Deveniți PRO',
    upgradePrompt: 'Faceți upgrade pentru a debloca funcții premium',
    title: 'Cunoașterea este putere, Amplificați-vă.',
    month: 'lună',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Citiți totul din Alternipedia',
        basicTheme: 'Folosiți personalizarea temei de bază',
        saveArticles: 'Salvați articolele pentru a le citi mai târziu',
      },
      buttonText: 'Planul tău',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Totul din Alternipedia, plus:',
      features: {
        customThemes: 'Folosiți Alternipedia în temele, culorile, layout-urile și fonturile preferate',
        notes: 'Luați notițe, gestionați-le și exportați-le din întreaga Alternipedia',
        advancedSearch: 'Rezultate de căutare avansate',
        semanticSearch: 'Căutare semantică cu puterea AI',
        aiAssistant: 'Accesați WikiPal, asistentul dvs. AI Alternipedia',
        topicMaps: 'Cercetare mai bună a subiectelor cu Hărți de subiect',
        profileCustomization: 'Mai multe opțiuni de personalizare a profilului',
        aiTranslation: 'Traducere AI pentru orice pagină',
        appSupport: 'Suport continuu în aplicația Alternipedia',
      },
      buttonText: 'Faceți upgrade acum',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Acest articol a fost creat de membri ai comunității pentru a prezenta o perspectivă naționalistă, concentrată pe dreptul națiunii la autodeterminare și cultura tradițională.',
      socialist: 'Acest articol a fost creat de membri ai comunității pentru a prezenta o perspectivă socialistă, concentrată pe justiție socială, egalitate și drepturile muncitorilor.',  
      liberal: 'Acest articol a fost creat de membri ai comunității pentru a prezenta o perspectivă liberală, concentrată pe drepturile individuale, libertatea de exprimare și progresul social.',
      conservative: 'Acest articol a fost creat de membri ai comunității pentru a prezenta o perspectivă conservatoare, concentrată pe tradiție, stabilitate și valorile familiei.',
      wikipedia: {
        part1: 'Acest articol a fost creat de membri ai comunității pentru a prezenta o perspectivă neutră, concentrată pe informații și fapte corecte.', 
        part2: 'Vezi Wikipedia →',
      }
    },
    lastEdited: 'Ultima editare',
    tools: 'Instrumente',
    content: 'Conținut',
    close: 'Închide',
    notFoundHeader: 'Articolul Wikipedia nu a fost găsit',
    notFoundText: 'Nu am putut găsi următorul articol Wikipedia:',
    searchWikipediaText: 'Caută pe Wikipedia',
    article: 'Articol',
    discussion: 'Discuție',
    read: 'Citește',
    edit: 'Editează',
    history: 'Istoric'
  }
};

// Czech dictionary
const cs: Dictionary = {
  unauthorised: {
    heading: 'Přístup odepřen',
    message: 'Nemáte oprávnění k přístupu na tuto stránku. Zkontrolujte, zda jste přihlášeni, nebo kontaktujte podporu.'
  },
  blockedAd: {
    part1: 'Zdá se, že používáte blokátor reklam. Deaktivujte ho prosím, aby jste podpořili náš web — nebo',
    part2: 'přejděte na PRO',
    part3: 'pro prostředí bez reklam.'
  },
  metadata: {
    description: 'Vzdělávací wiki vytvořená k prezentaci různých pohledů na znalosti a nápady',
    wikipedia: {  
      part1: 'Objevte Alternipedia',
      part2: '— různé perspektivy a nápady',
    },
    conservative: {  
      part1: 'Konzervativní perspektiva',
      part2: '— tradice, stabilita a volný trh',
    },
    nationalist: {    
      part1: 'Nacionalistická perspektiva',   
      part2: '— národní suverenita a tradiční kultura',  
    },
    socialist: {
      part1: 'Socialistická perspektiva',
      part2: '— spravedlnost, rovnost a práva pracovníků',
    },
    liberal: {
      part1: 'Liberální perspektiva',
      part2: '— individuální práva, svoboda projevu a sociální spravedlnost',
    },
  },
  accept: 'Přijmout',
  reject: 'Odmítnout',
  cookieMessage: 'My a naši partneři používáme cookies k personalizaci reklam, měření výkonu a poskytování sociálních funkcí. Klikněte na Přijmout pro povolení personalizovaných reklam nebo Odmítnout pro jejich zablokování. Další informace najdete v našem prohlášení o ochraně soukromí.',
  login: {
    title: 'Přihlásit se',
    google: 'Pokračovat s Googlem',
    facebook: 'Pokračovat s Facebookem',
    x: 'Pokračovat s X',
    microsoft: 'Pokračovat s Microsoftem',
    policy: "Přihlášením souhlasíte s našimi Podmínkami služby a Zásadami ochrany osobních údajů.",
  },
  userMenu: {
    login: "Přihlásit se",
    contributions: "Příspěvky",
    savedArticles: "Uložené články",
    preferences: "Nastavení",
    logout: "Odhlásit se",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long' }),
    "title": "Zásady ochrany osobních údajů",
    "lastUpdatedText": "Naposledy aktualizováno:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Vítejte na Alternipedia — vzdělávací wiki vytvořené k prezentaci různých pohledů na znalosti a nápady. Vážíme si vašeho soukromí a zavazujeme se chránit vaše osobní údaje. Tyto zásady vysvětlují, jaké informace shromažďujeme, jak je používáme a jaká máte práva."
      }
    ],
    "sections": [
      {
        "title": "Informace, které shromažďujeme",
        "content": [
          {
            "type": "list",
            "items": [
              "Informace o účtu: Při přihlášení přes poskytovatele OAuth (např. Google nebo Meta) získáváme vaše jméno, e-mailovou adresu a profilový obrázek (pokud je k dispozici).",
              "Platební informace: Pokud se rozhodnete provést platbu nebo dar, Stripe bezpečně zpracuje transakce. Nikdy neukládáme ani nevidíme čísla vaší kreditní karty.",
              "Analytická data: Používáme Vercel Analytics k pochopení obecných vzorců používání, například které stránky jsou populární a jak funguje náš web. Data jsou agregována a neidentifikují vás osobně.",
              "Technické informace: Při návštěvě našeho webu můžeme automaticky získat standardní logovací data, jako je typ prohlížeče, zařízení a IP adresa, abychom zajistili bezpečnost a funkčnost.",
              "Adsense: Používáme Google Adsense k zobrazování reklam na našem webu. Adsense může používat cookies k zobrazování reklam přizpůsobených vašemu prohlížecímu chování na tomto nebo jiných webech."
            ]
          }
        ]
      },
      {
        "title": "Jak používáme vaše informace",
        "content": [
          {
            "type": "list",
            "items": [
              "Provozovat a zlepšovat platformu Alternipedia",
              "Autentizovat uživatele a spravovat účty",
              "Bezpečně zpracovávat platby přes Stripe",
              "Monitorovat výkon a spolehlivost webu",
              "Odpovídat na dotazy a žádosti uživatelů"
            ]
          },
          {
            "type": "paragraph",
            "text": "Nepředáváme, neprodáváme ani nevyměňujeme vaše osobní údaje."
          }
        ]
      },
      {
        "title": "Cookies a sledování",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia nepoužívá reklamní ani sledovací cookies."
          },
          {
            "type": "paragraph",
            "text": "Používáme pouze nezbytné cookies potřebné pro přihlášení a funkčnost webu."
          }
        ]
      },
      {
        "title": "Ukládání dat a bezpečnost",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaše data jsou bezpečně ukládána pomocí průmyslových standardů šifrování a hostingové infrastruktury."
          },
          {
            "type": "paragraph",
            "text": "Podnikáme rozumné kroky k ochraně vašich informací před ztrátou, zneužitím nebo neoprávněným přístupem."
          }
        ]
      },
      {
        "title": "Vaše práva",
        "content": [
          {
            "type": "list",
            "items": [
              "Přístup k osobním údajům nebo požadavek na kopii",
              "Oprava nebo odstranění informací, které o vás uchováváme",
              "Odvolání souhlasu nebo uzavření účtu"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "Přijetí Podmínek", "content": ["Přístupem a používáním tohoto webu uživatelé souhlasí s dodržováním a zavázáním se těmito Podmínkami služby. Uživatelé, kteří s těmito podmínkami nesouhlasí, by měli okamžitě přestat web používat."] },
  { "title": "Odpovědnost Uživatelského Účtu", "content": ["Uživatelé jsou odpovědní za zachování důvěrnosti údajů svého účtu. Veškeré aktivity prováděné pod účtem uživatele jsou výhradní odpovědností vlastníka účtu. Uživatelé musí okamžitě informovat správce webu o jakémkoli neoprávněném přístupu k účtu."] },
  { "title": "Omezení Odpovědnosti", "content": ["Web poskytuje obsah 'jak je', bez jakýchkoli záruk. Majitelé webu nenesou odpovědnost za přímé, nepřímé, náhodné, následné nebo trestní škody vzniklé z interakcí uživatelů s platformou."] },
  { "title": "Pokyny pro Chování Uživatele", "content": ["Neposílejte škodlivý nebo škodící obsah, který by mohl poškodit web nebo jeho uživatele.", "Respektujte práva ostatních uživatelů.", "Vyvarujte se aktivit, které by mohly narušit funkčnost webu.", "Dodržujte platné místní a mezinárodní zákony."] },
  { "title": "Změny Podmínek", "content": ["Web si vyhrazuje právo tyto podmínky kdykoli změnit. Pokračující používání webu po změnách znamená přijetí nových podmínek."] },
  { "title": "Ukončovací Klauzule", "content": ["Web může ukončit nebo pozastavit přístup uživatele bez předchozího upozornění v případě porušení těchto podmínek nebo z jiného důvodu, který správa považuje za vhodný."] },
  { "title": "Rozhodné Právo", "content": ["Tyto podmínky se řídí zákony jurisdikce, ve které je web primárně provozován, bez ohledu na principy kolize zákonů."] }
  ],
  tools: {
    textToSpeech: "Text na řeč",
    translate: "Přeložit",
    topicMap: "Mapa témat",
    notes: "Moje poznámky",
    wikipal: "Zeptat se Wikipal",
    watchChanges: "Sledovat změny",
    saveArticle: "Uložit článek",
    saved: "Uloženo",
    shortUrl: "Krátký odkaz",
    citePage: "Citovat tuto stránku",
    QRCode: "QR kód",
    DownloadPDF: "Stáhnout jako PDF",
    printPage: "Vytisknout tuto stránku",
    pageInfo: "Informace o stránce",
  },
  termsAndConditions: 'Podmínky služby',
  close: 'Zavřít',
  language: {
    searchMessage: "Hledání jazyků...",
    selectLanguage: "Vyberte jazyk",
    description: "Vyberte si preferovaný jazyk pro zobrazení tohoto článku.",
    notFound: "Nebyly nalezeny žádné jazyky odpovídající"
  },
  bias: {
    heading: "Co je to předpojatost?",
    explanation: "Předpojatost je tendence podporovat nebo upřednostňovat určitý politický názor, stranu nebo myšlenku. Může ovlivnit způsob, jakým člověk interpretuje události, vybírá informace a prezentuje myšlenky. Když má autor politickou předpojatost, může to ovlivnit jeho perspektivu tím, že ovlivní, která fakta zdůrazňuje, jak popisuje lidi nebo problémy a jaké závěry činí. V důsledku toho jejich psaní může odrážet jejich osobní přesvědčení spíše než zcela neutrální nebo vyvážený pohled.",
    socialist: "Socialista",
    liberal: "Liberál",
    wikipedia: "Wikipedie",
    conservative: "Konzervativec",
    nationalist: "Nacionalista",
    title: "Předpojatost čtení",
  },
  common: {
    loadingPerspective: 'Načítání perspektivy...',
    fetchingUserInfo: 'Načítání informací o uživateli...',
    home: 'Domů',
    about: 'O nás',
    help: 'Nápověda',
    search: 'Hledat',
    searchPlaceholder: 'Hledat v Alternipedia...',
    login: 'Přihlásit se',
    logout: 'Odhlásit se',
    signUp: 'Registrovat se',
    profile: 'Profil',
    settings: 'Nastavení',
    language: 'Jazyk',
    theme: 'Téma',
    comingSoon: 'Alternipedia již brzy!',
    stayTuned: 'Zůstaňte naladěni.',
    exampleArticle: 'Příklad článku:',
  },
  navigation: {
    aboutUs: 'O nás',
    currentEvents: 'Aktuální události',
    randomArticle: 'Náhodný článek',
    help: 'Nápověda',
  },
  footer: {
    pleaseLogin: 'Přihlaste se, abyste mohli tuto funkci používat.',
    text: {
      "part1": "Text je dostupný pod",
      "part2": "Licencí Creative Commons Uveďte autora-Zachovejte licenci 4.0 Mezinárodní",
      "part3": "; mohou platit další podmínky. Používáním tohoto webu souhlasíte s",
      "part4": "Podmínkami",
      "part5": "a",
      "part6": "Zásadami ochrany osobních údajů",
      "part7": ". Alternipedia je open-source neziskový projekt."
    },
    license: 'Licence',
    terms: 'Podmínky',
    privacy: 'Soukromí',
    contact: 'Kontakt',
    disclaimers: 'Prohlášení',
    codeOfConduct: 'Kodex chování',
    statistics: 'Statistiky',
    cookieStatement: 'Prohlášení o cookies',
    developers: 'Vývojáři',
  },
  notFound: {
    title: '404',
    heading: 'Stránka nenalezena',
    message: "Omlouváme se, nemohli jsme najít stránku, kterou hledáte. Stránka mohla být odstraněna nebo odkaz může být nesprávný.",
    goHome: 'Přejít na domovskou stránku',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Přejít na PRO',
    upgradePrompt: 'Upgradujte pro odemknutí prémiových funkcí',
    title: 'Vědění je síla, Posilte tu svou.',
    month: 'měsíc',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Přečíst vše v Alternipedia',
        basicTheme: 'Použijte základní úpravy tématu',
        saveArticles: 'Ukládejte články k pozdějšímu přečtení',
      },
      buttonText: 'Váš plán',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Vše v Alternipedia, plus:',
      features: {
        customThemes: 'Použijte Alternipedia ve svých oblíbených tématech, barvách, rozvrženích a písmech',
        notes: 'Vytvářejte poznámky, spravujte je a exportujte z celé Alternipedia',
        advancedSearch: 'Pokročilé výsledky vyhledávání',
        semanticSearch: 'Sémantické vyhledávání s výkonem AI',
        aiAssistant: 'Získejte přístup k WikiPal, vašemu AI asistentovi Alternipedia',
        topicMaps: 'Lepší průzkum témat s mapami témat',
        profileCustomization: 'Více možností přizpůsobení profilu',
        aiTranslation: 'AI překlad pro libovolnou stránku',
        appSupport: 'Pokračující podpora v aplikaci Alternipedia',
      },
      buttonText: 'Upgradovat nyní',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Tento článek byl vytvořen členy komunity, aby představil nacionalistickou perspektivu, zaměřenou na právo národa na sebeurčení a tradiční kulturu.',
      socialist: 'Tento článek byl vytvořen členy komunity, aby představil socialistickou perspektivu, zaměřenou na sociální spravedlnost, rovnost a práva pracovníků.',
      liberal: 'Tento článek byl vytvořen členy komunity, aby představil liberální perspektivu, zaměřenou na individuální práva, svobodu slova a sociální pokrok.',
      conservative: 'Tento článek byl vytvořen členy komunity, aby představil konzervativní perspektivu, zaměřenou na tradici, stabilitu a rodinné hodnoty.',
      wikipedia: {
        part1: 'Tento článek byl vytvořen členy komunity, aby představil neutrální perspektivu, zaměřenou na přesné informace a fakta.',
        part2: 'Vezi Wikipedia →',
      }
    },
    lastEdited: 'Naposledy upraveno',
    tools: 'Nástroje',
    close: 'Zavřít',
    notFoundHeader: 'Článek Wikipedia nebyl nalezen',
    notFoundText: 'Nenašli jsme následující článek Wikipedia:',
    searchWikipediaText: 'Hledat na Wikipedii',
    content: 'Obsah',
    article: 'Článek',
    discussion: 'Diskuse',
    read: 'Číst',
    edit: 'Upravit',
    history: 'Historie'
  }
};

// Hungarian dictionary
const hu: Dictionary = {
  unauthorised: {
    heading: 'Hozzáférés megtagadva',
    message: 'Nincs jogosultsága ennek az oldalnak a megtekintéséhez. Ellenőrizze, hogy be van-e jelentkezve, vagy lépjen kapcsolatba a támogatással.'
  },
  blockedAd: {
    part1: 'Úgy tűnik, hirdetésblokkolót használsz. Kérjük, kapcsold ki, hogy támogathasd az oldalunkat — vagy',
    part2: 'frissíts PRO-ra',
    part3: 'egy reklámmentes élményért.'
  },
  metadata: {
    description: 'Egy oktatási wiki, amelyet különböző nézőpontok bemutatására terveztek a tudásról és az ötletekről',
    wikipedia: {  
      part1: 'Fedezze fel az Alternipediát',
      part2: '— különböző nézőpontok és ötletek',
    },
    conservative: {  
      part1: 'Konzervatív nézőpont',
      part2: '— hagyomány, stabilitás és szabad piac',
    },
    nationalist: {    
      part1: 'Nemzeti nézőpont',   
      part2: '— nemzeti szuverenitás és hagyományos kultúra',
    },
    liberal: {
      part1: 'Liberális nézőpont',
      part2: '— egyéni jogok, szólásszabadság és társadalmi igazságosság',
    },
    socialist: {
      part1: 'Szocialista nézőpont',
      part2: '— igazságosság, egyenlőség és munkási jogok',
    },
  },
  accept: 'Elfogad',
  reject: 'Elutasít',
  cookieMessage: 'Mi és partnereink cookie-kat használunk a hirdetések személyre szabásához, a teljesítmény méréséhez és a közösségi funkciók biztosításához. Kattintson az Elfogad gombra a személyre szabott hirdetések engedélyezéséhez, vagy az Elutasít gombra elutasításukhoz. További információkért tekintse meg Adatvédelmi irányelveinket.',
  login: {
    title: 'Bejelentkezés',
    google: 'Folytatás Google-lal',
    facebook: 'Folytatás Facebook-kal',
    x: 'Folytatás X-szel',
    microsoft: 'Folytatás Microsoft-tal',
    policy: "A bejelentkezéssel elfogadja a Szolgáltatási feltételeinket és az Adatvédelmi irányelveinket.",
  },
  userMenu: {
    login: "Bejelentkezés",
    contributions: "Hozzájárulások",
    savedArticles: "Mentett cikkek",
    preferences: "Beállítások",
    logout: "Kijelentkezés",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long' }),
    "title": "Adatvédelmi irányelvek",
    "lastUpdatedText": "Utolsó frissítés:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Üdvözöljük az Alternipedia-n — egy oktatási wiki, amelyet különböző nézőpontok bemutatására terveztek a tudásról és az ötletekről. Értékeljük a magánéletét, és elkötelezettek vagyunk a személyes adatai védelme mellett. Ez az irányelv elmagyarázza, milyen adatokat gyűjtünk, hogyan használjuk azokat, és milyen jogai vannak."
      }
    ],
    "sections": [
      {
        "title": "Az általunk gyűjtött információk",
        "content": [
          {
            "type": "list",
            "items": [
              "Fiókinformációk: Amikor OAuth szolgáltatóval jelentkezik be (például Google vagy Meta), megkapjuk a nevét, e-mail címét és profilképét (ha elérhető).",
              "Fizetési információk: Ha fizetést vagy adományt választ, a Stripe biztonságosan kezeli a tranzakciókat. Soha nem tároljuk vagy látjuk a hitelkártya adatait.",
              "Analitikai adatok: A Vercel Analytics-et használjuk az általános használati minták megértésére, például mely oldalak népszerűek és hogyan teljesít a weboldal. Ezek az adatok összesítettek, és nem azonosítják személyesen.",
              "Technikai információk: Amikor meglátogatja weboldalunkat, automatikusan kaphatunk szabványos naplóadatokat, például böngészőtípust, eszközt és IP-címet a biztonság és a működés fenntartása érdekében.",
              "Adsense: A Google Adsense-t használjuk hirdetések megjelenítésére weboldalunkon. Az Adsense sütiket használhat a hirdetések az Ön böngészési viselkedéséhez igazított megjelenítésére ezen vagy más webhelyeken."
            ]
          }
        ]
      },
      {
        "title": "Hogyan használjuk fel az információit",
        "content": [
          {
            "type": "list",
            "items": [
              "Az Alternipedia platform működtetése és fejlesztése",
              "A felhasználók hitelesítése és fiókok kezelése",
              "Biztonságos fizetések feldolgozása a Stripe segítségével",
              "A weboldal teljesítményének és megbízhatóságának figyelemmel kísérése",
              "Válaszadás a felhasználói kérdésekre és kérésekre"
            ]
          },
          {
            "type": "paragraph",
            "text": "Nem adjuk el, nem adjuk bérbe és nem kereskedünk a személyes adataival."
          }
        ]
      },
      {
        "title": "Sütik és nyomkövetés",
        "content": [
          {
            "type": "paragraph",
            "text": "Az Alternipedia nem használ hirdetési vagy nyomkövető sütiket."
          },
          {
            "type": "paragraph",
            "text": "Csak az alapvető sütiket használjuk, amelyek szükségesek a bejelentkezéshez és az oldal működéséhez."
          }
        ]
      },
      {
        "title": "Adattárolás és biztonság",
        "content": [
          {
            "type": "paragraph",
            "text": "Az adatait biztonságosan tároljuk iparági szabvány szerinti titkosítással és hosting infrastruktúrával."
          },
          {
            "type": "paragraph",
            "text": "Ésszerű lépéseket teszünk az adatok elvesztése, visszaélése vagy jogosulatlan hozzáférés ellen."
          }
        ]
      },
      {
        "title": "Az Ön jogai",
        "content": [
          {
            "type": "list",
            "items": [
              "Hozzáférés vagy másolat kérés a személyes adatairól",
              "Az információk javítása vagy törlése, amelyeket rólad tárolunk",
              "A hozzájárulás visszavonása vagy a fiók lezárása"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "A Feltételek Elfogadása", "content": ["A weboldal elérésével és használatával a felhasználók elfogadják, hogy betartják és kötelezőnek tartják ezeket a Szolgáltatási Feltételeket. Azoknak a felhasználóknak, akik nem értenek egyet ezekkel a feltételekkel, azonnal fel kell hagyniuk a weboldal használatával."] },
  { "title": "Felhasználói Fiók Felelőssége", "content": ["A felhasználók felelősek fiókjuk hitelesítő adatainak titokban tartásáért. A felhasználói fiók alatt végzett tevékenységek kizárólag a fiók tulajdonosának felelőssége. A felhasználóknak azonnal értesíteniük kell a weboldal adminisztrátorait minden jogosulatlan fiókhozzáférésről."] },
  { "title": "Felelősség Korlátozása", "content": ["A weboldal az „ahogy van” tartalmat nyújt bármilyen garancia nélkül. A weboldal tulajdonosai nem vállalnak felelősséget közvetlen, közvetett, véletlenszerű, következményes vagy büntető jellegű károkért, amelyek a felhasználók interakcióiból erednek a platformmal."] },
  { "title": "Felhasználói Magatartási Irányelvek", "content": ["Ne töltsön fel káros vagy rosszindulatú tartalmat, amely ártana a weboldalnak vagy felhasználóinak.", "Tisztelje más felhasználók jogait.", "Kerülje azokat a tevékenységeket, amelyek megzavarhatják a weboldal működését.", "Tartsa be az alkalmazandó helyi és nemzetközi törvényeket."] },
  { "title": "A Feltételek Módosítása", "content": ["A weboldal fenntartja a jogot ezeknek a feltételeknek a bármikor történő módosítására. A weboldal használatának folytatása a módosítások után az új feltételek elfogadását jelenti."] },
  { "title": "Felmondási Záradék", "content": ["A weboldal megszüntetheti vagy felfüggesztheti a felhasználói hozzáférést előzetes értesítés nélkül, amennyiben a feltételeket megsértik, vagy az adminisztráció más alkalmasnak tartott okból."] },
  { "title": "Irányadó Jog", "content": ["Ezeket a feltételeket annak az illetékességi területnek a törvényei szabályozzák, ahol a weboldal elsősorban működik, a jogi ütközési elvektől függetlenül."] }
  ],
  tools: {
    textToSpeech: "Szövegfelolvasás",
    translate: "Fordítás",
    topicMap: "Téma térkép",
    notes: "Jegyzeteim",
    wikipal: "Kérdezd meg a Wikipalt",
    watchChanges: "Változások figyelése",
    saveArticle: "Cikk mentése",
    saved: "Mentve",
    shortUrl: "Rövid link",
    citePage: "Oldal idézése",
    QRCode: "QR kód",
    DownloadPDF: "Letöltés PDF-ként",
    printPage: "Oldal nyomtatása",
    pageInfo: "Oldal információ",
  },
  termsAndConditions: 'Felhasználási feltételek',
  close: 'Bezárás',
  language: {
    searchMessage: "Nyelvek keresése...",
    selectLanguage: "Válasszon nyelvet",
    description: "Válassza ki a kívánt nyelvet a cikk megtekintéséhez.",
    notFound: "Nem található megfelelő nyelv"
  },
  bias: {
    heading: "Mi az az elfogultság?",
    explanation: "Az elfogultság egy olyan tendencia, amely egy bizonyos politikai nézőpont, párt vagy eszme támogatására vagy előnyben részesítésére irányul. Befolyásolhatja, hogy egy személy hogyan értelmezi az eseményeket, választja ki az információkat és mutatja be az ötleteket. Amikor egy szerzőnek politikai elfogultsága van, az befolyásolhatja a perspektíváját azzal, hogy befolyásolja, mely tényeket emeli ki, hogyan írja le az embereket vagy kérdéseket, és milyen következtetéseket von le. Ennek eredményeként az írása tükrözheti személyes meggyőződését, nem pedig egy teljesen semleges vagy kiegyensúlyozott nézőpontot.",
    socialist: "Szocialista",
    liberal: "Liberális",
    wikipedia: "Wikipédia",
    conservative: "Konzervatív",
    nationalist: "Nacionalista",
    title: "Olvasási elfogultság",
  },
  common: {
    loadingPerspective: 'Nézőpont betöltése...',
    fetchingUserInfo: 'Felhasználói információk betöltése...',
    home: 'Főoldal',
    about: 'Rólunk',
    help: 'Súgó',
    search: 'Keresés',
    searchPlaceholder: 'Keresés az Alternipediában...',
    login: 'Bejelentkezés',
    logout: 'Kijelentkezés',
    signUp: 'Regisztráció',
    profile: 'Profil',
    settings: 'Beállítások',
    language: 'Nyelv',
    theme: 'Téma',
    comingSoon: 'Az Alternipedia hamarosan!',
    stayTuned: 'Maradjon velünk.',
    exampleArticle: 'Példa cikk:',
  },
  navigation: {
    aboutUs: 'Rólunk',
    currentEvents: 'Aktuális események',
    randomArticle: 'Véletlen cikk',
    help: 'Súgó',
  },
  footer: {
    pleaseLogin: 'Kérjük, jelentkezzen be a funkció használatához.',
    text: {
      "part1": "A szöveg elérhető a",
      "part2": "Creative Commons Nevezd meg!-Így add tovább 4.0 Nemzetközi Licenc alatt",
      "part3": "; további feltételek is alkalmazhatók. A webhely használatával Ön elfogadja a",
      "part4": "Felhasználási feltételeket",
      "part5": "és",
      "part6": "Adatvédelmi irányelveket",
      "part7": ". Az Alternipedia egy nyílt forráskódú, nonprofit projekt."
    },
    license: 'Licenc',
    terms: 'Feltételek',
    privacy: 'Adatvédelem',
    contact: 'Kapcsolat',
    disclaimers: 'Jogi nyilatkozat',
    codeOfConduct: 'Magatartási kódex',
    statistics: 'Statisztikák',
    cookieStatement: 'Süti nyilatkozat',
    developers: 'Fejlesztők',
  },
  notFound: {
    title: '404',
    heading: 'Az oldal nem található',
    message: "Sajnáljuk, nem találtuk a keresett oldalt. Az oldal eltávolításra kerülhetett, vagy a link helytelen lehet.",
    goHome: 'Ugrás a főoldalra',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Válts Pro-ra',
    upgradePrompt: 'Frissíts a prémium funkciók feloldásához',
    title: 'A tudás hatalom, Turbozd fel a tiedet.',
    month: 'hónap',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Olvasd el az összes cikket az Alternipedia-n',
        basicTheme: 'Használd az alap témabeállításokat',
        saveArticles: 'Cikkek mentése későbbi olvasáshoz',
      },
      buttonText: 'A te terved',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Minden az Alternipedia-ban, plusz:',
      features: {
        customThemes: 'Használd az Alternipedia-t a kedvenc témáid, színeid, elrendezéseid és betűtípusaid szerint',
        notes: 'Jegyzetelj, kezeld és exportáld őket az egész Alternipedia-n',
        advancedSearch: 'Speciális keresési eredmények',
        semanticSearch: 'Szemantikus keresés AI erejével',
        aiAssistant: 'Hozzáférés a WikiPal-hoz, az Alternipedia AI asszisztensedhez',
        topicMaps: 'Jobb témakutatás Tématérképekkel',
        profileCustomization: 'Több profil testreszabási lehetőség',
        aiTranslation: 'AI fordítás bármely oldalhoz',
        appSupport: 'Folyamatos támogatás az Alternipedia alkalmazásban',
      },
      buttonText: 'Frissítés most',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Ezt a cikket a közösség tagjai hozták létre, hogy bemutassák a nacionalista nézőpontot, amely a nemzet önrendelkezésére és a hagyományos kultúrára összpontosít.',
      socialist: 'Ezt a cikket a közösség tagjai hozták létre, hogy bemutassák a szocialista nézőpontot, amely a társadalmi igazságosságra, egyenlőségre és a munkási jogokra összpontosít.',
      liberal: 'Ezt a cikket a közösség tagjai hozták létre, hogy bemutassák a liberális nézőpontot, amely az egyéni jogokra, a szólásszabadságra és a társadalmi haladásra összpontosít.',
      conservative: 'Ezt a cikket a közösség tagjai hozták létre, hogy bemutassák a konzervatív nézőpontot, amely a hagyományra, stabilitásra és családi értékekre összpontosít.',
      wikipedia: {
        part1: 'Ezt a cikket a közösség tagjai hozták létre, hogy bemutassák a semleges nézőpontot, amely a pontos információkra és tényekre összpontosít.',
        part2: 'Lássd Wikipedia →',
      }
    },
    lastEdited: 'Utolsó szerkesztés',
    tools: 'Eszközök',
    close: 'Bezárás',
    notFoundHeader: 'A Wikipedia cikk nem található',
    notFoundText: 'Nem találtuk a következő Wikipedia cikket:',
    searchWikipediaText: 'Keresés a Wikipédián',
    content: 'Tartalom',
    article: 'Cikk',
    discussion: 'Vita',
    read: 'Olvasás',
    edit: 'Szerkesztés',
    history: 'Előzmények'
  }
};

// Finnish dictionary
const fi: Dictionary = {
  unauthorised: {
    heading: 'Pääsy estetty',
    message: 'Sinulla ei ole oikeutta käyttää tätä sivua. Tarkista, että olet kirjautunut sisään tai ota yhteyttä tukeen.'
  },
  blockedAd: {
    part1: 'Näyttää siltä, että käytät mainosten estoa. Poista se käytöstä tukeaksesi sivustoamme — tai',
    part2: 'päivitä PRO:hon',
    part3: 'mainokseton käyttökokemus.'
  },
  metadata: {
    description: 'Koulutuksellinen wiki, joka on suunniteltu esittämään erilaisia näkökulmia tietoon ja ideoihin',
    wikipedia: {  
      part1: 'Tutustu Alternipediaan',
      part2: '— erilaisia näkökulmia ja ideoita',
    },
    conservative: {  
      part1: 'Konservatiivinen näkökulma',
      part2: '— perinteet, vakaus ja vapaa markkinatalous',
    },
    nationalist: {    
      part1: 'Kansallismielinen näkökulma',   
      part2: '— kansallinen suvereniteetti ja perinteinen kulttuuri',
    },
    liberal: {
      part1: 'Liberaali näkökulma',
      part2: '— yksilön oikeudet, sananvapaus ja sosiaalinen oikeudenmukaisuus',
    },
    socialist: {
      part1: 'Sosialistinen näkökulma',
      part2: '— oikeudenmukaisuus, tasa-arvo ja työntekijöiden oikeudet',
    },
  },
  accept: 'Hyväksy',
  reject: 'Hylkää',
  cookieMessage: 'Me ja kumppanimme käytämme evästeitä mainosten personointiin, suorituskyvyn mittaamiseen ja sosiaalisten ominaisuuksien tarjoamiseen. Napsauta Hyväksy salliaksesi personoidut mainokset tai Hylkää estääksesi ne. Lisätietoja saat tietosuojakäytännöstämme.',
  login: {
    title: 'Kirjaudu sisään',
    google: 'Jatka Googlella',
    facebook: 'Jatka Facebookilla',
    x: 'Jatka X:llä',
    microsoft: 'Jatka Microsoftilla',
    policy: "Kirjautumalla sisään hyväksyt käyttöehtomme ja tietosuojakäytäntömme.",
  },
  userMenu: {
    login: "Kirjaudu sisään",
    contributions: "Panokset",
    savedArticles: "Tallennetut artikkelit",
    preferences: "Asetukset",
    logout: "Kirjaudu ulos"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('fi-FI', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('fi-FI', { year: 'numeric', month: 'long' }),
    "title": "Tietosuojakäytäntö",
    "lastUpdatedText": "Viimeksi päivitetty:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Tervetuloa Alternipediaan — opetussivustolle, joka on suunniteltu esittämään erilaisia näkökulmia tietoon ja ideoihin. Arvostamme yksityisyyttäsi ja sitoudumme suojaamaan henkilötietojasi. Tämä käytäntö selittää, mitä tietoja keräämme, miten niitä käytämme ja mitkä ovat oikeutesi."
      }
    ],
    "sections": [
      {
        "title": "Keräämämme tiedot",
        "content": [
          {
            "type": "list",
            "items": [
              "Tilitiedot: Kun kirjaudut OAuth-palveluntarjoajan kautta (esim. Google tai Meta), saamme nimesi, sähköpostiosoitteesi ja profiilikuvasi (jos saatavilla).",
              "Maksutiedot: Jos valitset maksun tai lahjoituksen, Stripe käsittelee tapahtumat turvallisesti. Emme koskaan tallenna tai näe luottokorttisi tietoja.",
              "Analytiikkatiedot: Käytämme Vercel Analyticsia ymmärtääksemme yleisiä käyttötapoja, kuten suosittuja sivuja ja sivuston suorituskykyä. Nämä tiedot ovat koottuja eivätkä tunnista sinua henkilökohtaisesti.",
              "Tekniset tiedot: Käyttäessäsi sivustoamme voimme automaattisesti vastaanottaa vakiolokitietoja, kuten selaintyyppiä, laitetta ja IP-osoitetta, ylläpitääksemme turvallisuutta ja toimivuutta.",
              "Adsense: Käytämme Google Adsensea näyttääksemme mainoksia sivustollamme. Adsense voi käyttää evästeitä näyttääkseen mainoksia, jotka on räätälöity selauskäyttäytymisesi mukaan tällä tai muilla sivustoilla."
            ]
          }
        ]
      },
      {
        "title": "Miten käytämme tietojasi",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia-alustan ylläpito ja kehittäminen",
              "Käyttäjien todennus ja tilien hallinta",
              "Maksujen turvallinen käsittely Stripen kautta",
              "Sivuston suorituskyvyn ja luotettavuuden seuranta",
              "Vastaaminen käyttäjien kyselyihin ja pyyntöihin"
            ]
          },
          {
            "type": "paragraph",
            "text": "Emme myy, vuokraa emmekä vaihda henkilökohtaisia tietojasi."
          }
        ]
      },
      {
        "title": "Evästeet ja seuranta",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ei käytä mainos- tai seurantakeksejä."
          },
          {
            "type": "paragraph",
            "text": "Käytämme vain välttämättömiä evästeitä kirjautumiseen ja sivuston toiminnallisuuteen."
          }
        ]
      },
      {
        "title": "Tietojen säilytys ja turvallisuus",
        "content": [
          {
            "type": "paragraph",
            "text": "Tietosi säilytetään turvallisesti teollisuusstandardin mukaisella salauksella ja hosting-infrastruktuurilla."
          },
          {
            "type": "paragraph",
            "text": "Teemme kohtuullisia toimenpiteitä suojataksemme tietosi katoamiselta, väärinkäytöltä tai luvattomalta käytöltä."
          }
        ]
      },
      {
        "title": "Oikeutesi",
        "content": [
          {
            "type": "list",
            "items": [
              "Henkilötietojesi tarkastelu tai kopion pyytäminen",
              "Tietojen korjaaminen tai poistaminen, joita meillä on sinusta",
              "Suostumuksen peruminen tai tilin sulkeminen"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "Ehtojen Hyväksyminen", "content": ["Käyttämällä tätä verkkosivustoa käyttäjät hyväksyvät noudattavansa näitä Palveluehtoja ja sitoutuvat niihin. Käyttäjien, jotka eivät hyväksy näitä ehtoja, tulee lopettaa sivuston käyttö välittömästi."] },
  { "title": "Käyttäjätilin Vastuut", "content": ["Käyttäjät ovat vastuussa tilinsä tunnistetietojen salassapidosta. Kaikki tilin alla tapahtuvat toiminnot ovat tilin haltijan yksinomaista vastuuta. Käyttäjien tulee välittömästi ilmoittaa verkkosivuston ylläpitäjille kaikista luvattomista tilin käyttöyrityksistä."] },
  { "title": "Vastuun Rajoitus", "content": ["Verkkosivusto tarjoaa sisällön 'sellaisena kuin se on' ilman takuita. Verkkosivuston omistajat eivät ole vastuussa suorista, epäsuorista, satunnaisista, välillisistä tai rangaistuksellisista vahingoista, jotka johtuvat käyttäjien vuorovaikutuksesta alustan kanssa."] },
  { "title": "Käyttäjän Käyttäytymisohjeet", "content": ["Älä lataa haitallista tai vahingollista sisältöä, joka voi vahingoittaa verkkosivustoa tai sen käyttäjiä.", "Kunnioita muiden käyttäjien oikeuksia.", "Vältä toimintoja, jotka voivat häiritä verkkosivuston toimintaa.", "Noudata sovellettavia paikallisia ja kansainvälisiä lakeja."] },
  { "title": "Ehtojen Muutokset", "content": ["Verkkosivusto pidättää oikeuden muuttaa näitä ehtoja milloin tahansa. Jatkamalla sivuston käyttöä muutosten jälkeen hyväksyt uudet ehdot."] },
  { "title": "Päättämislauseke", "content": ["Verkkosivusto voi lopettaa tai keskeyttää käyttäjän pääsyn ilman ennakkoilmoitusta, jos näitä ehtoja rikotaan tai muusta hallinnon sopivaksi katsomasta syystä."] },
  { "title": "Sovellettava Laki", "content": ["Näitä ehtoja säätelevät sen lainkäyttöalueen lait, jossa verkkosivustoa pääasiassa ylläpidetään, riippumatta lainkonfliktiperiaatteista."] }
  ],
  tools: {
    textToSpeech: "Teksti puheeksi",
    translate: "Käännä",
    topicMap: "Aihekartta",
    notes: "Omat muistiinpanot",
    wikipal: "Kysy Wikipal",
    watchChanges: "Seuraa muutoksia",
    saveArticle: "Tallenna artikkeli",
    saved: "Tallennettu",
    shortUrl: "Lyhyt linkki",
    citePage: "Viittaa tähän sivuun",
    QRCode: "QR-koodi",
    DownloadPDF: "Lataa PDF-muodossa",
    printPage: "Tulosta tämä sivu",
    pageInfo: "Sivun tiedot",
  },
  termsAndConditions: 'Käyttöehdot',
  close: 'Sulje',
  language: {
    searchMessage: "Etsi kieliä...",
    selectLanguage: "Valitse kieli",
    description: "Valitse haluamasi kieli tämän artikkelin katselemiseen.",
    notFound: "Hakua vastaavia kieliä ei löytynyt"
  },
  bias: {
    heading: "Mikä on ennakkoluulo?",
    explanation: "Ennakkoluulo on taipumus tukea tai suosia tiettyä poliittista näkemystä, puoluetta tai ideaa. Se voi vaikuttaa siihen, miten henkilö tulkitsee tapahtumia, valitsee tietoa ja esittää ajatuksia. Kun kirjoittajalla on poliittinen ennakkoluulo, se voi vaikuttaa hänen näkökulmaansa vaikuttamalla siihen, mitä faktoja hän korostaa, miten hän kuvaa ihmisiä tai asioita ja mitä johtopäätöksiä hän tekee. Tämän seurauksena hänen kirjoituksensa saattaa heijastaa hänen henkilökohtaisia uskomuksiaan pikemminkin kuin täysin neutraalia tai tasapainoista näkökulmaa.",
    socialist: "Sosialisti",
    liberal: "Liberaali",
    wikipedia: "Wikipedia",
    conservative: "Konservatiivi",
    nationalist: "Nationalisti",
    title: "Lukemisen ennakkoluulo",
  },
  common: {
    loadingPerspective: 'Ladataan näkökulmaa...',
    fetchingUserInfo: 'Haetaan käyttäjätietoja...',
    home: 'Etusivu',
    about: 'Tietoja',
    help: 'Ohje',
    search: 'Etsi',
    searchPlaceholder: 'Etsi Alternipediasta...',
    login: 'Kirjaudu sisään',
    logout: 'Kirjaudu ulos',
    signUp: 'Rekisteröidy',
    profile: 'Profiili',
    settings: 'Asetukset',
    language: 'Kieli',
    theme: 'Teema',
    comingSoon: 'Alternipedia tulossa pian!',
    stayTuned: 'Pysy kuulolla.',
    exampleArticle: 'Esimerkkiartikkeli:',
  },
  navigation: {
    aboutUs: 'Tietoja meistä',
    currentEvents: 'Ajankohtaiset tapahtumat',
    randomArticle: 'Satunnainen artikkeli',
    help: 'Ohje',
  },
  footer: {
    pleaseLogin: 'Kirjaudu sisään käyttääksesi tätä ominaisuutta.',
    text: {
      "part1": "Teksti on saatavilla seuraavan lisenssin alaisena:",
      "part2": "Creative Commons Nimeä-JaaSamoin 4.0 Kansainvälinen",
      "part3": "; mahdollisia lisäehtoja voi olla. Käyttämällä tätä sivustoa hyväksyt",
      "part4": "Käyttöehdot",
      "part5": "ja",
      "part6": "Tietosuojakäytännön",
      "part7": ". Alternipedia on avoimen lähdekoodin voittoa tavoittelematon projekti."
    },
    license: 'Lisenssi',
    terms: 'Ehdot',
    privacy: 'Tietosuoja',
    contact: 'Yhteystiedot',
    disclaimers: 'Vastuuvapauslausekkeet',
    codeOfConduct: 'Käyttäytymissäännöt',
    statistics: 'Tilastot',
    cookieStatement: 'Evästekäytäntö',
    developers: 'Kehittäjät',
  },
  notFound: {
    title: '404',
    heading: 'Sivua ei löytynyt',
    message: "Valitettavasti emme löytäneet etsimääsi sivua. Sivu on saatettu poistaa tai linkki voi olla virheellinen.",
    goHome: 'Siirry etusivulle',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Siirry Prohon',
    upgradePrompt: 'Päivitä saadaksesi premium-ominaisuudet',
    title: 'Tieto on valtaa, Tehosta omaasi.',
    month: 'kuukausi',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lue kaikki Alternipediasta',
        basicTheme: 'Käytä perus-teeman mukautusta',
        saveArticles: 'Tallenna artikkeleita myöhempää lukemista varten',
      },
      buttonText: 'Suunnitelmasi',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Kaikki Alternipediassa, plus:',
      features: {
        customThemes: 'Käytä Alternipediaa omilla suosikkiteemoillasi, väreillä, asetteluilla ja fonteilla',
        notes: 'Tee muistiinpanoja, hallitse ja vie niitä kaikista Alternipediasta',
        advancedSearch: 'Edistyneet hakutulokset',
        semanticSearch: 'Semanttinen haku AI:n voimalla',
        aiAssistant: 'Pääsy WikiPal:iin, Alternipedia AI-avustajaasi',
        topicMaps: 'Parempi aihetutkimus Aihekaavioiden avulla',
        profileCustomization: 'Lisää profiilin mukautusvaihtoehtoja',
        aiTranslation: 'AI-käännös mille tahansa sivulle',
        appSupport: 'Jatkuva tuki Alternipedia-sovelluksessa',
      },
      buttonText: 'Päivitä nyt',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Tämän artikkelin on luonut yhteisön jäsenet esittelemään kansallismielistä näkökulmaa, joka keskittyy kansalliseen itsemääräämisoikeuteen ja perinteiseen kulttuuriin.',
      socialist: 'Tämän artikkelin on luonut yhteisön jäsenet esittelemään sosialistista näkökulmaa, joka keskittyy sosiaaliseen oikeudenmukaisuuteen, tasa-arvoon ja työntekijöiden oikeuksiin.',
      liberal: 'Tämän artikkelin on luonut yhteisön jäsenet esittelemään liberaalia näkökulmaa, joka keskittyy yksilön oikeuksiin, sananvapauteen ja sosiaaliseen edistykseen.',
      conservative: 'Tämän artikkelin on luonut yhteisön jäsenet esittelemään konservatiivista näkökulmaa, joka keskittyy perinteisiin, vakauteenn ja perhearvoihin.',
      wikipedia: {
        part1: 'Tämän artikkelin on luonut yhteisön jäsenet esittelemään neutraalia näkökulmaa, joka keskittyy tarkkoihin tietoihin ja faktoihin.',
        part2: 'Katso Wikipedia →',
      } 
    },
    lastEdited: 'Viimeksi muokattu',
    tools: 'Työkalut',
    content: 'Sisältö',
    close: 'Sulje',
    notFoundHeader: 'Wikipedia-artikkelia ei löytynyt',
    notFoundText: 'Emme löytäneet seuraavaa Wikipedia-artikkelia:',
    searchWikipediaText: 'Etsi Wikipediasta',
    article: 'Artikkeli',
    discussion: 'Keskustelu',
    read: 'Lue',
    edit: 'Muokkaa',
    history: 'Historia'
  }
};

// Danish dictionary
const da: Dictionary = {
  unauthorised: {
    heading: 'Adgang nægtet',
    message: 'Du har ikke tilladelse til at få adgang til denne side. Kontroller, at du er logget ind, eller kontakt support.'
  },
  blockedAd: {
    part1: 'Det ser ud til, at du bruger en annonceblokering. Deaktiver den for at støtte vores side — eller',
    part2: 'opgrader til PRO',
    part3: 'for en annoncefri oplevelse.'
  },
  metadata: {
    description: 'En uddannelseswiki designet til at præsentere forskellige perspektiver på viden og idéer',
    wikipedia: {  
      part1: 'Oplev Alternipedia',
      part2: '— forskellige perspektiver og idéer',
    },
    conservative: {  
      part1: 'Konservativt perspektiv', 
      part2: '— tradition, stabilitet og fri markedsøkonomi',
    },
    nationalist: {    
      part1: 'Nationalistisk perspektiv',   
      part2: '— national suverænitet og traditionel kultur',
    },
    liberal: {
      part1: 'Liberalt perspektiv',
      part2: '— individuelle rettigheder, ytringsfrihed og social retfærdighed',  
    },
    socialist: {
      part1: 'Socialistisk perspektiv',
      part2: '— retfærdighed, lighed og arbejderrettigheder',
    },
  },
  accept: 'Accepter',
  reject: 'Afvis',
  cookieMessage: 'Vi og vores partnere bruger cookies til at personalisere annoncer, måle ydeevne og levere sociale funktioner. Klik Accepter for at tillade personlige annoncer eller Afvis for at afvise dem. Se vores privatlivspolitik for flere oplysninger.',
  login: {
    title: 'Log ind',
    google: 'Fortsæt med Google',
    facebook: 'Fortsæt med Facebook',
    x: 'Fortsæt med X',
    microsoft: 'Fortsæt med Microsoft',
    policy: "Ved at logge ind accepterer du vores Servicevilkår og Privatlivspolitik.",
  },
  userMenu: {
    login: "Log ind",
    contributions: "Bidrag",
    savedArticles: "Gemte artikler",
    preferences: "Indstillinger",
    logout: "Log ud"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('da-DK', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('da-DK', { year: 'numeric', month: 'long' }),
    "title": "Fortrolighedspolitik",
    "lastUpdatedText": "Sidst opdateret:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Velkommen til Alternipedia — en uddannelseswiki designet til at præsentere forskellige perspektiver på viden og idéer. Vi værdsætter dit privatliv og er forpligtet til at beskytte dine personlige oplysninger. Denne politik forklarer, hvilke oplysninger vi indsamler, hvordan vi bruger dem, og hvilke rettigheder du har."
      }
    ],
    "sections": [
      {
        "title": "Oplysninger vi indsamler",
        "content": [
          {
            "type": "list",
            "items": [
              "Kontooplysninger: Når du logger ind via en OAuth-udbyder (f.eks. Google eller Meta), modtager vi dit navn, e-mailadresse og profilbillede (hvis tilgængeligt).",
              "Betalingsoplysninger: Hvis du vælger at foretage en betaling eller donation, behandler Stripe transaktionerne sikkert. Vi gemmer aldrig eller ser dine kreditkortoplysninger.",
              "Analyser: Vi bruger Vercel Analytics til at forstå generelle brugsmønstre, såsom hvilke sider der er populære, og hvordan vores side præsterer. Disse data er aggregerede og identificerer dig ikke personligt.",
              "Tekniske oplysninger: Når du besøger vores site, kan vi automatisk modtage standardlogdata som browsertype, enhed og IP-adresse for at opretholde sikkerhed og funktionalitet.",
              "Adsense: Vi bruger Google Adsense til at vise annoncer på vores site. Adsense kan bruge cookies til at vise annoncer, der er tilpasset din browseradfærd på dette eller andre sites."
            ]
          }
        ]
      },
      {
        "title": "Hvordan vi bruger dine oplysninger",
        "content": [
          {
            "type": "list",
            "items": [
              "Drive og forbedre Alternipedia-platformen",
              "Godkende brugere og administrere konti",
              "Behandle betalinger sikkert via Stripe",
              "Overvåge sidepræstation og pålidelighed",
              "Besvare brugerhenvendelser eller forespørgsler"
            ]
          },
          {
            "type": "paragraph",
            "text": "Vi sælger, udlejer eller handler ikke med dine personlige oplysninger."
          }
        ]
      },
      {
        "title": "Cookies og sporing",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia bruger ikke reklame- eller sporingscookies."
          },
          {
            "type": "paragraph",
            "text": "Vi bruger kun nødvendige cookies til login-sessioner og websitets funktionalitet."
          }
        ]
      },
      {
        "title": "Datalagring og sikkerhed",
        "content": [
          {
            "type": "paragraph",
            "text": "Dine data opbevares sikkert med industristandard kryptering og hosting-infrastruktur."
          },
          {
            "type": "paragraph",
            "text": "Vi træffer rimelige foranstaltninger for at beskytte dine oplysninger mod tab, misbrug eller uautoriseret adgang."
          }
        ]
      },
      {
        "title": "Dine rettigheder",
        "content": [
          {
            "type": "list",
            "items": [
              "Adgang til eller anmodning om kopi af dine personlige oplysninger",
              "Korrigere eller slette oplysninger, vi har om dig",
              "Tilbagekalde samtykke eller lukke din konto"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ "title": "Accept af Vilkår", "content": ["Ved at få adgang til og bruge dette websted accepterer brugere at overholde og være bundet af disse Servicevilkår. Brugere, der ikke accepterer disse vilkår, bør straks stoppe med at bruge webstedet."] },
  { "title": "Brugerkontoansvar", "content": ["Brugere er ansvarlige for at opretholde fortroligheden af deres kontooplysninger. Alle aktiviteter, der finder sted under en brugers konto, er udelukkende kontoindehaverens ansvar. Brugere skal straks underrette webstedets administratorer om uautoriseret kontoadgang."] },
  { "title": "Ansvarsbegrænsning", "content": ["Webstedet leverer indhold 'som det er' uden nogen garantier. Webstedets ejere er ikke ansvarlige for direkte, indirekte, tilfældige, følge- eller strafbare skader, der opstår som følge af brugernes interaktion med platformen."] },
  { "title": "Retningslinjer for Brugers Adfærd", "content": ["Upload ikke skadeligt eller ondsindet indhold, der kan skade webstedet eller dets brugere.", "Respekter andre brugeres rettigheder.", "Undgå aktiviteter, der kan forstyrre webstedets funktionalitet.", "Overhold gældende lokale og internationale love."] },
  { "title": "Ændringer af Vilkår", "content": ["Webstedet forbeholder sig retten til at ændre disse vilkår til enhver tid. Fortsat brug af webstedet efter ændringer udgør accept af de nye vilkår."] },
  { "title": "Opsigelsesklausul", "content": ["Webstedet kan afslutte eller suspendere brugerens adgang uden forudgående varsel, hvis disse vilkår overtrædes, eller af anden grund, som administrationen finder passende."] },
  { "title": "Gældende Lov", "content": ["Disse vilkår er underlagt lovgivningen i den jurisdiktion, hvor webstedet primært drives, uden hensyntagen til principper om lovkonflikt."] }
  ],
  tools: {
    textToSpeech: "Tekst til tale",
    translate: "Oversæt",
    topicMap: "Emnekort",
    notes: "Mine noter",
    wikipal: "Spørg Wikipal",
    watchChanges: "Følg ændringer",
    saveArticle: "Gem artikel",
    saved: "Gemt",
    shortUrl: "Kort link",
    citePage: "Citer denne side",
    QRCode: "QR-kode",
    DownloadPDF: "Download som PDF",
    printPage: "Udskriv denne side",
    pageInfo: "Sideinfo",
  },
  language: {
    searchMessage: "Søg efter sprog...",
    selectLanguage: "Vælg sprog",
    description: "Vælg dit foretrukne sprog til at se denne artikel.",
    notFound: "Ingen sprog fundet, der matcher"
  },
  termsAndConditions: 'Servicevilkår',
  close: 'Luk',
  bias: {
    heading: "Hvad er en bias?",
    explanation: "En bias er en tendens til at støtte eller favorisere et bestemt politisk synspunkt, parti eller idé. Det kan påvirke, hvordan en person fortolker begivenheder, vælger information og præsenterer ideer. Når en forfatter har en politisk bias, kan det påvirke deres perspektiv ved at påvirke, hvilke fakta de fremhæver, hvordan de beskriver mennesker eller emner, og hvilke konklusioner de drager. Som et resultat kan deres skrivning afspejle deres personlige overbevisninger snarere end et helt neutralt eller balanceret synspunkt.",
    socialist: "Socialist",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konservativ",
    nationalist: "Nationalist",
    title: "Læsebias",
  },
  common: {
    loadingPerspective: 'Indlæser perspektiv...',
    fetchingUserInfo: 'Henter brugerinfo...',
    home: 'Hjem',
    about: 'Om',
    help: 'Hjælp',
    search: 'Søg',
    searchPlaceholder: 'Søg i Alternipedia...',
    login: 'Log ind',
    logout: 'Log ud',
    signUp: 'Tilmeld dig',
    profile: 'Profil',
    settings: 'Indstillinger',
    language: 'Sprog',
    theme: 'Tema',
    comingSoon: 'Alternipedia kommer snart!',
    stayTuned: 'Hold dig opdateret.',
    exampleArticle: 'Eksempelartikel:',
  },
  navigation: {
    aboutUs: 'Om os',
    currentEvents: 'Aktuelle begivenheder',
    randomArticle: 'Tilfældig artikel',
    help: 'Hjælp',
  },
  footer: {
    pleaseLogin: 'Log ind for at bruge denne funktion.',
    text: {
      "part1": "Teksten er tilgængelig under",
      "part2": "Creative Commons Navngivelse-DelPåSammeVilkår 4.0 International Licens",
      "part3": "; yderligere betingelser kan gælde. Ved at bruge dette websted accepterer du",
      "part4": "Vilkår og betingelser",
      "part5": "og",
      "part6": "Privatlivspolitik",
      "part7": ". Alternipedia er et open source non-profit projekt."
    },
    license: 'Licens',
    terms: 'Vilkår',
    privacy: 'Privatliv',
    contact: 'Kontakt',
    disclaimers: 'Ansvarsfraskrivelser',
    codeOfConduct: 'Adfærdskodeks',
    statistics: 'Statistik',
    cookieStatement: 'Cookie-erklæring',
    developers: 'Udviklere',
  },
  notFound: {
    title: '404',
    heading: 'Siden blev ikke fundet',
    message: "Beklager, vi kunne ikke finde den side, du leder efter. Siden kan være blevet fjernet, eller linket kan være forkert.",
    goHome: 'Gå til startsiden',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Bliv PRO',
    upgradePrompt: 'Opgrader for at låse premiumfunktioner op',
    title: 'Viden er magt, Forstærk din.',
    month: 'måned',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Læs alt i Alternipedia',
        basicTheme: 'Brug grundlæggende tematilpasning',
        saveArticles: 'Gem artikler til senere læsning',
      },
      buttonText: 'Din plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Alt i Alternipedia, plus:',
      features: {
        customThemes: 'Brug Alternipedia i dine yndlingstemaer, farver, layouts og skrifttyper',
        notes: 'Tag noter, administrer og eksporter dem fra hele Alternipedia',
        advancedSearch: 'Avancerede søgeresultater',
        semanticSearch: 'Semantisk søgning med AI’s kraft',
        aiAssistant: 'Få adgang til WikiPal, din Alternipedia AI-assistent',
        topicMaps: 'Bedre emneforskning med Emnekort',
        profileCustomization: 'Flere muligheder for profiltilpasning',
        aiTranslation: 'AI-oversættelse for enhver side',
        appSupport: 'Fortsat support på Alternipedia-appen',
      },
      buttonText: 'Opgrader nu',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Denne artikel er oprettet af fællesskabsmedlemmer for at præsentere et nationalistisk perspektiv, der fokuserer på national suverænitet og traditionel kultur.',
      socialist: 'Denne artikel er oprettet af fællesskabsmedlemmer for at præsentere et socialistisk perspektiv, der fokuserer på social retfærdighed, lighed og arbejderrettigheder.',
      liberal: 'Denne artikel er oprettet af fællesskabsmedlemmer for at præsentere et liberalt perspektiv, der fokuserer på individuelle rettigheder, ytringsfrihed og social fremgang.',
      conservative: 'Denne artikel er oprettet af fællesskabsmedlemmer for at præsentere et konservativt perspektiv, der fokuserer på traditioner, stabilitet og familie værdier.',
      wikipedia: {
        part1: 'Denne artikel er oprettet af fællesskabsmedlemmer for at præsentere et neutralt perspektiv, der fokuserer på nøjagtige oplysninger og fakta.',
        part2: 'Se Wikipedia →',
      }
    },
    lastEdited: 'Sidst redigeret',  
    tools: 'Værktøjer',
    close: 'Luk',
    notFoundHeader: 'Wikipedia-artikel ikke fundet',
    notFoundText: 'Vi kunne ikke finde følgende Wikipedia-artikel:',
    searchWikipediaText: 'Søg på Wikipedia',
    content: 'Indhold',
    article: 'Artikel',
    discussion: 'Diskussion',
    read: 'Læs',
    edit: 'Rediger',
    history: 'Historik'
  }
};

// Bulgarian dictionary
const bg: Dictionary = {
  unauthorised: {
    heading: 'Достъпът е отказан',
    message: 'Нямате разрешение за достъп до тази страница. Проверете дали сте влезли или се свържете с поддръжката.'
  },
  blockedAd: {
    part1: 'Изглежда използвате блокиране на реклами. Моля, деактивирайте го, за да подкрепите сайта ни — или',
    part2: 'надградете до PRO',
    part3: 'за опит без реклами.'
  },
  metadata: {
    description: 'Образователна уики, създадена да представя различни перспективи върху знанията и идеите',
    wikipedia: {  
      part1: 'Открийте Alternipedia',
      part2: '— различни перспективи и идеи',
    },
    conservative: {  
      part1: 'Консервативна перспектива', 
      part2: '— традиция, стабилност и свободен пазар',
    },
    nationalist: {    
      part1: 'Националистическа перспектива',   
      part2: '— национален суверенитет и традиционна култура',
    },
    liberal: {
      part1: 'Либерална перспектива',
      part2: '— индивидуални права, свобода на словото и социална справедливост', 
    },
    socialist: {
      part1: 'Социалистическа перспектива',
      part2: '— справедливост, равенство и права на работниците',
    },
  },
  accept: 'Приемам',
  reject: 'Отхвърлям',
  cookieMessage: 'Ние и нашите партньори използваме бисквитки за персонализиране на реклами, измерване на ефективността и предоставяне на социални функции. Натиснете Приемам, за да разрешите персонализирани реклами, или Отхвърлям, за да ги отхвърлите. Вижте нашата Политика за поверителност за повече информация.',
  login: {
    title: 'Вход',
    google: 'Продължи с Google',
    facebook: 'Продължи с Facebook',
    x: 'Продължи с X',
    microsoft: 'Продължи с Microsoft',
    policy: "Като влизате, приемате нашите Условия за ползване и Политика за поверителност.",
  },
  userMenu: {
    login: "Вход",
    contributions: "Приноси",
    savedArticles: "Запазени статии",
    preferences: "Настройки",
    logout: "Изход"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('bg-BG', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('bg-BG', { year: 'numeric', month: 'long' }),
    "title": "Политика за поверителност",
    "lastUpdatedText": "Последна актуализация:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Добре дошли в Alternipedia — образователна уики, създадена да представя различни перспективи върху знанията и идеите. Ценим вашата поверителност и се ангажираме да защитаваме личната ви информация. Тази политика обяснява какво събираме, как го използваме и какви права имате."
      }
    ],
    "sections": [
      {
        "title": "Информация, която събираме",
        "content": [
          {
            "type": "list",
            "items": [
              "Информация за акаунт: Когато влизате чрез OAuth доставчик (например Google или Meta), получаваме вашето име, имейл адрес и профилна снимка (ако е налична).",
              "Платежна информация: Ако решите да направите плащане или дарение, Stripe обработва транзакциите сигурно. Никога не съхраняваме и не виждаме номера на вашата кредитна карта.",
              "Аналитични данни: Използваме Vercel Analytics, за да разберем общите модели на използване, например кои страници са популярни и как се представя нашият сайт. Данните са агрегирани и не идентифицират лично вас.",
              "Техническа информация: При посещение на сайта ни може автоматично да получаваме стандартни лог данни като тип браузър, устройство и IP адрес, за да поддържаме сигурността и функционалността.",
              "Adsense: Използваме Google Adsense, за да показваме реклами на нашия сайт. Adsense може да използва бисквитки, за да показва реклами, персонализирани според поведението ви в браузъра на този или други сайтове."
            ]
          }
        ]
      },
      {
        "title": "Как използваме вашата информация",
        "content": [
          {
            "type": "list",
            "items": [
              "Операции и подобряване на платформата Alternipedia",
              "Удостоверяване на потребители и управление на акаунти",
              "Сигурна обработка на плащания чрез Stripe",
              "Мониторинг на производителността и надеждността на сайта",
              "Отговаряне на запитвания или заявки на потребители"
            ]
          },
          {
            "type": "paragraph",
            "text": "Не продаваме, отдаване под наем или търгуваме с личните ви данни."
          }
        ]
      },
      {
        "title": "Бисквитки и проследяване",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia не използва рекламни или проследяващи бисквитки."
          },
          {
            "type": "paragraph",
            "text": "Използваме само основни бисквитки, необходими за сесии за вход и функционалност на сайта."
          }
        ]
      },
      {
        "title": "Съхранение на данни и сигурност",
        "content": [
          {
            "type": "paragraph",
            "text": "Вашите данни се съхраняват сигурно, използвайки индустриални стандарти за криптиране и хостинг инфраструктура."
          },
          {
            "type": "paragraph",
            "text": "Предприемаме разумни стъпки за защита на вашата информация от загуба, злоупотреба или неоторизиран достъп."
          }
        ]
      },
      {
        "title": "Вашите права",
        "content": [
          {
            "type": "list",
            "items": [
              "Достъп до личните ви данни или искане на копие",
              "Коригиране или изтриване на информацията, която държим за вас",
              "Оттегляне на съгласието или затваряне на акаунта"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Приемане на условията", "content": ["Достъпът и използването на този уебсайт означава, че потребителите се съгласяват да спазват тези Условия за ползване. Потребителите, които не са съгласни с тези условия, трябва незабавно да спрат да използват сайта."] },
    { "title": "Отговорности на потребителския акаунт", "content": ["Потребителите са отговорни за поддържането на поверителността на данните на своя акаунт. Всички дейности, извършени под акаунта на потребителя, са изключителна отговорност на собственика на акаунта. Потребителите трябва незабавно да уведомят администраторите на сайта за всякакъв неоторизиран достъп."] },
    { "title": "Ограничение на отговорността", "content": ["Уебсайтът предоставя съдържание 'както е' без каквито и да е гаранции. Собствениците на сайта не носят отговорност за директни, непреки, случайни, последващи или наказателни щети, произтичащи от взаимодействията на потребителите с платформата."] },
    { "title": "Насоки за поведение на потребителите", "content": ["Не качвайте вредно или злонамерено съдържание, което може да навреди на сайта или потребителите.", "Уважавайте правата на другите потребители.", "Избягвайте дейности, които могат да нарушат функционалността на сайта.", "Спазвайте приложимите местни и международни закони."] },
    { "title": "Промени в условията", "content": ["Сайтът си запазва правото да променя тези условия по всяко време. Продължаването на използването на сайта след промени се счита за приемане на новите условия."] },
    { "title": "Клауза за прекратяване", "content": ["Сайтът може да прекрати или спре достъпа на потребителя без предизвестие при нарушаване на тези условия или по друга причина, която администрацията счита за подходяща."] },
    { "title": "Приложимо право", "content": ["Тези условия се уреждат от законите на юрисдикцията, в която сайтът се управлява основно, независимо от принципите на конфликт на закони."] }

  ],
  tools: {
    textToSpeech: "Текст на реч",
    translate: "Превод",
    topicMap: "Карта на темите",
    notes: "Моите бележки",
    wikipal: "Попитайте Wikipal",
    watchChanges: "Наблюдавайте промените",
    saveArticle: "Запази статията",
    saved: "Запазено",
    shortUrl: "Кратък линк",
    citePage: "Цитирайте тази страница",
    QRCode: "QR код",
    DownloadPDF: "Изтегли като PDF",
    printPage: "Отпечатай тази страница",
    pageInfo: "Информация за страницата",
  },
  termsAndConditions: 'Условия за ползване',
  close: 'Затвори',
  language: {
    searchMessage: "Търсене на езици...",
    selectLanguage: "Изберете език",
    description: "Изберете предпочитания език за преглед на тази статия.",
    notFound: "Не са намерени езици, съответстващи на"
  },
  bias: {
    heading: "Какво е пристрастие?",
    explanation: "Пристрастието е тенденция да се подкрепя или фаворизира определена политическа гледна точка, партия или идея. То може да повлияе на начина, по който човек тълкува събитията, избира информация и представя идеи. Когато един автор има политическо пристрастие, това може да повлияе на неговата перспектива, като повлияе на това кои факти подчертава, как описва хората или проблемите и какви заключения прави. В резултат на това тяхното писане може да отразява техните лични убеждения, а не напълно неутрална или балансирана гледна точка.",
    socialist: "Социалист",
    liberal: "Либерал",
    wikipedia: "Уикипедия",
    conservative: "Консерватор",
    nationalist: "Националист",
    title: "Пристрастие при четене",
  },
  common: {
    loadingPerspective: 'Зареждане на перспектива...',
    fetchingUserInfo: 'Извличане на потребителска информация...',
    home: 'Начало',
    about: 'За нас',
    help: 'Помощ',
    search: 'Търсене',
    searchPlaceholder: 'Търси в Alternipedia...',
    login: 'Вход',
    logout: 'Изход',
    signUp: 'Регистрация',
    profile: 'Профил',
    settings: 'Настройки',
    language: 'Език',
    theme: 'Тема',
    comingSoon: 'Alternipedia идва скоро!',
    stayTuned: 'Следете ни.',
    exampleArticle: 'Примерна статия:',
  },
  navigation: {
    aboutUs: 'За нас',
    currentEvents: 'Текущи събития',
    randomArticle: 'Случайна статия',
    help: 'Помощ',
  },
  footer: {
    pleaseLogin: 'Моля, влезте, за да използвате тази функция.',
    text: {
      "part1": "Текстът е наличен под",
      "part2": "Лиценз Creative Commons Признание-Споделяне на равни условия 4.0 Международен",
      "part3": "; могат да се прилагат допълнителни условия. Като използвате този сайт, вие се съгласявате с",
      "part4": "Общи условия",
      "part5": "и",
      "part6": "Политика за поверителност",
      "part7": ". Alternipedia е проект с отворен код и с нестопанска цел."
    },
    license: 'Лиценз',
    terms: 'Условия',
    privacy: 'Поверителност',
    contact: 'Контакт',
    disclaimers: 'Отказ от отговорност',
    codeOfConduct: 'Етичен кодекс',
    statistics: 'Статистика',
    cookieStatement: 'Декларация за бисквитки',
    developers: 'Разработчици',
  },
  notFound: {
    title: '404',
    heading: 'Страницата не е намерена',
    message: "Съжаляваме, не можахме да намерим страницата, която търсите. Страницата може да е била премахната или връзката може да е неправилна.",
    goHome: 'Към началната страница',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Стани PRO',
    upgradePrompt: 'Надградете, за да отключите премиум функции',
    title: 'Знанието е сила, Усъвършенствай своето.',
    month: 'месец',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Прочетете всичко в Alternipedia',
        basicTheme: 'Използвайте основни настройки на темата',
        saveArticles: 'Запазвайте статии за по-късно четене',
      },
      buttonText: 'Вашият план',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Всичко в Alternipedia, плюс:',
      features: {
        customThemes: 'Използвайте Alternipedia с любимите си теми, цветове, оформления и шрифтове',
        notes: 'Правете бележки, управлявайте ги и ги експортирайте от цялата Alternipedia',
        advancedSearch: 'Разширени резултати от търсене',
        semanticSearch: 'Семантично търсене с мощта на AI',
        aiAssistant: 'Достъп до WikiPal, вашият AI асистент на Alternipedia',
        topicMaps: 'По-добро изследване на темите с картите на темите',
        profileCustomization: 'Още опции за персонализиране на профила',
        aiTranslation: 'AI превод за всяка страница',
        appSupport: 'Постоянна поддръжка в приложението Alternipedia',
      },
      buttonText: 'Надградете сега',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Тази статия е създадена от членове на общността, за да представи националистическа перспектива, фокусирана върху националния суверенитет и традиционната култура.',
      socialist: 'Тази статия е създадена от членове на общността, за да представи социалистическа перспектива, фокусирана върху социалната справедливост, равенството и правата на работниците.',
      liberal: 'Тази статия е създадена от членове на общността, за да представи либерална перспектива, фокусирана върху индивидуалните права, свободата на словото и социалния прогрес.',
      conservative: 'Тази статия е създадена от членове на общността, за да представи консервативна перспектива, фокусирана върху традициите, стабилността и семейните ценности.',
      wikipedia: {
        part1: 'Тази статия е създадена от членове на общността, за да представи неутрална перспектива, фокусирана върху точна информация и факти.',
        part2: 'Вижте Уикипедия →', 
      }
    },
    lastEdited: 'Последно редактирана',
    tools: 'Инструменти',
    content: 'Съдържание',
    close: 'Затвори',
    notFoundHeader: 'Wikipedia статия не е намерена',
    notFoundText: 'Не можахме да намерим следната Wikipedia статия:',
    searchWikipediaText: 'Търсене в Wikipedia',
    article: 'Статия',
    discussion: 'Дискусия',
    read: 'Прочети',
    edit: 'Редактирай',
    history: 'История'
  }
};

// Slovak dictionary
const sk: Dictionary = {
  unauthorised: {
    heading: 'Prístup zamietnutý',
    message: 'Nemáte oprávnenie na prístup na túto stránku. Skontrolujte, či ste prihlásení alebo kontaktujte podporu.'
  },
  blockedAd: {
    part1: 'Zdá sa, že používate blokovač reklám. Deaktivujte ho prosím, aby ste podporili náš web — alebo',
    part2: 'prejdite na PRO',
    part3: 'pre zážitok bez reklám.'
  },
  metadata: {
    description: 'Vzdelávacia wiki navrhnutá na prezentáciu rôznych pohľadov na vedomosti a nápady',
    wikipedia: {  
      part1: 'Objavte Alternipediu',
      part2: '— rôzne perspektívy a nápady',
    },
    conservative: {  
      part1: 'Konzervatívna perspektíva', 
      part2: '— tradícia, stabilita a slobodný trh',
    },
    nationalist: {    
      part1: 'Nacionalistická perspektíva',   
      part2: '— národná suverenita a tradičná kultúra',
    },
    liberal: {
      part1: 'Liberálna perspektíva',   
      part2: '— individuálne práva, sloboda prejavu a sociálna spravodlivosť',  
    },
    socialist: {
      part1: 'Socialistická perspektíva',
      part2: '— spravodlivosť, rovnosť a práva pracujúcich',
    },
  },
  accept: 'Prijať',
  reject: 'Odmietnuť',
  cookieMessage: 'My a naši partneri používame cookies na personalizáciu reklám, meranie výkonu a poskytovanie sociálnych funkcií. Kliknite Prijať na povolenie personalizovaných reklám alebo Odmietnuť na ich zamietnutie. Viac informácií nájdete v našich zásadách ochrany osobných údajov.',
  login: {
    title: 'Prihlásiť sa',
    google: 'Pokračovať s Google',
    facebook: 'Pokračovať s Facebook',
    x: 'Pokračovať s X',
    microsoft: 'Pokračovať s Microsoft',
    policy: "Pri prihlásení súhlasíte s našimi Podmienkami služby a Zásadami ochrany osobných údajov.",
  },
  userMenu: {
    login: "Prihlásiť sa",
    contributions: "Príspevky",
    savedArticles: "Uložené články",
    preferences: "Nastavenia",
    logout: "Odhlásiť sa"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long' }),
    "title": "Zásady ochrany osobných údajov",
    "lastUpdatedText": "Naposledy aktualizované:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Vitajte na Alternipedia — vzdelávacej wiki navrhnutej na prezentáciu rôznych pohľadov na vedomosti a nápady. Váži si vaše súkromie a zaväzujeme sa chrániť vaše osobné údaje. Tieto zásady vysvetľujú, aké informácie zhromažďujeme, ako ich používame a aké máte práva."
      }
    ],
    "sections": [
      {
        "title": "Informácie, ktoré zhromažďujeme",
        "content": [
          {
            "type": "list",
            "items": [
              "Informácie o účte: Pri prihlásení cez poskytovateľa OAuth (napr. Google alebo Meta) získavame vaše meno, e-mailovú adresu a profilovú fotografiu (ak je k dispozícii).",
              "Platobné informácie: Ak sa rozhodnete vykonať platbu alebo dar, Stripe bezpečne spracuje transakcie. Nikdy neukladáme ani nevidíme čísla vašej kreditnej karty.",
              "Analytické údaje: Používame Vercel Analytics na pochopenie všeobecných vzorcov používania, napríklad ktoré stránky sú populárne a ako sa stránka správa. Údaje sú agregované a neidentifikujú vás osobne.",
              "Technické informácie: Pri návšteve našej stránky môžeme automaticky prijímať štandardné údaje z protokolov, ako je typ prehliadača, zariadenie a IP adresa, aby sme udržali bezpečnosť a funkčnosť.",
              "Adsense: Používame Google Adsense na zobrazovanie reklám na našej stránke. Adsense môže používať cookies na zobrazovanie reklám prispôsobených podľa vášho správania v prehliadači na tejto alebo iných stránkach."
            ]
          }
        ]
      },
      {
        "title": "Ako používame vaše informácie",
        "content": [
          {
            "type": "list",
            "items": [
              "Prevádzka a zlepšovanie platformy Alternipedia",
              "Overovanie používateľov a správa účtov",
              "Bezpečné spracovanie platieb cez Stripe",
              "Monitorovanie výkonu a spoľahlivosti stránky",
              "Odpovedanie na otázky alebo požiadavky používateľov"
            ]
          },
          {
            "type": "paragraph",
            "text": "Nepredávame, nepožičiavame ani nevymieňame vaše osobné údaje."
          }
        ]
      },
      {
        "title": "Cookies a sledovanie",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia nepoužíva reklamné ani sledovacie cookies."
          },
          {
            "type": "paragraph",
            "text": "Používame len nevyhnutné cookies potrebné na prihlásenie a funkčnosť stránky."
          }
        ]
      },
      {
        "title": "Ukladanie údajov a bezpečnosť",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaše údaje sú bezpečne uložené pomocou štandardného priemyselného šifrovania a hostingovej infraštruktúry."
          },
          {
            "type": "paragraph",
            "text": "Prijímame primerané opatrenia na ochranu vašich informácií pred stratou, zneužitím alebo neoprávneným prístupom."
          }
        ]
      },
      {
        "title": "Vaše práva",
        "content": [
          {
            "type": "list",
            "items": [
              "Prístup k osobným údajom alebo žiadosť o kópiu",
              "Oprava alebo vymazanie informácií, ktoré o vás uchovávame",
              "Stiahnutie súhlasu alebo zatvorenie účtu"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Prijatie podmienok", "content": ["Prístupom a používaním tejto webovej stránky používatelia súhlasia s dodržiavaním týchto Podmienok služby a ich záväznosťou. Používatelia, ktorí s týmito podmienkami nesúhlasia, by mali okamžite prestať používať stránku."] },
    { "title": "Zodpovednosti používateľského účtu", "content": ["Používatelia sú zodpovední za udržiavanie dôvernosti svojich prihlasovacích údajov. Všetky aktivity vykonané pod účtom používateľa sú výhradnou zodpovednosťou majiteľa účtu. Používatelia musia okamžite informovať administrátorov webu o neautorizovanom prístupe k účtu."] },
    { "title": "Obmedzenie zodpovednosti", "content": ["Webová stránka poskytuje obsah 'taký, aký je', bez akýchkoľvek záruk. Majitelia webu nenesú zodpovednosť za priame, nepriame, náhodné, následné alebo trestné škody vyplývajúce z interakcií používateľov s platformou."] },
    { "title": "Pokyny pre správanie používateľov", "content": ["Nezverejňujte škodlivý alebo zlomyseľný obsah, ktorý by mohol poškodiť web alebo jeho používateľov.", "Rešpektujte práva ostatných používateľov.", "Vyhnite sa aktivitám, ktoré by mohli narušiť funkčnosť webu.", "Dodržiavajte platné miestne a medzinárodné zákony."] },
    { "title": "Zmeny podmienok", "content": ["Web si vyhradzuje právo kedykoľvek tieto podmienky zmeniť. Pokračovanie v používaní webu po zmenách znamená prijatie nových podmienok."] },
    { "title": "Ukončovacia klauzula", "content": ["Web môže ukončiť alebo pozastaviť prístup používateľa bez predchádzajúceho upozornenia pri porušení týchto podmienok alebo z iného dôvodu, ktorý správa považuje za vhodný."] },
    { "title": "Rozhodné právo", "content": ["Tieto podmienky sa riadia zákonmi jurisdikcie, v ktorej je web primárne prevádzkovaný, bez ohľadu na princípy kolízie zákonov."] }

  ],
  tools: {
    textToSpeech: "Text na reč",
    translate: "Preložiť",
    topicMap: "Mapa tém",
    notes: "Moje poznámky",
    wikipal: "Opýtať sa Wikipal",
    watchChanges: "Sledovať zmeny",
    saveArticle: "Uložiť článok",
    saved: "Uložené",
    shortUrl: "Krátky odkaz",
    citePage: "Citovať túto stránku",
    QRCode: "QR kód",
    DownloadPDF: "Stiahnuť ako PDF",
    printPage: "Vytlačiť túto stránku",
    pageInfo: "Informácie o stránke",
  },
  termsAndConditions: 'Podmienky služby',
  close: 'Zavrieť',
  language: {
    searchMessage: "Hľadať jazyky...",
    selectLanguage: "Vyberte jazyk",
    description: "Vyberte si preferovaný jazyk na zobrazenie tohto článku.",
    notFound: "Nenašli sa žiadne jazyky zodpovedajúce"
  },
  bias: {
    heading: "Čo je to predpojatosť?",
    explanation: "Predpojatosť je tendencia podporovať alebo uprednostňovať určitý politický názor, stranu alebo myšlienku. Môže ovplyvniť spôsob, akým človek interpretuje udalosti, vyberá informácie a prezentuje myšlienky. Keď má autor politickú predpojatosť, môže to ovplyvniť jeho perspektívu tým, že ovplyvní, ktoré fakty zdôrazňuje, ako popisuje ľudí alebo problémy a aké závery robí. V dôsledku toho ich písanie môže odrážať ich osobné presvedčenie skôr ako úplne neutrálny alebo vyvážený pohľad.",
    socialist: "Socialista",
    liberal: "Liberál",
    wikipedia: "Wikipédia",
    conservative: "Konzervatívec",
    nationalist: "Nacionalista",
    title: "Predpojatosť čítania",
  },
  common: {
    loadingPerspective: 'Načítavanie perspektívy...',
    fetchingUserInfo: 'Načítavanie informácií o používateľovi...',
    home: 'Domov',
    about: 'O nás',
    help: 'Pomoc',
    search: 'Hľadať',
    searchPlaceholder: 'Hľadať v Alternipedia...',
    login: 'Prihlásiť sa',
    logout: 'Odhlásiť sa',
    signUp: 'Registrovať sa',
    profile: 'Profil',
    settings: 'Nastavenia',
    language: 'Jazyk',
    theme: 'Téma',
    comingSoon: 'Alternipedia čoskoro!',
    stayTuned: 'Zostaňte naladení.',
    exampleArticle: 'Príklad článku:',
  },
  navigation: {
    aboutUs: 'O nás',
    currentEvents: 'Aktuálne udalosti',
    randomArticle: 'Náhodný článok',
    help: 'Pomoc',
  },
  footer: {
    pleaseLogin: 'Prihláste sa, aby ste mohli používať túto funkciu.',
    text: {
      "part1": "Text je k dispozícii podľa",
      "part2": "Licencie Creative Commons Uveďte autora-Zdieľajte rovnakým spôsobom 4.0 Medzinárodná",
      "part3": "; môžu platiť ďalšie podmienky. Používaním tejto stránky súhlasíte s",
      "part4": "Podmienkami",
      "part5": "a",
      "part6": "Zásadami ochrany osobných údajov",
      "part7": ". Alternipedia je open-source neziskový projekt."
    },
    license: 'Licencia',
    terms: 'Podmienky',
    privacy: 'Súkromie',
    contact: 'Kontakt',
    disclaimers: 'Zrieknutia sa zodpovednosti',
    codeOfConduct: 'Kódex správania',
    statistics: 'Štatistiky',
    cookieStatement: 'Vyhlásenie o súboroch cookie',
    developers: 'Vývojári',
  },
  notFound: {
    title: '404',
    heading: 'Stránka nenájdená',
    message: "Ospravedlňujeme sa, nemohli sme nájsť stránku, ktorú hľadáte. Stránka mohla byť odstránená alebo odkaz môže byť nesprávny.",
    goHome: 'Prejsť na domovskú stránku',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Prejsť na PRO',
    upgradePrompt: 'Upgradujte pre odomknutie prémiových funkcií',
    title: 'Vedieť je moc, Zosilnite svoju.',
    month: 'mesiac',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Prečítajte si všetko v Alternipedia',
        basicTheme: 'Použite základnú úpravu témy',
        saveArticles: 'Uložte články na neskoršie čítanie',
      },
      buttonText: 'Váš plán',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Všetko v Alternipedia, plus:',
      features: {
        customThemes: 'Použite Alternipedia vo svojich obľúbených témach, farbách, rozvrhnutí a písme',
        notes: 'Robte poznámky, spravujte ich a exportujte z celej Alternipedia',
        advancedSearch: 'Pokročilé výsledky vyhľadávania',
        semanticSearch: 'Sémantické vyhľadávanie s výkonom AI',
        aiAssistant: 'Získajte prístup k WikiPal, vášmu AI asistentovi Alternipedia',
        topicMaps: 'Lepší výskum tém s mapami tém',
        profileCustomization: 'Viac možností prispôsobenia profilu',
        aiTranslation: 'AI preklad pre akúkoľvek stránku',
        appSupport: 'Pokračujúca podpora v aplikácii Alternipedia',
      },
      buttonText: 'Upgradovať teraz',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Tento článok bol vytvorený členmi komunity, aby predstavil nacionalistickú perspektívu zameranú na národnú suverenitu a tradičnú kultúru.',
      socialist: 'Tento článok bol vytvorený členmi komunity, aby predstavil socialistickú perspektívu zameranú na sociálnu spravodlivosť, rovnosť a práva pracujúcich.',
      liberal: 'Tento článok bol vytvorený členmi komunity, aby predstavil liberálnu perspektívu zameranú na individuálne práva, slobodu prejavu a sociálny pokrok.',
      conservative: 'Tento článok bol vytvorený členmi komunity, aby predstavil konzervatívnu perspektívu zameranú na tradície, stabilitu a rodinné hodnoty.',
      wikipedia: {
        part1: 'Tento článok bol vytvorený členmi komunity, aby predstavil neutrálnu perspektívu zameranú na presné informácie a fakty.',
        part2: 'Pozri Wikipedia →', 
      }
    },
    lastEdited: 'Naposledy upravené',
    tools: 'Nástroje',
    content: 'Obsah',
    close: 'Zavrieť',
    notFoundHeader: 'Článok Wikipedia nebol nájdený',
    notFoundText: 'Nenašli sme nasledujúci článok Wikipedia:',
    searchWikipediaText: 'Hľadať na Wikipédii',
    article: 'Článok',
    discussion: 'Diskusia',
    read: 'Čítať',
    edit: 'Upraviť',
    history: 'História'
  }
};

// Croatian dictionary 
const hr: Dictionary = {
  unauthorised: {
    heading: 'Pristup odbijen',
    message: 'Nemate ovlasti za pristup ovoj stranici. Provjerite jeste li prijavljeni ili kontaktirajte podršku.'
  },
  blockedAd: {
    part1: 'Izgleda da koristite blokator oglasa. Onemogućite ga da podržite našu stranicu — ili',
    part2: 'nadogradite na PRO',
    part3: 'za iskustvo bez oglasa.'
  },
  metadata: {
    description: 'Obrazovna wiki dizajnirana za predstavljanje različitih perspektiva o znanju i idejama',
    wikipedia: {  
      part1: 'Otkrijte Alternipediju',
      part2: '— različite perspektive i ideje',
    },
    conservative: {  
      part1: 'Konzervativna perspektiva', 
      part2: '— tradicija, stabilnost i slobodno tržište',
    },
    nationalist: {    
      part1: 'Nacionalistička perspektiva',   
      part2: '— nacionalni suverenitet i tradicionalna kultura',
    },
    liberal: {
      part1: 'Liberalna perspektiva',   
      part2: '— individualna prava, sloboda govora i društvena pravda',  
    },  
    socialist: {
      part1: 'Socijalistička perspektiva',
      part2: '— pravda, jednakost i prava radnika',
    },
  },
  accept: 'Prihodi',
  reject: 'Odbij',
  cookieMessage: 'Mi i naši partneri koristimo kolačiće za personalizaciju oglasa, mjerenje učinka i pružanje društvenih funkcija. Kliknite Prihodi za dopuštanje personaliziranih oglasa ili Odbij za odbijanje. Pogledajte našu Pravila privatnosti za više informacija.',
  login: {
    title: 'Prijava',
    google: 'Nastavi s Google',
    facebook: 'Nastavi s Facebook',
    x: 'Nastavi s X',
    microsoft: 'Nastavi s Microsoft',
    policy: "Prijavom prihvaćate naše Uvjete pružanja usluga i Pravila o privatnosti.",
  },
  userMenu: {
    login: "Prijava",
    contributions: "Doprinosi",
    savedArticles: "Sačuvani članci",
    preferences: "Postavke",
    logout: "Odjava"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('hr-HR', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('hr-HR', { year: 'numeric', month: 'long' }),
    "title": "Pravila privatnosti",
    "lastUpdatedText": "Zadnje ažuriranje:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Dobrodošli na Alternipedia — obrazovnu wikipediju dizajniranu za predstavljanje različitih perspektiva o znanju i idejama. Cijenimo vašu privatnost i posvećeni smo zaštiti vaših osobnih podataka. Ova politika objašnjava koje informacije prikupljamo, kako ih koristimo i koja su vaša prava."
      }
    ],
    "sections": [
      {
        "title": "Informacije koje prikupljamo",
        "content": [
          {
            "type": "list",
            "items": [
              "Podaci o računu: Kada se prijavite putem OAuth pružatelja (npr. Google ili Meta), primamo vaše ime, e-mail adresu i profilnu sliku (ako je dostupna).",
              "Podaci o plaćanju: Ako odlučite izvršiti uplatu ili donaciju, Stripe sigurno obrađuje transakcije. Nikada ne pohranjujemo niti vidimo podatke vaše kreditne kartice.",
              "Analitički podaci: Koristimo Vercel Analytics za razumijevanje općih obrazaca korištenja, poput popularnih stranica i performansi naše stranice. Podaci su agregirani i ne identificiraju vas osobno.",
              "Tehničke informacije: Prilikom posjeta našoj stranici možemo automatski primati standardne podatke dnevnika, poput tipa preglednika, uređaja i IP adrese, radi održavanja sigurnosti i funkcionalnosti.",
              "Adsense: Koristimo Google Adsense za prikazivanje oglasa na našoj stranici. Adsense može koristiti kolačiće za prikazivanje oglasa prilagođenih vašem ponašanju pregledavanja na ovoj ili drugim stranicama."
            ]
          }
        ]
      },
      {
        "title": "Kako koristimo vaše informacije",
        "content": [
          {
            "type": "list",
            "items": [
              "Upravljanje i poboljšanje platforme Alternipedia",
              "Autentikacija korisnika i upravljanje računima",
              "Sigurno procesiranje plaćanja putem Stripea",
              "Praćenje performansi i pouzdanosti web stranice",
              "Odgovaranje na upite ili zahtjeve korisnika"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ne prodajemo, ne iznajmljujemo niti ne trgujemo vašim osobnim podacima."
          }
        ]
      },
      {
        "title": "Kolačići i praćenje",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ne koristi reklamne niti praćenje kolačiće."
          },
          {
            "type": "paragraph",
            "text": "Koristimo samo nužne kolačiće potrebne za prijavu i funkcionalnost web stranice."
          }
        ]
      },
      {
        "title": "Pohrana podataka i sigurnost",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaši podaci se sigurno pohranjuju koristeći industrijske standarde šifriranja i hosting infrastrukturu."
          },
          {
            "type": "paragraph",
            "text": "Poduzimamo razmjerne mjere za zaštitu vaših informacija od gubitka, zlouporabe ili neovlaštenog pristupa."
          }
        ]
      },
      {
        "title": "Vaša prava",
        "content": [
          {
            "type": "list",
            "items": [
              "Pristup ili zahtjev za kopiju vaših osobnih podataka",
              "Ispravak ili brisanje informacija koje čuvamo o vama",
              "Povlačenje suglasnosti ili zatvaranje računa"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { "title": "Prihvaćanje uvjeta", "content": ["Pristupom i korištenjem ove web stranice, korisnici se slažu pridržavati ovih Uvjeta pružanja usluge. Korisnici koji se ne slažu s ovim uvjetima trebali bi odmah prestati koristiti web stranicu."] },
    { "title": "Odgovornosti korisničkog računa", "content": ["Korisnici su odgovorni za održavanje povjerljivosti svojih podataka za prijavu. Sve aktivnosti pod korisničkim računom su isključiva odgovornost vlasnika računa. Korisnici moraju odmah obavijestiti administratore web stranice o bilo kojem neovlaštenom pristupu računu."] },
    { "title": "Ograničenje odgovornosti", "content": ["Web stranica pruža sadržaj 'kakav jest' bez ikakvih jamstava. Vlasnici web stranice nisu odgovorni za izravne, neizravne, slučajne, posljedice ili kaznene štete koje proizlaze iz interakcija korisnika s platformom."] },
    { "title": "Smjernice za ponašanje korisnika", "content": ["Ne postavljajte štetan ili zlonamjeran sadržaj koji bi mogao naštetiti web stranici ili njezinim korisnicima.", "Poštujte prava drugih korisnika.", "Izbjegavajte aktivnosti koje bi mogle ometati funkcionalnost web stranice.", "Poštujte važeće lokalne i međunarodne zakone."] },
    { "title": "Izmjene uvjeta", "content": ["Web stranica zadržava pravo mijenjati ove uvjete u bilo kojem trenutku. Nastavak korištenja web stranice nakon izmjena smatra se prihvaćanjem novih uvjeta."] },
    { "title": "Klauzula o prekidu", "content": ["Web stranica može prekinuti ili suspendirati pristup korisnika bez prethodne obavijesti u slučaju kršenja ovih uvjeta ili iz drugog razloga koji administracija smatra prikladnim."] },
    { "title": "Mjerodavno pravo", "content": ["Ovi uvjeti podliježu zakonima jurisdikcije u kojoj se web stranica primarno upravlja, bez obzira na načela sukoba zakona."] }

  ],
  tools: {
    textToSpeech: "Tekst u govor",
    translate: "Prevedi",
    topicMap: "Karta tema",
    notes: "Moje bilješke",
    wikipal: "Pitaj Wikipal",
    watchChanges: "Prati promjene",
    saveArticle: "Spremi članak",
    saved: "Spremljeno",
    shortUrl: "Kratka poveznica",
    citePage: "Citiraj ovu stranicu",
    QRCode: "QR kod",
    DownloadPDF: "Preuzmi kao PDF",
    printPage: "Ispiši ovu stranicu",
    pageInfo: "Informacije o stranici",
  },
  termsAndConditions: 'Uvjeti pružanja usluge',
  close: 'Zatvori',
  language: {
    searchMessage: "Pretraži jezike...",
    selectLanguage: "Odaberite jezik",
    description: "Odaberite željeni jezik za prikaz ovog članka.",
    notFound: "Nisu pronađeni jezici koji odgovaraju"
  },
  bias: {
    heading: "Što je pristranost?",
    explanation: "Pristranost je tendencija podržavanja ili favoriziranja određenog političkog stajališta, stranke ili ideje. Može utjecati na način na koji osoba tumači događaje, odabire informacije i predstavlja ideje. Kada autor ima političku pristranost, to može utjecati na njihovu perspektivu utječući na činjenice koje naglašavaju, kako opisuju ljude ili pitanja i koje zaključke izvode. Kao rezultat, njihovo pisanje može odražavati njihova osobna uvjerenja umjesto potpuno neutralnog ili uravnoteženog gledišta.",
    socialist: "Socijalist",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konzervativac",
    nationalist: "Nacionalist",
    title: "Pristranost čitanja",
  },
  common: {
    loadingPerspective: 'Učitavanje perspektive...',
    fetchingUserInfo: 'Učitavanje korisničkih informacija...',
    home: 'Početna',
    about: 'O nama',
    help: 'Pomoć',
    search: 'Pretraži',
    searchPlaceholder: 'Pretraži Alternipediju...',
    login: 'Prijava',
    logout: 'Odjava',
    signUp: 'Registracija',
    profile: 'Profil',
    settings: 'Postavke',
    language: 'Jezik',
    theme: 'Tema',
    comingSoon: 'Alternipedia uskoro stiže!',
    stayTuned: 'Ostanite u toku.',
    exampleArticle: 'Primjer članka:',
  },
  navigation: {
    aboutUs: 'O nama',
    currentEvents: 'Trenutni događaji',
    randomArticle: 'Slučajni članak',
    help: 'Pomoć',
  },
  footer: {
    pleaseLogin: 'Prijavite se da biste koristili ovu značajku.',
    text: {
      "part1": "Tekst je dostupan pod",
      "part2": "Creative Commons Licencom Priznanje autorstva-Dijeli pod istim uvjetima 4.0 Internacionalna",
      "part3": "; mogu se primijeniti dodatni uvjeti. Korištenjem ove stranice prihvaćate",
      "part4": "Uvjeti korištenja",
      "part5": "i",
      "part6": "Politiku privatnosti",
      "part7": ". Alternipedia je open-source neprofitni projekt."
    },
    license: 'Licenca',
    terms: 'Uvjeti',
    privacy: 'Privatnost',
    contact: 'Kontakt',
    disclaimers: 'Odricanja',
    codeOfConduct: 'Kodeks ponašanja',
    statistics: 'Statistika',
    cookieStatement: 'Izjava o kolačićima',
    developers: 'Programeri',
  },
  notFound: {
    title: '404',
    heading: 'Stranica nije pronađena',
    message: "Žao nam je, nismo mogli pronaći stranicu koju tražite. Stranica je možda uklonjena ili poveznica može biti netočna.",
    goHome: 'Idi na početnu stranicu',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Postani PRO',
    upgradePrompt: 'Nadogradi za otključavanje premium značajki',
    title: 'Znanje je moć, Pojačaj svoje.',
    month: 'mjesec',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Pročitaj sve u Alternipedia',
        basicTheme: 'Koristi osnovne prilagodbe tema',
        saveArticles: 'Spremi članke za kasnije čitanje',
      },
      buttonText: 'Tvoj plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Sve u Alternipedia, plus:',
      features: {
        customThemes: 'Koristi Alternipedia u svojim omiljenim temama, bojama, izgledima i fontovima',
        notes: 'Pravljenje bilješki, upravljanje njima i izvoz iz cijele Alternipedia',
        advancedSearch: 'Napredni rezultati pretraživanja',
        semanticSearch: 'Semantičko pretraživanje uz moć AI',
        aiAssistant: 'Pristup WikiPal-u, tvom AI asistentu u Alternipedia',
        topicMaps: 'Bolje istraživanje tema s Tematskim kartama',
        profileCustomization: 'Više opcija prilagodbe profila',
        aiTranslation: 'AI prijevod za bilo koju stranicu',
        appSupport: 'Kontinuirana podrška u Alternipedia aplikaciji',
      },
      buttonText: 'Nadogradi sada',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Ovaj je članak stvorila zajednica kako bi predstavila nacionalističku perspektivu usredotočenu na nacionalni suverenitet i tradicionalnu kulturu.',
      socialist: 'Ovaj je članak stvorila zajednica kako bi predstavila socijalističku perspektivu usredotočenu na društvenu pravdu, jednakost i prava radnika.',
      liberal: 'Ovaj je članak stvorila zajednica kako bi predstavila liberalnu perspektivu usredotočenu na individualna prava, slobodu govora i društveni napredak.',
      conservative: 'Ovaj je članak stvorila zajednica kako bi predstavila konzervativnu perspektivu usredotočenu na tradiciju, stabilnost i obiteljske vrijednosti.',
      wikipedia: {
        part1: 'Ovaj je članak stvorila zajednica kako bi predstavila neutralnu perspektivu usredotočenu na točne informacije i činjenice.',
        part2: 'Pogledajte Wikipediju →', 
      }
    },
    lastEdited: 'Zadnje uređeno',
    tools: 'Alati',
    content: 'Sadržaj',
    article: 'Članak',
    close: 'Zatvori',
    notFoundHeader: 'Wikipedia članak nije pronađen',
    notFoundText: 'Nismo mogli pronaći sljedeći Wikipedia članak:',
    searchWikipediaText: 'Pretraži Wikipediju',
    discussion: 'Rasprava',
    read: 'Pročitaj',
    edit: 'Uredi',
    history: 'Povijest'
  }
};

// Lithuanian dictionary
const lt: Dictionary = {
  unauthorised: {
    heading: 'Prieiga uždrausta',
    message: 'Neturite teisės pasiekti šį puslapį. Patikrinkite, ar esate prisijungę, arba susisiekite su palaikymu.'
  },
  blockedAd: {
    part1: 'Atrodo, kad naudojate skelbimų blokavimo įrankį. Išjunkite jį, kad palaikytumėte mūsų svetainę — arba',
    part2: 'atnaujinkite į PRO',
    part3: 'jei norite patirties be skelbimų.'
  },
  metadata: {
    description: 'Švietimo wiki, skirta pateikti įvairias žinių ir idėjų perspektyvas',
    wikipedia: {  
      part1: 'Atraskite Alternipedia',
      part2: '— įvairios perspektyvos ir idėjos',
    },
    conservative: {  
      part1: 'Konservatyvi perspektyva', 
      part2: '— tradicija, stabilumas ir laisvosios rinkos',
    },
    nationalist: {    
      part1: 'Nacionalistinė perspektyva',   
      part2: '— nacionalinis suverenitetas ir tradicinė kultūra',
    },
    liberal: {
      part1: 'Liberalioji perspektyva',   
      part2: '— individualios teisės, žodžio laisvė ir socialinė teisingumas',  
    },  
    socialist: {
      part1: 'Socialistinė perspektyva',  
      part2: '— socialinė lygybė, kolektyviniai interesai ir valstybės vaidmuo ekonomikoje',  
    },
  },
  accept: 'Priimti',
  reject: 'Atsisakyti',
  cookieMessage: 'Mes ir mūsų partneriai naudojame slapukus (cookies) reklamos suasmeninimui, našumo matavimui ir socialinėms funkcijoms teikti. Spustelėkite Priimti, kad leistumėte suasmenintas reklamas, arba Atsisakyti, kad jas atmestumėte. Daugiau informacijos rasite mūsų Privatumo politikoje.',
  login: {
    title: 'Prisijungti',
    google: 'Tęsti su Google',
    facebook: 'Tęsti su Facebook',
    x: 'Tęsti su X',
    microsoft: 'Tęsti su Microsoft',
    policy: "Prisijungdami sutinkate su mūsų Paslaugų teikimo sąlygomis ir Privatumo politika.",
  },
  userMenu: {
    login: "Prisijungti",
    contributions: "Indėliai",
    savedArticles: "Išsaugoti straipsniai",
    preferences: "Nustatymai",
    logout: "Atsijungti"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('lt-LT', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('lt-LT', { year: 'numeric', month: 'long' }),
    "title": "Privatumo politika",
    "lastUpdatedText": "Paskutinį kartą atnaujinta:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Sveiki atvykę į Alternipedia — edukacinę wikipediją, sukurtą pateikti įvairias žinių ir idėjų perspektyvas. Vertiname jūsų privatumą ir esame įsipareigoję saugoti jūsų asmeninę informaciją. Ši politika paaiškina, kokią informaciją renkamės, kaip ją naudojame ir kokias teises turite."
      }
    ],
    "sections": [
      {
        "title": "Informacija, kurią renkamės",
        "content": [
          {
            "type": "list",
            "items": [
              "Paskyros informacija: Prisijungdami per OAuth paslaugų teikėją (pvz., Google arba Meta) gauname jūsų vardą, el. pašto adresą ir profilio nuotrauką (jei yra).",
              "Mokėjimo informacija: Jei nusprendžiate atlikti mokėjimą ar auką, Stripe saugiai apdoroja sandorius. Mes niekada nesaugome ir nematome jūsų kredito kortelės duomenų.",
              "Analitiniai duomenys: Naudojame Vercel Analytics, kad suprastume bendrus naudojimo modelius, pavyzdžiui, kurios puslapiai yra populiariausi ir kaip veikia mūsų svetainė. Duomenys yra apibendrinti ir neidentifikuoja jūsų asmeniškai.",
              "Techninė informacija: Apsilankę mūsų svetainėje galime automatiškai gauti standartinius žurnalo duomenis, tokius kaip naršyklės tipas, įrenginys ir IP adresas, siekiant užtikrinti saugumą ir funkcionalumą.",
              "Adsense: Naudojame Google Adsense, kad mūsų svetainėje būtų rodomi skelbimai. Adsense gali naudoti slapukus, kad rodytų skelbimus, pritaikytus pagal jūsų naršymo elgesį šioje ar kitose svetainėse."
            ]
          }
        ]
      },
      {
        "title": "Kaip naudojame jūsų informaciją",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia platformos veikimas ir tobulinimas",
              "Vartotojų autentifikacija ir paskyrų valdymas",
              "Saugus mokėjimų apdorojimas per Stripe",
              "Svetainės našumo ir patikimumo stebėjimas",
              "Atsakymas į vartotojų užklausas ar prašymus"
            ]
          },
          {
            "type": "paragraph",
            "text": "Mes neparduodame, nepernuomojame ir neprekiaujame jūsų asmenine informacija."
          }
        ]
      },
      {
        "title": "Slapukai ir sekimas",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia nenaudoja reklamos ar sekimo slapukų."
          },
          {
            "type": "paragraph",
            "text": "Naudojame tik būtinus slapukus, reikalingus prisijungimo seansams ir svetainės funkcionalumui."
          }
        ]
      },
      {
        "title": "Duomenų saugojimas ir saugumas",
        "content": [
          {
            "type": "paragraph",
            "text": "Jūsų duomenys saugomi saugiai, naudojant pramonės standartus atitinkančią šifravimą ir prieglobos infrastruktūrą."
          },
          {
            "type": "paragraph",
            "text": "Imamės pagrįstų priemonių, kad apsaugotume jūsų informaciją nuo praradimo, piktnaudžiavimo ar neautorizuotos prieigos."
          }
        ]
      },
      {
        "title": "Jūsų teisės",
        "content": [
          {
            "type": "list",
            "items": [
              "Prieiga prie jūsų asmens duomenų arba prašymas gauti kopiją",
              "Informacijos apie jus taisymas arba ištrynimas",
              "Sutikimo atšaukimas arba paskyros uždarymas"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ title: 'Sąlygų priėmimas', content: ["Naudodamiesi šia svetaine, vartotojai sutinka laikytis šių paslaugų teikimo sąlygų. Nesutinkantys su šiomis sąlygomis turėtų nedelsdami nutraukti svetainės naudojimą."] },
  { title: 'Vartotojo paskyros atsakomybė', content: ["Vartotojai yra atsakingi už savo paskyros duomenų konfidencialumą. Bet kokia veikla, vykdoma per vartotojo paskyrą, yra vien vartotojo atsakomybė. Apie bet kokį neteisėtą prisijungimą turi būti nedelsiant pranešta svetainės administracijai."] },
  { title: 'Atsakomybės apribojimas', content: ['Svetainės turinys pateikiamas „kaip yra“ be jokių garantijų. Svetainės savininkai neatsako už tiesioginius, netiesioginius, atsitiktinius, pasekminius ar baudžiamuosius nuostolius, kylančius dėl vartotojų sąveikos su platforma.'] },
  {
    title: 'Vartotojo elgesio gairės', content: [
      'Nepateikti kenksmingo ar kenkėjiško turinio, kuris galėtų pakenkti svetainei ar jos vartotojams.',
      'Gerbti kitų vartotojų teises.',
      'Vengti veiksmų, galinčių sutrikdyti svetainės veikimą.',
      'Laikytis galiojančių vietos ir tarptautinių įstatymų.',
    ]
  },
  { title: 'Sąlygų keitimai', content: ['Svetainė pasilieka teisę bet kada keisti šias sąlygas. Toliau naudojantis svetaine po pakeitimų laikoma, kad vartotojas sutinka su naujomis sąlygomis.'] },
  { title: 'Nutraukimo nuostata', content: ['Svetainė gali be įspėjimo sustabdyti arba nutraukti vartotojo prieigą, jei pažeidžiamos šios sąlygos ar dėl kitų priežasčių, kurias administracija laiko tinkamomis.'] },
  { title: 'Taikytina teisė', content: ['Šioms sąlygoms taikomi tos jurisdikcijos įstatymai, kurioje svetainė daugiausia veikia, neatsižvelgiant į įstatymų kolizijos principus.'] },
  ],
  tools: {
    textToSpeech: "Teksto skaitymas balsu",
    translate: "Versti",
    topicMap: "Temų žemėlapis",
    notes: "Mano užrašai",
    wikipal: "Klausk Wikipal",
    watchChanges: "Stebėti pakeitimus",
    saveArticle: "Išsaugoti straipsnį",
    saved: "Išsaugota",
    shortUrl: "Trumpa nuoroda",
    citePage: "Cituoti šį puslapį",
    QRCode: "QR kodas",
    DownloadPDF: "Atsisiųsti kaip PDF",
    printPage: "Spausdinti puslapį",
    pageInfo: "Puslapio informacija",
  },
  termsAndConditions: 'Paslaugų teikimo sąlygos',
  close: 'Uždaryti',
  language: {
    searchMessage: "Ieškoti kalbų...",
    selectLanguage: "Pasirinkite kalbą",
    description: "Pasirinkite pageidaujamą kalbą šiam straipsniui peržiūrėti.",
    notFound: "Nerasta atitinkančių kalbų",
  },
  bias: {
    heading: "Kas yra šališkumas?",
    explanation:
      "Šališkumas yra polinkis palaikyti ar teikti pirmenybę tam tikrai politinei pažiūrai, partijai ar idėjai. Tai gali paveikti, kaip žmogus interpretuoja įvykius, pasirenka informaciją ir pateikia mintis. Kai autorius turi politinį šališkumą, tai gali paveikti jo požiūrį – kokius faktus jis pabrėžia, kaip aprašo žmones ar klausimus ir kokias išvadas daro. Dėl to jo rašymas gali atspindėti asmeninius įsitikinimus, o ne visiškai neutralų ar subalansuotą požiūrį.",
    socialist: "Socialistas",
    liberal: "Liberalus",
    wikipedia: "Vikipedija",
    conservative: "Konservatorius",
    nationalist: "Nacionalistas",
    title: "Skaitymo šališkumas",
  },
  common: {
    loadingPerspective: 'Įkeliama perspektyva...',
    fetchingUserInfo: 'Įkeliama vartotojo informacija...',
    home: 'Pagrindinis',
    about: 'Apie',
    help: 'Pagalba',
    search: 'Paieška',
    searchPlaceholder: 'Ieškoti Alternipedia...',
    login: 'Prisijungti',
    logout: 'Atsijungti',
    signUp: 'Registruotis',
    profile: 'Profilis',
    settings: 'Nustatymai',
    language: 'Kalba',
    theme: 'Tema',
    comingSoon: 'Alternipedia netrukus!',
    stayTuned: 'Sekite naujienas.',
    exampleArticle: 'Pavyzdinis straipsnis:',
  },
  navigation: {
    aboutUs: 'Apie mus',
    currentEvents: 'Dabartiniai įvykiai',
    randomArticle: 'Atsitiktinis straipsnis',
    help: 'Pagalba',
  },
  footer: {
    pleaseLogin: 'Prisijunkite, kad galėtumėte naudotis šia funkcija.',
    text: {
      "part1": "Tekstas prieinamas pagal",
      "part2": "Creative Commons Pripažinimas-Apibendrinimas 4.0 Tarptautinė licencija",
      "part3": "; gali būti taikomos papildomos sąlygos. Naudodamiesi šia svetaine, jūs sutinkate su",
      "part4": "Sąlygomis",
      "part5": "ir",
      "part6": "Privatumo politika",
      "part7": ". Alternipedia yra atviro kodo ne pelno projektas."
    },
    license: 'Licencija',
    terms: 'Taisyklės',
    privacy: 'Privatumas',
    contact: 'Kontaktai',
    disclaimers: 'Atsakomybės apribojimai',
    codeOfConduct: 'Elgesio kodeksas',
    statistics: 'Statistika',
    cookieStatement: 'Slapukų politika',
    developers: 'Kūrėjai',
  },
  notFound: {
    title: '404',
    heading: 'Puslapis nerastas',
    message:
      "Atsiprašome, bet nepavyko rasti puslapio, kurio ieškote. Galbūt jis buvo pašalintas arba nuoroda yra neteisinga.",
    goHome: 'Grįžti į pagrindinį puslapį',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Tapkite PRO',
    upgradePrompt: 'Atnaujinkite, kad atrakintumėte premium funkcijas',
    title: 'Žinios yra galia, Sustiprinkite savo.',
    month: 'mėnuo',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Skaitykite viską Alternipedia',
        basicTheme: 'Naudokite pagrindinį temos pritaikymą',
        saveArticles: 'Išsaugokite straipsnius vėlesniam skaitymui',
      },
      buttonText: 'Jūsų planas',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Viskas Alternipedia, plius:',
      features: {
        customThemes: 'Naudokite Alternipedia su savo mėgstamomis temomis, spalvomis, išdėstymais ir šriftais',
        notes: 'Rašykite pastabas, tvarkykite jas ir eksportuokite iš visos Alternipedia',
        advancedSearch: 'Išplėstiniai paieškos rezultatai',
        semanticSearch: 'Semantinė paieška su AI galia',
        aiAssistant: 'Gaukite prieigą prie WikiPal, jūsų Alternipedia AI asistento',
        topicMaps: 'Geriau tirti temas naudojant Temų žemėlapius',
        profileCustomization: 'Daugiau profilio pritaikymo galimybių',
        aiTranslation: 'AI vertimas bet kuriai svetainei',
        appSupport: 'Nuolatinė pagalba Alternipedia programėlėje',
      },
      buttonText: 'Atnaujinti dabar',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Šį straipsnį sukūrė bendruomenė, siekdama pristatyti nacionalistinę perspektyvą, orientuotą į nacionalinį suverenitetą ir tradicinę kultūrą.',
      socialist: 'Šį straipsnį sukūrė bendruomenė, siekdama pristatyti socialistinę perspektyvą, orientuotą į socialinę teisingumą, lygybę ir darbininkų teises.',
      liberal: 'Šį straipsnį sukūrė bendruomenė, siekdama pristatyti liberalią perspektyvą, orientuotą į individualias teises, žodžio laisvę ir socialinę pažangą.',
      conservative: 'Šį straipsnį sukūrė bendruomenė, siekdama pristatyti konservatyvią perspektyvą, orientuotą į tradiciją, stabilumą ir šeimos vertybes.',
      wikipedia: {
        part1: 'Šį straipsnį sukūrė bendruomenė, siekdama pristatyti neutralią perspektyvą, orientuotą į tikslią informaciją ir faktus.',
        part2: 'Peržiūrėkite Vikipediją →', 
      }
    },
    lastEdited: 'Paskutinį kartą redagavo',
    tools: 'Įrankiai',
    close: 'Uždaryti',
    notFoundHeader: 'Wikipedia straipsnis nerastas',
    notFoundText: 'Nepavyko rasti šio Wikipedia straipsnio:',
    searchWikipediaText: 'Ieškoti Wikipedijoje',
    content: 'Turinys',
    article: 'Straipsnis',
    discussion: 'Diskusija',
    read: 'Skaityti',
    edit: 'Redaguoti',
    history: 'Istorija'
  }
};

// Slovenian dictionary
const sl: Dictionary = {
  unauthorised: {
    heading: 'Dostop zavrnjen',
    message: 'Nimate dovoljenja za dostop do te strani. Preverite, ali ste prijavljeni, ali se obrnite na podporo.'
  },
  blockedAd: {
    part1: 'Zdi se, da uporabljate blokator oglasov. Prosimo, onemogočite ga, da podprete našo stran — ali',
    part2: 'nadgradite na PRO',
    part3: 'za izkušnjo brez oglasov.'
  },
  metadata: {
    description: 'Izobraževalni wiki, zasnovan za predstavitev različnih pogledov na znanje in ideje',
    wikipedia: {  
      part1: 'Odkrijte Alternipedijo',
      part2: '— različne perspektive in ideje',
    },
    conservative: {  
      part1: 'Konzervativna perspektiva', 
      part2: '— tradicija, stabilnost in prosto tržišče',
    },
    nationalist: {    
      part1: 'Nacionalistična perspektiva',   
      part2: '— nacionalni suverenost in tradicionalna kultura',
    },
    liberal: {
      part1: 'Liberalna perspektiva',   
      part2: '— individualne pravice, svoboda govora in socialnana pravičnost',  
    },
    socialist: {
      part1: 'Socialistična perspektiva',  
      part2: '— socialna enakost, kolektivni interesi in vloga države v gospodarstvu',  
    },
  },
  accept: 'Sprejeti',
  reject: 'Zavrni',
  cookieMessage: 'Mi in naši partnerji uporabljamo piškotke za personalizacijo oglasov, merjenje uspešnosti in zagotavljanje družbenih funkcij. Kliknite Sprejeti, da dovolite personalizirane oglase, ali Zavrni, da jih zavrnete. Več informacij najdete v naši politiki zasebnosti.',
  login: {
    title: 'Prijava',
    google: 'Nadaljuj z Google',
    facebook: 'Nadaljuj s Facebook',
    x: 'Nadaljuj z X',
    microsoft: 'Nadaljuj z Microsoft',
    policy: "S prijavo sprejemate naše pogoje storitve in politiko zasebnosti.",
  },

  userMenu: {
    login: "Prijava",
    contributions: "Prispevki",
    savedArticles: "Shranjeni članki",
    preferences: "Nastavitve",
    logout: "Odjava"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('sl-SI', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('sl-SI', { year: 'numeric', month: 'long' }),
    "title": "Pravilnik o zasebnosti",
    "lastUpdatedText": "Zadnja posodobitev:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Dobrodošli na Alternipedia — izobraževalni wiki, zasnovan za predstavitev različnih pogledov na znanje in ideje. Cenimo vašo zasebnost in smo zavezani k varovanju vaših osebnih podatkov. Ta pravilnik pojasnjuje, katere podatke zbiramo, kako jih uporabljamo in katere pravice imate."
      }
    ],
    "sections": [
      {
        "title": "Podatki, ki jih zbiramo",
        "content": [
          {
            "type": "list",
            "items": [
              "Podatki o računu: Ko se prijavite prek ponudnika OAuth (npr. Google ali Meta), prejmemo vaše ime, e-poštni naslov in profilno sliko (če je na voljo).",
              "Podatki o plačilu: Če se odločite za plačilo ali donacijo, Stripe varno obdela transakcije. Nikoli ne shranjujemo ali vidimo številk vaše kreditne kartice.",
              "Analitični podatki: Uporabljamo Vercel Analytics za razumevanje splošnih vzorcev uporabe, kot so priljubljene strani in delovanje spletnega mesta. Podatki so združeni in vas osebno ne identificirajo.",
              "Tehnični podatki: Ko obiščete našo spletno stran, lahko samodejno prejmemo standardne podatke dnevnika, kot so tip brskalnika, naprava in IP naslov, za vzdrževanje varnosti in funkcionalnosti.",
              "Adsense: Uporabljamo Google Adsense za prikazovanje oglasov na naši spletni strani. Adsense lahko uporablja piškotke za prikaz oglasov, prilagojenih vašemu vedenju brskanja na tej ali drugih spletnih straneh."
            ]
          }
        ]
      },
      {
        "title": "Kako uporabljamo vaše podatke",
        "content": [
          {
            "type": "list",
            "items": [
              "Upravljanje in izboljševanje platforme Alternipedia",
              "Avtentikacija uporabnikov in upravljanje računov",
              "Varen proces plačil preko Stripe",
              "Spremljanje zmogljivosti in zanesljivosti spletnega mesta",
              "Odgovarjanje na vprašanja ali zahteve uporabnikov"
            ]
          },
          {
            "type": "paragraph",
            "text": "Vaših osebnih podatkov ne prodajamo, ne oddajamo v najem in ne trgujemo z njimi."
          }
        ]
      },
      {
        "title": "Piškotki in sledenje",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ne uporablja oglasnih ali sledilnih piškotkov."
          },
          {
            "type": "paragraph",
            "text": "Uporabljamo le nujne piškotke, potrebne za prijavo in funkcionalnost spletnega mesta."
          }
        ]
      },
      {
        "title": "Shranjevanje podatkov in varnost",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaši podatki so varno shranjeni z uporabo industrijskih standardov šifriranja in gostiteljske infrastrukture."
          },
          {
            "type": "paragraph",
            "text": "Upoštevamo razumne ukrepe za zaščito vaših podatkov pred izgubo, zlorabo ali nepooblaščenim dostopom."
          }
        ]
      },
      {
        "title": "Vaše pravice",
        "content": [
          {
            "type": "list",
            "items": [
              "Dostop do vaših osebnih podatkov ali zahteva za kopijo",
              "Popravek ali izbris informacij, ki jih hranimo o vas",
              "Umik soglasja ali zaprtje računa"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [{ title: 'Sprejem pogojev', content: ["Z dostopom do te spletne strani in njeno uporabo se uporabniki strinjajo, da bodo spoštovali te pogoje uporabe. Uporabniki, ki se s pogoji ne strinjajo, morajo takoj prenehati z uporabo strani."] },
  { title: 'Odgovornost uporabniškega računa', content: ["Uporabniki so odgovorni za varovanje zaupnosti svojih prijavnih podatkov. Vsaka dejavnost, ki se izvaja pod uporabniškim računom, je izključna odgovornost imetnika računa. O kakršnem koli nepooblaščenem dostopu je treba takoj obvestiti administratorje spletne strani."] },
  { title: 'Omejitev odgovornosti', content: ['Spletna stran zagotavlja vsebino »takšno, kot je«, brez kakršnih koli jamstev. Lastniki spletne strani ne odgovarjajo za neposredno, posredno, naključno, posledično ali kaznovalno škodo, ki izhaja iz interakcije uporabnikov s platformo.'] },
  {
    title: 'Smernice vedenja uporabnikov', content: [
      'Ne nalagajte škodljive ali zlonamerne vsebine, ki bi lahko škodovala spletni strani ali njenim uporabnikom.',
      'Spoštujte pravice drugih uporabnikov.',
      'Izogibajte se dejavnostim, ki bi lahko motile delovanje spletne strani.',
      'Spoštujte veljavne lokalne in mednarodne zakone.',
    ]
  },
  { title: 'Spremembe pogojev', content: ['Spletna stran si pridržuje pravico, da kadarkoli spremeni te pogoje. Nadaljnja uporaba spletne strani po spremembah pomeni sprejem novih pogojev.'] },
  { title: 'Klavzula o prenehanju', content: ['Spletna stran lahko brez predhodnega obvestila prekine ali suspendira dostop uporabnika zaradi kršitev teh pogojev ali iz drugih razlogov, ki jih uprava šteje za primerne.'] },
  { title: 'Pravo, ki se uporablja', content: ['Ti pogoji se urejajo po zakonih jurisdikcije, v kateri spletna stran večinoma deluje, ne glede na kolizijska načela.'] },
  ],
  tools: {
    textToSpeech: "Pretvorba besedila v govor",
    translate: "Prevedi",
    topicMap: "Zemljevid tem",
    notes: "Moje opombe",
    wikipal: "Vprašaj Wikipal",
    watchChanges: "Spremljaj spremembe",
    saveArticle: "Shrani članek",
    saved: "Shranjeno",
    shortUrl: "Kratka povezava",
    citePage: "Citiraj to stran",
    QRCode: "QR koda",
    DownloadPDF: "Prenesi kot PDF",
    printPage: "Natisni stran",
    pageInfo: "Informacije o strani",
  },
  termsAndConditions: 'Pogoji storitve',
  close: 'Zapri',
  language: {
    searchMessage: "Išči jezike...",
    selectLanguage: "Izberite jezik",
    description: "Izberite želeni jezik za ogled tega članka.",
    notFound: "Ni najdenih ustreznih jezikov",
  },
  bias: {
    heading: "Kaj je pristranskost?",
    explanation:
      "Pristranskost je nagnjenost k podpori ali naklonjenosti določeni politični usmeritvi, stranki ali ideji. Lahko vpliva na to, kako oseba razlaga dogodke, izbira informacije in predstavlja ideje. Ko ima avtor politično pristranskost, lahko to vpliva na njegov pogled – katere dejstva poudarja, kako opisuje ljudi ali teme in kakšne sklepe sprejema. Posledično lahko njegovo pisanje odraža osebna prepričanja namesto popolnoma nevtralnega ali uravnoteženega pogleda.",
    socialist: "Socialist",
    liberal: "Liberalec",
    wikipedia: "Wikipedia",
    conservative: "Konzervativec",
    nationalist: "Nacionalist",
    title: "Branje s pristranskostjo",
  },
  common: {
    loadingPerspective: 'Nalaganje perspektive...',
    fetchingUserInfo: 'Nalaganje uporabniških informacij...',
    home: 'Domov',
    about: 'O nas',
    help: 'Pomoč',
    search: 'Iskanje',
    searchPlaceholder: 'Išči po Alternipedia...',
    login: 'Prijava',
    logout: 'Odjava',
    signUp: 'Registracija',
    profile: 'Profil',
    settings: 'Nastavitve',
    language: 'Jezik',
    theme: 'Tema',
    comingSoon: 'Alternipedia prihaja kmalu!',
    stayTuned: 'Ostanite z nami.',
    exampleArticle: 'Primer članka:',
  },
  navigation: {
    aboutUs: 'O nas',
    currentEvents: 'Trenutni dogodki',
    randomArticle: 'Naključni članek',
    help: 'Pomoč',
  },
  footer: {
    pleaseLogin: 'Prijavite se, da boste lahko uporabljali to funkcijo.',
    text: {
      "part1": "Besedilo je na voljo pod",
      "part2": "Creative Commons Licenco Priznanje avtorstva-Deljenje pod enakimi pogoji 4.0 Mednarodna",
      "part3": "; lahko veljajo dodatni pogoji. Z uporabo tega spletnega mesta se strinjate z",
      "part4": "Pogoji in določili",
      "part5": "in",
      "part6": "Politiko zasebnosti",
      "part7": ". Alternipedia je odprtokodni neprofitni projekt."
    },
    license: 'Licenca',
    terms: 'Pogoji uporabe',
    privacy: 'Zasebnost',
    contact: 'Kontakt',
    disclaimers: 'Omejitev odgovornosti',
    codeOfConduct: 'Kodeks ravnanja',
    statistics: 'Statistika',
    cookieStatement: 'Izjava o piškotkih',
    developers: 'Razvijalci',
  },
  notFound: {
    title: '404',
    heading: 'Stran ni najdena',
    message:
      "Opravičujemo se, vendar strani, ki jo iščete, ni bilo mogoče najti. Morda je bila odstranjena ali pa je povezava napačna.",
    goHome: 'Pojdi na začetno stran',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Postani PRO',
    upgradePrompt: 'Nadgradi za odklep premium funkcij',
    title: 'Znanje je moč, Pojačajte svoje.',
    month: 'mesec',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Preberi vse v Alternipedia',
        basicTheme: 'Uporabi osnovne prilagoditve teme',
        saveArticles: 'Shrani članke za kasnejše branje',
      },
      buttonText: 'Tvoj načrt',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Vse v Alternipedia, plus:',
      features: {
        customThemes: 'Uporabi Alternipedia v svojih najljubših temah, barvah, postavitvah in pisavah',
        notes: 'Delaj zapiske, jih upravljaj in izvozi po celotni Alternipedia',
        advancedSearch: 'Napredni rezultati iskanja',
        semanticSearch: 'Semantično iskanje z močjo AI',
        aiAssistant: 'Dostop do WikiPal, tvojega AI asistenta Alternipedia',
        topicMaps: 'Boljše raziskovanje tem s tematskimi zemljevidi',
        profileCustomization: 'Več možnosti prilagoditve profila',
        aiTranslation: 'AI prevod za katero koli stran',
        appSupport: 'Nadaljnja podpora v Alternipedia aplikaciji',
      },
      buttonText: 'Nadgradi zdaj',
    },
  },
  article: {
    biasIntro: {
      nationalist: 'Ta članek je ustvarila skupnost, da predstavi nacionalistično perspektivo, osredotočeno na nacionalno suverenost in tradicionalno kulturo.',
      socialist: 'Ta članek je ustvarila skupnost, da predstavi socialistično perspektivo, osredotočeno na socialno pravičnost, enakost in delavske pravice.',
      liberal: 'Ta članek je ustvarila skupnost, da predstavi liberalno perspektivo, osredotočeno na individualne pravice, svobodo govora in socialni napredek.',
      conservative: 'Ta članek je ustvarila skupnost, da predstavi konservativno perspektivo, osredotočeno na tradicijo, stabilnost in družinske vrednote.',
      wikipedia: {
        part1: 'Ta članek je ustvarila skupnost, da predstavi nevtralno perspektivo, osredotočeno na natančne informacije in dejstva.',
        part2: 'Preverite Wikipedijo →',
      }
    },
    lastEdited: 'Zadnjič urejeno',
    tools: 'Orodja',
    content: 'Vsebina',
    close: 'Zapri',
    notFoundHeader: 'Članek Wikipedije ni najden',
    notFoundText: 'Nismo našli naslednjega članka Wikipedije:',
    searchWikipediaText: 'Išči na Wikipediji',
    article: 'Članek',
    discussion: 'Diskusija',
    read: 'Preberi',
    edit: 'Uredi',
    history: 'Zgodovina'
  }
};

// Latvian dictionary
const lv: Dictionary = {
  unauthorised: {
    heading: 'Piekļuve liegta',
    message: 'Jums nav atļaujas piekļūt šai lapai. Pārbaudiet, vai esat pieteicies, vai sazinieties ar atbalstu.'
  },
  blockedAd: {
    part1: 'Izskatās, ka izmantojat reklāmu bloķētāju. Lūdzu, atspējojiet to, lai atbalstītu mūsu vietni — vai',
    part2: 'jauniniet uz PRO',
    part3: 'lai iegūtu pieredzi bez reklāmām.'
  },
  metadata: {
    description: 'Izglītojošs vikivietne, kas izveidota, lai piedāvātu dažādus skatījumus uz zināšanām un idejām',
    wikipedia: {  
      part1: 'Atklājiet Alternipēdiju',
      part2: '— dažādas perspektīvas un idejas',
    },
    conservative: {  
      part1: 'Konservatīvā perspektīva', 
      part2: '— tradīcija, stabilitāte un brīvais tirgus',
    },
    nationalist: {    
      part1: 'Nacionālistiskā perspektīva',   
      part2: '— nacionālā suverenitāte un tradicionālā kultūra',
    },
    liberal: {
      part1: 'Liberālā perspektīva',   
      part2: '— individuālās tiesības, vārda brīvība un sociālā taisnīgums',  
    },
    socialist: {
      part1: 'Sociālistiskā perspektīva',  
      part2: '— sociālā vienlīdzība, kolektīvās intereses un valsts loma ekonomikā',  
    },
  },
  accept: 'Pieņemt',
  reject: 'Noraidīt',
  cookieMessage: 'Mēs un mūsu partneri izmantojam sīkdatnes, lai personalizētu reklāmas, mērītu veiktspēju un nodrošinātu sociālās funkcijas. Noklikšķiniet uz Pieņemt, lai atļautu personalizētas reklāmas, vai Noraidīt, lai noraidītu tās. Papildinformāciju skatiet mūsu Privātuma politikā.',
  login: {
    title: 'Pieslēgties',
    google: 'Turpināt ar Google',
    facebook: 'Turpināt ar Facebook',
    x: 'Turpināt ar X',
    microsoft: 'Turpināt ar Microsoft',
    policy: "Piesakoties, jūs piekrītat mūsu Pakalpojumu sniegšanas noteikumiem un Privātuma politikai.",
  },
  userMenu: {
    login: "Pieslēgties",
    contributions: "Ieguldījumi",
    savedArticles: "Saglabātie raksti",
    preferences: "Iestatījumi",
    logout: "Atslēgties"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('lv-LV', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('lv-LV', { year: 'numeric', month: 'long' }),
    "title": "Privātuma politika",
    "lastUpdatedText": "Pēdējoreiz atjaunināts:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Laipni lūdzam Alternipedia — izglītojošā vikivietnē, kas izveidota, lai piedāvātu dažādus skatījumus uz zināšanām un idejām. Mēs cienām jūsu privātumu un esam apņēmušies aizsargāt jūsu personisko informāciju. Šī politika izskaidro, kādus datus mēs vācām, kā tos izmantojam un kādas ir jūsu tiesības."
      }
    ],
    "sections": [
      {
        "title": "Informācija, ko mēs vākam",
        "content": [
          {
            "type": "list",
            "items": [
              "Kontu informācija: Pierakstoties, izmantojot OAuth pakalpojumu sniedzēju (piemēram, Google vai Meta), mēs saņemam jūsu vārdu, e-pasta adresi un profila attēlu (ja pieejams).",
              "Maksājumu informācija: Ja izvēlaties veikt maksājumu vai ziedojumu, Stripe droši apstrādā darījumus. Mēs nekad nesaglabājam un neredzam jūsu kredītkartes datus.",
              "Analītikas dati: Mēs izmantojam Vercel Analytics, lai izprastu vispārīgus lietošanas modeļus, piemēram, kuras lapas ir populāras un kā darbojas mūsu vietne. Šie dati ir apkopoti un nenosaka jūsu personību.",
              "Tehniskā informācija: Apmeklējot mūsu vietni, mēs varam automātiski saņemt standarta žurnālu datus, piemēram, pārlūkprogrammas tipu, ierīci un IP adresi, lai uzturētu drošību un funkcionalitāti.",
              "Adsense: Mēs izmantojam Google Adsense, lai mūsu vietnē rādītu reklāmas. Adsense var izmantot sīkfailus, lai rādītu reklāmas, kas pielāgotas jūsu pārlūkošanas darbībām šajā vai citās vietnēs."
            ]
          }
        ]
      },
      {
        "title": "Kā mēs izmantojam jūsu informāciju",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia platformas darbības nodrošināšana un uzlabošana",
              "Lietotāju autentifikācija un kontu pārvaldība",
              "Droša maksājumu apstrāde caur Stripe",
              "Vietnes veiktspējas un uzticamības uzraudzība",
              "Atbildēšana uz lietotāju jautājumiem vai pieprasījumiem"
            ]
          },
          {
            "type": "paragraph",
            "text": "Mēs nepārdodam, neizīrējam un netirdzniecībā neizmantoto jūsu personisko informāciju."
          }
        ]
      },
      {
        "title": "Sīkdatnes un izsekošana",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia neizmanto reklāmas vai izsekošanas sīkdatnes."
          },
          {
            "type": "paragraph",
            "text": "Mēs izmantojam tikai būtiskas sīkdatnes, kas nepieciešamas pieteikšanās sesijām un vietnes funkcionalitātei."
          }
        ]
      },
      {
        "title": "Datu glabāšana un drošība",
        "content": [
          {
            "type": "paragraph",
            "text": "Jūsu dati tiek droši glabāti, izmantojot nozares standartiem atbilstošu šifrēšanu un mitināšanas infrastruktūru."
          },
          {
            "type": "paragraph",
            "text": "Mēs veicam saprātīgus pasākumus, lai aizsargātu jūsu informāciju no zaudējumiem, ļaunprātīgas izmantošanas vai neatļautas piekļuves."
          }
        ]
      },
      {
        "title": "Jūsu tiesības",
        "content": [
          {
            "type": "list",
            "items": [
              "Piekļuve jūsu personiskajiem datiem vai pieprasījums pēc kopijas",
              "Informācijas labošana vai dzēšana, ko mēs glabājam par jums",
              "Piekrīšanas atsaukšana vai konta slēgšana"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Noteikumu pieņemšana', content: ["Izmantojot šo vietni, lietotāji piekrīt ievērot šos pakalpojumu noteikumus. Lietotāji, kuri nepiekrīt šiem noteikumiem, nekavējoties jāpārtrauc vietnes izmantošana."] },
    { title: 'Lietotāja konta atbildība', content: ["Lietotāji ir atbildīgi par sava konta datu konfidencialitātes saglabāšanu. Visa darbība, kas notiek zem lietotāja konta, ir tikai konta īpašnieka atbildība. Par jebkuru neatļautu piekļuvi nekavējoties jāinformē vietnes administratori."] },
    { title: 'Atbildības ierobežojums', content: ['Vietnes saturs tiek nodrošināts “tāds, kāds tas ir”, bez jebkādām garantijām. Vietnes īpašnieki nav atbildīgi par tiešiem, netiešiem, nejaušiem, izrietošiem vai soda zaudējumiem, kas radušies lietotāja mijiedarbības rezultātā ar platformu.'] },
    {
      title: 'Lietotāja uzvedības vadlīnijas', content: [
        'Neaugšupielādēt kaitīgu vai ļaunprātīgu saturu, kas var kaitēt vietnei vai tās lietotājiem.',
        'Ievērot citu lietotāju tiesības.',
        'Izvairīties no darbībām, kas varētu traucēt vietnes darbību.',
        'Ievērot piemērojamos vietējos un starptautiskos likumus.',
      ]
    },
    { title: 'Noteikumu grozījumi', content: ['Vietne patur tiesības jebkurā laikā mainīt šos noteikumus. Vietnes turpmāka izmantošana pēc izmaiņām nozīmē jauno noteikumu pieņemšanu.'] },
    { title: 'Izbeigšanas nosacījumi', content: ['Vietne var pārtraukt vai apturēt lietotāja piekļuvi bez iepriekšēja brīdinājuma par šo noteikumu pārkāpumiem vai citu iemeslu dēļ, ko administrācija uzskata par piemērotiem.'] },
    { title: 'Piemērojamie likumi', content: ['Šos noteikumus reglamentē tās jurisdikcijas likumi, kur vietne galvenokārt darbojas, neņemot vērā kolīziju tiesību principus.'] },
  ],
  termsAndConditions: 'Pakalpojumu sniegšanas noteikumi',
  close: 'Aizvērt',
  tools: {
    textToSpeech: "Teksta pārvēršana runā",
    translate: "Tulkot",
    topicMap: "Tematu karte",
    notes: "Manas piezīmes",
    wikipal: "Jautā Wikipal",
    watchChanges: "Sekot izmaiņām",
    saveArticle: "Saglabāt rakstu",
    saved: "Saglabāts",
    shortUrl: "Īsā saite",
    citePage: "Citēt šo lapu",
    QRCode: "QR kods",
    DownloadPDF: "Lejupielādēt kā PDF",
    printPage: "Drukāt lapu",
    pageInfo: "Informācija par lapu",
  },
  language: {
    searchMessage: "Meklēt valodas...",
    selectLanguage: "Izvēlieties valodu",
    description: "Izvēlieties vēlamo valodu šī raksta skatīšanai.",
    notFound: "Nav atrastas atbilstošas valodas",
  },
  bias: {
    heading: "Kas ir aizspriedums?",
    explanation:
      "Aizspriedums ir tieksme atbalstīt vai dot priekšroku noteiktam politiskam uzskatam, partijai vai idejai. Tas var ietekmēt, kā cilvēks interpretē notikumus, izvēlas informāciju un izsaka savas domas. Kad autoram ir politisks aizspriedums, tas var ietekmēt viņa skatījumu — kuri fakti tiek uzsvērti, kā tiek raksturoti cilvēki vai jautājumi un kādi secinājumi tiek izdarīti. Rezultātā raksts var atspoguļot autora personīgos uzskatus, nevis pilnīgi neitrālu vai līdzsvarotu viedokli.",
    socialist: "Sociālists",
    liberal: "Liberālis",
    wikipedia: "Vikipēdija",
    conservative: "Konservatīvs",
    nationalist: "Nacionālists",
    title: "Lasīšanas aizspriedums",
  },
  common: {
    loadingPerspective: 'Ielādē perspektīvu...',
    fetchingUserInfo: 'Ielādē lietotāja informāciju...',
    home: 'Sākums',
    about: 'Par mums',
    help: 'Palīdzība',
    search: 'Meklēt',
    searchPlaceholder: 'Meklēt Alternipedia...',
    login: 'Pieteikties',
    logout: 'Izrakstīties',
    signUp: 'Reģistrēties',
    profile: 'Profils',
    settings: 'Iestatījumi',
    language: 'Valoda',
    theme: 'Tēma',
    comingSoon: 'Alternipedia drīzumā!',
    stayTuned: 'Sekojiet jaunumiem.',
    exampleArticle: 'Piemēra raksts:',
  },
  navigation: {
    aboutUs: 'Par mums',
    currentEvents: 'Pašreizējie notikumi',
    randomArticle: 'Nejaušs raksts',
    help: 'Palīdzība',
  },
  footer: {
    pleaseLogin: 'Lai izmantotu šo funkciju, lūdzu, piesakieties.',
    text: {
      "part1": "Teksts pieejams saskaņā ar",
      "part2": "Creative Commons Atzīmes-ShareAlike 4.0 Starptautiskā licence",
      "part3": "; var tikt piemēroti papildu noteikumi. Izmantojot šo vietni, jūs piekrītat",
      "part4": "Noteikumiem un nosacījumiem",
      "part5": "un",
      "part6": "Privātuma politikai",
      "part7": ". Alternipedia ir atvērtā koda bezpeļņas projekts."
    },
    license: 'Licence',
    terms: 'Noteikumi',
    privacy: 'Privātums',
    contact: 'Kontakti',
    disclaimers: 'Aizbildinājumi',
    codeOfConduct: 'Uzvedības kodekss',
    statistics: 'Statistika',
    cookieStatement: 'Sīkdatņu paziņojums',
    developers: 'Izstrādātāji',
  },
  notFound: {
    title: '404',
    heading: 'Lapa nav atrasta',
    message:
      "Atvainojiet, bet mēs nevarējām atrast lapu, kuru meklējat. Lapa, iespējams, ir dzēsta vai saite ir nepareiza.",
    goHome: 'Doties uz sākumlapu',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Pārejiet uz PRO',
    upgradePrompt: 'Jauniniet, lai atbloķētu premium funkcijas',
    title: 'Zināšanas ir spēks, Palieliniet savas.',
    month: 'mēnesis',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lasiet visu Alternipedia',
        basicTheme: 'Izmantojiet pamata tēmas pielāgošanu',
        saveArticles: 'Saglabājiet rakstus, lai tos lasītu vēlāk',
      },
      buttonText: 'Jūsu plāns',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Viss Alternipedia, plus:',
      features: {
        customThemes: 'Izmantojiet Alternipedia savās iecienītākajās tēmās, krāsās, izkārtojumos un fontu stilā',
        notes: 'Veidojiet piezīmes, pārvaldiet tās un eksportējiet no visas Alternipedia',
        advancedSearch: 'Paplašinātie meklēšanas rezultāti',
        semanticSearch: 'Semantiskā meklēšana ar AI spēku',
        aiAssistant: 'Piekļuve WikiPal, jūsu Alternipedia AI asistentam',
        topicMaps: 'Labāka tēmu izpēte ar tēmu kartēm',
        profileCustomization: 'Vairāk profila pielāgošanas iespēju',
        aiTranslation: 'AI tulkojums jebkurai lapai',
        appSupport: 'Nepārtraukta atbalsta sniegšana Alternipedia lietotnē',
      },
      buttonText: 'Jaunināt tagad',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Šo rakstu ir izveidojusi kopiena, lai piedāvātu sociālistisku skatījumu, koncentrējoties uz sociālo taisnīgumu, vienlīdzību un darba ņēmēju tiesībām.',
      liberal: 'Šo rakstu ir izveidojusi kopiena, lai piedāvātu liberālu skatījumu, koncentrējoties uz individuālajām tiesībām, vārda brīvību un sociālo progresu.',
      conservative: 'Šo rakstu ir izveidojusi kopiena, lai piedāvātu konservatīvu skatījumu, koncentrējoties uz tradīcijām, stabilitāti un ģimenes vērtībām.',
      nationalist: 'Šo rakstu ir izveidojusi kopiena, lai piedāvātu nacionālistisku skatījumu, koncentrējoties uz nacionālo suverenitāti un tradicionālo kultūru.',
      wikipedia: {
        part1: 'Šo rakstu ir izveidojusi kopiena, lai piedāvātu neitrālu skatījumu, koncentrējoties uz precīzu informāciju un faktiem.',
        part2: 'Pārbaudiet Vikipēdiju →',
      }
    },
    lastEdited: 'Pēdējoreiz rediģēts',
    tools: 'Rīki',
    content: 'Saturs',
    close: 'Aizvērt',
    notFoundHeader: 'Wikipedia raksts nav atrasts',
    notFoundText: 'Neizdevās atrast šo Wikipedia rakstu:',
    searchWikipediaText: 'Meklēt Wikipēdijā',
    article: 'Raksts',
    discussion: 'Diskusija',
    read: 'Lasīt',
    edit: 'Rediģēt',
    history: 'Vēsture'
  }
};

// Estonian dictionary
const et: Dictionary = {
  unauthorised: {
    heading: 'Juurdepääs keelatud',
    message: 'Teil ei ole õigust sellele lehele juurde pääseda. Kontrollige, kas olete sisse logitud või võtke ühendust toega.'
  },
  blockedAd: {
    part1: 'Tundub, et kasutate reklaamide blokeerijat. Palun keelake see meie saidi toetuseks — või',
    part2: 'uuendage PRO-le',
    part3: 'reklaamivaba kogemuse jaoks.'
  },
  metadata: {
    description: 'Hariduslik vikileht, mis on loodud esitama erinevaid vaatenurki teadmistele ja ideedele',
    wikipedia: {  
      part1: 'Avasta Alternipedia',
      part2: '— erinevad perspektiivid ja ideed',
    },
    conservative: {  
      part1: 'Konsservatiivne vaatenurk', 
      part2: '— traditsioon, stabiilsus ja vaba turg',
    },
    nationalist: {    
      part1: 'Rahvuslik vaatenurk',   
      part2: '— rahvuslik suveräänsus ja traditsiooniline kultuur',
    },
    liberal: {
      part1: 'Liberaalne vaatenurk',   
      part2: '— individuaalsed õigused, sõnavabadus ja sotsiaalne õiglus',  
    },
    socialist: {
      part1: 'Sotsialistlik vaatenurk',  
      part2: '— sotsiaalne võrdsus, kollektiivsed huvid ja riigi roll majanduses',  
    },
  },
  accept: 'Nõustu',
  reject: 'Keeldu',
  cookieMessage: 'Meie ja meie partnerid kasutavad küpsiseid reklaamide personaliseerimiseks, jõudluse mõõtmiseks ja sotsiaalsete funktsioonide pakkumiseks. Klõpsake Nõustu, et lubada personaliseeritud reklaamid, või Keeldu, et neid keelata. Lisateabe saamiseks vaadake meie privaatsuspoliitikat.',
  login: {
    title: 'Logi sisse',
    google: 'Jätka Google\'iga',
    facebook: 'Jätka Facebookiga',
    x: 'Jätka X-iga',
    microsoft: 'Jätka Microsoftiga',
    policy: "Sisselogimisega nõustute meie teenusetingimuste ja privaatsuspoliitikaga.",
  },
  userMenu: {
    login: "Logi sisse",
    contributions: "Panused",
    savedArticles: "Salvestatud artiklid",
    preferences: "Eelistused",
    logout: "Logi välja"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('et-EE', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('et-EE', { year: 'numeric', month: 'long' }),
    "title": "Privaatsuspoliitika",
    "lastUpdatedText": "Viimati uuendatud:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Tere tulemast Alternipedia’sse — hariduslikku vikisse, mis on loodud esitama erinevaid vaatenurki teadmistele ja ideedele. Hindame teie privaatsust ja oleme pühendunud teie isikuandmete kaitsele. See poliitika selgitab, milliseid andmeid me kogume, kuidas me neid kasutame ja millised on teie õigused."
      }
    ],
    "sections": [
      {
        "title": "Kogutav teave",
        "content": [
          {
            "type": "list",
            "items": [
              "Kontoandmed: Kui logite sisse OAuth-teenuse pakkuja kaudu (nt Google või Meta), saame teie nime, e-posti aadressi ja profiilipildi (kui saadaval).",
              "Makseandmed: Kui otsustate teha makse või annetuse, töötleb Stripe tehingud turvaliselt. Me ei salvesta ega näe kunagi teie krediitkaardi numbreid.",
              "Analüütikaandmed: Kasutame Vercel Analyticsi, et mõista üldisi kasutusmustreid, näiteks millised lehed on populaarsed ja kuidas meie sait toimib. Need andmed on koondatud ja ei võimalda teid isiklikult tuvastada.",
              "Tehniline teave: Kui külastate meie saiti, võime automaatselt saada standardseid logiandmeid, näiteks brauseri tüüpi, seadet ja IP-aadressi, et tagada turvalisus ja funktsionaalsus.",
              "Adsense: Kasutame Google Adsense’i, et kuvada meie saidil reklaame. Adsense võib kasutada küpsiseid, et näidata reklaame, mis on kohandatud teie sirvimistegevuse põhjal selles või teistes saitides."
            ]
          }
        ]
      },
      {
        "title": "Kuidas me teie teavet kasutame",
        "content": [
          {
            "type": "list",
            "items": [
              "Alternipedia platvormi toimimise ja täiustamise tagamine",
              "Kasutajate autentimine ja kontode haldamine",
              "Makse turvaline töötlemine Stripe kaudu",
              "Saidijõudluse ja töökindluse jälgimine",
              "Kasutajate päringutele või taotlustele vastamine"
            ]
          },
          {
            "type": "paragraph",
            "text": "Me ei müü, rendi ega kaubelda teie isikuandmetega."
          }
        ]
      },
      {
        "title": "Küpsised ja jälgimine",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ei kasuta reklaami- ega jälgimisküpsiseid."
          },
          {
            "type": "paragraph",
            "text": "Kasutame ainult hädavajalikke küpsiseid, mis on vajalikud sisselogimiseks ja saidi funktsionaalsuseks."
          }
        ]
      },
      {
        "title": "Andmete säilitamine ja turvalisus",
        "content": [
          {
            "type": "paragraph",
            "text": "Teie andmeid hoitakse turvaliselt, kasutades tööstusharu standarditele vastavat krüpteerimist ja hostimise infrastruktuuri."
          },
          {
            "type": "paragraph",
            "text": "Võtame mõistlikke meetmeid teie teabe kaitsmiseks kadumise, väärkasutuse või volitamata juurdepääsu eest."
          }
        ]
      },
      {
        "title": "Teie õigused",
        "content": [
          {
            "type": "list",
            "items": [
              "Juurdepääs teie isikuandmetele või koopia nõudmine",
              "Teabe parandamine või kustutamine, mis meil teie kohta on",
              "Nõusoleku tagasivõtmine või konto sulgemine"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Tingimuste aktsepteerimine', content: ["Selle veebisaidi kasutamisega nõustuvad kasutajad järgima neid teenusetingimusi. Kui kasutaja nendega ei nõustu, peab ta viivitamatult lõpetama veebisaidi kasutamise."] },
    { title: 'Kasutajakonto vastutus', content: ["Kasutajad vastutavad oma kontoandmete konfidentsiaalsuse eest. Kõik tegevused, mis toimuvad kasutaja konto all, on täielikult konto omaniku vastutusel. Igasugusest volitamata juurdepääsust tuleb viivitamatult teavitada veebisaidi administraatoreid."] },
    { title: 'Vastutuse piiramine', content: ['Veebisait pakub sisu põhimõttel „nagu on“ ilma garantiideta. Veebisaidi omanikud ei vastuta otseste, kaudsete, juhuslike, tagajärgede või karistuslike kahjude eest, mis tulenevad kasutajate suhtlusest platvormiga.'] },
    {
      title: 'Kasutaja käitumise juhised', content: [
        'Ära laadi üles kahjulikku või pahatahtlikku sisu, mis võib kahjustada veebisaiti või teisi kasutajaid.',
        'Austa teiste kasutajate õigusi.',
        'Väldi tegevusi, mis võivad häirida veebisaidi funktsionaalsust.',
        'Järgi kohalikke ja rahvusvahelisi seadusi.',
      ]
    },
    { title: 'Tingimuste muudatused', content: ['Veebisait jätab endale õiguse neid tingimusi igal ajal muuta. Veebisaidi edasine kasutamine pärast muudatusi tähendab uute tingimuste aktsepteerimist.'] },
    { title: 'Lõpetamise klausel', content: ['Veebisait võib lõpetada või peatada kasutaja juurdepääsu ilma eelneva hoiatuseta, kui rikutakse neid tingimusi või muudel põhjustel, mida administratsioon peab sobivaks.'] },
    { title: 'Kohaldatav seadus', content: ['Neid tingimusi reguleerivad jurisdiktsiooni seadused, kus veebisait peamiselt tegutseb, sõltumata õiguse kollisiooni põhimõtetest.'] },
  ],
  tools: {
    textToSpeech: "Teksti ettelugemine",
    translate: "Tõlgi",
    topicMap: "Teemakaart",
    notes: "Minu märkmed",
    wikipal: "Küsi Wikipalilt",
    watchChanges: "Jälgi muudatusi",
    saveArticle: "Salvesta artikkel",
    saved: "Salvestatud",
    shortUrl: "Lühilink",
    citePage: "Tsiteeri seda lehte",
    QRCode: "QR-kood",
    DownloadPDF: "Laadi alla PDF-failina",
    printPage: "Prindi leht",
    pageInfo: "Lehe teave",
  },
  termsAndConditions: 'Kasutustingimused',
  close: 'Sule',
  language: {
    searchMessage: "Otsi keeli...",
    selectLanguage: "Vali keel",
    description: "Vali eelistatud keel selle artikli vaatamiseks.",
    notFound: "Vastavaid keeli ei leitud",
  },
  bias: {
    heading: "Mis on eelarvamus?",
    explanation:
      "Eelarvamus on kalduvus toetada või eelistada teatud poliitilist vaadet, parteid või ideed. See võib mõjutada, kuidas inimene sündmusi tõlgendab, infot valib ja mõtteid esitab. Kui autoril on poliitiline eelarvamus, võib see mõjutada tema vaatenurka — milliseid fakte ta rõhutab, kuidas ta inimesi või teemasid kirjeldab ja milliseid järeldusi teeb. Selle tulemusena võib tema kirjutis peegeldada isiklikke veendumusi, mitte täiesti neutraalset või tasakaalustatud seisukohta.",
    socialist: "Sotsialist",
    liberal: "Liberaal",
    wikipedia: "Vikipeedia",
    conservative: "Konservatiiv",
    nationalist: "Natsionalist",
    title: "Lugemise eelarvamus",
  },
  common: {
    loadingPerspective: 'Laeb vaatenurka...',
    fetchingUserInfo: 'Laeb kasutajaandmeid...',
    home: 'Avaleht',
    about: 'Meist',
    help: 'Abi',
    search: 'Otsi',
    searchPlaceholder: 'Otsi Alternipediast...',
    login: 'Logi sisse',
    logout: 'Logi välja',
    signUp: 'Registreeru',
    profile: 'Profiil',
    settings: 'Seaded',
    language: 'Keel',
    theme: 'Teema',
    comingSoon: 'Alternipedia on peagi tulekul!',
    stayTuned: 'Püsi lainel.',
    exampleArticle: 'Näidisartikkel:',
  },
  navigation: {
    aboutUs: 'Meist',
    currentEvents: 'Praegused sündmused',
    randomArticle: 'Juhuslik artikkel',
    help: 'Abi',
  },
  footer: {
    pleaseLogin: 'Palun logi sisse, et seda funktsiooni kasutada.',
    text: {
      "part1": "Tekst on saadaval alljärgneva litsentsi alusel:",
      "part2": "Creative Commons Nimetamine-JagaÜheselt 4.0 Rahvusvaheline",
      "part3": "; võivad kehtida täiendavad tingimused. Selle saidi kasutamisega nõustute",
      "part4": "Tingimustega",
      "part5": "ja",
      "part6": "Privaatsuspoliitikaga",
      "part7": ". Alternipedia on avatud lähtekoodiga mittetulundusprojekt."
    },
    license: 'Litsents',
    terms: 'Kasutustingimused',
    privacy: 'Privaatsus',
    contact: 'Kontakt',
    disclaimers: 'Vastutuse piirangud',
    codeOfConduct: 'Käitumisjuhend',
    statistics: 'Statistika',
    cookieStatement: 'Küpsiste teave',
    developers: 'Arendajad',
  },
  notFound: {
    title: '404',
    heading: 'Lehte ei leitud',
    message:
      "Vabandame, kuid lehte, mida otsite, ei leitud. Võib-olla on see eemaldatud või link on vale.",
    goHome: 'Mine avalehele',
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Minge Pro-le',
    upgradePrompt: 'Uuendage, et avada premium-funktsioonid',
    title: 'Teadmised on jõud, Suurendage enda oma.',
    month: 'kuu',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lugege kogu Alternipedia',
        basicTheme: 'Kasuta põhilist teema kohandamist',
        saveArticles: 'Salvesta artiklid hilisemaks lugemiseks',
      },
      buttonText: 'Teie plaan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Kõik Alternipedia-s, pluss:',
      features: {
        customThemes: 'Kasuta Alternipedia oma lemmikteemades, värvides, paigutustes ja fontides',
        notes: 'Tee märkmeid, halda neid ja ekspordi kogu Alternipedia-st',
        advancedSearch: 'Täpsemad otsingutulemused',
        semanticSearch: 'Semantiline otsing AI jõuga',
        aiAssistant: 'Juurdepääs WikiPal-le, teie Alternipedia AI assistendile',
        topicMaps: 'Parem teema uurimine Teemakaartidega',
        profileCustomization: 'Rohkem profiili kohandamise võimalusi',
        aiTranslation: 'AI tõlge igale lehele',
        appSupport: 'Jätkuv tugi Alternipedia rakenduses',
      },
      buttonText: 'Uuenda nüüd',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Seda artiklit on loonud kogukond, et pakkuda sotsialistlikku vaatenurka, keskendudes sotsiaalsele õiglusele, võrdsusele ja töötajate õigustele.',
      liberal: 'Seda artiklit on loonud kogukond, et pakkuda liberaalset vaatenurka, keskendudes individuaalsetele õigustele, sõnavabadusele ja sotsiaalsele edule.',
      conservative: 'Seda artiklit on loonud kogukond, et pakkuda konservatiivset vaatenurka, keskendudes traditsioonidele, stabiilsusele ja perekonnaväärtustele.',
      nationalist: 'Seda artiklit on loonud koguk ond, et pakkuda natsionalistlikku vaatenurka, keskendudes rahvuslikule suveräänsusele ja traditsioonilisele kultuurile.',
      wikipedia: {
        part1: 'Seda artiklit on loonud kogukond, et pakkuda neutraalset vaatenurka, keskendudes täpsele teabele ja faktidele.',
        part2: 'Kontrolli Vikipeediat →',
      }
    },
    lastEdited: 'Viimati redigeeritud',
    tools: 'Tööriistad',
    content: 'Sisu',
    close: 'Sule',
    notFoundHeader: 'Wikipedia artikkel ei leitud',
    notFoundText: 'Järgmise Wikipedia artiklit ei leitud:',
    searchWikipediaText: 'Otsi Wikipediast',
    article: 'Artikkel',
    discussion: 'Arutelu',
    read: 'Loe',
    edit: 'Redigeeri',
    history: 'Ajalugu'
  }
};

// Icelandic dictionary
const is: Dictionary = {
  unauthorised: {
    heading: 'Aðgangi neitað',
    message: 'Þú hefur ekki heimild til að skoða þessa síðu. Gættu þess að þú sért innskráður eða hafðu samband við stuðning.'
  },
  blockedAd: {
    part1: 'Það virðist sem þú sért að nota auglýsingablokka. Vinsamlegast slökktu á því til að styðja vefsíðuna okkar — eða',
    part2: 'uppfærðu í PRO',
    part3: 'fyrir auglýsinga-lausa reynslu.'
  },
  metadata: {
    description: 'Fræðandi viki sem er hönnuð til að sýna fjölbreytt sjónarmið á þekkingu og hugmyndum',
    wikipedia: {  
      part1: 'Kynntu þér Alternipedia',
      part2: '— fjölbreytt sjónarmið og hugmyndir',
    },  
    conservative: {  
      part1: 'Íhaldsamt sjónarhorn', 
      part2: '— hefðir, stöðugleiki og frjáls markaður',
    },
    nationalist: {    
      part1: 'Þjóðernissinnað sjónarhorn',   
      part2: '— þjóðarfullveldi og hefðbundin menning',
    },
    liberal: {
      part1: 'Frjálslynt sjónarhorn',   
      part2: '— einstaklingsréttindi, tjáningarfrelsi og félagsleg réttlæti',  
    },
    socialist: {
      part1: 'Sósíalískt sjónarhorn',  
      part2: '— félagslegur jöfnuður, sameiginleg hagsmunir og hlutverk ríkisins í efnahagsmálum',  
    },
  },
  accept: 'Samþykkja',
  reject: 'Hafna',
  cookieMessage: 'Við og samstarfsaðilar okkar notum vafrakökur til að sérsníða auglýsingar, mæla frammistöðu og bjóða upp á samfélagsaðgerðir. Smelltu á Samþykkja til að leyfa sérsniðnar auglýsingar eða Hafna til að hafna þeim. Sjáðu persónuverndarstefnu okkar fyrir frekari upplýsingar.',
  login: {
    title: 'Skrá inn',
    google: 'Halda áfram með Google',
    facebook: 'Halda áfram með Facebook',
    x: 'Halda áfram með X',
    microsoft: 'Halda áfram með Microsoft',
    policy: "Með innskráningu samþykkir þú þjónustuskilmála okkar og persónuverndarstefnu.",
  },
  userMenu: {
    login: "Skrá inn",
    contributions: "Framlög",
    savedArticles: "Vistaðir greinar",
    preferences: "Stillingar",
    logout: "Skrá út"
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('is-IS', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('is-IS', { year: 'numeric', month: 'long' }),
    "title": "Persónuverndarstefna",
    "lastUpdatedText": "Síðast uppfært:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Velkomin á Alternipedia — fræðandi viki sem er hönnuð til að sýna fjölbreytt sjónarmið á þekkingu og hugmyndum. Við metum persónuvernd þína og skuldbindum okkur til að vernda persónulegar upplýsingar þínar. Þessi stefna útskýrir hvaða upplýsingar við söfnum, hvernig við notum þær og hvaða réttindi þú hefur."
      }
    ],
    "sections": [
      {
        "title": "Upplýsingar sem við söfnum",
        "content": [
          {
            "type": "list",
            "items": [
              "Reikningsupplýsingar: Þegar þú skráir þig inn með OAuth þjónustuaðila (t.d. Google eða Meta) fáum við nafn þitt, netfang og prófílmynd (ef tiltækt).",
              "Greiðsluupplýsingar: Ef þú velur að greiða eða gefa gjöf notar Stripe örugga meðhöndlun á viðskiptum. Við geymum aldrei né sjáum kreditkortanúmer þín.",
              "Greiningargögn: Við notum Vercel Analytics til að skilja almenn notkunarmynstur, svo sem hvaða síður eru vinsælar og hvernig vefurinn okkar virkar. Gögnin eru samantekin og auðkenna þig ekki persónulega.",
              "Tæknilegar upplýsingar: Þegar þú heimsækir vefinn okkar getum við sjálfkrafa fengið staðlaðar skráningargögn eins og tegund vafra, tæki og IP-tölu til að viðhalda öryggi og virkni.",
              "Adsense: Við notum Google Adsense til að birta auglýsingar á vefnum okkar. Adsense getur notað smákökur til að sýna auglýsingar sem eru sérsniðnar að þinni vafrahegðun á þessum eða öðrum vefjum."
            ]
          }
        ]
      },
      {
        "title": "Hvernig við notum upplýsingar þínar",
        "content": [
          {
            "type": "list",
            "items": [
              "Rekstrar og bæting Alternipedia vettvangsins",
              "Auðkenna notendur og stjórna reikningum",
              "Örugg greiðslumeðhöndlun í gegnum Stripe",
              "Fylgjast með afköstum og áreiðanleika vefsins",
              "Svar við fyrirspurnum eða beiðnum notenda"
            ]
          },
          {
            "type": "paragraph",
            "text": "Við seljum, leigjum eða viðskipti með persónulegar upplýsingar þínar ekki."
          }
        ]
      },
      {
        "title": "Smákökur og rekjanleiki",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia notar ekki auglýsinga- eða rekjandi smákökur."
          },
          {
            "type": "paragraph",
            "text": "Við notum aðeins nauðsynlegar smákökur fyrir innskráningu og virkni vefsins."
          }
        ]
      },
      {
        "title": "Geymsla gagna og öryggi",
        "content": [
          {
            "type": "paragraph",
            "text": "Gögnin þín eru geymd örugglega með iðnaðarstaðlaðri dulkóðun og hýsingarinnviði."
          },
          {
            "type": "paragraph",
            "text": "Við grípum til hæfilegra aðgerða til að vernda upplýsingar þínar gegn tapi, misnotkun eða óviðkomandi aðgangi."
          }
        ]
      },
      {
        "title": "Réttindi þín",
        "content": [
          {
            "type": "list",
            "items": [
              "Aðgangur að persónulegum gögnum þínum eða beiðni um afrit",
              "Lagfæring eða eyðing upplýsinga sem við höfum um þig",
              "Afturkall samþykkis eða lokun reiknings"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Samþykki skilmála', content: ["Með því að nota þessa vefsíðu samþykkja notendur að fylgja þessum þjónustuskilmálum. Notendur sem ekki samþykkja þessa skilmála ættu að hætta að nota vefsíðuna strax."] },
    { title: 'Ábyrgð notandareiknings', content: ["Notendur bera ábyrgð á að viðhalda trúnaði um aðgangsupplýsingar sínar. Allar aðgerðir sem eiga sér stað undir reikningi notanda eru á ábyrgð eiganda reikningsins. Notendur verða að tilkynna stjórnendum vefsins tafarlaust ef óheimil aðgangur verður vart."] },
    { title: 'Takmörkun ábyrgðar', content: ['Vefsíðan veitir efni „eins og það er“ án ábyrgðar. Eigendur vefsins bera enga ábyrgð á beinu, óbeinu, tilviljunarkenndu, afleiddu eða refsiverðu tjóni sem stafar af samskiptum notenda við vettvanginn.'] },
    {
      title: 'Leiðbeiningar um hegðun notenda', content: [
        'Ekki hlaða upp skaðlegu eða illgjörnu efni sem gæti skaðað vefsíðuna eða notendur hennar.',
        'Virða réttindi annarra notenda.',
        'Forðast aðgerðir sem gætu truflað virkni vefsins.',
        'Fylgja gildandi lögum innanlands og alþjóðlega.',
      ]
    },
    { title: 'Breytingar á skilmálum', content: ['Vefsíðan áskilur sér rétt til að breyta þessum skilmálum hvenær sem er. Notkun vefsins eftir breytingar jafngildir samþykki nýrra skilmála.'] },
    { title: 'Uppsagnarákvæði', content: ['Vefsíðan getur lokað eða stöðvað aðgang notanda án fyrirvara vegna brota á þessum skilmálum eða annarra ástæðna sem stjórnendur telja viðeigandi.'] },
    { title: 'Lögsaga', content: ['Þessir skilmálar lúta lögum þess ríkis þar sem vefsíðan starfar aðallega, án tillits til árekstrar laga.'] },
  ],
  termsAndConditions: 'Þjónustuskilmálar',
  close: 'Loka',
  tools: {
    textToSpeech: "Texti í tal",
    translate: "Þýða",
    topicMap: "Efnisyfirlit",
    notes: "Minnispunktar mínir",
    wikipal: "Spyrja Wikipal",
    watchChanges: "Fylgjast með breytingum",
    saveArticle: "Vista grein",
    saved: "Vistað",
    shortUrl: "Stutt slóð",
    citePage: "Tilvitna í þessa síðu",
    QRCode: "QR-kóði",
    DownloadPDF: "Hala niður sem PDF",
    printPage: "Prenta síðu",
    pageInfo: "Upplýsingar um síðu",
  },
  language: {
    searchMessage: "Leita að tungumálum...",
    selectLanguage: "Veldu tungumál",
    description: "Veldu tungumál sem þú vilt skoða greinina á.",
    notFound: "Engin tungumál fundust sem passa",
  },
  bias: {
    heading: "Hvað er hlutdrægni?",
    explanation:
      "Hlutdrægni er tilhneiging til að styðja eða hallast að ákveðnu pólitísku viðhorfi, flokki eða hugmyndafræði. Hún getur haft áhrif á hvernig einstaklingur túlkar atburði, velur upplýsingar og setur fram skoðanir. Þegar höfundur hefur pólitíska hlutdrægni getur það mótað hvernig hann skrifar, hvaða staðreyndir hann leggur áherslu á og hvaða niðurstöður hann dregur. Þannig getur skrif hans endurspeglað persónuleg viðhorf frekar en fullkomlega hlutlaust sjónarhorn.",
    socialist: "Sósíalisti",
    liberal: "Frjálslyndur",
    wikipedia: "Wikipedia",
    conservative: "Íhaldssamur",
    nationalist: "Þjóðernissinni",
    title: "Hlutdrægni í lestri",
  },
  common: {
    loadingPerspective: "Hleður sjónarmiði...",
    fetchingUserInfo: "Sækir notanda upplýsingar...",
    home: "Heim",
    about: "Um okkur",
    help: "Hjálp",
    search: "Leita",
    searchPlaceholder: "Leita í Alternipedia...",
    login: "Skrá inn",
    logout: "Skrá út",
    signUp: "Nýskráning",
    profile: "Prófíll",
    settings: "Stillingar",
    language: "Tungumál",
    theme: "Þema",
    comingSoon: "Alternipedia kemur brátt!",
    stayTuned: "Fylgstu með.",
    exampleArticle: "Dæmisgrein:",
  },
  navigation: {
    aboutUs: "Um okkur",
    currentEvents: "Núverandi atburðir",
    randomArticle: "Handahófskennd grein",
    help: "Hjálp",
  },
  footer: {
    pleaseLogin: 'Vinsamlegast skráðu þig inn til að nota þessa aðgerð.',
    text: {
      "part1": "Texti er aðgengilegur undir",
      "part2": "Creative Commons Nafngjöf-DeilaUndirSömumSkilmálum 4.0 Alþjóðlegum leyfi",
      "part3": "; viðbótar skilyrði kunna að gilda. Með því að nota þessa síðu samþykkir þú",
      "part4": "Skilmála og skilyrði",
      "part5": "og",
      "part6": "Persónuverndarstefnu",
      "part7": ". Alternipedia er opinn kóðaverkefni án hagnaðarskyni."
    },
    license: "Leyfi",
    terms: "Skilmálar",
    privacy: "Persónuvernd",
    contact: "Hafa samband",
    disclaimers: "Afhvarf",
    codeOfConduct: "Siðareglur",
    statistics: "Tölfræði",
    cookieStatement: "Upplýsingar um vafrakökur",
    developers: "Forritarar",
  },
  notFound: {
    title: "404",
    heading: "Síða fannst ekki",
    message:
      "Því miður gátum við ekki fundið síðuna sem þú leitaðir að. Hún gæti hafa verið fjarlægð eða slóðin er röng.",
    goHome: "Fara á heimasíðu",
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Fara í PRO',
    upgradePrompt: 'Uppfæra til að opna aðgerðir í háu gæðaflokki',
    title: 'Þekking er vald, Auka þína.',
    month: 'mánuður',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lestu allt í Alternipedia',
        basicTheme: 'Notaðu grunnþema aðlögun',
        saveArticles: 'Vistaðu greinar til að lesa síðar',
      },
      buttonText: 'Þinn áætlun',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Allt í Alternipedia, plús:',
      features: {
        customThemes: 'Notaðu Alternipedia í þínum uppáhalds þemum, litum, útlögum og leturgerðum',
        notes: 'Taktu athugasemdir, stýrðu þeim og flyttu þær út úr allri Alternipedia',
        advancedSearch: 'Ítarlegri leitarniðurstöður',
        semanticSearch: 'Merkingaleit með krafti AI',
        aiAssistant: 'Fáðu aðgang að WikiPal, AI aðstoðarmanni Alternipedia',
        topicMaps: 'Betri rannsókn á efni með Efniskortum',
        profileCustomization: 'Meiri möguleikar til að aðlaga prófílinn',
        aiTranslation: 'AI þýðing fyrir hvaða síðu sem er',
        appSupport: 'Fortsætt stuðningur í Alternipedia appinu',
      },
      buttonText: 'Uppfæra núna',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Þessi grein var búin til af samfélaginu til að bjóða upp á sósíalískt sjónarhorn með áherslu á félagslegt réttlæti, jafnrétti og réttindi verkalýðsins.',
      liberal: 'Þessi grein var búin til af samfélaginu til að bjóða upp á frjálslyndu sjónarhorni með áherslu á einstaklingsréttindi, tjáningarfrelsi og félagslega réttlæti.',
      conservative: 'Þessi grein var búin til af samfélaginu til að bjóða upp á íhaldsamt sjónarhorn með áherslu á hefðir, stöðugleika og fjölskyldu gildi.',
      nationalist: 'Þessi grein var búin til af samfélaginu til að bjóða upp á þjóðernislegt sjónarhorn með áherslu á þjóðarhagsmuni og menningarlegan arfleifð.',
      wikipedia: {
        part1: 'Þessi grein var búin til af samfélaginu til að bjóða upp á hlutlaust sjónarhorn með áherslu á nákvæmar upplýsingar og staðreyndir.',
        part2: 'Skoðaðu Wikipedia →',
      },
    },
    lastEdited: 'Síðast breytt',
    tools: 'Tól',
    content: 'Innihald',
    close: 'Loka',
    notFoundHeader: 'Wikipedia grein fannst ekki',
    notFoundText: 'Eftirfarandi Wikipedia grein fannst ekki:',
    searchWikipediaText: 'Leita á Wikipedia',
    article: 'Grein',
    discussion: 'Umræða',
    read: 'Lesa',
    edit: 'Breyta',
    history: 'Saga'
  }
};

// Albanian dictionary
const sq: Dictionary = {
  unauthorised: {
    heading: 'Qasja e mohuar',
    message: 'Nuk keni leje për të hyrë në këtë faqe. Ju lutemi kontrolloni nëse jeni regjistruar ose kontaktoni mbështetjen.'
  },
  blockedAd: {
    part1: 'Duket se po përdorni një bllokues reklamash. Ju lutemi çaktivizojeni për të mbështetur uebsajtin tonë — ose',
    part2: 'përmirësoni në PRO',
    part3: 'për një përvojë pa reklama.'
  },
  metadata: {
    description: 'Një wiki arsimore e krijuar për të prezantuar perspektiva të ndryshme mbi njohuritë dhe idetë',
    wikipedia: {  
      part1: 'Zbuloni Alternipedia',
      part2: '— Perspektiva dhe ide të ndryshme',
    },  
    conservative: {  
      part1: 'Perspektivë konservatore', 
      part2: '— Tradita, stabiliteti dhe tregu i lirë',
    },
    nationalist: {    
      part1: 'Perspektivë nacionaliste',   
      part2: '— Sovraniteti kombëtar dhe kultura tradicionale',
    },
    liberal: {
      part1: 'Perspektivë liberale',   
      part2: '— Të drejtat e individit, liria e shprehjes dhe drejtësia sociale', 
    },
    socialist: {
      part1: 'Perspektivë socialiste',  
      part2: '— Barazia sociale, interesat kolektive dhe roli i shtetit në ekonomi',  
    },  
  },
  accept: 'Prano',
  reject: 'Odbij',
  cookieMessage: 'Ne in naši partnerji uporabljamo piščke za prilagajanje oglasov, merjenje uspešnosti in zagotavljanje družbenih funkcij. Kliknite Prano, če želite dovoliti prilagojene oglase, ali Odbij, da jih zavrnete. Več informacij najdete v naši politiki zasebnosti.',
  login: {
    title: 'Hyni',
    google: 'Vazhdo me Google',
    facebook: 'Vazhdo me Facebook',
    x: 'Vazhdo me X',
    microsoft: 'Vazhdo me Microsoft',
    policy: "Duke hyrë, ju pranoni Kushtet e Shërbimit dhe Politikën tonë të Privatësisë.",
  },
  userMenu: {
    login: "Hyr",
    contributions: "Kontributet",
    savedArticles: "Artikujt e ruajtur",
    preferences: "Preferencat",
    logout: "Dil",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('sq-AL', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('sq-AL', { year: 'numeric', month: 'long' }),
    "title": "Politika e Privatësisë",
    "lastUpdatedText": "Përditësuar më së fundi:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Mirësevini në Alternipedia — një wiki arsimore e krijuar për të prezantuar perspektiva të ndryshme mbi njohuritë dhe idetë. Ne vlerësojmë privatësinë tuaj dhe jemi të përkushtuar për mbrojtjen e informacionit tuaj personal. Kjo politikë shpjegon çfarë mbledhim, si e përdorim dhe të drejtat tuaja."
      }
    ],
    "sections": [
      {
        "title": "Informacioni që Mbledhim",
        "content": [
          {
            "type": "list",
            "items": [
              "Informacioni i llogarisë: Kur identifikoheni përmes një ofruesi OAuth (p.sh., Google ose Meta), marrim emrin, adresën e email-it dhe imazhin e profilit tuaj (nëse është i disponueshëm).",
              "Informacioni i pagesës: Nëse zgjidhni të bëni një pagesë ose donacion, Stripe përpunon transaksionet në mënyrë të sigurt. Ne kurrë nuk ruajmë ose shohim numrat e kartës tuaj të kreditit.",
              "Të dhëna analitike: Përdorim Vercel Analytics për të kuptuar modelet e përgjithshme të përdorimit, si faqet më të vizituara dhe performancën e faqes. Të dhënat janë të agreguara dhe nuk ju identifikojnë personalisht.",
              "Informacion teknik: Kur vizitoni faqen tonë, mund të marrim automatikisht të dhëna standarde të regjistrit, si lloji i shfletuesit, pajisja dhe adresa IP, për të mbajtur sigurinë dhe funksionalitetin.",
              "Adsense: Ne përdorim Google Adsense për të shfaqur reklama në faqen tonë. Adsense mund të përdorë cookies për të shfaqur reklama të personalizuara bazuar në sjelljen tuaj të shfletimit në këtë ose faqe të tjera."
            ]
          }
        ]
      },
      {
        "title": "Si Përdorim Informacionin Tuaj",
        "content": [
          {
            "type": "list",
            "items": [
              "Operojmë dhe përmirësojmë platformën Alternipedia",
              "Autentifikojmë përdoruesit dhe menaxhojmë llogaritë",
              "Përpunojmë pagesa në mënyrë të sigurt përmes Stripe",
              "Monitorojmë performancën dhe besueshmërinë e faqes",
              "Përgjigjemi kërkesave ose pyetjeve të përdoruesve"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ne nuk shesim, japim me qira ose tregtojmë të dhënat tuaja personale."
          }
        ]
      },
      {
        "title": "Cookies dhe Ndjekja",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia nuk përdor cookies reklamimi ose ndjekjeje."
          },
          {
            "type": "paragraph",
            "text": "Ne përdorim vetëm cookies të nevojshme për seancat e hyrjes dhe funksionalitetin e faqes."
          }
        ]
      },
      {
        "title": "Ruajtja e të Dhënave dhe Siguria",
        "content": [
          {
            "type": "paragraph",
            "text": "Të dhënat tuaja ruhen në mënyrë të sigurt duke përdorur enkriptim dhe infrastrukturë pritjeje sipas standardeve të industrisë."
          },
          {
            "type": "paragraph",
            "text": "Ne marrim masa të arsyeshme për të mbrojtur informacionin tuaj nga humbja, keqpërdorimi ose qasja e paautorizuar."
          }
        ]
      },
      {
        "title": "Të Drejtat Tuaja",
        "content": [
          {
            "type": "list",
            "items": [
              "Të keni qasje ose kërkoni një kopje të të dhënave tuaja personale",
              "Të korrigjoni ose fshini informacionin që mbajmë për ju",
              "Të tërhiqni pëlqimin ose të mbyllni llogarinë tuaj"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Pranimi i Kushteve', content: ["Duke hyrë dhe përdorur këtë faqe interneti, përdoruesit bien dakord të respektojnë këto Kushte Shërbimi. Përdoruesit që nuk pajtohen me këto kushte duhet të ndalojnë menjëherë përdorimin e faqes."] },
    { title: 'Përgjegjësia e Llogarisë së Përdoruesit', content: ["Përdoruesit janë përgjegjës për ruajtjen e konfidencialitetit të kredencialeve të tyre të llogarisë. Çdo aktivitet që ndodh nën llogarinë e përdoruesit është përgjegjësi e vetme e mbajtësit të llogarisë. Përdoruesit duhet të njoftojnë menjëherë administratorët e faqes për çdo hyrje të paautorizuar."] },
    { title: 'Kufizimi i Përgjegjësisë', content: ['Faqja ofron përmbajtje “siç është” pa asnjë garanci. Pronarët e faqes nuk janë përgjegjës për dëme direkte, indirekte, të rastësishme, pasuese ose ndëshkuese që rrjedhin nga ndërveprimet e përdoruesve me platformën.'] },
    {
      title: 'Udhëzime për Sjelljen e Përdoruesit', content: [
        'Mos ngarkoni përmbajtje të dëmshme ose keqdashëse që mund të dëmtojë faqen ose përdoruesit e saj.',
        'Respektoni të drejtat e përdoruesve të tjerë.',
        'Shmangni veprime që mund të ndërhyjnë në funksionimin e faqes.',
        'Zbatoni ligjet vendore dhe ndërkombëtare në fuqi.',
      ]
    },
    { title: 'Ndryshimet e Kushteve', content: ['Faqja ruan të drejtën të ndryshojë këto kushte në çdo kohë. Përdorimi i vazhdueshëm i faqes pas ndryshimeve nënkupton pranimin e kushteve të reja.'] },
    { title: 'Klauzola e Përfundimit', content: ['Faqja mund të ndërpresë ose pezullojë qasjen e përdoruesit pa njoftim paraprak për shkelje të kushteve ose për arsye të tjera që administrata i konsideron të përshtatshme.'] },
    { title: 'Ligji në Fuqi', content: ['Këto kushte rregullohen nga ligjet e juridiksionit ku faqja operon kryesisht, pa marrë parasysh parimet e konfliktit të ligjeve.'] },
  ],
  termsAndConditions: 'Kushtet e Shërbimit',
  close: 'Mbyll',
  tools: {
    textToSpeech: "Tekst në të folur",
    translate: "Përkthe",
    topicMap: "Harta e temës",
    notes: "Shënimet e mia",
    wikipal: "Pyet Wikipal",
    watchChanges: "Vëzhgo ndryshimet",
    saveArticle: "Ruaj artikullin",
    saved: "U ruajt",
    shortUrl: "Lidhje e shkurtër",
    citePage: "Cito këtë faqe",
    QRCode: "Kodi QR",
    DownloadPDF: "Shkarko si PDF",
    printPage: "Printo faqen",
    pageInfo: "Informacione për faqen",
  },
  language: {
    searchMessage: "Kërko gjuhë...",
    selectLanguage: "Zgjidh gjuhën",
    description: "Zgjidh gjuhën që preferon për të parë këtë artikull.",
    notFound: "Nuk u gjet asnjë gjuhë që përputhet",
  },
  bias: {
    heading: "Çfarë është paragjykimi?",
    explanation:
      "Paragjykimi është një prirje për të mbështetur apo favorizuar një qëndrim politik, ideologjik apo kulturor të caktuar. Ai ndikon në mënyrën se si një autor zgjedh, interpreton dhe paraqet informacionin. Një autor me paragjykim politik mund të theksojë disa fakte dhe të anashkalojë të tjerat, duke ndikuar kështu në perceptimin e lexuesit. Kuptimi i paragjykimeve ndihmon në leximin më kritik dhe të balancuar të një artikulli.",
    socialist: "Socialist",
    liberal: "Liberal",
    wikipedia: "Wikipedia",
    conservative: "Konservator",
    nationalist: "Nacionalist",
    title: "Paragjykimi në lexim",
  },
  common: {
    loadingPerspective: "Duke ngarkuar perspektivën...",
    fetchingUserInfo: "Duke marrë informacionin e përdoruesit...",
    home: "Kreu",
    about: "Rreth nesh",
    help: "Ndihmë",
    search: "Kërko",
    searchPlaceholder: "Kërko në Alternipedia...",
    login: "Hyr",
    logout: "Dil",
    signUp: "Regjistrohu",
    profile: "Profili",
    settings: "Cilësimet",
    language: "Gjuha",
    theme: "Tema",
    comingSoon: "Alternipedia po vjen së shpejti!",
    stayTuned: "Qëndro i përditësuar.",
    exampleArticle: "Artikull shembull:",
  },
  navigation: {
    aboutUs: "Rreth nesh",
    currentEvents: "Ngjarjet aktuale",
    randomArticle: "Artikull i rastësishëm",
    help: "Ndihmë",
  },
  footer: {
    pleaseLogin: 'Ju lutemi hyni për të përdorur këtë funksion.',
    text: {
      "part1": "Teksti është në dispozicion nën",
      "part2": "Licencën Creative Commons Shënim-ShareAlike 4.0 Ndërkombëtare",
      "part3": "; mund të zbatohen kushte shtesë. Duke përdorur këtë faqe, ju pranoni",
      "part4": "Termat & Kushtet",
      "part5": "dhe",
      "part6": "Politikën e Privatësisë",
      "part7": ". Alternipedia është një projekt me burim të hapur jo fitimprurës."
    },
    license: "Licenca",
    terms: "Kushtet",
    privacy: "Privatësia",
    contact: "Kontakto",
    disclaimers: "Përjashtimet",
    codeOfConduct: "Kodi i sjelljes",
    statistics: "Statistikat",
    cookieStatement: "Deklarata e cookies",
    developers: "Zhvilluesit",
  },
  notFound: {
    title: "404",
    heading: "Faqja nuk u gjet",
    message:
      "Na vjen keq, por nuk mundëm të gjejmë faqen që po kërkon. Mund të jetë fshirë ose lidhja nuk është e saktë.",
    goHome: "Kthehu te faqja kryesore",
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Kaloni në PRO',
    upgradePrompt: 'Përmirësoni për të zbuluar funksionet premium',
    title: 'Dija është Fuqi, Përforconi tuajën.',
    month: 'muaj',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Lexoni të gjitha në Alternipedia',
        basicTheme: 'Përdorni temat bazë për personalizim',
        saveArticles: 'Ruani artikuj për t’i lexuar më vonë',
      },
      buttonText: 'Plani juaj',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Gjithçka në Alternipedia, plus:',
      features: {
        customThemes: 'Përdorni Alternipedia me temat, ngjyrat, format dhe fontet tuaja të preferuara',
        notes: 'Shënoni, menaxhoni dhe eksportoni shënimet nga e gjithë Alternipedia',
        advancedSearch: 'Rezultate kërkimi të avancuara',
        semanticSearch: 'Kërkim semantik me fuqinë e AI',
        aiAssistant: 'Merrni akses në WikiPal, asistentin tuaj AI të Alternipedia',
        topicMaps: 'Hulumtim më i mirë tematik me Hartat e Temave',
        profileCustomization: 'Më shumë mundësi personalizimi profili',
        aiTranslation: 'Përkthim me AI për çdo faqe',
        appSupport: 'Mbështetje e vazhdueshme në Aplikacionin Alternipedia',
      },
      buttonText: 'Përmirëso tani',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Ky artikull është krijuar nga komuniteti për të ofruar një perspektivë socialiste me fokus në drejtësinë sociale, barazinë dhe të drejtat e punëtorëve.',
      liberal: 'Ky artikull është krijuar nga komuniteti për të ofruar një perspektivë liberale me fokus në të drejtat e individit, lirinë e shprehjes dhe drejtësinë sociale.',
      conservative: 'Ky artikull është krijuar nga komuniteti për të ofruar një perspektivë konservatore me fokus në traditat, stabilitetin dhe vlerat familjare.',
      nationalist: 'Ky artikull është krijuar nga komuniteti për të ofruar një perspektivë nacionaliste me fokus në interesat kombëtare dhe trashëgiminë kulturorore.',
      wikipedia: {
        part1: 'Ky artikull është krijuar nga komuniteti për të ofruar një perspektivë neutrale me fokus në informacion të saktë dhe fakte.',
        part2: 'Shikoni Wikipedia →', 
      }
    },
    lastEdited: 'Redaktuar së fundmi',
    tools: 'Mjetet',
    content: 'Përmbajtja',
    article: 'Artikull',
    close: 'Mbyll',
    notFoundHeader: 'Artikulli i Wikipedias nuk u gjet',
    notFoundText: 'Artikulli i mëposhtëm i Wikipedias nuk u gjet:',
    searchWikipediaText: 'Kërko në Wikipedi',
    discussion: 'Diskutim',
    read: 'Lexo',
    edit: 'Ndrysho',
    history: 'Histori'
  }
};

// Serbian dictionary
const sr: Dictionary = {
  unauthorised: {
    heading: 'Pristup odbijen',
    message: 'Nemate dozvolu za pristup ovoj stranici. Proverite da li ste prijavljeni ili kontaktirajte podršku.'
  },
  blockedAd: {
    part1: 'Изгледа да користите блокатор огласа. Молимо онемогућите га да бисте подржали наш сајт — или',
    part2: 'ажурирајте на PRO',
    part3: 'за искуство без огласа.'
  },
  metadata: {
    description: 'Obrazovna viki platforma dizajnirana da predstavi različite perspektive o znanju i idejama',
    wikipedia: {  
      part1: 'Otkrijte Alternipediju',
      part2: '— Različite perspektive i ideje',
    },  
    conservative: {  
      part1: 'Konzervativna perspektiva', 
      part2: '— Tradicija, stabilnost i slobodno tržište',
    },
    nationalist: {    
      part1: 'Nacionalistička perspektiva',   
      part2: '— Nacionalni suverenitet i tradicionalna kultura',
    },
    liberal: {
      part1: 'Liberalna perspektiva', 
      part2: '— Prava pojedinca, sloboda govora i društvena pravda', 
    },
    socialist: {
      part1: 'Socijalistička perspektiva',  
      part2: '— Socijalna jednakost, kolektivni interesi i uloga države u ekonomiji',  
    },  
  },
  accept: 'Prihvati',
  reject: 'Odbaci',
  cookieMessage: 'Mi i naši partneri koristimo kolačiće za personalizaciju oglasa, mjerenje performansi i pružanje društvenih funkcija. Kliknite Prihvati da dozvolite personalizirane oglase ili Odbaci da ih odbijete. Pogledajte našu Politiku privatnosti za više informacija.',
  login: {
    title: 'Prijava',
    google: 'Nastavi sa Google-om',
    facebook: 'Nastavi sa Facebook-om',
    x: 'Nastavi sa X-om',
    microsoft: 'Nastavi sa Microsoft-om',
    policy: "Prijavom prihvatate naše Uslove korišćenja i Politiku privatnosti.",
  },
  userMenu: {
    login: "Prijava",
    contributions: "Doprinosi",
    savedArticles: "Sačuvani članci",
    preferences: "Podešavanja",
    logout: "Odjava",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('sr-RS', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('sr-RS', { year: 'numeric', month: 'long' }),
    "title": "Politika privatnosti",
    "lastUpdatedText": "Poslednje ažurirano:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Dobrodošli na Alternipedia — obrazovnu viki platformu dizajniranu da predstavi različite perspektive o znanju i idejama. Cenimo vašu privatnost i posvećeni smo zaštiti vaših ličnih podataka. Ova politika objašnjava koje informacije prikupljamo, kako ih koristimo i koja su vaša prava."
      }
    ],
    "sections": [
      {
        "title": "Informacije koje prikupljamo",
        "content": [
          {
            "type": "list",
            "items": [
              "Informacije o nalogu: Kada se prijavite preko OAuth provajdera (npr. Google ili Meta), dobijamo vaše ime, email adresu i profilnu sliku (ako je dostupna).",
              "Informacije o plaćanju: Ako odlučite da izvršite uplatu ili donaciju, Stripe sigurno obrađuje transakcije. Nikada ne čuvamo niti vidimo brojeve vaše kreditne kartice.",
              "Analitički podaci: Koristimo Vercel Analytics da bismo razumeli opšte obrasce korišćenja, kao što su popularne stranice i performanse sajta. Podaci su agregirani i ne identifikuju vas lično.",
              "Tehničke informacije: Prilikom posete sajtu možemo automatski primati standardne log podatke, kao što su tip pretraživača, uređaj i IP adresa, radi sigurnosti i funkcionalnosti.",
              "Adsense: Koristimo Google Adsense za prikazivanje oglasa na našem sajtu. Adsense može koristiti kolačiće za prikazivanje personalizovanih oglasa na osnovu vašeg ponašanja pretraživanja na ovom ili drugim sajtovima."
            ]
          }
        ]
      },
      {
        "title": "Kako koristimo vaše informacije",
        "content": [
          {
            "type": "list",
            "items": [
              "Rad i unapređenje Alternipedia platforme",
              "Autentifikacija korisnika i upravljanje nalozima",
              "Sigurno procesiranje plaćanja preko Stripe",
              "Praćenje performansi i pouzdanosti sajta",
              "Odgovaranje na upite ili zahteve korisnika"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ne prodajemo, ne izdajemo niti ne trgujemo vašim ličnim podacima."
          }
        ]
      },
      {
        "title": "Kolačići i praćenje",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ne koristi reklamne ili praćenje kolačiće."
          },
          {
            "type": "paragraph",
            "text": "Koristimo samo neophodne kolačiće potrebne za prijavu i funkcionalnost sajta."
          }
        ]
      },
      {
        "title": "Čuvanje podataka i sigurnost",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaši podaci se sigurno čuvaju korišćenjem industrijskih standarda enkripcije i hosting infrastrukture."
          },
          {
            "type": "paragraph",
            "text": "Preduzimamo razumne korake da zaštitimo vaše informacije od gubitka, zloupotrebe ili neovlašćenog pristupa."
          }
        ]
      },
      {
        "title": "Vaša prava",
        "content": [
          {
            "type": "list",
            "items": [
              "Pristup ličnim podacima ili zahtev za kopiju",
              "Ispravka ili brisanje informacija koje čuvamo o vama",
              "Povlačenje pristanka ili zatvaranje naloga"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Prihvatanje uslova', content: ["Korišćenjem ovog sajta korisnici se slažu da poštuju ove Uslove korišćenja. Korisnici koji se ne slažu sa ovim uslovima treba odmah da prestanu sa korišćenjem sajta."] },
    { title: 'Odgovornost korisničkog naloga', content: ["Korisnici su odgovorni za čuvanje poverljivosti svojih podataka za prijavu. Sve aktivnosti koje se odvijaju pod korisničkim nalogom su isključiva odgovornost vlasnika naloga. Korisnici moraju odmah obavestiti administratore sajta o bilo kom neovlašćenom pristupu."] },
    { title: 'Ograničenje odgovornosti', content: ['Sajt pruža sadržaj „takav kakav jeste“ bez ikakvih garancija. Vlasnici sajta ne snose odgovornost za direktne, indirektne, slučajne, posledične ili kaznene štete koje nastanu korišćenjem platforme.'] },
    {
      title: 'Smernice za ponašanje korisnika', content: [
        'Ne otpremati štetan ili zlonameran sadržaj koji može naštetiti sajtu ili njegovim korisnicima.',
        'Poštovati prava drugih korisnika.',
        'Izbegavati aktivnosti koje bi mogle ometati funkcionalnost sajta.',
        'Poštovati važeće lokalne i međunarodne zakone.',
      ]
    },
    { title: 'Izmene uslova', content: ['Sajt zadržava pravo da u bilo kom trenutku izmeni ove uslove. Nastavak korišćenja sajta nakon promena podrazumeva prihvatanje novih uslova.'] },
    { title: 'Klauzula o ukidanju', content: ['Sajt može ukinuti ili suspendovati pristup korisnika bez prethodnog obaveštenja zbog kršenja ovih uslova ili iz drugih razloga koje administracija smatra prikladnim.'] },
    { title: 'Merodavno pravo', content: ['Ovi uslovi podležu zakonima jurisdikcije u kojoj sajt primarno posluje, bez obzira na kolizione principe.'] },
  ],
  termsAndConditions: 'Uslovi korišćenja',
  close: 'Zatvori',
  tools: {
    textToSpeech: "Tekst u govor",
    translate: "Prevedi",
    topicMap: "Mapa tema",
    notes: "Moje beleške",
    wikipal: "Pitaj Wikipal",
    watchChanges: "Prati izmene",
    saveArticle: "Sačuvaj članak",
    saved: "Sačuvano",
    shortUrl: "Kratak link",
    citePage: "Citiraj ovu stranu",
    QRCode: "QR kod",
    DownloadPDF: "Preuzmi kao PDF",
    printPage: "Štampaj stranu",
    pageInfo: "Informacije o stranici",
  },
  language: {
    searchMessage: "Pretraži jezike...",
    selectLanguage: "Izaberi jezik",
    description: "Izaberi jezik na kojem želiš da vidiš ovaj članak.",
    notFound: "Nema jezika koji se poklapa sa pretragom",
  },
  bias: {
    heading: "Šta je pristrasnost?",
    explanation:
      "Pristrasnost je sklonost ka podržavanju određenog političkog, ideološkog ili kulturnog stava. Ona utiče na način na koji autor bira, tumači i predstavlja informacije. Autor sa političkom pristrasnošću može naglasiti određene činjenice i zanemariti druge, čime utiče na percepciju čitaoca. Razumevanje pristrasnosti pomaže da se članci čitaju kritičnije i objektivnije.",
    socialist: "Socijalistički",
    liberal: "Liberalni",
    wikipedia: "Wikipedia",
    conservative: "Konzervativni",
    nationalist: "Nacionalistički",
    title: "Pristrasnost u čitanju",
  },
  common: {
    loadingPerspective: "Učitavanje perspektive...",
    fetchingUserInfo: "Preuzimanje informacija o korisniku...",
    home: "Početna",
    about: "O nama",
    help: "Pomoć",
    search: "Pretraga",
    searchPlaceholder: "Pretraži Alternipediju...",
    login: "Prijavi se",
    logout: "Odjavi se",
    signUp: "Registruj se",
    profile: "Profil",
    settings: "Podešavanja",
    language: "Jezik",
    theme: "Tema",
    comingSoon: "Alternipedia uskoro dolazi!",
    stayTuned: "Ostanite u toku.",
    exampleArticle: "Primer članka:",
  },
  navigation: {
    aboutUs: "O nama",
    currentEvents: "Trenutni događaji",
    randomArticle: "Nasumičan članak",
    help: "Pomoć",
  },
  footer: {
    pleaseLogin: 'Molimo prijavite se da biste koristili ovu funkciju.',
    text: {
      "part1": "Tekst je dostupan pod",
      "part2": "Creative Commons Licencom Pripisivanje-Deljenje pod istim uslovima 4.0 Internacionalna",
      "part3": "; mogu važiti dodatni uslovi. Korišćenjem ovog sajta prihvatate",
      "part4": "Uslove korišćenja",
      "part5": "i",
      "part6": "Politiku privatnosti",
      "part7": ". Alternipedia je open-source neprofitni projekat."
    },
    license: "Licenca",
    terms: "Uslovi korišćenja",
    privacy: "Privatnost",
    contact: "Kontakt",
    disclaimers: "Odricanja",
    codeOfConduct: "Kodeks ponašanja",
    statistics: "Statistika",
    cookieStatement: "Izjava o kolačićima",
    developers: "Programeri",
  },
  notFound: {
    title: "404",
    heading: "Stranica nije pronađena",
    message:
      "Žao nam je, ali nismo mogli da pronađemo stranicu koju tražiš. Možda je obrisana ili link nije ispravan.",
    goHome: "Vrati se na početnu stranu",
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Pređi na PRO',
    upgradePrompt: 'Nadogradi da otključaš premium funkcije',
    title: 'Znanje je moć, Pojačajte svoje.',
    month: 'mesec',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Pročitaj sve u Alternipedia',
        basicTheme: 'Koristi osnovnu prilagodbu teme',
        saveArticles: 'Sačuvaj članke za kasnije čitanje',
      },
      buttonText: 'Tvoj plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Sve u Alternipedia, plus:',
      features: {
        customThemes: 'Koristi Alternipedia u svojim omiljenim temama, bojama, rasporedima i fontovima',
        notes: 'Pravi bilješke, upravljaj njima i izvozi ih iz cijele Alternipedia',
        advancedSearch: 'Napredni rezultati pretrage',
        semanticSearch: 'Semantičko pretraživanje uz moć AI',
        aiAssistant: 'Pristup WikiPal, tvom AI asistentu Alternipedia',
        topicMaps: 'Bolje istraživanje tema sa Tematskim Mapama',
        profileCustomization: 'Više opcija prilagodbe profila',
        aiTranslation: 'AI prijevod za bilo koju stranicu',
        appSupport: 'Kontinuirana podrška u Alternipedia aplikaciji',
      },
      buttonText: 'Nadogradi sada',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Ovaj članak je kreirala zajednica da ponudi socijalističku perspektivu fokusiranu na društvenu pravdu, jednakost i prava radnika.',
      liberal: 'Ovaj članak je kreirala zajednica da ponudi liberalnu perspektivu fokusiranu na prava pojedinca, slobodu govora i društvenu pravdu.',
      conservative: 'Ovaj članak je kreirala zajednica da ponudi konzervativnu perspektivu fokusiranu na tradiciju, stabilnost i porodične vrednosti.',
      nationalist: 'Ovaj članak je kreirala zajednica da ponudi nacionalističku perspektivu fokusiranu na nacionalne interese i kulturno nasleđe.',
      wikipedia: {
        part1: 'Ovaj članak je kreirala zajednica da ponudi neutralnu perspektivu fokusiranu na tačne informacije i činjenice.',
        part2: 'Pogledaj na Wikipediji →', 
      }
    },
    lastEdited: 'Poslednja izmena',
    tools: 'Alati',
    content: 'Sadržaj',
    close: 'Zatvori',
    notFoundHeader: 'Wikipedia članak nije pronađen',
    notFoundText: 'Sledeći Wikipedia članak nije pronađen:',
    searchWikipediaText: 'Pretraži Wikipediju',
    article: 'Članak',
    discussion: 'Diskusija',
    read: 'Pročitaj',
    edit: 'Uredi',
    history: 'Istorija'
  }
};

// Macedonian dictionary
const mk: Dictionary = {
  unauthorised: {
    heading: 'Пристапот е одбие',
    message: 'Немате дозвола за пристап до оваа страница. Проверете дали сте најавени или контактирајте ја поддршката.'
  },
  blockedAd: {
    part1: 'Изгледа дека користите блокатор на реклами. Ве молиме оневозможете го за да ја поддржите нашата страница — или',
    part2: 'надградете на PRO',
    part3: 'за искуство без реклами.'
  },
  metadata: {
    description: 'Едукативна вики платформа создадена за прикажување на различни перспективи за знаење и идеи',
    wikipedia: {  
      part1: 'Откријте ја Алтернипедија',
      part2: '— Различни перспективи и идеи',
    },  
    conservative: {  
      part1: 'Конзервативна перспектива', 
      part2: '— Традиција, стабилност и слободно пазари',
    },
    nationalist: {    
      part1: 'Националистичка перспектива',   
      part2: '— Национален суверенитет и традиционална култура',
    },
    socialist: {
      part1: 'Социјалистичка перспектива',
      part2: '— Социјална еднаквост, колективни интереси и улога на државата во економијата',
    },
    liberal:  {
      part1: 'Либерална перспектива', 
      part2: '— Права на поединецот, слобода на говор и социјална правда', 
    },
  },
  accept: 'Прифати',
  reject: 'Одбиј',
  cookieMessage: 'Ние и нашите партнери користиме колачиња за персонализација на реклами, мерење на перформансите и обезбедување социјални функции. Кликнете Прифати за да дозволите персонализирани реклами или Одбиј за да ги одбиете. Погледнете ја нашата Политика за приватност за повеќе информации.',
  login: {
    title: 'Најави се',
    google: 'Продолжи со Google',
    facebook: 'Продолжи со Facebook',
    x: 'Продолжи со X',
    microsoft: 'Продолжи со Microsoft',
    policy: "Со најава се согласувате со нашите Услови за користење и Политика за приватност.",
  },
  userMenu: {
    login: "Најави се",
    contributions: "Придонеси",
    savedArticles: "Зачувани написи",
    preferences: "Поставки",
    logout: "Одјави се",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('mk-MK', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('mk-MK', { year: 'numeric', month: 'long' }),
    "title": "Политика за приватност",
    "lastUpdatedText": "Последно ажурирано:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Добредојдовте на Alternipedia — едукативна вики платформа создадена за прикажување на различни перспективи за знаење и идеи. Ние ја цениме вашата приватност и се обврзуваме да ги заштитиме вашите лични информации. Оваа политика објаснува какви информации собираме, како ги користиме и кои се вашите права."
      }
    ],
    "sections": [
      {
        "title": "Информации што ги собираме",
        "content": [
          {
            "type": "list",
            "items": [
              "Информации за сметката: Кога се најавувате преку OAuth провајдер (на пр. Google или Meta), добиваме ваше име, е-пошта и профилна слика (ако е достапна).",
              "Информации за плаќање: Ако одлучите да направите плаќање или донација, Stripe безбедно ги обработува трансакциите. Никогаш не ги чуваме или гледаме бројот на вашата кредитна картичка.",
              "Аналитички податоци: Користиме Vercel Analytics за да ги разбереме општите модели на користење, како што се популарни страници и перформанси на сајтот. Податоците се агрегирани и не ве идентификуваат лично.",
              "Технички информации: Кога ја посетувате нашата веб-страница, можеме автоматски да добиеме стандардни лог податоци, како тип на прелистувач, уред и IP адреса, за да ја одржуваме безбедноста и функционалноста.",
              "Adsense: Користиме Google Adsense за прикажување реклами на нашата веб-страница. Adsense може да користи колачиња за прикажување персонализирани реклами врз основа на вашето пребарувачко однесување на оваа или други веб-страници."
            ]
          }
        ]
      },
      {
        "title": "Како ги користиме вашите информации",
        "content": [
          {
            "type": "list",
            "items": [
              "Работа и подобрување на платформата Alternipedia",
              "Аутентификација на корисници и управување со сметки",
              "Безбедна обработка на плаќања преку Stripe",
              "Следење на перформанси и сигурност на сајтот",
              "Одговарање на прашања или барања од корисници"
            ]
          },
          {
            "type": "paragraph",
            "text": "Не ги продаваме, изнајмуваме или тргуваме вашите лични податоци."
          }
        ]
      },
      {
        "title": "Колачиња и следење",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia не користи реклами или следење колачиња."
          },
          {
            "type": "paragraph",
            "text": "Користиме само неопходни колачиња потребни за најавување и функционалност на сајтот."
          }
        ]
      },
      {
        "title": "Складирање на податоци и безбедност",
        "content": [
          {
            "type": "paragraph",
            "text": "Вашите податоци се безбедно складирани користејќи стандарди на индустријата за енкрипција и хостинг инфраструктура."
          },
          {
            "type": "paragraph",
            "text": "Превземаме разумни мерки за заштита на вашите информации од губење, злоупотреба или неовластен пристап."
          }
        ]
      },
      {
        "title": "Вашите права",
        "content": [
          {
            "type": "list",
            "items": [
              "Пристап или барање копија на вашите лични податоци",
              "Корекција или бришење на информации кои ги чуваме за вас",
              "Повлекување на согласност или затворање на сметката"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Прифаќање на условите', content: ["Со пристапување и користење на оваа веб-страница, корисниците се согласуваат да ги почитуваат овие Услови на користење. Корисниците кои не се согласуваат со овие услови треба веднаш да престанат со користење на веб-страницата."] },
    { title: 'Одговорност на корисничката сметка', content: ["Корисниците се одговорни за одржување на доверливоста на нивните податоци за најава. Сите активности што се одвиваат под корисничка сметка се единствена одговорност на сопственикот на сметката. Корисниците мора веднаш да ја известат администрацијата за неовластен пристап."] },
    { title: 'Ограничување на одговорноста', content: ['Веб-страницата обезбедува содржина „каква што е“ без никакви гаранции. Сопствениците не се одговорни за директни, индиректни, случајни, последични или казнени штети кои произлегуваат од користење на платформата.'] },
    {
      title: 'Насоки за однесување на корисниците', content: [
        'Да не се поставува штетна или злонамерна содржина која може да му наштети на веб-сајтот или на другите корисници.',
        'Да се почитуваат правата на другите корисници.',
        'Да се избегнуваат активности кои можат да ја нарушат функционалноста на веб-страницата.',
        'Да се почитуваат применливите локални и меѓународни закони.',
      ]
    },
    { title: 'Измени на условите', content: ['Веб-страницата го задржува правото да ги измени овие услови во секое време. Продолжената употреба по измените значи прифаќање на новите услови.'] },
    { title: 'Клаузула за прекин', content: ['Веб-страницата може да го прекине или суспендира пристапот на корисникот без претходна најава поради прекршување на условите или од други причини кои администрацијата ги смета за соодветни.'] },
    { title: 'Меродавен закон', content: ['Овие услови се регулирани според законите на јурисдикцијата каде што веб-страницата главно работи, без оглед на принципите на судир на закони.'] },
  ],
  termsAndConditions: 'Услови на користење',
  close: 'Затвори',
  tools: {
    textToSpeech: "Текст во говор",
    translate: "Преведи",
    topicMap: "Мапа на теми",
    notes: "Моите белешки",
    wikipal: "Прашај Wikipal",
    watchChanges: "Следи промени",
    saveArticle: "Зачувај напис",
    saved: "Зачувано",
    shortUrl: "Кратка врска",
    citePage: "Цитирај ја оваа страница",
    QRCode: "QR-код",
    DownloadPDF: "Превземи како PDF",
    printPage: "Принтај страница",
    pageInfo: "Информации за страницата",
  },
  language: {
    searchMessage: "Пребарувај јазици...",
    selectLanguage: "Избери јазик",
    description: "Избери го јазикот на кој сакаш да го гледаш овој напис.",
    notFound: "Не се пронајдени јазици што одговараат",
  },
  bias: {
    heading: "Што е предрасуда?",
    explanation:
      "Предрасудата е тенденција да се поддржи или фаворизира одреден политички, идеолошки или културен став. Таа влијае на начинот на кој авторот избира, толкува и претставува информации. Автор со политичка предрасуда може да истакне одредени факти и да занемари други, влијаејќи на перцепцијата на читателот. Разбирањето на предрасудата помага при критичко и балансирано читање на написите.",
    socialist: "Социјалист",
    liberal: "Либерал",
    wikipedia: "Wikipedia",
    conservative: "Конзервативен",
    nationalist: "Националист",
    title: "Предрасуда при читање",
  },
  common: {
    loadingPerspective: "Се вчитува перспектива...",
    fetchingUserInfo: "Се преземаат информации за корисникот...",
    home: "Почетна",
    about: "За нас",
    help: "Помош",
    search: "Пребарувај",
    searchPlaceholder: "Пребарувај во Alternipedia...",
    login: "Најави се",
    logout: "Одјави се",
    signUp: "Регистрирај се",
    profile: "Профил",
    settings: "Подесувања",
    language: "Јазик",
    theme: "Тема",
    comingSoon: "Alternipedia наскоро пристигнува!",
    stayTuned: "Останете во тек.",
    exampleArticle: "Пример напис:",
  },
  navigation: {
    aboutUs: "За нас",
    currentEvents: "Тековни настани",
    randomArticle: "Случаен напис",
    help: "Помош",
  },
  footer: {
    pleaseLogin: 'Ве молиме најавете се за да ја користите оваа функција.',
    text: {
      "part1": "Текстот е достапен под",
      "part2": "Creative Commons Лиценца Препознавање-Сподели под иста лиценца 4.0 Интернационална",
      "part3": "; можат да се применат дополнителни услови. Со користење на овој сајт, се согласувате со",
      "part4": "Условите",
      "part5": "и",
      "part6": "Политиката за приватност",
      "part7": ". Alternipedia е отворен проект без профит."
    },
    license: "Лиценца",
    terms: "Услови",
    privacy: "Приватност",
    contact: "Контакт",
    disclaimers: "Одговорности",
    codeOfConduct: "Правилник за однесување",
    statistics: "Статистика",
    cookieStatement: "Изјава за колачиња",
    developers: "Развојни програмери",
  },
  notFound: {
    title: "404",
    heading: "Страницата не е пронајдена",
    message:
      "Жал ни е, но не можевме да ја пронајдеме страницата што ја барате. Можеби е избришана или линкот е погрешен.",
    goHome: "Врати се на почетната страница",
  },
  upgrade: {
    pro: 'Про',
    goPro: 'Премини на Про',
    upgradePrompt: 'Надгради за да ги отклучиш премиум функциите',
    title: 'Знаењето е моќ, Засилете го вашето.',
    month: 'месец',
    freePlan: {
      name: 'Алтернипедија',
      features: {
        readAll: 'Прочитај сè во Алтернипедија',
        basicTheme: 'Користи основна тема за прилагодување',
        saveArticles: 'Зачувај статии за подоцна читање',
      },
      buttonText: 'Твојот план',
    },
    proPlan: {
      name: 'Алтернипедија ПРО',
      subtitle: 'Сè во Алтернипедија, плус:',
      features: {
        customThemes: 'Користи Алтернипедија со твоите омилени теми, бои, распореди и фонтови',
        notes: 'Прави белешки, управувај со нив и извези ги од целата Алтернипедија',
        advancedSearch: 'Напредни резултати од пребарување',
        semanticSearch: 'Семантичко пребарување со моќта на AI',
        aiAssistant: 'Пристап до WikiPal, твојот AI асистент на Алтернипедија',
        topicMaps: 'Подобро истражување на теми со Мапи на Теми',
        profileCustomization: 'Повеќе опции за прилагодување на профилот',
        aiTranslation: 'AI превод за секоја страница',
        appSupport: 'Континуирана поддршка во апликацијата Алтернипедија',
      },
      buttonText: 'Надгради сега',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Овој напис е создаден од заедницата за да понуди социјалистичка перспектива фокусирана на социјална правда, еднаквост и права на работниците.',
      liberal: 'Овој напис е создаден од заедницата за да понуди либерална перспектива фокусирана на права на поединецот, слобода на говор и социјална правда.',  
      conservative: 'Овој напис е создаден од заедницата за да понуди конзервативна перспектива фокусирана на традиција, стабилност и семејни вредности.',
      nationalist: 'Овој напис е создаден од заедницата за да понуди националистичка перспектива фокусирана на национални интереси и културно наследство.',
      wikipedia: {  
        part1: 'Овој напис е создаден од заедницата за да понуди неутрална перспектива фокусирана на точни информации и факти.',
        part2: 'Погледни на Википедија →',
      }
    },
    lastEdited: 'Последно уредено',
    tools: 'Алатки',
    content: 'Содржина',
    article: 'Статија',
    close: 'Затвори',
    notFoundHeader: 'Wikipedia статијата не е пронајдена',
    notFoundText: 'Следната Wikipedia статија не е пронајдена:',
    searchWikipediaText: 'Пребарувај во Википедија',
    discussion: 'Дискусија',
    read: 'Прочитај',
    edit: 'Уреди',
    history: 'Историја'
  }
};

// Bosnian dictionary
const bs: Dictionary = {
  unauthorised: {
    heading: 'Pristup odbijen',
    message: 'Nemate ovlaštenje za pristup ovoj stranici. Provjerite jeste li prijavljeni ili kontaktirajte podršku.'
  },
  blockedAd: {
    part1: 'Izgleda da koristite blokator reklama. Onemogućite ga da podržite našu stranicu — ili',
    part2: 'nadogradite na PRO',
    part3: 'za iskustvo bez reklama.'
  },
  metadata: {
    description: 'Obrazovna wiki platforma dizajnirana da predstavi različite perspektive o znanju i idejama',
    wikipedia: {  
      part1: 'Otkrijte Alternipediju',
      part2: '— Različite perspektive i ideje',
    },  
    conservative: {  
      part1: 'Konzervativna perspektiva', 
      part2: '— Tradicija, stabilnost i slobodna tržišta',
    },
    nationalist: {    
      part1: 'Nacionalistička perspektiva',   
      part2: '— Nacionalni suverenitet i tradicionalna kultura',
    },
    socialist: {
      part1: 'Socijalistička perspektiva',
      part2: '— Socijalna jednakost, kolektivni interesi i uloga države u ekonomiji',
    },
    liberal:  { 
      part1: 'Liberalna perspektiva', 
      part2: '— Prava pojedinca, sloboda govora i socijalna pravda', 
    },
  },
  accept: 'Prihvati',
  reject: 'Odbij',
  cookieMessage: 'Mi i naši partneri koristimo kolačiće za personalizaciju oglasa, mjerenje performansi i pružanje društvenih funkcija. Kliknite Prihvati da dozvolite personalizirane reklame ili Odbij da ih odbijete. Pogledajte našu Politiku privatnosti za više informacija.',
  login: {
    title: 'Prijava',
    google: 'Nastavi sa Google-om',
    facebook: 'Nastavi sa Facebook-om',
    x: 'Nastavi sa X-om',
    microsoft: 'Nastavi sa Microsoft-om',
    policy: "Prijavom prihvatate naše Uslove korištenja i Politiku privatnosti.",
  },
  userMenu: {
    login: "Prijava",
    contributions: "Doprinosi",
    savedArticles: "Sačuvani članci",
    preferences: "Postavke",
    logout: "Odjava",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('bs-BA', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('bs-BA', { year: 'numeric', month: 'long' }),
    "title": "Pravila privatnosti",
    "lastUpdatedText": "Zadnje ažurirano:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Dobrodošli na Alternipedia — obrazovnu wiki platformu dizajniranu da predstavi različite perspektive o znanju i idejama. Cijenimo vašu privatnost i posvećeni smo zaštiti vaših ličnih podataka. Ova politika objašnjava koje informacije prikupljamo, kako ih koristimo i koja su vaša prava."
      }
    ],
    "sections": [
      {
        "title": "Informacije koje prikupljamo",
        "content": [
          {
            "type": "list",
            "items": [
              "Informacije o računu: Kada se prijavite putem OAuth provajdera (npr. Google ili Meta), dobijamo vaše ime, e-mail adresu i profilnu sliku (ako je dostupna).",
              "Informacije o plaćanju: Ako odlučite izvršiti uplatu ili donaciju, Stripe sigurno obrađuje transakcije. Nikada ne čuvamo niti vidimo brojeve vaše kreditne kartice.",
              "Analitički podaci: Koristimo Vercel Analytics da bismo razumjeli opće obrasce korištenja, kao što su popularne stranice i performanse sajta. Podaci su agregirani i ne identificiraju vas osobno.",
              "Tehničke informacije: Prilikom posjete sajtu možemo automatski primati standardne log podatke, poput tipa pretraživača, uređaja i IP adrese, radi sigurnosti i funkcionalnosti.",
              "Adsense: Koristimo Google Adsense za prikazivanje oglasa na našem sajtu. Adsense može koristiti kolačiće za prikazivanje personaliziranih oglasa na osnovu vašeg pretraživačkog ponašanja na ovom ili drugim sajtovima."
            ]
          }
        ]
      },
      {
        "title": "Kako koristimo vaše informacije",
        "content": [
          {
            "type": "list",
            "items": [
              "Upravljanje i poboljšanje Alternipedia platforme",
              "Autentifikacija korisnika i upravljanje nalozima",
              "Sigurno procesiranje plaćanja putem Stripe",
              "Praćenje performansi i pouzdanosti sajta",
              "Odgovaranje na upite ili zahtjeve korisnika"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ne prodajemo, ne iznajmljujemo niti ne trgujemo vašim ličnim podacima."
          }
        ]
      },
      {
        "title": "Kolačići i praćenje",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ne koristi reklamne ili praćenje kolačiće."
          },
          {
            "type": "paragraph",
            "text": "Koristimo samo neophodne kolačiće potrebne za prijavu i funkcionalnost sajta."
          }
        ]
      },
      {
        "title": "Čuvanje podataka i sigurnost",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaši podaci se sigurno čuvaju koristeći industrijske standarde enkripcije i hosting infrastrukturu."
          },
          {
            "type": "paragraph",
            "text": "Preduzimamo razumne korake da zaštitimo vaše informacije od gubitka, zloupotrebe ili neovlaštenog pristupa."
          }
        ]
      },
      {
        "title": "Vaša prava",
        "content": [
          {
            "type": "list",
            "items": [
              "Pristup ličnim podacima ili zahtjev za kopiju",
              "Ispravka ili brisanje informacija koje čuvamo o vama",
              "Povlačenje pristanka ili zatvaranje naloga"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Prihvatanje uslova', content: ["Korištenjem ove web stranice korisnici se slažu da poštuju ove Uslove korištenja. Korisnici koji se ne slažu sa ovim uslovima trebaju odmah prestati koristiti web stranicu."] },
    { title: 'Odgovornost korisničkog računa', content: ["Korisnici su odgovorni za čuvanje povjerljivosti svojih podataka za prijavu. Sve aktivnosti koje se odvijaju pod korisničkim računom isključiva su odgovornost vlasnika računa. Korisnici moraju odmah obavijestiti administratore o bilo kakvom neovlaštenom pristupu."] },
    { title: 'Ograničenje odgovornosti', content: ['Web stranica pruža sadržaj „takav kakav jeste“ bez ikakvih garancija. Vlasnici web stranice ne snose odgovornost za direktne, indirektne, slučajne, posljedice ili kaznene štete koje proizlaze iz interakcije korisnika s platformom.'] },
    {
      title: 'Smjernice ponašanja korisnika', content: [
        'Ne postavljati štetan ili zlonamjeran sadržaj koji može naštetiti web stranici ili korisnicima.',
        'Poštovati prava drugih korisnika.',
        'Izbjegavati aktivnosti koje mogu ometati funkcionalnost stranice.',
        'Poštovati važeće lokalne i međunarodne zakone.',
      ]
    },
    { title: 'Izmjene uslova', content: ['Web stranica zadržava pravo da u bilo kojem trenutku izmijeni ove uslove. Nastavak korištenja nakon promjena znači prihvatanje novih uslova.'] },
    { title: 'Klauzula o prekidu', content: ['Web stranica može obustaviti ili ukinuti pristup korisniku bez prethodne najave zbog kršenja ovih uslova ili drugih razloga koje administracija smatra prikladnim.'] },
    { title: 'Mjerodavno pravo', content: ['Ovi uslovi podliježu zakonima jurisdikcije u kojoj web stranica prvenstveno posluje, bez obzira na principe sukoba zakona.'] },
  ],
  termsAndConditions: 'Uslovi korištenja',
  close: 'Zatvori',
  tools: {
    textToSpeech: "Tekst u govor",
    translate: "Prevedi",
    topicMap: "Mapa tema",
    notes: "Moje bilješke",
    wikipal: "Pitaj Wikipal",
    watchChanges: "Prati promjene",
    saveArticle: "Sačuvaj članak",
    saved: "Sačuvano",
    shortUrl: "Kratki link",
    citePage: "Citiraj ovu stranicu",
    QRCode: "QR kod",
    DownloadPDF: "Preuzmi kao PDF",
    printPage: "Ispisi stranicu",
    pageInfo: "Informacije o stranici",
  },
  language: {
    searchMessage: "Pretraži jezike...",
    selectLanguage: "Odaberi jezik",
    description: "Odaberite jezik na kojem želite pregledati ovaj članak.",
    notFound: "Nema jezika koji odgovaraju pretrazi",
  },
  bias: {
    heading: "Šta je pristrasnost?",
    explanation:
      "Pristrasnost je sklonost da se podrži ili favorizuje određeni politički, ideološki ili kulturni stav. Ona utiče na način na koji autor bira, tumači i predstavlja informacije. Autor sa političkom pristrasnošću može naglasiti neke činjenice i zanemariti druge, što utiče na percepciju čitaoca. Razumijevanje pristrasnosti pomaže u kritičkom i uravnoteženom čitanju članaka.",
    socialist: "Socijalistički",
    liberal: "Liberalni",
    wikipedia: "Wikipedia",
    conservative: "Konzervativni",
    nationalist: "Nacionalistički",
    title: "Pristrasnost pri čitanju",
  },
  common: {
    loadingPerspective: "Učitavanje perspektive...",
    fetchingUserInfo: "Dohvatanje informacija o korisniku...",
    home: "Početna",
    about: "O nama",
    help: "Pomoć",
    search: "Pretraga",
    searchPlaceholder: "Pretraži Alternipediju...",
    login: "Prijavi se",
    logout: "Odjavi se",
    signUp: "Registruj se",
    profile: "Profil",
    settings: "Postavke",
    language: "Jezik",
    theme: "Tema",
    comingSoon: "Alternipedia uskoro dolazi!",
    stayTuned: "Ostanite u toku.",
    exampleArticle: "Primjer članka:",
  },
  navigation: {
    aboutUs: "O nama",
    currentEvents: "Trenutni događaji",
    randomArticle: "Nasumičan članak",
    help: "Pomoć",
  },
  footer: {
    pleaseLogin: 'Molimo prijavite se da biste koristili ovu funkciju.',
    text: {
      "part1": "Tekst je dostupan pod",
      "part2": "Creative Commons Licencom Pripisivanje-Dijeli pod istim uslovima 4.0 Internacionalna",
      "part3": "; mogu se primijeniti dodatni uvjeti. Korištenjem ove stranice prihvaćate",
      "part4": "Uvjeti korištenja",
      "part5": "i",
      "part6": "Politiku privatnosti",
      "part7": ". Alternipedia je open-source neprofitni projekat."
    },
    license: "Licenca",
    terms: "Uslovi korištenja",
    privacy: "Privatnost",
    contact: "Kontakt",
    disclaimers: "Odricanja",
    codeOfConduct: "Kodeks ponašanja",
    statistics: "Statistika",
    cookieStatement: "Izjava o kolačićima",
    developers: "Programeri",
  },
  notFound: {
    title: "404",
    heading: "Stranica nije pronađena",
    message:
      "Žao nam je, ali ne možemo pronaći stranicu koju tražite. Moguće je da je obrisana ili da link nije ispravan.",
    goHome: "Vrati se na početnu stranicu",
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Pređi na PRO',
    upgradePrompt: 'Nadogradi da otključaš premium funkcije',
    title: 'Znanje je moć, Pojačajte svoje.',
    month: 'mjesec',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Pročitaj sve u Alternipedia',
        basicTheme: 'Koristi osnovnu prilagodbu teme',
        saveArticles: 'Sačuvaj članke za kasnije čitanje',
      },
      buttonText: 'Tvoj plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Sve u Alternipedia, plus:',
      features: {
        customThemes: 'Koristi Alternipedia u svojim omiljenim temama, bojama, rasporedima i fontovima',
        notes: 'Pravi bilješke, upravljaj njima i izvozi ih iz cijele Alternipedia',
        advancedSearch: 'Napredni rezultati pretrage',
        semanticSearch: 'Semantičko pretraživanje uz moć AI',
        aiAssistant: 'Pristup WikiPal, tvom AI asistentu Alternipedia',
        topicMaps: 'Bolje istraživanje tema sa Tematskim Mapama',
        profileCustomization: 'Više opcija prilagodbe profila',
        aiTranslation: 'AI prijevod za bilo koju stranicu',
        appSupport: 'Kontinuirana podrška u Alternipedia aplikaciji',
      },
      buttonText: 'Nadogradi sada',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio socijalističku perspektivu fokusiranu na socijalnu pravdu, jednakost i radnička prava.',
      liberal: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio liberalnu perspektivu fokusiranu na prava pojedinca, slobodu govora i socijalnu pravdu.',  
      conservative: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio konzervativnu perspektivu fokusiranu na tradiciju, stabilnost i porodične vrijednosti.',
      nationalist: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio nacionalističku perspektivu fokusiranu na nacionalne interese i kulturno nasljeđe.',
      wikipedia: {  
        part1: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio neutralnu perspektivu fokusiranu na tačne informacije i činjenice.',
        part2: 'Pogledaj na Wikipediji →',
      }
    },
    lastEdited: 'Zadnje uređeno',
    tools: 'Alati',
    content: 'Sadržaj',
    article: 'Članak',
    discussion: 'Diskusija',
    close: 'Zatvori',
    notFoundHeader: 'Wikipedia članak nije pronađen',
    notFoundText: 'Sljedeći Wikipedia članak nije pronađen:',
    searchWikipediaText: 'Pretraži Wikipediju',
    read: 'Pročitaj',
    edit: 'Uredi',
    history: 'Historija'
  }
};

// Montenegrin dictionary
const cnr: Dictionary = {
  unauthorised: {
    heading: 'Pristup odbijen',
    message: 'Nemate dozvolu za pristup ovoj stranici. Provjerite da li ste prijavljeni ili kontaktirajte podršku.'
  },
  blockedAd: {
    part1: 'Izgleda da koristite blokator oglasa. Onemogućite ga da podržite naš sajt — ili',
    part2: 'nadogradite na PRO',
    part3: 'za iskustvo bez oglasa.'
  },
  metadata: {
    description: 'Obrazovna viki platforma dizajnirana da predstavi različite perspektive o znanju i idejama',
    wikipedia: {  
      part1: 'Otkrijte Alternipediju',
      part2: '— Različite perspektive i ideje',
    },  
    conservative: {  
      part1: 'Konzervativna perspektiva', 
      part2: '— Tradicija, stabilnost i slobodna tržišta',
    },
    nationalist: {    
      part1: 'Nacionalistička perspektiva',   
      part2: '— Nacionalni suverenitet i tradicionalna kultura',
    },  
    socialist: {
      part1: 'Socijalistička perspektiva',
      part2: '— Socijalna jednakost, kolektivni interesi i uloga države u ekonomiji',
    },
    liberal:  { 
      part1: 'Liberalna perspektiva', 
      part2: '— Prava pojedinca, sloboda govora i socijalna pravda', 
    },
  },
  accept: 'Prihvati',
  reject: 'Odbij',
  cookieMessage: 'Mi i naši partneri koristimo kolačiće za personalizaciju reklama, mjerenje performansi i pružanje društvenih funkcija. Kliknite Prihvati da omogućite personalizovane reklame ili Odbij da ih odbijete. Pogledajte našu Politiku privatnosti za više informacija.',
  login: {
    title: 'Prijava',
    google: 'Nastavi sa Google-om',
    facebook: 'Nastavi sa Facebook-om',
    x: 'Nastavi sa X-om',
    microsoft: 'Nastavi sa Microsoft-om',
    policy: "Prijavom prihvatate naše Uslove korištenja i Politiku privatnosti.",
  },
  userMenu: {
    login: "Prijava",
    contributions: "Doprinosi",
    savedArticles: "Sačuvani članci",
    preferences: "Postavke",
    logout: "Odjava",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('cnr-ME', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('cnr-ME', { year: 'numeric', month: 'long' }),
    "title": "Politika privatnosti",
    "lastUpdatedText": "Zadnje ažurirano:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Dobrodošli na Alternipedia — obrazovnu viki platformu dizajniranu da predstavi različite perspektive o znanju i idejama. Cijenimo vašu privatnost i posvećeni smo zaštiti vaših ličnih podataka. Ova politika objašnjava koje informacije prikupljamo, kako ih koristimo i koja su vaša prava."
      }
    ],
    "sections": [
      {
        "title": "Informacije koje prikupljamo",
        "content": [
          {
            "type": "list",
            "items": [
              "Informacije o nalogu: Kada se prijavite putem OAuth provajdera (npr. Google ili Meta), dobijamo vaše ime, e-mail adresu i profilnu sliku (ako je dostupna).",
              "Informacije o plaćanju: Ako odlučite izvršiti uplatu ili donaciju, Stripe sigurno obrađuje transakcije. Nikada ne čuvamo niti vidimo brojeve vaše kreditne kartice.",
              "Analitički podaci: Koristimo Vercel Analytics kako bismo razumjeli opšte obrasce korišćenja, kao što su popularne stranice i performanse sajta. Podaci su agregirani i ne identifikuju vas lično.",
              "Tehničke informacije: Prilikom posjete sajtu možemo automatski primati standardne log podatke, poput tipa pretraživača, uređaja i IP adrese, radi sigurnosti i funkcionalnosti.",
              "Adsense: Koristimo Google Adsense za prikazivanje oglasa na našem sajtu. Adsense može koristiti kolačiće za prikazivanje personalizovanih oglasa na osnovu vašeg pretraživačkog ponašanja na ovom ili drugim sajtovima."
            ]
          }
        ]
      },
      {
        "title": "Kako koristimo vaše informacije",
        "content": [
          {
            "type": "list",
            "items": [
              "Rad i unapređenje Alternipedia platforme",
              "Autentifikacija korisnika i upravljanje nalozima",
              "Sigurno procesiranje plaćanja preko Stripe",
              "Praćenje performansi i pouzdanosti sajta",
              "Odgovaranje na upite ili zahtjeve korisnika"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ne prodajemo, ne izdajemo niti ne trgujemo vašim ličnim podacima."
          }
        ]
      },
      {
        "title": "Kolačići i praćenje",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ne koristi reklamne ili praćenje kolačiće."
          },
          {
            "type": "paragraph",
            "text": "Koristimo samo neophodne kolačiće potrebne za prijavu i funkcionalnost sajta."
          }
        ]
      },
      {
        "title": "Čuvanje podataka i sigurnost",
        "content": [
          {
            "type": "paragraph",
            "text": "Vaši podaci se sigurno čuvaju koristeći industrijske standarde enkripcije i hosting infrastrukturu."
          },
          {
            "type": "paragraph",
            "text": "Preduzimamo razumne korake da zaštitimo vaše informacije od gubitka, zloupotrebe ili neovlaštenog pristupa."
          }
        ]
      },
      {
        "title": "Vaša prava",
        "content": [
          {
            "type": "list",
            "items": [
              "Pristup ličnim podacima ili zahtjev za kopiju",
              "Ispravka ili brisanje informacija koje čuvamo o vama",
              "Povlačenje pristanka ili zatvaranje naloga"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Prihvatanje uslova', content: ["Korišćenjem ovog sajta korisnici se slažu da poštuju ove Uslove korišćenja. Korisnici koji se ne slažu sa ovim uslovima treba odmah da prestanu sa korišćenjem sajta."] },
    { title: 'Odgovornost korisničkog naloga', content: ["Korisnici su odgovorni za čuvanje poverljivosti svojih podataka za prijavu. Sve aktivnosti koje se odvijaju pod korisničkim nalogom isključiva su odgovornost vlasnika naloga. Korisnici moraju odmah obavijestiti administratore o svakom neovlašćenom pristupu."] },
    { title: 'Ograničenje odgovornosti', content: ['Sajt pruža sadržaj „takav kakav jeste“ bez ikakvih garancija. Vlasnici sajta ne snose odgovornost za direktne, indirektne, slučajne, posledične ili kaznene štete nastale korišćenjem platforme.'] },
    {
      title: 'Smjernice ponašanja korisnika', content: [
        'Ne postavljati štetan ili zlonamjeran sadržaj koji može oštetiti sajt ili druge korisnike.',
        'Poštovati prava drugih korisnika.',
        'Izbjegavati aktivnosti koje mogu ometati funkcionalnost sajta.',
        'Poštovati važeće lokalne i međunarodne zakone.',
      ]
    },
    { title: 'Izmjene uslova', content: ['Sajt zadržava pravo da u bilo kojem trenutku izmijeni ove uslove. Nastavak korišćenja sajta nakon promjena znači prihvatanje novih uslova.'] },
    { title: 'Klauzula o prekidu', content: ['Sajt može ukinuti ili suspendovati pristup korisnika bez prethodne najave zbog kršenja ovih uslova ili drugih razloga koje administracija smatra prikladnim.'] },
    { title: 'Mjerodavno pravo', content: ['Ovi uslovi podležu zakonima jurisdikcije u kojoj sajt primarno posluje, bez obzira na principe sukoba zakona.'] },
  ],
  tools: {
    textToSpeech: "Tekst u govor",
    translate: "Prevedi",
    topicMap: "Mapa tema",
    notes: "Moje bilješke",
    wikipal: "Pitaj Wikipal",
    watchChanges: "Prati promjene",
    saveArticle: "Sačuvaj članak",
    saved: "Sačuvano",
    shortUrl: "Kratki link",
    citePage: "Citiraj ovu stranicu",
    QRCode: "QR kod",
    DownloadPDF: "Preuzmi kao PDF",
    printPage: "Ispiši stranicu",
    pageInfo: "Informacije o stranici",
  },
  termsAndConditions: 'Uslovi korišćenja',
  close: 'Zatvori',
  language: {
    searchMessage: "Pretraži jezike...",
    selectLanguage: "Izaberi jezik",
    description: "Izaberi jezik na kojem želiš da pregledaš ovaj članak.",
    notFound: "Nema jezika koji odgovaraju pretrazi",
  },
  bias: {
    heading: "Šta je pristrasnost?",
    explanation:
      "Pristrasnost je sklonost da se podrži ili favorizuje određeni politički, ideološki ili kulturni stav. Ona utiče na način na koji autor bira, tumači i predstavlja informacije. Autor sa političkom pristrasnošću može naglasiti određene činjenice i zanemariti druge, što utiče na percepciju čitaoca. Razumijevanje pristrasnosti pomaže u kritičkom i uravnoteženom čitanju članaka.",
    socialist: "Socijalistički",
    liberal: "Liberalni",
    wikipedia: "Wikipedia",
    conservative: "Konzervativni",
    nationalist: "Nacionalistički",
    title: "Pristrasnost pri čitanju",
  },
  common: {
    loadingPerspective: "Učitavanje perspektive...",
    fetchingUserInfo: "Dohvatanje informacija o korisniku...",
    home: "Početna",
    about: "O nama",
    help: "Pomoć",
    search: "Pretraga",
    searchPlaceholder: "Pretraži Alternipediju...",
    login: "Prijavi se",
    logout: "Odjavi se",
    signUp: "Registruj se",
    profile: "Profil",
    settings: "Podešavanja",
    language: "Jezik",
    theme: "Tema",
    comingSoon: "Alternipedia uskoro dolazi!",
    stayTuned: "Ostanite u toku.",
    exampleArticle: "Primjer članka:",
  },
  navigation: {
    aboutUs: "O nama",
    currentEvents: "Trenutni događaji",
    randomArticle: "Nasumičan članak",
    help: "Pomoć",
  },
  footer: {
    pleaseLogin: 'Molimo prijavite se da biste koristili ovu funkciju.',
    text: {
      "part1": "Tekst je dostupan pod",
      "part2": "Creative Commons Licencom Priznanje autorstva-Dijeli pod istim uvjetima 4.0 Internacionalna",
      "part3": "; mogu važiti dodatni uslovi. Korišćenjem ovog sajta prihvatate",
      "part4": "Uslove korišćenja",
      "part5": "i",
      "part6": "Politiku privatnosti",
      "part7": ". Alternipedia je open-source neprofitni projekat."
    },
    license: "Licenca",
    terms: "Uslovi korišćenja",
    privacy: "Privatnost",
    contact: "Kontakt",
    disclaimers: "Odricanja",
    codeOfConduct: "Kodeks ponašanja",
    statistics: "Statistika",
    cookieStatement: "Izjava o kolačićima",
    developers: "Programeri",
  },
  notFound: {
    title: "404",
    heading: "Stranica nije pronađena",
    message:
      "Žao nam je, ali ne možemo pronaći stranicu koju tražiš. Moguće je da je obrisana ili da je link neispravan.",
    goHome: "Vrati se na početnu stranicu",
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Pređi na PRO',
    upgradePrompt: 'Nadogradi da otključaš premium funkcije',
    title: 'Znanje je moć, Pojačajte svoje.',
    month: 'mjesec',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Pročitaj sve u Alternipedia',
        basicTheme: 'Koristi osnovnu prilagodbu teme',
        saveArticles: 'Sačuvaj članke za kasnije čitanje',
      },
      buttonText: 'Tvoj plan',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Sve u Alternipedia, plus:',
      features: {
        customThemes: 'Koristi Alternipedia u svojim omiljenim temama, bojama, rasporedima i fontovima',
        notes: 'Pravi bilješke, upravljaj njima i izvozi ih iz cijele Alternipedia',
        advancedSearch: 'Napredni rezultati pretrage',
        semanticSearch: 'Semantičko pretraživanje uz moć AI',
        aiAssistant: 'Pristup WikiPal, tvom AI asistentu Alternipedia',
        topicMaps: 'Bolje istraživanje tema sa Tematskim Mapama',
        profileCustomization: 'Više opcija prilagodbe profila',
        aiTranslation: 'AI prijevod za bilo koju stranicu',
        appSupport: 'Kontinuirana podrška u Alternipedia aplikaciji',
      },
      buttonText: 'Nadogradi sada',
    },
  },
  article: {
    biasIntro: {
      socialist: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio socijalističku perspektivu fokusiranu na socijalnu pravdu, jednakost i radnička prava.',
      liberal: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio liberalnu perspektivu fokusiranu na prava pojedinca, slobodu govora i socijalnu pravdu.',
      conservative: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio konzervativnu perspektivu fokusiranu na tradiciju, stabilnost i porodične vrijednosti.',
      nationalist: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio nacionalističku perspektivu fokusiranu na nacionalne interese i kulturno nasljeđe.',
      wikipedia: {
        part1: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio neutralnu perspektivu fokusiranu na tačne informacije i činjenice.',
        part2: 'Pogledaj na Wikipediji →',
      }
    },
    lastEdited: 'Zadnje uređeno',
    tools: 'Alati',
    close: 'Zatvori',
    notFoundHeader: 'Wikipedia članak nije pronađen',
    notFoundText: 'Sljedeći Wikipedia članak nije pronađen:',
    searchWikipediaText: 'Pretraži Wikipediju',
    content: 'Sadržaj',
    article: 'Članak',
    discussion: 'Diskusija',
    read: 'Pročitaj',
    edit: 'Uredi',
    history: 'Istorija'
  }
};

// Maltese dictionary
const mt: Dictionary = {
  unauthorised: {
    heading: 'Aċċess miċħud',
    message: "M'għandekx permess biex taċċessa din il-paġna. Iċċekkja jekk inti illoggjat jew ikkuntattja s-servizz ta' appoġġ."
  },
  blockedAd: {
    part1: 'Jidher li qed tuża blocker ta\' reklami. Jekk jogħġbok iċċekkja biex tappoġġja s-sit tagħna — jew',
    part2: 'aġġorna għal PRO',
    part3: 'għal esperjenza mingħajr reklami.'
  },
  metadata: {
    description: 'Pjattaforma wiki edukattiva mfassla biex tippreżenta prospettivi differenti dwar għarfien u ideat',
    wikipedia: {  
      part1: 'Skopri Alternipedia',
      part2: '— Prospettivi u ideat differenti',
    },  
    conservative: {  
      part1: 'Prospettiva konservattiva', 
      part2: '— Tradizzjoni, stabbiltà u swieq ħielsa',
    },
    nationalist: {    
      part1: 'Prospettiva nazzjonalista',   
      part2: '— Sovranità nazzjonali u kultura tradizzjonali',
    },
    liberal: {
      part1: 'Prospettiva liberali',
      part2: '— Prava individwali, libertà ta\' espressjoni u ġustizzja soċjali',
    },
    socialist: {
      part1: 'Prospettiva soċjalista',
      part2: '— Ugwaljanza soċjali, interessi kollettivi u rwol tal-istat fl-ekonomija',  
    },
  },
  accept: 'Aċċetta',
  reject: 'Irrifiuta',
  cookieMessage: 'Aħna u sħabna nużaw cookies biex nippersonalizzaw reklami, nippersonalizzaw l-esperjenza u nħaddmu funzjonalitajiet soċjali. Ikklikkja Aċċetta biex tippermetti reklami personalizzati jew Irrifiuta biex tirrifjuta. Ara l-Politika tal-Privatezza tagħna għal aktar informazzjoni.',
  login: {
    title: 'Idħol',
    google: 'Kompli ma\' Google',
    facebook: 'Kompli ma\' Facebook',
    x: 'Kompli ma\' X',
    microsoft: 'Kompli ma\' Microsoft',
    policy: "Billi tidħol, taqbel mat-Termini tas-Servizz u l-Politika tal-Privatezza tagħna.",
  },
  userMenu: {
    login: "Idħol",
    contributions: "Kontribuzzjonijiet",
    savedArticles: "Artikli Miffrux",
    preferences: "Preferenzi",
    logout: "Oħroġ",
  },
  termsOfServiceUpdateDate: TermsofServiceUpdateDate.toLocaleDateString('mt-MT', { year: 'numeric', month: 'long' }),
  "privacyPolicy": {
    "lastUpdated": PrivacyPolicyUpdateDate.toLocaleDateString('mt-MT', { year: 'numeric', month: 'long' }),
    "title": "Politika tal-Privatezza",
    "lastUpdatedText": "Aġġornata l-aħħar darba:",
    "intro": [
      {
        "type": "paragraph",
        "text": "Merħba f'Alternipedia — wiki edukattiva mfassla biex tippreżenta prospettivi differenti dwar għarfien u ideat. Napprezzaw il-privatezza tiegħek u nikkumpromettu li niżguraw il-protezzjoni tal-informazzjoni personali tiegħek. Din il-politika tispjega x'niġbru, kif nużawha u x'qed iħaddan id-drittijiet tiegħek."
      }
    ],
    "sections": [
      {
        "title": "Informazzjoni li Niġbru",
        "content": [
          {
            "type": "list",
            "items": [
              "Informazzjoni dwar il-kont: Meta tidħol billi tuża fornituri ta' OAuth (bħal Google jew Meta), nirċievu dettalji bażiċi bħan-isem tiegħek, indirizz tal-email u immaġni tal-profil (jekk disponibbli).",
              "Informazzjoni dwar il-ħlas: Jekk tagħżel li twettaq ħlas jew donazzjoni, Stripe jipproċessa t-transazzjonijiet b'mod sigur. Qatt ma naħżnux jew naraw in-numri tal-kards ta' kreditu tiegħek.",
              "Data ta' analiżi: Nużaw Vercel Analytics biex nifhmu mudelli ġenerali ta' użu, bħall-paġni popolari u kif is-sit tagħna jopera. Id-data hija aggregata u ma tidentifikakx personalment.",
              "Informazzjoni tekniċi: Meta żżur is-sit tagħna, nistgħu nirċievu awtomatikament data ta' log standard bħat-tip tal-browser, tagħmir u indirizz IP, li jgħin biex tiġi żgurata s-sigurtà u t-troubleshooting.",
              "Adsense: Nużaw Google Adsense biex nuru reklami fuq is-sit tagħna. Adsense jista' juża cookies biex juri reklami personalizzati ibbażati fuq l-imġiba tiegħek ta' browsing fuq dan"
            ]
          }
        ]
      },
      {
        "title": "Kif Nużaw l-Informazzjoni Tiegħek",
        "content": [
          {
            "type": "list",
            "items": [
              "Operazzjoni u titjib tal-pjattaforma Alternipedia",
              "Awtenikazzjoni tal-utenti u ġestjoni tal-kontijiet",
              "Proċessar sigur tal-ħlas permezz ta' Stripe",
              "Monitoraġġ tal-prestazzjoni u l-affidabbiltà tas-sit",
              "Tweġibiet għal mistoqsijiet jew talbiet tal-utenti"
            ]
          },
          {
            "type": "paragraph",
            "text": "Ma nbiegħux, naġġudikaw jew nittrattaw id-data personali tiegħek."
          }
        ]
      },
      {
        "title": "Cookies u Tracking",
        "content": [
          {
            "type": "paragraph",
            "text": "Alternipedia ma tużax cookies ta’ reklamar jew għall-iskopijiet ta’ tracking."
          },
          {
            "type": "paragraph",
            "text": "Nużaw biss cookies essenzjali meħtieġa għal sessjonijiet ta’ login u funzjonalità tas-sit."
          }
        ]
      },
      {
        "title": "Ħażna tad-Data u Sigurtà",
        "content": [
          {
            "type": "paragraph",
            "text": "Id-data tiegħek hija maħżuna b'mod sigur billi tuża standard industrijali ta' encryption u infrastruttura ta' hosting."
          },
          {
            "type": "paragraph",
            "text": "Nieħdu passi raġonevoli biex nipproteġu l-informazzjoni tiegħek minn telf, abbuż jew aċċess mhux awtorizzat."
          }
        ]
      },
      {
        "title": "Id-Drittijiet Tiegħek",
        "content": [
          {
            "type": "list",
            "items": [
              "Aċċess jew talba għal kopja tad-data personali tiegħek",
              "Korrezzjoni jew tħassir ta' informazzjoni li nżommu fuqek",
              "Ritratt tal-kunsens jew għeluq tal-kont"
            ]
          }
        ]
      }
    ]
  },
  termsOfService: [
    { title: 'Aċċettazzjoni tat-Termini', content: ["Billi taċċessa u tuża dan is-sit, l-utenti jaqblu li jikkonformaw ma’ dawn it-Termini tas-Servizz. Utenti li ma jaqblux ma’ dawn it-termini għandhom jieqfu jużaw is-sit immedjatament."] },
    { title: 'Responsabbiltà tal-Kont tal-Utent', content: ["L-utenti huma responsabbli biex iżommu l-kunfidenzjalità tad-dettalji tal-login tagħhom. Kull attività li sseħħ taħt il-kont ta’ utent hija biss ir-responsabbiltà tas-sid tal-kont. L-utenti għandhom jinnotifikaw immedjatament lill-amministraturi tas-sit dwar kwalunkwe aċċess mhux awtorizzat."] },
    { title: 'Limitazzjoni tar-Responsabbiltà', content: ['Is-sit jipprovdi kontenut “kif inhu” mingħajr garanziji ta’ ebda tip. Is-sidien tas-sit mhumiex responsabbli għal ħsarat diretti, indiretti, inċidentali, konsegwenzjali jew punittivi li jirriżultaw mill-interazzjonijiet tal-utent mal-pjattaforma.'] },
    {
      title: 'Linji Gwida għall-Imġiba tal-Utent', content: [
        'Tittellax kontenut ħażin jew malizzjuż li jista’ jagħmel ħsara lis-sit jew lill-utenti tiegħu.',
        'Irrespettaw id-drittijiet ta’ utenti oħra.',
        'Evita attività li tista’ tfixkel il-funzjonalità tas-sit.',
        'Ikkonforma mal-liġijiet lokali u internazzjonali applikabbli.',
      ]
    },
    { title: 'Modifiki għat-Termini', content: ['Is-sit jirriserva d-dritt li jemenda dawn it-termini fi kwalunkwe ħin. L-użu kontinwu tas-sit wara tibdil jimplika aċċettazzjoni tat-termini l-ġodda.'] },
    { title: 'Klawsula ta’ Terminazzjoni', content: ['Is-sit jista’ jtemm jew jissospendi l-aċċess tal-utent mingħajr avviż minn qabel minħabba ksur ta’ dawn it-termini jew għal kwalunkwe raġuni oħra li l-amministrazzjoni tqis xierqa.'] },
    { title: 'Liġi li Tapplika', content: ['Dawn it-termini huma rregolati mil-liġijiet tal-ġurisdizzjoni fejn is-sit jopera prinċipalment, mingħajr konsiderazzjoni għall-prinċipji tal-kunflitt tal-liġijiet.'] },
  ],
  termsAndConditions: 'Termini u Kundizzjonijiet',
  close: 'Agħlaq',
  tools: {
    textToSpeech: "Test għal diskors",
    translate: "Ittraduċi",
    topicMap: "Mapa tat-temi",
    notes: "In-noti tiegħi",
    wikipal: "Staqsi lil Wikipal",
    watchChanges: "Ara bidliet",
    saveArticle: "Issejvja l-artiklu",
    saved: "Issejvjat",
    shortUrl: "Link qasir",
    citePage: "Iċċita din il-paġna",
    QRCode: "Kodiċi QR",
    DownloadPDF: "Niżżel bħala PDF",
    printPage: "Ippprintja din il-paġna",
    pageInfo: "Informazzjoni dwar il-paġna",
  },
  language: {
    searchMessage: "Fittex lingwi...",
    selectLanguage: "Agħżel lingwa",
    description: "Agħżel il-lingwa li tixtieq tuża biex tara dan l-artiklu.",
    notFound: "Ma nstab l-ebda lingwa li tikkorrispondi",
  },
  bias: {
    heading: "X’inhi l-partiċolarità?",
    explanation:
      "Partiċolarità hija tendenza li tappoġġja jew tippreferi view politiku, ideoloġiku jew kulturali partikolari. Dan jista’ jinfluwenza kif awtur jagħżel, jinterpreta u jippreżenta informazzjoni. Meta awtur għandu partiċolarità politika, jista’ jpoġġi enfasi fuq fatti partikolari u jissottovaluta oħrajn, u b’hekk jinfluwenza l-perċezzjoni tal-qarrej. Fehim tal-partiċolarità jgħin biex wieħed jaqra artikli b’mod kritiku u bilanċjat.",
    socialist: "Soċjalista",
    liberal: "Liberali",
    wikipedia: "Wikipedia",
    conservative: "Konservattiv",
    nationalist: "Nazzjonalista",
    title: "Lettura b’partiċolarità",
  },
  common: {
    loadingPerspective: "Tgħabbi l-prospettiva...",
    fetchingUserInfo: "Qed tiġi mfittxija l-informazzjoni tal-utent...",
    home: "Dar",
    about: "Dwarna",
    help: "Għajnuna",
    search: "Fittex",
    searchPlaceholder: "Fittex f'Alternipedia...",
    login: "Idħol",
    logout: "Idħol barra",
    signUp: "Irreġistra",
    profile: "Profil",
    settings: "Settings",
    language: "Lingwa",
    theme: "Suġġett",
    comingSoon: "Alternipedia ġej dalwaqt!",
    stayTuned: "Ibqa’ infurmat.",
    exampleArticle: "Eżempju ta’ artiklu:",
  },
  navigation: {
    aboutUs: "Dwarna",
    currentEvents: "Avvenimenti kurrenti",
    randomArticle: "Artiklu każwali",
    help: "Għajnuna",
  },
  footer: {
    pleaseLogin: 'Jekk jogħġbok idħol biex tuża din il-karatteristika.',
    text: {
      "part1": "It-test huwa disponibbli taħt",
      "part2": "Liċenzja Creative Commons Attribuzzjoni-ShareAlike 4.0 Internazzjonali",
      "part3": "; jista' japplikaw termini addizzjonali. Billi tuża dan is-sit, inti taqbel mal",
      "part4": "Termini u Kundizzjonijiet",
      "part5": "u",
      "part6": "Politika tal-Privatezza",
      "part7": ". Alternipedia huwa proġett open-source mhux għall-profitt."
    },
    license: "Liċenzja",
    terms: "Termini",
    privacy: "Privatezza",
    contact: "Kuntatt",
    disclaimers: "Dikjarazzjonijiet",
    codeOfConduct: "Kodiċi ta’ Kondotta",
    statistics: "Statistiċi",
    cookieStatement: "Dikjarazzjoni dwar il-cookies",
    developers: "Żviluppaturi",
  },
  notFound: {
    title: "404",
    heading: "Paġna Ma Nsibniex",
    message:
      "Sfortunatament, ma stajniex insibu l-paġna li qed tfittex. Jista’ jkun li ġiet imħassra jew li l-link mhux korrett.",
    goHome: "Mur fid-Dar",
  },
  upgrade: {
    pro: 'PRO',
    goPro: 'Mur PRO',
    upgradePrompt: 'Aġġorna biex tiftaħ karatteristiċi premium',
    title: 'Il-Għarfien huwa Qawwa, Saħħaħ tiegħek.',
    month: 'xahar',
    freePlan: {
      name: 'Alternipedia',
      features: {
        readAll: 'Aqra kollox f’Alternipedia',
        basicTheme: 'Uża t-tema bażika għall-personalizzazzjoni',
        saveArticles: 'Iffranka artikli biex taqra aktar tard',
      },
      buttonText: 'Il-pjan tiegħek',
    },
    proPlan: {
      name: 'Alternipedia PRO',
      subtitle: 'Kollox f’Alternipedia, plus:',
      features: {
        customThemes: 'Uża Alternipedia fil-temi, kuluri, lejsers u fonts favoriti tiegħek',
        notes: 'Ħu noti, immaniġġjahom u esportahom minn Alternipedia kollha',
        advancedSearch: 'Riżultati ta’ tfittxija avvanzata',
        semanticSearch: 'Tfittxija semantika bil-qawwa tal-AI',
        aiAssistant: 'Aċċess għal WikiPal, assistent AI tiegħek ta’ Alternipedia',
        topicMaps: 'Riċerka aħjar ta’ suġġetti bl-Immappar tas-Suġġett',
        profileCustomization: 'Aktar għażliet ta’ personalizzazzjoni tal-profil',
        aiTranslation: 'Traduzzjoni AI għal kull paġna',
        appSupport: 'Appoġġ kontinwu fuq l-App Alternipedia',
      },
      buttonText: 'Aġġorna issa',
    },
  },
  article: {
    biasIntro: {
      liberal: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio liberalnu perspektivu fokusiranu na prava pojedinca, slobodu govora i socijalnu pravdu.',
      conservative: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio konzervativnu perspektivu fokusiranu na tradiciju, stabilnost i porodične vrijednosti.',
      socialist: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio socijalističku perspektivu fokusiranu na socijalnu pravdu, jednakost i radnička prava.',
      nationalist: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio nacionalističku perspektivu fokusiranu na nacionalne interese i kulturno nasljeđe.',
      wikipedia: {
        part1: 'Ovaj članak je kreiran od strane zajednice kako bi ponudio neutralnu perspektivu fokusiranu na tačne informacije i činjenice.',
        part2: 'Pogledaj na Wikipediji →',
      }
    },
    lastEdited: 'Editjat l-aħħar',
    tools: 'Għodod',
    content: 'Kontenut',
    close: 'Agħlaq',
    notFoundHeader: 'Ma nstab l-ebda artiklu ta’ Wikipedia',
    notFoundText: 'Dan l-artiklu ta’ Wikipedia ma nstabx:',
    searchWikipediaText: 'Fittex f’Wikipedia',
    article: 'Artiklu',
    discussion: 'Diskussjoni',
    read: 'Aqra',
    edit: 'Editja',
    history: 'Storja'
  }
};

// TODO: replace with proper Hebrew translation
const hb = en;

// Export dictionaries
// Note: Languages beyond the fully translated ones use English text as placeholders
// These should be professionally translated before production use
const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh,
  hi,
  es,
  fr,
  ar,
  bn,
  pt,
  ru,
  ur,
  id,
  de,
  ja,
  mr,
  te,
  tr,
  ta,
  yue,
  vi,
  fil,
  ko,
  ha,
  arz,
  jv,
  it,
  nl,
  el,
  sv,
  no,
  pl,
  th,
  uk,
  ro,
  cs,
  hu,
  fi,
  da,
  bg,
  sk,
  hr,
  lt,
  sl,
  lv,
  et,
  is,
  sq,
  sr,
  mk,
  bs,
  cnr,
  mt,
  hb,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] || dictionaries.en;
};
