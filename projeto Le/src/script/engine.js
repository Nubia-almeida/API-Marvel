const timestamp = "1713124329";
const apiKey = "7ce8567fe0349f9fcf45a742b34d6537"; 
const md5 = "c8683ed431b03fc27238f791f4b85f7f";

fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=6`)

.then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHeroi= document.querySelector('.lista');
    const thumbnail=document.querySelector('.thumbnail');

    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
        const nameHero = element.name;
        const description = element.description;

        createDivHeroi(srcImage, nameHero, description, divHeroi);

        createThumbnail(srcImage, nameHero,thumbnail)
    });

    console.log(jsonParsed);
});

function createDivHeroi(srcImage, nameHero,description, divToAppend){
    const divPai= document.createElement('div');
    const divFilho= document.createElement('div');
    const textName= document.createElement('h1');
    const img= document.createElement('img');
    const btn = document.createElement("button")
    const botao = document.createElement("button")
    const tagP = document.createElement("p")
    
    textName.textContent = nameHero
    tagP.textContent = description
    img.src = srcImage
    btn.innerHTML = "Subscribe"
    botao.innerHTML = "See More"

 
    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divFilho.appendChild(tagP)
    divFilho.appendChild(btn)
    divFilho.appendChild(botao)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)
    
    divPai.classList.add("personagem");
}

function createThumbnail(srcImage, nameHero, divToAppend){
    const divPai= document.createElement('div');
    const divFilho= document.createElement('div');
    const textName= document.createElement('h1');
    const img= document.createElement('img');
    
    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)
    
    divPai.classList.add("slides");
};

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let carrossel = document.querySelector('.lista')
let itemDomCarrossel = carrossel.querySelector('.personagem')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItem = thumbnail.querySelector('.slides')

nextBtn.onclick = function(){
    moveSlider('next')
}

prevBtn.onclick = function(){
    moveSlider('prev')
}

function moveSlider(direction){
    let itemDomCarrossel = carrossel.querySelector('.personagem')

    if(direction === 'next'){
        let itens = document.querySelectorAll('.personagem')
        document.querySelector('.lista').appendChild(itens[0])
        let thumbnail = document.querySelectorAll('.slides')
        document.querySelector('.thumbnail').appendChild(thumbnail[0])
        carrossel.classList.add('next')
    }else{
        let itens = document.querySelectorAll('.personagem')
        document.querySelector('.lista').prepend(itens[itens.length-1])
        let thumbnail = document.querySelectorAll('.slides')
        document.querySelector('.thumbnail').prepend(thumbnail[thumbnail.length-1])
        carrossel.classList.add('prev')
    }

carrossel.addEventListener('animationed', function(){
    if(direction === 'next'){
        carrossel.classList.remove('next')
    }else{
        carrossel.classList.remove('prev')
    }
}, {once:true})
};
