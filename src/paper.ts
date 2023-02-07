const verbs = [
    ['Look forward to', 'С нетерпением ждать чего-то'],
    ['Carry on', 'Продолжать заниматься чем-то'],
    ['Pass out', 'Терять сознание'],
    ['Run out', 'Закончиться'],
    ['Stand by', 'Приготовиться'],
    ['Work out', 'Тренероваться'],
    ['Work out', 'Быть начеку'],
    ['Give up', 'Сдаваться'],
    ['Catch up', 'Наверстать'],
    ['Pick out', 'Выбирать']
]

export class Sticks {
    verbs: string[][] | undefined;
    constructor(obj?: string[][]) {
        if (obj) {
            this.verbs = obj;
        } else {
            this.verbs = verbs;
        }
    }
    create() {
        console.log(this)
    }


}