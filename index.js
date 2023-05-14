,import __wordlist from './wordlist.js'

class taggert {
    constructor (wordlist = null) {
        this.wordlist = wordlist || __wordlist
    }

    new () {
        return Object
            .getOwnPropertyNames(this.wordlist)
            .map(
                k => this
                    .wordlist[k][
                        Math.floor((Math.random() * this.wordlist[k].length))
                    ]
            )
            .join('-')
    }
}

export default taggert