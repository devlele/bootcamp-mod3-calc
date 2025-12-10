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

    var newHistory = "<div>" + input1 +" "+ operation +" "+ input2 +" "+ "=" +" "+ output + "</div>";
    document.getElementById("historyList").innerHTML = newHistory + document.getElementById("historyList").innerHTML; //inner html adiciona elementos html

    if (document.getElementById("historyList").children.length > 10){
        document.getElementById("historyList").removeChild(document.getElementById("historyList").childNodes[10]);
    }


}