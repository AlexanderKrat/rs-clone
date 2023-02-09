const verbs = [
    ['Look forward to', 'С нетерпением ждать чего-то'],
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
    constructor(obj?: string[][]) {
        if (obj) {
            this.verbs = obj;
        } else {
            this.verbs = verbs;
        }
    }
    create() {
        const main = document.querySelector('.main__container') as HTMLElement;
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
            answer.style.color = 'red'
            answer.style.opacity = '0'
            question.style.opacity = '0'
        })
    }
    check() {
        const sticksGame = document.querySelector('.sticks-place') as HTMLElement;
        const numberOfSticks = this.verbs?.length;
        let winCond = 0;
        let clicked: HTMLElement[] = [];
        sticksGame.addEventListener('click', (e) => {
            const block = e.target as HTMLElement;
            if (block.className === 'sticksText' && block.style.opacity === '0') {
                if (clicked.length > 1) {
                    const finded = verbs.find(element => clicked[0].innerHTML === element[0] || clicked[0].innerHTML === element[1])
                    if (finded![1] === clicked[1].innerHTML && finded![0] === clicked[0].innerHTML || finded![0] === clicked[1].innerHTML && finded![1] === clicked[0].innerHTML) {
                        clicked = []
                        winCond++;
                        console.log(winCond, numberOfSticks)
                        if (winCond === numberOfSticks) {
                            alert('win!')
                        }
                    } else {
                        clicked.forEach(el => {
                            el.style.opacity = '0'
                        })
                        clicked = []
                    }
                }
                block.style.opacity = '1'
                clicked.push(block)
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
        shuffledArray.forEach((ele) => {
            sticksGame.appendChild(ele)
        })
    }
    
    
}