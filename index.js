
function Translate(){
    
    
    let output = document.getElementById("output").value = document.getElementById("input").value; 
    let newstring = output.split(" ")
    

    console.log(newstring)

    //newstring = document.getElementById("output").value = newstring.toString().replace(',',' ');
    

    
    var arrayLength = 50

    for (let i = 0; i < arrayLength;i++) {
        
        if(newstring[i] == "Im"){
            newstring[i] = "I am"
        }
        
        else if (newstring[i] == "Thats"){
            newstring[i] = "That is"

        }
        else if (newstring[i] == "Theres"){
            newstring[i] = "There is"

        }
        else if (newstring[i] == "Whos"){
            newstring[i] = "Who is"

        }
        else{
            newstring[i]
        
        }
        newstring = document.getElementById("output").value = newstring.toString().replace(',',' ');

        
        console.log(i)

        console.log(newstring[i]);
    }
    
    
    


   if (output == ""){
    alert("Please enter a valid text")
   }
}

