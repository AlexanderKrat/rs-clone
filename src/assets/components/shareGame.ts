function shareGame(url:string) {
  const shareButton = document.querySelector('.game-container__share');
  shareButton?.addEventListener('click', ()=>{
    console.log(new URL(window.location.href).href + url);
  })
}
export default shareGame
