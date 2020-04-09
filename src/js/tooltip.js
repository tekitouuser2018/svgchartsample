function tooltip(){
    let targetBack = document.querySelector(".tooltipBack");
    let targetText = document.querySelector(".tooltipText");

    targetBack.style.visibility = 'visible';
    targetBack.style.opacity = 0.5;
    targetText.style.visibility = 'visible';
    targetText.style.opacity = 1;

}
document.querySelector(".tooltip").addEventListener('mouseover',tooltip);

function tooltipOut(){
    let targetBack = document.querySelector(".tooltipBack");
    let targetText = document.querySelector(".tooltipText");
    
    targetBack.style.visibility = 'none';
    targetBack.style.opacity = 0;
    targetText.style.visibility = 'none';
    targetText.style.opacity = 0;

}
document.querySelector(".tooltip").addEventListener('mouseout',tooltipOut);