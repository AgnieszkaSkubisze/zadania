//Stworz klase ktora bedzie pomagac w doborze garderoby w zaleznosci od pogody oraz celu. 

class MakeMyOutfit {
    constructor() {
        this.date = null
        this.work = null
        this.walk = null
        this.officialMeeting = null
        this.hot = null
        this.cold = null
        this.rain = null
        this.snow = null
        this.letMiXThoseCloathes = []

        this.cloathes = {
            brownSweater: "Brown Sweater",
            skinnyJeans: "Skinny Jeans",
            longJacket: "Long jacket",
            blackBelt: "Black belt",
            highShoes: "Hight shoes",
            hat: "Hat",
            whiteTshirt: "White tshirt",
            boots: "Boots",
            bag: "Chanel Bag",
            shoppingBag: "O Bag",
            dress: "Sexy dress",
            hoodie: "Hoodie",
            leggins: "Leggins",
            winterJacket: "Winter jacket",
            raincoat: "Rain coat",
            umbrella: "Umbrella",
            redDress: "Red dress",
        }
    }
    whatTheWeaherIs(hot, cold, rain, snow) {
        this.letMiXThoseCloathes = []
        this.hot = hot
        this.cold = cold
        this.rain = rain
        this.snow = snow

        if (hot) {
            this.letMiXThoseCloathes.push(
                this.cloathes.bag,
                this.cloathes.skinnyJeans,
                this.cloathes.blackBelt,
                this.cloathes.highShoes,
                this.cloathes.hat,
                this.cloathes.whiteTshirt,
                this.cloathes.dress,
                this.cloathes.redDress
            )

        } else if (cold) {
            this.letMiXThoseCloathes.push(
                this.cloathes.winterJacket,
                this.cloathes.brownSweater,
                this.cloathes.blackBelt,
                this.cloathes.shoppingBag,
                this.cloathes.skinnyJeans,
                this.cloathes.leggins,
                this.cloathes.hoodie,
                this.cloathes.boots
            )

        } else if (rain) {
            this.letMiXThoseCloathes.push(
                this.cloathes.bag,
                this.cloathes.skinnyJeans,
                this.cloathes.blackBelt,
                this.cloathes.highShoes,
                this.cloathes.hat,
                this.cloathes.whiteTshirt,
                this.cloathes.dress,
                this.cloathes.redDress,
                this.cloathes.raincoat,
                this.cloathes.umbrella,
                this.cloathes.longJacket
            )
        } else if (snow) {
            this.letMiXThoseCloathes.push(
                this.cloathes.bag,
                this.cloathes.skinnyJeans,
                this.cloathes.blackBelt,
                this.cloathes.highShoes,
                this.cloathes.hat,
                this.cloathes.whiteTshirt,
                this.cloathes.longJacket,
                this.cloathes.leggins,
                this.cloathes.hoodie,
                this.cloathes.boots
            )
        }
    }
    whatIsThePurpose(date, work, walk, officialMeeting) {
        this.whatCharacter = []
        this.finalTab = []
        this.date = date
        this.work = work
        this.walk = walk
        this.officialMeeting = officialMeeting

        if (date) {
            this.whatCharacter.push(
                this.cloathes.bag,
                this.cloathes.skinnyJeans,
                this.cloathes.highShoes,
                this.cloathes.dress,
                this.cloathes.redDress,
                this.cloathes.raincoat,
                this.cloathes.umbrella,
            )
        }
        if (work) {
            this.whatCharacter.push(
                this.cloathes.bag,
                this.cloathes.skinnyJeans,
                this.cloathes.blackBelt,
                this.cloathes.dress,
                this.cloathes.leggins,
                this.cloathes.raincoat,
                this.cloathes.umbrella,
                this.cloathes.hat,
                this.cloathes.whiteTshirt,
                this.cloathes.winterJacket,
                this.cloathes.brownSweater,
                this.cloathes.blackBelt,
                this.cloathes.shoppingBag,
            )
        }
        if (walk) {
            this.whatCharacter.push(
                this.cloathes.blackBelt,
                this.cloathes.leggins,
                this.cloathes.raincoat,
                this.cloathes.umbrella,
                this.cloathes.hat,
                this.cloathes.whiteTshirt,
                this.cloathes.winterJacket,
                this.cloathes.brownSweater,
                this.cloathes.shoppingBag,
            )
        }
        if (officialMeeting) {
            this.whatCharacter.push(
                this.cloathes.blackBelt,
                this.cloathes.dress,
                this.cloathes.highShoes,
                this.cloathes.whiteTshirt,
            )
        }


        for (let i = 0; i < this.letMiXThoseCloathes.length; i++) {

            if (this.whatCharacter.includes(this.letMiXThoseCloathes[i])) {
                this.finalTab.push(this.letMiXThoseCloathes[i])
            }

        }

        let giveMeAnswear = "U should wear: "
        return giveMeAnswear + this.finalTab.join(', ')
    }

}
const letDoThis = new MakeMyOutfit()
letDoThis.whatTheWeaherIs(true, false, false, false)
console.log(letDoThis.whatIsThePurpose(true, false, false, false))
letDoThis.whatTheWeaherIs(true, false, false, false)
console.log(letDoThis.whatIsThePurpose(true, false, false, false))