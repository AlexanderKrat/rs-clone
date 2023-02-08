function createCell(title:string) {
    const main = document.querySelector('.main__container');
    const addGame = document.querySelector('.main__button');
    
   
    const root = document.createElement('div');
    root.classList.add('game-container')
   
    root.innerHTML = `
    <div class="game-container__image"></div>
    <div class="game-container__block">
      <div class="game-container__title">${title}</div>
      <div class="game-container__description">${title}</div>
   `;
    main?.appendChild(root);
}
export default createCell
 
