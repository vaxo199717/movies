
/*ფუნქციები*/


/*თუ ფუნქციაში შევცვლით გლობალურ (ფუნქციის გარეთ მყოფ ცვლადს ის შეიცვლება მას შემდეგ
 რაც ფუნქციას გამოვიძახებთ) .მაგალითად
 */
// let name = "ვახო";
// function myFunction() {
//     name = "ლაშა"
//     console.log("გამარჯობა, მე ვარ " + name)
// }
// console.log(name);
// myFunction();
// console.log(name); //ცვლადი შეიცვალა









/*თუ იგივე სახელის მქონე ცვლადი შევქმენით ფუნქციის შიგნით რაც გვაქვს ფუნქციის გარეთ, მაშინ
ფუნქციის შიგნით მყოფი გადაჩრდილავს გარეთ მყოფს და იქნება სხვა ცვლადი.ამ შემთხვევაში თუ ფუნქციის
შიგნით მყოფ ცვლადს ფუნქციის შიგნითვე მნიშვნელობას შევუცვლით შიდა ცვლადი შეიცვლება, გარეთა დარჩება
იგივე..
მაგალითი*/
// let name = "ვახო";
// function myFunction(){
//     let name = "ლაშა";
//     name = "რობერტა";
//     console.log(name)
// }
// myFunction(); //სახელი ლაშა შეიცვალა სახელი რობერტათი
// console.log(name); //სახელი ვახო დარჩა უცვლელი









// ცვლადები რომლებიც არიან ფუნქციის გარეთ ეწოდებათ გლობალური ცვლადები.. გლობალური ცვლადები
// არიან ხილულები ნებისმიერი ფუნქციისთვის, გარდა იმ შემთხვევისა თუ არ მოხდა ფუნქციაში იგივე
// სახელის მქონე სხვა ცვლადის შექმნა.
// უნდა ვეცადოთ რომ მაქსიმალურად მოვერიდოთ გლობალური ცვლადის შექმნას, უმჯობესია ცვლადები
// შევქმნათ ფუნქციებში.. თანამედროვე კოდებს აქვთ ძაიან ცოტა გლობალური ცვლადი, ან საერთოდ არ აქვთ









// შეგვიძლია ფუნქციებს მივანიჭოთ პარამეტრები (არგუმენტები)...
// ქვედა მაგალითში ფუნქციას აქვს 2 პარამეტრი

// function myFunction(from, text){    //არგუმენტებია from და text
//     console.log(from + ": " + text);
// } 
// myFunction("ვახო", "გამარჯობა");
// myFunction("ლაშა", "დავლიოთ?");

// ფუნქციის გამოძახებისას მინიჭებული პარამეტრები კოპირდება ფუნქციის ტანში და ფუნქცია იყენებს მათ









//ქვემოთ მოყვანილ მაგალითში ფუნქციაში ვცვლით ერთერთ პარამეტრს რომელიც უნდა მივანიჭოთ შემდგომში

// function myFunction(from, text){
//     from = "****" + from + "****";//პარამეტრ from-ს აქეთ იქიდან დავუმატეთ ფიფქები;
//     console.log(from + ": " + text);
// }
// let from = "ვახო";//გობალურად შევქმენით იგივე სახელის მქონე ცვლადი იგივე პარამეტრით ფიფქების გარეშე
// myFunction("ვახო", 'გამარჯობა');//ფუნქციამ შეცვალა from პარამეტრი (დაამატა ფიფქები)
// console.log(from + ": გამარჯობა");//ფუნქციამ არ შეცვალა გლობალური ცვლადი from








// ნაგულისხმევი მნიშვნელობები
// თუ პარამეტრებიან ფუნქციას გამოძახებისას არ მივანიჭებთ რმელიმე პარამეტრს, ის ავტომატურად გახდება
// undefined (განუსაზღვრელი). მაგალითად ზემოთ მოყვანილ ფუნქციაში შეგვიძლია მივანიჭოთ მხოლოდ ერთი პარამეტრი

// function myFunction(from, text){
//       console.log(from + ": " + text);
// }

// myFunction("ვახო"); // from-არის ვახო, text-არის undefined









// თუ გვინდა რომ რომელიმე პარამეტრს მივანიჭოთ ნაგულისხმევი მნიშვნელობა, შეგვიძლია გავაკეთოთ ასე: 

// function myFunction(from, text = "ტექსტი არარის მოცემული"){// ნაგულიხმევია text = "ტექსტი არარის მოცემული"
//       console.log(from + ": " + text);
// }

// myFunction("ვახო"); 









