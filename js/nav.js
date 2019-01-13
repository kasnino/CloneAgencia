const btnclick = document.querySelector('.boton-nav');
const btndiv = document.querySelector('.mostrar');
let muestremenu = false;

btnclick.addEventListener('click', toggleMenu);


function toggleMenu(){

console.log("click en la hamburguesa");
	if(!muestremenu){
		btnclick.classList.add('cerrado');
		btndiv.classList.add('close');
		muestremenu = true;
	}else{
		btnclick.classList.remove('cerrado');
		btndiv.classList.remove('close');
		muestremenu = false;
	}
}



