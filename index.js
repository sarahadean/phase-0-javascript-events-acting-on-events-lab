
//const dodger = document.getElementById("dodger"); //selected element to move
// dodger.style.backgroundColor = "#FF69B4"; //changed color of element
// dodger.style.bottom = "100px"; //moved element up - need to assign new string value to do this
// // dodger.style.left or dodger.style.bottom - verify element's position
// dodger.style.bottom = "0px" //reset element's position
// dodger.style.left = "0px" // moved element to bottom left of field

// document.addEventListener("keydown", function (event) {
//     console.log(event);
//   }); //defining parameter for callback

  //Left arrow key event:
//   KeyboardEvent {isTrusted: true, key: 'ArrowLeft', code: 'ArrowLeft', location: 0, ctrlKey: false, …}

//   Right arrow key event:
//   KeyboardEvent {isTrusted: true, key: 'ArrowRight', code: 'ArrowRight', location: 0, ctrlKey: false, …}

// Up arrow key event:
// KeyboardEvent {isTrusted: true, key: 'ArrowUp', code: 'ArrowUp', location: 0, ctrlKey: false, …}

// down arrow key event:
// KeyboardEvent {isTrusted: true, key: 'ArrowDown', code: 'ArrowDown', location: 0, ctrlKey: false, …}

//Code to move the dodger left when key is pressed:
// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

// When event listener detects keydown event:
//1. checks to see whether the key property of the event object === ArrowLeft
//2. If true, grab style property (style.left) and use string replace () to
//take out the "px", then store the result in leftNumbers
//3. Parse leftNumbers as an integer and store the result in left
//4. update dodger's style.left property using interpolation
//    -injects current value minus 1

//breaking up movement into separate function:
const dodger = document.getElementById("dodger");

//Building moveDodgerLeft() function
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//Wiring up to event listener:
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

//Move dodger right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

