var custom=document.getElementById('custom');
var thisPage=window.location.href;
var openButton=document.getElementById('openButton');
var page=thisPage.slice(43,48);
setInterval(function() {
       var x="s1";
       var y="s2";
      document.getElementById(y).style.position="relative";
      document.getElementById(x).style.display="none";
      
},5000)
if(!localStorage.getItem('bgcolor')){
      changeBgColor();
}
else {
      styleBgColor();
}
if(!localStorage.getItem('theme')){
      changeTheme();
}
else {
      styleTheme();
}
if(!localStorage.getItem('Size')) {
      changeFontSizeS();
}
else {
      styleFontSize();
}
function showCustomize() {
  custom.style.transition=" all 1.5s ease-in-out";
  custom.style.maxHeight="375px";
}
function closeCustomize() {
 custom.style.transition=" all 1.5s ease-in-out";
 custom.style.maxHeight="0";
}
function fadeButton() {
 openButton.style.transition="all 1.5s ease-in-out";
 openButton.style.opacity="0";
}
function bringButton() {
 openButton.style.transition="all 1.5s ease-in-out";      
 openButton.style.opacity="1";
}
function changeTheme() {
      localStorage.setItem('theme',document.getElementById('theme1').value);
      styleTheme();
}
function styleTheme() {
 var currentColor= localStorage.getItem('theme');
 document.getElementById('theme1').value= currentColor;
    
 switch(document.getElementById('theme1').value){
            case "Daracula":
            {
                  document.body.style.transition="all 1.5s ease-in-out";
                  document.getElementById(page).style.transition="all 1.5s ease-in-out";
                  custom.style.color="#000016";
                  custom.style.transition="all 1.5s ease-in-out";
                  custom.style.backgroundColor="#fff";
                  document.body.style.backgroundColor="#000016";
                  document.body.style.color="#fff";
                  openButton.style.backgroundColor="#000016";
                  openButton.style.transition="all 1.5s ease-in-out";
                  openButton.style.color="#fff";
                  document.getElementById(page).style.backgroundColor="#000016";            
                  document.getElementById(page).style.color="#fff";            
            break;
            }
            case "Yellow":
            {     
                  document.body.style.transition="all 1.5s ease-in-out";
                  document.getElementById(page).style.transition="all 1.5s ease-in-out";
                  document.body.style.backgroundColor="yellow";
                  document.getElementById(page).style.backgroundColor="yellow";
                  
                  openButton.style.color="#000016";
                  openButton.style.backgroundColor="yellow";
                  document.getElementById(page).style.color="#000016";                  
                  document.body.style.color="#000016";
                  break;
            
            }
            case "White":
            {
                  document.body.style.transition="all 1.5s ease-in-out";
                  document.getElementById(page).style.transition="all 1.5s ease-in-out";
                  openButton.style.color="black";    
                  openButton.style.backgroundColor="#fff";
                  document.body.style.backgroundColor="#fff";
                  document.getElementById(page).style.backgroundColor="#fff";
                  document.getElementById(page).style.color="#000016";
                  document.body.style.color="#000016";
                  break;
            }
           case "Blue":
            {
                  document.body.style.transition="all 1.5s ease-in-out";
                  document.getElementById(page).style.transition="all 1.5s ease-in-out";
                  openButton.style.color="#000016";
                  document.body.style.backgroundColor="lightskyblue";
                  openButton.style.backgroundColor="lightskyblue";
                  document.getElementById(page).style.backgroundColor="lightskyblue";                  
                  document.getElementById(page).style.color="#000016";                  
                  document.body.style.color="#000016";
                  break;
            }
      }
}

function openLeftBar() {
      document.getElementById("leftbar").style.left="0";
      document.getElementById("leftbar").style.zIndex="1";
}

function fadeButtons() {
     var i =  document.getElementsByClassName('paging');
     for (var j=0 ;j<i.length;j++)
     {
           i[j].style.opacity="0";
     }
}
function fadeTheme() {
      document.getElementById("themetoggle").style.opacity="0";
}
function fadeLeftHam() {
      document.getElementById('ham').style.transition="all 0.5s ease-in-out";
      document.getElementById('ham').style.opacity="0";
    
}

function bringButtonsBack() {
      var i =  document.getElementsByClassName('paging');
      for (var j=0; j<i.length;j++)
      {
            i[j].style.opacity="1";
      }
}
function closeLeftBar() {
 document.getElementById('leftbar').style.left="-200px";
}

