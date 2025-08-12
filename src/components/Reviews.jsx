import { useTranslation } from 'react-i18next'

export default function Reviews() {
  const { t } = useTranslation()
  const reviews = t('reviews.items', { returnObjects: true })

  return (
    <section id="reviews" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('reviews.heading')}</h2>
          <p className="mt-2 text-brand-black/70">{t('reviews.sub')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <article key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange text-lg">★</span>
                <div>
                  <h3 className="font-semibold">{r.name}</h3>
                  <div className="text-xs text-brand-black/60">★★★★★</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-brand-black/80">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
