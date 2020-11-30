// stworzyc klase check bmi, klasa przy tworzeniu przyjmuje wzrost i wage, i zapisuje pod wlasnosc result wg wzoru 
//masa przez wzrost razy wzrost 
//klasa powinna miec metode changeBmi ktora pozwala wpisac ponownie wzrost i wage i obliczyc jeszcze raz bmi i zapisac 
//pod zmienna results nowa wartosc 


class CheckBmi {
    constructor(hight, weight) {
        const result = this.dataForBmi(hight, weight)
        this.result = result
    }

    changeBmi(hight, weight) {

        const newBmiExecute = this.dataForBmi(hight, weight)
        this.result = newBmiExecute
        return this.result
    }

    dataForBmi(hight, weight) {
        return weight / (hight * hight)
    }

}
const checkYourBmi = new CheckBmi(1.8, 50)
console.log(checkYourBmi.result)
console.log(checkYourBmi.changeBmi(1.7, 59))