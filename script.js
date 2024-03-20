let wordList = []
const storage = localStorage;
let shuffledArray = wordList;

function showAlert() {
    wordList.push({
        Japan: japanese.value,
        America: english.value
    })
    // console.log('hello');
    shuffledArray = wordList;
    if (check_quiz === 1) {
        alert('内容が変更されたため、単語練習帳を終了します。');
        resetQuiz();
    }
    showList();
    storage.store = JSON.stringify(wordList);
}
addEventListener('load', function () {
    /*const data = storedData ? 
    JSON.parse(storedData) : [];*/
    if (storage.store === undefined) {
    } else {
        wordList = JSON.parse(storage.store);
        shuffledArray = wordList;
        showList();
    }
}
);

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
//const submitButton = document.getElementById('submit-btn');
const replyElement = document.getElementById('reply');
const endElement = document.getElementById('end');
let currentQuestionIndex = 0;

const First = document.getElementsByClassName('first-class');
const Second = document.getElementsByClassName('second-class');

const finishButton = document.createElement('button');
document.getElementById('finish-btn').appendChild(finishButton);
finishButton.textContent = '終了する';
finishButton.style.display = ' none';
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
    showList();
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
    showList();
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
        //alert('クイズ終了！');
        // resetQuiz();
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
        //alert('正解！');
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        count += 1;
        right += 1;
    } else {
        replyElement.textContent = `不正解。正解は「${shuffledArray[currentQuestionIndex].America}」です。`;
        //alert(`不正解。正解は「${wordList[currentQuestionIndex].America}」です。`);
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
    //console.log(wordList);
    const currentQuestion = shuffledArray[currentQuestionIndex];
    questionElement.textContent = currentQuestion.Japan;
    answerInput.value = '';
}


const startButton = document.createElement('button');
startButton.textContent = 'スタート';
answerInput.style.display = 'none';
// quizContainer.style.display = 'none';
//nextButton.style.display = 'none';
startButton.addEventListener('click', function () {
    if (shuffledArray.length > 0) {
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



function showList() {
    //console.log(wordList);
    let memo1_element = document.getElementById('memo_1');//memoを呼び出している
    let memo2_element = document.getElementById('memo_2')

    memo1_element.innerHTML = '';//memoのコードの中身そのものをまっさらにする
    memo2_element.innerHTML = '';

    for (const item of shuffledArray) {
        //let item=wordList[wordList.length-1]
        let ja_element = document.createElement('p');//p要素作る
        ja_element.id = item.Japan
        ja_element.classList.add('word_card')
        ja_element.innerText = item.Japan
        ja_element.innerHTML = `<button onclick="remove(event, 'Japan')" id=btn>${item.Japan}</button>`
        //new_element = 'wordList[wordList.length-1].Japan';
        memo1_element.prepend(ja_element);//memoにnew_elementを追加

        /*let btn_ja = ja_element.querySelector('button');
        //btn_ja.addEventListener('click', remove);
        btn_ja.addEventListener('click', (event) => remove(event, 'Japan'));*/

        let eg_element = document.createElement('p');//p要素作る
        eg_element.id = item.America
        eg_element.classList.add('word_card')
        eg_element.innerText = item.America
        eg_element.innerHTML = `<button onclick="remove(event, 'America')" id=btn>${item.America}</button>`
        // new_element = 'wordList[wordList.length-1].America';
        memo2_element.prepend(eg_element);//memoにnew_elementを追加

        /*let btn_eg = eg_element.querySelector('button');
        //btn_eg.addEventListener('click', remove);
        btn_eg.addEventListener('click', (event) => remove(event, 'America'));*/
    }
    //isShowListCalledByRemove = false;
}



function remove(event, language) {
    /*const parentElement = event.target.parentElement;
    console.log(parentElement);
    parentElement.remove();*/
    //console.log('Hello');
    const question = confirm('このカードを削除しますか?');
    if (question == true) {
        const parentElement = event.target.parentElement;
        const word = parentElement.id;

        // Find the index of the item in the wordList array
        const index = wordList.findIndex(item => item[language] == word);

        // Remove the item from the wordList array
        if (index !== -1) {
            wordList.splice(index, 1);
        }

        // Remove the parent element from the DOM
        parentElement.remove();

        // If both Japan and America entries are present, remove the counterpart as well
        //languageの値がJapanならAmericaをそうでなければJapanを返す
        const counterpartLanguage = language === 'Japan' ? 'America' : 'Japan';
        const counterpartIndex = wordList.findIndex(item => item[counterpartLanguage] == word);

        if (counterpartIndex !== -1) {
            wordList.splice(counterpartIndex, 1);
        }

        shuffledArray = wordList;
        //console.log(wordList);
        //isShowListCalledByRemove = true;

        if (check_quiz === 1) {
            alert('内容が変更されたため、単語練習帳を終了します。');
            resetQuiz();
        }

        storage.store === undefined
        storage.store = JSON.stringify(wordList);

        showList();
    }
    else {
    }
}



