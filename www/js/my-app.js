// Initialize app
var app = new Framework7({
    routes: [
        {
            path: '/',
            url: 'index.html',
        },{
            path: '/home/',
            url: 'index.html',
        },{
            path: '/quem-somos/',
            url: 'quem-somos.html',
        },{
            path: '/servicos/',
            url: 'servicos.html',
        },{
            path: '/como-funciona/',
            url: 'como-funciona.html',
        },{
            path: '/duvidas/',
            url: 'duvidas.html',
        },{
            path: '/contato/',
            url: 'contato.html',
        },{
            path: '/politica-de-privacidade/',
            url: 'politica-de-privacidade.html',
        },{
            path: '/politica-de-cookies/',
            url: 'politica-de-cookies.html',
        },{
            path: '/termos-de-uso/',
            url: 'termos-de-uso.html',
        },{
            path: '/oque-e-compartilhamento/',
            url: 'oque-e-compartilhamento.html',
        },
    ],
    statusbar: {
      iosOverlaysWebView: false,
      iosBackgroundColor: '#ebebeb',
      androidBackgroundColor: '#ebebeb',
      iosTextColor: 'black',
      androidTextColor: 'black',
    },
  });

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

    console.log("Device is ready!");
    console.log("Id user: "+app_usuario_id);
    loadIndex();
    
});

function loadIndex(){
   
}

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('page:init', function (e) {
    // Get page data from event data

    app.panel.close();
    console.log(e.detail.el.dataset.page)

    if(e.detail.el.dataset.page=="index"){
        loadIndex();
    }

    if(e.detail.el.dataset.page=="quem-somos"){
        $.get("http://capsulas4u.com.br/app_api/quem-somos.php", function(data){
            $("#quem-somos-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="servicos"){
        $.get("http://capsulas4u.com.br/app_api/servicos.php", function(data){
            $("#servicos-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="como-funciona"){
        $.get("http://capsulas4u.com.br/app_api/como-funciona.php", function(data){
            $("#como-funciona-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="duvidas"){
        $.get("http://capsulas4u.com.br/app_api/duvidas.php", function(data){
            $("#duvidas-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="contato"){
        $.get("http://capsulas4u.com.br/app_api/contato.php", function(data){
            $("#contato-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="politica-de-privacidade"){
        $.get("http://capsulas4u.com.br/app_api/politica-de-privacidade.php", function(data){
            $("#politica-de-privacidade-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="politica-de-cookies"){
        $.get("http://capsulas4u.com.br/app_api/politica-de-cookies.php", function(data){
            $("#politica-de-cookies-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="termos-de-uso"){
        $.get("http://capsulas4u.com.br/app_api/termos-de-uso.php", function(data){
            $("#termos-de-uso-content").html(data);
        });
    }

    if(e.detail.el.dataset.page=="oque-e-compartilhamento"){
        $.get("http://capsulas4u.com.br/app_api/oque-e-compartilhamento.php", function(data){
            $("#oque-e-compartilhamento-content").html(data);
        });
    }



})