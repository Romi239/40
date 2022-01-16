//MINIPROYECTO UWU
//INICIAMOS NUESTRO ARREGLO CON NOMBRES DE MARCAS DE VEHICULOS

const cars = ["audi", "bmw", "ferrari" , "fiat" , "ford" , "lexus" , "saab" , "volvo"];

//a traves de un for,recorremos todos los elementos del arreglo y los mostramos en el html por medio de imagenes

let text = ""
for(let i = 0 ;i < cars.length ; i++){
    text += '<img src ="img/' + cars[i] + '.png" width = "100"></img>';
}

//ocupamor innerHTML para mostrar el arreglo
document.getElementById("demo").innerHTML = text;

//al hacer click eliminamos el primer elemento 
let b3 = document.getElementById("btn_push"); //encuentra el elemnto "btn_push" en el sitio
b3.onclick = funcionPush; //agregar funcion onclick al elemento

function funcionPush(e){
    cars.push("lexus");
    text = "";
    for(let i = 0 ; i < cars.length; i++){
        text += '<img src ="img/' + cars[i] + '.png" width = "100"></img>';
    }
    document.getElementById("demo").innerHTML = text;
}

//Al hacer clic en el botón Pop se borra el último elemento
let b4 =  document.getElementById("btn_pop"); //Encuentra el elemento "btn_pop" en el sitio
b4.onclick = funcionPop; //Agrega función onclick al elemento

function funcionPop(e){
    if(cars.length > 0){
        cars.pop();
        text = "";
        for(let i = 0 ; i < cars.length; i++){
            text += '<img src="img/' + cars[i] + '.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML = text;
    }else{
        alert("No puede seguir eliminando valores, ya que el arreglo está vacío");
    }
}

//Al hacer click en Shift eliminamos el primer elemento
let b2 = document.getElementById("btn_shift"); //Encuentra el elemento "btn_shift" en el sitio
b2.onclick = funcionShift; //Agrega función onclick al elemento

function funcionShift(e){
    if(cars.length > 0){
        cars.shift();
        text = "";
        for(let i = 0 ; i < cars.length; i++){
            text += '<img src="img/' + cars[i] + '.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML = text;
    }else{
        alert("No puede seguir eliminando valores, ya que el arreglo está vacío");
    }
}

//agregar un arreglo al inicio
let b1 = document.getElementById("btn_unshift"); //encuentra el elemento "btn_push" en el sitio
b1.onclick = funcionUnshift; //agrega funcion onclick al elemnto

function funcionUnshift(e){
    cars.unshift("audi");
    text = "";
    for(let i = 0 ; i < cars.length; i++){
        text += '<img src="img/' + cars[i] + '.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML = text;
}

//al hacer click en el boton slice crearemos un nuevo arreglo temporal indicando el begin en el end 
let b5=document.getElementById("btn_slice"); // encuentra en elemento "btn_slice" en el sitio

b5.onclick = funcionSlice; //agrega funcion onclick al elemento }

function funcionSlice(e){
    begin = document.getElementById("begin").value;
    end = document.getElementById("end").value;
    if(begin != "" && end != ""){
        console.log(begin);
        console.log(end);
        new_array = cars.slice(begin, end);
        text = "";
        for(let i = 0 ; i < new_array.length; i++){
            text += '<img src = "img/' + new_array[i] + '.png" width = "100"></img>';
        }   
        document.getElementById("demo").innerHTML = text;
    }else{
        alert("Debe ingresar un valor en los campos BEGIN y END");
    }   
}



