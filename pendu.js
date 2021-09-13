function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




function wordModified() {
    let indice = getRandomInteger(0, words_list.length);
    let word = words_list[indice];
    word = word.replace(/[à|â|ä]/g, "a");
    word = word.replace(/[é|è|ê|ë]/g, "e");
    word = word.replace(/[ï|î]/g, "i");
    word = word.replace(/[ö|ô]/g, "o");
    word = word.replace(/[ù|û|ü]/g, "u");
    word = word.replace(/ÿ/g, "y");
    word = word.replace(/œ/g, "oe");
    word = word.replace(/æ/g, "ae");
    word = word.replace(/ç/g, "c");

    // for (let i = 0; i < word.length; i++) {
    //     if (word[i] == "â" || word[i] == "à" || word[i] == "ä") {
    //         word[i] = "a";
    //     }
    //     if (word[i] == "é" || word[i] == "è" || word[i] == "ê" || word[i] == "ë" || word[i] == "ê") {
    //         word[i] = "e";
    //     }
    //     if (word[i] == "ù" || word[i] == "û" || word[i] == "ü") {
    //         word[i] = "u";
    //     }
    //     if (word[i] == "î" || word[i] == "ï") {
    //         word[i] = "i";
    //     }
    //     if (word[i] == "ô" || word[i] == "ö") {
    //         word[i] = "o";
    //     }
    // }
    console.log(word);
    return word;
}

let button = document.querySelectorAll('.button');


for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', insert_lettre);

}


let liste; // = [];
let word = wordModified();
liste = document.getElementById("word");

for (let i = 0; i < word.length; i++) {
    //liste.innerHTML += " _";
    let span = document.createElement('span');
    span.classList.add('letter');
    span.innerText = "_";
    document.querySelector("#word").append(span);
    span.id = "span" + i;
}


let wrong = 0;

function insert_lettre(event) {
    let a = 0;

    let value_button = event.target.innerText;
    //liste.innerText += value_button;
    for (let i = 0; i < word.length; i++) {
        let value_button1 = value_button.toLowerCase();
        if (value_button1 == word[i]) {
            a++;
            let indice = i;
            let span = document.getElementById("span" + indice);
            value_button1 = value_button1.toUpperCase();
            span.innerHTML = value_button1;
            event.target.classList.add('bg_btn');
            event.target.disabled = true;
        }
    }
    if (a == 0) {
        wrong++;
        event.target.classList.add('bg_btn');
        event.target.disabled = true;
        if (wrong == 1) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 003.png" alt="">';
        }
        if (wrong == 2) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 005.png" alt="">';
        }
        if (wrong == 3) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 007.png" alt="">';
        }
        if (wrong == 4) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 009.png" alt="">';
        }
        if (wrong == 5) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 010.png" alt="">';
        }
        if (wrong == 6) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 012.png" alt="">';
        }
        if (wrong == 7) {

            let image1 = document.querySelector('#dessin');
            image1.innerHTML = '<img src="./images/Image 014.png" alt="">';
        }
        if (wrong == 8) {
           
            word = word.toUpperCase();
            alert("perdu! le mot était : " + word);
        }
    }
}

function refreshPage() {
    window.location.reload();
}