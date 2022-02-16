function ageInDays(){
    let birthYear = prompt('What year u were born?');
    let todaysYear = 2021;
    let result = (todaysYear-birthYear)*365;
    //console.log(result);
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' +result+ ' days old');
    h1.setAttribute('id','result');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('result').remove();
}

function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/140.gif";
    div.appendChild(image);
    
}


