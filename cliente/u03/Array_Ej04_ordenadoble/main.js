"use stric";

aTabla = [
    [50, 3],
    [100, 2],
    [50, 1],
    [100, 1],
    [50, 2],
];

// aTabla.sort(funtion(a, b) {
//     if (a[0] < b[0]) {
//         return 1;
//     } else if (a[0] > b[0]) {
//         return -1;
//     } else {
//         if (a[0] == b[0]) {
//             return 0;
//         } else {
//             return a[1] > b[1] ? 1 : -1

//         }
//     }
// });

aTabla.sort(function (a, b) {
    if (a[0] < b[0]) {
        return 1;
    } else if (a[0] > b[0]) {
        return -1;
    } else {
        if (a[0] == b[0]) {
            return 0;
        } else {
            return a[1] > b[1] ? 1 : -1
        }
    }
    
});

console.log(aTabla);