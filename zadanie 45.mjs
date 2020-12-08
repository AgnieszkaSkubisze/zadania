// stworzyc klase iloscKasy, klasa przy tworzeniu przyjmuje parametry przychody, wydatki) i oblicza wg wzoru 
// przychody odjąc wydatki i zapisuje pod wartoscia budzet 
//klasa powinna miec metode naJakieAutoCieStac ktora pozwala wykorzystac budzet i  obliczyc czy stac Cie na dane auto 


class howMuchCashUHave {

    constructor(incomes, outcomes) {

        this.tabWithCars = [{
                cost: 100,
                name: "maluch"
            },
            {
                cost: 1000,
                name: "golf"
            },
            {
                cost: 100000,
                name: "audi a3"
            },
            {
                cost: 140000,
                name: "jeep"
            },
            {
                cost: 250000,
                name: "BMW X3"
            }
        ];
        const budget = this.countings(incomes, outcomes)
        this.budget = budget
    }

    canIAffortIt(incomes, outcomes) {
        const checkIfUCanAffordIt = this.countings(incomes, outcomes)
        this.budget = checkIfUCanAffordIt

    }

    countings(incomes, outcomes) {
        let comunication = ""
        let ammountOFMoney = incomes - outcomes
        for (let i = 0; i < this.tabWithCars.length; i++) {
            if (ammountOFMoney == this.tabWithCars[i].cost) {
                if (comunication !== "") {
                    comunication += "\n or "
                }
                comunication += "u can start looking for " + this.tabWithCars[i].name
            } else if (ammountOFMoney > this.tabWithCars[i].cost) {
                if (comunication !== "") {
                    comunication += "\n or "
                }
                comunication += "u can afford that " + this.tabWithCars[i].name
            }
        }
        if (comunication === "") {
            comunication = "you are too poore for any of those cars"
        }
        return comunication
    }

}
const letDoThis = new howMuchCashUHave(9000, 3000)
console.log(letDoThis.budget)
letDoThis.canIAffortIt(12000, 3000)
console.log(letDoThis.budget)