// პარამეტრის ნაგულისხმევ მნიშვნელობად შეგვიძლია არამხოლოდ სტრინგის ჩაწერა არამედ მაგალითად
// სხვა ფუნქციის 

// function myFunction(from, text = anotherFunction()){
//       console.log(from + ": " + text);
// }

// myFunction("ვახო");

//  ამ შემთხვევაში პარამეტრ text-ის ნაგულისხმევ მნიშვნელობად გვაქვს სხვა ფუნქცია, რომელიც შესრულდება
// მხოლოდ იმ შემთხვევაში თუ ფუნქციის გამოძახებისას ფუნქციას არ მივანიჭებთ text პარამეტრს და text-ის
// მნიშვნელობა გახდება ამ მეორე ფუნქციის შედეგი 





// ალტერნატიული ნაგულისხმევი პარამეტრები:
// ჩვენ ასევე შეგვიძლია პარამეტრზე დავაყენოთ ნაგულისხმევი მნიშვნელობა ფუნქციის ტანში, მაგალითად
// თუ პარამეტრს არ მივანიჭებთ ის ავტომატურად ხდება undefined შეგვიძლია გავაკეთოდ ასე:

// function myFunction(from, text){
//     if(text === undefined){
//         text = "ტექსტი არარის მოცემული"
//     }
//     console.log(from + "-----:-----" + text)
// }

// myFunction("ვახო");// შედეგი: ვახო-----:-----ტექსტი არარის მოცემული









// ასევე ნაგულისხმევი პარამეტრი შეგვიძლია გამოვსახოთ || ის დახმარებით. მაგალითად:

// function myFunction(from, text){
//     text = text || "text is not defined";
//     console.log(from + ": " + text)
// }
// myFunction("ვახო") // შედეგი:  ვახო: text is not defined
// myFunction("ვახო", 0) // შედეგი:  ვახო: text is not defined
// myFunction("ვახო", null) // შედეგი:  ვახო: text is not defined
// myFunction("ვახო", false) // შედეგი:  ვახო: text is not defined
// myFunction("ვახო", true) // შედეგი:  ვახო: true









// ნაგულისხმევი პარამეტრის გამოსახვა the nullish coalescing operator ??_ის დახმარებით:

// function myFunction(from, text) {
//     text = text ?? "text is not defined"
//     console.log(from + ": " + text)
// }
// myFunction("ვახო") // შედეგი:  ვახო: text is not defined
// myFunction("ვახო", 0) // შედეგი:  ვახო: 0
// myFunction("ვახო", null) // შედეგი:  ვახო: text is not defined









// მნიშვნელობის დაბრუნება: returning a value
//  დირექტივა return შეიძლება იყოს ნებისმიერ ადგილზე ფუნქციაში, როდესაც კოდის შესრულება მიაღწევს
// return-მდე ფუნქცია ჩერდება და მნიშვნელობა ბრუნდება ფუნქციის გამომძახებელ კოდთან. მაგალითად 

// function sum(a, b) { // ფუნქცია sum ორი პარამეტრით a და b.
//     return a + b; // ფუნქცია აბრუნებს a და b პარამეტრების ჯამს
//   }

// let result = sum(1, 2); /* შექმნილია ცვლადი result და გატოლებულია ფუნქცია sum-ის გამოძახებაზე,
// რომელსაც პარამეტრებად აქვს გადაცემული მნიშვნელობები 1 და 2 */
// console.log(result) // შედეგი:  3







// function checkAge(age) { // შევქმენით ფუნქცია პარამეტრით age.
//     if (age >= 18) {
//         return true; // თუ age მეტია ან ტოლი 18 მაშინ დააბრუნებს true-ს
//     } else {
//         return confirm('გაქვს მშობლების ნებართვა?'); // სხვა შემთხვევაში გამოაქვს დადასტურება
//     }
// }

// let yourAge = prompt('რამდენი წლის ხარ?', 18);// შევქმენით ცვლადი yourAge და გავუტოლეთ prompt-ს.

// if (checkAge(yourAge)) { /* prompt-დან მიღებული მნიშვნელობა ჩავსვით პარამეტრ age-ში (ამის შემდეგ გაეშვება
//     ფუნქცია checkAge რომელიც დააბრუნებს true-ს ან false-ს)*/
//     console.log('შესვლა ნებადართულია'); // თუ ფუნქცია checkAge დააბრუნებს true-ს
// } else {
//     console.log('შესვლა უარყოფილია'); // თუ ფუნქცია checkAge დააბრუნებს false-ს
// }






