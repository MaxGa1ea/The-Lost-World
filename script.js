//Currently Taking Place 1524 Progress Age (PA)

import { Color } from "./Data/Color.js"
import { Cities } from "./Data/Cities.js"
import { Items } from "./Data/Items.js"
import { Spells } from "./Data/Spells.js"
import { Factions } from "./Data/Factions.js"
import { People } from "./Data/People.js"
import { Concepts } from "./Data/Concepts.js"
import { Races } from "./Data/Races.js"
import { Subclasses } from "./Data/Subclasses.js"
import { Places } from "./Data/Places.js"
import { Backgrounds } from "./Data/Backgrounds.js"
import { Feats } from "./Data/Feats.js"
import { Materials } from "./Data/Materials.js"
import { Deities } from "./Data/Deities.js"
import { Events } from "./Data/Events.js"
import { Monsters } from "./Data/Monsters.js"

//Global Variables
let SearchText = 10
const Pages = ["Home", "Cities", "People", "Items", "Events", "Places", "Spells", "Subclasses", "Monsters", "Deities", "Materials", "Factions", "Concepts", "Races", "Backgrounds", "Feats"]

//Import

function Start() {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href', "favicon.ico");
    headTitle.appendChild(setFavicon);
	
    var url = window.location.pathname
    var lastPart = url.split("/").pop();
    var elements = document.getElementsByTagName("option"),
        element;
    while (element = elements[0]) {
      element.parentNode.removeChild(element);
    }
    let ColourSelect = IdGet("color")
    for (let a = 0; a < Color.length; a++) {
        let option = document.createElement("option")
        option.textContent = Color[a]["Name"]
        option.value = a
        ColourSelect.appendChild(option)
    }
    ColourChange()
    let SearchParent = IdGet("searchtext")
    for (let a = 0; a < SearchText; a++) {
        let text = document.createElement("a")
        text.id = "text" + (a+1)
        SearchParent.appendChild(text)
    }
    if (lastPart == "index.html" || lastPart == "") {
        let IdList = Array.from(Pages)
        IdList.shift()
        for (let a = 0; a < IdList.length; a++) {
            const link = SearchIterate(IdList[a])
            IdGet(IdList[a]).addEventListener("click", function() { Redirect(link) })
        }
    } else if (lastPart == "cities.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Cities.length; a++) {
            if (Cities[a]["Name"] == hash) {
                const Info = ["Population", "Formed", "Ruined", "AKA", "Size", "Primary Race", "Primary Language", "Primary Industry", "Primary Import", "Primary Export", "Primary God"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Cities[a][Info[b]]
                }
                IdGet("Name").textContent = Cities[a]["Name"]
                IdGet("Image").src = Cities[a]["Image"]
                IdGet("Desc").innerHTML = Cities[a]["Desc"]
            }
        }
    } else if (lastPart == "citieslist.html") {
        let Sizes = ["Capital", "Large City", "City", "Town", "Village", "Hamlet"]
        let SortedCity = {
            "Hamlet": [],
            "Village": [],
            "Town": [],
            "City": [],
            "Large City": [],
            "Capital": []
        }
        for (let a = 0; a < Cities.length; a++) {
            SortedCity[Cities[a]["Size"]].push(Cities[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedCity[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedCity[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedCity[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedCity[Sizes[a]][d]
                            for (let e = 0; e < Cities.length; e++) {
                                if (Cities[e]["Name"] == SortedCity[Sizes[a]][d]) {
                                    square.style.backgroundImage = "url(" + Cities[e]["Image"] + ")";
                                    let Link = SearchIterate(Cities[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "items.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Items.length; a++) {
            if (Items[a]["Name"] == decodeURI(hash)) {
                const Info = ["Rarity", "First Made", "Last Made", "Creation Location", "Type", "Amount Made", "Cost", "Magicality"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Items[a][Info[b]]
                }
                IdGet("Name").textContent = Items[a]["Name"]
                IdGet("Image").src = Items[a]["Image"]
                IdGet("Desc").innerHTML = Items[a]["Desc"]
            }
        }
    } else if (lastPart == "itemslist.html") {
        let Sizes = ["Armor", "Potion", "Ring", "Rod", "Scroll", "Staff", "Wand", "Weapon", "Wondrous Item"]
        let SortedItem = {
            "Armor" : [],
            "Potion" : [],
            "Ring" : [],
            "Rod" : [],
            "Scroll" : [],
            "Staff" : [],
            "Wand" : [],
            "Weapon" : [],
            "Wondrous Item" : [],
        }
        for (let a = 0; a < Items.length; a++) {
            SortedItem[Items[a]["Type"]].push(Items[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedItem[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedItem[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedItem[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedItem[Sizes[a]][d]
                            for (let e = 0; e < Items.length; e++) {
                                if (Items[e]["Name"] == SortedItem[Sizes[a]][d]) {
                                    square.style.backgroundImage = "url(" + Items[e]["Image"] + ")";
                                    let Link = SearchIterate(Items[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "spells.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Spells.length; a++) {
            if (Spells[a]["Name"] == hash) {
                const Info = ["Level", "Class", "Duration", "Casting Time", "School", "Range", "Area", "Attack / Save", "Components"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Spells[a][Info[b]]
                }
	        if (Spells[a]["Level"] == "10") {
			IdGet("Excess Magic").textContent = "Excess Magic: " + Spells[a]["Excess Magic"]
		}
                IdGet("Name").textContent = Spells[a]["Name"]
                IdGet("Desc").innerHTML = "<br>" + Spells[a]["Desc"] + "<br>"
                if (Spells[a]["Damage"]) {
                    for (let b = 1; b < 10; b++) {
                        let button = IdGet(b)
                        if (b == Spells[a]["Level"]) {
                            const c = b
                            button.addEventListener("click", function() { ActivateSpellButton(c) })
                            button.classList.add("active")
                        } else if (b < Spells[a]["Level"]) {
                            button.classList.add("inactive")
                        } else if (b >= Spells[a]["Level"]) {
                            const c = b
                            button.addEventListener("click", function() { ActivateSpellButton(c) })
                        }
                    }
                    let DamageText
                    for (let b = 0; b < Spells[a]["Damage"].length; b++) {
                        let SL = Spells[a]["Level"]
                        let Calc = (eval(Spells[a]["Damage"][b]["Calculation"])).toString()
                        if (DamageText) {
                            DamageText = DamageText + Calc + Spells[a]["Damage"][b]["Dice"] + " " + Spells[a]["Damage"][b]["Type"] + " Damage<br>"
                        } else {
                            DamageText = Calc + Spells[a]["Damage"][b]["Dice"] + " " + Spells[a]["Damage"][b]["Type"] + " Damage<br>"
                        }
                    }
                    let Damage = IdGet("Damage")
                    Damage.innerHTML = DamageText
                } else {
                    IdGet("DamageCalc").style.display = "none"
                }
            }
        }
    } else if (lastPart == "spellslist.html") {
        let Sizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        let SortedSpell = {
            "1" : [],
            "2" : [],
            "3" : [],
            "4" : [],
            "5" : [],
            "6" : [],
            "7" : [],
            "8" : [],
            "9" : [],
	    "10" : [],
        }
        let DamageColour = {
            "Bludgeoning" : "#d6d6d6",
            "Piercing" : "#d6d6d6",
            "Slashing" : "#d6d6d6",
            "Cold" : "#81ceec",
            "Fire" : "#ed6e03",
            "Lightning" : "#547ca6",
            "Thunder" : "#8666b1",
            "Acid" : "#e4e819",
            "Poison" : "#a2b549",
            "Necrotic" : "#82c2a2",
            "Radiant" : "#e7ce84",
            "Psychic" : "#e7ce84",
            "Force" : "#c86060",
        }
        for (let a = 0; a < Spells.length; a++) {
            SortedSpell[Spells[a]["Level"]].push(Spells[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedSpell[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedSpell[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedSpell[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedSpell[Sizes[a]][d]
                            for (let e = 0; e < Spells.length; e++) {
                                if (Spells[e]["Name"] == SortedSpell[Sizes[a]][d]) {
                                    try {
                                        square.style.background = DamageColour[Spells[e]["Damage"][0]["Type"]]
                                    } catch (err) {
                                        square.style.background = "Black"
                                    }
                                    let Link = SearchIterate(Spells[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "factions.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Factions.length; a++) {
            if (Factions[a]["Name"] == decodeURI(hash)) {
                const Notable = ["Person", "Place", "Event"]
                for (let b = 0; b < Notable.length; b++) {
                    let element = IdGet(Notable[b])
                    for (let c = 0; c < Factions[a]["Notable " + Notable[b]].length; c++) {
                        element.innerHTML = element.innerHTML + "<a href=" + SearchIterate(Factions[a]["Notable " + Notable[b]][c]['Name']) + ">" + Factions[a]["Notable " + Notable[b]][c]['Name'] + "</a>"
                    }
                }
                IdGet("Name").textContent = Factions[a]["Name"]
                IdGet("NameContainer").style.background = Factions[a]["Colour"]
                IdGet("Image").src = Factions[a]["Image"]
                IdGet("Desc").innerHTML = Factions[a]["Desc"]
                let RewardTable = IdGet("Factionrewardtable")
                for (let b = 0; b < Factions[a]["Rewards"].length; b++) {
                    let Line = document.createElement("tr")
                    RewardTable.appendChild(Line)

                    let Favour = document.createElement("th")
                    Favour.textContent = Factions[a]["Rewards"][b]["Favour"]
                    Line.appendChild(Favour)

                    let Title = document.createElement("th")
                    Title.textContent = Factions[a]["Rewards"][b]["Title"]
                    Line.appendChild(Title)

                    let Privileges = document.createElement("th")
                    Privileges.textContent = Factions[a]["Rewards"][b]["Privileges"]
                    Line.appendChild(Privileges)
                }
            }
        }
    } else if (lastPart == "factionslist.html") {
        let mainParent = IdGet("ListTable")
        let c = 0
        for (let a = 0; a < Math.ceil(Factions.length / 5); a++) {
            let Line = document.createElement("tr")
            mainParent.appendChild(Line)
            for (let b = 0; b < 5; b++) {
                let square = document.createElement("td")
                square.textContent = Factions[c]["Name"]
                square.style.background = Factions[c]["Colour"]
                const Link = SearchIterate(Factions[c]["Name"])
                square.addEventListener('click', function() { Redirect(Link) });
                c++
                Line.appendChild(square)
            }
        }
    } else if (lastPart == "people.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < People.length; a++) {
            if (People[a]["Name"] == decodeURI(hash)) {
                const Info = ["Birthday", "Deathday", "Age", "Race", "Title", "Level / CR", "Class", "Type", "Statblock"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + People[a][Info[b]]
                }
                IdGet("Name").textContent = People[a]["Name"]
                IdGet("Desc").innerHTML = People[a]["Desc"]
            }
        }
    } else if (lastPart == "peoplelist.html") {
        let Sizes = ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"]
        let SortedPeople = {
            "Aberration" : [],
            "Beast" : [],
            "Celestial" : [],
            "Construct" : [],
            "Dragon" : [],
            "Elemental" : [],
            "Fey" : [],
            "Fiend" : [],
            "Giant" : [],
            "Humanoid" : [],
            "Monstrosity" : [],
            "Ooze" : [],
            "Plant" : [],
            "Undead" : []
        }
        for (let a = 0; a < People.length; a++) {
            SortedPeople[People[a]["Type"]].push(People[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedPeople[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedPeople[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedPeople[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedPeople[Sizes[a]][d]
                            for (let e = 0; e < People.length; e++) {
                                if (People[e]["Name"] == SortedPeople[Sizes[a]][d]) {
                                    let Link = SearchIterate(People[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "concepts.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Concepts.length; a++) {
            if (Concepts[a]["Name"] == decodeURI(hash)) {
                IdGet("Name").textContent = Concepts[a]["Name"]
                IdGet("Desc").innerHTML = Concepts[a]["Desc"]
            }
        }
    } else if (lastPart == "conceptslist.html") {
        let mainParent = IdGet("ListTable")
        let c = 0
        for (let a = 0; a < Math.ceil(Concepts.length / 5); a++) {
            let Line = document.createElement("tr")
            mainParent.appendChild(Line)
            for (let b = 0; b < 5; b++) {
                let square = document.createElement("td")
                square.textContent = Concepts[c]["Name"]
                const Link = SearchIterate(Concepts[c]["Name"])
                square.addEventListener('click', function() { Redirect(Link) });
                c++
                Line.appendChild(square)
            }
        }
    } else if (lastPart == "races.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Races.length; a++) {
            if (Races[a]["Name"] == decodeURI(hash)) {
                const Info = ["Lineage Of", "Lineages", "Size", "Speed", "Type"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Races[a][Info[b]]
                }
                IdGet("Name").textContent = Races[a]["Name"]
                IdGet("Titlebox").style.background = Races[a]["Colour"]
                IdGet("Image").src = Races[a]["Image"]
                IdGet("Desc").innerHTML = Races[a]["Desc"]
                let Table = IdGet("Racetable")
                for (let b = 0; b < Races[a]["Bonuses"].length; b++) {
                    let Line = document.createElement("tr")
                    Table.appendChild(Line)
                    let Column = document.createElement("td")
                    Column.innerHTML = "<h2>" + Races[a]["Bonuses"][b]["Title"] + "</h2><h3>Level " + Races[a]["Bonuses"][b]["Level"] + "</h3><t>" + Races[a]["Bonuses"][b]["Description"] + "</p>"
                    Table.appendChild(Column)
                }
            }
        }
    } else if (lastPart == "raceslist.html") {
        let mainParent = IdGet("ListTable")
        let c = 0
        for (let a = 0; a < Math.ceil(Races.length / 5); a++) {
            let Line = document.createElement("tr")
            mainParent.appendChild(Line)
            for (let b = 0; b < 5; b++) {
                let square = document.createElement("td")
                square.textContent = Races[c]["Name"]
                square.style.background = Races[c]["Colour"]
                const Link = SearchIterate(Races[c]["Name"])
                square.addEventListener('click', function() { Redirect(Link) });
                c++
                Line.appendChild(square)
            }
        }
    } else if (lastPart == "subclasses.html") {
        const hash = (window.location.hash).replace("#", "")
        const ClassColours = {
            "Barbarian" : "#E7623E",
            "Bard" : "#AB6DAC",
            "Cleric" : "#91A1B2",
            "Druid" : "#7A853B",
            "Fighter" : "#7F513E",
            "Monk" : "#51A5C5",
            "Paladin" : "#B59E54",
            "Ranger" : "#507F62",
            "Rogue" : "#555752",
            "Sorcerer" : "#992E2E",
            "Warlock" : "#7B469B",
            "Wizard" : "#2A50A1"
        }
        for (let a = 0; a < Races.length; a++) {
            if (Subclasses[a]["Name"] == decodeURI(hash)) {
                IdGet("Name").textContent = Subclasses[a]["Name"]
                IdGet("Titlebox").style.background = ClassColours[Subclasses[a]["Class"]]
                IdGet("Image").src = Subclasses[a]["Image"]
                IdGet("Desc").innerHTML = Subclasses[a]["Desc"]
                let Table = IdGet("Classtable")
                for (let b = 0; b < Subclasses[a]["Features"].length; b++) {
                    let Line = document.createElement("tr")
                    Table.appendChild(Line)
                    let Column = document.createElement("td")
                    Column.innerHTML = "<h2>" + Subclasses[a]["Features"][b]["Name"] + "</h2><h3>Level " + Subclasses[a]["Features"][b]["Level"] + "</h3><t>" + Subclasses[a]["Features"][b]["Desc"] + "</p>"
                    Table.appendChild(Column)
                }
            }
        }
    } else if (lastPart == "subclasseslist.html") {
        let Sizes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]
        let SortedClass = {
            "Barbarian" : [],
            "Bard" : [],
            "Cleric" : [],
            "Druid" : [],
            "Fighter" : [],
            "Monk" : [],
            "Paladin" : [],
            "Ranger" : [],
            "Rogue" : [],
            "Sorcerer" : [],
            "Warlock" : [],
            "Wizard" : [],
        }
        const ClassColours = {
            "Barbarian" : "#E7623E",
            "Bard" : "#AB6DAC",
            "Cleric" : "#91A1B2",
            "Druid" : "#7A853B",
            "Fighter" : "#7F513E",
            "Monk" : "#51A5C5",
            "Paladin" : "#B59E54",
            "Ranger" : "#507F62",
            "Rogue" : "#555752",
            "Sorcerer" : "#992E2E",
            "Warlock" : "#7B469B",
            "Wizard" : "#2A50A1"
        }
        for (let a = 0; a < Subclasses.length; a++) {
            SortedClass[Subclasses[a]["Class"]].push(Subclasses[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedClass[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedClass[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedClass[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedClass[Sizes[a]][d]
                            for (let e = 0; e < Spells.length; e++) {
                                if (Subclasses[e]["Name"] == SortedClass[Sizes[a]][d]) {
                                    square.style.background = ClassColours[Subclasses[e]["Class"]]
                                    let Link = SearchIterate(Subclasses[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "places.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Places.length; a++) {
            if (Places[a]["Name"] == decodeURI(hash)) {
                const Info = ["Formed", "Ruined", "AKA", "Type"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Places[a][Info[b]]
                }
                IdGet("Name").textContent = Places[a]["Name"]
                IdGet("Image").src = Places[a]["Image"]
                IdGet("Desc").innerHTML = Places[a]["Desc"]
            }
        }
    } else if (lastPart == "placeslist.html") {
        let Sizes = ["Natural", "Shrine", "Temple", "Area", "Settled", "Abandoned"]
        let SortedPlaces = {
            "Natural": [],
            "Shrine": [],
            "Temple": [],
            "Area": [],
            "Settled": [],
            "Abandoned": []
        }
        for (let a = 0; a < Places.length; a++) {
            SortedPlaces[Places[a]["Type"]].push(Places[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedPlaces[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedPlaces[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedPlaces[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedPlaces[Sizes[a]][d]
                            for (let e = 0; e < Places.length; e++) {
                                if (Places[e]["Name"] == SortedPlaces[Sizes[a]][d]) {
                                    square.style.backgroundImage = "url('" + Places[e]["Image"] + "')";
                                    let Link = SearchIterate(Places[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "backgrounds.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Backgrounds.length; a++) {
            if (Backgrounds[a]["Name"] == decodeURI(hash)) {
                const Info = ["Ability Scores", "Feat", "Skills", "Tools"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Backgrounds[a][Info[b]]
                }
                IdGet("Name").textContent = Backgrounds[a]["Name"]
                IdGet("Desc").innerHTML = Backgrounds[a]["Desc"]
            }
        }
    } else if (lastPart == "backgroundslist.html") {
        let mainParent = IdGet("ListTable")
        let c = 0
        for (let a = 0; a < Math.ceil(Backgrounds.length / 5); a++) {
            let Line = document.createElement("tr")
            mainParent.appendChild(Line)
            for (let b = 0; b < 5; b++) {
                let square = document.createElement("td")
                square.textContent = Backgrounds[c]["Name"]
                const Link = SearchIterate(Backgrounds[c]["Name"])
                square.addEventListener('click', function() { Redirect(Link) });
                c++
                Line.appendChild(square)
            }
        }
    } else if (lastPart == "feats.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Feats.length; a++) {
            if (Feats[a]["Name"] == decodeURI(hash)) {
                const Info = ["Type", "Prerequisite", "Ability Score", "Repeatable"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Feats[a][Info[b]]
                }
                IdGet("Name").textContent = Feats[a]["Name"]
                IdGet("Desc").innerHTML = Feats[a]["Desc"]
            }
        }
    } else if (lastPart == "featslist.html") {
        let mainParent = IdGet("ListTable")
        let c = 0
        for (let a = 0; a < Math.ceil(Feats.length / 5); a++) {
            let Line = document.createElement("tr")
            mainParent.appendChild(Line)
            for (let b = 0; b < 5; b++) {
                let square = document.createElement("td")
                square.textContent = Feats[c]["Name"]
                const Link = SearchIterate(Feats[c]["Name"])
                square.addEventListener('click', function() { Redirect(Link) });
                c++
                Line.appendChild(square)
            }
        }
    } else if (lastPart == "materials.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Items.length; a++) {
            if (Materials[a]["Name"] == decodeURI(hash)) {
                const Info = ["First Found / Made", "Discovered By", "Used In", "Type", "Magicality", "Location"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Materials[a][Info[b]]
                }
                IdGet("Name").textContent = Materials[a]["Name"]
                IdGet("Desc").innerHTML = Materials[a]["Desc"]
            }
        }
    } else if (lastPart == "materialslist.html") {
        let Sizes = ["Ore", "Rock", "Wood", "Hide", "Fiber"]
        let SortedMats = {
            "Ore" : [],
            "Rock" : [],
            "Wood" : [],
            "Hide" : [],
            "Fiber" : [],
        }
        for (let a = 0; a < Materials.length; a++) {
            SortedMats[Materials[a]["Type"]].push(Materials[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedMats[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedMats[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedMats[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedMats[Sizes[a]][d]
                            for (let e = 0; e < Materials.length; e++) {
                                if (Materials[e]["Name"] == SortedMats[Sizes[a]][d]) {
                                    let Link = SearchIterate(Materials[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "deities.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Deities.length; a++) {
            if (Deities[a]["Name"] == decodeURI(hash)) {
                const Info = ["Level", "Title", "Patron of", "Domains"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Deities[a][Info[b]]
                }
                IdGet("Name").textContent = Deities[a]["Name"]
                IdGet("Image").src = Deities[a]["Image"]
                IdGet("Desc").innerHTML = Deities[a]["Desc"]
            }
        }
    } else if (lastPart == "deitieslist.html") {
        let Sizes = ["Quasi Deity", "Lesser Deity", "Intermediate Deity", "Greater Deity", "Over Deity"]
        let SortedDeity = {
            "Quasi Deity" : [],
            "Lesser Deity" : [],
            "Intermediate Deity" : [],
            "Greater Deity" : [],
            "Over Deity" : [],
        }
        for (let a = 0; a < Deities.length; a++) {
            SortedDeity[Deities[a]["Level"]].push(Deities[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedDeity[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedDeity[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedDeity[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedDeity[Sizes[a]][d]
                            for (let e = 0; e < Deities.length; e++) {
                                if (Deities[e]["Name"] == SortedDeity[Sizes[a]][d]) {
                                    let Link = SearchIterate(Deities[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "events.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Events.length; a++) {
            if (Events[a]["Name"] == decodeURI(hash)) {
                const Info = ["Time Period", "Year", "Location", "Parties", "People", "Start Date", "End Date", "Duration"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Events[a][Info[b]]
                }
                IdGet("Name").textContent = Events[a]["Name"]
                IdGet("Desc").innerHTML = Events[a]["Desc"]
            }
        }
    } else if (lastPart == "eventslist.html") {
        let Sizes = ["First Age", "Dark Age", "Magic Age", "The Purge", "Recovery Age", "Progress Age"]
        let SortedEvents = {
            "First Age": [],
            "Dark Age": [],
            "Magic Age": [],
            "The Purge": [],
            "Recovery Age": [],
            "Progress Age": []
        }
        for (let a = 0; a < Events.length; a++) {
            SortedEvents[Events[a]["Time Period"]].push(Events[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedEvents[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedEvents[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedEvents[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedEvents[Sizes[a]][d]
                            for (let e = 0; e < Events.length; e++) {
                                if (Events[e]["Name"] == SortedEvents[Sizes[a]][d]) {
                                    let Link = SearchIterate(Events[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    } else if (lastPart == "monsters.html") {
        const hash = (window.location.hash).replace("#", "")
        for (let a = 0; a < Monsters.length; a++) {
            if (Monsters[a]["Name"] == decodeURI(hash)) {
                const Info = ["Type", "Alignment", "Armour Class", "Hit Points", "Speed", "Prof Bonus"]
                for (let b = 0; b < Info.length; b++) {
                    IdGet(Info[b]).innerHTML = Info[b] + ": " + Monsters[a][Info[b]]
                }
                IdGet("Challenge").innerHTML = "Challenge: " + Monsters[a]["Challenge"] + " " + Monsters[a]["XP"]
                IdGet("Name").textContent = Monsters[a]["Name"]
                IdGet("Titlebox").style.background = Monsters[a]["Colour"]
                IdGet("Image").src = Monsters[a]["Image"]
                IdGet("Desc").innerHTML = Monsters[a]["Desc"]
                let Table = IdGet("Racetable")
                let Moves = ["Actions", "Bonus Actions", "Reactions", "Legendary Actions", "Lair Actions", "Region Effects"]
                for (let b = 0; b < Moves.length; b++) {
                    if (Monsters[a][Moves[b]]) {
                        let Line = document.createElement("tr")
                        let Text
                        Table.appendChild(Line)
                        let Column = document.createElement("td")
                        Text = "<h2>" + Moves[b] + "</h2><br>"
                        for (let c = 0; c < Monsters[a][Moves[b]].length; c++) {
                            Text = Text + "<b><i>" + Monsters[a][Moves[b]][c]["Name"] + ": </b></i>" + Monsters[a][Moves[b]][c]["Desc"] + "<br>"
                        }
                        Column.innerHTML = Text
                        Table.appendChild(Column)
                    }
                }
            }
        }
    } else if (lastPart == "monsterslist.html") {
        let Sizes = ['CR 0', 'CR 1/8', 'CR 1/4', 'CR 1/2', 'CR 1', 'CR 2', 'CR 3', 'CR 4', 'CR 5', 'CR 6', 'CR 7', 'CR 8', 'CR 9', 'CR 10', 'CR 11', 'CR 12', 'CR 13', 'CR 14', 'CR 15', 'CR 16', 'CR 17', 'CR 18', 'CR 19', 'CR 20', 'CR 21', 'CR 22', 'CR 23', 'CR 24', 'CR 25', 'CR 26', 'CR 27', 'CR 28', 'CR 29', 'CR 30']
        let SortedMonster = {
            'CR 0' : [],
            'CR 1/8' : [],
            'CR 1/4' : [],
            'CR 1/2' : [],
            'CR 1' : [],
            'CR 2' : [],
            'CR 3' : [],
            'CR 4' : [],
            'CR 5' : [],
            'CR 6' : [],
            'CR 7' : [],
            'CR 8' : [],
            'CR 9' : [],
            'CR 10' : [],
            'CR 11' : [],
            'CR 12' : [],
            'CR 13' : [],
            'CR 14' : [],
            'CR 15' : [],
            'CR 16' : [],
            'CR 17' : [],
            'CR 18' : [],
            'CR 19' : [],
            'CR 20' : [],
            'CR 21' : [],
            'CR 22' : [],
            'CR 23' : [],
            'CR 24' : [],
            'CR 25' : [],
            'CR 26' : [],
            'CR 27' : [],
            'CR 28' : [],
            'CR 29' : [],
            'CR 30' : []
        }
        for (let a = 0; a < Monsters.length; a++) {
            SortedMonster[Monsters[a]["Challenge"]].push(Monsters[a]["Name"])
        }
        let mainParent = IdGet("ListTable")
        for (let a = 0; a < Sizes.length; a++) {
            if (SortedMonster[Sizes[a]] != "") {
                let mainLine = document.createElement("tr")
                mainParent.appendChild(mainLine)
                let title = document.createElement("th")
                title.colSpan = "5"
                title.textContent = Sizes[a]
                mainLine.appendChild(title)
                let d = 0
                for (let b = 0; b < Math.ceil(SortedMonster[Sizes[a]].length / 5); b++) {
                    let line = document.createElement("tr")
                    mainParent.appendChild(line)
                    for (let c = 0; c < 5; c++) {
                        if (SortedMonster[Sizes[a]][d]) {
                            let square = document.createElement("td")
                            square.textContent = SortedMonster[Sizes[a]][d]
                            for (let e = 0; e < Monsters.length; e++) {
                                if (Monsters[e]["Name"] == SortedMonster[Sizes[a]][d]) {
                                    let Link = SearchIterate(Monsters[e]["Name"])
                                    square.addEventListener('click', function() { Redirect(Link) });
                                }
                            }
                            line.appendChild(square)
                            d++
                        }
                    }
                }
            }
        }
    }
}

function IdGet(Id) {
    return document.getElementById(Id)
}

document.getElementById("searchbar").onkeyup = function() { Searchbar() }
window.onhashchange = function() { Start() }
IdGet("color").onchange = function() { ColourSet() }

function ActivateSpellButton(Button) {
    for (let a = 1; a < 10; a++) {
        IdGet(a).classList.remove("active")
    }
    IdGet(Button).classList.add("active")
    const hash = (window.location.hash).replace("#", "")
    for (let a = 0; a < Spells.length; a++) {
        if (Spells[a]["Name"] == hash) {
            let DamageText
            for (let b = 0; b < Spells[a]["Damage"].length; b++) {
                let SL = Button
                let Calc = (eval(Spells[a]["Damage"][b]["Calculation"])).toString()
                if (DamageText) {
                    DamageText = DamageText + Calc + Spells[a]["Damage"][b]["Dice"] + " " + Spells[a]["Damage"][b]["Type"] + " Damage<br>"
                } else {
                    DamageText = Calc + Spells[a]["Damage"][b]["Dice"] + " " + Spells[a]["Damage"][b]["Type"] + " Damage<br>"
                }
            }
            let Damage = IdGet("Damage")
            Damage.innerHTML = DamageText
        }
    }
}

function ColourSet() {
    localStorage.setItem("Colour", IdGet("color").value)
    ColourChange()
}

function ColourChange() {
    let colour = localStorage.getItem("Colour")
    if (!colour) {
        colour = 0
    }
    document.documentElement.style.setProperty('--main', Color[colour]["Main"]);
	document.documentElement.style.setProperty('--dark', Color[colour]["Dark"]);
	document.documentElement.style.setProperty('--bright', Color[colour]["Bright"]);
	document.documentElement.style.setProperty('--contrast', Color[colour]["Contrast"]);
	document.documentElement.style.setProperty('--text', Color[colour]["Text"]);
	IdGet("color").value = colour
}

function Searchbar() {
	let input = document.getElementById("searchbar");
	let filter = input.value.toUpperCase();
	let data = Array.from(Pages);
	const basedata = Array.from(Pages);
	basedata.shift()

	for (let b = 0; b < basedata.length; b++) {
	    let database
	    eval("database = " + basedata[b])
	    for (let a = 0; a < database.length; a++) {
	        data.push(database[a]["Name"])
	    }
	}

	let newdata = []
	let a = 0
	while (a < data.length) {
		let test = data[a]
		if (data[a].toUpperCase().indexOf(filter) > -1) {
			newdata[newdata.length] = data[a]
		}
		a++
	}

	for (let a = 0; a < SearchText; a++) {
	    let text = IdGet("text" + (a + 1));
	    if (newdata[a]) {
            text.innerHTML = newdata[a]
            const Link = SearchIterate(newdata[a])
            text.href = Link
            text.style.display = "block"
        } else {
            text.style.display = "none"
        }
	}
	IdGet("searchbar").addEventListener('keydown', function() {
	    if (event.key === 'Enter') {
        window.location.href = IdGet("text1").href
      }
	})
	newdata = []
	data.length = 0
}

function SearchIterate(Data) {
    let basedata = []
    let Base = Array.from(Pages)
    for (let a = 0; a < Base.length; a++) {
        basedata.push(Base[a].toLowerCase())
    }

    if (Data == "Home") {
        return "index.html"
    }
    for (let a = 0; a < basedata.length; a++) {
        if (basedata[a] == Data.toLowerCase()) {
            return encodeURI(basedata[a] + "list.html")
        }
    }
    let list = Array.from(Pages)
    list.shift()
    for (let b = 0; b < list.length; b++) {
        let database
        eval("database = " + list[b])
        for (let a = 0; a < database.length; a++) {
            if (database[a]["Name"] == Data) {
                return encodeURI(list[b].toLowerCase() + ".html#" + database[a]["Name"])
            }
        }
    }

    return "#"
}

function Redirect(Link) {
    window.location.href = Link
}

Start()
