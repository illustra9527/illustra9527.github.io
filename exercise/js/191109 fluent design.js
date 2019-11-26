let toggleMenu = document.querySelector('.toggleMenu')
let toggleBtn = document.querySelector('.toggleMenuBtn')


toggleBtn.onclick = function(){
    toggleMenu.classList.toggle('active')
}

let section_4_window = document.querySelector('.section_4_content_window')

function section_4_window_move(){
    const window_position = (section_4_window.offsetTop) + (section_4_window.clientHeight / 2);
    
    if (window.screenY > window_position){
        section_4_window.classList.add('visible')
    }else{
        section_4_window.classList.remove('visible')
    }
}

window.addEventListener('scroll', section_4_window_move);


