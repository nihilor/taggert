import taggert from './index.js'
const tag = new taggert()

console.log(tag.new())

try {
    console.log(tag.make())
}
catch (e) {
    console.error(e)
}

console.log(
    tag.make([
        "color",
        "adjective",
        "subject",
        "color",
        "fruit-vegetable"
    ])
)