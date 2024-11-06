console.log("present")

function submitForm(event) {
    event.preventDefault(); //stops the page from reloading when submitted

    // Collect form data into an object
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        meal: document.querySelector('input[name="meal"]:checked')?.value || "",
        allergies: Array.from(document.querySelectorAll('input[name="allergy"]:checked')).map(input => input.value),
        otherAllergies: document.getElementById("otherAllergy").value
    };

    sessionStorage.setItem('potluckData', JSON.stringify(formData));

    console.log("Form Data:", formData); 

    document.getElementById("potluckInfo").reset();
}