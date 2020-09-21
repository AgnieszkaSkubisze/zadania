
//tak samo mamy tablice z imionami i wyniekiem ma byc tak samo imie x3
//trzeba zrobic metode tak zeby mozna bylo dynamicznie podawac rozne imiona

names = []

addedNames = []

function nameChoosing(names) {
    for (let i = 0; i < names.length; i++) {
        
       addedNames.push(names[i],names[i],names[i])
        
    }
    return addedNames
}
console.log(nameChoosing(names))