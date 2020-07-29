////Masz zrobić jedną  metode ktora: 
//metoda ma sprawdzac value z obiektow w tabeli 1, z wartosciami z tabeli 2. Jesli value z tab1 jest rowne wartosci
//z tab2, to caly obiekt ma wstawic do nowej tabeli, z value powiekszonym o 1
tab1 = [{id:2,value:1},{id:3,value:2},{id:4,value:3},{id:5,value:4},{id:6,value:5}]
tab2 = [2,3,5,6,7]


function changeMyObject(tab1,tab2){

    tab3 = []
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
            const matchId = tab1[i].value === tab2[j]
            if(matchId){
                tab3.push({id:tab1[i].id,value: tab1[i].value +1 })
            }
        }
    }

  return tab3
}
console.log(changeMyObject(tab1,tab2))