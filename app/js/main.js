var menuObj = document.getElementsByClassName("menu-mobil")[0];

menuObj.addEventListener("click", function(){
	var menu  = document.getElementById("menu_principal");
	var menuObj = document.getElementsByClassName("img-menu-mobil")[0];
	if(menu.style.left!="0px"){
		menu.style.left="0px";
		menuObj.style.left="70%";
	}else{
		menu.style.left="-70%";
		menuObj.style.left="0%";
	}
});

/*Menú movil */
var    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        body = document.body;
showRight.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
     
};



 
 