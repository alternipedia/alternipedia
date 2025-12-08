import Link from 'next/link';

type Article = {
  slug: string;
  title: string;
  description: string;
};

export default function FeaturedArticles({ lang }: { lang: string }) {
  const articles: Article[] = [
    {
      slug: 'Climate_change/wikipedia',
      title: 'Climate Change',
      description: 'Compare Liberal vs. Conservative views',
    },
    {
      slug: 'Capitalism/wikipedia',
      title: 'Capitalism',
      description: 'How Socialists and Liberals differ',
    },
    {
      slug: 'Israel_Palestine_conflict/wikipedia',
      title: 'Israel–Palestine Conflict',
      description: 'Religious and Nationalist perspectives',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-neutral-800  w-11/12 px-6 md:px-12 rounded-lg mb-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Articles</h2>
          {/* <Link href={`/${lang}/wiki`} className="text-sm text-gray-600 hover:text-gray-800">
            View all
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${lang}/wiki/${a.slug}`}
              className="block bg-white dark:bg-neutral-700 rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition p-6 text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-neutral-300">{a.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">{a.description}</p>
                </div>
                <div className="hidden lg:flex items-center">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Featured</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
