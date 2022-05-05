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
//     letter5.push(e.key);
//     console.log(letter5);
    
// };
document.body.innerHTML = `
    <div class="wrapper">
        <div class="text-input">
            <textarea rows="13"></textarea>
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
const row = document.getElementsByClassName('row');
const key = document.getElementsByClassName('key');
const key1 = row[0].getElementsByClassName('key');
const key2 = row[1].getElementsByClassName('key');
const key3 = row[2].getElementsByClassName('key');
const key4 = row[3].getElementsByClassName('key');
const key5 = row[4].getElementsByClassName('key');

const createKey = (i, elem1, elem2) => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    const span1 = document.createElement('span');
    span1.classList.add('letter');
    span1.textContent = elem1;
    keyDiv.append(span1);
    const span2 = document.createElement('span');
    span2.classList.add('letter');
    span2.classList.add('light');
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

    //Row2
letter2.map(item => {
    createKey(1, item);
});
for(let i = 0; i < 3; i++){
    createKey(1, symbol2[i], symbol2Top[i]);
}
key2[0].classList.add('delete-tab');
key2[0].getElementsByClassName('letter')[1].classList.add('fz14', 'left-bottom');
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
for(let i = 10; i < 12; i++){
    key3[i].style.justifyContent = 'space-between';
}
createKey(2, 'return');
key3[11].getElementsByClassName('letter')[0].style.marginTop = '6px';
key3[11].getElementsByClassName('letter')[1].style.marginTop = '6px';
key3[12].classList.add('caps-return');
key3[12].getElementsByClassName('letter')[1].classList.add('fz14', 'right-bottom');
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
createKey(4, '');
createArrow(key5[7], `<img src="./assets/left.png" alt="left">`);
const div = document.createElement('div');
div.classList.add('div-arrow');
row[4].append(div);
createArrow(div, `<img src="./assets/top.png" alt="top">`);
createArrow(div, `<img src="./assets/bottom.png" alt="bottom">`);
createKey(4, '');
createArrow(key5[11], `<img src="./assets/right.png" alt="right">`);
console.log(key5);

key5[3].classList.add('command');
key5[5].classList.add('command');
key5[4].classList.add('space');

console.log(key);
for(let i = 0; i < key.length; i++) {
    key[i].classList.add('pulse');
}

