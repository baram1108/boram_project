function start(){
    var arr = [];

    for( let i =0; i < 3 ; i++){
        if( i==1 ){
            arr[i] = prompt("기호를 입력해주세요 \n[ + - * / ]");
        }else{
            // 0 일때는 1번째
            // 2 일때는 2번째
            arr[i] = Number(prompt( i + " 번째 숫자를 입력해주세요."));
        }
    }

    return calc(arr);
}    


function calc( arr ){

    let sum = 0;

    switch( arr[1] ){
        case "+":
            sum = arr[0] + arr[2] ;            
            break;
        case "-":
            sum = arr[0] - arr[2];
            break;
        case "*":
        case "x":
            sum = arr[0] * arr[2];
            break;
        case "/":
            sum = arr[0] / arr[2]
            break;
        default:

            break;
    }
    return sum;
}