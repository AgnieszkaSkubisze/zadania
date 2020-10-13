//  Tablica skladajaca sie z liczb [4,2,5,7,8,9,1,0] wynikiem ma byc tablica posortowana od najmniejszej do najwiekszej 


tab1 = [4, 2, 5, 7, 8, 9, 1, 0, 11, 10, 1033]

function compareNumber(a, b) {
    return a - b
}

function sortMyTab(tab1) {


    let letSortIt = tab1.sort(compareNumber)
    return letSortIt

}
console.log(sortMyTab(tab1))