function bringThemeBack() {
      document.getElementById("themetoggle").style.opacity="1";
}
function bringLeftHamBack() {
      document.getElementById('ham').style.transition="all 0.5s ease-in-out";
      document.getElementById('ham').style.opacity="1";
}

function fadeFontSize() {
      document.getElementById('fontSize1').style.transition="opacity 0.5s ease-in-out";
      document.getElementById('fontSize1').style.opacity="0";
//      setTimeout(function(){
//            document.getElementById('fontSize1').style.width="0";
//            document.getElementById('fontSize1').style.height="0";},1000);
}
function bringFontSize() {
      document.getElementById('fontSize1').style.transition="all 0.5s ease-in-out";
      document.getElementById('fontSize1').style.opacity="1";
      // setTimeout(function bf(){
      //       document.getElementById('fontSize1').style.width="250px";
      //       document.getElementById('fontSize1').style.height="auto";},100);
 }
function changeFontColor() {
      var i = document.getElementById('fontColor').value;
        document.getElementById(page).style.transition="all .5s ease-in-out";
        document.getElementById(page).style.color=i;
}
function changeBgColor() {
      localStorage.setItem('bgcolor',document.getElementById('bgColor').value);
      styleBgColor();
}

 function styleBgColor() {                 
       var currentColor = localStorage.getItem('bgcolor');
       document.getElementById('bgColor').value = currentColor;
       document.body.style.backgroundColor= currentColor ;
       document.body.style.transition="all 1.5s ease-in-out" ;
       document.getElementById(page).style.backgroundColor=currentColor;
       openButton.style.backgroundColor=currentColor;
       document.getElementById(page).style.transition="all 1.5s ease-in-out";
       
}
function changeFontType() {
     var i =document.getElementById('changeFont').value;
     document.getElementById(page).style.fontFamily=i;
}
function changeFontColorS() {
      var i = document.getElementById('fontColorS').value;
        document.getElementById(page).style.transition="all .5s ease-in-out";
        document.getElementById(page).style.color=i;
}
function changeBgColorS() {
      var i = document.getElementById('bgColorS').value;
      document.body.style.backgroundColor= i ;
      document.body.style.transition="all 1.5s ease-in-out" ;
      document.getElementById(page).style.backgroundColor=i;
      openButton.style.backgroundColor=i;
      document.getElementById(page).style.transition="all 1.5s ease-in-out";
}
function changeFontSize() {
     var i = document.getElementById('fontselect').value;
     document.getElementById(page).style.transition="all 1.5s ease-in-out";
     document.getElementById(page).style.fontSize= i;
     if(i=="29px"||i=="35px"||i=="24px") {
      document.body.style.overflow="scroll";
    }else {
          document.body.style.overflow="hidden";
    }
}
function changeFontSizeS() {
      localStorage.setItem('Size',document.getElementById('fontsize').value);
      styleFontSize();
}
function styleFontSize() {
      var currentSize= localStorage.getItem('Size');
      document.getElementById('fontsize').value = currentSize;
      var i = document.getElementById('fontsize').value;
      document.getElementById(page).style.transition="all 1.5s ease-in-out";
      document.getElementById(page).style.fontSize= i;
      if(i=="29px"||i=="35px"||i=="24px") {
        document.body.style.overflow="scroll";
      }else {
            document.body.style.overflow="hidden";
      }
      switch (i) {
            case "3px":
            document.getElementById(page).style.width="5%";
            case "6px":
            document.getElementById(page).style.width="10%";
            case "12px":
            document.getElementById(page).style.width="20%";
            case "18px":
            document.getElementById(page).style.width="30%";
            case "24px":
            document.getElementById(page).style.width="50%";
            case "29px":
            document.getElementById(page).style.width="55%";
            case "35px":
            document.getElementById(page).style.width="60%";
      }
 }
 function changeFontSizeP() {
       var i=document.getElementById('fontSizeP').value;
       i+="px";
       document.getElementById(page).style.fontSize=i;
       if(i>="30px")
       {
             document.body.style.overflow="scroll";
       }
      }
function changeFontTypeP() {
      var i=document.getElementById('changeFontTypeP').value;
      document.getElementById(page).style.fontFamily=i;
}
