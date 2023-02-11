function formForSticks () {
    const main = document.querySelector('.main')
    const divForm = document.createElement('div')
    divForm.classList.add('sticks-form')
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.type = 'text'
    divForm.appendChild(input)
    main?.appendChild(divForm)
    input.value = 'Sticks'
    input.classList.add('input-name-sticks')
    input.placeholder = 'Enter game name'

    const divTitle = document.createElement('div');
    divTitle.classList.add('input-name-sticks')
    divTitle.classList.add('input__question__sticks')
    divForm.appendChild(divTitle)
    const question = document.createElement('div');
    const answer = document.createElement('div');
    divTitle.appendChild(question)
    divTitle.appendChild(answer)
    question.innerHTML = 'Question'
    answer.innerHTML = 'Answer'


}
export default formForSticks;