// function checkAge(age) {
//     if (age < 18) {
//         let permission = confirm("გაქვთ მშობლის ნებართვა?");
//         if (permission) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return true;
//     }
// }
// let yourAge = +prompt("ჩაწერე შენი ასაკი");

// function showMovie() {
//     if (!checkAge(yourAge)) {
//         return
//     }
//     alert("showing movie")
// }
// showMovie();





// ფუნქცია ცარიელი return-ით ან მის გარეშე აბრუნებს მნიშვნელობას undefined..
// თუ ფუნქცია არ აბრუნებს მნიშვნელობას ეს იგივეა თუ ის აბრუნებს undefined-ს

// function doNothing() { /* empty */ }

// alert(doNothing() === undefined); // true


// ცარიელი return-ც იგივეა რაც დააბრუნოს undefined

// function doNothing() {
//     return;
// }   
// alert(doNothing() === undefined); // true









// თუ დასაბრუნებელი გვაქვს რაიმე მნიშვნელობა და ჩანაწერი არის გრძელი შეიძლება ვიფიქროთ რომ
// უფრო ლამაზი იქნება თუ return-ს დავტოვებთ ზედა ხაზზე და მნიშვნელობას ჩამოვიტანთ ახალ ხაზზე.
// ეს იქნება შეცდომა, რადგან თუ return-ის გასწვრივ ხაზზე აღარაფერი წერია javascript-ი თვლის,
// რომ return-თან არის წერტილმძიმე და ის ავტომატურად გახდება ცარიელი return, რომელიც აბრუნებს undefined-ს.
// შეცდომაა...

// return // აქ რეთურნის შემდეგ იგულისხმება;
//  (some + long + expression + or + whatever * f(a) + f(b))

// თუ გვინდა რომ return ჩავწეროთ რამდენიმე სტრიქონად მაშინ შეგვიძლია მნიშვნელობა ჩავსვათ ფრჩხილებში, მაგალითად.

// return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
//     )








// ფუნქციის სახელი უნდა იყოს მოკლე და მაქსიმალურად უნდა ასახავდეს ფუნქციის შიგთავსს. რათა მისი
// გარკვევა იყოს ადვილი სხვისთვის.მაგალითად.

// ფუნქცია რომლის სახელიც იწყება show... როგორც წესი გამოიყენება ფუნქციაზე რომელიც გვაჩვენებს რაღაცას.
// რომელიც იწყება...
// get... - აბრუნებს მნიშვნელობას.
// calc... - ითვლის რაღაცას.
// create... - ქმნის რაღაცას.
// check... - ამოწმებს რაღაცას და აბრუნებს true ან false მაგალითად.

// showMessage(..)     // შეტყობინების ჩვენება
// getAge(..)          // აბრუნებს ასაკს
// calcSum(..)         // ითვლის ჯამს და აბრუნებს შედეგს
// createForm(..)      // ქმნის ფორმას და აბრუნებს მას
// checkPermission(..) // ამოწმებს ნებართვას და აბრუნებს true ან false







// ერთი ფუნქცია  - ერთი მოქმედება.

// ფუნქცია უნდა აკეთებდეს მხოლოდ იმას რასაც გვთავაზობს მისი სახელი, არაფერ მეტს.

// ორი დამოუკიდებელი მოქმედება როგორც წესი იმსახურებს ორ ფუნქცი, მაშინაც კი როდესაც ისინი
// უნდა გამოვიძახოთ ერთად.(ამ შემთხვევაში შეგვიძლია გავაკეთოთ მესამე ფუნქცია რომელიც იძახებს ამ ორ ფუნქციას).

// ამ წესის დარღვევის მაგალითები:

// getAge() - იქნება ცუდი თუ ის გვაჩვენებს alert-ს რომელსაც გამოაქვს ეს ასაკი (მან მხოლოდ უნდა მიიღოს ასაკი).
// createForm() - იქნება ცუდი თუ ის ამავდროულად შეცვლის, დაამატებს მასში რამეს და ასე შემდეგ (მხოლოდ უნდა შექმნას და დააბრუნოს).
// checkPermission() - იქნება ცუდი თუ ის აჩვენებს წვდომას ნებადართულია თუ არა. (მხოლოდ უნდა შეამოწმოს და დააბრუნოს შედეგი)


/*=======================ფუნქციები=======================*/

// ================== Function expressions ==================

//function declaration:
// function sayHi() {
//     alert( "Hello" );
//   }


//ასევე არსებობს ფუნქციის შექმნის მეორენაირი სინტაქსი 
//Function Expression:

// let sayHi = function() {
//     alert( "Hello" );
//   };

// აქ ფუნქცია შექმნილია და გატოლებულია ცვლადისთვის, როგორც მნიშვნელობა.

