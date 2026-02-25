import UnitCard from '../../components/unitcard';

export async function getStaticProps({ params }) {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'public', 'factions', `${params.faction}.json`);
  const factionData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { factionData } };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { faction: 'disciples-de-la-guerre' } }],
    fallback: false,
  };
}

export default function FactionPage({ factionData }) {
  return (
    <div>
      <h1>{factionData.name}</h1>
      <div className="units-grid">
        {factionData.units.map(unit => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
