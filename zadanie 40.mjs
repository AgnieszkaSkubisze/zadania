//wykorzystujac poprzednie zadanie dorob metode ktora sprawdzi i wyswietli czy dany miesiac
//ma ilosc dni parzystych lub niepatrzystych 


monthsNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


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

    if (tab[months] % 2 == 0) {
        return 'ten miesiac ma parzystą ilosc dni'
    }
    if (!tab[months] % 2 == 0) {
        return 'ten miesiac ma nieparzysta ilosc dni'
    }
    if (!monthsNames.includes(months)) {
        return 'there is no such month'
    }



}
console.log(calender('march'))