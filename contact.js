


let cards = document.querySelectorAll(".card");

cards.forEach(function(haya) {
    haya.addEventListener("click", function() {
        if (haya.classList.contains("open")) {
            haya.className = "card";
        }
        else {
            haya.className = "card open";
        }
    })
});


let phub = document.getElementById('name');
let Email = document.getElementById('email');
let Subject = document.getElementById('subject');
let Message = document.getElementById('message');




function Evehicle() {
    alert("Your message has been summited");

    
    phub.value = " ";
    Email.value = " ";
    Subject.value = " ";    
    Message.value= " ";
    can();
}

function can() {
     result.innerHTML = " ";
    
}