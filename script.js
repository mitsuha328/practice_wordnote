let wordList = []
const storage = localStorage;
let shuffledArray = [...wordList];
let quizList = []
let QuestionList = []
let missList = []

function showAlert() {
    let x = 0;
    for (let i = 0; i < wordList.length; i++) {
        if (japanese.value === wordList[i].Japan && english.value === wordList[i].America) {
            alert('既に入力されている単語カードです。');
            document.getElementById('japanese').value = '';
            document.getElementById('english').value = '';
            return x = 1;
        }
    }
    if (x == 0) {
        wordList.push({
            Japan: japanese.value,
            America: english.value,
            check: 0
        })
    }
    shuffledArray = [...wordList];
    document.getElementById('japanese').value = '';
    document.getElementById('english').value = '';
    if (check_quiz === 1) {
        alert('内容が変更されたため、単語練習帳を終了します。');
        resetQuiz();
    }
    showList(shuffledArray);
    practiceNote()
    storage.store = JSON.stringify(wordList);
}

if (storage.store === undefined) {
} else {
    wordList = JSON.parse(storage.store);
    shuffledArray = [...wordList];
    showList(shuffledArray);
    practiceNote()
}




function searchWord() {
    const Search = document.getElementById('search');
    const KeyWord = document.getElementById('key-word').value;
    const Message_button = document.createElement('button');
    document.getElementById('message_btn').appendChild(Message_button);
    Message_button.style.display = 'none';
    const Message = document.getElementById('message');

    Search.style.display = 'none';
    let is_found = false;
    Message_button.textContent = '終了する'
    Message_button.classList.add('button');
    Message_button.style.display = 'block';
    for (const key of wordList) {
        if (key.Japan === KeyWord || key.America === KeyWord) {
            const KeyCard_1 = document.createElement('button');
            KeyCard_1.setAttribute('id', 'card');
            document.getElementById('key-card.ja').appendChild(KeyCard_1);
            const KeyCard_2 = document.createElement('button');
            KeyCard_2.setAttribute('id', 'card');
            document.getElementById('key-card.eg').appendChild(KeyCard_2);

            is_found = true;
            KeyCard_1.textContent = key.Japan;
            KeyCard_2.textContent = key.America;
            KeyCard_1.style.display = 'block';
            KeyCard_2.style.display = 'block';
            KeyCard_1.addEventListener('click', function () {
                remove(key.Japan, key.America);
                resetSearch();
            });
            KeyCard_2.addEventListener('click', function () {
                remove(key.Japan, key.America);
                resetSearch();
            });
        }
    }
    if (!is_found) {
        Message.style.display = 'block';
        Message.textContent = `"${KeyWord}"は単語帳に存在しません。`
    }

    Message_button.addEventListener('click', function () {
        resetSearch();
    });

    document.getElementById('key-word').value = '';


    function resetSearch() {
        document.getElementById('key-card.ja').innerHTML = "";
        document.getElementById('key-card.eg').innerHTML = "";
        Search.style.display = 'block';
        Message.style.display = 'none';
        Message_button.style.display = 'none';
    }
}



const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const replyElement = document.getElementById('reply');
const endElement = document.getElementById('end');
let currentQuestionIndex = 0;


const finishButton = document.createElement('button');
document.getElementById('finish-btn').appendChild(finishButton);
finishButton.classList.add('button');
finishButton.textContent = '終了する';
finishButton.style.display = 'none';
let check_quiz = 0;

const endButton = document.createElement('button');
document.getElementById('end-btn').appendChild(endButton);
endButton.classList.add('button');
endButton.textContent = 'やめる';
endButton.style.display = 'none';
endButton.addEventListener('click', function () {
    endElement.textContent = `${count}問中${right}問正解!お疲れ様でした♪( ´▽｀)`;
    count = 0;
    right = 0;
    finishButton.style.display = 'block';
    endButton.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
})


const shuffleButton = document.createElement('button');
document.getElementById('shuffle-btn').appendChild(shuffleButton);
shuffleButton.classList.add('shuffle-button');
shuffleButton.textContent = 'シャッフルする';
shuffleButton.addEventListener('click', function () {
    shuffledArray = shuffleArray(wordList);
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、単語練習帳を終了します。');
        resetQuiz();
    }
});

