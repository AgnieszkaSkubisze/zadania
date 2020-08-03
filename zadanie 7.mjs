//Masz zrobić trzy metody 
// metoda 1 - przujume liczbe, jezeli parametr nie jest liczba zwraca 0, jesli jest liczba to zwieksza o jeden, i zwraca liczbe
// metoda 2  - przyjmuje libcze jezeli nie jest liczba zwraca 0, jesli jest zmniejsza o jeden i zwraca liczbe 
// metoda 3 - przyjmuje tablice, i zwraca tablice, dla parzystych liczb z tablicy wykonywana jest metoda 1 a dla nieparzystych 
// jest metoda 2, wynikiem dzialania metod jest zwracana tablica 
tab1 = [2, 3, 4, 5, 6, 7, 8, 9, ]


function addOne(exampleNumbers) {

    if (typeof exampleNumbers !== 'number') {
        return 0
    } else {
        return exampleNumbers + 1
    }
}

function substractOne(secondExampleNumbers) {

    if (typeof secondExampleNumbers !== 'number') {
        return 0
    } else {
        return secondExampleNumbers - 1
    }
}

function letMixMyMethods(tab1) {

    tab2 = []
    for (let i = 0; i < tab1.length; i++) {
        if (tab1[i] % 2 == 0) {
            tab2.push(addOne(tab1[i]))
        } else {
            tab2.push(substractOne(tab1[i]))
        }
    }
    return tab2
}
console.log(letMixMyMethods(tab1))