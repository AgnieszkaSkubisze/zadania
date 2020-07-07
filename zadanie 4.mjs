tab1 = ['adam','ala','agnieszka']
tab2 = ['lukasz','damian','dawid','ala']
tab3 = []

let imieWystepuje = 'To imie sie powtarza: '
let imieNieWystepuje ='Te imiona nie są takie same: '

function szukajImion(tab1,tab2){
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
        const imie = tab1[i] === tab2[j];
         if(imie){
            tab3.push(imieWystepuje + tab1[i])
         } else {
            tab3.push(imieNieWystepuje + tab1[i] + ',' + tab2[j])
            }
        }
    }
    return tab3
}
console.log(szukajImion(tab1,tab2))