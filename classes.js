// let promiseAfter3seconds = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("resolved after 3 seconds");
//     }, 3000);
// })
// let promiseAfter2seconds = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("resolved after 2 seconds");
//     }, 2000);
// })
// let promiseAfter1seconds = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("resolved after 1 seconds");
//     }, 1000);
// })

// // promiseAfter3seconds.then(result=>console.log(result)).catch();
// Promise.all([promiseAfter3seconds,promiseAfter2seconds,promiseAfter1seconds]).then(result=>console.log(result)).catch(err=>console.error(err));

// let apiCall = new Promise((resolve, reject) => {
//     resolve({
//         name: "Default product template",
//         wrapper: "div#div_id.div_class[attribute-one=value]",
//         sections: {
//             main: {
//                 type: "product",
//             },
//         },
//         order: ["main"],
//     });
// });

// async function chungus() {
//     const x = await apiCall.then((res) => JSON.stringify(res)).then(data=>JSON.parse(data));
//     console.log(x);
// }

// chungus();

//api call

// import fetch from 'node-fetch';

// async function apiCaller(){
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return data;
// }

// const value = apiCaller();
// console.log(value);

