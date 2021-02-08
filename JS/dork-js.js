document.getElementById('js').addEventListener('click', 
function() {
  document.querySelector('.bg-modal1').style.display = 'flex';
});

document.getElementById('close1').addEventListener('click', 
function() {
  document.querySelector('.bg-modal1').style.display = 'none';
});

document.getElementById('btn-js').addEventListener('click', 
function() {
  document.querySelector('.bg-modal1').style.display = 'none';
});

//bg2css

document.getElementById('css').addEventListener('click', 
function() {
  document.querySelector('.modal').style.display = 'flex';
});

document.getElementById('close2').addEventListener('click', 
function() {
  document.querySelector('.modal').style.display = 'none';
});

document.getElementById('btn-css').addEventListener('click', 
function() {
  document.querySelector('.modal').style.display = 'none';
});
//bg3 python
document.getElementById('py').addEventListener('click', 
function() {
  document.querySelector('.modal2').style.display = 'flex';
});

document.getElementById('close3').addEventListener('click', 
function() {
  document.querySelector('.modal2').style.display = 'none';
});

document.getElementById('btn-py').addEventListener('click', 
function() {
  document.querySelector('.modal2').style.display = 'none';
  var python = document.getElementById('py').value;
  document.querySelector('#python-code').innerText = python;
});


//bg4 php

document.getElementById('php').addEventListener('click', 
function() {
  document.querySelector('.modal4').style.display = 'flex';
});

document.getElementById('close4').addEventListener('click', 
function() {
  document.querySelector('.modal4').style.display = 'none';
});

document.getElementById('btn-php').addEventListener('click', 
function() {
  document.querySelector('.modal4').style.display = 'none';
});

//bg5 perl

document.getElementById('perl').addEventListener('click', 
function() {
  document.querySelector('.modal6').style.display = 'flex';
});

document.getElementById('close5').addEventListener('click', 
function() {
  document.querySelector('.modal6').style.display = 'none';
});

document.getElementById('btn-perl').addEventListener('click', 
function() {
  document.querySelector('.modal6').style.display = 'none';
});

//Code Language Programming
var js = document.getElementById('js').value
var css = document.getElementById('css').value
var python = document.getElementById('py').value
var php = document.getElementById('php').value
var perl = document.getElementById('perl').value

var js1 = String(js)
var css1 = String(css)
var python1 = String(python)
var php1 = String(php)
var perl1 = String(perl)

function println(txt_python){
  var py1 = String(txt_python)
  alert(py1)
  document.querySelector('#python-code').value = txt_python;
}


// Stop art
document.getElementById('stop').addEventListener('click', 
function() {
  document.querySelector('.modal-stop').style.display = 'flex';
});

document.getElementById('btn-open').addEventListener('click', 
function() {
  document.querySelector('.modal-stop').style.display = 'none';
});


// save
document.getElementById('save').addEventListener('click', 
function() {
  document.querySelector('.save').style.display = 'flex';
});

document.getElementById('close8').addEventListener('click', 
function() {
  document.querySelector('.save').style.display = 'none';
});

// delete element
document.getElementById('delete').addEventListener('click', 
function() {
  document.querySelector('.modal-delete').style.display = 'flex';
});

document.getElementById('close9').addEventListener('click', 
function() {
  document.querySelector('.modal-delete').style.display = 'none';
});

document.getElementById('btn-delete').addEventListener('click', 
function() {
  document.querySelector('.modal-delete').style.display = 'none';
});



// View Code
document.getElementById('code').addEventListener('click', 
function() {
  document.querySelector('.code1').style.display = 'flex';
});

document.getElementById('close10').addEventListener('click', 
function() {
  document.querySelector('.code1').style.display = 'none';
});

// Run Code
document.getElementById('run').addEventListener('click', 
function() {
  document.querySelector('.run').style.display = 'flex';
});

document.getElementById('close11').addEventListener('click', 
function() {
  document.querySelector('.run').style.display = 'none';
});

// New Project
document.getElementById('new').addEventListener('click', 
function() {
  document.querySelector('.new').style.display = 'flex';
});

document.getElementById('close12').addEventListener('click', 
function() {
  document.querySelector('.new').style.display = 'none';
});

document.getElementById('btn-1385').addEventListener('click', 
function() {
  document.querySelector('.new').style.display = 'none';
});

document.getElementById('btn-1385').addEventListener('click', 
function() {
  document.querySelector('.project').style.display = 'flex';
});



// demo
document.getElementById('demo').addEventListener('click', 
function() {
  document.querySelector('.demo').style.display = 'flex';
});

document.getElementById('close13').addEventListener('click', 
function() {
  document.querySelector('.demo').style.display = 'none';
});

// build
document.getElementById('build').addEventListener('click', 
function() {
  document.querySelector('.demo1').style.display = 'flex';
});

document.getElementById('close14').addEventListener('click', 
function() {
  document.querySelector('.demo1').style.display = 'none';
});
// config
document.getElementById('config').addEventListener('click', 
function() {
  document.querySelector('.demo2').style.display = 'flex';
});

document.getElementById('close15').addEventListener('click', 
function() {
  document.querySelector('.demo2').style.display = 'none';
});

// Create Div
document.getElementById('div').addEventListener('click', 
function() {
  document.querySelector('.modal-div').style.display = 'flex';
});

