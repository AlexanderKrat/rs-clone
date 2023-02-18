import { Sticks } from './paper'
import openSection from '../openSection'
import createUrlSticks from './addUrlSticks'
import createCell from '../createCell'

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

    createUrlSticks(arr, title.value)
    openSection('sticks-place')
    // console.log(window.location.hash.split('/')[1])
    createCell(window.location.hash.split('/')[1])
}

export default createSticksFromForm