// Tổng có 10 kiểu dữ liệu trong đó có 7 kiểu dữ liệu nguyên thủy đó là

1//kiểu number
//Dùng để biểu diễn số, bao gồm cả số nguyên và số thực (số có dấu chấm thập phân).
let age = 25;           // Số nguyên
let a = 36.6; // Số thực
console.log(age);       // Output: 25
console.log(a);// Output: 36.6

2//Kiểu string
//Dùng để biểu diễn chuỗi ký tự.
let name = "Phú";
let chao = "Hello, " + name + "!";
console.log(chao); // Output: Hello, Phú!

3// Kiểu Boolean
//Biểu diễn giá trị đúng (true) hoặc sai (false).
let b = true;
let c = false;
console.log(b);    // Output: true
console.log(c); // Output: false

4// Kiểu Undefined
// Biến có kiểu dữ liệu là undefined khi nó chưa được gán giá trị.
let x;
console.log(x);

5// Kiểu Null
// Đại diện cho giá trị trống, không tồn tại
let y = null;
console.log(y); // output: null

6// Kiểu Symbol
// Kiểu Symbol dùng để tạo ra các giá trị duy nhất
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // Output: false (vì mỗi Symbol là duy nhất)

7// Kiểu BigInt
// Dùng để biểu diễn các số nguyên rất lớn, lớn hơn giới hạn của kiểu Number.
let bigNumber = BigInt(1234567890123456789012345678901234567890n);
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n

// Function (Hàm)
// Mặc dù không phải là kiểu dữ liệu riêng biệt, nhưng hàm trong JavaScript cũng là một đối tượng đặc biệt.
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!

// Kiểu Object
//Dùng để biểu diễn các đối tượng có các thuộc tính và phương thức.
let person = {
    name: "John",        // Thuộc tính name với giá trị là chuỗi
    age: 30,             // Thuộc tính age với giá trị là số
    isEmployed: true,    // Thuộc tính isEmployed với giá trị là boolean
    greet: function() {  // Phương thức greet với giá trị là một hàm
        console.log("Hello, " + this.name);
    }
};

console.log(person.name);    // Output: John
console.log(person.age);     // Output: 30
person.greet();              // Output: Hello, John

// Kiểu Array
// Là một kiểu đặc biệt của Object, được sử dụng để lưu trữ nhiều giá trị trong một biến.
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange