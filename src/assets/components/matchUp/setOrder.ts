function setOrder() {
  const arrayNumbers: NodeListOf<Element> = document.querySelectorAll('.matchUp__number')
  arrayNumbers.forEach((element, index) => {
    element.textContent = `${index + 1}`
  });
}
export default setOrder
