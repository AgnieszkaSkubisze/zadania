//uzywajac for i switch stworz metodę, ktora przyjmuje jeden parametr jako tablica i zwraca 
//tablice skladajaca sie z imion : [adam,justyna,iwona]

names = ['adam', 'ala', 'agnieszka', 'justyna', 'magda', 'dzesika', 'iwona']

pickedNames = []

function nameChoosing(name) {
    for (let i = 0; i < name.length; i++) {
        let nextName = name[i]
        switch (nextName) {
            case 'adam':
                pickedNames.push(nextName)
                break
            case 'justyna':
                pickedNames.push(nextName)
                break
            case 'iwona':
                pickedNames.push(nextName)
                break
        }
    }
    return pickedNames
}
console.log(nameChoosing(names))