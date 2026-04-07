const Footer = () => {
  return (
    <footer className="border-t border-[var(--line)] bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/bicalho-logo.png" alt="Bicalho Ads Lab" className="h-10 w-auto" />
          <p>Publicidade orientada por performance para empresas brasileiras prontas para escalar.</p>
        </div>

        <p>© {new Date().getFullYear()} Bicalho Ads Lab. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
