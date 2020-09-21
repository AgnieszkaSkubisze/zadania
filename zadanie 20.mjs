//mamy tablice ['ala','ola','aga','basia','zosia'] wynikiem ma byc tablica [wszystlo razy 3]


names = ['ala', 'ola', 'aga', 'basia', 'zosia']

addedNames = []

function nameChoosing(names) {
    for (let i = 0; i < names.length; i++) {
        let nextName = names[i]
        switch (nextName) {
            case 'ala':
                addedNames.push(nextName, nextName, nextName)
                break
            case 'ola':
                addedNames.push(nextName, nextName, nextName)
                break
            case 'aga':
                addedNames.push(nextName, nextName, nextName)
                break
            case 'basia':
                addedNames.push(nextName, nextName, nextName)
                break
            case 'zosia':
                addedNames.push(nextName, nextName, nextName)
                break

        }
    }
    return addedNames
}
console.log(nameChoosing(names))