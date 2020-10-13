//Mamy tablice tab1, wynikiem ma byc dwie tablice, jesli przekazemy zmienna 'number' do tablicy trafiaja liczby posortowane i bez dupikatow , 
//druga z stringami, duplikaty usuniete. 

tab1 = [4, 2, 5, 7, 8, 9, 1, 'ala', 'ala', 'ala', 'ola', 0, 'kasia', 4, 5, 'zosia', 7, 8, 8]

function compareNumber(a, b) {
    return a - b
}

function hardOne(zmienna, tab1) {

    tabOnly = []

    for (let i = 0; i < tab1.length; i++) {
        let itIsStringInDid = typeof tab1[i] === 'string'
        if (zmienna === 'string' && itIsStringInDid && (!tabOnly.includes(tab1[i]))) {

            tabOnly.push(tab1[i])
        } else if (zmienna === 'number' && typeof tab1[i] == 'number' && (!tabOnly.includes(tab1[i]))) {
            tabOnly.push(tab1[i])
            tabOnly.sort(compareNumber)

        }
    }
    return tabOnly
}
console.log(hardOne('string', tab1))
console.log(hardOne('number', tab1))