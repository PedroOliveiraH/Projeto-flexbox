let adicionar = document.getElementById('add');

adicionar.addEventListener('click', function() {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    document.getElementById('cards').appendChild(divCard);
});

document.getElementById('sub').addEventListener('click', function(){
    let divsCard = document.querySelectorAll('.card');
    if(divsCard.length > 0){
        divsCard[0].remove();
    }
})