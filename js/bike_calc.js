calculate_bike();

function calculate_bike() {
    // input values
    let length = document.getElementById("length").value;
    let rush_hour = document.getElementById("rush_hours").checked;
    let fuel_economy = document.getElementById("fuel_economy_number").value * (rush_hour ? 1.2 : 1);
    let speed = document.getElementById("speed_range").value;

    // constants
    let fuel_price = 5.8;

    // on examplary route, car takes 15 minutes and bus takes 25 minutes (5.5km route)

    // pollution stat
    document.getElementById("saved_polution").textContent = (length * 0.104 * ( fuel_economy / 9 )).toFixed(2);

    // saved money - including fuel price, avg daily maintenance cost and avg bike maintenece cost
    document.getElementById("saved_money").textContent = (((length * fuel_economy * fuel_price) / 100) + 12.88 / 2 - 200/365).toFixed(2);

    document.getElementById("time").textContent = (length / speed * 60).toFixed(0);

    document.getElementById("calories").textContent = (length * 30 + (speed * 2)).toFixed(0);
}
