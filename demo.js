// ------ frequency phone number-----

// let str = "23235946852348";
// let arr = [0,0,0,0,0,0,0,0,0,0];

// for (let i = 0; i < str.length; i++){
//     arr[str.charAt(i)-'0']++;
// }
// let ret = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] != 0) {
//         // console.log(i, arr[i]);
//         let obj = {};
//         obj[i] = arr[i];
//         ret.push(obj)
//     }
// }
// console.log(ret);


// -------------3Sum--------------

// const arr = [1, 2, 5, 6, 8, 3, 9, 4];
// arr.sort();
// const tar = 14;
// for (let i = 0; i < arr.length - 2; i++) {
//     let j = i + 1;
//     let k = arr.length - 1;
//     while (j < k) {
//         if (arr[i] + arr[j] + arr[k] == tar) {
//             let ret = [];
//             ret.push(arr[i])
//             ret.push(arr[j])
//             ret.push(arr[k]);
//             console.log(ret);
//             break;
//         }
//         else if (arr[i] + arr[j] + arr[k] > tar) {
//             k--;
//         } else {
//             j++;
//         }
//     }
// }


// -------- check on browser(html file)---------

//  console.log("Something");
//  console.error("Somethind");
//  console.table([1, 2, 3, 4, 5]);
//  console.warn("Something");