document.getElementById('close17').addEventListener('click', 
function() {
  document.querySelector('.modal-div').style.display = 'none';
});

document.getElementById('btn-div').addEventListener('click', 
function() {
  document.querySelector('.modal-div').style.display = 'none';
});


// Create h1
document.getElementById('h1').addEventListener('click', 
function() {
  document.querySelector('.modal-h1').style.display = 'flex';
});

document.getElementById('close18').addEventListener('click', 
function() {
  document.querySelector('.modal-h1').style.display = 'none';
});

document.getElementById('btn-h1').addEventListener('click', 
function() {
  document.querySelector('.modal-h1').style.display = 'none';
});

// Create h2
document.getElementById('h2').addEventListener('click', 
function() {
  document.querySelector('.modal-h2').style.display = 'flex';
});

document.getElementById('close19').addEventListener('click', 
function() {
  document.querySelector('.modal-h2').style.display = 'none';
});

document.getElementById('btn-h2').addEventListener('click', 
function() {
  document.querySelector('.modal-h2').style.display = 'none';
});

// create h3
document.getElementById('h3').addEventListener('click', 
function() {
  document.querySelector('.modal-h3').style.display = 'flex';
});

document.getElementById('close20').addEventListener('click', 
function() {
  document.querySelector('.modal-h3').style.display = 'none';
});

document.getElementById('btn-h3').addEventListener('click', 
function() {
  document.querySelector('.modal-h3').style.display = 'none';
});

// create p
document.getElementById('p').addEventListener('click', 
function() {
  document.querySelector('.modal-p').style.display = 'flex';
});

document.getElementById('close21').addEventListener('click', 
function() {
  document.querySelector('.modal-p').style.display = 'none';
});


document.getElementById('btn-p').addEventListener('click', 
function() {
  document.querySelector('.modal-p').style.display = 'none';
});


// create a
document.getElementById('a').addEventListener('click', 
function() {
  document.querySelector('.modal-a').style.display = 'flex';
});

document.getElementById('close22').addEventListener('click', 
function() {
  document.querySelector('.modal-a').style.display = 'none';
});

document.getElementById('btn-a').addEventListener('click', 
function() {
  document.querySelector('.modal-a').style.display = 'none';
});


// Create span
document.getElementById('span').addEventListener('click', 
function() {
  document.querySelector('.modal-span').style.display = 'flex';
});

document.getElementById('close23').addEventListener('click', 
function() {
  document.querySelector('.modal-span').style.display = 'none';
});

document.getElementById('btn-span').addEventListener('click', 
function() {
  document.querySelector('.modal-span').style.display = 'none';
});

// create sec


// create img
document.getElementById('img').addEventListener('click', 
function() {
  document.querySelector('.modal-img').style.display = 'flex';
});

document.getElementById('close25').addEventListener('click', 
function() {
  document.querySelector('.modal-img').style.display = 'none';
});

document.getElementById('btn-img').addEventListener('click', 
function() {
  document.querySelector('.modal-img').style.display = 'none';
});

// video
document.getElementById('video').addEventListener('click', 
function() {
  document.querySelector('.modal-video').style.display = 'flex';
});

document.getElementById('close26').addEventListener('click', 
function() {
  document.querySelector('.modal-video').style.display = 'none';
});

document.getElementById('btn-video').addEventListener('click', 
function() {
  document.querySelector('.modal-video').style.display = 'none';
});

// create btn
document.getElementById('btn').addEventListener('click', 
function() {
  document.querySelector('.modal-btn').style.display = 'flex';
});

document.getElementById('close27').addEventListener('click', 
function() {
  document.querySelector('.modal-btn').style.display = 'none';
});

document.getElementById('btn-btn').addEventListener('click', 
function() {
  document.querySelector('.modal-btn').style.display = 'none';
});

// nav
document.getElementById('nav').addEventListener('click', 
function() {
  document.querySelector('.modal-nav').style.display = 'flex';
});

document.getElementById('close28').addEventListener('click', 
function() {
  document.querySelector('.modal-nav').style.display = 'none';
});


// create input
document.getElementById('input').addEventListener('click', 
function() {
  document.querySelector('.modal-input').style.display = 'flex';
});

document.getElementById('close29').addEventListener('click', 
function() {
  document.querySelector('.modal-input').style.display = 'none';
});

document.getElementById('btn-input').addEventListener('click', 
function() {
  document.querySelector('.modal-input').style.display = 'none';
});


// nav
document.getElementById('option').addEventListener('click', 
function() {
  document.querySelector('.modal-option').style.display = 'flex';
});

document.getElementById('close30').addEventListener('click', 
function() {
  document.querySelector('.modal-option').style.display = 'none';
});


// br
document.getElementById('br').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'flex';
});

document.getElementById('close31').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'none';
});

// plus Style Sheet
document.getElementById('br').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'flex';
});

document.getElementById('close31').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'none';
});

// Edit Element
document.getElementById('edit').addEventListener('click', 
function() {
  document.querySelector('.edit').style.display = 'flex';
});

document.getElementById('close32').addEventListener('click', 
function() {
  document.querySelector('.edit').style.display = 'none';
});

// Welcome
document.getElementById('all-page').addEventListener('click', 
function() {
  document.querySelector('.welcome10').style.display = 'none';
});