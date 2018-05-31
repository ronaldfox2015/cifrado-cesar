let encode = (clave,texto)=>{
	var output="";
	clave = parseInt(clave);
	for (var i=0; i<texto.length;i++){
		if(encuentraAscii(texto.charCodeAt(i))){
			output += nextAscii(texto.charCodeAt(i),clave);
		}else{
			output +=  String.fromCharCode(num + clave);
		}
	}
	return output;  
}

let decode = (clave,texto)=>{
	var output="";
	clave = parseInt(clave);
	
	for (var i=0; i<texto.length;i++){
		if(encuentraAscii(texto.charCodeAt(i))){
		   
			output += backAscii(texto.charCodeAt(i),clave);
		}else{
			output +=  String.fromCharCode(num - clave);
		}
	}
	return output;  
}

let encuentraAscii = (num)=>{
	var encuentra = false;
	for (var i=97; i<=122;i++){      
		if(num==i){
			encuentra = true;      
		}    
	}

	for (var i=65; i<=90;i++){
		if(num==i){
			encuentra = true;      
		}    
	}
	return encuentra;
}

let nextAscii = (value,numero)=>{
	var next = value + numero ;
	for (var i=97; i<=122;i++){      
		if(i == value &&  next >= 122){
			next = 96 + (next - 122) ;               
		}    
	}

	for (var i=65; i<=90;i++){
		if(i == value &&  next >= 90){
			next = 65 + (next - 90) ;  
		}     
	}
	return String.fromCharCode(next);
}

let backAscii = (value,numero)=>{
	var back = value - numero;
	   ;

	for (var i=97; i<=122;i++){      
		if(i == value &&  back <= 97){
			back = 123 - (97-back);      
		}    
	}

	for (var i=65; i<=90;i++){
		if(i == value &&  back <= 65){
			back = 91 - (65-back);      
		}     
	}
	return String.fromCharCode(back);
}


const claveDespl = document.getElementById("key");
const msgAcifrar = document.getElementById("plainmsg");
const msgAdescif = document.getElementById("cipmsg");
//definir variables para el boton
const botonCifrar = document.getElementById("btnCipher");
const botonDescif = document.getElementById("btnDeCipher");

let btnCifrar = ()=>{
	msgAdescif.innerHTML = encode(claveDespl.value,msgAcifrar.value);
}
botonCifrar.addEventListener("click",btnCifrar);

/**/
let btndeCifrar = ()=>{
	msgAcifrar.innerHTML = decode(claveDespl.value,msgAdescif.value);
}
botonDescif.addEventListener("click",btndeCifrar);
