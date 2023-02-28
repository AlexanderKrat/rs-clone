import createReplaceWordsFromForm from './createReplaceWordsFromForm';

function createReplaceWords() {
  const inputs = document.querySelectorAll('.input-in-form');
  let readValues = 0;
  inputs.forEach((el) => {
    const check = el as HTMLInputElement;
    if (check.value) {
      readValues++;
    }
  });
  if (readValues === inputs.length) {
    createReplaceWordsFromForm();
  }
}
export default createReplaceWords;
