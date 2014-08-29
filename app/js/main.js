 
jQuery.fn.exists = function(){return this.length>0;}
/*Poden escuchar un evento de cambio de tamaño*/
window.addEventListener("resize", function() {
    var recResizeElement = function(root) {
        Array.prototype.forEach.call(root.childNodes, function(el) {

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
var menuRight = document.getElementById('cbp-spmenu-s2'),
    body = document.body,
    breadcums = document.getElementsByClassName('breadcums')[0];

if ($("#botonMovil").exists() ) {
    botonMovil.onclick = function() {
        classie.toggle(this, 'active');
        classie.toggle(menuRight, 'cbp-spmenu-open');

    };
}
if ($("#closeMenu").exists()) {
    closeMenu.onclick = function() {
        classie.toggle(this, 'active');
        classie.toggle(menuRight, 'cbp-spmenu-open');

    };

}

 
$('#demoTab').easyResponsiveTabs();
$("#lightGallery").lightGallery();

if (typeof  GMaps != "undefined") {
    var miMapa = new GMaps({
        div: '#map',
        lat: 38.358907,
        lng: -0.467549
    });

    miMapa.addMarker({
        lat: 38.358907,
        lng: -0.467549,
        title: 'HOSPITAL INTERNACIONAL MEDIMAR',
        infoWindow: {
            content: '<div>HOSPITAL INTERNACIONAL MEDIMAR </div><div>Avda. de Denia, 78 - 5a planta</div><div>03016 Alicante </div><div>Tel. 608 00 91 61  &#47;  965 16 22 00 ext. 9093</div><div>info@plasticsurgerymedimar.com</div>'
        }
    });
}
//html10n.language='fr';
//html10n.localize('fr');
//html10n.bind("localized", function() {
//  console.log("Localized!");
//});
//html10n.index();
//var message = html10n.get('test');
//alert(message);
