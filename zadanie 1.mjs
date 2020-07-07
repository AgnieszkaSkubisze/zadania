
tab1 = [1,3,4,5,6,4]
tab2 = [2,4,5,7,4,3]
tab3 = []
function metodaZTablicami(tab1,tab2){

    if((typeof tab2 !== 'object' ||typeof tab1 !== 'object') && tab1.length !== tab2.length){
        return false
    }
    for (let i = 0; i < tab1.length; i++) {
          const dodaneLiczby = tab1[i] + tab2[i]
          tab3.push(dodaneLiczby)
    } 
    return tab3
}

console.log(metodaZTablicami(tab1,tab2))