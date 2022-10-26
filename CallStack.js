//Se ejecuta la funcion saludar y todas sus lineas de codigo
function saludar() {
    diHola(); // Llama a la funcion diHola y esta se agrega a la pila 
}//Cuando vuelve de la funcion diHola la fucnion saludar sale de la pila.

//Se ejecuta la funcion y todas sus lineas de codigo
 function diHola() {
    return "!Hola!"; //Returna la ejecucion y sigue con el resto de la funcion
 }// La funcion diHola sale de la pila y vuelve a la funcion Saludar
 
 // LLama primero a la funcion saludar y esta se agrega a la pila
 saludar();
 
 // [3] Código