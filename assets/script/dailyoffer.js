function openingHrs() {

    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let open = document.getElementById("hm-Hero_Open");
    let closed = document.getElementById("hm-Hero_Closed");
        
    let currentH =  date.getHours();
    let currentM = date.getMinutes();
    let currentS = date.getSeconds();
    
    let currentTime = currentH + ":" + currentM + ":" + currentS;


    switch (days[date.getDay()]) {

        case "Sunday":


            if ("12:00:00" < currentTime && currentTime < "21:30:00") {
               open.style.display = "block";
               closed.style.display = "none";
            } else {
                open.style.display = "none";
               closed.style.display = "block";
            }
            
            break;

        case "Friday":
        case "Saturday":

            if ("14:00:00" < currentTime && currentTime < "21:30:00") {
                open.style.display = "block"
               closed.style.display = "none"
            } else {
                open.style.display = "none";
               closed.style.display = "block";
            }
            
            break;

        default:
            if ("16:00:00" < currentTime && currentTime < "21:30:00") {
                open.style.display = "block";
               closed.style.display = "none";
            } else {
                open.style.display = "none";
               closed.style.display = "block";
            }
    }
}


function dailyOffer() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let allOffers = document.getElementsByClassName("offer");

    for (let a = 0; a < allOffers.length; a++) {
        allOffers[a].style.display = "none"
    }

    switch (days[date.getDay()]) {
        case "Monday":
            document.getElementsByClassName("Monday")[0].style.display = "grid";
            break;
        case "Tuesday":
            document.getElementsByClassName("Tuesday")[0].style.display = "grid";
            break;
        case "Wednesday":
            document.getElementsByClassName("Wednesday")[0].style.display = "grid";
            break;
        case "Thursday":
            document.getElementsByClassName("Thursday")[0].style.display = "grid";
            break;
        case "Friday":
            document.getElementsByClassName("Friday")[0].style.display = "grid";
            break;
        case "Saturday":
            document.getElementsByClassName("Saturday")[0].style.display = "grid";
            break;
        case "Sunday":
            document.getElementsByClassName("Sunday")[0].style.display = "grid";
            break;
    }
}