//ზედა და ქვედა კოდის მნიშვნელობები არის ერთი და იგივე.

//ქვედა ფუნქციაში ისიც კი შეგვიძლია რომ გამოვიტანოთ alert-ით, console.log-ით და ასე შემდეგ.
//ამის შედეგად გამოიტანს მთლიან ფუნქციას. მაგალითად.

// let sayHi = function() {
//     alert( "Hello" );
//   };
//   alert(sayHi); // შედეგი იქნება ეს:  function() {alert( "Hello" )}

//ბოლო ხაზი alert(sayHi) გამოიტანს ფუნქციის კოდს და არა ფუნქციის შედეგს, რადგან
//sayHi გვიწერია როგორც ცვლადის მნიშვნელობა (ფრჩხილების გარეშე) და არა როგორც ფუნქცია. 

// alert(sayHi())// ამ შემთხვევაში გამოიტანს ფუნქციის შედეგს - hello-ს.


//ჩვენ შეგვიძლია დავაკოპიროთ ფუნქცია სხვა ცვლადში
//მაგალითად:

// function sayHi() {   // (1) შექმნა
//     alert( "Hello" );
//   }

//   let func = sayHi;    // (2) დაკოპირება

//   func(); // Hello     // (3) დაკოპირებული
//   sayHi(); // Hello    //     ორიგინალი

// 1. შევქმენით ფუნქცია
// 2. ჩავაკოპირეთ ის ცვლად func-ის მნიშვნელობაში (sayHi-ის შემდეგ არ გვიწერია ფრჩხილები, ასე რომ ყოფილიყო
// func-ში ჩაკოპირდებოდა sayHi ფუნქციის შედეგი და არა თავად ფუნქცია).
// 3. ახლა ფუნქცია შეგვიძლია გამოვიძახოთ ორივენაირად unc(); და sayHi(); შედეგი ერთნაირი იქნება იქნება.


// იგივე რამე შეგვიძლია გავაკეთოთ მეორენაირ ფუნქციის სინტაქსზეც

// let sayHi = function() {
//     alert( "Hello" );
//   };

//   let func = sayHi;
//   // ...


// რატომ არარის საჭირო წერტილმძიმე პირველი სინტაქსის მქონე ფუნქციის ბოლოს?
// იმიტომ რომ ამის საჭიროება არ აქვთ ისეთ კოდის ბლოკების და სინტაქსის სტრუქტურის ბოლოს რომლებსაც
// იყენებენ მაგალითად:
// if {...} // წერტილმძიმე არაა საჭირო
// for{...} // წერტილმძიმე არაა საჭირო
// function func{...} // წერტილმძიმე არაა საჭირო

// მაგრამ მეორე სინტაქსის მქონე ფუნქცია საჭიროებს, რადგან ის წარმოდგენილია როგორც ცვლადი,
// ცვლადის ბოლოს კი იწერება წერტილ-მძიმე,
// მაგალითად:

// let name = "ვახო"; // როგორც ამ შემთხვევაშია საჭირო ბოლოს წერტილმძიმე.
// let sayHi = function(){...};// ასევეა საჭირო ამ შემთხვევაშიც.



// callback ფუნქციები

// ვწერთ ფუნქციას რომელსაც აქვს 3 პარამეტრი:

// function ask(question, yes, no){...}

//question
//შეკითხვის ტექსტი

//yes
// ფუნქცია რომელიც გაეშვება თუ პასუხი იქნება კი

//no
//ფუნქცია რომელიც გაეშვება თუ პასუხი იქნება არა

//ფუნქციამ უნდა დასვას კითხვა და მომხმარებლის პასუხის მიხედვით გამოიძახოს ან yes, ან no ფუნქცია.

// function ask(question, yes, no) {
//     if (confirm(question) == true) {
//         yes()
//     }
//     else {
//         no()
//     }
// }

// function showOk() {
//     alert("შენ ხარ სრულწლოვანი")
// }

// function showCancel() {
//     alert("შენ არ ხარ სრულწლოვანი")
// }

// ask("ხარ 18 წლის ან მეტის?", showOk, showCancel);

//არგუმენტებს showOk და showCancel ეწოდებათ ask ფუნქციის callback ფუნქციები


//ეს ყველაფერი შეგვიძლია უფრო მოკლედ ჩავწეროთ, მაგალითად:

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "ხარ 18 წლის ან მეტის?",
//     function () { alert("შენ ხარ სრულწლოვანი"); },
//     function () { alert("შენ არ ხარ სრულწლოვანი"); }
// );

