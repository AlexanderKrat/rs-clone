import criateURL from "../criateURL"

function createUrlSticks(arr: string[][], title: string) {
    const dataGame = {
        nameGame: 'sticks',
        title: title,
        arr: arr
    }
    window.history.pushState({}, '', `/#/${criateURL(dataGame)}`)
}
export default createUrlSticks