function dragDrop() {
  const container = document.querySelector('.matchUp-game__form')
  container?.addEventListener('dragstart', dragstart)
  container?.addEventListener("dragend", dragend);

  // const item = document.querySelector(".item");
  // Считываем все боксы в массив
  const boxes = Array.from(document.querySelectorAll(".box"));
  console.log(boxes);
  // Обработчик начала перетаскивания элемента
  // item.addEventListener("dragstart", dragstart);
  // Обработчик завершения перетаскивания элемента
  // item.addEventListener("dragend", dragend);

  // Обработчик для боксов
  boxes.forEach((box) => {
    box.addEventListener("dragover", dragover);
    box.addEventListener("drop", drop);
    box.addEventListener("dragenter", dragenter);
    box.addEventListener("dragleave", dragleave);
  });
  let item: HTMLElement
  // Функция начала перетаскивания элемента
  function dragstart(e: Event) {
    let target = e.target
    console.log(target);
    if (!(target instanceof HTMLElement)) { return };
    if (!target.classList.contains('matchUp-game__drop')) { return }
    console.log(target);
    // Меняем цвет на фиолетовый
    item = target
    item.classList.add("item--hold");
    // Удаляем элемент из бокса
    setTimeout(() => item.classList.add("item--hide"), 0);
  }

  // Функция завершения перетаскивания элемента
  function dragend(e: Event) {
    // Меняем цвет на синий
    if (!item) { return };
    if (!item.classList.contains('matchUp-game__drop')) { return }
    item.classList.remove("item--hold");
    // Возвращаем элемент обратно
    console.log(e.target);
    item.classList.remove("item--hide");
  }

  function dragover(e: Event) {
    e.preventDefault();
  }

  function drop(e: Event) {
    // Добавляем наш элемент в нужный бокс

    if (!(e.target instanceof HTMLElement)) { return };
    if (e.target.closest('.matchUp-game__drop') || !item) { return }

    e.target.append(item);
    // Убираем желтую подсветку
    e.target.classList.remove("box--hovered");
  }

  function dragenter(e: Event) {
    if (!(e.target instanceof HTMLElement)) { return };
    // Добавляем желтую подсветку
    e.target.classList.add("box--hovered");
  }

  function dragleave(e: Event) {
    if (!(e.target instanceof HTMLElement)) { return };
    // Убираем желтую подсветку
    e.target.classList.remove("box--hovered");
  }
}

export default dragDrop