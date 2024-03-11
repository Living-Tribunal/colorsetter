// Color Setter
// AUTHOR: <|Cody Dalton|>
// Module 02 - Color Setter
// Date: 1.24.2024
// Purpose: <|function set the color of a div element|>

//color selection function
function updateColor() {
    //grabs the input from the color input fields and assigns them to a variable 
    let redInput = document.getElementById("redInput");
    let redColor = parseInt(redInput.value);
  
    let greenInput = document.getElementById("greenInput");
    let greenColor = parseInt(greenInput.value);
  
    let blueInput = document.getElementById("blueInput");
    let blueColor = parseInt(blueInput.value);
  
    //those varaibles are then put into another variable as a rgb color string
    let color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    //If statements to check if the entered numbers are within 1 and 255
    //If not set them to the minium/maximum
      if (greenColor < 0) {
        greenColor = 0;
      } else if (greenColor > 255) {
        greenColor = 255;
      }
      greenInput.value = greenColor;
  
      if (redColor < 0) {
        redColor = 0;
      } else if (redColor > 255) {
        redColor = 255;
      }
      redInput.value = redColor;
  
      if (blueColor < 0) {
        blueColor = 0;
      } else if (blueColor > 255) {
        blueColor = 255;
      }
      blueInput.value = blueColor;
    //selecting div for the box to change its rgb value and applying the 
    //color variable to the element
    let updateColor = document.querySelector("#colorDiv");
    updateColor.style.backgroundColor = color;
  
    console.log("updateColor() called");
  
    }
/*   //light mode function
  function modeLightSwitch(){
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let element = document.getElementById("h1");
    let body = document.getElementById("body");
    let buttonLightClick = document.getElementById("onbutton");
  
    body.style.backgroundColor = "white";
    element.style.backgroundColor = "white";
    buttonLightClick.style.backgroundColor = "rgb(255, 255, 255)";
  
    red.style.color = "rgb(26, 26, 26)";
    blue.style.color = "rgb(26, 26, 26)";
    green.style.color = "rgb(26, 26, 26)";
    element.style.color = "rgb(26, 26, 26)";
    buttonLightClick.style.color = "rgb(26, 26, 26)";
    buttonLightClick.style.outlineColor = "rgb(255, 255, 255)";
  
    console.log("Light Mode");
  }
  /* //Dark mode function
  function modeDarkSwitch(){
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let element = document.getElementById("h1");
    let body = document.getElementById("body");
    let buttonDarkClick = document.getElementById("offbutton");
  
    buttonDarkClick.style.backgroundColor = "rgb(26, 26, 26)";
    body.style.backgroundColor = "rgb(26, 26, 26)";
    element.style.backgroundColor = "rgb(26, 26, 26)";
    
    red.style.color = "white";
    blue.style.color = "white";
    green.style.color = "white";
    element.style.color = "white";
    buttonDarkClick.style.color = "rgb(255, 255, 255)";
    buttonDarkClick.style.outlineColor = "white";
  
    console.log("Dark Mode");
  } */
    
  //change text color based on user input
  function redTextChange(){
    let redInput = document.getElementById("redInput").value;
    let color = `rgb(${redInput}, 0, 0)`;
  
    let red = document.getElementById("redbox");
    red.style.backgroundColor = color;
  }
  
  function greenTextChange(){
    let greenInput = document.getElementById("greenInput").value;
    let color = `rgb(0, ${greenInput}, 0)`;
  
    let green = document.getElementById("greenbox");
    green.style.backgroundColor = color;
  }
  
  function blueTextChange(){
    let blueInput = document.getElementById("blueInput").value;
    let color = `rgb(0, 0, ${blueInput})`;
  
    let blue = document.getElementById("bluebox");
    blue.style.backgroundColor = color;
  }

  function resetColorDiv(){
    let colorToResetTo = `rgb(0, 0, 0)`;
    let resetColor = document.querySelector("#colorDiv");
    resetColor.style.backgroundColor = colorToResetTo;
  }
  