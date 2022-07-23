var form = document.getElementById("form-card");
var result = document.getElementById("result");

var choice = -1;

var number1 = document.getElementById('number-1')
number1.addEventListener('click', ()=> {
    choice = 1
})

var number2 = document.getElementById('number-2')
number2.addEventListener('click', ()=> {
    choice = 2
})

var number3 = document.getElementById('number-3')
number3.addEventListener('click', ()=> {
    choice = 3
})

var number4 = document.getElementById('number-4')
number4.addEventListener('click', ()=> {
    choice = 4
})

var number5 = document.getElementById('number-5')
number5.addEventListener('click', ()=> {
    choice = 5
})

var btn = document.getElementById('submit');
btn.addEventListener('click', ()=>{
    if(choice !== -1){
        logic(choice);
    }
})


function logic(index){
    var score = index;
    form.classList.add('hide');
    // setTimeout(result, 10000)
    result.classList.remove('hide');
    var scoreText = document.getElementById('score-span')
    scoreText.innerText = score;
}