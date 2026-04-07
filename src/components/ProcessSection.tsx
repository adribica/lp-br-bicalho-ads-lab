const steps = [
  {
    number: '01',
    title: 'Você nos fala sobre o seu negócio',
    description: 'Entendemos sua oferta, mercado e objetivos.',
  },
  {
    number: '02',
    title: 'Nós desenhamos sua estratégia de tráfego',
    description: 'Pensada para gerar demanda real e leads qualificados.',
  },
  {
    number: '03',
    title: 'Nós lançamos e otimizamos',
    description: 'E escalamos com base em performance.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,rgba(246,240,255,0.8))] p-8 md:p-10 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-deep)]">
            Como Funciona
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--ink)] md:text-5xl">
            Processo simples. Estratégia clara. Execução orientada por performance.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[1.75rem] border border-white bg-white/85 p-6">
              <p className="font-display text-4xl font-bold tracking-[-0.05em] text-[var(--brand)]">
                {step.number}
              </p>
              <h3 className="mt-6 text-xl font-bold tracking-[-0.03em] text-[var(--ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
