

function setBackGround(){
    var posts=document.getElementById('posts')
    posts.style.backgroundImage='url('+event.target.src+')'
}


function textcolor(){
    var text=document.getElementById('text-area')
    text.style.color=event.target.value
}

function changeText(){
    var text=document.getElementById('text-area')
    var type =event.target.innerText

    if(type === 'B'){
       if( text.style.fontWeight === "bold"){
        text.style.fontWeight='normal'
        event.target.style.fontWeight=100
       }else{
        text.style.fontWeight='bold'
        event.target.style.fontWeight=1200
       }
    }


     if(type === 'I'){
        if( text.style.fontStyle === "italic"){
         text.style.fontStyle='normal'
         event.target.style.fontWeight=100
        }else{
         text.style.fontStyle='italic'
         event.target.style.fontWeight=1200
        }
     }  
   
     if(type === 'U'){
        if( text.style.textDecoration === "underline"){
         text.style.textDecoration='none'
         event.target.style.fontWeight=100
        //  console.log( text.style.textDecoration)
        }else{
         text.style.textDecoration='underline'
         event.target.style.fontWeight=1200
        }
     }  
   
}   


function changeFontSize(){
    var text= document.getElementById('text-area')
    var fontsize=document.getElementById('fontsize')
    var size = event.target.value
    fontsize.innerHTML='20px'
    text.style.fontSize=size+'px'
}


function capital(){

    var text= document.getElementById('text-area');
    var capita =text.value.toUpperCase();
    var capitallow =text.value.toLowerCase();
    var capatial= document.getElementById('capatial')
    if (capatial.innerHTML==='Aa'){
        if(text.value===capitallow){
            text.value=capita;
        }else{
            
            text.value=capitallow;
        }
    }
    
   
}


function alinmentleft(){
    var text=document.getElementById('text-area')
    text.style.textAlign='left'

}


function alinmentcenter(){
    var text=document.getElementById('text-area')
    text.style.textAlign='center'

}

function alinmentright(){
    var text=document.getElementById('text-area')
    text.style.textAlign='right'

}

function post(){

    document.getElementById('hid').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('inputTextColour').style.display = 'none';
    document.getElementById('right').style.display = 'none';
    document.getElementById('center').style.display = 'none';
    document.getElementById('left').style.display = 'none';
    document.getElementById('under').style.display = 'none';
    document.getElementById('ital').style.display = 'none';
    document.getElementById('bols').style.display = 'none';
    document.getElementById('fontsize').style.display = 'none';
    document.getElementById('capatial').style.display = 'none';
    document.getElementById('postBtn').style.display = 'none';
    document.getElementById('iconNone').style.display = 'block';
   
    var text=document.getElementById('text-area')

}

function likeBtn(){
    var likee=document.getElementById('likee');
    likee.style.color='blue'
}