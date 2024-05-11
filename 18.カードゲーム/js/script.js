
const card = "AAABBBCCCDDDJJJ";
let arr = [];
let shufflenumber = [];
const cardlist = [];
let judgement = "";

const owncard = [];
const aicard = [];

const testcard = [];

for (let i = 0; i < card.length; i++) {
    cardlist[i] = card[i];
}

for (let i = 0; i < 15; i++) {
    arr[i] = i;
}

console.log(arr);

for (let i = 0; i < 15; i++) {
    let selectnumber = Math.floor(Math.random() * arr.length);
    // console.log(selectnumber);

    let selectednumber = arr[selectnumber];
    arr.splice(selectnumber, 1);
    // console.log(arr);
    shufflenumber[i] = selectednumber;
}

// console.log(selectednumber);
console.log(arr);
console.log(shufflenumber);

// for(let i = 0 ; i < arr.length ; i++){
//     testcard[i] = card[shufflenumber];
// }

// console.log(testcard);

for (let i = 0; i < 3; i++) {
    owncard[i] = card[shufflenumber[i]];
    // console.log(number);
}

for (let i = 3; i < 6; i++) {
    aicard[i - 3] = card[shufflenumber[i]];
    // console.log(number);
}

// console.log(card[shufflenumber[6]]);
let answer = card[shufflenumber[6]];

// console.log(cardlist);
console.log("own：" + owncard);
console.log("ai：" + aicard);

let owncardbox = document.getElementById('owncard');
let owncardimgbox = owncardbox.querySelectorAll('img');

for (let i = 0; i < owncardimgbox.length; i++) {
    owncardimgbox[i].src = "img/" + owncard[i] + ".jpg";
    owncardimgbox[i].alt = owncard[i];
}

console.log(owncardimgbox);

function answercheck() {
    const radiochecked = document.querySelector('input[name="answer"]:checked');
    const setjudgement = document.getElementsByTagName('span');
    const answercard = document.getElementById('answercard');

    // console.log(radiochecked.id);
    console.log(answer);
    if (radiochecked) {
        if (radiochecked.id == answer) {
            judgement = "正解";
            answercard.children[0].src = "img/" + answer + ".jpg";
        } else {
            judgement = "不正解";
        }
        setjudgement[0].innerHTML = judgement;
    }
}

function getSelectedValues() {
    const selectedValues = [];

    // チェックされたチェックボックスを取得
    const checkboxes = document.querySelectorAll('input[name="option"]:checked');
    console.log(checkboxes);
    // console.log(checkboxes[0].firstElementChild);

    // let labelcount = document.querySelectorAll('label').length;
    let selectcheckbox = [];

    // 選ばれた場所の保管
    let selectfor = [];

    // console.log(labelcount);

    // チェックされたカードのラベルを取得
    for (let i = 0; i < checkboxes.length; i++) {
        selectcheckbox[i] = document.querySelector('label[for="' + checkboxes[i].id + '"]');
        selectfor[i] = checkboxes[i].id;
        checkboxes[i].checked = false;
    }

    console.log(selectfor);
    // console.log(selectcheckbox);

    // 捨てるカード
    const throwaway = document.getElementById('throwaway');

    // 捨てるカードの置き場のimgを取得
    // for (let i = 0; i < throwaway.childElementCount; i++) {
    //     console.log(throwaway.children[i]);
    // }

    // 捨てるカードの置き場のimgを初期化
    for (let i = 0; i < 3; i++) {
        if (throwaway.children[i].src) {
            throwaway.children[i].src = "";
        }
        if (throwaway.children[i].alt) {
            throwaway.children[i].alt = "";
        }

    }

    // 捨てるカードの置き場のimgに選ばれたカードを配置する
    for (let i = 0; i < selectcheckbox.length; i++) {
        // console.log(selectcheckbox[i].lastElementChild.alt);
        throwaway.children[i].src = selectcheckbox[i].lastElementChild.src;
        throwaway.children[i].alt = selectcheckbox[i].lastElementChild.alt;
        const num = owncard.find(element => element == throwaway.children[i].alt);
        selectcheckbox[i].lastElementChild.src = "img/" + card[shufflenumber[i + 7]] + ".jpg";
    }

    // 新しくカードを取得する
    // owncard.splice(1, 1);
    console.log(owncard);

    for (let i = selectcheckbox.length + 7; i < card.length; i++) {
        console.log(card[shufflenumber[i]]);
    }

    // aiが捨てるカード枚数を決定する
    let aithrowawaycount = Math.floor(Math.random() * 4);

    // 捨てるカード
    const aithrowaway = document.getElementById('aithrowaway');

    // aiが捨てるカードの置き場のimgを初期化
    // for (let i = 0; i < 3; i++) {
    //     aithrowaway.children[i].src = "";
    //     aithrowaway.children[i].alt = "";
    // }

    console.log(aithrowawaycount);

    // aiが捨てるカードの置き場のimgに選ばれたカードを配置する
    for (let i = 0; i < aithrowawaycount; i++) {
        // console.log(selectcheckbox[i].lastElementChild.alt);
        aithrowaway.children[i].src = "img/" + aicard[i] + ".jpg";
        aithrowaway.children[i].alt = aicard[i];
        // const num = owncard.find(element => element == throwaway.children[i].alt);
        // selectcheckbox[i].lastElementChild.src = "img/" + card[shufflenumber[i + 7]] + ".jpg";
        console.log("i：" + i);
    }

    console.log(aithrowawaycount);

    // for(let i = 0 ; i < throwaway.children.length ; i++){
    //     const num = owncard.find(element => element == throwaway.children[i].alt);
    //     selectcheckbox[i].lastElementChild.src = "img/" + card[shufflenumber[i+6]] + ".jpg";
    // }


    // console.log("num:" + num);
    // console.log(throwaway.children[0].alt);
    // console.log(throwaway.children[1].alt);
    // console.log(throwaway.children[2].alt);

    // 新しいカードの配置し直し

    // let label = document.querySelector('label[for="' + checkboxes[0].id + '"]');
    // let alt = label.lastElementChild.alt;

    // console.log(label);
    // console.log(alt);

    // for (let i = 0; i < checkboxes.length; i++) {
    //     selectedValues.push(checkboxes[i].value);
    // }
}