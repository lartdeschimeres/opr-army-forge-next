import { useRouter } from 'next/router';
import { UnitCard } from '../../components/UnitCard';
import { FactionLayout } from '../../components/FactionLayout';

export default function FactionPage({ factionData }: { factionData: any }) {
  const router = useRouter();
  const { faction } = router.query;

  return (
    <FactionLayout factionName={factionData.name}>
      <h1>{factionData.name}</h1>
      <div className="units-grid">
        {factionData.units.map((unit: any) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </FactionLayout>
  );
}

// Chargement des données au build (SSG)
export async function getStaticProps({ params }: { params: { faction: string } }) {
  const factionData = require(`../../public/factions/${params.faction}.json`);
  return { props: { factionData } };
}

// Génération des paths statiques (pour SSG)
export async function getStaticPaths() {
  return {
    paths: [{ params: { faction: 'disciples-de-la-guerre_aof' } }],
    fallback: false,
  };
}

