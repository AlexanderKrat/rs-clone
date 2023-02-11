import delLine from './delLine'

function createLineSticks() {
    const form = document.querySelector('.sticks-form-main')
    const line = document.createElement('div');
    const question = document.createElement('input');
    question.type = 'text'
    question.classList.add('input-in-form')
    const answer = document.createElement('input');
    answer.type = 'text'
    answer.classList.add('input-in-form')
    line.classList.add('sticks-form-line')

    const delButton = document.createElement('button');
    delButton.innerHTML = 'Del'
   

    line.appendChild(question)
    line.appendChild(answer)
    line.appendChild(delButton)
    form?.appendChild(line)

    delButton.addEventListener('click', delLine)

}
export default createLineSticks