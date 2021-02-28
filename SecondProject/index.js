
function Translate(){
    
    
    let output = document.getElementById("output").value = document.getElementById("input").value; 
    let newstring = output.split(" ")
    

    console.log(newstring)


    

    
    var arrayLength = newstring.length;
    for (var i = 0; i < arrayLength; i++) {
        
        if(newstring[i] == "Im"){
            newstring[i] = "I am"
        }
        console.log(newstring[i]);
    }
    
    //const replaced = newstring.replace(/,/g,"hi");
    
    newstring = document.getElementById("output").value = newstring.toString().replace(',',' ');

    


   if (output == ""){
    alert("Please enter a valid text")
   }
}

