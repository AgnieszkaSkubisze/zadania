//tak samo mamy tablice z imionami i wyniekiem ma byc tak samo imie dynamicznie podajac ilosc 
//trzeba zrobic metode tak zeby mozna bylo dynamicznie podawac rozne imiona 

names = ['aga ', 'kasia ', 'zosia ']

addedNames = []
let numberOfNames = 4

function nameChoosing(names) {
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < numberOfNames; j++) {

            addedNames.push(names[i])


        }
    }
    return addedNames
}
console.log(nameChoosing(names))