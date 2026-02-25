// types.ts
export interface UnitStats {
  Mouvement: number;
  CC: number;
  CT: number;
  Endurance: number;
  Commandement: number;
}

export interface Unit {
  id: string;
  name: string;
  cost: number;
  stats: UnitStats;
  weapons: string[];
  specialRules: string[];
  upgrades: Array<{ name: string; cost: number; effect: string }>;
}
