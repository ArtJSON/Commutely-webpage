calculate_public();

function calculate_public() {
    // input values
    let length = document.getElementById("length").value;
    let rush_hour = document.getElementById("rush_hours").checked;
    let fuel_economy = document.getElementById("fuel_economy_number").value * (rush_hour ? 1.2 : 1);
    let discount = document.getElementById("discount").checked;

    // constants
    let fuel_price = 5.8;
    let avg_speed = rush_hour ? 24 : 40; 

    // on examplary route, car takes 15 minutes and bus takes 25 minutes (5.5km route)

    // pollution stat
    document.getElementById("saved_polution").textContent = (length * 0.1 * ( fuel_economy / 9 )).toFixed(2);

    // saved money - including fuel price, avg daily maintenance cost and buing three-month ticket assuming 2 trips 5 times a week
    document.getElementById("saved_money").textContent = (((length * fuel_economy * fuel_price) / 100) + 12.88 / 2 - (144 * (discount ? 1 : 2)/130)).toFixed(2);

    document.getElementById("time").textContent = (length / 5.5 * 25 * (rush_hour ? 1.2 : 1)).toFixed(0);
}
