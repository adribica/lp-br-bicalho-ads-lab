import { Quote, Star } from 'lucide-react';

const proofItems = [
  {
    quote: 'Pela primeira vez, rodar tráfego realmente pareceu de baixo risco.',
    person: 'Empresário local',
  },
  {
    quote: 'Eles estavam focados em resultado, não apenas em cobrar uma taxa.',
    person: 'Prestador de serviço',
  },
];

const stats = [
  { value: 'Incentivos alinhados', label: 'A gente cresce junto.' },
  { value: 'Menor risco', label: 'Sem pagar por promessas vazias.' },
  { value: 'Estratégia orientada a vendas', label: 'Não é só tráfego, é conversão.' },
];

const SocialProof = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[var(--ink)] p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">Por Que Isso Funciona Melhor</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">
            Menor risco. Melhor alinhamento. Mais foco em performance.
          </h2>
          <div className="mt-8 grid gap-4">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-7 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {proofItems.map((item) => (
            <article
              key={item.person}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_50px_rgba(50,35,86,0.05)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[var(--brand)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-[var(--brand)]" />
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--ink)]">{item.person}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
