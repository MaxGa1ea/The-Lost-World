/*
<- BEFORE YOU START ->
Template:
{
        "Name" : "Primal Air Guardian",
        "Desc" : "Primal Guardians are the guardians of the Primal stones and Primal Energies, with the Primal Air Guardians being the Guardians of Auran Energies. They Appear as primal Wind Carrying enscribed magical armour",
        "Type" : "Large Construct",
        "Alignment" : "Neutral",
        "Armour Class" : "18",
        "Hit Points" : "185 (20d10 + 75)",
        "Speed" : "50ft, 30ft Fly",
        "Stats" : {
            "STR" : "18",
            "DEX" : "8",
            "CON" : "21",
            "INT" : "10",
            "WIS" : "17",
            "CHA" : "11",
        },
        "Saving Throws" : [
            "Dex + 5",
            "Wis + 7"
        ],
        "Skills" : [
            "Intimidation + 9",
            "Athletics + 10",
            "Insight + 7",
            "Perception + 7"
        ],
        "Damage Resistances" : [
            "Cold",
            "Fire"
        ],
        "Damage Immunities" : [
            "Thunder",
            "Lightning",
            "Non-Magical Physical",
            "Poison"
        ],
        "Condition Immunities" : [
            "Charmed",
            "Exhaustion",
            "Frightened",
            "Paralyzed",
            "Poisoned",
            "Petrified"
        ],
        "Senses" : [
            "Truesight 120ft",
            "Passive Perception 17"
        ],
        "Languages" : [
            "Auran",
            "Common"
        ],
        "Challenge" : "CR 12",
        "XP" : "(8,400 XP)",
        "Prof Bonus" : "+4",
        "Traits" : [
            {
                "Name" : "Unusual Nature",
                "Desc" : "This Creature Does Not Require Food, Drink, or Sleep"
            },
            {
                "Name" : "Primal Magic",
                "Desc" : "The Primal Magic Flowing through This Creature Makes it Immune to Anit-Magic and Dispel Magic Effects Unless From an Auran Source"
            }
        ],
        "Actions" : [
            {
                "Name" : "Multiattack",
                "Desc" : "The Construct Makes Two Attacks with Either Punch or Thunder Fist"
            },
            {
                "Name" : "Punch",
                "Desc" : "<i>Melee Weapon Attack:</i> +8 to Hit, reach 10ft / 3m, one target. <i>Hit:</i> 13 (2d8+4) Bludgeoning and 13 (2d8+4) Thunder Damage"
            },
            {
                "Name" : "Thunder Fist",
                "Desc" : "<i>Ranged Spell Attack:</i> +7 to Hit, reach 60ft / 18m, one target. <i>Hit:</i> 20 (3d10+4) Thunder Damage, and If the Creature is Medium or Smaller they must make a DC17 Strength save or be pushed back 10ft and prone."
            },
            {
                "Name" : "Wind Rush (Recharge 5-6)",
                "Desc" : "The Construct Casts Gust of Wind with DC 16 This Does not Require Concentration and lasts until this Constructs next turn"
            }
        ],
        "Bonus Actions" : [
            {
                "Name" : "Sky Step (Recharge 4-6)",
                "Desc" : "Teleport to an Unoccupied space within 60ft. Any Creature within 10ft of where you land takes 7 (2d6) Thunder Damage"
            }
        ],
        "Reactions" : [
            {
                "Name" : "Retaliatory Wind",
                "Desc" : "When Stuck by a Melee attack by a Creature who is visible, Force them to make a DC 16 Strength save or be pushed 10ft back and be prone"
            },
        ],
        "Legendary Actions" : [
            {
                "Name" : "Reposition",
                "Desc" : "Move Up to half Your Movement speed"
            }
        ],
        "Lair Actions" : [
            {
                "Name" : "Lightning Strike",
                "Desc" : "One Creature must Succeed a DC 17 Dex Save or take 11 (2d10) Lightning Damage (Save Halves)"
            }
        ],
        "Region Effects" : [
            {
                "Name" : "Stormcaller",
                "Desc" : "The Area Around a Primal Guardian transforms into something similiar to that of the guardian and in this case storms over the guardian willl become more frequent and if multiple air guardians congregate then this storm will become a constant feature"
            }
        ]
    },
*/


