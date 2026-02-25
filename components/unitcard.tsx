import { ReactNode } from 'react';

interface UnitStats {
  Mouvement: number;
  CC: number;
  CT: number;
  Endurance: number;
  Commandement: number;
}

interface Unit {
  id: string;
  name: string;
  cost: number;
  stats: UnitStats;
  weapons: string[];
  specialRules: string[];
  upgrades: Array<{ name: string; cost: number; effect: string }>;
}

export function UnitCard({ unit }: { unit: Unit }) {
  return (
    <div className="unit-card">
      <h2>{unit.name} <span>({unit.cost} pts)</span></h2>
      <div className="stats">
        {Object.entries(unit.stats).map[([stat, value]) => (
          <div key={stat}>
            <strong>{stat}:</strong> {value.toString()}
          </div>
        ))}
      </div>
      <div className="weapons">
        <strong>Armes:</strong> {unit.weapons.join(', ')}
      </div>
      <div className="special-rules">
        <strong>Règles spéciales:</strong> {unit.specialRules.join(', ')}
      </div>
      {unit.upgrades.length > 0 && (
        <div className="upgrades">
          <strong>Améliorations:</strong>
          {unit.upgrades.map((upgrade) => (
            <label key={upgrade.name}>
              <input
                type="radio"
                name={`upgrade-${unit.id}`}
                checked={false}
                onChange={() => {}}
              />
              {upgrade.name} (+{upgrade.cost} pts) – {upgrade.effect}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default UnitCard;
