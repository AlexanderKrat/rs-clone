
import deleteLine from "./deleteLine";
function createLineForm(){
  const form = document.querySelector('.ReplaceWords-form-main');
  const line = document.createElement('div');
  const sentence = document.createElement('input');
  sentence.type = 'text';
  sentence.classList.add('input-in-form');
  sentence.required = true;
  sentence.pattern = '(\[A-Za-z]{1,}\\s\[A-Za-z]\{1,})+';
  line.classList.add('sticks-form-line');

  const delButton = document.createElement('button');
  delButton.classList.add('matchUp-form__input-delete');
  line.appendChild(sentence);
  line.appendChild(delButton);
  form?.prepend(line);
  delButton.addEventListener('click', deleteLine);
}
export default createLineForm