/// app-browser-name --disable-web-security --allow-file-access-from-files (run browser without security)

var base_url = window.location.origin;
var host     = window.location.host;


var pathArray = window.location.pathname.split("/");
pathArray.unshift(base_url);
pathArray.pop();
let url = "";
console.log(host);


for (pathName of pathArray) {
    url += pathName + "/";
}


function parseURLParams() {
    const queryString = window.location.search;
    const urlParams   = new URLSearchParams(queryString);
    return urlParams;
}

const paramsUrl = parseURLParams();

///=========================== Load another file HTML ===========================/// 
function loadHTML(file, section) {

    const menuHalaman = parseURLParams().get("menu");

    $.ajax({
        type: "GET",
        url: file
      }).done(function(responseTxt) {
        $(section).html(responseTxt);
        $("#" + menuHalaman).addClass("navigation-active");
        $("#" + menuHalaman).addClass("text-bold");
        $("#" + menuHalaman).addClass("border-round");
       
      });

}

loadHTML(url + 'templates/navbar.html', "#navbar");
console.log(base_url);

///=========================== End Load another file HTML ===========================/// 


$("#click-abt").click(function(){
  $("#desc-abt").toggleClass("hide");
});