export const Monsters = [
    {
        "Name" : "Primal Air Guardian",
        "Desc" : "Primal Guardians are the guardians of the Primal stones and Primal Energies, with the Primal Air Guardians being the Guardians of Auran Energies. They Appear as primal Wind Carrying enscribed magical armour",
        "Image" : "Images/Monsters/CR 12/Primal Air Guardian.png",
        "Type" : "Large Construct",
        "Alignment" : "Neutral",
        "Armour Class" : "18",
        "Hit Points" : "185 (20d10 + 75)",
        "Speed" : "50ft, 30ft Fly",
        "Stats" : {
            "STR" : "18",
            "DEX" : "8",
            "CON" : "21",
            "INT" : "10",
            "WIS" : "17",
            "CHA" : "11",
        },
        "Saving Throws" : [
            "Dex + 5",
            "Wis + 7"
        ],
        "Skills" : [
            "Intimidation + 9",
            "Athletics + 10",
            "Insight + 7",
            "Perception + 7"
        ],
        "Damage Resistances" : [
            "Cold",
            "Fire"
        ],
        "Damage Immunities" : [
            "Thunder",
            "Lightning",
            "Non-Magical Physical",
            "Poison"
        ],
        "Condition Immunities" : [
            "Charmed",
            "Exhaustion",
            "Frightened",
            "Paralyzed",
            "Poisoned",
            "Petrified"
        ],
        "Senses" : [
            "Truesight 120ft",
            "Passive Perception 17"
        ],
        "Languages" : [
            "Auran",
            "Common"
        ],
        "Challenge" : "CR 12",
        "XP" : "(8,400 XP)",
        "Prof Bonus" : "+4",
        "Traits" : [
            {
                "Name" : "Unusual Nature",
                "Desc" : "This Creature Does Not Require Food, Drink, or Sleep"
            },
            {
                "Name" : "Primal Magic",
                "Desc" : "The Primal Magic Flowing through This Creature Makes it Immune to Anit-Magic and Dispel Magic Effects Unless From an Auran Source"
            }
        ],
        "Actions" : [
            {
                "Name" : "Multiattack",
                "Desc" : "The Construct Makes Two Attacks with Either Punch or Thunder Fist"
            },
            {
                "Name" : "Punch",
                "Desc" : "<i>Melee Weapon Attack:</i> +8 to Hit, reach 10ft / 3m, one target. <i>Hit:</i> 13 (2d8+4) Bludgeoning and 13 (2d8+4) Thunder Damage"
            },
            {
                "Name" : "Thunder Fist",
                "Desc" : "<i>Ranged Spell Attack:</i> +7 to Hit, reach 60ft / 18m, one target. <i>Hit:</i> 20 (3d10+4) Thunder Damage, and If the Creature is Medium or Smaller they must make a DC17 Strength save or be pushed back 10ft and prone."
            },
            {
                "Name" : "Wind Rush (Recharge 5-6)",
                "Desc" : "The Construct Casts Gust of Wind with DC 16 This Does not Require Concentration and lasts until this Constructs next turn"
            }
        ],
        "Bonus Actions" : [
            {
                "Name" : "Sky Step (Recharge 4-6)",
                "Desc" : "Teleport to an Unoccupied space within 60ft. Any Creature within 10ft of where you land takes 7 (2d6) Thunder Damage"
            }
        ],
        "Reactions" : [
            {
                "Name" : "Retaliatory Wind",
                "Desc" : "When Stuck by a Melee attack by a Creature who is visible, Force them to make a DC 16 Strength save or be pushed 10ft back and be prone"
            },
        ],
        "Legendary Actions" : [
            {
                "Name" : "Reposition",
                "Desc" : "Move Up to half Your Movement speed"
            }
        ],
        "Lair Actions" : [
            {
                "Name" : "Lightning Strike",
                "Desc" : "One Creature must Succeed a DC 17 Dex Save or take 11 (2d10) Lightning Damage (Save Halves)"
            }
        ],
        "Region Effects" : [
            {
                "Name" : "Stormcaller",
                "Desc" : "The Area Around a Primal Guardian transforms into something similiar to that of the guardian and in this case storms over the guardian willl become more frequent and if multiple air guardians congregate then this storm will become a constant feature"
            }
        ]
    },
]