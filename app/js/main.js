//var menuObj = document.getElementsByClassName("menu-mobil")[0];
//
//menuObj.addEventListener("click", function(){
//	var menu  = document.getElementById("menu_principal");
//	var menuObj = document.getElementsByClassName("img-menu-mobil")[0];
//	if(menu.style.left!="0px"){
//		menu.style.left="0px";
//		menuObj.style.left="70%";
//	}else{
//		menu.style.left="-70%";
//		menuObj.style.left="0%";
//	}
//});

/*Poden escuchar un evento de cambio de tamaño*/
window.addEventListener("resize", function () {
  var recResizeElement = function (root) {
    Array.prototype.forEach.call(root.childNodes, function (el) {

      var resizeEvent = document.createEvent("HTMLEvents");
      resizeEvent.initEvent("resize", false, true);
      var propagate = el.dispatchEvent(resizeEvent);

      if (propagate)
        recResizeElement(el);
    });
  };
  recResizeElement(document.body);
});
/*Menú movil */
var    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        body = document.body,breadcums=document.getElementsByClassName( 'breadcums' )[0];

botonMovil.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
     
};
closeMenu.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
     
};


 
 $('#demoTab').easyResponsiveTabs();
 $("#lightGallery").lightGallery();

//html10n.language='fr';
//html10n.localize('fr');
//html10n.bind("localized", function() {
//  console.log("Localized!");
//});
//html10n.index();
//var message = html10n.get('test');
//alert(message);