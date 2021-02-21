'use strict';
const object1 = {"_id":{"$oid":"5fc68a207884ff001c9f6d8a"},"skipped":["5fc0e1db8d0c10001ccf1921","5fc7ef52d105e3324035bafc","5fc916c19c6616001c4942e5","5facd3f213ed3c001c823bb6","5fd249d6281305001c008b8a","5fd24a02281305001c008b8b","5fe72b7d6a4540001c19fd98"],"category":"POLITICS","type":"RADIO","question":"מי אשם בהליכה לבחירות? ","image":"https://firebasestorage.googleapis.com/v0/b/myvote-f7bd4.appspot.com/o/polls%2Fold%2Fimage%20(5).jpg?alt=media&token=13b2f45d-0f98-43f1-9940-6b72f664709d","answers":[{"id":"1","text":"ביבי נתניהו"},{"id":"2","text":"בני גנץ"}],"location":{"mocked":false,"timestamp":1606847004566,"coords":{"speed":0,"heading":0,"accuracy":600,"altitude":0,"longitude":34.8991393,"latitude":32.1825359}},"status":"DONE","result":[{"percent":"78.57142857142857","count":33,"answerId":"1"},{"percent":"21.428571428571427","count":9,"answerId":"2"}],"maxAnswers":1000,"createdBy":{"$oid":"5fc5d251921b3e001c2c2fe9"},"userAnsewers":[{"answers":["1"],"userId":"5fc5d251921b3e001c2c2fe9"},{"answers":["1"],"userId":"5fc0e1db8d0c10001ccf1921"},{"answers":["1"],"userId":"5fc7ef52d105e3324035bafc"},{"answers":["1"],"userId":"5f89783f53d2b2001c6755a5"},{"answers":["2"],"userId":"5fc927c09c6616001c4942ea"},{"answers":["1"],"userId":"5fc93a039c6616001c49454c"},{"answers":["1"],"userId":"5fc9fb065d128b001c428c66"},{"answers":["1"],"userId":"5fa8e17398e312001c42c8e8"},{"answers":["1"],"userId":"5f84bdce80872c4c0861e159"},{"answers":["1"],"userId":"5fcf36173f5c9b001c491ef7"},{"answers":["1"],"userId":"5fcf412201478c001c126f2f"},{"answers":["2"],"userId":"5f8b25e8c91b07001c74fdcd"},{"answers":["1"],"userId":"5fd0d80de45e1c001c662e09"},{"answers":["1"],"userId":"5fd115b97d354e001c0d1856"},{"answers":["1"],"userId":"5fd1ec8287102b001c06333e"},{"answers":["1"],"userId":"5fd2459c281305001c008b88"},{"answers":["1"],"userId":"5fc9410e9c6616001c49455f"},{"answers":["2"],"userId":"5fd5517b25338c001cc075dd"},{"answers":["2"],"userId":"5fd558f025338c001cc075e2"},{"answers":["1"],"userId":"5fd2b25116c108001c2e8521"},{"answers":["1"],"userId":"5fd292f916c108001c2e8518"},{"answers":["1"],"userId":"5fdb0083560fd6001cf7fafa"},{"answers":["2"],"userId":"5fdb78b1560fd6001cf7fafd"},{"answers":["1"],"userId":"5fdc0c29b26064001ca4f947"},{"answers":["1"],"userId":"5fdc0d9fb26064001ca4f948"},{"answers":["1"],"userId":"5fdd42e2a0e059001c1a285d"},{"answers":["1"],"userId":"5fe0785e039937001c764a51"},{"answers":["1"],"userId":"5fe07e35039937001c764a53"},{"answers":["1"],"userId":"5fdddb0da0e059001c1a288b"},{"answers":["1"],"userId":"5fe2b39f9f0825001c0875cc"},{"answers":["2"],"userId":"5fe2b59e9f0825001c0875d1"},{"answers":["2"],"userId":"5fe4d4aa5e0642001cf83357"},{"answers":["1"],"userId":"5fe54f8ae027d3001c1c86e4"},{"answers":["1"],"userId":"5fe633b36a4540001c19fd90"},{"answers":["2"],"userId":"5fcf21951e8794001c5d9993"},{"answers":["1"],"userId":"5feb08ed93c33d001cbea81e"},{"answers":["2"],"userId":"5fec33cbd6555f001c9e8b9a"},{"answers":["1"],"userId":"5feccd99b45a4d001c77ae6e"},{"answers":["1"],"userId":"5fecd5d35f3d1a001cfff725"},{"answers":["1"],"userId":"5fecdd40c203fd001cc03b3c"},{"answers":["1"],"userId":"5fecf687a26fca001cab45b0"},{"answers":["1"],"userId":"5fee01d9a26fca001cab45bb"}],"createdAt":{"$date":"2020-12-01T18:23:28.209Z"},"updatedAt":{"$date":"2020-12-31T19:33:55.381Z"},"__v":0};
// console.log(object1.result);

const seker = document.querySelector('.seker');
const coteretSeker = document.querySelector('.coteret_seker');
const status = document.querySelector('.status');
const question = document.querySelector('.question');
const img = document.querySelector('.img');
const answers = document.querySelector('.answers');
const answer = document.querySelector('.answer');
const voteCount = document.querySelector('.vote_count');
const votePercent = document.querySelector('.vote_percent');
const sekerDetails = document.querySelector('.seker_details');
const category = document.querySelector('.category');
// const  = document.querySelector('.');


 function renderPoll(object){

    status.textContent = object.status;
    question.textContent = object.question;
    category.textContent = object.category;
    // img.src = object.image;
    renderAnswer(object)
}

function renderAnswer(object){
    answers.innerHTML = '';
    object.result.forEach(function(ans, i){
        const answer =`<div class="answer" id="answer${ans['answerId']}">
        <p class="answer_text" >${object.answers[i]['text']}</p>
        <p class="vote_count" >${ans['count']}</p>
        <p class="vote_percent" >${ans['percent']}</p>
        </div>`;
        answers.insertAdjacentHTML('beforeend',answer);
    });
}

renderPoll(object1)






/*
const addTAX = (rate, value) => console.log( value + rate * value);
const addTAX23 = addTAX.bind(null, 0.23);
addTAX23(100)

const add = (rate ) => (value) => console.log( value + rate * value);
const add45 = add(0.45);
console.log(add);
add45(100);
console.dir(add45);
*/