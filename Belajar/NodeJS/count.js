 let adder = (a, b) => {
     return a + b;
 };

 let hearts = (life, work) => {
     if (life > work) {
         return console.log("My life is Fine");
     } else {
         return console.log("My life is bad");
     }
 }

 module.exports.adder = adder;
 module.exports.hearts = hearts;