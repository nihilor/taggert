Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))]
}

import __wordlist from './wordlist.js'

class taggert {
    constructor (wordlist = null) {
        this.wordlist = wordlist || __wordlist
    }

    new () {
        return Object
            .getOwnPropertyNames(this.wordlist)
            .map(
                k => this.wordlist[k].random()
            )
            .join('-')
    }
}

export default taggert