

// question 1

let score = 85;
let grade;

switch (true) {

    case score >= 90:
        grade = "A";
        break;

    case score >= 80:
        grade = "B";
        break;

    case score >= 70:
        grade = "C";
        break;

    case score >= 60:
        grade = "D";
        break;

    default:
        grade = "F";
}

console.log(`Grade: ${grade}`);

let result = score >= 75 ? "Passed" : "Failed";

console.log(`Result: ${result}`);


// question 2

let stringNumber = "25";

let num = Number(stringNumber);

console.log(`Converted number: ${num}`);
console.log(`Data type: ${typeof num }`);

let values = [0, "", "hello", null, undefined, NaN];

for (let value of values) {

    if (value) {
        console.log(value, "is truthy");
    } else {
        console.log(value, "is falsy");
    }
}


// question 3
function greetingBot(name, isMorning) {

    if (isMorning) {
        return `Good morning, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
} 

console.log(greetingBot("Edwin", true));
console.log(greetingBot("Thage", false));


// question 4
const post = {

    username: "Edwin",

    caption: "Ntwe e defficult yerr!",

    likes: 25,

    comments: [
        "Try harder!",
        "Keep learning!",
        "You'll be fine!!!"
    ],

    addLike: function() {
        this.likes+=1;
    }
};

console.log(`Likes before: ${post.likes}`);

post.addLike();

console.log(`Likes after: ${post.likes}`);

const { username, caption } = post;

console.log(`Username: ${username}`);
console.log(`Caption: ${caption}` );


// // question 5

// const num1 = [1, 2, 3, 4, 5];

// const num2 = [6, 7, 8, 9, 10];



// const combinedArray = [...num1, ...num2];

// console.log("Combined Array:");

// console.log(combinedArray);





   


// question 5

const numbers1 =[1, 2, 3];
const numbers2 =[4, 5, 6];

const combined = [...numbers1,...numbers2];
console.log("Combined nums:",combined);


const rows = 5;
for (let i=1; i<= rows; i++)  {
    let line = " ".repeat(rows - 1) + "* ".repeat(i);
    console.log(line.trimEnd());
}

let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}