//Masz zrobić trzy metody 
// metoda 1 - przujume liczbe, jezeli parametr nie jest liczba zwraca 0, jesli jest liczba to zwieksza o jeden, i zwraca liczbe
// metoda 2  - przyjmuje libcze jezeli nie jest liczba zwraca 0, jesli jest zmniejsza o jeden i zwraca liczbe 
// metoda 3 - metoda ktora sprawdza dwie tablice, i jezeli jakas liczba wystepuje w obu tablicach i jest parzysta to metoda 1
//jezeli wystepuje i jest nieparzysta to metoda 2, ta metoda zwraca wynik jako tablica 
tab1 = [2, 3, 4, 5, 6, 7, 8, 9]
tab2 = [2, 4, 6, 7, 9]


function thisIsAddedNumber(someNumbers) {
    if (typeof someNumbers !== 'number') {
        return 0
    } else {
        return someNumbers + 1
    }
}

function thisIsSubstractOne(someNumbers) {

    if (typeof someNumbers !== 'number') {
        return 0
    } else {
        return someNumbers - 1
    }
}

function checkThoseTabs() {
    tab3 = []
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
            let theyAreTheSame = tab1[i] === tab2[j]
            if (theyAreTheSame && (tab1[i] % 2 == 0)) {
                tab3.push(thisIsAddedNumber(tab1[i]))
            } else if (theyAreTheSame && (tab1[i] % 2 !== 0))
                tab3.push(thisIsSubstractOne(tab1[i]))
        }
    }
    return tab3
}
console.log(checkThoseTabs())