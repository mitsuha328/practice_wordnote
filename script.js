let wordList = [
    { Japan: "正直でいることが大切だ。", America: "It is important to be honest.", check: 0 },
    { Japan: "君たちがやさしい英語の本を読むのはいいことだ。", America: "It is good for you to read an easy English book.", check: 0 },
    { Japan: "私に助言してくれるとは本当に親切でした。", America: "It was very kind of you to give me some advice.", check: 0 },
    { Japan: "母が夕飯を作るのには1時間くらいかかる。", America: "It takes my mother about an hour to make dinner.", check: 0 },
    { Japan: "私がその小包を送るのに1,000円かかった。", America: "It cost me 1,000 yen to send the package.", check: 0 },
    { Japan: "ジェームズ先生がぼくらの野球部の監督になるのは確かだ。", America: "It is certain that Mr.James will become the manager of our baseball club.", check: 0 },
    { Japan: "メアリーはダンスのオーディションに合格したようだ。", America: "It seems that Mary passed the dance audition.", check: 0 },
    { Japan: "リサはニューヨークで美術を学ぶことにしていると言われている。", America: "It is said that Lisa is going to study fine arts in New York.", check: 0 },
    { Japan: "ジミーがぼくのことを何と言おうと問題ではない。", America: "It doesn't matter what Jimmy says about me.", check: 0 },
    { Japan: "授業でしっかりノートを取ることが大切だとわかった。", America: "I found it important to take good notes in class.", check: 0 },
    { Japan: "サムがこの問題を理解していることをはっきりさせておきたい。", America: "I want to make it clear that Sam understands this problem.", check: 0 },
    { Japan: "私は彼がそのお金を返すのは当然のことだと思う。", America: "I take it for granted that he will give back the money.", check: 0 },
    { Japan: "美術コンクールで1等を取ったのはケンでした。", America: "It was Ken that got the first prize in the art competition.", check: 0 },
    { Japan: "この問題の解き方を知りたい。", America: "I want to know how to solve this problem.", check: 0 },
    { Japan: "友人たちと共有するために写真を撮った。", America: "I took pictures in order to share them with friends.", check: 0 },
    { Japan: "ケイティーは忙しすぎて電話に出ることができなかった。", America: "Katie was too busy to answer the phone.", check: 0 },
    { Japan: "彼女は親切にも駅へ行く道を教えてくれた。", America: "She was kind enough to show me the way to the station.", check: 0 },
    { Japan: "彼らは明日の正午に会う予定である。", America: "They are to meet at noon tomorrow.", check: 0 },
    { Japan: "彼女は二度と祖国を見ることはなかった。", America: "She was never to see her homeland again.", check: 0 },
    { Japan: "その試験を受けるつもりなら、すぐに準備したほうがよい。", America: "If you are to take the test, you should prepare for it soon.", check: 0 },
    { Japan: "出かける前に宿題を終わらせるべきです。", America: "You are to finish your homework before you go out.", check: 0 },
    { Japan: "空には雲ひとつ見られない。", America: "No clouds are to be seen in the sky.", check: 0 },
    { Japan: "ピーターはインド料理が好きらしい。", America: "Peter seems to like Indian food.", check: 0 },
    { Japan: "彼は先生と話をしたようだ。", America: "He seems to have talked with our teacher.", check: 0 },
    { Japan: "お母さんが私に部屋を掃除するように言った。", America: "My mother told me to clean my room.", check: 0 },
    { Japan: "父に駅まで車に乗せてくれるように頼んだ。", America: "I asked my father to drive me to the station.", check: 0 },
    { Japan: "正直に言うと、僕は『スター・ウォーズ』に詳しいんだ。", America: "To tell you the truth, I know a lot about Star Wars.", check: 0 },
    { Japan: "先生はこれらの英単語を発音させた。", America: "Our teacher made us pronounce these English words.", check: 0 },
    { Japan: "ピーターの父親は息子に芝生を刈らせた。", America: "Peter's father had his son mow the lawn in the garden.", check: 0 },
    { Japan: "私はミラーさんがそのビルに入るのを見た。", America: "I saw Mr.Miller enter the building.", check: 0 },
    { Japan: "私は姉が子守唄を歌うのを聞いた。", America: "I heard my sister sing a lullaby.", check: 0 },
    { Japan: "ジュディーは早起きすることに慣れている。", America: "Judy is used to getting up early.", check: 0 },
    { Japan: "またお目にかかることを楽しみにしています。", America: "I'm looking forward to seeing you again.", check: 0 },
    { Japan: "その古い寺院は訪れる価値がある。", America: "The old temples are worth visiting.", check: 0 },
    { Japan: "昨日その手紙を投函を投函したことを覚えている。", America: "I remember mailing the letter yesterday.", check: 0 },
    { Japan: "駅で友人を見かけるとすぐに、彼に手を振った。", America: "On seeing my friend at the station, I waved at him.", check: 0 },
    { Japan: "ドアの鍵をかけ忘れた気がしてしかたない。", America: "I cannot help feeling I forgot to lock the door.", check: 0 },
    { Japan: "たちの悪い風邪のために外出できなかった。", America: "A bad cold prevented me from going out.", check: 0 },
    { Japan: "来週何が起こるかは誰にもわからない。", America: "There is no telling what will happen next week.", check: 0 },
    { Japan: "こぼれたミルクを嘆いてもむだだ。", America: "It is no use crying over spilled milk.", check: 0 },
    { Japan: "ケイコはマイクの英語を理解するのに苦労した。", America: "Keiko had difficulty understanding Mike's English.", check: 0 },
    { Japan: "高い木によじ登っている男の子は私のいとこです。", America: "The boy climbing up the tall tree is my cousin.", check: 0 },
    { Japan: "マーク・トウェインが書いた冒険小説を読んだことがありますか。", America: "Have you read the adventure novels written by Mark Twain?", check: 0 },
    { Japan: "私はキャシーがバスに乗り込むのを見かけた。", America: "I saw Cathy riding on a bus.", check: 0 },
    { Japan: "私は先週自転車を修理してもらった。", America: "I had my bicycle fixed last week.", check: 0 },
    { Japan: "彼の家に昨夜どろぼうが入った。", America: "He had his house broken into last night.", check: 0 },
    { Japan: "微笑みながら、ジェニファーはイタリアンレストランに入った。", America: "Smiling, Jennifer entered the Italian restaurant.", check: 0 },
    { Japan: "突然話しかけられたので、ジョセフはとても驚いた。", America: "Spoken to suddenly, Joseph was very surprised.", check: 0 },
    { Japan: "何と言っていいのかわからなかったので、ジョンは彼に何も話さなかった。", America: "Not knowing what to say, John said nothing to him.", check: 0 },
    { Japan: "新聞を読み終えた後、ラルフはシャワーを浴びた。", America: "Having finished reading the newspaper, Ralph took a shower.", check: 0 },
    { Japan: "彼のサッカーの技術を考えると彼はチームの主将になるだろう。", America: "Considering his soccer skills, he will become the team's captain.", check: 0 },
    { Japan: "ナンシーは腕組みをしながらその数学の問題について考えていた。", America: "Nancy was thinking about the math problem with her arms folded.", check: 0 },
    { Japan: "ブラウン先生は私たちの学校で美術を教えている画家だ。", America: "Mr.Brown is a painter who teaches fine arts at our school.", check: 0 },
    { Japan: "私は弟が有名な俳優である教授を知っている。", America: "I know a professor whose brother is a famous actor.", check: 0 },
    { Japan: "屋根が緑色に塗られている建物は美術館だ。", America: "The building whose roof is painted green is a museum.", check: 0 },
    { Japan: "歴史の試験についてジョンが言ったことは本当だった。", America: "What John said about the history test was true.", check: 0 },
    { Japan: "これはいわゆる「ホワイトアウト」現象だ。", America: "This is what we call the \"white out\" phenomenon.", check: 0 },
    { Japan: "彼女は陽気で、さらに良いことに、とても親切だ。", America: "She is cheerful, and what is still better, very kind.", check: 0 },
    { Japan: "ここが私の父が勤めている会社だ。", America: "This is the company for which my father works.", check: 0 },
    { Japan: "ここがアイザック・ニュートンが生まれた家だ。", America: "This is the house where Isaac Newton was born.", check: 0 },
    { Japan: "これは、そのルールが適用されない状況だ。", America: "This is a situation where the rule does not apply.", check: 0 },
    { Japan: "あなたが私たちのクラブに入会した理由を教えてください。", America: "Tell me the reason why you joined our club.", check: 0 },
    { Japan: "これが今彼と口をききたくない理由です。", America: "This is why I don't want to talk to him now.", check: 0 },
    { Japan: "私のおじには息子が2人いて、2人とも医者である。", America: "My uncle has two sons, who are doctors.", check: 0 },
    { Japan: "7時に夕食を食べ始めたが、そのときに電話が鳴った。", America: "I began to eat dinner at seven, when the phone rang.", check: 0 },
    { Japan: "私はケビンがしているのと同じような腕時計をしている。", America: "I wear the same kind of watch as Kevin wears.", check: 0 },
    { Japan: "ジョナサンはサムのようなすぐれたミュージシャンだ。", America: "Jonathan is such a good musician as Sam is.", check: 0 },
    { Japan: "好きなことなら何でもやってみなさい。", America: "Try whatever you like.", check: 0 },
    { Japan: "何が起ころうともあなたを手助けします。", America: "Whatever happens, I will help you.", check: 0 },
    { Japan: "すべての子どもが果物や甘い物が好きだというわけではない。", America: "Not all children like fruits and sweets.", check: 0 },
    { Japan: "彼は誰に対してもいつも公平というわけではない。", America: "He is not always fair to everybody.", check: 0 },
    { Japan: "彼のテスト結果はまったく満足のいくものではなかった。", America: "His test result was far from satisfactory.", check: 0 },
    { Japan: "彼らは会うと必ず他人の噂話をする。", America: "They never meet without talking about other people.", check: 0 },
    { Japan: "彼は冗談を最も言いそうにない人だ。", America: "He is the last person to tell a joke.", check: 0 },
    { Japan: "私はむしろ出かけたい。", America: "I would rather go out.", check: 0 },
    { Japan: "眠っている赤ん坊を起こさないほうがいい。", America: "You had better not wake up the sleeping baby.", check: 0 },
    { Japan: "君の問題を私に話してしまうほうがいいよ。", America: "You might as well tell me your problems.", check: 0 },
    { Japan: "昔は月に2度は映画を見に行ったものだ。", America: "I used to go to the movies twice a month.", check: 0 },
    { Japan: "私たちはここで彼女を待ちさえすればいいのだ。", America: "We only have to wait for her here.", check: 0 },
    { Japan: "今日中に宿題を終わらせる必要がある。", America: "It is necessary that I should do my homework by tonight.", check: 0 },
    { Japan: "サムは野球場までバスで行こうと提案した。", America: "Sam suggested we should take a bus to the ballpark.", check: 0 },
    { Japan: "傘が見当たらない。どこかに置き忘れたに違いない。", America: "I can't find my umbrella. I must have left it somewhere.", check: 0 },
    { Japan: "君はお金をためておくべきだったのに。", America: "You should have saved your money.", check: 0 },
    { Japan: "もしもスーパーに行くなら、私はクッキーを買うだろう。", America: "If we go to the supermarket, I will buy some cookies.", check: 0 },
    { Japan: "明日晴れれば、私は洗濯をします。", America: "As long as it is sunny tomorrow, I will do the laundry.", check: 0 },
    { Japan: "明日雨が降らないかぎり、私は洗濯をします。", America: "Unless it rains tomorrow, I will do the laundry.", check: 0 },
    { Japan: "もしも僕が君の立場ならすぐに諦めるだろう。", America: "If I were in your place, I would give up soon.", check: 0 },
    { Japan: "もしもそのコンサートに行っていなかったら、僕たちはお互いに出会わなかっただろう。", America: "If I had not gone to the concert, we would not have met each other.", check: 0 },
    { Japan: "もしもエドワードに会ったらよろしく伝えてください。", America: "If you should see Edward, please say hello for me.", check: 0 },
    { Japan: "もしも私が億万長者になったら、私は世界一周の旅に出かけるだろう。", America: "If I were to become a millionaire, I would go on a trip around the world.", check: 0 },
    { Japan: "もしも水がなかったら、どんな生物も地球上で生きていけないだろう。", America: "If it were not for water, no living things could live on the earth.", check: 0 },
    { Japan: "もしも君の援助がなかったら、僕は試験に合格していなかっただろう。", America: "If it had not been for your help, I would not have passed the test.", check: 0 },
    { Japan: "この問題の答えがわかればなあ。", America: "I wish I knew the answer to this question.", check: 0 },
    { Japan: "そのとき彼女に話しかけていたらなあ。", America: "I wish I had spoken to her then.", check: 0 },
    { Japan: "まるで幽霊でも見ているような顔つきだね。", America: "You look as if you saw a ghost.", check: 0 },
    { Japan: "彼はまるでそこに行ったかのように話した。", America: "He talked as if he had gone there.", check: 0 },
    { Japan: "熟練した整備士ならばエンジンの異変に気づくだろう。", America: "A skillful mechanic would notice the strange sound in the engine.", check: 0 },
    { Japan: "新聞を毎日読みなさい、そうすれば速く読めるようになるだろう。", America: "Read the newspaper every day, and you will be a fast reader.", check: 0 },
    { Japan: "寝る前に歯を磨きなさい、さもないと虫歯になるだろう。", America: "Brush your teeth before you go to bed, or you'll get a cavity.", check: 0 },
    { Japan: "君かケリーのどちらかが学校の演劇で主役を演じることになる。", America: "Either you or Kelly is going to play a leading part in the school play.", check: 0 },
    { Japan: "アシュリーも私もパーティーには行かないつもりだ。", America: "Neither Ashley nor I am going to the party.", check: 0 },
    { Japan: "私がした間違いは、つづりのミスではなく、文法のミスだった。", America: "The mistake I made was not a spelling error but a grammatical one.", check: 0 },
    { Japan: "彼は小説家であるだけでなくピアニストでもある。", America: "He is not only a novelist but also a pianist.", check: 0 },
    { Japan: "メアリーはとても疲れていたので、いつも通りに6時に起きられなかった。", America: "Mary was so tired that she could not get up at six as usual.", check: 0 },
    { Japan: "彼女はとても上手な歌手なので、彼女のコンサートはいつも満員である。", America: "She is such a good singer that her concerts are always full.", check: 0 },
    { Japan: "一番列車に乗れるようにいつもより早く起きた。", America: "I got up earlier than usual so that I could take the first train.", check: 0 },
    { Japan: "彼は寝過ごした、そのため朝の練習に参加できなかった。", America: "He overslept, so that he was not able to join the morning practice.", check: 0 },
    { Japan: "テリーが雑誌のモデルとして見出されたというのは本当のことである。", America: "It is true that Terry was discovered as a magazine model.", check: 0 },
    { Japan: "実は姉が来月赤ん坊を出産するのです。", America: "The fact is that my elder sister will have a baby next month.", check: 0 },
    { Japan: "エライザが油絵を学ぶためにフランスに行くことは知っている。", America: "I know that Eliza will go to France to study oil painting.", check: 0 },
    { Japan: "テッドは学校の規則を守るという点で良い生徒である。", America: "Ted is good student in that he follows the rules of his school.", check: 0 },
    { Japan: "私はボランティア活動をするというあなたの考えに賛成です。", America: "I agree with your idea that we should do a volunteer activity.", check: 0 },
    { Japan: "雨が降るといけないから傘を持っていきなさい。", America: "Take an umbrella with you just in case it rains.", check: 0 },
    { Japan: "彼が学校に来たらすぐにそのプロジェクトのことを尋ねてみよう。", America: "I'll ask him about the project as soon as he comes to school.", check: 0 },
    { Japan: "劇が始まるとすぐにハンプトン夫妻が到着した。", America: "The play had hardly started when Mr. and Mrs. Hampton arrived.", check: 0 },
    { Japan: "まもなく祖父は健康を取り戻すだろう。", America: "It will not be long before my grandfather gets back his health.", check: 0 },
    { Japan: "スーは会議が終わってからやってきた。", America: "Sue did not come until the meeting was over.", check: 0 },
    { Japan: "ジルがすしを作ったのは、日本にやってきてからだった。", America: "It was not until Jill came to Japan that she made sushi.", check: 0 },
    { Japan: "ニューヨークでハンフリー氏に最後に会ってから5年になる。", America: "It is five years since I last saw Mr.Humphrey in New York.", check: 0 },
    { Japan: "なるほどあなたの計画には多くの利点がありますが、私にはいくつか懸念があります。", America: "It is true that your plan has lots of merits, but I have some concerns about it.", check: 0 },
    { Japan: "たとえ雨が降っても私たちは釣りに行きます。", America: "We'll go fishing even if it rains.", check: 0 },
    { Japan: "あなたが賛成しようがしまいが、私たちはこの計画を進めます。", America: "Whether you agree to it or not, we will move forward with this plan.", check: 0 },
    { Japan: "どんなに時間がかかろうと、私たちはそのプロジェクトをやりとげなければならない。", America: "No matter how long it takes, we have to finish the project.", check: 0 },
    { Japan: "彼は弟のマイケルよりも人あたりはよくない。", America: "He is less friendly than his brother Michael.", check: 0 },
    { Japan: "できるだけ早くこのメールに返信してください。", America: "Please reply to this email as soon as possible.", check: 0 },
    { Japan: "彼は弁護士というよりも政治家だ。", America: "He is not so much a lawyer as a politician.", check: 0 },
    { Japan: "4月に入り次第に暖かくなってきている。", America: "April has begun and it is getting warmer and warmer.", check: 0 },
    { Japan: "一生懸命勉強すればするほど、私は賢くなる。", America: "The harder I study, the cleverer I become.", check: 0 },
    { Japan: "カーツ教授は世界で最も有名な科学者の1人だ。", America: "Prof.Kurtz is one of the most famous scientists in the world.", check: 0 },
    { Japan: "ジャスティンは私の5倍のDVDを持っている。", America: "Justin has five times as many DVDs as I have.", check: 0 },
    { Japan: "ここは日本で2番目に大きなスタジアムです。", America: "This is the second largest stadium in Japan.", check: 0 },
    { Japan: "日本のほかのどのスーパーもこのスーパーほど大きくない。", America: "No other supermarket in Japan is so big as this supermarket.", check: 0 },
    { Japan: "このショッピングモールは日本のほかのどのショッピングモールよりも大きい。", America: "This shopping mall is bigger than any other shopping mall in Japan.", check: 0 },
    { Japan: "この美術館は日本のほかのどの美術館よりも大きい。", America: "This museum is bigger than all the other museums in Japan.", check: 0 },
    { Japan: "ヒト型ロボットはもはや夢ではない。", America: "A humanoid robot is no longer a dream.", check: 0 },
    { Japan: "あなたと同様に私もこのゲームには興味がありません。", America: "I am no more interested in this game than you are.", check: 0 },
    { Japan: "どうしてそんなにうれしそうなの?", America: "What made you so happy?", check: 0 },
    { Japan: "5分歩くと図書館についた。", America: "A five-minute walk brought us to the library.", check: 0 },
    { Japan: "このジャズ音楽を聞くと若かった頃のことを思い出す。", America: "This jazz music reminds me of my younger days.", check: 0 },
    { Japan: "あなたの頑張りのおかげで私たちはスケジュール通りに仕事を終えることができた。", America: "Your hard work enabled us to complete the task on schedule.", check: 0 },
    { Japan: "エミは英語の使い手だ。", America: "Emi is a good speaker of English.", check: 0 },
    { Japan: "彼の自然に対する愛情が彼を優れた写真家にした。", America: "His love of nature made him an excellent photographer.", check: 0 },
    { Japan: "私たちの飛行機の空港への到着が遅れた。", America: "The arrival of our airplane to the airport was delayed.", check: 0 },
    { Japan: "とても疲れていたけれども、彼は小説を書き続けた。", America: "Though very tired, he kept writing his novel.", check: 0 },
    { Japan: "彼が昨夜いつ帰宅したか知ってる？", America: "Do you know when he came home last night?", check: 0 },
    { Japan: "この点に関してどちらの話し手が正しいと思いますか。", America: "Which speaker do you think is correct in regard to this point?", check: 0 },
    { Japan: "こんなにおいしい食べ物は味わったことがありません。", America: "Never have I tasted such delicious food.", check: 0 },
    { Japan: "スピーチコンテストで優勝するなんて夢にも思わなかった。", America: "Little did I dream that I would win the first prize in the speech contest.", check: 0 },
    { Japan: "どうして私に本当のことを言ってくれなかったのですか。", America: "Why on earth didn't you tell me the truth?", check: 0 },
    { Japan: "君はスワン先生を喜ばせたね。一体全体、先生に何と言ったんだい？", America: "You made Ms.Swan happy. What in the world did you say to her?", check: 0 }
]

