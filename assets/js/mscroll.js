window.onload = function(){

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollTopAbout = document.getElementById("about").offsetTop;
  var scrollTopOnline = document.getElementById("online").offsetTop;
  var scrollTopOffline = document.getElementById("offline").offsetTop;
  var scrollTopHireme = document.getElementById("hireme").offsetTop;

  var sticker = document.getElementById("sticker");

    if (scrollTop <= scrollTopAbout) {

        sticker.innerHTML = "About";

        document.getElementById("menu-about").className = "menu-item-divided pure-menu-selected";
        document.getElementById("menu-online").className = "menu-item-divided";
        document.getElementById("menu-offline").className = "";
        document.getElementById("menu-hireme").className = "menu-item-divided";
    }

    if(scrollTop > scrollTopOnline - 20) {

        sticker.innerHTML = "Online";

        document.getElementById("menu-about").className = "menu-item-divided";
        document.getElementById("menu-online").className = "pure-menu-selected";
        document.getElementById("menu-offline").className = "";
        document.getElementById("menu-hireme").className = "menu-item-divided";
    }

    if(scrollTop > scrollTopOffline - 20) {

        sticker.innerHTML = "Offline";

        document.getElementById("menu-about").className = "menu-item-divided";
        document.getElementById("menu-online").className = "";
        document.getElementById("menu-offline").className = "pure-menu-selected";
        document.getElementById("menu-hireme").className = "menu-item-divided";
    }
    if(scrollTop > scrollTopHireme - 20) {

        sticker.innerHTML = "Work with me";

        document.getElementById("menu-about").className = "menu-item-divided";
        document.getElementById("menu-online").className = "";
        document.getElementById("menu-offline").className = "";
        document.getElementById("menu-hireme").className = "menu-item-divided pure-menu-selected";
    }
};

window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollTopAbout = document.getElementById("about").offsetTop;
    var scrollTopOnline = document.getElementById("online").offsetTop;
    var scrollTopOffline = document.getElementById("offline").offsetTop;
    var scrollTopHireme = document.getElementById("hireme").offsetTop;

    if (scrollTop <= scrollTopAbout) {

        sticker.innerHTML = "About";

        document.getElementById("menu-about").className = "menu-item-divided pure-menu-selected";
        document.getElementById("menu-online").className = "menu-item-divided";
        document.getElementById("menu-offline").className = "";
        document.getElementById("menu-hireme").className = "menu-item-divided";
    }

    if(scrollTop > scrollTopOnline - 20) {

        sticker.innerHTML = "Online";

        document.getElementById("menu-about").className = "menu-item-divided";
        document.getElementById("menu-online").className = "pure-menu-selected";
        document.getElementById("menu-offline").className = "";
        document.getElementById("menu-hireme").className = "menu-item-divided";
    }

    if(scrollTop > scrollTopOffline - 20) {

        sticker.innerHTML = "Offline";

        document.getElementById("menu-about").className = "menu-item-divided";
        document.getElementById("menu-online").className = "";
        document.getElementById("menu-offline").className = "pure-menu-selected";
        document.getElementById("menu-hireme").className = "menu-item-divided";
    }
    if(scrollTop > scrollTopHireme - 20) {

        sticker.innerHTML = "Work with me";

        document.getElementById("menu-about").className = "menu-item-divided";
        document.getElementById("menu-online").className = "";
        document.getElementById("menu-offline").className = "";
        document.getElementById("menu-hireme").className = "menu-item-divided pure-menu-selected";
    }
};


window.onunload = window.location.href.split('#')[0];