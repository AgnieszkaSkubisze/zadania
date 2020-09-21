//skrypt ktory bedzie wybieral randomowo jedno imie z tablicy i jedno pytanie z banku pytan 



tabWithQuestions = [{ 'Pytanie1': 'Jak wyglada ...' }, { 'Pytanie2': 'Jakie znasz ...' }, { 'Pytanie3': "Po co uzywamy...." }]
tabWithNames = ['aga', 'ania', 'czeska', 'lila', 'oliwia', 'dunia']


function changeMyObject(tabWithQuestions, tabWithNames) {

    newQuestionFor = []
    for (let i = 0; i < tabWithQuestions.length; i++) {
        for (let j = 0; j < tabWithNames.length; j++) {
            let letBegin = tabWithNames[Math.floor(Math.random() * tabWithNames.length)];
            let letStart = tabWithQuestions[Math.floor(Math.random() * tabWithQuestions.length)];
            newQuestionFor.push(letBegin, letStart)
        }
    }


    return newQuestionFor
}
console.log(changeMyObject(tabWithQuestions, tabWithNames))