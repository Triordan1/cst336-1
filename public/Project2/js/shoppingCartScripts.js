$(document).ready(function(){
    $("button").on("click",totalPrice);
    $("#setToZero").on("click",function(){
        $("#obj1").val(0);
        totalPrice();
    });
    $("#alsoSetToZero").on("click",function() {
       $("#obj2").val(0); 
       totalPrice();
    });
    var total = 0.0;
    function isFormValid(index){
        let isValid = true;
        if($(`#obj${index}`).isNaN){
            isValid = false;
            $(`#validationFdbk${index}`).html("Value needs to be a number");
        }
        return isValid;
    }

    function priceChange(){
        total = 0;
        $("validationFdbk").html("");
        if(!isFormValid(1)){
            return;
        }
        if(!isFormValid(2)){
            return;
        }
        var priceA = document.getElementById("price1");
        priceA = priceA.innerHTML.substring(1);
        priceA = parseFloat(priceA);
        var priceB = document.getElementById("price2");
        priceB = priceB.innerHTML.substr(1);
        priceB = parseFloat(priceB);
        let num1 = $("#obj1").val();
        num1 = parseInt(num1);
        let num2 = $("#obj2").val();
        num2 = parseInt(num2);
        if(num1 >= 0 && num2 >= 0)
        {
            total+= (priceA*num1 + priceB*num2);
            total = total.toFixed(2); 
        }
        else
        {
            alert("Please only enter numbers");
            total = 0;
        }
        
    }
    function totalPrice(){
        priceChange();
        $("#sub-total").html(`$${total}`);
        let tax = total*.10;
        tax = tax.toFixed(2);
        $("#tax").html(`$${tax}`);
        let final = 0.0;
        final = parseFloat(total + tax);
        final = final.toFixed(2);
        $("#total").html(`<strong>$${final}</strong>`);
    }
});