function calc(operation){
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);

    switch(operation){
        case '+':
            var output = input1 + input2;
            break;
        
        case '-':
            var output = input1 - input2;
            break;

        case '*':
            var output = input1 * input2;
            break;

        case '/':
            var output = input1 / input2;
            break;
    }



    document.getElementById("output").value = output;


}