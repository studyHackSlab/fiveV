// document.addEventListener("DOMContentLoaded", (event) => {

const card = "AAABBBCCCDDDJJJ";
let cardtext = ["A", "B", "C", "D", "J"];
let arr = [];
let shufflenumber = [];
const cardlist = [];
let judgement = "";


const owncard = [];
const aicard = [];

const testcard = [];

let answercound = 0;

// ボタン
let answerbutton = document.getElementById('answerbutton');
let throwbutton = document.getElementById('throw');

console.log(answerbutton);

// ボタンの無効化
answerbutton.disabled = true;

// アンサーが選ばれたら
let raidoselect = document.querySelectorAll('[name="answer"]');

for (let i = 0; i < raidoselect.length; i++) {
    raidoselect[i].onchange = event => {
        answerbutton.disabled = false;
    }
}

// シャッフル
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

// プレイヤーの手札
for (let i = 0; i < 3; i++) {
    owncard[i] = card[shufflenumber[i]];
    // console.log(number);
}

// AIの手札
for (let i = 3; i < 6; i++) {
    aicard[i - 3] = card[shufflenumber[i]];
    // console.log(number);
}

// console.log(card[shufflenumber[6]]);

// アンサーカード
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
// });
// 回答をする
function answercheck() {
    const radiochecked = document.querySelector('input[name="answer"]:checked');
    const imgchecked = document.getElementById('answer').querySelector('img[alt="' + radiochecked.id + '"]');
    const setjudgement = document.getElementsByTagName('span');
    const answercard = document.getElementById('answercard');

    console.log(imgchecked);
    // console.log(radiochecked.id);
    console.log(answer);

    // ボタンの無効化
    throwbutton.disabled = true;

    // アンサーカウントをカウントする 1
    answercound++;

    // プレイヤー１回目　カウント１
    if (radiochecked) {
        answercard.children[0].src = "img/" + radiochecked.id + ".jpg";
        imgchecked.src = "img/back.jpg";

        // ボタンの無効化
        answerbutton.disabled = true;
        if (radiochecked.id == answer) {
            judgement = "正解";
            answercard.children[1].src = "img/" + answer + ".jpg";
            alert("勝ち");
        } else {
            judgement = "不正解";
            // スリープ処理
            setTimeout(function () {
                if (answercound == 1) {
                    aithrow();
                }
                console.log("不正解");
                console.log();

                console.log("カードを探す：" + cardtext.indexOf(radiochecked.id));
                cardtext.splice(cardtext.indexOf(radiochecked.id), 1);
                console.log("残されたカード" + cardtext);

                // aiが決めたカード
                let aiselectcard = cardtext[Math.floor(Math.random() * (5 - answercound))];

                console.log("AIが決めたカード：" + aiselectcard);

                cardtext.splice(cardtext.indexOf(aiselectcard), 1);

                const aiimgchecked = document.getElementById('answer').querySelector('img[alt="' + aiselectcard + '"]');
                // AI１回目　カウント２
                answercound++;

                aiimgchecked.src = "img/back.jpg";
                // console.log("カードを探す：" + cardtext.find(element => element == radiochecked.id));
                // arr.splice(selectnumber, 1);

                answercard.children[2].src = "img/" + aiselectcard + ".jpg";
                if (aiselectcard == answer) {
                    answercard.children[1].src = "img/" + answer + ".jpg";
                    alert("負け");
                } else {

                }
            }, 3000)
        }
        setjudgement[0].innerHTML = judgement;
    }
}

function aithrow() {
    // スリープ処理
    // setTimeout(function () {
    // aiが捨てるカード枚数を決定する
    let aithrowawaycount = Math.floor(Math.random() * 4);

    // 捨てるカード
    const aithrowaway = document.getElementById('aithrowaway');

    // aiが捨てるカードの置き場のimgを初期化
    // for (let i = 0; i < 3; i++) {
    //     aithrowaway.children[i].src = "";
    //     aithrowaway.children[i].alt = "";
    // }

    console.log("aiが捨てる枚数：" + aithrowawaycount);

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

    // }, 3000);
}

function getSelectedValues() {

    // ボタンの無効化
    throwbutton.disabled = true;

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
// });