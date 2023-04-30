const KEY_TITLE = {
  eng: {
    lower: [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    upper: [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'],
      ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    caps: [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete'],
      ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    capsUpper: [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Delete'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
  },
  rus: {
    lower: [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'],
      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    upper: [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete'],
      ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    caps: [
      ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete'],
      ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    capsUpper: [
      ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Delete'],
      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
  },
};
const CODE = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

function createElement(tag, classNameArrow) {
  const ELEM = document.createElement(tag);
  ELEM.classList.add(...classNameArrow);
  return ELEM;
}
// Наполняет DOM кнопками
function createKeys(num, elem, rowNumber) {
  for (let j = 0; j < num; j += 1) {
    const KEY = createElement('div', ['row__key']);
    const RUS_KEY = createElement('div', ['key__rus', 'hide']);
    const ENG_KEY = createElement('div', ['key__eng', 'hide']);
    let key = RUS_KEY;
    let symbol = KEY_TITLE.rus;
    KEY.setAttribute('id', CODE[rowNumber][j].toLowerCase());
    for (let i = 0; i < 2; i += 1) {
      const UPPER = createElement('span', ['upper', 'hide']);
      const LOWER = createElement('span', ['lower', 'hide']);
      const CAPS = createElement('span', ['caps', 'hide']);
      const UPPER_CAPS = createElement('span', ['upper_caps', 'hide']);

      UPPER.innerText = symbol.upper[rowNumber][j];
      LOWER.innerText = symbol.lower[rowNumber][j];
      CAPS.innerText = symbol.caps[rowNumber][j];
      UPPER_CAPS.innerText = symbol.capsUpper[rowNumber][j];

      key.append(UPPER);
      key.append(LOWER);
      key.append(CAPS);
      key.append(UPPER_CAPS);

      key = ENG_KEY;
      symbol = KEY_TITLE.eng;
    }

    KEY.append(RUS_KEY);
    KEY.append(ENG_KEY);
    elem.append(KEY);
  }
}

const CONTAINER = createElement('div', ['container']);
const H1 = createElement('h1', ['header']);
const TEXT_AREA = createElement('textarea', ['text-area']);
const KEYBOARD = createElement('div', ['keyboard']);
const OS_TYPE = createElement('p', ['title']);
const LANG = createElement('p', ['title']);
let engRus = window.localStorage.getItem('lang');
let caps = false;
let shift = false;
let active;

// Меняет класс hide при изменении регистра
function makeActiveStyle(newElement) {
  active.forEach((element) => element.classList.add('hide'));
  newElement.forEach((element) => element.classList.remove('hide'));
  active = newElement;
}

function arrowDown(point) {
  let length = 0;
  let indexColumn = 0;
  const textArr = TEXT_AREA.value.split('\n');

  if (textArr.length === 0 || textArr.length === 1) return;
  for (let i = 0; i < textArr.length; i += 1) {
    length += textArr[i].length;
    if (length < point) {
      length += 1;
    } else {
      // Индекс элемента в строке массива textArr, перед которым стоит курсор
      indexColumn = textArr[i].length - (length - point);
      // Если последняя строка, то ставим каретку в конец
      if (i === textArr.length - 1) {
        TEXT_AREA.selectionStart = point + textArr[i].length;
        return;
      }
      if (indexColumn >= textArr[i + 1].length) {
        TEXT_AREA.selectionStart = point + (textArr[i].length - indexColumn)
          + 1 + textArr[i + 1].length;
        return;
      }
      TEXT_AREA.selectionStart = point + textArr[i].length + 1;
      return;
    }
  }
}

function arrowUp(point) {
  let length = 0;
  let indexColumn = 0;
  const textArr = TEXT_AREA.value.split('\n');

  if (textArr.length === 0 || textArr.length === 1) return;
  if (point <= textArr[0].length) {
    TEXT_AREA.selectionEnd = 0;
    return;
  }
  for (let i = 0; i < textArr.length; i += 1) {
    length += textArr[i].length;
    if (length < point) {
      length += 1;
    } else {
      // Индекс элемента в строке массива textArr, перед которым стоит курсор
      indexColumn = textArr[i].length - (length - point);
      if (textArr[i - 1].length <= indexColumn) {
        TEXT_AREA.selectionEnd = point - indexColumn - 1;
      } else {
        TEXT_AREA.selectionEnd = point
          - (indexColumn + (textArr[i - 1].length - indexColumn) + 1);
      }
      return;
    }
  }
}

function getSymbol(element) {
  if (element.id === 'enter') return '\n';
  if (element.id === 'space') return ' ';
  if (element.id === 'tab') return '    ';
  if (element.id === 'arrowleft' || element.id === 'arrowright'
    || element.id === 'arrowup' || element.id === 'arrowdown') return element.id;
  const letter = Array.from(element.querySelector(`.${engRus}`).children);
  let b;
  letter.forEach((a) => {
    if (a.classList.length === 1) b = a.innerText;
  });
  return b;
}

function writeSymbol(symb) {
  const cursor = TEXT_AREA.selectionStart;
  let text;
  if (symb === 'arrowdown') {
    arrowDown(cursor);
  } else if (symb === 'arrowup') {
    arrowUp(cursor);
  } else if (symb === 'arrowright') {
    TEXT_AREA.selectionStart = cursor + 1;
  } else if (symb === 'arrowleft') {
    if (cursor === 0) return;
    TEXT_AREA.selectionEnd = cursor - 1;
  } else if (symb === '    ') {
    text = TEXT_AREA.value.slice(0, cursor) + symb;
    TEXT_AREA.value = text + TEXT_AREA.value.slice(cursor);
    TEXT_AREA.selectionEnd = cursor + 4;
  } else if (symb === 'Backspace') {
    text = TEXT_AREA.value.slice(0, cursor - 1);
    TEXT_AREA.value = text + TEXT_AREA.value.slice(cursor);
    TEXT_AREA.selectionEnd = cursor - 1;
  } else if (symb === 'Delete') {
    text = TEXT_AREA.value.slice(0, cursor);
    TEXT_AREA.value = text + TEXT_AREA.value.slice(cursor + 1);
    TEXT_AREA.selectionEnd = cursor;
  } else {
    text = TEXT_AREA.value.slice(0, cursor) + symb;
    TEXT_AREA.value = text + TEXT_AREA.value.slice(cursor);
    TEXT_AREA.selectionEnd = cursor + 1;
  }
}

function pushCapsLock(element) {
  if (element.id === 'capslock' && caps) {
    element.classList.remove('row__key_active');
    caps = false;
    if (!shift) makeActiveStyle(document.querySelectorAll('.lower'));
    if (shift) makeActiveStyle(document.querySelectorAll('.upper'));
    return;
  }
  if (element.id === 'capslock' && !caps) {
    caps = true;
    if (!shift) makeActiveStyle(document.querySelectorAll('.caps'));
    if (shift) makeActiveStyle(document.querySelectorAll('.upper_caps'));
    element.classList.add('row__key_active');
  }
}

function pushShift(element) {
  if (element.id === 'shiftleft' || element.id === 'shiftright') {
    shift = true;
    if (!caps) makeActiveStyle(document.querySelectorAll('.upper'));
    if (caps) makeActiveStyle(document.querySelectorAll('.upper_caps'));
  }
}

function unPushShift(element) {
  if (element.id === 'shiftleft' || element.id === 'shiftright') {
    shift = false;
    if (!caps) makeActiveStyle(document.querySelectorAll('.lower'));
    if (caps) makeActiveStyle(document.querySelectorAll('.caps'));
  }
}

H1.innerText = 'RSS Виртуальная клавиатура';
OS_TYPE.innerText = 'Клавиатура создана в операционной системе Windows';
LANG.innerText = 'Для переключения языка комбинация: левые Alt + Ctrl';

// TODO проверить возможность написания в одну строку
TEXT_AREA.setAttribute('id', 'text');
TEXT_AREA.setAttribute('autofocus', '');
// TEXT_AREA.setAttribute('cols', '50');

document.body.append(CONTAINER);
CONTAINER.append(H1);
CONTAINER.append(TEXT_AREA);
CONTAINER.append(KEYBOARD);
for (let i = 0; i < 5; i += 1) {
  const KEYS_ROW = createElement('div', ['keyboard__row']);
  KEYBOARD.append(KEYS_ROW);
  switch (i) {
    case 0:
      createKeys(14, KEYS_ROW, 0);
      break;
    case 1:
      createKeys(15, KEYS_ROW, 1);
      break;
    case 2:
      createKeys(13, KEYS_ROW, 2);
      break;
    case 3:
      createKeys(13, KEYS_ROW, 3);
      break;
    case 4:
      createKeys(9, KEYS_ROW, 4);
      break;
    default:
      break;
  }
}
CONTAINER.append(OS_TYPE);
CONTAINER.append(LANG);

// добавляем необходимые классы-модификаторы
const KEY_ROWS = document.querySelectorAll('.keyboard__row');
KEY_ROWS.forEach((element, index) => {
  switch (index) {
    case 0:
      element.lastElementChild.classList.add('row__key_width', 'row__key_color');
      break;
    case 1:
      element.firstElementChild.classList.add('row__key_color');
      element.lastElementChild.classList.add('row__key_color');
      break;
    case 2:
      element.firstElementChild.classList.add('row__key_color');
      element.lastElementChild.classList.add('row__key_width', 'row__key_color');
      break;
    case 3:
      element.firstElementChild.classList.add('row__key_width', 'row__key_color');
      element.lastElementChild.classList.add('row__key_width', 'row__key_color');
      element.lastElementChild.previousElementSibling.classList.add('row__key_color');
      break;
    case 4:
      element.children[3].classList.add('row__key_width');
      for (let i = 0; i < element.children.length; i += 1) {
        if (i !== 3) element.children[i].classList.add('row__key_color');
      }
      element.firstElementChild.classList.add('row__key_width1');
      element.lastElementChild.classList.add('row__key_width1');
      break;
    default:
      break;
  }
  return element;
});

// Проверяем наличие последней раскладки языка
if (!engRus) {
  window.localStorage.setItem('lang', 'key__eng');
  engRus = window.localStorage.getItem('lang');
}
// Отображаем нужный язык в нижнем регистре при перезагрузке
active = document.querySelectorAll('.lower');
active.forEach((element) => element.classList.remove('hide'));
document.querySelectorAll(`.${engRus}`).forEach((element) => {
  element.classList.remove('hide');
  return element;
});

// события для клавиатуры
document.addEventListener('keydown', function add(e) {
  const CUP = this.getElementById(e.code.toLowerCase());
  // Отменяем браузерные события
  if (e.code !== 'CapsLock' && e.code !== 'ArrowUp'
    && e.code !== 'Enter' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight'
    && e.code !== 'ControlLeft' && e.code !== 'ArrowDown' && e.code !== 'ArrowLeft'
    && e.code !== 'ArrowRight' && e.code !== 'ControlRight' && e.code !== 'Space') e.preventDefault();

  CUP.classList.add('row__key_active');
  // Нажатие CapsLock
  pushCapsLock(CUP);
  // Нажатие Shift
  pushShift(CUP);
  // При смене языка
  if ((e.code === 'ControlLeft' && e.altKey) || (e.code === 'AltLeft' && e.ctrlKey)) {
    document.querySelectorAll(`.${engRus}`).forEach((element) => {
      element.classList.add('hide');
      return element;
    });
    if (engRus === 'key__eng') {
      window.localStorage.setItem('lang', 'key__rus');
      engRus = 'key__rus';
    } else {
      window.localStorage.setItem('lang', 'key__eng');
      engRus = 'key__eng';
    }
    document.querySelectorAll(`.${engRus}`).forEach((element) => {
      element.classList.remove('hide');
      return element;
    });
  }

  if (e.code !== 'CapsLock' && e.code !== 'Enter' && e.code !== 'ShiftLeft'
    && e.code !== 'ShiftRight' && e.code !== 'ControlLeft' && e.code !== 'ArrowDown'
    && e.code !== 'ArrowLeft' && e.code !== 'ArrowRight' && e.code !== 'ControlRight'
    && e.code !== 'Space' && e.code !== 'ArrowUp' && e.code !== 'MetaLeft'
    && e.code !== 'AltLeft' && e.code !== 'AltRight') {
    writeSymbol(getSymbol(CUP));
  }
});

document.addEventListener('keyup', function rem(e) {
  const CUP = this.getElementById(e.code.toLowerCase());
  // Отмена подсвечивания кнопок при нажатии
  if (e.code === 'CapsLock') return;
  CUP.classList.remove('row__key_active');

  // при отпускании Shift
  unPushShift(CUP);
});

// События мыши
KEYBOARD.addEventListener('mousedown', (e) => {
  // Отменяем события по клику для сохранения фокуса на textarea
  const keyboard = e.target.closest('.keyboard');
  if (!keyboard) return;
  e.preventDefault();
  // Обрабатываем нажатие CapsLock и Shift
  const target = e.target.closest('.row__key');
  if (!target) return;
  pushCapsLock(target);
  pushShift(target);

  if (target.id !== 'capslock' && target.id !== 'shiftleft' && target.id !== 'shiftright'
    && target.id !== 'controlleft' && target.id !== 'controlright' && target.id !== 'metaleft'
    && target.id !== 'altleft' && target.id !== 'altright') {
    writeSymbol(getSymbol(target));
  }
});
KEYBOARD.addEventListener('mouseup', (e) => {
  const target = e.target.closest('.row__key');
  if (!target) return;
  unPushShift(target);
});
// Ввод по клику
/* KEYBOARD.addEventListener('click', (e) => {
  const target = e.target.closest('.row__key');
  if (!target) return;
  // Фиксация CapsLock
}); */
