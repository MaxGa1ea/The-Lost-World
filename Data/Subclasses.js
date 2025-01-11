/*
<- BEFORE YOU START ->
Barbarian:
3rd: Rage Based
6th: Any
10th: Any
14th: Any
*/

export const Subclasses = [
    {
        "Name" : "Path of the Gladiator",
        "Image" : "Images/Subclasses/Barbarian/Path of the Gladiator.png",
        "Desc" : "Path of the Gladiator Barbarians Focus on One-On-One Combat, Commonly Taking Part in Challenges or Tournaments",
        "Class" : "Barbarian",
        "Restriction" : "N/A",
        "Features" : [
            {
                "Name" : "To The Death",
                "Level" : "3",
                "Desc" : "Starting at 3rd Level Whenever you Rage you may Choose One Target to Fight To the Death. You Can Add Your Rage Damage Bonus To Attack And Damage (Add it a Second Time for Damage) Rolls. As Long As You can See this Target Your Rage Cannot End Except By the Time Limit. When You Kill This Target You Gain 1d12 + Your Charisma Modifier in Temporary Hit Points."
            },
            {
                "Name" : "Beyond Death",
                "Level" : "6",
                "Desc" : "If You Die or Become Unstable (Start Making Death Saving throws) While Raging and the Target You Selected With the 'To The Death' Feature is Still Alive Then Your Allies Gain Your Rage Damage Bonus to their Attack and Damage Rolls against Them"
            },
            {
                "Name" : "Gladiator's Defense",
                "Level" : "10",
                "Desc" : "You can Add Your Constitution Modifier to Your Armour Class Instead of Your Dexterity"
            },
            {
                "Name" : "Unnerving",
                "Level" : "10",
                "Desc" : "When You Select a Target with 'To The Death' They Must Make a Wisdom Saving throw Against Your Constitution Save DC (Con Score + Prof Bonus + 8) Or Be Frightened Until Your Rage Ends. The Can Repeat the Save at the End of Each Turn But the DC Increases by 1 Each Time"
            },
            {
                "Name" : "Reckless Speed",
                "Level" : "14",
                "Desc" : "When You Use Reckless Attack or Brutal Strike, Your Walking Speed Increases by 10ft (3m) For Each Use in a Turn"
            },
        ]
    },
    {
        "Name" : "Metamagic",
        "Class" : "Sorcerer",
        "Extras" : [
            {
                "Name" : "Delayed Spell",
                "PreReq" : "N/a",
                "Desc" : "<i>Cost: 1 Sorcery Point</i><br>When You cast a Spell You can Expend One Sorcery Point for the Spell To take effect at the start of your next turn. It will affect the Target chosen or in the space chosen. if the Spell requires concentration then you must begin concentrating when you expend the spell slot on this turn but the Time does not begin"
            },
        ]
    },
    {
        "Name" : "Stone Sorcery",
        "Image" : "Images/Subclasses/Sorcerer/Stone Sorcery.png",
        "Desc" : "Stone Sorcerers are Defensive, Melee Focus Sorcerers who do well in the heat of battle",
        "Class" : "Sorcerer",
        "Restriction" : "N/A",
        "Features" : [
            {
                "Name" : "Stone's Durability",
                "Level" : "3",
                "Desc" : "Your hit point maximum increases by 3, and increase by one for each level you gain in this class a primal earth magic increases your resilience. You skin also hardens, granting you an AC of 10 + Your Constitution Modifier + Your Charisma Modifier."
            },
            {
                "Name" : "Protector",
                "Level" : "3",
                "Desc" : "You gain proficiency with shields and both Simple and Martial Weapons"
            },
            {
                "Name" : "Stone Spells",
                "Level" : "3",
                "Desc" : "The primal earthen magic flowing through you allow you access to an additional array of spells. These spells are always prepared and count as sorcerer spells for you.<br><br><table><tr><th>Sorcerer Level</th><th>Spell</th></tr><tr><td>3</td><td>Earth Tremor, Catapult, Earthbind, Maximilian's earthen grasp</td></tr><tr><td>5</td><td>Erupting earth, Meld into stone</td></tr><tr><td>7</td><td>Conjure Minor Elementals, Summon Elemental</td></tr><tr><td>9</td><td>Wall of stone, Conjure elemental</td></tr></table>"
            },
            {
                "Name" : "Stone Aegis",
                "Level" : "6",
                "Desc" : "You can use primal stone magic to strengthen your allies. As a bonus action you can strengthen the defenses of yourself of an ally within 30ft/9m, setting their AC to 10+your charisma Modifier if they are not wearing armour and if their AC is not already higher. Any attempt to push them is reduced by 10ft/3m and they can use a reaction to reduce any damage by your Charisma Modifier.<br><br>This ends after one Minute or when you Use it again. You can use this ability Twice per long rest, and you gain an additional use at 10th and 18th level. You can also expend a spell slot of any level to regain a charge."
            },
            {
                "Name" : "Stoneborn",
                "Level" : "14",
                "Desc" : "You gain Resistance to Bludgeoning Damage and a 60ft/18m Burrow Speed, Channeling the Earth around you as you Do It. You also Gain Tremorsense of 30ft/9m"
            },
            {
                "Name" : "Master of the Earth",
                "Level" : "18",
                "Desc" : "When you use your Stone Aegis ability you can target up to you Charisma Modifier in creatures. Additionally you gain Immunity to Bludgeoning Damage"
            },
        ]
    },
]
