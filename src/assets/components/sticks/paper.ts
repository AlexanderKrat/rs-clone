const verbs = [
    ['Look forward to', 'C нетерпением ждать чего-то'],
    ['Carry on', 'Продолжать заниматься чем-то'],
    ['Pass out', 'Терять сознание'],
    ['Run out', 'Закончиться'],
    ['Stand by', 'Приготовиться'],
    ['Work out', 'Тренероваться'],
    ['Watch out', 'Быть начеку'],
    ['Give up', 'Сдаваться'],
    ['Catch up', 'Наверстать'],
    ['Pick out', 'Выбирать']
];

export class Sticks {
    verbs: string[][] | undefined;
    name: string | undefined;
    title: string | undefined;
    constructor(obj?: string[][], name?: string, title?: string) {
        if (obj) {
            this.verbs = obj;
        } else {
            this.verbs = verbs;
        }
        if (name) {
            this.name = name;
        } else {
            this.name = 'Stickers';
        }
        if (title) {
            this.title = title;
        } else {
            this.title = 'Compare irregular verbs';
        }
    }
    create() {
        const main = document.querySelector('.main') as HTMLElement;
        const sticksGame = document.createElement('div')
        sticksGame.classList.add('sticks-place')
        main.appendChild(sticksGame)
        this.verbs?.forEach(elem => {
            const div = document.createElement('div')
            const answerDiv = document.createElement('div')
            const question = document.createElement('div')
            const answer = document.createElement('div')
            sticksGame.appendChild(div)
            sticksGame.appendChild(answerDiv)
            div.classList.add('one-of-sticks')
            question.classList.add('sticksText')
            answer.classList.add('sticksText')
            answerDiv.classList.add('one-of-sticks')
            question.innerHTML = elem[0]
            answer.innerHTML = elem[1]
            div.appendChild(question)
            answerDiv.appendChild(answer)
            answer.style.color = 'brown'
            answer.style.opacity = '0'
            question.style.opacity = '0'
        })
    }
    check() {
        const sticksGame = document.querySelector('.sticks-place') as HTMLElement;
        const numberOfSticks = this.verbs?.length;
        let winCond = 0;
        let clicked: HTMLElement[] = [];
        let countClicks = 1;
        sticksGame.addEventListener('click', (e) => {

            const loseAud = require('../../sounds/24.mp3')
            const winAud = require('../../sounds/win.mp3')
            const winAudio = new Audio(winAud)
            const loseAudio = new Audio(loseAud)

            const block = e.target as HTMLElement;
            if (block.className === 'sticksText' && block.style.opacity === '0') {
              this.startTime(countClicks)
              countClicks++
              block.style.opacity = '1'
              clicked.push(block)
                if (clicked.length > 1) {
                    const finded = verbs.find(element => clicked[0].innerHTML === element[0] || clicked[0].innerHTML === element[1])
                    if (finded![1] === clicked[1].innerHTML && finded![0] === clicked[0].innerHTML || finded![0] === clicked[1].innerHTML && finded![1] === clicked[0].innerHTML) {
                        clicked.forEach(el => {
                            el.classList.add('win-anim')
                            setTimeout(() => {
                              el.classList.remove('win-anim')
                            }, 1500);
                        })
                        winAudio.play()
                        clicked = []
                        winCond++;
                        if (winCond === numberOfSticks) {
                            alert('win!')
                        }
                    } else {
                        clicked.forEach(el => {
                            el.classList.add('stickers-anim')
                            setTimeout(() => {
                              el.style.opacity = '0'
                              el.classList.remove('stickers-anim')
                            }, 1500);
                        })
                        loseAudio.play()
                        clicked = []
                    }
                }
            }
        })
    }
    randomizer() {
        const arraOfSticks: Element[] = []
        const stickers = document.querySelectorAll('.one-of-sticks')
        stickers.forEach((el) => {
            arraOfSticks.push(el)
        })
        const shuffledArray = arraOfSticks.sort((a, b) => 0.5 - Math.random());
        const sticksGame = document.querySelector('.sticks-place') as HTMLElement;
        sticksGame.innerHTML = '';
        const statsSticks = document.createElement('div')
        const startedTime = document.createElement('div')
        const countClicks = document.createElement('div')
        statsSticks.classList.add('stats-sticks')
        sticksGame.appendChild(statsSticks)
        statsSticks.appendChild(startedTime)
        statsSticks.appendChild(countClicks)
        startedTime.innerHTML = `Time: ${0}`
        countClicks.innerHTML = `Clicks: ${0}`
        countClicks.classList.add('clicked-sticks')
        startedTime.classList.add('time-sticks')
        const divForSticks = document.createElement('div')
        sticksGame.appendChild(divForSticks)
        divForSticks.classList.add('sticks-place')
        shuffledArray.forEach((ele) => {
          divForSticks.appendChild(ele)
        })
    }
    startTime(clicks: number) {
      let timeCount = 0;
      let minutes = 0;
      if (clicks === 1) {
        setInterval(() => {
          timeCount++
          if (timeCount < 60) {
            document.querySelector('.time-sticks')!.innerHTML = `Time: ${timeCount}`
          } else {
            minutes = Math.floor(timeCount / 60)
            let seconds = timeCount % 60;
            if (seconds < 10) {
              document.querySelector('.time-sticks')!.innerHTML = `Time: ${minutes}:0${seconds}`
            } else {
              document.querySelector('.time-sticks')!.innerHTML = `Time: ${minutes}:${seconds}`

            }
          }
          
        }, 1000);
      }
      document.querySelector('.clicked-sticks')!.innerHTML = `Clicks: ${clicks}`
    
    }
}