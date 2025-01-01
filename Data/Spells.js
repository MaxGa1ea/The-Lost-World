export const Spells = [
    {
        "Name" : "Hydrosnipe",
        "Desc" : "Form a Bolt of Very Cold Water and Make A Ranged Attack Roll at An Enemy in Sight in order too Fling it at them. This Bolt of Water Deals 2d8 Cold and 2d8 Piercing Damage By Default, Interchangeably Raising by one Each Level (Level 3 is 3d8 Piercing + 2d8 Cold but Level 4 is 3d8 Piercing and 3d8 Cold)",
        "Level" : "2",
        "Class" : "Wizard, Sorcerer",
        "Duration" : "Instant",
        "Casting Time" : "1 Action",
        "School" : "Evocation",
        "Range" : "120ft / 36m",
        "Area" : "Point",
        "Attack / Save" : "Ranged",
        "Components" : "S",
        "Damage" : [
            {
                "Type" : "Cold",
                "Calculation" : "Math.floor(2+((SL-2)/2))",
                "Dice" : "d8",
            },
            {
                "Type" : "Piercing",
                "Calculation" : "Math.ceil(2+((SL-2)/2))",
                "Dice" : "d8",
            }
        ]
    },
    /*{
        "Name" : "Hydrosnipe",
        "Desc" : "Form a Bolt of Very Cold Water and Make A Ranged Attack Roll at An Enemy in Sight in order too Fling it at them. This Bolt of Water Deals 2d8 Cold and 2d8 Piercing Damage By Default, Interchangeably Raising by one Each Level (Level 3 is 3d8 Piercing + 2d8 Cold but Level 4 is 3d8 Piercing and 3d8 Cold)",
        "Level" : "10",
        "Excess Magic" : "100",
        "Class" : "Wizard, Sorcerer",
        "Duration" : "Instant",
        "Casting Time" : "1 Action",
        "School" : "Evocation",
        "Range" : "120ft / 36m",
        "Area" : "Point",
        "Attack / Save" : "Ranged",
        "Components" : "S",
        "Damage" : [
            {
                "Type" : "Cold",
                "Calculation" : "Math.floor(2+((SL-2)/2))",
                "Dice" : "d8",
            },
            {
                "Type" : "Piercing",
                "Calculation" : "Math.ceil(2+((SL-2)/2))",
                "Dice" : "d8",
            }
        ]
    },*/
]
