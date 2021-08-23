// querySelector = hamgiin tutuund taarsan element
// querySelectorAll => DDL ( nextElementSibling )
// getElementsByClassName => List
// getElementById => gantshan el songono

// DOM - Document oriented Model

// const tags = document.querySelector('.pTag');

// background-color => backgroundColor
// line-through
const imgContainer = document.querySelector('.imgContainer');
const modal = document.querySelector('.modal');

let imgURL = '';

imgContainer.onclick = function(){
    modal.classList.remove('hidden');
    imgURL = imgContainer.style.backgroundImage.split('"')[1];

    modal.children[0].children[1].children[0].src = imgURL
}

document.addEventListener('click', e => {
    if(e.target.id === 'close'){
        modal.classList.add('hidden')
    }

    if(e.target.classList.contains('modal')){
        modal.classList.add('hidden')
    }
})