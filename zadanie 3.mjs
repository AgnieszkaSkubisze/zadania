tab1 = [{id:1,value:2},{id:2,value:9},{id:3, value:2}]
tab2 = [{id:4,value:3},{id:1,value:8},{id:3, value:4}]
tab3 = []

function valueAdding(tab1,tab2){

    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
          const matchId = tab1[i].id === tab2[j].id;
            if(matchId){
                tab3.push({id:tab1[i].id, value:tab1[i].value + tab2[j].value})
            } else {
                tab3.push(false)
            }
        }
    }
    return tab3
}
console.log(valueAdding(tab1,tab2))
