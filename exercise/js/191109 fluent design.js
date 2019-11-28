let toggleMenu = document.querySelector('.toggleMenu')
let toggleBtn = document.querySelector('.toggleMenuBtn')


toggleBtn.onclick = function(){
    toggleMenu.classList.toggle('active')
}

$('.toggleMenuBtn').on('click', function(){
    $('.top_bar').toggleClass('active');
    $('.mid_bar').toggleClass('active');
    $('.bottom_bar').toggleClass('active');

});

/*  漢堡標動畫
    1. 綁定一個案件事件，讓'三個'同時觸發
    2. toggle 一直無法抓到故用toggle成功
    3. 按鈕動畫在移除class時，必須‘恢復原狀’，要把有更動的class屬性在原class屬性把預設加回去。
 */


/*    原生JS 抓滾動事件

1. 找到偵測點
2. 找到觸發對象
3. 得到目前滾軸的高度 = document.documentElement.scrollTop;
4. if 判斷式
5. 記得呼叫函式

*/

//section_4_move

let section_4_window = document.querySelector('#section_4')

let section_4_img = document.querySelector('.section_4_content_window')

function section_4_window_move(){
    
    const window_position = section_4_window.offsetTop - (window.screen.height / 4 * 3);
    let scrollH = document.documentElement.scrollTop;


    if (scrollH >= window_position){
        section_4_img.classList.add('visible')
    }else{
        section_4_img.classList.remove('visible')
    }
}

window.addEventListener('scroll',function(){
    section_4_window_move()
    section_4_ball_move()
    section_7_line_move()
    section_7_h2_move()

});


let section_4_ball = document.querySelector('.section_4_content_ball');

function section_4_ball_move(){
    const window_position = section_4_window.offsetTop - (window.screen.height / 2);
    let scrollH = document.documentElement.scrollTop;

    if (scrollH >= window_position){
        section_4_ball.classList.add('visible')
    }else{
        section_4_ball.classList.remove('visible')
    }
};

let section_4_line = document.querySelector('.section_4_content_line');

window.addEventListener('scroll', function(){
    const window_position = section_4_window.offsetTop + (window.screen.height / 4 * 3);

    let scrollH = document.documentElement.scrollTop;

    if (scrollH >= window_position){
        section_4_line.classList.add('visible')
    }else{
        section_4_line.classList.remove('visible')
    }
});

//section_6_move

let section_6_position = document.querySelector('#section_6')
let img_move = document.querySelector('.section_6_content_img')

window.addEventListener('scroll', function(){
    const window_position = section_6_position.offsetTop -(window.screen.height / 2);
    let scrollH = document.documentElement.scrollTop;

    if( scrollH >= window_position){
        img_move.classList.add('visible')
    }else{
        img_move.classList.remove('visible')
    }

});

//section_7_move

let section_7_position = document.querySelector('#section_7')
let section_7_line = document.querySelector('.section_7_line')
function section_7_line_move(){
    const window_position = section_7_position.offsetTop + (window.screen.height / 4);

    let scrollH = document.documentElement.scrollTop;

    if (scrollH >= window_position){
        section_7_line.classList.add('visible')
    }else{
        section_7_line.classList.remove('visible')
    }
}

let section_7_h2_1 = document.querySelector('.section_7_contents')

function section_7_h2_move(){
    const window_position = section_7_position.offsetTop - (window.screen.height / 4 * 3 );

    let scrollH = document.documentElement.scrollTop;

    if (scrollH >= window_position){    
        section_7_h2_1.classList.add('visible')
    }else{
        section_7_h2_1.classList.remove('visible')
    }

}

//section_9_move

 //觸發偵測點 1 ：section_9 出現位置
let section_9_dino = document.querySelector('.section_9_img_dino');
let section_9_white_rectangle = document.querySelector('.section_9_img_right_whiteRectangle');

//觸發偵測點 2 ：section_9 又 1/4 出現位置
let section_9_line = document.querySelector('.section_9_img_leftLine')

//觸發偵測點 3 ：section_9 又 1/2 出現位置
let section_9_purple_rectangle = document.querySelector('.section_9_img_right_purpleRectangle');

//觸發偵測點 4 ：section_10 出現位置
let section_9_rhombus = document.querySelector('.section_9_img_right_rhombus');

//section_9 位置
let section_9_position = document.querySelector('#section_9');

window.addEventListener('scroll', function(){

    //偵測點1
    // section_9 - 目前螢幕高度
    const window_position_1 = section_9_position.offsetTop - window.screen.height;

    //偵測點2
    // section_9 - 目前螢幕高度的 3/4
    const window_position_2 = section_9_position.offsetTop - (window.screen.height / 4 * 3);

    //偵測點3
    // section_9 - 目前螢幕高度 /2 
    const window_position_3 = section_9_position.offsetTop - (window.screen.height / 2);

    //偵測點4
    // section_9 被偵測到時出現
    const window_position_4 = section_9_position.offsetTop;
    

    let scrollH = document.documentElement.scrollTop;
    
    // dino and white rectangle moving function
    if ( scrollH >= window_position_1){
        section_9_dino.classList.add('visible');
        section_9_white_rectangle.classList.add('visible')
    }else{
        section_9_dino.classList.remove('visible');
        section_9_white_rectangle.classList.remove('visible')
    }
    
    // white line moving function
    if (scrollH >= window_position_2){
        section_9_line.classList.add('visible')
    }else{
        section_9_line.classList.remove('visible')
    }

    // purple rectangle moving function
    if (scrollH >= window_position_3){
        section_9_purple_rectangle.classList.add('visible')
    }else{
        section_9_purple_rectangle.classList.remove('visible')
    }

    // white rhombus moving function
    if (scrollH >= window_position_4){
        section_9_rhombus.classList.add('visible')
    }else{
        section_9_rhombus.classList.remove('visible')
    }

});


$(window).on('scroll', function(){
    
    $('.section_7_plane_solid').toggleClass('active')
})