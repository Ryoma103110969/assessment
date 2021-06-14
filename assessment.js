'use strict';
const userNameInput =document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');
/**
 * @param{HTMLElement}element HTMLの要素
 * 
 */
function removeAllChildren(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}
assessmentButton.onclick=()　=> {
    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }

//診断結果エリアの作成
removeAllChildren(resultDivided);
const header = document.createElement('h3');
header.innerText='診断結果';
resultDivided.appendChild(header);

const paragraph = document.createElement('p');
const result =assessment(userName); 
paragraph.innerText= result;
resultDivided.appendChild(paragraph);

//ツイートエリアの作成
removeAllChildren(tweetDivided);
const anchor = document.createElement('a');
const hrefValue =
'https://twitter.com/intent/tweet?button_hashtag='
+ encodeURIComponent('テメエのいいところ卍')+'&ref_src=twsrc%5Etfw';
anchor.setAttribute('href',hrefValue);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute('data-text',result);
anchor.innerText ='Tweet #テメエのいい所教えてやるわ卍';
tweetDivided.appendChild(anchor);

//widgets.jsの設定
const script=document.createElement('script');
script.setAttribute('src','https://pratform.twitter.com/widgets.js');
tweetDivided.appendChild(script);
};

const answers=[
'{userName}のいい所は顔です。{userName}の顔面は世界を救います。',
'{userName}のいい所は骨格です。{userName}の骨格は恐竜博物館に展示したいレベルです。',
'{userName}のいい所は泣き顔です。{userName}の泣き顔にはコワモテ裁判長もお手上げです。',
'{userName}のいい所は体毛です。{userName}の体毛は運命を結ぶ赤い毛です。',
'{userName}のいい所は排便量です。{userName}のクソは食糧危機から人々を守ります。',
'{userName}のいい所は素直さです。{userName}の純粋な心は世界を光で包みます。',
'{userName}のいい所は清楚さです。{userName}の純情さは世の童貞達の希望の光です。',
'{userName}のいい所はオカンです。{userName}の母は友達界隈で有名な美熟女です。',
'{userName}のいい所はちんぽです。{userName}のシンボルは自由の女神を凌ぎます。',
'{userName}のいい所はありません。{userName}は人生リセマラしたほうがいいよ。',
];
/**
 * 名前の文字列を渡すと、診断結果を返す関数
 * @param {string} userName ユーザーの名前 
 * @return {string}診断結果
 */

function assessment(userName){
    //全文字コード番号を取得してそれを足し合わせる
    let sumOfCharCode =0;
   for(let i=0; i<userName.length;i++){
       sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
   }
//文字コード番号の合計を解答で割って添字の数値を求める
   const index=sumOfCharCode % answers.length;
   let  result=answers[index];

   result=result.replaceAll('{userName}',userName);
   return result;
}


