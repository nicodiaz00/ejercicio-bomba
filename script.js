

const imagenBomba = document.getElementById('imgBomba');


let tamañoBomba= imagenBomba.style.width;
let aumenta = 50;
let decrece =20;
let tamañoMinimo=100;
let explotar=false;




document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowUp':
           aumenta+=aumenta;
           let tamaño = parseInt(imagenBomba.style.width);
           if(tamaño< 600){
            let nuevoTamaño = tamaño + aumenta;
           

                imagenBomba.style.width = nuevoTamaño + "px";
                imagenBomba.style.height = nuevoTamaño + "px";
           }if(parseInt(imagenBomba.style.width)>600){
            imagenBomba.src="images/explosion.png";
            explotar=true;
           } 
            break;
        case 'ArrowDown':
            let achicar = parseInt(imagenBomba.style.width)
            if(achicar >=tamañoMinimo && explotar==false){
                achicar-=30
                imagenBomba.style.width= achicar +"px";
                imagenBomba.style.height= achicar +"px";
                
                
            }
            
              
            
            
    }
});