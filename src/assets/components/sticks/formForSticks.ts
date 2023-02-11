import createLineForm from './createLineForm'

function formForSticks () {
    const main = document.querySelector('.main')
    const divForm = document.createElement('div')
    divForm.classList.add('sticks-form')
    const form = document.createElement('div')
    form.classList.add('sticks-form-main')
    const input = document.createElement('input')
    input.type = 'text'
    divForm.appendChild(input)
    main?.prepend(divForm)

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
    divForm.appendChild(form)


    const addButton = document.createElement('button')
    addButton.innerHTML = 'Add line'
    const subButton = document.createElement('button')
    subButton.innerHTML = 'Submit'
    const spanButton = document.createElement('div')
    spanButton.classList.add('stick-form-buttons')
    divForm.appendChild(spanButton)
    spanButton.appendChild(addButton)
    spanButton.appendChild(subButton)
    addButton.classList.add('sticks-form-button')
    subButton.classList.add('sticks-form-button')


    question.innerHTML = 'Question'
    answer.innerHTML = 'Answer'

    createLineForm()
    createLineForm()
    createLineForm()

    addButton.addEventListener('click', createLineForm)
}
export default formForSticks;