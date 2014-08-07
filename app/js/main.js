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


var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        showLeft = document.getElementById( 'showLeft' ),
        showRight = document.getElementById( 'showRight' ),
        showTop = document.getElementById( 'showTop' ),
        showBottom = document.getElementById( 'showBottom' ),
        showLeftPush = document.getElementById( 'showLeftPush' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;
 

showRight.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
    disableOther( 'showRight' );
};



 
function disableOther( button ) {
   
    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }
   
  
   
}