// ამ მაგალითში  ფუნქციები არის დეკლარირებული პირდაპირ ask ფუნქციის გამოძახებისას,
// არგუმენტების (პარამეტრების) მნიშვნელობებში.

// ასეთ ფუნქციებს ეწოდებათ ანონიმური ფუნქციები (anonymous) რადგან მათ არ აქვთ სახელები.
// ასეთი ფუნქციები არ არიან ხელმისაწვდომები ask ფუნქციის გარეთ, რადგან ისინი არ არიან
// დანიშნულები როგორც ცვლადები

let ask = function(question, yes, no){
    if(confirm(question)){
        yes()
    }else no()
}

ask(
    "ხარ სრულწლოვანი?",
    () => alert("შენ გაქვს შესვლის უფლება"),
    () => alert("შენ არ გაქვს შესვლის უფლება")
)

// ფუნქცია არის მოქმედების წარმომდგენელი მნიშვნელობა.
// ჩვეულებრივი მნიშვნელობები, მაგალითად string ან number წარმოადგენენ მონაცემებს.
// ფუნქცია შეიძლება იყოს აღქმული როგორც რაიმე მოქმედება, ის შეგვიძლია გადავაწოდოთ ცვლადებს
// შორის და გავუშვათ როცა გვინდა და სადაც გვინდა.



// Function Expression vs Function Declaration

// Function Expression
// let sum = function(a, b) {
//     return a + b;
//   };

// // Function Declaration
// function sum(a, b) {
//     return a + b;
//   }

// Function Expression იქმნება მაშინ როცა კოდის შესრულება მიაღწევს მანდამდე და მისი
// გამოყენება შესაძლებელია მხოლოდ ამ მომენტიდან
// let sum = function //როცა კოდის შესრულება მივა ამ ჩანაწერის მარჯვენა მხარეს, ამ დროს იქმნება
// ფუნქცია და მისი გამოყენება შეიძლება ამ მომენტიდან დაწყებული.

// Function Declaration არის განსხვავებული
// ის შეიძლება გამოიძახო მანამ სანამ მოხდება მისი განსაზღვრა.
// მაგალითად გლობალური Function Declaration არის ხილული მთელ სკრიფტში მიუხედავად იმისა თუ სად წერია ის.
// რადგან სანამ მთლიანი კოდი გაეშვება javascript-ი ჯერ გადახედავს კოდს ნახავს ყველა
// გლობალურ Function Declaration-ს და შემდეგ დაიწყებს კოდის შესრულებას, ამიტომ ისინი კოდისთვის უკვე ცნობილია.
// მაგალითი:
// sayHi("vakho"); // Hello, vakho

// function sayHi(name) {
//   alert( "Hello " + name);
// }


// Function Expression-ით ეს იქნება შეცდომა.
//მაგალითი:
// sayHi("vakho"); // error!

// let sayHi = function(name) { 
//   alert("Hello " + name);
// };



// კიდევ ერთი სპეციალური თვისება Function Declaration-ის არის თავისი ბლოკის სკოუპი.

// მკაცრ (ზუსტ) რეჟიმში. როცა Function Declaration არის კოდის ბლოკში, ის ხილულია ყველგან ამ ბლოკის შიგნით,
// მაგრამ არა მის გარეთ.

//მაგალითად, წარმოვიდგინოთ რომ გვინდა გამოვაცხადოთ ფუნქცია welcome() age ცვლადის მიხედვით, რომელსაც მივიღებთ
// გაშვების დროს. და შემდეგ გვინდა გავიშვათ ეს ფუნქცია მოგვიანებით.

// თუ ჩვენ გამოვიყენებთ function declaration-ს ის არ იმუშავებს ისე როგორც განზრახული გვქონდა.

// let age = prompt("ჩაწერე შენი ასაკი");

// გამოვაცხადოთ ფუნქცია შემდეგი პირობით.
// if (age < 18) {

//   function welcome() {
//     alert("გამარჯობა!");
//   }

// } else {

//   function welcome() {
//     alert("მოგესალმებით!");
//   }

// }

// ...გამოვიყენოთ ფუნქცია შემდეგში
// welcome(); // Error: welcome is not defined

// გამოგვიტანს შეცდომას იმიტომ, რომ Function Declaration მხოლოდ ხილულია იმ ბლოკის სკოუპში სადაც ის მდებარეობს.


// მეორე მაგალითი

// let age = 16; // ავიღოთ 16 მაგალითად

