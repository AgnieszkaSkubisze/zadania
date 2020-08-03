//Metoda 1 : przyjmuje parametr typu number, zwraca object o wlasnosciach 
//{id: przyjmowany parametr,value: przyjmowany parametr +10}
//Metoda 2: pryzjmuje parametr typu number, zwraca obiekt o wlasnosciach {id: przyjmowany parametr, value: dla parzystych +2, nieparzystych -2}

//Napisz metodę która zwraca tablice obiektów. Obiekty te maja format {id:number, value: number}. Zwracana tablica ma miec id 
// od 1 do 100, wszystkie id oprocz 10,20,30,40,50 maja byc tworzone przy pomocy metody nr 2, a pozostale za pomoca metody nr 1 
//wykorzystaj fory i switche (lub niestandardowe)


function firstMethod(number) {
    let firstMonster = { id: number, value: number + 10 }
    return firstMonster
}

function secondMethod(number) {
    let evenNumber = number % 2 == 0
    if (evenNumber) {
        return { id: number, value: number + 2 }
    } else {
        return { id: number, value: number - 2 }
    }
}

function arrayReturning() {

    tab1 = []

    for (let i = 1; i < 101; i++) {

        switch (i) {
            case 10:
            case 20:
            case 30:
            case 40:
            case 50:
                tab1.push(firstMethod(i))
                break
            default:
                tab1.push(secondMethod(i))
        }

    }

    return tab1
}
console.log(arrayReturning())