// declares of tabs 
let tab1 = document.querySelector('#tab1')
let tab2 = document.querySelector('#tab2')
let tab3 = document.querySelector('#tab3')
let content1 = document.querySelector('#content1')
let content2 = document.querySelector('#content2')
let content3 = document.querySelector('#content3')

// declares of photos
let photo = document.querySelector('#photo')
let photo_A = 'https://cdn.pixabay.com/photo/2016/01/19/13/58/pollution-1148841_1280.jpg'
let photo_B = 'https://cdn.pixabay.com/photo/2018/04/04/11/39/dead-bird-3289550_1280.jpg'
let switch_btn = document.querySelector('#switch_btn')





// function of tabs
tab1.onclick = function(){
    tab1.classList.remove('active')
    tab2.classList.remove('active')
    tab3.classList.remove('active')
    content1.classList.remove('active')
    content2.classList.remove('active')
    content3.classList.remove('active')

    tab1.classList.add('active')
    content1.classList.add('active')
}
tab2.onclick = function(){
    tab1.classList.remove('active')
    tab2.classList.remove('active')
    tab3.classList.remove('active')
    content1.classList.remove('active')
    content2.classList.remove('active')
    content3.classList.remove('active')

    tab2.classList.add('active')
    content2.classList.add('active')
}
tab3.onclick = function(){
    tab1.classList.remove('active')
    tab2.classList.remove('active')
    tab3.classList.remove('active')
    content1.classList.remove('active')
    content2.classList.remove('active')
    content3.classList.remove('active')

    tab3.classList.add('active')
    content3.classList.add('active')
}

// function of photos
switch_btn.onclick = function(){
    let photoSrc = photo.getAttribute('src')
    if (photoSrc == photo_A){
        photo.setAttribute('src', photo_B)
    }else{
        photo.setAttribute('src', photo_A)
    }     
    
}    
