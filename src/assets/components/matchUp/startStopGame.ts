import dragDrop from "./drop";
let flag:boolean = true;
function startStopGame(e: Event) {
    const target = e.target;
    
    if (!(target instanceof HTMLButtonElement)) { return };
   
    
    if (target.classList.contains('matchUp-game__start')){
        toggleBoxes()
        setTimer()
        flag = false;
        startMatchUpGame();
    }
    

    if (target.classList.contains('matchUp-game__stop')){
        toggleBoxes()
        setTimer()
        flag = true;
      
    }
   
    
   

}
export default startStopGame;

function setTimer() {
    const matchUpTime:Element | null = document.querySelector('.matchUp-game__time')
    if(flag){
        let sec = 0;
        setInterval(() => {
            if(!flag){
                matchUpTime!.textContent = `${sec++}`
            }else {
                matchUpTime!.textContent = `0`;
                sec = 0;
                return
            }
        }, 1000);
    }
   
}

function startMatchUpGame() {
    
}

function toggleBoxes() {
    const container = document.querySelector('.matchUp-game__form')
    
}