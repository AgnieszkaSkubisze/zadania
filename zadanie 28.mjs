////Mamy tablice ['koza','koza','koza','koza','owca','owca','owca','owca','owca','krowa','krowa','krowa'] wynikiem ma byc nowa
//tablica w ktorej zapisujemy rozne zwierzeta, parzyste pierwsze wystapienia beda zapisywane z duzych liter, nieparzyste pierwsze wystapienia beda zapisywane normlanie, 
//powtorzenia 'kozy' beda zamieniane na 'cap', powtorzenia owcy na 'baran' a powtorzenia krowy na 'byk' - tym razem nie wg indeksu 


animals = ['koza', 'koza', 'koza', 'koza', 'koza', 'owca', 'owca', 'owca', 'owca', 'owca', 'krowa', 'krowa', 'krowa']

function allAnimals(animals) {

    mixedAnimals = []
    let count = 0


    for (let i = 0; i < animals.length; i++) {

        let maleGoat = 'cap'
        let malePuff = 'baran'
        let maleCow = 'byk'
        let curentAnimal = animals[i]
        count++

        if (!mixedAnimals.includes(curentAnimal.toUpperCase()) && !mixedAnimals.includes(curentAnimal) && (count % 2 == 0)) {

            mixedAnimals.push(curentAnimal.toUpperCase())

        } else if (!(mixedAnimals.includes(curentAnimal.toUpperCase()) || mixedAnimals.includes(curentAnimal)) && (count % 2 !== 0)) {
            mixedAnimals.push(curentAnimal)
        } else if (curentAnimal === 'koza' || curentAnimal === 'krowa' || curentAnimal === 'owca') {
            switch (curentAnimal) {
                case 'koza':
                    mixedAnimals.push(maleGoat)
                    break
                case 'krowa':
                    mixedAnimals.push(maleCow)
                    break
                case 'owca':
                    mixedAnimals.push(malePuff)
                    break

            }
        }
    }
    return mixedAnimals


}
console.log(allAnimals(animals))