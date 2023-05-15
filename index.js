import __wordslist from './wordslist.js'

class taggert {
    seperator = '-'

    constructor (wordslist = null) {
        this.wordslist = wordslist || __wordslist
    }

    /*
    Creates a gamer tag based on all imported wordslists following the order of the lists in the object.
    */
    new () {
        return Object
            .getOwnPropertyNames(this.wordslist)
            .map(
                k => this._random(this.wordslist[k])
            )
            .join(this.seperator)
    }

    /*
    Creates a gamer tag based on a given pattern.
    Provide an array of wordslists names to define the patter, i.e. ['adjective','color','fruit-vegetable']
    */
    make (pattern) {
        if (!Array.isArray(pattern))
            throw new Error('The pattern for make() must be of type array.')

        return pattern
            .filter(
                k => this.wordslist.hasOwnProperty(k)
            )
            .map(
                k => this._random(this.wordslist[k])
            )
            .join(this.seperator)
    }

    /*
    Internal function to select a random element from an array.
    */
    _random (anArray) {
        if (!Array.isArray(anArray))
            return ''
        else
            return anArray[Math.floor((Math.random() * anArray.length))]
    }
}

export default taggert