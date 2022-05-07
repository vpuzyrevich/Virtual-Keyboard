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
const ru2 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё'];
const ru3 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
const ru4 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
const symbolRu = ['№', '%', ':', ',', '.', ';'];

document.body.innerHTML = `
    <div class="wrapper">
        <div class="text-input">
            <textarea rows="6" placeholder="your text will be shown here" autofocus></textarea>
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
const keyActive = document.getElementsByClassName('active-letter');

const createKey = (i, elem1, elem2) => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    const span1 = document.createElement('span');
    span1.classList.add('letter', 'active-letter');
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


    //Class Active add/remove
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
    key[i].addEventListener('click', () => {
        key[i].classList.remove('pulse');
        key[i].classList.add('scale');
        textarea[0].focus();
    });
}

    //Add value on click
const capsLock = (key) => {
    for(let i = 1; i < 14; i++) {
        if(key.classList.contains('active')) {
            key2[i].lastChild.textContent = key2[i].lastChild.textContent.toUpperCase();
        } else {
            key2[i].lastChild.textContent = key2[i].lastChild.textContent.toLowerCase();
        }
    }
    for(let i = 1; i < 12; i++) {
        if(key.classList.contains('active')) {
            key3[i].lastChild.textContent = key3[i].lastChild.textContent.toUpperCase();
        } else {
            key3[i].lastChild.textContent = key3[i].lastChild.textContent.toLowerCase();
        }
    }
    for(let i = 1; i < 10; i++) {
        if(key.classList.contains('active')) {
            key4[i].lastChild.textContent = key4[i].lastChild.textContent.toUpperCase();
        } else {
            key4[i].lastChild.textContent = key4[i].lastChild.textContent.toLowerCase();
        }
    }
};
const addValueKeyLastChild = (key) => {
    textarea[0].focus();
    textarea[0].value += key.lastElementChild.textContent;
};
const addValueKeyFirstChild = (key) => {
    textarea[0].focus();
    textarea[0].value += key.firstElementChild.textContent;
};
for(let i = 0; i < 13; i++) {
    key1[i].addEventListener('click', () => {
        if(key1[i].lastChild.classList.contains('active-letter')) {
            addValueKeyLastChild(key1[i]);
        } else {
            addValueKeyFirstChild(key1[i]);
        }  
    });   
}
for(let i = 1; i < 14; i++) {
    key2[i].addEventListener('click', () => {
        if(key2[i].lastChild.classList.contains('active-letter')) {
            addValueKeyLastChild(key2[i]);
        } else {
            addValueKeyFirstChild(key2[i]);
        } 
    });   
}
for(let i = 1; i < 12; i++) {
    key3[i].addEventListener('click', () => {
        if(key3[i].lastChild.classList.contains('active-letter')) {
            addValueKeyLastChild(key3[i]);
        } else {
            addValueKeyFirstChild(key3[i]);
        } 
    });   
}
for(let i = 1; i < 11; i++) {
    key4[i].addEventListener('click', () => {
        if(key4[i].lastChild.classList.contains('active-letter')) {
            addValueKeyLastChild(key4[i]);
        } else {
            addValueKeyFirstChild(key4[i]);
        } 
    });   
}
key1[13].addEventListener('click', () => {
    textarea[0].value = textarea[0].value.substring(0, textarea[0].value.length - 1);
});  
key2[0].addEventListener('click', () => {
    textarea[0].value += "     ";
});
key3[0].addEventListener('click', () => {
    key3[0].classList.toggle('active');
    capsLock(key3[0]);
});
key3[12].addEventListener('click', () => {
    textarea[0].value += "\n";
});
const addActiveFirstSpan = (key) => {
    key.firstChild.classList.toggle('active-letter');
    key.lastChild.classList.toggle('active-letter');
};
const removeActiveFirstSpan = (key) => {
    key.firstChild.classList.toggle('active-letter');
    key.lastChild.classList.toggle('active-letter');
};
const addActiveLetter = () => {
    for(let i = 0; i < 13; i++) {
        addActiveFirstSpan(key1[i]);
    }
    for(let i = 11; i < 14; i++) {
        addActiveFirstSpan(key2[i]);
    }
    for(let i = 10; i < 12; i++) {
        addActiveFirstSpan(key3[i]);
    }
    for(let i = 8; i < 11; i++) {
        addActiveFirstSpan(key4[i]);
    }
};
const removeActiveLetter = () => {
    for(let i =0; i < 13; i++) {
        removeActiveFirstSpan(key1[i]);
    }
    for(let i = 11; i < 14; i++) {
        removeActiveFirstSpan(key2[i]);
    }
    for(let i = 10; i < 12; i++) {
        removeActiveFirstSpan(key3[i]);
    }
    for(let i = 8; i < 11; i++) {
        removeActiveFirstSpan(key4[i]);
    }
};
const actionShift = (key) => {
    key.classList.toggle('active');
    capsLock(key);
    if(key.classList.contains('active')) {
        addActiveLetter();
    } else {
        removeActiveLetter();
    }
};
key4[0].addEventListener('click', (e) => {
    actionShift(key4[0]);
});
key4[11].addEventListener('click', (e) => {
    actionShift(key4[11]);
});
key5[0].addEventListener('click', (e) => {
    if(key5[0].lastChild.textContent === 'en') {
        key5[0].lastChild.textContent = 'ru';
    } else {
        key5[0].lastChild.textContent = 'en';
    }
    if(key5[0].lastChild.textContent === 'ru') {
        for(let i = 0; i < symbolRu.length; i++) {
            key1[i+3].firstChild.textContent = symbolRu[i];
        }
        for(let i = 0; i < ru2.length; i++) {
            key2[i+1].lastChild.textContent = ru2[i];
        }
        for(let i = 0; i < ru3.length; i++) {
            key3[i+1].lastChild.textContent = ru3[i];
        }
        for(let i = 0; i < ru4.length; i++) {
            key4[i+1].lastChild.textContent = ru4[i];
        }
    } else {
        for(let i = 3; i < 9; i++) {
            key1[i].firstChild.textContent = numberTop[i];
        }
        for(let i = 1; i < letter2.length; i++) {
            key2[i].lastChild.textContent = letter2[i];
        }
            key2[11].lastChild.textContent = symbol2[0];
            key2[12].lastChild.textContent = symbol2[1];
            key2[13].lastChild.textContent = symbol2[2];

        for(let i = 1; i < letter3.length; i++) {
            key3[i].lastChild.textContent = letter3[i];
        }
        for(let i = 10; i < 12; i++) {
            key3[i].lastChild.textContent = symbol3[i-10];
        }
        for(let i = 1; i < letter4.length; i++) {
            key4[i].lastChild.textContent = letter4[i];
        }
        for(let i = 8; i < 11; i++) {
            key4[i].lastChild.textContent = symbol4[i-8];
        }
    }
});


key5[4].addEventListener('click', () => {
    textarea[0].value += " ";
}); 
key5[7].addEventListener('click', () => {
    if(textarea[0].selectionStart !== 0) {
        textarea[0].setSelectionRange(textarea[0].selectionStart-1, textarea[0].selectionStart-1); 
    } 
});
key5[8].addEventListener('click', () => {
    textarea[0].setSelectionRange(0, 0); 
});
key5[9].addEventListener('click', () => {
    textarea[0].setSelectionRange(textarea[0].value.length, textarea[0].value.length); 
});
key5[10].addEventListener('click', () => {
    textarea[0].setSelectionRange(textarea[0].selectionStart+1, textarea[0].selectionStart+1); 
});

document.addEventListener('keydown', (e) => {
    textarea[0].focus();
    addClassActiveSpan(e);
    addClassActiveKey5(e);
    capsLock(key3[0]);
    capsLock(key4[0]);
    if (e.code === "Tab") {
        e.preventDefault();
        textarea[0].value += "     ";
    }
    // if(key4[0].classList.contains('active')) {
    //     addActiveLetter();
    // }
});
document.addEventListener('keyup', (e) => {
    removeClassActiveSpan(e);
    removeClassActiveKey5(e);
    capsLock(key3[0]);
    // removeActiveLetter();
});


