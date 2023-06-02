// let arr = [];

//     function saveSpecificQuestionDataIDB(b) {
//     this.addOrUpdate(b);
//   }

//   function addOrUpdate(b){
//     retrun Promise arr.push(b);
//   }

//   let arr3 = [1,1,1,1,1,1,]

// async function name(){

//   for(let a of arr3){
//     if(b in arr){
//         console.log(2);
//     }
//     await saveSpecificQuestionDataIDB(3);
//   }

// }

var arr3 = [1, 2, 3, 4, 5, 6];
var arr = [];

const pushInArr = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push(Math.floor(Math.random() * 11));
            resolve("hello I am resolved");
            // console.log("insidePushArr");
        }, 1);
    });
};

const mainFunc = async () => {
    for (let indexArr3 in arr3) {
        // console.log(("index in arr", "[", indexArr3, "]", arr3[indexArr3]));
        for (let indexArr in arr) {
            if (arr[indexArr]) {
                console.log(
                    "index in arr",
                    "[" + indexArr + "]",
                    arr[indexArr]
                );
            }
        }
        await pushInArr();
    }
};

mainFunc();
