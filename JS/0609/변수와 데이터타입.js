console.log("hello world");
console.log("한글테스트");


//카멜표기법 소문자로 시작. 연결된단어의 첫글자마다 대문자를 붙여줌.
//자바스크립트에서는 값이 변수에 대입될 때 데이터타입이 정해진다.
//컴파일언어가 아니라 인터프리터 언어. 한줄한줄 그때 실행한다.

var myAge = 15;
let brotherAge = 20;
// console.log(myAge+brotherAge);

console.log(15); //하드코딩. 이 경우밖에 못쓴다. 유연성이 없다.

let a = null;
let b;
let c = true;
let d = 15;
let e = "십육";

console.log(typeof a); //object. null이 아니라 object로 나오는것은 오류이나 이미 그렇게 사용되기 때문에 수정X
console.log(typeof b); //undefined
console.log(typeof c); //boolean
console.log(typeof d); //number
console.log(typeof e); //string

//문자열+숫자열 = 문자열
//NaN = not a number

let x = 123;
let y = "456";
let z = y+100; //456100 45만6100을 의미하는것이X 문자열

console.log(x+100); //223
console.log(z+500); //456100500 문자열

console.log(15+15.55); // 30.55
console.log(15-4.5);   // 10.5
console.log(15/4.5);   // 3.3333333333333335 부동소수점
console.log(15*4.5);   // 67.5

// bit = 0과 1을 표현
// byte = 8bit 컴퓨터의 최소 단위는 byte
//영어는 1byte 한글은 2~3byte
// 1비트로 나타낼 수 있는 경우의 수 = 2개 0과1
// 4비트로 나타낼 수 있는 경우의 수 = 2*2*2*2 = 16
// 변수 하나에 32bit를 쓸 수 있다고 했을 때
// 30이라는 숫자는 어떻게 담을까?
        // 사람은 10진수를 쓰기에 30
        // 컴퓨터는 2진수를 쓰기에 0001 1110
// 30.258이라는 숫자를 어떻게 담을까?

// 부동소수점
let realX = 3.0;
let realY = 5.0;
console.log(realX/realY); //0.6
console.log((realX/realY)+0.4); //1

// let 변수명; //변수의 선언
// 변수명 = 값; //값 할당
// let 변수명 = 값;  //초기화. 초기값을 세팅해준다.

//조건문
if(x>100){
    console.log("x는 100보다 큽니다.")
}else{
    console.log("x는 100보다 작습니다.")
}

if(realX==3.0){
    console.log("참입니다.");
}else{
    console.log("거짓입니다.")
}

//실습1
// mydata라는 변수를 선언하고
// 그 변수의 티입이 문자열이면 해당변수는 문자열입니다.
// 숫자면 숫자입니다.
// 나머지면 나머지입니다.

let mydata = "slkjfljk";
let type = typeof mydata;

console.log(type)

// let num = 100;
// num = num + 100;
// num += 100;
// console.log(num);

let g = 5;
// let h = g-- + 2 + --g;
// 5를 쓰고 1을 더함
// 거기에 2를 더함4에서 1을 뺀 값을 씀
// 5+2+3=10
// 앞에 붙으면 사용 전에 연산
// 뒤에 붙으면 사용 후에 연산
let h = ++g + g++ + g; 
console.log("h:",h)

let hhh = 0;
if(hhh-- <0){ 
    console.log("hhh는 현재 음수");
    console.log("현재 hhh값: ",hhh);
}else if (hhh==0) {
    console.log("hhh는 현재 0")
    console.log("현재 hhh값: ",hhh);
}else{
    console.log("hhh는 현재 양수")
    console.log("현재 hhh값: ",hhh);
}
//비교연산자10위 후위증감16위

// let result = num %6;
// console.log(result);

let num = 41;

// 홀수 짝수 구분

if(num%2==0){
    console.log("짝수");
}else{
    console.log("홀수");
}

//4의 배수인지 아닌지를 구별해보세요

if(num%4==0){
    console.log("4의 배수");
}else{
    console.log("4의 배수가 아님");
}

number1 = 12345
number1 = number1+1;
number1 += 1;
number1++
++number1 //모두 같은 의미

let fNum = 35;
if(fNum % 5==0 && fNum<100){
    console.log("fNum은 5의 배수이며 100이하");
}

let number3 = 15;
if((number3 %3==0 || number3 %5==0) && !(number3 %15==0)){
    console.log("내가찾는수");
}else{
    console.log("그외");
}

let num1 = 3;
let num2 = 9;
let num3 = 60;
let max = num1;

if(num2 >= max){
    max = num2;
}
if(num3>=max){
        max=num3;
}
console.log(max);


if(num1 >= num2 && num1 >= num3){
    console.log(num1);
}else if(num2>=num1 && num2>=num3){
    console.log(num2);
}else if(num3>=num1 && num3>=num2){
    console.log(num3);
}

//위의 3개 변수의 평균값을 구해보세요

console.log((num1+num2+num3)/3)

//let month에는 1월부터 12월까지가있다
//들어온 월에 해당하는 계절을 출력해보세요
// 3~5 : 봄
// 6~8 : 여름
// 9~11 : 가을
// 12~2 : 겨울
// 봄은 3으로 나눈 몫이 여름은 2, 가을은3, 겨울은 4 or 0

let month = 7;
if(month== 3 || month==4 || month==5 ){
    console.log("봄");
}else if(month== 6 || month==7 || month==8){
    console.log("여름");
}else if(9<=month && month<=11){
    console.log("가을");
}else if(month== 12 || month==1 || month==2){
    console.log("겨울");
}else{
    console.log("그런 달을 없습니다.")
}

//형변환 = 데이터타입을 변환
let weight = 70.30;
console.log(weight);
//정수부만 뽑기 
console.log(parseInt(weight));
console.log(Math.floor(weight));

let sentence = "동해물과 백두산이"
let size = sentence.length

if(size>=5 && size<=10){
    console.log("보통")
}else if(size>=0 && size<=4){
    console.log("짧다")

}else{
    console.log("길다")
}

//조건문
// 1.삼항
let con = 5%2;
console.log(con==1? '홀수' : '짝수');

let asdf = 123
console.log(typeof asdf=="number"? 't' :'f')

// 3. switch
let sum = '우';
switch(sum){
    case '수':
        console.log("90점이상입니다.")
        break;
    case '우':
        console.log("80점이상입니다.")
        break;
    case '미':
        console.log("70점이상입니다.")
        break;
    case '양':
        console.log("60점이상입니다.")
        break;
    case '가':
        console.log("50점이상입니다.")
        break;
}

//점수를 입력받고 90점이상이면 '수'

let score = 79;

switch(true){
    case (score>=90) :
        console.log("수");
        break;
    case (score>=80 && score<90) :
        console.log("우");
        break;
    case (score>=70 && score<80) :
        console.log("미");
        break;
    case (score>=60 && score<70) :
        console.log("양");
        break;
    case (score>=50 && score<60) :
        console.log("가");
        break;
}

let scoreTen = parseInt(score/10);
switch(scoreTen){
    case 9:
        console.log("수");
        break;
    case 8:
        console.log("우");
        break;
    case 7:
        console.log("미");
        break;           
    case 6:
        console.log("양");
        break;            
    case 5:
        console.log("가");
        break;
}