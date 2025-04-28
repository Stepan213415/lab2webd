// Task 1.4
function calcTask4Value(x) {
    return (Math.asin(2 * x) + Math.abs(x)) / (Math.pow(x, 2) + 1);
}

console.log("Task 4.1");
for (let x = 0; x <= 0.4; x += 0.2) {
    let z = calcTask4Value(x);
    console.log(`${z}`);
}

console.log("Task 4.2");
let x = 0.1;
for (let i = 0; i < 6; i++) {
    let z = calcTask4Value(x);
    console.log(`${z}`);
    x += 0.05;
}

// Task 1.5
function calcTask51Value(l) {
    return Math.pow(-1, l) * (Math.pow(l, 2) + 1) / (l + 2);
}

console.log("Task 5.1");
let S = 0;
for (let l = 3; l <= 13; l++) {
    S += calcTask51Value(l);
}
console.log(`${S}`);

function calcTask52Value(i) {
    return (i - 1) / (Math.pow(i, 2) + 5);
}

console.log("Task 5.2");
let k = 3;
let n = 8;
let P = 1;
for (let i = k; i <= n; i++) {
    P *= calcTask52Value(i);
}
console.log(`${P}`);

// Task 2
let numbers = [-3.6, -5.3, 2.1, 0.1, -0.7, 5.3, 6.6, -2.2];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sum += numbers[i];
    }
}
console.log(`Sum of positive elements: ${sum}`);

// Task 4
let pilots = [
    {
        number: "P001",
        class: "Senior Pilot",
        dateTimeFlight: "2025-04-28 08:00",
        dateTimeArrival: "2025-04-28 12:00"
    },
    {
        number: "P002",
        class: "Junior Pilot",
        dateTimeFlight: "2025-04-28 09:00",
        dateTimeArrival: "2025-04-28 13:30"
    },
    {
        number: "P003",
        class: "Senior Pilot",
        dateTimeFlight: "2025-04-28 10:00",
        dateTimeArrival: "2025-04-28 14:45"
    }
];

// Task 5
for (let i = 0; i < pilots.length; i++) {
    console.log(`${pilots[i].class} ${pilots[i].number} - Flight: ${pilots[i].dateTimeFlight}, Arrival: ${pilots[i].dateTimeArrival}`);
}