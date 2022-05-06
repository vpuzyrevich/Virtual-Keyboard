'use strike';

const number = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '='];
const numberTop = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const letter2 = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const symbol2 = ['[', ']', '\\'];
const symbol2Top = ['{', '}', '|'];
const letter3 = ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const symbol3 = [';', "'"];
const symbol3Top = [':', '"'];
const letter4 = ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const symbol4 = [',', '.', '/'];
const symbol4Top = ['<', '>', '?'];
const letter5 = ['en', 'control', 'option', 'command', ' ', 'command', 'option'];
// document.onkeydown = function(e) {
//     dataChar.push(e.key);
//     console.log(dataChar);
    
// };
document.body.innerHTML = `
    <div class="wrapper">
        <div class="text-input">
            <textarea rows="10" autofocus></textarea>
        </div>
        <div class="keyboard">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
        </div>
    </div>
`;
const textarea = document.getElementsByTagName('textarea');
const row = document.getElementsByClassName('row');
const key = document.getElementsByClassName('key');
const key1 = row[0].getElementsByClassName('key');
const key2 = row[1].getElementsByClassName('key');
const key3 = row[2].getElementsByClassName('key');
const key4 = row[3].getElementsByClassName('key');
const key5 = row[4].getElementsByClassName('key');
const span = document.getElementsByTagName('span');
const keyActive = document.getElementsByClassName('activeLetter');

const createKey = (i, elem1, elem2) => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    const span1 = document.createElement('span');
    span1.classList.add('letter', 'activeLetter');
    span1.textContent = elem1;
    span1.setAttribute('data-char', elem1);
    keyDiv.append(span1);
    const span2 = document.createElement('span');
    span2.classList.add('letter');
    span2.classList.add('light');
    span2.setAttribute('data-char', elem2);
    span2.textContent = elem2;
    keyDiv.prepend(span2);
    row[i].append(keyDiv);
};
    //Row1
for(let i = 0; i < 13; i++){
    createKey(0, number[i], numberTop[i]);
    key1[i].style.justifyContent = 'space-between';
}
createKey(0, 'delete');
key1[13].classList.add('delete-tab');
key1[13].getElementsByClassName('letter')[1].classList.add('fz14', 'right-bottom');
span[27].setAttribute('data-char', 'Backspace');

    //Row2
letter2.map(item => {
    createKey(1, item);
});
for(let i = 0; i < 3; i++){
    createKey(1, symbol2[i], symbol2Top[i]);
}
key2[0].classList.add('delete-tab');
key2[0].getElementsByClassName('letter')[1].classList.add('fz14', 'left-bottom');
span[29].setAttribute('data-char', 'Tab');
for(let i = 11; i < 14; i++){
    key2[i].style.justifyContent = 'space-between';
}
    //Row3
letter3.map(item => {
    createKey(2, item);
});
for(let i = 0; i < 2; i++){
    createKey(2, symbol3[i], symbol3Top[i]);
}
key3[0].classList.add('caps-return');
key3[0].getElementsByClassName('letter')[1].classList.add('fz14', 'left-bottom');
span[57].setAttribute('data-char', 'CapsLock');
for(let i = 10; i < 12; i++){
    key3[i].style.justifyContent = 'space-between';
}
createKey(2, 'return');
key3[11].getElementsByClassName('letter')[0].style.marginTop = '6px';
key3[11].getElementsByClassName('letter')[1].style.marginTop = '6px';
key3[12].classList.add('caps-return');
key3[12].getElementsByClassName('letter')[1].classList.add('fz14', 'right-bottom');
span[81].setAttribute('data-char', 'Enter');
    //Row4
letter4.map(item => {
    createKey(3, item);
});
for(let i = 0; i < 3; i++){
    createKey(3, symbol4[i], symbol4Top[i]);
}
key4[0].classList.add('shift');
key4[0].getElementsByClassName('letter')[1].classList.add('fz14', 'left-bottom');
createKey(3, 'shift');
key4[11].classList.add('shift');
key4[11].getElementsByClassName('letter')[1].classList.add('fz14', 'right-bottom');
span[83].setAttribute('data-char', 'Shift');
span[105].setAttribute('data-char', 'Shift');

    //Row5
for(let i = 0; i < letter5.length; i++) {
    createKey(4, letter5[i]);
    key5[i].getElementsByClassName('letter')[1].classList.add('fz14', 'bottom');
    key5[i].classList.add('fz14', 'bottom');
}
const createArrow = (elem, img) => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.classList.add('arrow');
    keyDiv.innerHTML = img;
    elem.append(keyDiv);
};

createArrow(row[4], `<img src="./assets/left.png" alt="left">`);
const div = document.createElement('div');
div.classList.add('div-arrow');
row[4].append(div);
createArrow(div, `<img src="./assets/top.png" alt="top">`);
createArrow(div, `<img src="./assets/bottom.png" alt="bottom">`);
createArrow(row[4], `<img src="./assets/right.png" alt="right">`);

key5[7].setAttribute('data-char', 'ArrowLeft');
key5[8].setAttribute('data-char', 'ArrowUp');
key5[9].setAttribute('data-char', 'ArrowDown');
key5[10].setAttribute('data-char', 'ArrowRight');

key5[3].classList.add('command');
key5[5].classList.add('command');
key5[4].classList.add('space');

span[109].setAttribute('data-char', 'Control');
span[111].setAttribute('data-char', 'Alt');
span[113].setAttribute('data-char', 'Meta');
span[117].setAttribute('data-char', 'Meta');
span[119].setAttribute('data-char', 'Alt');

const addClassActiveSpan = (e) => {
    for(let i = 0; i < span.length; i++) {
        if(span[i].getAttribute('data-char') == e.key) {
            span[i].parentNode.classList.add('active');
            span[i].parentNode.classList.add('scale');
        }
    }
};
const addClassActiveKey5 = (e) => {
    for(let i = 0; i < key5.length; i++) {
        if(key5[i].getAttribute('data-char') == e.key) {
            key5[i].classList.add('active');
            key5[i].classList.add('scale');
        }
    }
};
const removeClassActiveSpan = (e) => {
    for(let i = 0; i < span.length; i++) {
        if(span[i].getAttribute('data-char') == e.key) {
            span[i].parentNode.classList.remove('active');
            span[i].parentNode.classList.remove('scale');
        }
    }
};
const removeClassActiveKey5 = (e) => {
    for(let i = 0; i < key5.length; i++) {
        if(key5[i].getAttribute('data-char') == e.key) {
            key5[i].classList.remove('active');
            key5[i].classList.remove('scale');
        }
    }
};
for(let i = 0; i < key.length; i++) {
    key[i].classList.add('pulse');
    key[i].addEventListener('click', (e) => {
        // textarea.focus();
        key[i].classList.remove('pulse');
        key[i].classList.add('scale');
        console.log(e.currentTarget.lastElementChild.textContent);
    });
}
document.addEventListener('keydown', (e) => {
    addClassActiveSpan(e);
    addClassActiveKey5(e);
});
document.addEventListener('keyup', (e) => {
    removeClassActiveSpan(e);
    removeClassActiveKey5(e);
    
});
console.log(key);