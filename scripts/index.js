"use strict";

window.onload = function() {
    document.getElementById("blockToHide").style.display = "none";
    document.getElementById("cupType").onclick = function() {
        document.getElementById("blockToHide").style.display = "block";
    }
    document.getElementById("coneType").onclick = function(){
        document.getElementById("blockToHide").style.display = "none";
    }
    document.getElementById("submitButton").onclick = onSubmitButtonClicked;
}
function onSubmitButtonClicked() {
    const numberOfScoops = Number(document.getElementById("numberOfScoops").value);
    const sprinkles = document.getElementById("sprinkles").checked;
    const whippedCream = document.getElementById("whippedCream").checked;
    const hotFudge = document.getElementById("hotFudge").checked;
    const cherry = document.getElementById("cherry").checked;

    let scoopsCost = (((numberOfScoops - 1) * 1.25) + 2.25);
    let toppingsCost = 0;

    if (sprinkles) {
        toppingsCost += 0.50;
    }
    if (whippedCream) {
        toppingsCost += 0.25;
    }
    if (hotFudge) {
        toppingsCost += 1.25;
    }
    if (cherry) {
        toppingsCost += 0.25
    }

    let subtotal = scoopsCost + toppingsCost;
    let tax = subtotal * 0.05;
    let total = subtotal + tax;

    document.getElementById("basePrice").value = subtotal.toFixed(2);
    document.getElementById("tax").value = tax.toFixed(2);
    document.getElementById("totalDue").value = total.toFixed(2);
}