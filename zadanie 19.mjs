// Metoda 1: przyjmuje parametr typu number, zwraca obiekt 
//{id: przyjety parametr, value: dla parzystych +10, nieparzystych -10,description : dla parzystych "parzysta" dla nieparzystych "nieparzysta"}
//Metoda 2: przyjmuje parametr typu number, zwraca obiekt 
//{id: przyjety parametr,dla liczb 50,60,80,90,100 value :true, pozostale : false}
//Metoda 3: metoda zwraca tablice obiektow, obiekty maja miec id od 1 do 100, i dla id od 1 do 49 wykonuje sie metoda nr 1, 
// od 49 do 100 metoda nr 2 
//w metodzie nr 3 nie ma if'a

function firstMethod(number) {
    let evenNumber = number % 2 == 0
    if (evenNumber) {
        return { id: number, value: number + 10, description: 'parzysta' }
    } else {
        return { id: number, value: number - 10, description: "nieparzysta" }
    }
}

function secondMethod(number) {
    if (number === 50 || number === 60 || number === 80 || number === 90 || number === 100) {
        return { id: number, value: true }
    } else {
        return { id: number, value: false }
    }
}

function thirdMethod() {
    tab1 = []
    for (let i = 1; i < 101; i++) {
        switch (true) {
            case Number(i) >= 1 && Number(i) <= 49:
                tab1.push(firstMethod(i))
                break
            default:
                tab1.push(secondMethod(i))
        }
    }
    return tab1
}
console.log(thirdMethod())