////Masz zrobić trzy metody 
// metoda 1 - przyjmuje dwa parametry typu number, zwraca sumę tych parametrów pomniejszoną o 2 
// metoda 2  - przyjmuje dwa parametry typu number, zwraca sume pierwszego parametru plus drugiego pomniejszonego o 2 
// metoda 3  - przyjmuje dwa parametry typu number, zwraca róznice dwoch parametrow gdzie pierwszy jest pomniejszony o 2 
// metoda 4 - przyjmuje 2 tablice obiektów, i zwraca tablice obiektów, jesli id w obu tablicach jest takie
// samo, to dla  id = 2 wykonywana jest metoda 1, dla id = 3 wykonywana jest metoda 2, dla id = 5 wykonywana jest metoda 3 
// i do sprawdzania id  uzyj switch
//wynikiem dzialania metody 4 jest nowa tablica obiektów (id:2, value:10),(id:3, value: 2)(id:5, value:8)
tab1 = [{ id: 2, value: 5 }, { id: 3, value: 5 }, { id: 4, value: 5 }, { id: 5, value: 5 }, { id: 6, value: 5 }]
tab2 = [{ id: 2, value: 5 }, { id: 3, value: 5 }, { id: 5, value: 5 }]

function addingNumbers(number1, number2) {

    let addedNumbers

    if (typeof number1 === 'number' && typeof number2 === 'number') {
        addedNumbers = (number1 + number2) - 2
    }
    return addedNumbers
}

function substractThree(number1, number2) {

    let substractedNumber

    if (typeof number1 === 'number' && typeof number2 === 'number') {
        substractedNumber = number1 + (number2 - 2)
    }
    return substractedNumber
}

function addThree(number1, number2) {

    let addedNumber

    if (typeof number1 === 'number' && typeof number2 === 'number') {
        addedNumber = (number1 - 2) - number2
    }
    return addedNumber
}

function metodWithSwitchInside(tab1, tab2) {

    tab3 = []
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
            const matchId = tab1[i].id === tab2[j].id
            if (matchId) {
                switch (tab1[i].id) {
                    case 2:
                        tab3.push({ id: tab1[i].id, value: addingNumbers(tab1[i].value, tab2[j].value) })
                        break
                    case 3:
                        tab3.push({ id: tab1[i].id, value: substractThree(tab1[i].value, tab2[j].value) })
                        break
                    case 5:
                        tab3.push({ id: tab1[i].id, value: addThree(tab1[i].value, tab2[j].value) })
                        break
                }
            }
        }
    }
    return tab3
}
console.log(metodWithSwitchInside(tab1, tab2))