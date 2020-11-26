// zrob metodę ktora bedzie przyjmowac stringa w postaci nazwy miesiąca, jesli nazwa jest zla zwroci 
// teskt : nie ma takiego miesiaca, jesli jest dobra, zwroci liczy odpowiednia liczbne dni po przecinku, 
// 



monthsNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

function dayCounting(dayNumbers) {
    newOne = []

    for (let i = 1; i <= dayNumbers; i++) {
        newOne.push(i)
    }
    return newOne.join(',')
}


function calender(months) {


    tab = []
    tab.january = 30
    tab.february = 28
    tab.march = 31
    tab.april = 30
    tab.may = 31
    tab.june = 30
    tab.july = 31
    tab.august = 31
    tab.september = 30
    tab.october = 31
    tab.november = 30
    tab.december = 31

    if (!monthsNames.includes(months)) {
        return 'there is no such month'
    } else {
        return dayCounting(tab[months])
    }
}
console.log(calender('march'))