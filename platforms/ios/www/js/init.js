(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function enviaNotificacao(){
  cordova.plugins.notification.local.schedule({
      title: $("#txtTitulo").val(),
      text: $("#txtMsg").val(),
      foreground: true
  });
}
