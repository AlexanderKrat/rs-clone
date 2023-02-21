function createPopupMatchup() {
    const popup = document.querySelector('.matchup-popup');
    if (popup) { popup.classList.remove('hidden'); return; }
    const main = document.querySelector('.main');
    let matchupPopup = document.createElement('div');
    matchupPopup.classList.add('matchup-popup');
    matchupPopup.innerHTML = `
    <div class="matchup-popup__wrapper">
        <div class="matchup-popup__title"></div>
        <div class="matchup-popup__score"></div>
        <div class="matchup-popup__time"></div>
    </div>
    `
    matchupPopup.addEventListener('click', (e) => {
        if (e.target == e.currentTarget) {
            matchupPopup.classList.add('hidden');
        }
    })
    main?.appendChild(matchupPopup);
}
export default createPopupMatchup