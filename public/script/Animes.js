let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
showSlider('next');
}

prevDom.onclick = function(){
showSlider('prev')}

let timeRunning = 3000;
let timeAutoNext = 15000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
let itemSlider = document.querySelectorAll('.carousel .list .item');
let itemThumbail = document.querySelectorAll('.carousel .thumbnail .item');

if(type === 'next'){
listItemDom.appendChild(itemSlider[0]);
thumbnailDom.appendChild(itemThumbail[0]);
carouselDom.classList.add('next');
}else{
let positionlastItem = itemSlider.length - 1;
listItemDom.prepend(itemSlider[positionlastItem]);
thumbnailDom.prepend(itemThumbail[positionlastItem]);
carouselDom.classList.add('prev');

}

clearTimeout(runTimeOut);
runTimeOut  = setTimeout(()=>{
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');


},timeRunning);

clearTimeout(runAutoRun);
runAutoRun = setTimeout(()=>{
nextDom.click();
}, timeAutoNext); 
}