// if (age < 18) {
//   welcome();               // \   (გაეშვება რადგან პირობა შესრულდა)
//                            //  |
//   function welcome() {     //  |
//     alert("გამარჯობა!");       //  |  Function Declaration ხელმისაწვდომია
//   }                        //  |  ყველგან ამ ბლოკში, სადაც ის გამოცხადდა
//                            //  |
//   welcome();               // /   (აქ გაეშვება)

// } else {

//   function welcome() {
//     alert("მოგესალმებით!");
//   }
// }

// აქ უკვე აღარ იმუშავებს რადგან ვართ if-else_ის ბრეკეტებს გარეთ
// ამიტომ ვერ შევძლებთ მის გამოყენებას აქ

// welcome(); // Error: welcome is not defined


// რა შეგვიძლია გავაკეთოთ რომ გავხადოთ welcome() ხილული if-ის გარეთ?

// საუკეთესო ვარიანტი იქნება თუ გამოვიყენებთ function Expression და მივანიჭებთ მას ცვლადს,
// რომელიც იმყოფება if-ის გარეთ
// მაგალითი:

// let age = prompt("ჩაწერე შენი ასაკი");

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("გამარჯობა!");
//   };

// } else {

//   welcome = function() {
//     alert("მოგესალმებით!");
//   };

// }

// welcome(); // ახლა მუშაობს


// ან შეგვიძლია უფრო გავამარტივოთ შემოკლებული if-ის დახმარებით

// let age = prompt("ჩაწერე შენი ასაკი");

// let welcome = (age < 18)?
// function(){alert("გამარჯობა");}:
// function(){alert("მოგესალმებით");}

// welcome();


// როგორ ავარჩიოთ რომელი ფუნქცია სად გამოვიყენოთ?
// პირველ რიგში უნდა განვიხილოთ Function Declaration, რადგან ის გაძლებს უფრო მეტ თავისუფლებას.
// ის შეგვიძლია გამოვიყენოთ მანამ სანამ მას შევქმნით. ასევე უფრო ადვილი წასაკითხია.







// ============= arrow ფუნქციები ======================

// არსებობს ძალიან მარტივი და მოკლე სინტაქსი ფუნქციის შესაქმნელად, ხშირად ეს უკეთესია 
// ვიდრე Function Expressions.

// მათ ეწოდებათ arrow functions რადგან ისინი ასე გამოიყურებიან.

// let func = (arg1, arg2) => expression

// ეს ხაზი ქმნის ფუნქციას სახელად func რომელიც იღებს არგუმენტებს (პარამეტრებს) arg1 და arg2,
// შემდეგ კი მარჯვენა მხარეს მოდის expression (რაც გვინდა რომ გააკეთოს ფუნქციამ).
// ეს არის შემოკლებული ვერსია შემდეგი ფუნქციის:

// let func = function(arg1, arg2) {
//     return expression;
//   };


// ვნახოთ კონკრეტული მაგალითი:

// let sum = (a, b) => a + b; // ფუნქცია იღებს არგუმენტებს a და b და  "=>"-ის შემდეგ აბრუნებს a + b შედეგს
// alert( sum(1, 2) ); // 3

// ეს არის შემოკლებული ფორმა შემდეგი ფუნქციის:

// let sum = function(a, b) {
//     return a + b;
//   };
// alert( sum(1, 2) ); // 3


// თუ ჩვენ გვაქვს მხოლოდ 1 არგუმენტი მაშინ ფრჩხილები შეგვიძლია გამოვტოვოთ.
// მაგალითი:

// let double = a => a*2;
// alert(double(3)); // 6


// თუ არგუმენტი არ გვაქვს ამ შემთხვევაში ფრჩხილების დაწერა აუცილებელია (უბრალოდ ისინი იქნება ცარიელი).
// მაგალითი:

// let sayHi = () => alert("გამარჯობა!");
// sayHi();



// arrow ფუნქციები შეგვიძლია გამოვიყენოთ ისევე როგორც Function Expressions. მაგალითად:

// let age = prompt("რამდენი წლის ხარ?");

// let welcome = (age < 18) ?
//   () => alert('გამარჯობა') :
//   () => alert("მოგესალმებით!");

// welcome();



// მრავალხაზიანი arrow functions

// ხშირად გვჭირდება რომ =>_ის მარჯვენა მხარეს ორი ან მეტი მოქმედება ჩავწეროთ.
// მაგალითად:

// let func = (a, b) => { // მრავალ ხაზიან arrow ფუნქციაში გვჭირდება ბრეკეტები ბრეკეტები
//     let result = a + b;
//     return result; // იმ შემთხვევაში თუ მოქმედებას ვწერთ ბრეკეტებში აუცილებელია დავწეროთ return
//     // თუ ვწერთ ცალ ხაზიან arrow ფუნქციას იქ არ გვჭირდება ბრეკეტები და შესაბამისად 
//     // არ გვჭირდება return-ის დაწერა, ის თავისთავად იგულისხმება
// }
// alert(func(5, 10));



