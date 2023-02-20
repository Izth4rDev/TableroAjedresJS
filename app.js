//Declaracion de variables

let square;
let i;
let j;
const contenedor = document.querySelector('.contenedor');


//llamada a funcion

dibujatablero();


function dibujatablero(){
    for(i =1 ; i <= 8; i++){
        for(j = 1 ; j <= 8; j++){

            /*Creacion del tablero*/    

            square = document.createElement("div");

            if(i % 2 ===0){

                if( j % 2 === 0 ){

                    square.classList.add('withe');
        
                    
                }else{

                    square.classList.add('black');
    
                }

            }else{     

                if( j % 2 === 0 ){

                    square.classList.add('black');

                }else{

                    square.classList.add('withe');
        
                }

            }

/*Inserción de piezas */

            /*Peones*/
            
            if(i === 2){

                if(j%2){

                     square.innerHTML = "&#9817;";
         

                }else{

                    square.innerHTML = "&#9823;";

                }
            
            }


            if(i === 7){

                if(j%2){

                     square.innerHTML = "&#9817;";
         

                }else{

                    square.innerHTML = "&#9823;";

                }
            
            }


/*Otras piezas */

            /*Piezas linea 1*/
            if(i === 1){

                switch(j){

                    case 1:square.innerHTML = "&#9820;";
                    break;

                    case 2:square.innerHTML = "&#9816;";
                    break;

                    case 3:square.innerHTML = "&#9821;";
                    break;

                    case 4:square.innerHTML = "&#9813;";
                    break;

                    case 5:square.innerHTML = "&#9818;";
                    break;

                    case 6:square.innerHTML = "&#9815;";
                    break;

                    case 7:square.innerHTML = "&#9822;";
                    break;

                    case 8:square.innerHTML = "&#9814;";
                    break;
                }

            }

            /*Piezas linea 8*/

            if(i === 8){

                switch(j){

                    case 1:square.innerHTML = "&#9814;";
                    break;

                    case 2:square.innerHTML = "&#9822;";
                    break;

                    case 3:square.innerHTML = "&#9815;";
                    break;

                    case 4:square.innerHTML = "&#9819;";
                    break;

                    case 5:square.innerHTML = "&#9812;";
                    break;

                    case 6:square.innerHTML = "&#9821;";
                    break;

                    case 7:square.innerHTML = "&#9816;";
                    break;

                    case 8:square.innerHTML = "&#9820;";
                    break;
                }

            }

            /* Inserción de cuadrados del tablero */ 

            contenedor.appendChild(square);

        }
 
    }

}