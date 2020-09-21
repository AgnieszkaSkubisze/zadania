//mamy tablice ['ala','ala','ala','ola','ola',ola',ola''aga','aga','aga'] wynikiem ma byc nowa
//tablica ['ala',ola','aga'] 

tab1 = ['ala', 'ala', 'ala', 'ola', 'ola', 'ola', 'ola', 'aga', 'aga', 'aga']

function makeItClean(tab1) {


    tab2 = []


    for (let i = 0; i < tab1.length; i++) {

        let indexInTab = tab2.indexOf(tab1[i])

        switch (tab1[i]) {

            case 'ala':
                if (indexInTab === -1)
                    tab2.push(tab1[i])
                else { tab2.push('zosia') }
                break
            case 'ola':
                if (indexInTab === -1)
                    tab2.push(tab1[i])
                else { tab2.push('zosia') }
                break
            case 'aga':
                if (indexInTab === -1)
                    tab2.push(tab1[i])
                else { tab2.push('zosia') }
                break
        }

    }

    return tab2

}
console.log(makeItClean(tab1))