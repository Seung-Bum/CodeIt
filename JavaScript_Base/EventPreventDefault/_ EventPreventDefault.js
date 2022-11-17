var RANDOM_NUM1 = Math.floor(Math.random() * 11)// 1~10
var RANDOM_NUM2 = Math.floor(Math.random() * 11)

let element1 = document.getElementById('num1')
element1.innerText = RANDOM_NUM1

let element2 = document.getElementById('num2')
element2.innerText = RANDOM_NUM2

const form = document.querySelector(".js-form")


function init() {

    let result = RANDOM_NUM1 * RANDOM_NUM2

    form.addEventListener("submit", e => {
        e.preventDefault()// 입력한 숫자가 남아있게됨
        let checkNum = document.getElementById('checkNum').value

        if(result === Number(checkNum)) {
            alert("정답!") 
            //checkNum.innerText = ""
            checkNum.focus()
        } else {
            alert(`${RANDOM_NUM1} 곱하기 ${RANDOM_NUM2} 는?
다시 생각해주세요`)
            //checkNum.innerText = ""
            checkNum.focus()
        }
    }, false)
}

init()