import AccountData from "../data/AccountData";
import DataAccount from "../data/DataAccount";
import interactionAccounts from "../interactionAccounts";

function submitNewAccount() {
    const email: HTMLInputElement | null = document.querySelector('#register-popup__email');
    const password: HTMLInputElement | null = document.querySelector('#register-popup__password');
    if (email?.value?.trim() == '' || password?.value?.trim() == '') { return }
    const data: AccountData = {
        "name": `${email?.value}`,
        "password": `${password?.value}`,
    }
    interactionAccounts.createAcount(data).then((date: DataAccount) => {
        if (date) {
            interactionAccounts.createGameBlock(date.id)
            localStorage.setItem('id', String(date.id));
            location.reload()
        }
        console.log(date ? date : 'error')
    })   
}
export default submitNewAccount