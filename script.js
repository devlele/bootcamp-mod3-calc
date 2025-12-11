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

    var newHistory = "<p>" + input1 +" "+ operation +" "+ input2 +" "+ "=" +" "+ output + "</p>";
    document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML; //inner html adiciona elementos html

    if (document.getElementById("history").children.length > 10){
        document.getElementById("history").removeChild(document.getElementById("history").childNodes[10]);
    }


}