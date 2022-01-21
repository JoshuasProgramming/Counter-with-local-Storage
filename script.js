const output = document.getElementById('output');
//alert(output.innerText)
outputLocalStorage();

const increase = document.getElementById('increase').addEventListener("click", (e)=>{
    let output_value = output.innerText;
    output_value = parseInt(output_value) + 1;
    output.innerText = output_value;
    localStorage.setItem("value", output.innerText);
    output.innerText = localStorage.getItem("value");

    if((output.innerText >= 10) && (output.innerText < 100)){
        output.style.margin = "0px 165px";
        localStorage.setItem("value", output.innerText);
    }

    if((output.innerText >= 100) && (output.innerText < 999)){
        output.style.margin = "0px 144px";
        localStorage.setItem("value", output.innerText);
    }

    if(output.innerText >= 999){
        alert("REACHED MAX VALUE");
        output.innerText = 999;
        localStorage.setItem("value", output.innerText);
    }

});

const decrease = document.getElementById('decrease').addEventListener("click", (e)=>{
    let output_value = output.innerText;
    output_value = parseInt(output_value) - 1;
    output.innerText = output_value;
    localStorage.setItem("value", output.innerText);

    localStorage.setItem("value", output.innerText);
    output.innerText = localStorage.getItem("value");

    if((output.innerText <= 9) && (output.innerText < 10)){
        output.style.margin = "0px 190px";
        localStorage.setItem("value", output.innerText);
    }

    if((output.innerText >= 10) && (output.innerText < 100)){
        output.style.margin = "0px 165px";
        localStorage.setItem("value", output.innerText);
    }

    if((output.innerText >= 100) && (output.innerText < 999)){
        output.style.margin = "0px 144px";
        localStorage.setItem("value", output.innerText);
    }

    if(output.innerText <= 0){
        alert("REACHED MIN VALUE");
        output.innerText = 0;
        localStorage.setItem("value", output.innerText);
    }
});


function outputLocalStorage(){
    output.innerText = localStorage.getItem("value");

    if((output.innerText >= 10) && (output.innerText < 100)){
        output.style.margin = "0px 165px";
        localStorage.setItem("value", output.innerText);
    }

    if((output.innerText >= 100) && (output.innerText < 999)){
        output.style.margin = "0px 144px";
        localStorage.setItem("value", output.innerText);
    }

    if(output.innerText >= 999){
        alert("REACHED MAX VALUE");
        output.innerText = 999;
        localStorage.setItem("value", output.innerText);
    }

}
