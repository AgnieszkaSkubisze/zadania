////Mamy tablice ['ala','ala','ala','ola','ola',ola',ola''aga','aga','aga'] wynikiem ma byc nowa
//tablica w ktorej zapisujemy rozne imiona, a powtorzenia beda podmieniane na : jesli indeks jest parzysty to na 'kasia' a jesli nieparzysty to na 'zosia'


tab1 = ['ala', 'ala', 'ala', 'ala', 'ala', 'ola', 'ola', 'ola', 'ola', 'aga', 'aga', 'aga']



function makeItClean(tab1) {
    tab2 = []

    for (let i = 0; i < tab1.length; i++) {

        let drugieImie = 'zosia'
        let name = tab1[i]
        let trzecieImie = 'kasia'

        if (tab2.includes(name) && (i % 2 == 0)) {
            tab2.push(drugieImie)
        } else if (tab2.includes(name) && (i % 2 !== 0)) {
            tab2.push(trzecieImie)
        } else {
            tab2.push(tab1[i])
        }
    }
    return tab2
}
console.log(makeItClean(tab1))