// ============= arrow ფუნქციები ======================
//=============== ობიექტები ======================


// ჯავასკრიფტში არის 8 მონაცემთა ტიპი, მათგან 7 არის პრიმიტიული, რომელთა მნიშვნელობებიც
// შეიცავენ მხოლოდ ერთ რამეს, მაგალითად: string, number და ასე შემდეგ.

// ობიექტები გამოიყენება იმისათვის რომ შევინახოთ ცვლადი მონაცემების კოლექციები და უფრო
// რთული რამეები.

// ობიექტები იქმნება ფიგურული ბრჩხილებით {...} 
// ობიექტის შიგთავსი მოიცავს key-ს და value-ს. სადაც key არის სტრინგი რომელიც არის
// property-ს სახელი და value, რომელიც შეიძლება იყოს ნებისმიერი რამე.

// ცარიელი ობიექტი შეიძლება შევქმნათ ორნაირად.
// მაგალითი:

// let user = new Object(); // "object constructor" syntax
// let user1 = {};  // "object literal" syntax


// შეგვიძლია ჩAვსვათ რაიმე key და value ობიექტში.
// მაგალითად:

// let user = {     // ობიექტი
//     name: "ვახო",  // key "name" და მნიშვნელობა "ვახო"
//     age: 22        //key "age" და მნიშვნელობა 30
//   };






// ჩვენ შეგვიძლია წავიკითხოთ, ჩავამატოთ ან წავშალოთ ობიექტში რაიმე.
// მაგალითად:

// let user = {     // ობიექტი
//     name: "ვახო",  // key "name" და მნიშვნელობა "ვახო"
//     age: 22        //key "age" და მნიშვნელობა 30
//   };

//   alert(user.name)// გამოიტანს "ვახო"-ს ...

//   დამატება:

//   user.email = "vaxoozgebishvili.27@gmail.com";// ობიექტში დაემატა key email მნიშვნელობით "vaxoozgebishvili.27@gmail.com"

//   alert(user.email);// გამოიტანს "vaxoozgebishvili.27@gmail.com".

// წაშლა:

// delete user.age;

// age_ წაიშალა ობიექტიდან.

// console.log(user)// გამოიტანს {name: "ვახო", email: "vaxoozgebishvili.27@gmail.com"}





// ასევე შეგვიძლია გამოვიყენოთ მრავალ სიტყვიანი key, მაგრამ ის უნდა იყოს ""_ში
// მაგალითად:

// let object = {
//     "likes javascript": true,
//     "is adult": true,
//     "personal number": 35988878987
// }

// ასეთი მრავალ სიტყვიანი ფროფერთიების გამოსატანად წერტილი არ მუშაობს
// უნდა გამოვიყენოთ კვადრატული ფრჩხილები

// console.log(object["likes javascript"])


// ასევე კვადრატული ფრჩხილები გვეხმარება რომ მივიღოთ ფროფერთის სახელი რაიმეს შედეგის მიხედვით
// მაგალითად:

// let object = {
//     name: "ვახო"
// }

// let key = "name";

// alert(object[key])// გამოიტანს "ვახო"_ს რადგან ცვლადი key უდრის "name". ეს მნიშვნელობა კი უდრის
// ობიექტის ფროფერთის

// ან შეგვიძლია გავაკეთოთ ასე:

// let object = {
//     "first name": "ლაშა",
//     "last name": "წეველიძე",
//     age: 22
// };

// let lastName = prompt("რა გინდათ იცოდეთ მომხმარებელზე"); 

// alert(object[lastName]); // თუ prompt-ში ჩავწერთ last name_ს აქ გამოგვიტანს "ოზგებიშვილი"-ს





// The “for…in” loop

// for...in -ის გამოყენების დროს პირველ რიგში გამოიტანს იმ key-ს რომლებიც არიან რიცხვები (დაალაგებს ზრდსადობის მიხედვით)
// ასევე გამოიტანს მათ შესაბამის მნიშვნელობებს:

// let user = {
//     name: "ვახო",
//     age: 30,
//     isAdmin: true,
//     1:"ეს გამოჩნდება პირველი"
//   };

//   for (let info in user) {
//     // infos
//     console.log( info );  // 1, name, age, isAdult
//     // info-ს მნიშვნელობები
//     console.log( user[info] ); // ეს გამოჩნდება პირველი, ვახო, 22, true
//   }


