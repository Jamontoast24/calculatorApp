//Create the actual calculate app
    //Create Button variable
    // let button = document.querySelectorAll('.btn')
    // //Create a button that gives us the total of what we entered
    // let resultEqual = document.querySelector('.operatorBtnEqual')
    // //Create a button that deletes our current input
    // let clearCalc = document.getElementById('operatorBtnDelete')
    // //Create a screen for our calculator
    // let calcScreen = document.querySelector('.displayScreen')
    // //Create a variable to target our HTML form
    // let screenForm = document.querySelector('.calculatorScreen')
const calculatorApp = () => {

    //First define all the variables we'll need to create the calculator
    
    //Create Button variable
    let button = document.querySelectorAll('.btn')
    //Create a button that gives us the total of what we entered
    let resultEqual = document.querySelector('.operatorBtnEqual')
    //Create a button that deletes our current input
    let clearCalc = document.getElementById('operatorBtnDelete')
    //Create a screen for our calculator
    let calcScreen = document.querySelector('.displayScreen')
    //Create a variable to target our HTML form
    let screenForm = document.querySelector('.calculatorScreen')

    //Initialize the app
    const init = () => {
        calcScreen.value = ''
    }
    init()

    //Create a function that detects what the user is clicking on to determine the output
    const userClick = () => {
        button.forEach(function(buttons) {
            buttons.addEventListener('click', function(clickedBtn) {
                let valueDisplay = clickedBtn.target.dataset.num
                calcScreen.value += valueDisplay
            })
        })
    }
    userClick()

    //Create the function that clears the screen and deletes what we previously input when we click the DEL button
    const cleardisplayScreen = () => {
        clearCalc.addEventListener('click', function() {
            screenForm.reset()
        })
    }
    cleardisplayScreen()

    //Create a function that calculates what the user has input and make sure the user has input something or throw an error message
    const displayResult = () => {
        resultEqual.addEventListener('click', function(e) {
            //Create a variable that stores the result
            // let result = eval(calcScreen.value)
            // calcScreen.value = result

            //Create a message to throw at user if no input has been detected
            if (calcScreen.value === '') {
                calcScreen.value = 'Error : Enter a value you would like to calculate'
            } else {
                let result = eval(calcScreen.value)
                calcScreen.value = result
            }
        })
    }
    displayResult()


}
calculatorApp()


// (function(){
  
//     let screen = document.querySelector('.displayScreen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.getElementById('operatorBtnDelete');
//     let equal = document.querySelector('.operatorBtnEqual');
    
//     //retrieve data from numbers that are clicked
//     buttons.forEach(function(button){
//       button.addEventListener('click', function(e){
//         let value = e.target.dataset.num;
//         screen.value += value;
//       })
//     });
    
//     equal.addEventListener('click', function(e){
//       if(screen.value === ''){
//         screen.value = 'Please Enter a Value';
//       } else {
//         let answer = eval(screen.value);
//         screen.value = answer;
//       }
//     })
    
//     clear.addEventListener('click', function(e){
//       screen.value = '';
//     })
   
//   })(); 