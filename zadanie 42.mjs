//Stwoz klase o nazwie taliaKart ktora bedzie miala 1 wlasnosci 'kolor' typ string ustawiojny na 'red' '
// Zadanie: dopisac metode po wywolaniu ktorej wlasnosc kolor bedzie rowna 'jestem' + aktualny kolor 
class taliaKart {
    constructor(color) {
        this.color = color
    }

    zmianaKoloru(newColor) {
        this.color = newColor
    }

    addString() {
        this.color = "jestem" + this.color


    }
}


const useThatClass = new taliaKart('red')
console.log(useThatClass.addString())