import { Sticks } from './paper'
import openSection from '../openSection'

function createSticks() {
    const inputs = document.querySelectorAll('.input-in-form')
        let readValues = 0;
        inputs.forEach(el => {
            const check = el as HTMLInputElement;
            if (check.value) {
                readValues++
            }
        })
        if (readValues === inputs.length) {
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
        }
}

export default createSticks