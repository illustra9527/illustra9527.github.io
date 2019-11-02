
// declares of tab
// v4 優化： Using jQuery to replace for loop function
let tabs = document.querySelectorAll('.tab')
let contents = document.querySelectorAll('.content')


/*  for (let index=0; index < tabs.length; index++){
    const tab = tabs[index]
    const content = contents[index]
    tab.onclick = function(){
        remove_active()
        tab.classList.add('active')
        content.classList.add('active')
    }
}  */

$('.tab').click(function(){
    remove_active();
    this.classList.add('active');
    const content = contents[$(this).index()];
    content.classList.add('active');
    
});

// declares of photos
let photo = document.querySelector('#photo')
let photo_A = 'https://cdn.pixabay.com/photo/2016/01/19/13/58/pollution-1148841_1280.jpg'
let photo_B = 'https://cdn.pixabay.com/photo/2018/04/04/11/39/dead-bird-3289550_1280.jpg'
let switch_btn = document.querySelector('#switch_btn')


// function of tabs
// v4 優化: Using for of and forEach replace for loop function

function remove_active(){
    for (const tab_remove of tabs) {
        tab_remove.classList.remove('active')
    }
    contents.forEach(content_remove => {
        content_remove.classList.remove('active')
    });
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
