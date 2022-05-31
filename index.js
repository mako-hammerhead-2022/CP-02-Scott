const cowsay = require('cowsay')

const text = cowsay.say({ text: 'hello' })
console.log(text)

const think = cowsay.think({ text: 'hmmm' })
console.log(think)