const storage = localStorage;
let shuffledArray = [...wordList];
let quizList = []
let QuestionList = []
let missList = []

function showAlert() {
    let x = 0;
    for (let i = 0; i < wordList.length; i++) {
        if (japanese.value === wordList[i].Japan && english.value === wordList[i].America) {
            alert('既に入力されている構文カードです。');
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
        alert('内容が変更されたため、構文練習帳を終了します。');
        resetQuiz();
    }
    showList(shuffledArray);
    practiceNote()
    storage.kobun_store = JSON.stringify(wordList);
}
// addEventListener('load', function () {
if (storage.kobun_store === undefined) {
} else {
    wordList = JSON.parse(storage.kobun_store);
    shuffledArray = [...wordList];
    showList(shuffledArray);
    practiceNote()
}
// }
// );


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
        alert('内容が変更されたため、構文練習帳を終了します。');
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
resetButton.classList.add('shuffle-button');
resetButton.textContent = 'リセットする';
resetButton.addEventListener('click', function () {
    shuffledArray = [...wordList];
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、構文練習帳を終了します。');
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
    storage.kobun_store = JSON.stringify(wordList);
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
    storage.kobun_store = JSON.stringify(wordList);
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
        shuffledArray = [...wordList];
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
    shuffledArray = [...wordList];
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
    let memo1_element = document.getElementById('memo_1');//memoを呼び出している
    let memo2_element = document.getElementById('memo_2')

    memo1_element.innerHTML = '';//memoのコードの中身そのものをまっさらにする
    memo2_element.innerHTML = '';

    for (const item of List) {
        let ja_element = document.createElement('p');//p要素作る
        // ja_element.id = assignUniqueID(item.Japan);
        ja_element.classList.add('word_card');
        // ja_element.innerText = item.Japan
        // let cleanJapan = ja_element.id.replace(/\s+/g, '_');

        let cleanBase = (assignUniqueID(`${item.America}`).replace(/\s+/g, '_'));
        let cleanJapan = (`${cleanBase}-Japan`)
        let cleanAmerica = (`${cleanBase}-America`);
        ja_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn-${cleanJapan} class="btn">${item.Japan}</button>`;
        // ja_element.innerHTML = `<button contextmenu="change('${item.Japan}', '${item.America}')" id=btn>${item.Japan}</button>`
        memo1_element.prepend(ja_element);//memoにnew_elementを追加

        let eg_element = document.createElement('p');//p要素作る
        eg_element.id = assignUniqueID(item.America);
        eg_element.classList.add('word_card')
        // eg_element.innerText = item.America

        // let cleanAmerica = eg_element.id.replace(/\s+/g, '_');

        eg_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn-${cleanAmerica} class="btn">${item.America}</button>`;
        // eg_element.innerHTML = `<button contextmenu="change('${item.Japan}', '${item.America}')" id=btn>${item.America}</button>`
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
            storage.kobun_store = JSON.stringify(wordList);
            break;
        }
    }
}


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


function practiceNote() {
    const Text = document.getElementById('text');
    Text.textContent = '練習ノートには単語練習帳で間違えた問題が表示されます。'
    Text.style.display = 'none';
    const container = document.getElementById('container');
    const template = document.getElementById('flame-template').content;
    if (missList.length == 0) {
        container.style.display = 'none';
        Text.style.display = 'block';
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
