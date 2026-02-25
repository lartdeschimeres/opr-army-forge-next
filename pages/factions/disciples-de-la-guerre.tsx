// pages/factions/[faction].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import UnitCard from '../../components/unitcard';
import { Unit } from '../../types';

interface FactionData {
  name: string;
  units: Unit[];
}

export default function FactionPage({ factionData }: { factionData: FactionData }) {
  return (
    <div>
      <h1>{factionData.name}</h1>
      <div className="units-grid">
        {factionData.units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'public', 'factions', `${params!.faction}_aof.json`);
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const factionData = JSON.parse(jsonData);
  return { props: { factionData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { faction: 'disciples-de-la-guerre' } }],
    fallback: false,
  };
};
