class Dice {
  min
  max
  value

  constructor(min = 1, max = 6){
    this.min = min
    this.max = max
  }

  //                    v---- shorthand for Math.floor ±!?
  getRandomInt = () => ~~(Math.random() * (this.max - this.min + 1) + this.min)

  roll(){
    this.value = this.getRandomInt()
    console.log(`Thrown: ${this.value}`)
  }
}

const a = new Dice()
const b = new Dice(1, 2)

a.roll()
b.roll()

console.log('combined value: ', a.value + b.value)


// // legacy code, dont ever create new code writing it like this!
// function Dice2(min = 1, max=6){
//   this.min = min
//   this.max = max
// }
// const myDice = new Dice2()