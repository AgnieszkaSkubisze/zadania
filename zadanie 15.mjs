////Masz zrobić dwie  metody ktore: 
//metoda 1:przyjmuje dwa parametry, jeśli suma tych parametrów jest parzysta, to zwraca true, jesli jest 
//nieparzysta to zwraca false 
//metoda 2:  ma sprawdzac value z obiektow w tabeli 1, z wartosciami z tabeli 2. Jesli value z tab1 jest rowne wartosci 
//z tab2, to wywoluje metode 1 i wynik metody wpisuje pod value i zwraca tablice obiektów 

tab1 = [{id:2,value:1},{id:3,value:0},{id:4,value:3},{id:5,value:4},{id:6,value:5}]
tab2 = [2,0,3,5,6,7] 

function checkIfTheyAreEven(tab1,tab2){

    if ((tab1 + tab2) % 2 == 0){
        return true
    } else {
        return false
    }
}

function changedValues(tab1,tab2){
    
    tab3 = []
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
            const matchId = tab1[i].value === tab2[j]
            if(matchId){
                tab3.push({id:tab1[i].id,value: checkIfTheyAreEven(tab1[i].value,tab2[j]) })
            } 
        }
    }

  return tab3
}
console.log(changedValues(tab1,tab2))