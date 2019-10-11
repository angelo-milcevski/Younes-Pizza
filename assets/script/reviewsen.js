let reviews = [];
let slide = 0;
let slideP = document.getElementsByClassName("hm-Grid_ReviewsText")[0]
        
reviews[0] = "Aalborg's absolute best pizzeria! When I am in Aalborg and want to have pizza it is there! Cute cute boys and good service! So thank you for that! - Mathias Lille";
reviews[1] = "Great customer service and fresh ingredients, we will definitely come back to eat here! -Martin Sørensen ";
reviews[2] = "The delivery service is really good, they are always on time with the order and here we can eat the best pizza in town! - Christine Thomson";
    
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