//シャッフルする
function shuffleArray(array) {
    const cloneArray = [...array];
    array.forEach(function (_, idx) {
        const randomNum = Math.floor(Math.random() * (idx + 1));
        [cloneArray[idx], cloneArray[randomNum]] = [cloneArray[randomNum], cloneArray[idx]];
    });
    return cloneArray;
}


//リセットする
const resetButton = document.createElement('button');
document.getElementById('reset-btn').appendChild(resetButton);
resetButton.classList.add('shuffle-button');
resetButton.textContent = 'リセットする';
resetButton.addEventListener('click', function () {
    shuffledArray = [...wordList];
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、単語練習帳を終了します。');
        resetQuiz();
    }
});

//全てのカードを有効にする
const whiteButton = document.createElement('button');
document.getElementById('white-btn').appendChild(whiteButton);
whiteButton.classList.add('white-button');
whiteButton.textContent = '全てのカードを有効にする';
whiteButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 0;
    }
    storage.store = JSON.stringify(wordList);
    changeCardleroad(wordList);
});

//全てのカードを無効にする
const blockButton = document.createElement('button');
document.getElementById('block-btn').appendChild(blockButton);
blockButton.classList.add('white-button');
blockButton.textContent = '全てのカードを無効にする';
blockButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 1;
    }
    storage.store = JSON.stringify(wordList);
    changeCardleroad(wordList);
});


function showNextQuestion() {
    replyElement.textContent = '';
    currentQuestionIndex++;
    if (currentQuestionIndex < QuestionList.length) {
        showQuestion();
    } else {
        endElement.textContent = `クイズ終了!${count}問中${right}問正解!お疲れ様でした♪( ´▽｀)`;
        count = 0;
        right = 0;
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        startButton.style.display = 'none';
        finishButton.style.display = 'block';
        endButton.style.display = 'none';
        check_quiz = 0;
    }
}


finishButton.addEventListener('click', function () {
    resetQuiz();
});

function resetQuiz() {
    currentQuestionIndex = 0;
    questionElement.textContent = '';
    endElement.textContent = '';
    quizContainer.style.display = 'none';
    startButton.style.display = 'block';
    nextButton.style.display = 'none';
    finishButton.style.display = 'none';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
    replyElement.style.display = 'none';
    endButton.style.display = 'none';
    miss = 0;
    check_quiz = 0;
    quizList = [];
    QuestionList = [];
    practiceNote()
    showList(shuffledArray);
}

const submitButton = document.createElement('button');
document.getElementById('submit-btn').appendChild(submitButton);
submitButton.classList.add('button');
submitButton.textContent = '答え合わせ';
submitButton.style.display = 'none';

submitButton.addEventListener('click', Check);

let count = 0;
let right = 0;
let miss = 0;
function Check() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = QuestionList[currentQuestionIndex].America.toLowerCase();
    replyElement.style.display = 'block';

    if (userAnswer === correctAnswer) {
        replyElement.textContent = '正解!';
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        if (miss == 0) {
            count += 1;
            right += 1;
        } else {
            miss = 0;
        }
    } else {
        replyElement.textContent = `不正解。正解は「${QuestionList[currentQuestionIndex].America}」です。`;
        nextButton.style.display = 'block';
        if (miss == 0) {
            missList.push({
                Japan: QuestionList[currentQuestionIndex].Japan,
                America: QuestionList[currentQuestionIndex].America
            })
            miss = 1;
            count += 1;
        }
    }
};

const nextButton = document.createElement('button');
nextButton.textContent = '次の問題';
nextButton.classList.add('button');
nextButton.style.display = 'none';
nextButton.addEventListener('click', function () {
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    miss = 0;
    showNextQuestion();
});
document.getElementById('next').appendChild(nextButton);
nextButton.classList.add('button');

function showQuestion() {
    const currentQuestion = QuestionList[currentQuestionIndex];
    questionElement.textContent = (`問題：${currentQuestion.Japan}`);
    answerInput.value = '';
}


