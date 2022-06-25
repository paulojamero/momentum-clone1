// DOM ELEMENTs

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    //options
    const showAmPm = true;

//FUNCTION

//Show time
function showTime() {
  
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

//SET AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
    hour = hour % 12 || 12; //instead of 13, it becomes 1pm

// OUTPUT TIME
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    
    setTimeout(showTime, 1000);
    }

//ADD ZEROS
    function addZero(n){ // n = return a Number
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

// SET BACKGROUND and GREETINGS
    function setBgGreet(){
   
        let today = new Date(),
            hour = today.getHours();
    
        if(hour < 12){
            //MORNING
            document.body.style.backgroundImage = "url('img/morning.jpg')";
            greeting.textContent = 'Good Morning';

           // document.getElementById('focus').style.opacity = "0.8";
        } else if (hour < 18){
            //AFTERNOON
            document.body.style.backgroundImage = "url('img/afternoon.jpg')";
            greeting.textContent = 'Good Afternoon';
            
           // document.getElementById('focus').style.opacity = "0.8";
        }
        else {
            //EVENING
            document.body.style.backgroundImage = "url('img/night.jpg')";
            greeting.textContent = 'Good Evening';

            //change lighter font
            document.body.style.color = 'white';
        }
    }

//GET NAME FUNCTION
    function getName(){
        if(localStorage.getItem('name') === null){
            name.textContent = '';

        } else {
            name.textContent = localStorage.getItem('name');
        }
    }
//SET NAME FUNCTION
    function setName(e){
        if(e.type === 'keypress'){
            //make sure ENTER is pressed
            if(e.which == 13 || e.keyCode == 13){
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        } else {
            localStorage.setItem('name', e.target.innerText);
            
        }
    }


    //GET FOCUS FUNCTION
    function getFocus(){
        if(localStorage.getItem('focus') === null){
            focus.textContent = '[enter focus here]';

        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    }
    
    //SET FOCUS FUNCTION
    function setFocus(e){
        if(e.type === 'keypress'){
            //make sure ENTER is pressed
            if(e.which == 13 || e.keyCode == 13){
                localStorage.setItem('focus', e.target.innerText);
                name.blur();
            }
        } else {
            localStorage.setItem('focus', e.target.innerText);
            
        }
    }

// ADD EVENT LISTENER
    //SET NAME
    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    //SET FOCUS
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    //remove text on click
    name.addEventListener('click', setName);

//RUN
showTime();
setBgGreet();
getName();
getFocus();