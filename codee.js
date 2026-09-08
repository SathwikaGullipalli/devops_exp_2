const form = document.getElementById("myform");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const seatType = document.getElementById("seat type").value;

    if (age < 18) {
        alert("Not eligible for admission because age is less than 18.");
    }
    else if (seatType === "reserved" && gender === "male") {
        alert("Not eligible for admission as you are male");
    }
    else {
        alert("Thank you! You have successfully registered.");
    }
});
