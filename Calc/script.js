class Calculator
{
    constructor(previousoptext, currentoptext)
    {
        this.previousoptext = previousoptext
        this.currentoptext = currentoptext
        this.clear()
    }

clear()
{
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
delete(){
this.currentOperand = this.currentOperand.toString().slice(0, -1)

}
appendNo(number)
{  if(number === ('.') && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()  

}
updateDis()
{
    this.currentoptext.innerText = this.currentOperand
    this.previousoptext.innerText = this.previousOperand
    if(this.operation!= null)
    {
        this.previousoptext.innerText = `${this.previousOperand} ${this.operation}`
    }

}
chooseoperation(operation){
    if(this.currentOperand === '') return
    if(this.previousOperand!== '' )
    {
        this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''


}
compute(){
    let result
    const prev = parseFloat(this.previousOperand)
    const curr = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(curr)) return
    switch(this.operation)
    {
    case '+' : result = prev + curr
                break
    case '-' : result = prev - curr
                break
    case '*' : result = prev * curr
                break
    case '÷' : result = prev / curr
                break
    default:
        return
    } 
    this.currentOperand = result
    this.operation = undefined
    this.previousOperand =''
}

}

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const previousoptext = document.querySelector('[data-pervious-operand]')
const currentoptext = document.querySelector('[data-current-operand]')

const calc = new Calculator(previousoptext, currentoptext)

numberButton.forEach(button => {
button.addEventListener('click', () => {
    calc.appendNo(button.innerText)
    calc.updateDis()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseoperation(button.innerText)
        calc.updateDis()
        })
    })

    equalsButton.addEventListener('click', button => {
        calc.compute()
        calc.updateDis()
    })

    allClearButton.addEventListener('click', button => {
        calc.clear()
        calc.updateDis()
    })

    deleteButton.addEventListener('click', button => {
        calc.delete()
        calc.updateDis()
    })