const startButton = document.createElement('button');
startButton.textContent = 'スタート';
startButton.classList.add('start-btn');
answerInput.style.display = 'none';
startButton.addEventListener('click', function () {
    missList = [];
    for (let i = 0; i < shuffledArray.length; i++) {
        if (shuffledArray[i].check === 0) {
            let Question = { Japan: shuffledArray[i].Japan, America: shuffledArray[i].America }
            QuestionList.push(Question);
        }
    }
    if (QuestionList.length > 0) {
        for (let i = 0; i < shuffledArray.length; i++) {
            let newItem = { Japan: shuffledArray[i].Japan, America: '×', check: shuffledArray[i].check };
            quizList.push(newItem);
        }
        showList(quizList);
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
        answerInput.style.display = 'block';
        endButton.style.display = 'block';
        check_quiz = 1;


        showQuestion();
    } else {
        startButton.style.display = 'none';
        questionElement.textContent = '単語帳入力から単語カードを作成してください。'
        finishButton.style.display = 'block';
    }
});

document.getElementById('start').appendChild(startButton);




function showList(List) {
    let memo1_element = document.getElementById('memo_1');
    let memo2_element = document.getElementById('memo_2')

    memo1_element.innerHTML = '';
    memo2_element.innerHTML = '';

    for (const item of List) {
        let ja_element = document.createElement('p');//p要素作る
        ja_element.classList.add('word_card');

        let cleanBase = (assignUniqueID(`${item.America}`).replace(/\s+/g, '_'));
        let cleanJapan = (`${cleanBase}-Japan`)
        let cleanAmerica = (`${cleanBase}-America`);
        ja_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn-${cleanJapan} class="btn">${item.Japan}</button>`;
        memo1_element.prepend(ja_element);//memoにnew_elementを追加

        let eg_element = document.createElement('p');//p要素作る
        eg_element.id = assignUniqueID(item.America);
        eg_element.classList.add('word_card')

        eg_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn-${cleanAmerica} class="btn">${item.America}</button>`;
        memo2_element.prepend(eg_element);//memoにnew_elementを追加
    }

    changeCardleroad(List);
}

addEventListener('contextmenu', function (event) {
    event.preventDefault();
    let str = event.target.id;
    let Japan_id = 0;
    let America_id = 0;
    if (str.endsWith('-Japan')) {
        Japan_id = str;
        America_id = str.slice(0, -6) + '-America'; // '-Japan'の6文字を削除して'-America'に
    } else if (str.endsWith('-America')) {
        America_id = str;
        Japan_id = str.slice(0, -8) + '-Japan'; // '-America'の8文字を削除して'-Japan'に
    } else { }

    const Japan_text = document.getElementById(Japan_id).textContent;
    const America_text = document.getElementById(America_id).textContent;
    change(Japan_id, America_id, Japan_text, America_text)
})


function assignUniqueID(baseID) {
    let newID = baseID + '-1';
    let counter = 1;

    // IDが重複している場合、末尾に数字を付けていく
    while (document.getElementById(newID)) {
        //while文　条件が真である限り、コードを繰り返し実行する。
        //今回はgetElementByIdが要素を返すとき、真であるとされる。
        newID = baseID + '-' + counter;
        counter++;
    }

    return newID;
}

//カードが二本指でクリックされた時にカードの有効、無効を変更する。
function change(Japanese_id, English_id, Japanese_text, English_text) {
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].Japan === Japanese_text && wordList[i].America === English_text) {
            const jaButton = document.getElementById(Japanese_id);
            const enButton = document.getElementById(English_id);
            if (wordList[i].check === 0) {
                wordList[i].check = 1;
                if (jaButton && enButton) {
                    jaButton.style.border = '8px double #003342'; // ボタンの border を変更
                    jaButton.style.backgroundColor = '#88898a';
                    enButton.style.border = '8px double #003342';
                    enButton.style.backgroundColor = '#88898a';
                }
            } else {
                wordList[i].check = 0;
                if (jaButton && enButton) {
                    jaButton.style.border = '8px double #0090bb'; // ボタンの border を変更
                    jaButton.style.backgroundColor = '';
                    enButton.style.border = '8px double #0090bb';
                    enButton.style.backgroundColor = '';
                }
            }
            // 変更された後にローカルストレージを更新
            storage.store = JSON.stringify(wordList);
            break;
        }
    }
}

