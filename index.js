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

H1.innerText = 'RSS Виртуальная клавивтура';
// TODO проверить возможность написания в одну строку
TEXT_AREA.setAttribute('id', 'text');
TEXT_AREA.setAttribute('rows', '5');
TEXT_AREA.setAttribute('cols', '50');

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
