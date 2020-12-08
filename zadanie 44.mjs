// stworzyc klase check bmi, klasa przy tworzeniu przyjmuje wzrost i wage, i zapisuje pod wlasnosc result wg wzoru 
//masa przez wzrost razy wzrost 
//klasa powinna miec metode changeBmi ktora pozwala wpisac ponownie wzrost i wage i obliczyc jeszcze raz bmi i zapisac 
//pod zmienna results nowa wartosc -> teskt ktory ma sie wyswietlac 'twoje aktualne bmi to ' i tam bmi  oraz informacje o 
// płci osoby 

class CheckBmi {
    constructor(hight, weight, sex) {
        const result = this.dataForBmi(hight, weight, sex)
        this.result = result
    }

    changeBmi(hight, weight, sex) {

        const newBmiExecute = this.dataForBmi(hight, weight, sex)
        this.result = newBmiExecute
        return this.result
    }

    dataForBmi(hight, weight, sex) {
        let longNUmer = weight / (hight * hight)
        let multiplier = 100
        let roundedNumber = Math.round(longNUmer * multiplier) / multiplier
        let whoAreU = sex
        if (sex == 'woman') {
            return 'Your current bmi is ' + roundedNumber + ' and your gender is ' + whoAreU
        } else {
            return 'Your current bmi is' + roundedNumber + ' and your gender is ' + whoAreU
        }
    }
}
const checkYourBmi = new CheckBmi(1.8, 50, 'woman')
console.log(checkYourBmi.result)
console.log(checkYourBmi.changeBmi(1.7, 59, 'men'))