function calculate(event) {
    event.preventDefault();
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const pal = Number(document.getElementById("activity").value);
    const age = Number(document.getElementById("age").value);
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    let grundUmsatzMann = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
    let grundUmsatzFrau = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    let output1 = document.getElementById("grundKcal");
    let output2 = document.getElementById("gesamtKcal");

    console.log({ male, female, pal, age, height, weight, grundUmsatzMann, grundUmsatzFrau });

    let ergebnis;
    if (male === true) {
        ergebnis = grundUmsatzMann * pal;
        output1.innerHTML = grundUmsatzMann.toFixed(2);
        output2.innerHTML = ergebnis.toFixed(2);


    } else if (female === true) {
        ergebnis = grundUmsatzFrau * pal;
        output1.innerHTML = grundUmsatzFrau.toFixed(2);
        output2.innerHTML = ergebnis.toFixed(2);
    } else {
        console.log("Fülle alle Felder aus!");
    }
    console.log({ grundUmsatzMann, ergebnis });


}


