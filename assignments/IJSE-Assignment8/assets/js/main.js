var intervalID = null;
setInterval(coloursChange,500);
console.log(coloursChange);
let count=0;

function coloursChange(){

    if(count==0){
        colors=["blue", "pink", "green", "orange", "red", "purple"];

    }else if(count==1){
        colors=["purple", "blue", "pink", "green", "orange", "red"];

    }else if(count==2){
        colors=["red", "purple", "blue", "pink", "green", "orange"];

    }else if(count==3){
        colors=["orange", "red", "purple", "blue", "pink", "green"];

    }else if(count==4){
        colors=["green", "orange", "red", "purple", "blue", "pink"];

    }else if(count==5){
        colors=["pink", "green", "orange", "red", "purple", "blue"];

    }else{
        count=1;
    }
    count++;

    $("#1").css('background-color',colors[0]);
    $("#2").css('background-color',colors[1]);
    $("#3").css('background-color',colors[2]);
    $("#4").css('background-color',colors[3]);
    $("#5").css('background-color',colors[4]);
    $("#6").css('background-color',colors[5]);
}

$('#start').on('click',() => {
    intervalID = setInterval(coloursChange,100)


});
$('#stop').on('click',() => {
    clearInterval(intervalID);

});
