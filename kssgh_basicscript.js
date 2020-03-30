/**Tasks to complete
 * function checkName() should disable and enable all the inputs included in the form through validation
 * 
INPUT 1
to validate whether user have entered any input or not and disables all other inputs until valid input is provided.*/
function checkName(){
    var name = document.getElementById("input1").value;  
    if (name == ""){
        document.getElementById("valid_msg1").innerHTML="&cross; Field Empty! Invalid...";
        document.getElementById("field1").style.color="red";
        document.getElementById("valid_msg1").style.color="red";
        document.getElementById("input2").disabled=true; /*To disable the input field*/
        document.getElementById("input3").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input5").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }else{
        document.getElementById("valid_msg1").innerHTML="&checkmark; Valid input...";
        document.getElementById("field1").style.color="green";
        document.getElementById("valid_msg1").style.color="green";
        document.getElementById("input2").disabled=false;/*To enable the input field*/
        document.getElementById("input3").disabled=false;
        document.getElementById("input4").disabled=false;
        document.getElementById("input5").disabled=false;
        document.getElementById("input6").disabled=false;
        document.getElementById("input71").disabled=false;
        document.getElementById("input72").disabled=false;
        document.getElementById("input73").disabled=false;
        document.getElementById("input74").disabled=false;
        document.getElementById("input75").disabled=false;
        document.getElementById("input76").disabled=false;
        document.getElementById("input81").disabled=false;
        document.getElementById("input82").disabled=false;
        document.getElementById("input91").disabled=false;
        document.getElementById("input92").disabled=false;
        document.getElementById("input93").disabled=false;
        document.getElementById("input94").disabled=false;
        document.getElementById("input95").disabled=false;
        document.getElementById("input96").disabled=false;
        document.getElementById("input97").disabled=false;
        document.getElementById("input98").disabled=false;
        document.getElementById("input99").disabled=false;
        document.getElementById("input101").disabled=false;
        document.getElementById("input111").disabled=false;
        document.getElementById("input112").disabled=false;
        document.getElementById("input121").disabled=false;
        document.getElementById("input122").disabled=false;
        document.getElementById("input123").disabled=false;
        document.getElementById("input124").disabled=false;
        document.getElementById("input125").disabled=false;
        document.getElementById("input126").disabled=false;
        document.getElementById("input127").disabled=false;
        document.getElementById("input131").disabled=false;
        document.getElementById("input132").disabled=false;
        document.getElementById("input141").disabled=false;
        document.getElementById("input142").disabled=false;
        document.getElementById("input143").disabled=false;
        document.getElementById("input144").disabled=false;
        document.getElementById("input151").disabled=false;
        document.getElementById("input152").disabled=false;
        document.getElementById("input161").disabled=false;
        document.getElementById("input162").disabled=false;
        document.getElementById("input163").disabled=false;
        document.getElementById("input164").disabled=false;
        document.getElementById("input165").disabled=false;
        document.getElementById("input171").disabled=false;
        document.getElementById("input181").disabled=false;
    }
}
/*INPUT 2
validate and reply to user whether the input is filled or empty.
It doesen’t make any change to input from enabling or disabling it.*/
function checklastname(){
    var lastname = document.getElementById("input2").value;
    if (lastname != ""){
        document.getElementById("valid_msg2").innerHTML="&checkmark; Valid input...";
        document.getElementById("field2").style.color="green";
        document.getElementById("valid_msg2").style.color="green";
    }else{
        document.getElementById("valid_msg2").innerHTML="&checkmark; (Optional) field empty...";
        document.getElementById("valid_msg2").style.color="green";
    }
}
/*INPUT 3
The function not only checks whether user provide input or not 
but also checks if entered number is long enough to be valid or not.*/
function checkphno(){
    var phone = document.getElementById("input3").value;
    if (phone.length ==""){
        document.getElementById("input1").disabled=true;
        document.getElementById("valid_msg3").innerHTML="&cross; Field Empty! Invalid...";
        document.getElementById("field3").style.color="red";
        document.getElementById("valid_msg3").style.color="red";
        document.getElementById("input2").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input5").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }else if (phone.length <10){
        document.getElementById("input1").disabled=true;
        document.getElementById("valid_msg3").innerHTML="&cross; Number too short! Invalid...";
        document.getElementById("field3").style.color="red";
        document.getElementById("valid_msg3").style.color="red";
        document.getElementById("input2").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input5").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }else if (phone.length >10){
        document.getElementById("input1").disabled=true;
        document.getElementById("valid_msg3").innerHTML="&cross; Number too long! Invalid...";
        document.getElementById("field3").style.color="red";
        document.getElementById("valid_msg3").style.color="red";
        document.getElementById("input2").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input5").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }
    else{
        document.getElementById("input1").disabled=false;
        document.getElementById("valid_msg3").innerHTML="&checkmark; Valid input...";
        document.getElementById("field3").style.color="green";
        document.getElementById("valid_msg3").style.color="green";
        document.getElementById("input2").disabled=false;
        document.getElementById("input4").disabled=false;
        document.getElementById("input5").disabled=false;
        document.getElementById("input6").disabled=false;
        document.getElementById("input71").disabled=false;
        document.getElementById("input72").disabled=false;
        document.getElementById("input73").disabled=false;
        document.getElementById("input74").disabled=false;
        document.getElementById("input75").disabled=false;
        document.getElementById("input76").disabled=false;
        document.getElementById("input81").disabled=false;
        document.getElementById("input82").disabled=false;
        document.getElementById("input91").disabled=false;
        document.getElementById("input92").disabled=false;
        document.getElementById("input93").disabled=false;
        document.getElementById("input94").disabled=false;
        document.getElementById("input95").disabled=false;
        document.getElementById("input96").disabled=false;
        document.getElementById("input97").disabled=false;
        document.getElementById("input98").disabled=false;
        document.getElementById("input99").disabled=false;
        document.getElementById("input101").disabled=false;
        document.getElementById("input111").disabled=false;
        document.getElementById("input112").disabled=false;
        document.getElementById("input121").disabled=false;
        document.getElementById("input122").disabled=false;
        document.getElementById("input123").disabled=false;
        document.getElementById("input124").disabled=false;
        document.getElementById("input125").disabled=false;
        document.getElementById("input126").disabled=false;
        document.getElementById("input127").disabled=false;
        document.getElementById("input131").disabled=false;
        document.getElementById("input132").disabled=false;
        document.getElementById("input141").disabled=false;
        document.getElementById("input142").disabled=false;
        document.getElementById("input143").disabled=false;
        document.getElementById("input144").disabled=false;
        document.getElementById("input151").disabled=false;
        document.getElementById("input152").disabled=false;
        document.getElementById("input161").disabled=false;
        document.getElementById("input162").disabled=false;
        document.getElementById("input163").disabled=false;
        document.getElementById("input164").disabled=false;
        document.getElementById("input165").disabled=false;
        document.getElementById("input171").disabled=false;
        document.getElementById("input181").disabled=false;
    }
}
/*INPUT 4
function to check whether user have entered the date of birth or not.*/
function checkdate(){
    var birthdate = document.getElementById("input4").value;
    if (birthdate ==""){
        document.getElementById("field4").style.color="red";
        document.getElementById("valid_msg4").innerHTML="&cross; Field Empty! Invalid...";
        document.getElementById("valid_msg4").style.color="red";
        document.getElementById("input1").disabled=true;
        document.getElementById("input2").disabled=true;
        document.getElementById("input3").disabled=true;
        document.getElementById("input5").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }else{
        document.getElementById("field4").style.color="green";
        document.getElementById("valid_msg4").innerHTML="&checkmark; Valid input...";
        document.getElementById("valid_msg4").style.color="green";
        document.getElementById("input1").disabled=false;
        document.getElementById("input2").disabled=false;
        document.getElementById("input3").disabled=false;
        document.getElementById("input5").disabled=false;
        document.getElementById("input6").disabled=false;
        document.getElementById("input71").disabled=false;
        document.getElementById("input72").disabled=false;
        document.getElementById("input73").disabled=false;
        document.getElementById("input74").disabled=false;
        document.getElementById("input75").disabled=false;
        document.getElementById("input76").disabled=false;
        document.getElementById("input81").disabled=false;
        document.getElementById("input82").disabled=false;
        document.getElementById("input91").disabled=false;
        document.getElementById("input92").disabled=false;
        document.getElementById("input93").disabled=false;
        document.getElementById("input94").disabled=false;
        document.getElementById("input95").disabled=false;
        document.getElementById("input96").disabled=false;
        document.getElementById("input97").disabled=false;
        document.getElementById("input98").disabled=false;
        document.getElementById("input99").disabled=false;
        document.getElementById("input101").disabled=false;
        document.getElementById("input111").disabled=false;
        document.getElementById("input112").disabled=false;
        document.getElementById("input121").disabled=false;
        document.getElementById("input122").disabled=false;
        document.getElementById("input123").disabled=false;
        document.getElementById("input124").disabled=false;
        document.getElementById("input125").disabled=false;
        document.getElementById("input126").disabled=false;
        document.getElementById("input127").disabled=false;
        document.getElementById("input131").disabled=false;
        document.getElementById("input132").disabled=false;
        document.getElementById("input141").disabled=false;
        document.getElementById("input142").disabled=false;
        document.getElementById("input143").disabled=false;
        document.getElementById("input144").disabled=false;
        document.getElementById("input151").disabled=false;
        document.getElementById("input152").disabled=false;
        document.getElementById("input161").disabled=false;
        document.getElementById("input162").disabled=false;
        document.getElementById("input163").disabled=false;
        document.getElementById("input164").disabled=false;
        document.getElementById("input165").disabled=false;
        document.getElementById("input171").disabled=false;
        document.getElementById("input181").disabled=false;
    }
}
/*INPUT 5
function to check whether user have entered any input or not.
It also validate the correctness of input provided by the user through regular expression logic.
[reference: W3school / W3resources] */
function checkemail(){
    var email = document.getElementById("input5").value;
    var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == ""){
        document.getElementById("field5").style.color="red";
        document.getElementById("valid_msg5").innerHTML="&cross; Field Empty! Invalid...";
        document.getElementById("valid_msg5").style.color="red";
        document.getElementById("input1").disabled=true;
        document.getElementById("input2").disabled=true;
        document.getElementById("input3").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }else if(email.match(emailpattern)){
        document.getElementById("field5").style.color="green";
        document.getElementById("valid_msg5").innerHTML="&checkmark; Valid input...";
        document.getElementById("valid_msg5").style.color="green";
        document.getElementById("input1").disabled=false;
        document.getElementById("input2").disabled=false;
        document.getElementById("input3").disabled=false;
        document.getElementById("input4").disabled=false;
        document.getElementById("input6").disabled=false;
        document.getElementById("input71").disabled=false;
        document.getElementById("input72").disabled=false;
        document.getElementById("input73").disabled=false;
        document.getElementById("input74").disabled=false;
        document.getElementById("input75").disabled=false;
        document.getElementById("input76").disabled=false;
        document.getElementById("input81").disabled=false;
        document.getElementById("input82").disabled=false;
        document.getElementById("input91").disabled=false;
        document.getElementById("input92").disabled=false;
        document.getElementById("input93").disabled=false;
        document.getElementById("input94").disabled=false;
        document.getElementById("input95").disabled=false;
        document.getElementById("input96").disabled=false;
        document.getElementById("input97").disabled=false;
        document.getElementById("input98").disabled=false;
        document.getElementById("input99").disabled=false;
        document.getElementById("input101").disabled=false;
        document.getElementById("input111").disabled=false;
        document.getElementById("input112").disabled=false;
        document.getElementById("input121").disabled=false;
        document.getElementById("input122").disabled=false;
        document.getElementById("input123").disabled=false;
        document.getElementById("input124").disabled=false;
        document.getElementById("input125").disabled=false;
        document.getElementById("input126").disabled=false;
        document.getElementById("input127").disabled=false;
        document.getElementById("input131").disabled=false;
        document.getElementById("input132").disabled=false;
        document.getElementById("input141").disabled=false;
        document.getElementById("input142").disabled=false;
        document.getElementById("input143").disabled=false;
        document.getElementById("input144").disabled=false;
        document.getElementById("input151").disabled=false;
        document.getElementById("input152").disabled=false;
        document.getElementById("input161").disabled=false;
        document.getElementById("input162").disabled=false;
        document.getElementById("input163").disabled=false;
        document.getElementById("input164").disabled=false;
        document.getElementById("input165").disabled=false;
        document.getElementById("input171").disabled=false;
        document.getElementById("input181").disabled=false;
    }
    else{
        document.getElementById("field5").style.color="red";
        document.getElementById("valid_msg5").innerHTML="&cross; Wrong address! Invalid...";
        document.getElementById("valid_msg5").style.color="red";
        document.getElementById("input1").disabled=true;
        document.getElementById("input2").disabled=true;
        document.getElementById("input3").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input6").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }
}
/*INPUT 6
the function to check whether user have entered address or not.*/
function checkaddress(){
    var address = document.getElementById("input6").value;
    if (address == ""){
        document.getElementById("field6").style.color="red";
        document.getElementById("valid_msg6").innerHTML="&cross; Field Empty! Invalid...";
        document.getElementById("valid_msg6").style.color="red";
        document.getElementById("input1").disabled=true;
        document.getElementById("input2").disabled=true;
        document.getElementById("input3").disabled=true;
        document.getElementById("input4").disabled=true;
        document.getElementById("input5").disabled=true;
        document.getElementById("input71").disabled=true;
        document.getElementById("input72").disabled=true;
        document.getElementById("input73").disabled=true;
        document.getElementById("input74").disabled=true;
        document.getElementById("input75").disabled=true;
        document.getElementById("input76").disabled=true;
        document.getElementById("input81").disabled=true;
        document.getElementById("input82").disabled=true;
        document.getElementById("input91").disabled=true;
        document.getElementById("input92").disabled=true;
        document.getElementById("input93").disabled=true;
        document.getElementById("input94").disabled=true;
        document.getElementById("input95").disabled=true;
        document.getElementById("input96").disabled=true;
        document.getElementById("input97").disabled=true;
        document.getElementById("input98").disabled=true;
        document.getElementById("input99").disabled=true;
        document.getElementById("input101").disabled=true;
        document.getElementById("input111").disabled=true;
        document.getElementById("input112").disabled=true;
        document.getElementById("input121").disabled=true;
        document.getElementById("input122").disabled=true;
        document.getElementById("input123").disabled=true;
        document.getElementById("input124").disabled=true;
        document.getElementById("input125").disabled=true;
        document.getElementById("input126").disabled=true;
        document.getElementById("input127").disabled=true;
        document.getElementById("input131").disabled=true;
        document.getElementById("input132").disabled=true;
        document.getElementById("input141").disabled=true;
        document.getElementById("input142").disabled=true;
        document.getElementById("input143").disabled=true;
        document.getElementById("input144").disabled=true;
        document.getElementById("input151").disabled=true;
        document.getElementById("input152").disabled=true;
        document.getElementById("input161").disabled=true;
        document.getElementById("input162").disabled=true;
        document.getElementById("input163").disabled=true;
        document.getElementById("input164").disabled=true;
        document.getElementById("input165").disabled=true;
        document.getElementById("input171").disabled=true;
        document.getElementById("input181").disabled=true;
    }
    else{
        document.getElementById("field6").style.color="green";
        document.getElementById("valid_msg6").innerHTML="&checkmark; Valid input...";
        document.getElementById("valid_msg6").style.color="green";
        document.getElementById("input1").disabled=false;
        document.getElementById("input2").disabled=false;
        document.getElementById("input3").disabled=false;
        document.getElementById("input4").disabled=false;
        document.getElementById("input5").disabled=false;
        document.getElementById("input71").disabled=false;
        document.getElementById("input72").disabled=false;
        document.getElementById("input73").disabled=false;
        document.getElementById("input74").disabled=false;
        document.getElementById("input75").disabled=false;
        document.getElementById("input76").disabled=false;
        document.getElementById("input81").disabled=false;
        document.getElementById("input82").disabled=false;
        document.getElementById("input91").disabled=false;
        document.getElementById("input92").disabled=false;
        document.getElementById("input93").disabled=false;
        document.getElementById("input94").disabled=false;
        document.getElementById("input95").disabled=false;
        document.getElementById("input96").disabled=false;
        document.getElementById("input97").disabled=false;
        document.getElementById("input98").disabled=false;
        document.getElementById("input99").disabled=false;
        document.getElementById("input101").disabled=false;
        document.getElementById("input111").disabled=false;
        document.getElementById("input112").disabled=false;
        document.getElementById("input121").disabled=false;
        document.getElementById("input122").disabled=false;
        document.getElementById("input123").disabled=false;
        document.getElementById("input124").disabled=false;
        document.getElementById("input125").disabled=false;
        document.getElementById("input126").disabled=false;
        document.getElementById("input127").disabled=false;
        document.getElementById("input131").disabled=false;
        document.getElementById("input132").disabled=false;
        document.getElementById("input141").disabled=false;
        document.getElementById("input142").disabled=false;
        document.getElementById("input143").disabled=false;
        document.getElementById("input144").disabled=false;
        document.getElementById("input151").disabled=false;
        document.getElementById("input152").disabled=false;
        document.getElementById("input161").disabled=false;
        document.getElementById("input162").disabled=false;
        document.getElementById("input163").disabled=false;
        document.getElementById("input164").disabled=false;
        document.getElementById("input165").disabled=false;
        document.getElementById("input171").disabled=false;
        document.getElementById("input181").disabled=false;
    }
}
/*INPUT 7
the function occurred as ‘onclick’ event,
that prompts an alert window and ask user to enter the phone number 
that previously entered in the form in order to verify and submit the form.
The function keeps on prompting message to enter correct phone number through 
‘while loop’ nested inside ‘if…else loop’.*/
function myPrompt(){
    var tele = document.getElementById("input3").value;
    var phonenumber = prompt("Please Enter your phone number you provided earlier again to submit the form");
    if (tele == phonenumber){
        alert("Form submitted successfully!! Thank You for your Support!!");
        document.getElementById("submit").focus();
        successmsg();
        scrolldelay = setTimeout('pageScroll()',100);
    }
    else{
        while ((tele != phonenumber)){
            alert("SORRY!! Wrong input...Please try again...");
            //alert("SORRY!! Wrong input as telephone number...Please try again...")
            var phonenumber = prompt("Please Enter your phone number you provided earlier again to submit the form");
        }
        alert("Form submitted successfully!! Thank You for your Support!!");
        document.getElementById("submit").focus();
        successmsg();
        scrolldelay = setTimeout('pageScroll()',100);
    }
}
/*INPUT 8
the function is used to scroll page to the bottom after successful submission
of the form with success message (function could be useful if the form
further improved to display the information provided by the user as preview).*/
function pageScroll() {
    window.scrollBy(0,50); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}
/*INPUT 9
the function prints the success message.
(Function could be further improved to display the information provided by the user as preview)*/
function successmsg(){
    document.getElementById("output").innerHTML="Thank You!! Your Form submitted Successfully!!"
}