//Napisz metodę która zwraca tablice obiektów. Obiekty te maja format {id:number, value: boolean}. Zwracana tablica ma miec id od
// 1 do 100, wszystkie id oprocz 10,20,30,40,50 maja miec value : true, a pozostale false 
//wykorzystaj fory i switche (lub niestandardowe) 


function arrayReturning(){

    tab1 =[]

    for (let i = 1; i < 101; i++) {
       
        if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50) {
            switch(i) {
                case 10:
                tab1.push({id:i,value:false})
                break
                case 20:
                tab1.push({id:i,value:false})
                break
                case 30:
                tab1.push({id:i,value:false})
                break
                case 40:
                tab1.push({id:i,value:false})
                break
                case 50:
                tab1.push({id:i,value:false})
                break
            }
        } else {
            tab1.push({id:i,value:true})
        }
    }

    return tab1
}
console.log(arrayReturning())