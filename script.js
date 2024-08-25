let wordList = []
const storage = localStorage;
let shuffledArray = wordList;
let quizList = []

function showAlert() {
    wordList.push({
        Japan: japanese.value,
        America: english.value
    })
    shuffledArray = wordList;
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
// addEventListener('load', function () {
if (storage.store === undefined) {
} else {
    wordList = JSON.parse(storage.store);
    shuffledArray = wordList;
    showList(shuffledArray);
    practiceNote()
}
// }
// );


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
        // KeyCard_1.style.display = 'none';
        // KeyCard_2.style.display = 'none';
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

const First = document.getElementsByClassName('first-class');
const Second = document.getElementsByClassName('second-class');

const finishButton = document.createElement('button');
document.getElementById('finish-btn').appendChild(finishButton);
finishButton.textContent = '終了する';
finishButton.style.display = 'none';
let check_quiz = 0;

const endButton = document.createElement('button');
document.getElementById('end-btn').appendChild(endButton);
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
    array.forEach((_, idx) => {
        const randomNum = Math.floor(Math.random() * (idx + 1));
        [cloneArray[idx], cloneArray[randomNum]] = [cloneArray[randomNum], cloneArray[idx]];
    });
    return cloneArray;
}


//リセットする
const resetButton = document.createElement('button');
document.getElementById('reset-btn').appendChild(resetButton);
resetButton.textContent = 'リセットする';
resetButton.addEventListener('click', function () {
    shuffledArray = wordList;
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、単語練習帳を終了します。');
        resetQuiz();
    }
});


//答え合わせがEnterで反応するようにする
answerInput.addEventListener('keydown', text_event);
function text_event(e) {
    if (e.key === 'Enter') {
        Check();
    }
}

function showNextQuestion() {
    replyElement.textContent = '';
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledArray.length) {
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
        shuffledArray = wordList;
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
    check_quiz = 0;
    shuffledArray = wordList;
    quizList = [];
    showList(shuffledArray);
}

const submitButton = document.createElement('button');
document.getElementById('submit-btn').appendChild(submitButton);
submitButton.textContent = '答え合わせ';
submitButton.style.display = 'none';

submitButton.addEventListener('click', Check);

let count = 0;
let right = 0;
function Check() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = shuffledArray[currentQuestionIndex].America.toLowerCase();
    replyElement.style.display = 'block';

    if (userAnswer === correctAnswer) {
        replyElement.textContent = '正解!';
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        count += 1;
        right += 1;
    } else {
        replyElement.textContent = `不正解。正解は「${shuffledArray[currentQuestionIndex].America}」です。`;
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        count += 1;
    }
};

const nextButton = document.createElement('button');
nextButton.textContent = '次の問題';
nextButton.style.display = 'none';
nextButton.addEventListener('click', function () {
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    showNextQuestion();
});
document.getElementById('next').appendChild(nextButton);

function showQuestion() {
    const currentQuestion = shuffledArray[currentQuestionIndex];
    questionElement.textContent = (`問題：${currentQuestion.Japan}`);
    answerInput.value = '';
}


const startButton = document.createElement('button');
startButton.textContent = 'スタート';
answerInput.style.display = 'none';
startButton.addEventListener('click', function () {
    if (shuffledArray.length > 0) {
        for (let i = 0; i < shuffledArray.length; i++) {
            let newItem = { Japan: shuffledArray[i].Japan, America: '×' };
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
    let memo1_element = document.getElementById('memo_1');//memoを呼び出している
    let memo2_element = document.getElementById('memo_2')

    memo1_element.innerHTML = '';//memoのコードの中身そのものをまっさらにする
    memo2_element.innerHTML = '';

    for (const item of List) {
        let ja_element = document.createElement('p');//p要素作る
        ja_element.id = item.Japan
        ja_element.classList.add('word_card')
        ja_element.innerText = item.Japan
        ja_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn>${item.Japan}</button>`
        memo1_element.prepend(ja_element);//memoにnew_elementを追加

        let eg_element = document.createElement('p');//p要素作る
        eg_element.id = item.America
        eg_element.classList.add('word_card')
        eg_element.innerText = item.America
        eg_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn>${item.America}</button>`
        memo2_element.prepend(eg_element);//memoにnew_elementを追加
    }
}



//remove関数に日本語と英語どちらも入れて、どちらもの値が一致するリストの配列があれば、そのindexを取得し、listから削除する。
function remove(Japanese, English) {
    const question = confirm('このカードを削除しますか?');
    if (question == true) {
        const word = { Japan: Japanese, America: English };
        const index = wordList.findIndex(item => item.Japan === word.Japan && item.America === word.America);

        if (index >= 0) {
            wordList.splice(index, 1);
        }

        shuffledArray = wordList;

        if (check_quiz === 1) {
            alert('内容が変更されたため、単語練習帳を終了します。');
            resetQuiz();
        }

        storage.store === undefined
        storage.store = JSON.stringify(wordList);

        showList(shuffledArray);
        practiceNote()
    }
    else {
    }
}


function practiceNote() {
    const container = document.getElementById('container');
    const template = document.getElementById('flame-template').content;

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
        prcWord.innerHTML = `${wordList[index].Japan}:${wordList[index].America}`;

        const inputWord = clone.querySelector('.image');
        inputWord.id = `word-${index}`;

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
            if (inputWord.value === wordList[index].America) {
                inputWord.value = '';
            } else { }
        }
    }


    for (let i = 0; i < wordList.length; i++) {
        createDiv(i)
    }
}