//ボタンでカードの有効、無効が変更されたときや、リストのカードに変更があった時、ページがリロードされた時の有効、無効を管理
function changeCardleroad(list) {
    const existingIDs = new Set();
    function assignUniqueID_roadver(baseID) {
        let counter = 1;
        let newID = `${baseID}-${counter}`;
        // IDがすでに存在する場合、末尾にカウンターを増やしていく
        while (existingIDs.has(newID)) {
            counter++;
            newID = `${baseID}-${counter}`;
        }
        existingIDs.add(newID);
        return newID;
    }
    for (let i = 0; i < list.length; i++) {
        const clean = assignUniqueID_roadver(list[i].America.replace(/\s+/g, '_'));
        const jaButton = document.getElementById(`btn-${clean}-Japan`);
        const enButton = document.getElementById(`btn-${clean}-America`);
        if (list[i].check === 1) {
            if (jaButton && enButton) {
                jaButton.style.border = '8px double #003342'; // ボタンの border を変更
                jaButton.style.backgroundColor = '#88898a';
                enButton.style.border = '8px double #003342';
                enButton.style.backgroundColor = '#88898a';
            }
        } else {
            if (jaButton && enButton) {
                jaButton.style.border = '8px double #0090bb'; // ボタンの border を変更
                jaButton.style.backgroundColor = '';
                enButton.style.border = '8px double #0090bb';
                enButton.style.backgroundColor = '';
            }
        }
    }
}




//remove関数に日本語と英語どちらも入れて、どちらもの値が一致するリストの配列があれば、そのindexを取得し、listから削除する。
function remove(Japanese, English) {
    const question = confirm('このカードを削除しますか?');
    if (question == true) {
        const word = { Japan: Japanese, America: English };
        const index = wordList.findIndex(function (item) {
            return item.Japan === word.Japan && item.America === word.America
        });

        if (index >= 0) {
            wordList.splice(index, 1);
        }

        shuffledArray = [...wordList];

        if (check_quiz === 1) {
            alert('内容が変更されたため、単語練習帳を終了します。');
            resetQuiz();
        }

        storage.store === undefined
        storage.store = JSON.stringify(wordList);

        showList(shuffledArray);
    }
    else {
    }
}

function practiceNote() {
    const prc_text = document.getElementById('text');
    prc_text.textContent = '練習ノートには単語練習帳で間違えた問題が表示されます。'
    prc_text.style.display = 'none';
    const container = document.getElementById('container');
    const template = document.getElementById('flame-template').content;
    if (missList.length == 0) {
        container.style.display = 'none';
        prc_text.style.display = 'block';
    } else {

        container.style.display = 'block';

        container.innerHTML = '';

        // div要素を生成してコンテナに追加する関数
        function createDiv(index) {
            // テンプレートを複製
            const clone = document.importNode(template, true);

            // 複製した要素にインデックスを設定
            const div = clone.querySelector('.flame');
            div.id = `flame-card-${index}`;

            const prcWord = clone.querySelector('.prc_word');
            prcWord.id = `practice-word-${index}`;
            prcWord.innerHTML = `${missList[index].Japan}:${missList[index].America}`;

            const inputWord = clone.querySelector('.image');
            inputWord.id = `word-${index}`;
            inputWord.placeholder = missList[index].America;

            const searchBtn = clone.querySelector('.check');
            searchBtn.dataset.index = index;
            searchBtn.id = `search-btn-${index}`;

            const form = clone.querySelector('form');
            form.onsubmit = function (event) {
                showCard(event, index);
            };

            // コンテナに追加
            container.appendChild(clone);

            function showCard(event, index) {
                event.preventDefault();
                if (inputWord.value === missList[index].America) {
                    inputWord.value = '';
                } else { }
            }
        }


        for (let i = 0; i < missList.length; i++) {
            createDiv(i)
        }
    }
}
