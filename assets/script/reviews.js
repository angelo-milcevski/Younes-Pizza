let reviews = [];
let slide = 0;
let slideP = document.getElementsByClassName("hm-Grid_ReviewsText")[0]
        
reviews[0] = "Aalborg's absolut bedste pizzaria! Nå jeg er i Aalborg og har lyst til pizza, så er det der! Søde søde fyre og god service! Så tak for det! - Helene Torp";
reviews[1] = "God kundeservice og friske ingredienser, vi vil helt sikkert komme tilbage for at spise her! -Martin Sørensen ";
reviews[2] = "Leverings servicet er rigtig godt, de er her altid til tiden med bestillingen og vi kan spise den bedste pizza i byen her! - Christine Thomson";
    
slideP.innerHTML= "<i>" + reviews[slide] + "</i>"
        
function nextReview(){    
    let slideP = document.getElementsByClassName("hm-Grid_ReviewsText")[0]
    slide++;
        if (slide >= reviews.length) {
            slide = 0;
        }
       
        slideP.innerHTML = "<i>" + reviews[slide] + "</i>"       
}
        
function previousReview(){       
    let slideP = document.getElementsByClassName("hm-Grid_ReviewsText")[0]

        if (slide > 0) {
            slide--;
        } else {
            slide = reviews.length - 1;
        }

        slideP.innerHTML = "<i>" + reviews[slide] + "</i>";
}