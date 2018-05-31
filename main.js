var custom=document.getElementById('custom');
var openButton=document.getElementById('openButton');
var page= document.getElementsByClassName('path');
//       setInterval(function(){
      
//             document.getElementById('s2').style.position="relative";
//             document.getElementById('s1').style.display="none";
            
//       },10000)


// setInterval(function(){
//       document.getElementById('s3').style.position="relative";
//       document.getElementById('s2').style.display="none";
// },20000)

// setInterval(function(){
//       document.getElementById('s4').style.position="relative";
//       document.getElementById('s3').style.display="none";
// },30000)
// setInterval(function(){
//       document.getElementById('s5').style.position="relative";
//       document.getElementById('s4').style.display="none";
// },40000)
// setInterval(function(){
//       document.getElementById('s6').style.position="relative";
//       document.getElementById('s5').style.display="none";
// },50000)
// setInterval(function(){
//       document.getElementById('s7').style.position="relative";
//       document.getElementById('s6').style.display="none";
// },60000)
// setInterval(function(){
//       document.getElementById('s8').style.position="relative";
//       document.getElementById('s7').style.display="none";
// },70000)
// setInterval(function(){
//       document.getElementById('s9').style.position="relative";
//       document.getElementById('s8').style.display="none";
// },80000)
// setInterval(function(){
//       document.getElementById('s10').style.position="relative";
//       document.getElementById('s9').style.display="none";
// },90000)
// setInterval(function(){
//       document.getElementById('10').style.position="relative";
//       document.getElementById('s9').style.display="none";
// },100000)


if(!localStorage.getItem('bgcolor')){
      changeBgColor();
}
else {
      styleBgColor();
}
if(!localStorage.getItem('fontcolor')){
      changeFontColor();
}
else {
      styleFontColor();
}
if(!localStorage.getItem('fonttype')){
      changeFontType();
}
else {
      styleFontType();
}
if(!localStorage.getItem('Size')) {
      changeFontSizeS();
}
else {
      styleFontSize();
}
function showCustomize() {
  custom.style.transition=" all 1.5s ease-in-out";
  custom.style.maxHeight="500px";
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


function bringLeftHamBack() {
      document.getElementById('ham').style.transition="all 0.5s ease-in-out";
      document.getElementById('ham').style.opacity="1";
}
function changeFontColor() {
      localStorage.setItem('fontcolor',document.getElementById('fontColor').value);
      styleFontColor();
}
function changeBgColor() {
      localStorage.setItem('bgcolor',document.getElementById('bgColor').value);
      styleBgColor();
}
function styleFontColor() {                 
      var currentColor = localStorage.getItem('fontcolor');
      document.getElementById('fontColor').value = currentColor;
      document.body.style.transition="all 1.5s ease-in-out" ;
      document.body.style.color= currentColor ;
      for (var i=0;i<page.length;i++)
      {
            page[i].style.transition="all 1.5s ease-in-out";
            page[i].style.color=currentColor;
      }    
}

 function styleBgColor() {                 
       var currentColor = localStorage.getItem('bgcolor');
       document.getElementById('bgColor').value = currentColor;
       document.body.style.transition="all 1.5s ease-in-out" ;
       document.body.style.backgroundColor= currentColor ;
       openButton.style.backgroundColor=currentColor;
       for (var i=0;i<page.length;i++)
       {
             page[i].style.transition="all 1.5s ease-in-out";
             page[i].style.backgroundColor=currentColor;
       }

       
}
function changeFontType() {
      localStorage.setItem('fonttype',document.getElementById('changeFont').value);
      styleFontType();
}
function styleFontType() {
      var currentType= localStorage.getItem('fonttype');
      document.getElementById('changeFont').value = currentType;
      for (var i=0;i<page.length;i++)
      {
            page[i].style.transition="all 1.5s ease-in-out";
            page[i].style.fontFamily=currentType;
      }
}
function changeFontSize() {
      localStorage.setItem('Size',document.getElementById('fontselect').value);
      styleFontSize();
}
function styleFontSize() {
      var currentSize= localStorage.getItem('Size');
      document.getElementById('fontselect').value = currentSize;
      var i = document.getElementById('fontselect').value;
      for (var i=0;i<page.length;i++)
      {
            page[i].style.transition="all 1.5s ease-in-out";
            page[i].style.fontSize=currentSize;
      }
 }
