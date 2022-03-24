let images=document.querySelectorAll('.container img');

images.forEach(element => {
    element.addEventListener('click',function(e){
        let src=e.target.getAttribute('src');
        console.log('click')
        let div=document.createElement('div')
        div.className='box';
        let image=document.createElement('img');
        image.src=src;

        div.appendChild(image);
        document.body.appendChild(div);
        
    })
    
});