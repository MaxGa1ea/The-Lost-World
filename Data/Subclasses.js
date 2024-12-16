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
]
