//Napisz prostą maszynę losującą, czyli funkcję, która przyjmuje jako argument tablicę zawierającą listę osób. 
//Twoja funkcja powinna zwracać losową osobę z
//tej tablicy. Przykładowa tablica do wywołania funkcji: 
//const students = ["John", "Bill", "Emma", "Stella", "Rob"]. Losowo zwracamy dwa imione, nie moga sie powtarzac 


students = ["John", "Bill", "Emma", "Stella", "Rob"]



function randomName(students) {

    let emptyTab = []

    while (emptyTab.length < 3) {
        let letBegin = [Math.floor(Math.random() * students.length)];
        let randomNames = students[letBegin]
        if (!emptyTab.includes(randomNames)) {
            emptyTab.push(randomNames)
        }
    }

    return emptyTab

}
console.log(randomName(students))