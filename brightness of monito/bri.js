let container=document.querySelector('.container')
let inputRange=document.querySelector('input')


inputRange.addEventListener('change',function(event){
   console.log( event.target.value);
   container.style.filter='brightness('+event.target.value+'%)'
})