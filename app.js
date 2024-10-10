console.log("ColorScheme Project")

// First grey color one

const first=document.querySelector('#grey');
first.addEventListener('click', function(){
    document.getElementsByClassName('Main')[0].style.backgroundColor='grey';
})

// Second color white

const second=document.querySelector('#white');
second.addEventListener('click' , function(){
    document.getElementsByClassName('Main')[0].style.backgroundColor='pink';
})

// Third color blue

const third=document.querySelector('#blue');
third.addEventListener('click', function(){
    document.getElementsByClassName('Main')[0].style.backgroundColor='blue';
})

// Fourth color yellow

const fourth=document.querySelector('#yellow');
fourth.addEventListener('click',function(){
    document.getElementsByClassName('Main')[0].style.backgroundColor='yellow';
})



