//tablica1 = [ala, lukasz, agnieszka, bozena, slawek]
//tablica2 = [ala, grzegorz, monika, bozena, slawek]
//poporsze zrobic metoda ktora przyjmuje 2 tablice i zwraca tablice obiektow ze wspolnymi imionami[{imie:ala, rodzaj: 1},
// {imie:bozena, rodzaj:2, imie:slawek, rodzaj:3}] gdzie rodzaj jest przypisywany do danego imienia za pomoca switcha
//zmienne maja byc tablicami, jesli nie zwroc false, maja byc tej samej dlugosci jesli nie zwroc false, i jesli dlugosc ktorejs
//ze zmiennych jest dluzsza niz 5 zwroc false 

tab1 = ['ala', 'lukasz', 'agnieszka', 'bozena', 'slawek']
tab2 = ['ala', 'grzegorz', 'monika', 'bozena', 'slawek']
tab3 = []

function similarNames(tab1,tab2){

    if (typeof tab1 !== 'object'  || typeof tab2 !== 'object') {
        return false
    }   else if (tab1.length !== tab2.length) {
        return false
    }   else if (tab1.length > 5 || tab2.length > 5) {
        return false
    }   else  {
        for (let i = 0; i < tab1.length; i++) {
            for (let j = 0; j < tab2.length; j++) {
            let sameName = tab1[i] === tab2[j];
                if(sameName) {
                    switch(tab1[i]) {
                        case 'ala':
                        tab3.push({'imie': tab1[i],'rodzaj':1})
                        break
                        case 'bozena':
                        tab3.push({'imie': tab1[i], 'rodzaj':2})    
                        break
                        case 'slawek':
                        tab3.push({'imie': tab1[i], 'rodzaj':3})    
                        break
                    }
                }
            }
        }
    }
    return tab3
}
console.log(similarNames(tab1,tab2))