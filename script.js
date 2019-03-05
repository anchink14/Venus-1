var click1 = false;
var click2 = false;
var click3 = false;

$("#mole1").click(function(){
    $("#mole1").hide();
    click1=true;
    if(click1===true && click2===true && click3===true)
    {$("button").show();
        } 
});
    
$("#moleTwo").click(function(){
    $("#moleTwo").hide();
    click2=true;
    if(click1===true && click2===true && click3===true)
    {$("button").show();
        } 
     
}); 
  $("button").hide();  
$("#thirdMole").click(function(){
    $("#thirdMole").hide();
    
    click3=true;
    if(click1===true && click2===true && click3===true)
    {$("#button").show();
    $("#button").text("Back to Home planet!!");
        } 
    
});
    

$("#thirdmole").click(function(){
    $("#mole1").show();
});

$("alien4").click(function(){
    $("alien4").hide();
     
}); 