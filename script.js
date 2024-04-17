function Descifrar(){
    let cifrado = document.getElementById("cifrado").value;
    var tmp = "";
    var mensaje = "";
    for(let i = 0; i<cifrado.length; i++){
        if(cifrado[i] == '('){
            i++;
            while(cifrado[i] != ')'){
                tmp += cifrado[i];
                i++;
            };
            tmp = invertir(tmp);
            mensaje += tmp;
            tmp = "";
        }
        else{
            mensaje += cifrado[i];
        }
    }
   
    alert(mensaje);
}

function invertir(str = ""){
    var inverso = "";
    for(let i=str.length - 1;i>=0;i--){
        inverso += str[i];
    }
    return inverso;
}