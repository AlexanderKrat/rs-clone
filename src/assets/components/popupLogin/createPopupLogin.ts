function createPopupLogin() {
    const register = document.querySelector('.popup-register');
    const login = document.querySelector('.popup-login');
    login?.classList.remove('hidden')
    register?.classList.add('hidden')
    if (login) { return }
    const main = document.querySelector('.main');
    let popup = document.createElement('div');
    popup.classList.add('popup-login')
    popup.innerHTML = `
    <div class="popup__wrap">
        <h3 class="onSignIn sign-active">Log in to your account</h3>
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
            <button onclick="clickSingIn()" class="popup__sing-in onSignIn sign-active">Sing In</button>
            <div class="popup__forgot onSignIn sign-active">Forgot Your Password?</div>
        </div>
        <span class="popup__span"></span>
        <div class="popup__footer">
        <div class="popup__register onSignIn sign-active">
            <p>Don’t have an account?</p>
            <p>Register</p>
        </div>
        </div>
    </div>
    `
    main?.appendChild(popup);
}
export default createPopupLogin