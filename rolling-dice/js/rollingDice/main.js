// Put your code here
const Main = () => {
    console.log("Let's roll some dice, baby!")
    console.log("---------------------------")


    let die1 = {}
    let die2 = {}

    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    for (let i = 0; i < 10; i++) {
        die1.value = getRandomInt(1, 6)
        die2.value = getRandomInt(1, 6)

        let dieString1 = ""
        let dieString2 = ""
        switch (die1.value) {
            case 1:
                dieString1 = "\u2680"
                break;
            case 2:
                dieString1 = "\u2681"
                break;
            case 3:
                dieString1 = "\u2682"
                break;
            case 4:
                dieString1 = "\u2683"
                break;
            case 5:
                dieString1 = "\u2684"
                break;
            case 6:
                dieString1 = "\u2685"
                break;
        }
        switch (die2.value) {
            case 1:
                dieString2 = "\u2680"
                break;
            case 2:
                dieString2 = "\u2681"
                break;
            case 3:
                dieString2 = "\u2682"
                break;
            case 4:
                dieString2 = "\u2683"
                break;
            case 5:
                dieString2 = "\u2684"
                break;
            case 6:
                dieString2 = "\u2685"
                break;
        }

        let message = `${dieString1} + ${dieString2} == ${die1.value} + ${die2.value}`
        if (die1.value == die2.value) {
            message += " DOUBLES!"
        }

        console.log(message)
    }
}

Main()