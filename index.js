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
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    upper: [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
      ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    caps: [
      ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
      ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
      ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
    ],
    capsUpper: [
      ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/'],
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
    KEY.setAttribute('id', CODE[rowNumber][j]);
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
const rus = window.localStorage.getItem('langRus');
let caps = false;

H1.innerText = 'RSS Виртуальная клавиатура';
OS_TYPE.innerText = 'Клавиатура создана в операционной системе Windows';
LANG.innerText = 'Для переключения языка комбинация: левые Alt + Ctrl';

// TODO проверить возможность написания в одну строку
TEXT_AREA.setAttribute('id', 'text');
// TEXT_AREA.setAttribute('rows', '5');
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

// отображаем нижний регистр клавиатуры и нужный язык
document.querySelectorAll('.lower').forEach((element) => element.classList.remove('hide'));
if (rus) {
  const keyRus = document.querySelectorAll('.key__rus');
  keyRus.forEach((element) => {
    element.classList.remove('hide');
    return element;
  });
} else {
  const keyEng = document.querySelectorAll('.key__eng');
  keyEng.forEach((element) => {
    element.classList.remove('hide');
    return element;
  });
}

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

// события для клавиатуры
document.addEventListener('keydown', function (e) {
  console.log(e.code);
  const CUP = this.getElementById(e.code);
  if (e.code === 'Tab' || e.code === 'AltLeft' || e.code === 'AltRight') e.preventDefault();
  if (e.code === 'CapsLock' && caps) {
    CUP.classList.remove('row__key_active');
    caps = false;
    return;
  }
  if (e.code === 'CapsLock' && !caps) {
    caps = true;
  }
  CUP.classList.add('row__key_active');
});
document.addEventListener('keyup', function (e) {
  const CUP = this.getElementById(e.code);
  if (e.code === 'CapsLock') return;
  CUP.classList.remove('row__key_active');
});
