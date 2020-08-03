////Masz zrobić trzy metody 
// metoda 1 - przyjmuje obiekt, zwieksza wlasnisc value o 1, zwraca edytowany obiekt 
// metoda 2  - przyjmuje obiekt , zmniejsza wlasnisc value o 1, zwraca edytowany obiekt 
// metoda 3 - przyjmuje tablice obiektów, i zwraca tablice obiektów, dla parzystych id z obiektu tablicy wykonywana jest metoda 1 
//a dla nieparzystych  jest metoda 2, wynikiem dzialania metody jest nowa tablica obiektów 
tab1 = [{ id: 2, value: 5 }, { id: 3, value: 5 }, { id: 4, value: 5 }, { id: 5, value: 5 }, { id: 6, value: 5 }]


function addOne(exampleObject) {

    if (typeof exampleObject === 'object') {
        exampleObject.value = exampleObject.value + 1
    }
    return exampleObject
}

function substractOne(secondExampleObject) {

    if (typeof secondExampleObject === 'object') {
        secondExampleObject.value = secondExampleObject.value - 1
    }
    return secondExampleObject
}


function letMixMyMethods(tab1) {

    tab3 = []

    for (let i = 0; i < tab1.length; i++) {

        const even = tab1[i].id % 2 == 0
        if (even) {
            tab3.push(addOne(tab1[i]))
        } else {
            tab3.push(substractOne(tab1[i]))
        }

    }
    return tab3
}



console.log(letMixMyMethods(tab1))