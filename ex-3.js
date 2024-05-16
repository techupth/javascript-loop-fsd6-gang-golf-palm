// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here
for( let i=0; i<scores.length; i++){
    if(scores[i] < minScore){
        minScore = Math.min(scores[i]);
    };
};
console.log(minScore);


// เพื่อนทำแบบนี้
// let scores = [100, 20, 3, 1000];
// let minScore ;
// minScore = Math.min(...scores);
// console.log(minScore)

// let scores = [100, 20, 3, 1000];
// let minScore ;
// for(let i in scores){
// minScore = Math.min(i);
// }
// console.log(minScore)