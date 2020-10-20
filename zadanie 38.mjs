    /*napisz metode kotra przyjmyje json z 3 wlasnosciami ({
                    kaszel: tak/nie,
                    bol_gardla:tak/nie,
                    goraczka: 1,2,3…
                    })
                    pierwsa wlasnosci okresla kaszel moze miec wartosci tak/nie
                    druga wlasnosc okresla bol gardla moze miec wartosci tak/nie
                    trzecia wlasnosc okresla temperature moze miec wartosci tylko liczby
                    jezeli wywolujemy metode z nieprawodlowymi danymi to zwraca stringa ‘nieprawodlowe dane’
                    np metoda({
                    kaszel: ala,
                    bol_gardla:tak,
                    goraczka: 1
                    }) zrotka ‘nieprwidlowe dane’
                    jezli wywolujemy metode z prawidlowymi danymi ale nie ma kaszlu lub bolu gardla lub tem <37 to zwraca stringa ‘nie masz corony’
                    np metoda({
                    kaszel: tak,
                    bol_gardla:tak,
                    goraczka: 36
                    }) zwrotka ‘nie masz corony’
                    jezeli ma bol gardla,kaszel i tem >37 to zwraca stringa ‘masz corone’
                    np metoda({
                    kaszel: tak,
                    bol_gardla:tak,
                    goraczka: 39
                    }) zwraca ‘masz corone’*/



    function resultsInJson(symptoms) {

        let wrongStatement = 'incorect data'
        let youGotIt = 'You have corona virus'
        let uAreSafe = ' U are safe'
        let notEnought = 'Not enought information'

        if (symptoms.hasOwnProperty('cought') === false || symptoms.hasOwnProperty('soreThroat') === false ||
            symptoms.hasOwnProperty('temperature') === false) {
            return notEnought
        }

        if (typeof symptoms.cought != 'string' || (symptoms.cought != 'yes' && symptoms.cought != 'no')) {
            return wrongStatement
        } else if (typeof symptoms.soreThroat != 'string' || (symptoms.soreThroat != 'yes' && symptoms.soreThroat != 'no')) {
            return wrongStatement
        } else if (typeof symptoms.temperature != 'number') {
            return wrongStatement
        }

        if (symptoms.cought === 'yes' && symptoms.soreThroat == 'yes' && symptoms.temperature > 37) {
            return youGotIt
        } else { return uAreSafe }


    }
    console.log(resultsInJson({ cought: 'yes', soreThroat: 'no', temperature: 39 }))