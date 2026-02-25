export function FactionLayout({ factionName, children }: { factionName: string; children: React.ReactNode }) {
  return (
    <div className="faction-layout">
      <header>
        <h1>OPR Army Forge – {factionName}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Exportez votre liste en HTML</p>
      </footer>
    </div>
  );
}

