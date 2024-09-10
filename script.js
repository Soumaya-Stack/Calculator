function clearDisplay() {
    document.getElementById("display").value = '';
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const display = document.getElementById("display").value;
    try {
        const result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}