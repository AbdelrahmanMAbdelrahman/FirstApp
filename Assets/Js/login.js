function verifyCheckbox(){
document.getElementById("save").addEventListener("click",function(){
    const checked=document.getElementById("subscribe").checked;
    alert(checked?"you are subscribed":"you are not subscribed");
});
}

function verifyRadioButton(){
document.getElementById("save").addEventListener("click",function(){
    let male=document.getElementById("male").checked;
    let female=document.getElementById("female").checked;
    alert(male?"you are male ":female?"you are female ":"gender not selected");
});
}

verifyCheckbox();
verifyRadioButton();