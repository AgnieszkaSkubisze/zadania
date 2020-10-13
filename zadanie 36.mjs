////Mamy tablice tab1, parzyste zmniejszamy o 1, nieparzyste zwiekszamy o 1, duplikaty usuwamy, i sortowanie od najmniejszej do najwiekszej 

tab1 = [4, 2, 5, 7, 8, 9, 1, 0, 4, 5, 7, 8, 8]

function compareNumber(a, b) {
    return a - b
}

function letMixThoseNumbers(tab1) {

    newTab1 = []

    for (let i = 0; i < tab1.length; i++) {

        let currentNumber = tab1[i]

        if (currentNumber % 2 == 0) {
            newTab1.push(currentNumber - 1)

        } else if (!currentNumber % 2 == 0) {
            newTab1.push(currentNumber + 1)
        }
    }
    return newTab1
}

function secondMethodForMyChief(newTab1) {
    let withoudDuplicate = []
    for (let i = 0; i < newTab1.length; i++) {

        currentNumberDuplicated = newTab1[i]

        if (!withoudDuplicate.includes(currentNumberDuplicated)) {
            withoudDuplicate.push(currentNumberDuplicated)
        }

    }
    withoudDuplicate.sort(compareNumber)

    return withoudDuplicate
}

console.log(secondMethodForMyChief(letMixThoseNumbers(tab1)))