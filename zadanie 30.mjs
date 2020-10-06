//  Tablica skladajaca sie z liczb [4,2,5,7,8,9,1,0,4,5,7,8,8] wynikiem ma byc tablica posortowana od najmniejszej do najwiekszej i usunac dupikaty 
tab1 = [4, 2, 5, 7, 8, 9, 1, 0, 4, 5, 7, 8, 8]


function makeItClean(tab1) {
    tab2 = []

    let letSortIt = tab1.sort()


    for (let i = 0; i < tab1.length; i++) {
        let firstOne = letSortIt[i]

        if (!tab2.includes(firstOne)) {
            tab2.push(firstOne)

        }
    }
    return tab2
}
console.log(makeItClean(tab1))