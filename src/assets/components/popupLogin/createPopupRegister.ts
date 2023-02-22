function createPopupRegister() {
    const register = document.querySelector('.popup-register');
    const login = document.querySelector('.popup-login');
    register?.classList.remove('hidden')
    login?.classList.add('hidden')
    if( register){return}
    const main = document.querySelector('.main');
    let popup = document.createElement('div');
    popup.classList.add('popup-register')
    popup.innerHTML = `
    <div class="popup__wrap">
    <h3 class="onSignUp">Create account</h3>
    <div class="popup__orLine onSignIn sign-active">
        <div class="popup__or">
           <span class="popup__span"></span>
        </div>
    </div>
    <div class="popup__login">
        <div class="popup__email">
            <label for="popup__email">E-mail</label>
            <input type="email" id="popup__email" type="text">
        </div>
        <div class="popup__password">
            <label for="popup__password">Password</label>
            <input type="password" id="popup__password" type="text">
        </div>
        <button onclick="clickSingIn()" class="popup__sing-up onSignUp">Sing Up</button>
        <div class="popup__forgot onSignIn sign-active">Forgot Your Password?</div>
    </div>
    <span class="popup__span"></span>
    <div class="popup__footer">
    <div class="popup__log-in onSignUp">
        <p>Already have an account?</p>
        <p>Log in</p>
    </div>
    </div>
</div>
    `
    main?.appendChild(popup);
}
export default createPopupRegister