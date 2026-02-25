{
  "name": "Disciples de la Guerre",
  "units": [
    {
      "id": "guerriers",
      "name": "Guerriers",
      "cost": 5,
      "stats": {
        "Mouvement": 6,
        "CC": 4,
        "CT": 5,
        "Endurance": 3,
        "Commandement": 6
      },
      "weapons": ["Épée", "Bouclier"],
      "specialRules": ["Fanatique", "Charge impétueuse"],
      "upgrades": [
        { "name": "Bannière", "cost": 2, "effect": "+1 au Commandement" },
        { "name": "Armes lourdes", "cost": 1, "effect": "+1 en CC" }
      ]
    },
    {
      "id": "prêtres",
      "name": "Prêtres",
      "cost": 10,
      "stats": {
        "Mouvement": 5,
        "CC": 3,
        "CT": 4,
        "Endurance": 4,
        "Commandement": 8
      },
      "weapons": ["Masse", "Sorts divins"],
      "specialRules": ["Bénédiction", "Inspiration"],
      "upgrades": [
        { "name": "Artefact sacré", "cost": 3, "effect": "+1 à tous les jets" },
        { "name": "Monture", "cost": 4, "effect": "Mouvement +2" }
      ]
    }
  ]
}
