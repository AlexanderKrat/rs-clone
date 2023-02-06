import setOrder from './setOrder';
function deleteInputLine(target:HTMLElement, formItem:HTMLDivElement) {
  target.addEventListener('click', ()=>{
    formItem.remove();
    setOrder();
  })
}
export default deleteInputLine
