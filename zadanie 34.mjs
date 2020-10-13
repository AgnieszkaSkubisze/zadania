//Mamy tablice tab1, wynikiem ma byc dwie tablice, jedna z parzystymi liczbami (posortowana rosnaco), 
//druga z stringami, duplikaty usuniete. 

tab1 = [4, 2, 5, 7, 8, 9, 1, 'ala', 'ala', 'ala', 'ola', 0, 'kasia', 4, 5, 'zosia', 7, 8, 8]

function compareNumber(a, b) {
    return a - b
}

function onlyStrings(tab1) {

    onlyStringsTab = []

    for (let i = 0; i < tab1.length; i++) {

        if (typeof tab1[i] == 'string' && (!onlyStringsTab.includes(tab1[i]))) {
            onlyStringsTab.push(tab1[i])
        }
    }
    return onlyStringsTab
}
console.log(onlyStrings(tab1))



function onlyNubers(tab1) {

    onlyNumbersTab = []

    for (let i = 0; i < tab1.length; i++) {


        if (typeof tab1[i] == 'number' && (!onlyNumbersTab.includes(tab1[i])) && (tab1[i] % 2 == 0)) {
            onlyNumbersTab.push(tab1[i])
        }
    }
    onlyNumbersTab.sort(compareNumber)

    return onlyNumbersTab

}
console.log(onlyNubers(tab1))