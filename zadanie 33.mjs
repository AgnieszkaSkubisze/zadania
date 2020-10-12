//Mamy tablice tab1, wynikiem ma byc dwie tablice, jedna z parzystymi (posortowana rosnaco), 
//druga nieparzystymi(posortowana malejaco), duplikaty usuniete. 

tab1 = [4, 2, 5, 7, 8, 9, 1, 0, 4, 5, 7, 8, 8]



function cleaningFunction(tab1) {
    let tabWithouReply = []


    for (let i = 0; i < tab1.length; i++) {
        let firstOne = tab1[i]

        if (!tabWithouReply.includes(firstOne)) {
            tabWithouReply.push(firstOne)

        }
    }
    return tabWithouReply
}



function oddOne(cleanTab) {


    tabOdd = []

    for (let i = 0; i < cleanTab.length; i++) {

        ourNumber = cleanTab[i]

        if (ourNumber % 2 == 0) {
            tabOdd.push(ourNumber)
        }
        tabOdd.sort()
    }
    return tabOdd
}



function evenOne(tabWithouReply) {

    tabEven = []
    for (let i = 0; i < tabWithouReply.length; i++) {
        ourNumber = tabWithouReply[i]

        if (!(ourNumber % 2 == 0)) {
            tabEven.push(ourNumber)
        }
        tabEven.reverse()

    }
    return tabEven
}

console.log(oddOne(cleaningFunction(tab1)))
console.log(evenOne(cleaningFunction(tab1)))