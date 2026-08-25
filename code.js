const form = document.getElementById('RegistrationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
     const Name = document.getElementById('name').value;
     const Email = document.getElementById('email').value;
     const SelectedEvent = document.getElementById('event').value;
     const Age = document.getElementById('age').value;
     const Gender = document.getElementById('gender').value;
     if(Age<18  ){
        alert("You must be at least 18 years old to register for the event.");
     }
     else if(Gender === "male" ||  Gender === "Transgender"){
        alert("Please select a valid gender."+Gender);
     }
     else if(Gender === "female" && Age <18){
        alert("You must be at least 18 years old to register for Event1.");
     }
     else if(Gender === "male" ||  Gender === "Transgender" && Age>18){
        alert("You must be  female  to register for Event1.");
     }
     else {
        alert("thankyou " + Name + " u r eligible for seat" + Gender + ". A confirmation email will be sent to " + Email + ".");
     }
});