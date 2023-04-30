// Select input field
const input = document.querySelector("#input");

// Select unit selections
const unit = document.querySelector("#unit");

const convert = () => {

    // Get value of user input and units
    const value = input.value;
    const unitValue = unit.value;
    const output = document.querySelector("#output");

    // Show output when there is a value
    (value !== "") ? 
      output.style.display = "block" : output.style.display = "none";

    // check unit type
    switch(unitValue) {
        case "lbs":
            convertLbs(value);
            break;
        case "grams":
            convertGrams(value);
            break;
        case "kilograms":
            convertkilograms(value);
            break;
        case "ounces":
            convertounces(value);
            break;
        case "meters":
            convertmeters(value);
            break;
        case "miles":
            convertmiles(value);
            break;
        case "inches":
            convertinches(value);
            break;
    }
}  

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");
const card5 = document.querySelector("#card-5");
const card6 = document.querySelector("#card-6");

const convertLbs = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Ounces:"

    card1.querySelector('div').textContent= value * 453.592
    card2.querySelector('div').textContent= value * 453.592 / 1000
    card3.querySelector('div').textContent= value * 16
}

const convertGrams = value => {
    card1.querySelector('h4').textContent="Kilograms:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('div').textContent= value / 1000;
    card2.querySelector('div').textContent= value * 0.035274;
    card3.querySelector('div').textContent= value * 0.00220462;
}

const convertmeters = value => {
    card1.querySelector('h4').textContent="Miles:"
    card2.querySelector('h4').textContent="Inches:"
    card3.querySelector('h4').textContent="Feet:"
    card4.querySelector('h4').textContent="Yards:"

    card1.querySelector('div').textContent= value * 0.000621371;
    card2.querySelector('div').textContent= value * 39.3701;
    card3.querySelector('div').textContent= value * 3.28084;
    card4.querySelector('div').textContent= value * 1.09361;
}

const convertmiles = value => {
    card1.querySelector('h4').textContent="Kilometers:"
    card2.querySelector('h4').textContent="Meters:"
    card3.querySelector('h4').textContent="Feet:"

    card1.querySelector('div').textContent= value * 1.60934;
    card2.querySelector('div').textContent= value * 1609.34;
    card3.querySelector('div').textContent= value * 5280;
}


// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);