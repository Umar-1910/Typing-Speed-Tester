let text = document.querySelector('.text')
let start = document.querySelector('.start')
let type = document.querySelector('.type')
let restart = document.querySelector('.restart')
let panel = document.querySelector('.panel')
let time = document.querySelector('.time')
let charactersTyped = document.querySelectorAll('.number')[2]
let timeTaken = document.querySelectorAll('.number')[3]
let correctWords = document.querySelectorAll('.number')[0]
let mistakes = document.querySelectorAll('.number')[1]
let wpm = document.querySelector('.word')
let level = document.querySelector('.level')
let percentage = document.querySelector('.percentage')
let progress = document.querySelector('.progress')


const random_text = async () => {

    try {
        
        let response = await fetch('https://dummyjson.com/posts')
        let data = await response.json()
        let post = data.posts

        let index = Math.floor(Math.random()*post.length)
        let size = (post[index].body).split(' ').length
        let words = (post[index].body).split(' ')
        
        text.innerHTML = ''
        for(let i=0;i<size;i++){
            text.innerHTML += `<span>${words[i]}</span> `
        }
    
    }catch(err){
        console.log('Fail to fetch api')
    }
    
}

random_text()


let seconds = 60
let id = null
let timeTaken_number = 0
let correctWords_number = 0
let mistakes_number = 0
start.addEventListener('click', ()=> {   
    
    clearInterval(id)

    type.value = ''
    type.removeAttribute('disabled')
    type.focus()
    type.style.backgroundColor = 'white'
    type.style.outlineColor = 'blue'
    type.style.cursor = 'text'


    id = setInterval(()=>{

        time.innerText = `01:00`

        seconds--
        timeTaken_number++
        
        if(seconds == 0){
        
            time.innerText = `00:00`
            clearInterval(id)
            panel.classList.remove('panel-display')
            charactersTyped.innerText = type.value.length
            timeTaken.innerText = `${timeTaken_number}s`
            correctWords.innerText = `${correctWords_number}`
            mistakes.innerText = `${mistakes_number}`
            percentage.innerText = `${Math.round((correctWords_number/span)*100)}%`
            wpm.innerText = `${Math.ceil((type.value.length/5)-mistakes_number)}`
            if(wpm.innerText < 0){
                wpm.innerText = '0'
            }else if(wpm.innerText < 40){
                level.innerText = 'Beginner'
            }else if(wpm.innerText < 60){
                level.innerText = 'Average'
            }else{
                level.innerText = 'Excellent'
            }

            progress.innerHTML = `<div></div>`
            progress.children[0].style.backgroundColor = 'brown'
            progress.children[0].style.height = '12px'
            progress.children[0].style.borderRadius = '10px'
            progress.children[0].style.width = `${Math.round((correctWords_number/span)*100)}%`

            type.value = ''
            type.setAttribute('disabled','')
            type.style.backgroundColor = 'rgb(233, 239, 243)'
            type.style.cursor = 'not-allowed'
            seconds = 60

        
        }else if(seconds < 10){
            time.innerText = `00:0${seconds}`
        }else{
            time.innerText = `00:${seconds}`
        }

    },1000)

})

restart.addEventListener('click', ()=> {

    random_text()

    type.value = ''
    type.setAttribute('disabled','')
    type.style.backgroundColor = 'rgb(233, 239, 243)'
    type.style.cursor = 'not-allowed'

    clearInterval(id)
    seconds = 60
    span = 0
    time.innerText = `01:00`
    panel.classList.add('panel-display')
    charactersTyped.innerText = '0'
    timeTaken_number = 0
    timeTaken.innerText = '0s'
    correctWords_number = 0
    correctWords.innerText = '0'
    mistakes_number = 0
    mistakes.innerText = '0'
    wpm.innerText = '0'
    level.innerText = 'Level'
    percentage.innerText = '0%'
    progress.innerHTML = ''

})


const compare = (value,index)=> {
    let val = text.children[span].innerText
    let arr = value.split(' ')
    
    if(val == arr[index]){
        correctWords_number++
        return true
    }else{
        mistakes_number++
        return false
    }
}


let span = 0
type.addEventListener('keydown', (event)=> {

    text.children[span].style.backgroundColor = 'yellow'
    if(event.key == ' '){
        if(compare(type.value,span)){
            text.children[span].style.color = 'green'
        }else{
            text.children[span].style.color = 'red'
            text.children[span].style.textDecoration = 'underline'
        }
        text.children[span].style.background = 'none'
        span++
    }

})