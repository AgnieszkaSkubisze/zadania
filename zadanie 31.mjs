////  Tablica skladajaca sie z liczb [4,2,5,7,'ala',8,9,1,0,4,'kasia',5,7,8,8] wynikiem ma byc tablica posortowana od najwiekszej do 
//najmniejszej i usunac dupikaty i usunac wszystko co nie jest liczba 
tab1 = [4, 2, 5, 7, 'ala', 8, 9, 1, 0, 4, 'kasia', 5, 7, 8, 8]


function makeItClean(tab1) {
    tab2 = []

    let letSortIt = tab1.sort()
    let reverseMyTab = letSortIt.reverse()

    for (let i = 0; i < tab1.length; i++) {
        let firstOne = reverseMyTab[i]

        if (!tab2.includes(firstOne) && typeof firstOne == 'number') {
            tab2.push(firstOne)

        }
    }
    return tab2
}
console.log(makeItClean(tab1))