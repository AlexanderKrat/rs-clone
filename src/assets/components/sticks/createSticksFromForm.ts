import { Sticks } from './paper'
import openSection from '../openSection'
import createUrlSticks from './addUrlSticks'

function createSticksFromForm() {
    const arr: string[][] = []
    const lines = document.querySelectorAll('.sticks-form-line')
    lines.forEach(el => {
        const insideArr: string[] = []
        const first = el.firstElementChild as HTMLInputElement;
        const fir = first.value
        const second = el.firstElementChild?.nextElementSibling as HTMLInputElement;
        const sec = second.value
        insideArr.push(fir)
        insideArr.push(sec)
        arr.push(insideArr)
    })
    
    const title = document.querySelector('.input-name-sticks') as HTMLInputElement

    const newSticks = new Sticks(arr, title.value)
    newSticks.create();
    newSticks.check();
    newSticks.randomizer();

    openSection('sticks-place')
    createUrlSticks(arr, title.value)
}

export default createSticksFromForm