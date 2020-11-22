addElement()

function addElement () { 
  // create a new div element 
  // and give it popup content 
  var newDiv = document.createElement("div"); 
  newDiv.innerHTML +='<button class="open_button" onClick="openPopup()">Open Popup</button><div id="popup" style="  position: absolute;width: 500px;height:300px;z-index: 999;display: none;top:0;left:1000px;background-color: #fff;  border: 1px solid #ddd; overflow: hidden;   padding: 10px;"><div class="popup_body" style="  height: 100px;">Boycott Videshi,Buy Swadeshi<br><br>Origin of the product is: China</div><button class="close_button"onClick="closePopup()">close</button</div>';   
  var origin = localStorage.getItem("my_data");
  console.log(origin);

  // add the newly created element and its content into the DOM 
  // var currentDiv = document.getElementById("main_container"); 
  // document.body.insertBefore(newDiv, currentDiv); 

  // open popup onload
  openPopup();

  var text=document.getElementById('popup');

  text.innerHTML=origin;
}

function openPopup() {
  
  var el = document.getElementById('popup');
  el.style.display = 'block';
  
  // Updates: set window background color black
  document.body.style.background = '#353333';
}

function closePopup() {
  var el = document.getElementById('popup');
  el.style.display = 'none';
  document.body.style.background = 'white';
}