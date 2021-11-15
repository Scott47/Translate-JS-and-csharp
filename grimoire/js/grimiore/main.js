// Put your code here
const getAllSpells = () => {
    const spells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ]
    return spells
}

const makeGoodSpellBook = () => {
    const spells = getAllSpells()
    const goodSpells = spells.filter(spell => !spell.IsEvil)
    return goodSpells
}
const makeEvilSpellBook = () => {
    const spells = getAllSpells()
    const evilSpells = spells.filter(spell => spell.IsEvil)
    return evilSpells
}
