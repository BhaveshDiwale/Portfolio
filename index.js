document.getElementById('cover').style.display = 'flex'
document.getElementsByClassName('main-body')[0].style.display='none';

function handleLoad(){
    
    setTimeout(()=>{
        document.getElementById('cover').style.display = 'none';
        document.getElementsByClassName('main-body')[0].style.display='block';
    },2000);
   
    
}

