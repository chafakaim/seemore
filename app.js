let images=document.querySelectorAll('.container img');

images.forEach(element => {
    element.addEventListener('click',function(e){
        let src=e.target.getAttribute('src');
        console.log('click')
        let content=document.createElement('div')
        content.className='content';
        let div=document.createElement('div')
        div.className='box';
        let image=document.createElement('img');
        image.src=src;
         
        div.appendChild(image);
        content.appendChild(div);
        document.body.appendChild(content);
        
    })
    
});
document.body.addEventListener('click',function(e){
   if(e.target.className === 'content'){
       e.target.addEventListener('click',function(e){
           e.stopPropagation();
           console.log('click in the content');
           e.target.classList.add('fade');
           e.target.addEventListener('transitionend',function(){
               e.target.parentNode.removeChild(e.target);
           })

       })
   }
})