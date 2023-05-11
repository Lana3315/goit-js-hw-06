const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1
  },
  increment() {
    this.counterValue +=1
  }
}

const valueEl = document.querySelector('#value') 
console.dir(valueEl)
const btnDec = document.querySelector('button[data-action="decrement"]')
console.log(btnDec)
const btnInc = document.querySelector('button[data-action="increment"]')
console.log(btnInc)
btnDec.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue
})
btnInc.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.counterValue
})

const containerCounter = document.querySelector('#counter')
containerCounter.style.display = 'flex'
containerCounter.style.gap = '20px'