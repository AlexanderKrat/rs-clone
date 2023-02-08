function openSection(nameElement:string) {
    
    const main = document.querySelector('.main')
    if (!nameElement){nameElement = 'main__container'}
   
    const children = main!.children
    for (let i = 0; i <  children.length; i++) {
        if (!children[i].classList.contains(nameElement)){
            children[i].classList.add('hidden')
        }else {children[i].classList.remove('hidden')}
        
    }
}
export default openSection