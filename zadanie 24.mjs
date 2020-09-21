tabWithQuestions = [{ 'Pytanie1': 'Ulubiony drink' }, { 'Pytanie2': 'Ulubiona forma relaksu ...' }, { 'Pytanie3': "Wymarzone zwierze" }, { 'Pytanie4': 'Ulubione słodycze' },
    { 'Pytanie 5': 'Czego sie boje' }, { 'Pytanie 6': 'Ulubiony kolor' }, { 'Pytanie 7': 'Co mnie zawstydza' }, { 'Pytanie 8': 'Ulubione jedzenie nie słodycze' },
    { 'Pytanie 9': "co poprawia mi humor" }, { 'Pytanie 10}': 'Do kogo jestem bardziej podobna z charakteru' }, { 'Pytanie 11': "Gdzie najbardziej chcialabym wyjechac" },
    { 'Pytanie 12': 'Dlaczego najbardziej lubie jesien' }
]
tabWithNames = ['Dawidzie']


function changeMyObject(tabWithQuestions, tabWithNames) {

    newQuestionFor = []
    for (let i = 0; i < tabWithQuestions.length; i++) {
        for (let j = 0; j < tabWithNames.length; j++) {
            let letBegin = tabWithNames[Math.floor(Math.random() * tabWithNames.length)];
            let letStart = tabWithQuestions[Math.floor(Math.random() * tabWithQuestions.length)];
            newQuestionFor.push(letBegin, letStart)
        }
    }


    return newQuestionFor[0, 1]
}
console.log(changeMyObject(tabWithQuestions, tabWithNames))