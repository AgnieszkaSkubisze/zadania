////Masz zrobić trzy metody 
// metoda 1 - przyjmuje dwa parametry typu number, zwraca sumę tych parametrów
// metoda 2  - przyjmuje dwa parametry typu number, zwraca róźnice tych parametrów 
// metoda 3 - przyjmuje 2 tablice obiektów, i zwraca tablice obiektów, jesli id w obu tablicach jest takie
// samo, to dla  dla parzystych id z obiektu tablicy wykonywana jest metoda 1 i zwraca sume value
//a dla nieparzystych  jest metoda 2 ktora zwraca róźniec value , wynikiem dzialania metody jest nowa tablica obiektów 
tab1 = [{id:2,value:5},{id:3,value:5},{id:4,value:5},{id:5,value:5},{id:6,value:5}]
tab2 = [{id:2,value:5},{id:3,value:5}]


function sumValues(number1,number2){

    let addedNumbers

    if (typeof number1 === 'number'  && typeof number2 === 'number') {
        addedNumbers = number1 + number2 
    }
    return addedNumbers
}

function substractionValues(number1,number2){
      let cuttedNumbers

    if (typeof number1 === 'number'  && typeof number2 === 'number') {
        cuttedNumbers = number1 - number2 
    }
    return cuttedNumbers
}

function letMixMyMethods(tab1,tab2){

    tab3 =  []
    
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
          const matchId = tab1[i].id === tab2[j].id
            if(matchId && (tab1[i].id % 2 == 0)){
                tab3.push({id:tab1[i].id,value:sumValues(tab1[i].value,tab2[j].value)})
            } else if (matchId){
                tab3.push({id:tab1[i].id,value:substractionValues(tab1[i].value,tab2[j].value)})
            }   
        }
    }
    return tab3
}
console.log(letMixMyMethods(tab1,tab2))