// თუ არ გვინდა რომ რიცხვითი property-ები დაალაგოს თანმიმდევრობით შეგვიძლია გავაკეთოთ ასე:

// let user = {
//     "+12": "ვახო",
//     "+5": 22,
//     "+54": true,
//     "+1":"ეს არ გამოჩნდება პირველი"
//   };

//   for (let info in user) {
//     // infos
//     console.log( +info );  // 12, 5, 54, 1   ... + ნიშანს info-ს წინ key გადაჰყავს number-ში
//     // info-ს მნიშვნელობები
//     console.log( user[info] ); // ვახო, 22, true, ეს არ გამოჩნდება პირველი
//   }




//ობიექტის მეთოდები ----------- object methods, this

// ჩვენ შეგვიძლია შევქმნათ ობიექტის property და მივანიჭოთ მნიშვნელობად ფუნქცია
// მაგალითად:

// let user = {
//     firstName: "vakho",
//     lastName: "ozgebishvili",
//     age: 22
// };

// user.sayHi = function(){ // user_ობიექტში შევქმენით property_sayHi და გავუტოლეთ ფუნქციას
//     alert("hello")
// }

// user.sayHi();// hello

// ფუნქციას რომელიც არის ობიექტის property ეწოდება მეთოდი (method)
// ანუ ჩვენ გვაქვს მეთოდი sayHi.


// ასევე შეგვიძლია გამოვიყენოთ უკვე არსებული ფუნქციაც მაგალითად:

// let sayHi = function () {
//     alert("vakho")
// }

// let object = {

// }

// object.name = sayHi

// object.name()


// არსებობს ობიექტის მეთოდების ჩაწერის შემოკლებული სინტაქსი
// მაგალითად:

// გრძელი სინტაქსი:

// let object = {
//     sayHi: function () {
//         alert("hello")
//     }
// }

// შემოკლებული სინტაქსი:

// let object = {
//     sayHi(){ // იგივეა რაც sayHi: function()
//         alert("hello") 
//     }
// }


// ------- this-ი მეთოდებში

// ობიექტის მეთოდს, ანუ რაიმე ფუნქციას რომელიც არის ობიექტში სჭირდება წვდომა ამავე ობიექტზე.
// მაგალითად ქვემოთა კოდში მეთოდ sayHi-ს სჭირდება წვდომა user-ის name-ზე. ამისათვის მეთოდში
// შეგვიძლია გამოვიყენოთ this საკვანძო სიტყვა.

// let user = {
//     name: "ვახო",
//     age: 22,

//     sayHi() {
//         // "this" არის "მიმდინარე ობიექტი", ამ შემთხვევაში user. 
//         alert(this.name);
//     }
// };

// როდესაც გამოვიძახებთ user-ობიექტის sayHi მეთოდს შესრულდება მასში არსებული მოქმედება,
// this-ს მნიშვნელობა იქნება user, ამიტომ გამოიტანს ამ ობიექტში არსებულ name property-ს მნიშვნელობას.

// user.sayHi(); // ვახო


// arrow ფუნქციებს არ აქვს this

// arrow ფუნქციებს არ აქვს თავიანთი this, თუ ჩვენ მივუთითებთ this-ს ასეთი ფუნქციიდან, ის აიღებს
// გარე "ჩვეულებრივი" ფუნქციიდან

// ქვემოთა მაგალითში arrow() იყენებს this-ს გარე user.sayHi() მეთოდიდან:

// let user = {
//     firstName: "ვახო",
//     sayHi() {
//       let arrow = () => alert(this.firstName); // ეს იგივეა რაც
//       alert(this.firstName) // ეს
//       arrow();
//     }
//   };

//   user.sayHi(); // ვახო (2 - ჯერ)




// let checkAge = (age) => {
//     if(age < 18 && (!isAllowed())){
//         return false;
//     }return true;
// }

// function isAllowed(){
//     if(confirm("mshoblis nebartva")){
//         return true;
//     }return false;
// }

// let yourAge = prompt("chaweret asaki");

// checkAge(yourAge)?alert("shesvla nebadartulia"):alert("shesvla uaryofilia")



// constructor ფუქციები

// ასეთი ფუნქციები არიან ჩვეულებრივი ფუნქციები, მაგრამ არის 2 განსხვავება.

// 1)მათი სახელი უნდა იწყებოდეს დიდი ასოთი
// 2)ისინი უნდა შესრულდნენ მხოლოდ new ოპერატორით

// მაგალითად:

// function User(name) {
//     this.Name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   alert(user.Name); // Jack
//   alert(user.isAdmin); // false

