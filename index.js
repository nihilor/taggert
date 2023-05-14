import __wordslist from './wordslist.js'

class taggert {
    constructor (wordslist = null) {
        this.wordslist = wordslist || __wordslist
    }

    new () {
        return Object
            .getOwnPropertyNames(this.wordslist)
            .map(
                k => this
                    .wordslist[k][
                        Math.floor((Math.random() * this.wordslist[k].length))
                    ]
            )
            .join('-')
    }
}

export default taggert