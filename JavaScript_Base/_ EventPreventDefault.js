var RANDOM_NUM1 = Math.floor(Math.random() * 11)// 1~10
var RANDOM_NUM2 = Math.floor(Math.random() * 11)

let element1 = document.getElementById('num1')
element1.innerText = RANDOM_NUM1

let element2 = document.getElementById('num2')
element2.innerText = RANDOM_NUM2

const form = document.querySelector(".js-form")

function init() {
    form.addEventListener("submit", e => {

        alert("11")
    
        if(result === Number(input.value)) {
            alert("정답!") 
            firstNum = RANDOM_NUM1
            secondNum = RANDOM_NUM2
            result = firstNum * secondNum
            word.textContent = `${firstNum} 곱하기 ${secondNum} 는?`
            input.value = ""
            input.focus()
        } else {
            alert("땡!")
            input.value = ""
            input.focus()
        }
    })
}

init()