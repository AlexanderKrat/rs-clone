import createPopupMatchup from "./openPopup";

function submitGame() {
  const definitio = document.querySelectorAll('.matchUp-game__definitio');
  const drop = document.querySelectorAll('.matchUp-game__drop');

  for (let i = 0; i < drop.length; i++) {
    if (definitio[i].id.split('_')[1] == drop[i].id.split('_')[1]) {
      drop[i].classList.add('drop-true');

    }
    if (definitio[i].id.split('_')[1] != drop[i].id.split('_')[1]) {
      drop[i].classList.add('drop-false');
    }
  }
  createPopupMatchup();
  checkMatchUp();

}
export default submitGame;

function checkMatchUp() {
  const title = document.querySelector('.matchup-popup__title');
  const score = document.querySelector('.matchup-popup__score');
  const time = document.querySelector('.matchup-popup__time');
  const gameTime = document.querySelector('.matchUp-game__time');
  const matchUpDrop = document.querySelectorAll('.matchUp-game__drop');

  const dropTrue = document.querySelectorAll('.drop-true');

  score!.textContent = `Score ${dropTrue.length} / ${matchUpDrop.length}`;
  time!.textContent = `Time ${gameTime?.textContent}`;

  let text: string;
  const scoreM = (dropTrue.length / matchUpDrop.length * 100);
  if (scoreM == 100) {
    text = 'excellently';
  } else if (scoreM >= 80) {
    text = 'good job';
  } else if (scoreM >= 40) {
    text = 'try agen';
  } else {
    text = 'Bad';
  }
  title!.textContent = text;
}

