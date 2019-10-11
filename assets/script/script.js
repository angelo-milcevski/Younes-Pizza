// Menu opening
window.onload = function () {
    getCopyright();
    countCartItems();
}



function countCartItems(){
    let storage = localStorage.length;
    let notification= document.getElementsByClassName("notification")[0];
    let notificationDesk = document.getElementsByClassName("notificationDesk")[0];

    let objects = JSON.parse(window.localStorage.getItem('products'));
    
    if(storage == 0){
        notification.style.display = "none";
        notificationDesk.innerHTML = 0;
    }else{
        notification.style.display = "block";
        notificationDesk.innerHTML = objects.length;
        notification.innerHTML = objects.length;
    }
}



function openMenu() {
    document.getElementsByClassName("pg-Top_Menu")[0].style.width = "100%";
    let links = document.getElementsByClassName("menuLink")
    let closeBtn = document.getElementsByClassName("fa-times")[0]
    for (let a = 0; a < links.length; a++) {
        links[a].style.display = "block";
    }
    closeBtn.style.display = "block";

}

function closeMenu() {
    document.getElementsByClassName("pg-Top_Menu")[0].style.width = "0%";
    let links = document.getElementsByClassName("menuLink")
    let closeBtn = document.getElementsByClassName("fa-times")[0];

    for (let a = 0; a < links.length; a++) {
        links[a].style.display = "none";
    }
    closeBtn.style.display = "none";
}



function getCopyright() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("copyright").innerHTML = "©Younes Grill & Pizza - " + year;
}