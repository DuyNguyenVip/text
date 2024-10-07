/**
 * Khai báo biến
 * khai báo...
 */

// var fullName = 'Nguyễn Lê Khánh Duy' //Khai báo tên
// var age = 20; // Khai báo tuổi

//Gọi hàm thông báo

// alert(fullName);
// alert(age);

//Gọi hàm phương thức console 
// console.log(fullName)


// confirm('Xác nhận bạn đủ tuổi');


// prompt('Xác nhận bạn đủ tuổi');

// setTimeout(function() { 
//     console.log('Đây lag log' +Math.random())
// },1000)

//Toán tử số học Arithmetic
// var a = 1 + 2
// console.log(a)

//Toán tử gán Assigment
// var fullName = 'duy'

//Toán tử so sánh Comparison
// var a= 1;
// var b = 2;
// if(a < b){
//     console.log('Dung');
// }

// Toán tử logic Logical
// var a =1;
// var b=2;
// if(a>0 && b>0){
//     console.log('a & b lớn hơn 0')
// }


/**
 * Toán tử số học
--> Cộng
--> Trừ
-> Nhân
--> Lũy thừa
--> Chia
--> Chia lấy số dư
--> Tăng 1 giá trị số
--> Giảm 1 giá trị số
 */

// var a=1;
// a--

// var c= a;

// console.log(a);


// Toán tử ++ --
// Prefix (Tiền tố) & Postfix (Hậu tố) 

// var a = 6;

// //Tiền tố
// //Việc 1: +1 cho a, a= a + 1=> a =7
// //Việc 2: Trả về a sau khi đc +1

// var output = ++a;

// console.log('output: ',output);

//Hậu tố
//Việc 1: 'a coppy', 'a copy' = 6
//Việc 2: + 1 cho a, a = a+1=>a=7
//Việc 3: trả về 'a copy'

// var output = a++;

// console.log('output: ',output);
// console.log('a: ', a);


// var output = ++a  + a--
// console.log('output: ', output);



// /** Toán tử gán
//  Toán tử     Ví dụ      Tương đương
//  =           x = y        x = y
//  +=          x +=y       x = x + y
//  -=          x -=y       x = x - y
//  *=          x *=y       x = xy
//  /=          x /=y       x = x / y
//  **=         x **=y      x = xzy
//  */

// var a =1;

// a **= 2;

// console.log(a)



// /** Toán tử chuỗi - String operator
//  * */ 

// // var name = 'Duy';

// // name = name + ' Nguyễn'

// // console.log(name);



// /**Toán tử so sánh
// Toán tử
// ==           -->          Bằng
// !=           -->          Không bằng
// >            -->          Lớn hơn
// <            -->          Nhỏ hơn
// >=           -->          Lớn hơn hoặc bằng
// <=           -->          Nhỏ hơn hoặc bằng
// */


// var a = 'Nguyen Duy';
// var b='Nguyen duyssss';

// if(a == b){
//     console.log('Điều kiện đúng!')
// }else{
//     console.log('Điều kiện sai!')
// }





// /**
//  * Boolean
//  */

// var a = 1;
// var b = 2;
// var isSuccess = a < b;

// console.log(isSuccess);





// /**
//  * If - esle
//  */

// /** Những điều kiện sẽ ra false
//  * 0
//  * false
//  * '' - ""
//  * undefined
//  * NaN
//  * null
//  */

// // var isSuccess = 1 > 2
// var fullName = 'Duy Nguen'
// if (fullName){
//     console.log('DIEU KIEN DUNG')

// }else{
//     console.log('DIEU KIEN SAI')
// }




/**
 * Toán tử logic
1. && - And
2. || - Oг chỉ cần 1 trong 3 biểu thức điều kiện đúng thì 2 biểu thực còn lại đúng
3. ! - Not
 */

// var a = 1;
// var b = 2;
// var c = 3;

// if(a < 0 || b < 0 || c > 0){
//     console.log('DIEU KIEN DUNG');
// }





/**Kiểu dữ liệu trong Javascript
1. Dữ liệu nguyên thủy - Primitive Data
- Number
- String
- Boolean
Undefined
- Null
- Symbol
2. Dữ liệu phức tạp - Complex Data
- Function
- Object
*/

// Number type
// var a = 1;
// var b = 2;
// var c = 1.5;

// console.log(typeof a)

// String type
// var fullName = 'Duy Nguyen';


//Boolean type
// var isSuccess = true;

// Underfined type
// var age;
// console.log(age);

//Null
// var isNull = null; //nothing


// Symbol
// var id = Symbol('id'); // unique
// var id2 = Symbol('id'); // unique

//Function
// var myFunction = function(){
//     alert('Hi');
// }
// myFunction().


//Object types

// var myObject = {
//     name: 'Duy Nguyen',
//     age: 18,
//     myFunction: function(){

//     }
// };
// console.log('myobject',myObject)

// var myArray = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(myArray);




//Toán tử so sánh - P2
/**
 * ===
 * !==
 */

// var a = 1;
// var b = '1';
// console.log(a !==b)





//Hiểu hơn về câu lệnh điều kiện
//và phép so sánh

// /** Những điều kiện sẽ ra false
//  * 0
//  * false
//  * '' - ""
//  * undefined
//  * NaN
//  * null
//  */

// var a = 1;
// var b= 2;

// var result = a < b && a > 0 && b < 0
// console.log(result)

// var result = a < b
// console.log('result',result)

// if(a < b){
//     console.log('A < B');
// }else{
//     console.log('A > B')
// }




/**CHUỐI TRONG JAVASCRIPT
1. Tao chuỗi
- Các cách tạo chuỗi
- Nên dùng cách nào? Lý do?
- Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem đô dài chuỗi(length)
4. Chú ý độ dài khi viết Code
5. Template string ES6 console.log(`Tôi là: ${firtsName} ${lastName}`)
 */

// var firtsName = 'Duy'
// var lastName = 'Nguyen'

// console.log(`Tôi là: ${firtsName} ${lastName}`)



// LÀM VIỆC VỚI CHUỖI
var  myString = '   Hoc JS tai F8!    ';
// Keyword: Javascript string methods

// 1. Length
// console.log(myString.length)

// 2. Find index
// console.log(myString.search('JS'))

// 3. Cut string
// console.log(myString.slice(-3, -1))

// 4. Replace
// console.log(myString.replace(/JS/g, 'Javascript'))

// 5. Convert to upper case
// console.log(myString.toUpperCase())

// 6. Convert to lower case
// console.log(myString.toLocaleLowerCase())

// 7. Trim
// console.log(myString.trim().length)

// 8. Split
// var languages='Javascript'
// console.log(languages.split(''))

// 9. Get a character by index
// const myString2 = 'Duy Nguyen'
// console.log(typeof myString2[2])






/**
 Kiểu số (Number) trong Javascript
1. Tạo giá trị Number
-Các cách tạo
- Dùng cách nào? Tại sao?
-Kiểm tra data type
var result = 20 / 'ABC';
console.log(isNaN(result))

2. Làm việc với Number
-To string
-To Fixed
 */


// var age = 20;
// var PI = 3.14;

// console.log(PI.toFixed())





/**
 Làm việc với Array
// Keyword: Javascript array methods
1. To string
2. Join
3. Pop (Xoá element cuối mạng và trả về phần tử đã xóa)
4.Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
 */

var languages = [
    'javascript',
    'PHP',
    'Ruby'
]
languages.splice(1,0)
console.log(languages)