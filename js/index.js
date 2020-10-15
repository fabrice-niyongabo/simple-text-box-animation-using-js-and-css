let width = 70; //width of the text box in percentage
let height = 80; //height of the text box in pixels

const textBox = document.getElementById('textBox');//detect textarea so that we can use it anywhere in this document.
const myBtn = document.getElementById('myBtn');//detect start typing button.
const myTitle = document.getElementById('myTitle');

const animateTheHeight = () => {
  textBox.style.height = 0;
  textBox.style.padding = 0;
  textBox.style.width = width + "%";
  textBox.style.display = "block";
  textBox.setAttribute('disabled','true');

  //the animation
  let x = 0;
  let interval = setInterval(() => {
    if(x <= height){
      textBox.style.height = x + "px";
      x++;
    }else{
      clearInterval(interval); //we have finished animating the height.
      customiseTheTextBox(); //apply some styles to the text box after animation.
      textBox.focus();
    }
  }, 5);
}

const animateTheWidth = () => {
  textBox.style.height = 0;
  textBox.style.padding = 0;
  textBox.style.width = "0%";
  textBox.style.display = "block";
  textBox.setAttribute('disabled','true');
  myBtn.setAttribute('disabled','true');
  myBtn.style.display = "none";
  myTitle.style.marginTop = "15%";
  myTitle.style.marginBottom = "30px";

  //the animation
  let x = 0;
  let interval = setInterval(() => {
    if(x <= width){
      textBox.style.width = x + "%";
      x++;
    }else{
      clearInterval(interval); //we have finished animating the width.
      animateTheHeight(); //start animatin the height.
    }
  }, 5);
}

const customiseTheTextBox = () => {
  textBox.style.padding = "10px";
  textBox.removeAttribute('disabled');
}

//add event listener when the window loads
window.addEventListener('load', () => {
  //start typing button
  document.getElementById('myBtn').addEventListener('click', animateTheWidth);
});