
function Translate(){
    
    
    let output = document.getElementById("output").value = document.getElementById("input").value; 
    let newstring = output.split(" ")
    

    console.log(newstring)
    
    

    
    var arrayLength = 50

    for (let i = 0; i < arrayLength;i+=1) {
        
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
        else if (newstring[i] == "Its"){
            newstring[i] = "It is"

        }
        else if (newstring[i] == "Whats"){
            newstring[i] = "What is"

        }
        else if (newstring[i] == "kinda"){
            newstring[i] = "kind of"

        }
        else if (newstring[i] == "dont"){
            newstring[i] = "do not"

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

