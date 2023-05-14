import fs from 'fs'
import path from 'path'
const basepath = './wordlists'

fs.readdir(basepath, (err, filenames) => {
    const wordlists = {}
    filenames
        .map(filename => {
            const data = fs.readFileSync(path.join(basepath, filename), 'utf8')
            return {
                key: path.parse(filename).name,
                values: data
                    .toString()
                    .split(/\r?\n/)
                    .filter(word => word.trim() !== '')
            }
        })
        .map(words => {
            wordlists[words.key] = words.values
        })
    fs.writeFileSync(
        './wordlist.js',
        `export default ${JSON.stringify(wordlists,null,2)}`
    )
})