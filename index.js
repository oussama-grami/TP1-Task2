const selectedColor=document.querySelector(".color");
const selectedFont=document.querySelector(".font");
const selectedPolice=document.querySelector(".police");
const test=document.querySelector(".test");
selectedColor.addEventListener('input',()=>{
        test.style.color=selectedColor.value;
        
})
selectedFont.addEventListener('input',()=>{
        if(selectedFont.value<0){
                alert("font-size doit être positive");
        }
        else{
        test.style.fontSize=selectedFont.value+"px";
        }
})
selectedPolice.addEventListener('input',()=>{
    test.style.fontFamily=selectedPolice.value;
})