// components/unitcard.tsx
import { Unit } from '../types';

export function UnitCard({ unit }: { unit: Unit }) {
  const renderStats = () => {
    const stats = unit.stats;
    return (
      <>
        <div><strong>Mouvement:</strong> {stats.Mouvement}</div>
        <div><strong>CC:</strong> {stats.CC}</div>
        <div><strong>CT:</strong> {stats.CT}</div>
        <div><strong>Endurance:</strong> {stats.Endurance}</div>
        <div><strong>Commandement:</strong> {stats.Commandement}</div>
      </>
    );
  };

  return (
    <div className="unit-card">
      <h2>{unit.name} <span>({unit.cost} pts)</span></h2>
      <div className="stats">
        {renderStats()}
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
            <div key={upgrade.name}>
              <input type="radio" id={upgrade.name} name={`upgrade-${unit.id}`} />
              <label htmlFor={upgrade.name}>
                {upgrade.name} (+{upgrade.cost} pts) – {upgrade.effect}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UnitCard;
