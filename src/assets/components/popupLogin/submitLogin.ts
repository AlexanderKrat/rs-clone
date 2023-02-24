import checkAccaunt from "../accaunr/checkAccaunt";
import interactionAccounts from "../interactionAccounts";

function submitLogin() {
    const email: HTMLInputElement | null = document.querySelector('#login-popup__email');
    const password: HTMLInputElement | null = document.querySelector('#login-popup__password');
    if (email?.value?.trim() == '' || password?.value?.trim() == '') { return }
    interactionAccounts.getAcount(String(email!.value), String(password!.value)).then((data: number) => {
        if (data == 0){ return }
        localStorage.setItem('id', String(data));
        checkAccaunt();
        location.reload();
    });
}
export default submitLogin