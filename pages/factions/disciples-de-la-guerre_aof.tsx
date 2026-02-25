import { GetStaticProps } from 'next';
import UnitCard from '../../components/unitcard';
import { Unit } from '../../components/unitcard';

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
  const factionData = require(`../../public/factions/${params!.faction}.json`);
  return { props: { factionData } };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { faction: 'disciples-de-la-guerre' } }],
    fallback: false,
  };
};
