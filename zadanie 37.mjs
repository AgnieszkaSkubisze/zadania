/*napisz metode kotra przyjmyje 3 parametry (string, string,number)
pierwsyz parametr okresla kaszel moze miec wartosci tak/nie
drugi parametr okresla bol gardla moze miec wartosci tak/nie
trzeci parametro okresla temperature moze miec wartosci tylko liczby
jezeli wywolujemy metode z nieprawodlowymi danymi to zwraca stringa ‘nieprawodlowe dane’
np metoda(‘ala’,’nie’,12) zrotka ‘nieprwidlowe dane’
jezli wywolujemy metode z prawidlowymi danymi ale nie ma kaszlu lub bolu gardla lub tem <37 to zwraca stringa ‘nie masz corony’
np metoda(‘nie’,’tak’,36) zwrotka ‘nie masz corony’
jezeli ma bol gardla,kaszel i tem >37 to zwraca stringa ‘masz corone’
np metoda(‘tak’,’tak’,38) zwraca ‘masz corone’*/



function bestCoronaTestEver(cought, soreThroat, temperature) {

    let wrongStatement = 'incorect data'
    let youGotIt = 'You have corona virus'
    let uAreSafe = ' U are safe'


    if (typeof cought != 'string' || (cought != 'yes' && cought != 'no')) {
        return wrongStatement
    } else if (typeof soreThroat != 'string' || (soreThroat != 'yes' && soreThroat != 'no')) {
        return wrongStatement
    } else if (typeof temperature != 'number') {
        return wrongStatement
    }

    if (cought === 'yes' && soreThroat == 'yes' && temperature > 37) {
        return youGotIt
    } else { return uAreSafe }
}
console.log(bestCoronaTestEver('yes', 'no', 39))