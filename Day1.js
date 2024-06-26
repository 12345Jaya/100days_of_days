function my_fun(){
    var b=document.getElementById("bill").value;
    var str=document.getElementById("tip").value;
    var t;
    if(str==='peak') t=35;
    else if(str==='ok') t=25;
    else if(str==='not bad') t=15;
    else if(str==='worst') t=10;
    else if(str==='bull_shit') t=5;
    var i=document.getElementById("input").value;
    var tip_value=b*t/100;
    var bill_per_person=tip_value/i;
    // console.log(b,t,str,i,bill_per_person);
    document.getElementById("ans").innerHTML="Rs."+bill_per_person+" per each";
}