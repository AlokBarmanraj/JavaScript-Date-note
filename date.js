//-------JavaScript Date-------//


const myDate = new Date();  
console.log(typeof myDate);      // আমরা আগেই জেনেছি (new) কিউয়ার্ড নিলে সেটা object হয়ে যায় । //

console.log(myDate);      //যদি আমরা console.log(myDate); এই ভাবে myDate লিখি তাহলে TERMINAL এবং Console মানের মধ্যে কিছু ভিন্নতা দেখতে পাব । TERMINAL দেখতে পাচ্ছি 2025-08-08T14:09:13.367Z ভাবে এবং Console দেখতে পাচ্ছি Fri Aug 08 2025 19:52:34 GMT+0600 (Bangladesh Standard Time) ভাবে ।//

console.log(myDate.toString());     //যদি আমরা TERMINAL এবং Console একই মান দেখতে চাই তাহলে myDate সাথে {.toString()} যোগ করতে হবে । //

console.log(myDate.toDateString());     //এখানে আমরা toString() এর পরিবর্তে toDateString() দিই তাহলে মান Fri Aug 08 2025 দেখাচ্ছে  //

console.log(myDate.toLocaleString());     //এখানে আমরা toDateString() এর পরিবর্তে toLocaleString() দিই তাহলে মান 8/8/2025, 8:32:40 PM দেখাচ্ছে //

console.log(myDate.toLocaleString ('default',{
weekday: 'long',                  
}));            //এখানে আমরা toLocaleString এর পরে Fri কে Friday তে পরিণত করার জন্য ('default',{weekday: 'long',}) ব্যবহার করেছি । weekday: পরে 'long' না ব্যবহার করে আমরা Short ব্যবহার করতে পারব, যার ফরে মান Friday না হয়ে Fri থেকে যাবে । //

const updateDate = new Date(2025, 7, 8);            //এখানে  2025 বছর, 7 মাস, 8 তারিখ । মাস 0 থেকে শুরু হয় 0=জানুয়ারি  যার কারণে 7 হবে আগস্ট //
console.log(updateDate);

const updateDate1 = new Date(2025, 7, 8, 9, 3, 25);      //এখানে  2025 বছর, 7 মাস, 8 তারিখ, 9 ঘণ্টা, 3 মিনিট, 25 সেকেন্ড //
console.log(updateDate1);

const updateDate2 = new Date(2025, 7, 8, 9, 3, 25);      //এখানে যদি  9 ঘণ্টা, 3 মিনিট, 25 সেকেন্ড কেটে দেন তাহলে মান Fri Aug 08 2025 00:00:00 GMT+0600 (Bangladesh Standard Time) দেখাবে  কোন সমস্যা হবে না //
console.log(updateDate2);

const updateDate3 = new Date(2025);       //এখানে যদি 7 মাস, 8 তারিখ, 9 ঘণ্টা, 3 মিনিট, 25 সেকেন্ড কেটে দেন এবং শুধু 2025 রেখে দেন তাহলে JavaScript এটাকে মিলিসেকেন্ড মনে করবে । এবং JavaScript ডিফল্ট যে সময় Thu Jan 01 1970 06:00:02 GMT+0600 (Bangladesh Standard Time) এটা দেখাবে //
console.log(updateDate3);

const updateDate4 = new Date('08-08-2025, 9:25:45');    //নিজের ইচ্ছে মতো  তারিখ, মাস, বছর, ঘণ্টা, মিনিট, সেকেন্ড দিতে চাইলে //
console.log(updateDate4);

const myTime = Date.now();       //এখানে (new) কিউয়ার্ড নিতে হবে না // Date.now() দিয়ে আমরা একটি কাজ করতে কত সময লাগতেছে সেটা বুঝতে পারি //
console.log(myTime);

//Date.now() কিভাবে কাজ করে//
const myTime1 = Date.now();
/*
function simpletask (){
    for (let step = 0; step < 100000; step++) {      //এখানে step  পর < 100000;  বেশি বড় সংখ্যা নেওয়া  ঠিক হবে না এতে কম্পিউটার হ্রাং করতে পারে //
        console.log('JavaScript Practice');       //এখানে 'JavaScript Practice', পরে step নিলে পর্যায় ক্রমে সব দেখাবে //
    }
}
let starTime = Date.now();
simpletask();
let endTime = Date.now();
console.log(`The Task Complete ${endTime - starTime} millisecend`);      //millisecend হিসাব দেখতে চাইলে //
*/

const myTime2 = Date.now();
console.log(myTime2 /1000);     //মিলিসেকেন্ড থেকে  সেকেন্ড  //
console.log(Math. floor(myTime2 /1000));    //  দমমিক না দেখাতে চাইলে //
 console.log(myTime2 / 60);     //সেকেন্ড কে মিনিটে //


 const  myTimeDate = new Date();
 console.log(myTimeDate.getDate());      //তারিখ দেখার জন্য //
 
console.log(myTimeDate.getDay());
console.log(myTimeDate.getFullYear());
console.log(myTimeDate.getHours());
console.log(myTimeDate.getMilliseconds());        // আমরা console.log(myTimeDate পরে (.) দিলে সব দেখতে পাব //


