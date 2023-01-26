const _buttons = document.querySelectorAll('.start__btn')
const _start_div = document.querySelector('.start')
const _finish_div = document.querySelector('.finish')
const _participant = document.querySelector('#participant')
const _computer = document.querySelector('#computer')
const _title = document.querySelector('#table_title')
const _retry = document.querySelector('#retry')
const _score = document.querySelector('#score')
const _rules = document.querySelector('#rules')
const _modal = document.querySelector('.modal')
const _closeBtn = document.querySelector('.modal__close')


// buttons
_buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        let icon = btn.children[0]
        


        _start_div.style.display = "none"
        _finish_div.style.display = "flex"
        _participant.append(icon)
        
        if(icon.classList.contains('rock-icon')){
            _participant.style.cssText = `border: 50px solid #dd405d; background-color: #fff;`
        } else if(icon.classList.contains('paper-icon')){
            _participant.style.cssText = `border: 50px solid #5671f5; background-color: #fff;`
        } else if(icon.classList.contains('scissors-icon')){
            _participant.style.cssText = `border: 50px solid #eca922; background-color: #fff;`
        }

        randomElement()

        let result = _computer.childNodes[0].dataset.type
        if(icon.classList.contains('rock-icon')) {
            switch(result){
                case 'rock':
                    _title.textContent = "draw!"
                    break
                
                case 'paper':
                    _title.textContent = "You lost!"
                    _computer.classList.add('win')
                    break
                    
                case 'scissors':
                    _title.textContent = "You win!"
                    _participant.classList.add('win')
                    break
            }
        } else if(icon.classList.contains('paper-icon')) {
            switch(result){
                case 'rock':
                    _title.textContent = "you win!"
                    _participant.classList.add('win')
                    break
                
                case 'paper':
                    _title.textContent = "draw!"
                    break
                    
                case 'scissors':
                    _title.textContent = "You lost!"
                    _computer.classList.add('win')
                    break
            }
        } else if(icon.classList.contains('scissors-icon')) {
            switch(result){
                case 'rock':
                    _title.textContent = "you lost!"
                    _computer.classList.add('win')
                    break
                
                case 'paper':
                    _title.textContent = "you win!"
                    _participant.classList.add('win')
                    break
                    
                case 'scissors':
                    _title.textContent = "draw!"
                    break
            }
        }
    })
})

_retry.addEventListener('click', e => {
    window.location.reload()
})

_rules.addEventListener('click', e => {
    _modal.style.display = 'flex'
})

_closeBtn.addEventListener('click', e => {
    _modal.style.display = 'none'
})
window.addEventListener('click', e => {
    e.preventDefault()
    
    if(e.target.classList.contains('modal') || e.target.classList.contains('footer')){
        _modal.style.display = 'none'
    }
})
window.addEventListener('keydown', e => {
    e.preventDefault()
    
    if(e.code == 'Escape'){
        _modal.style.display = 'none'
    }
})


// random function
function randomElement() {
    let num = Math.random() * 2 + 1
    num = num.toFixed(0)
    console.log(num);
    let rock = `<img src="./assets/images/icon-rock.svg" alt="rock icon" class="start__img rock-icon" data-type="rock">`
    let paper = `<img src="./assets/images/icon-paper.svg" alt="paper icon" class="start__img paper-icon" data-type="paper">`
    let scissors = `<img src="./assets/images/icon-scissors.svg" alt="paper icon" class="start__img scissors-icon" data-type="scissors">`
    
    if(num == 1) {
        _computer.innerHTML = rock
        _computer.style.cssText = `border: 50px solid #dd405d; background-color: #fff;`
    } else if(num == 2){
        _computer.innerHTML = paper
        _computer.style.cssText = `border: 50px solid #5671f5; background-color: #fff;`
    } else if(num == 3){
        _computer.innerHTML = scissors
        _computer.style.cssText = `border: 50px solid #eca922; background-color: #fff;`
    }
}