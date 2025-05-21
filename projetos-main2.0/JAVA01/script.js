function somar() {
    // Get the values from the input fields
    const x = parseFloat(document.getElementById('iptX').value);
    const y = parseFloat(document.getElementById('iptY').value);

    // Sum the numbers
    const result = x + y;

    // Display the result in the span element
    document.getElementById('spnRes').textContent = 'Resultado: ' + result;
}
