// Put your code here
console.log("Do you believe in magic?")
console.log("------------------------")

const SpellBook = (title, spells) => {
    return {
        title: title,
        spells: spells
    }
}

const Spell = (name, isEvil, energyRequired) => {
    return {
        name: name,
        isEvil: isEvil,
        energyRequired: energyRequired
    }
}

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to hear",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
    }
]

const DisplaySpellBook = (book) => {
    console.log(book.title)
    for (const aSpell of book.spells) {
        console.log(aSpell.name)
    }
}

const MakeEvilSpellBook = (allSpells) => {
    const evilBook = SpellBook("Evil Book", allSpells.filter(spell => spell.isEvil))
    return evilBook
}

const MakeGoodSpellBook = (allSpells) => {
    const goodBook = SpellBook("Good Book", allSpells.filter(spell => !spell.isEvil))
    return goodBook
}

const goodBook = MakeGoodSpellBook(allSpells)
const evilBook = MakeEvilSpellBook(allSpells)

DisplaySpellBook(goodBook)
console.log("")
DisplaySpellBook(evilBook)

