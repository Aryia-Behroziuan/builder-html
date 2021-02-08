/* Plus Style Sheet
document.getElementById('br').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'flex';
});

document.getElementById('close31').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'none';
});*/

function StyleSheet(){
     var select_element = String(document.querySelector('#txt-class-name').value);
     document.querySelector(select_element).style.width = String(document.querySelector('#width').value);
     document.querySelector(select_element).style.height = String(document.querySelector('#height').value);
     document.querySelector(select_element).style.margin = String(document.querySelector('#margin').value);
     document.querySelector(select_element).style.marginTop = String(document.querySelector('#margin-top').value);
     document.querySelector(select_element).style.marginBottom = String(document.querySelector('#margin-bottom').value);
     document.querySelector(select_element).style.marginLeft = String(document.querySelector('#margin-left').value);
     document.querySelector(select_element).style.marginRight = String(document.querySelector('#margin-right').value);
     document.querySelector(select_element).style.padding = String(document.querySelector('#padding').value);
     document.querySelector(select_element).style.paddingTop = String(document.querySelector('#padding-top').value);
     document.querySelector(select_element).style.paddingBottom = String(document.querySelector('#padding-bottom').value);
     document.querySelector(select_element).style.paddingLeft = String(document.querySelector('#padding-left').value);
     document.querySelector(select_element).style.PaddingRight = String(document.querySelector('#Padding-right').value);
     document.querySelector(select_element).style.position = String(document.querySelector('#position').value);
     document.querySelector(select_element).style.opacity = String(document.querySelector('#opacity').value);
     document.querySelector(select_element).style.float = String(document.querySelector('#float').value);
     document.querySelector(select_element).style.display = String(document.querySelector('#display').value);
     document.querySelector(select_element).style.color = String(document.querySelector('#color').value);
     document.querySelector(select_element).style.fontFamily = String(document.querySelector('#font-family').value);
     document.querySelector(select_element).style.fontStyle = String(document.querySelector('#font-style').value);
     document.querySelector(select_element).style.fontVariant = String(document.querySelector('#font-variant').value);
     document.querySelector(select_element).style.textAlign = String(document.querySelector('#text-align').value);
     document.querySelector(select_element).style.textDecoration = String(document.querySelector('#text-decoration').value);
     document.querySelector(select_element).style.textShadow = String(document.querySelector('#text-shadow').value);
     document.querySelector(select_element).style.textIndent = String(document.querySelector('#text-indent').value);
     document.querySelector(select_element).style.borderCollapse = String(document.querySelector('#border-collapse').value);
     document.querySelector(select_element).style.borderColor = String(document.querySelector('#border-color').value);
     document.querySelector(select_element).style.borderWidth = String(document.querySelector('#border-width').value);
     document.querySelector(select_element).style.borderStyle = String(document.querySelector('#border-style').value);
     document.querySelector(select_element).style.borderRadius = String(document.querySelector('#border-radius').value);
     document.querySelector(select_element).style.backgroundColor = String(document.querySelector('#background-color').value);
     document.querySelector(select_element).style.backgroundImage = String(document.querySelector('#background-image').value);
     document.querySelector(select_element).style.backgroundPosition = String(document.querySelector('#background-position').value);
     document.querySelector(select_element).style.backgroundSize = String(document.querySelector('#background-size').value);
     document.querySelector(select_element).style.backgroundClip = String(document.querySelector('#background-clip').value);
     document.querySelector(select_element).style.backgroundRepeat = String(document.querySelector('#background-repeat').value);
     document.querySelector(select_element).style.backgroundOrigin = String(document.querySelector('#background-origin').value);
     document.querySelector(select_element).style.backgroundAttachment = String(document.querySelector('#background-attachment').value);
     document.querySelector(select_element).style.boxShadow = String(document.querySelector('#box-shadow').value);
     document.querySelector(select_element).style.boxDirection = String(document.querySelector('#box-direction').value);
     document.querySelector(select_element).style.background = String(document.querySelector('#background').value);
}

function create_code(){
     // Build CSS Code For Display
     var select_element1 = String(document.querySelector('#txt-class-name').value);
     var build_css_code = String(document.querySelector('#python-code').value);
     if(build_css_code == select_element1+'{'+'\n'+'    width:'+String(document.querySelector('#width').value)+';'+'\n'+'}'+'\n'){
          alert('No Push')
     }else{
          document.querySelector('#python-code').innerHTML =  build_css_code+select_element1+'{'+'\n'+'    width:'+String(document.querySelector('#width').value)+';'+'\n'+
          '    height:'+String(document.querySelector('#height').value)+';'+'\n'+
          '    margin:'+String(document.querySelector('#margin').value)+';'+'\n'+
          '    margin-bottom:'+String(document.querySelector('#margin-bottom').value)+';'+'\n'+
          '    margin-left:'+String(document.querySelector('#margin-left').value)+';'+'\n'+
          '    margin-right:'+String(document.querySelector('#margin-right').value)+';'+'\n'+
          '    paddingt:'+String(document.querySelector('#padding').value)+';'+'\n'+
          '    padding-top:'+String(document.querySelector('#padding-top').value)+';'+'\n'+
          '    padding-bottom:'+String(document.querySelector('#padding-bottom').value)+';'+'\n'+
          '    padding-left:'+String(document.querySelector('#padding-left').value)+';'+'\n'+
          '    Padding-right:'+String(document.querySelector('#Padding-right').value)+';'+'\n'+
          '    position:'+String(document.querySelector('#position').value)+';'+'\n'+
          '    opacity:'+String(document.querySelector('#opacity').value)+';'+'\n'+
          '    float:'+String(document.querySelector('#float').value)+';'+'\n'+
          '    display:'+String(document.querySelector('#display').value)+';'+'\n'+
          '    color:'+String(document.querySelector('#color').value)+';'+'\n'+
          '    font-family:'+String(document.querySelector('#font-family').value)+';'+'\n'+
          '    font-style:'+String(document.querySelector('#font-style').value)+';'+'\n'+
          '    border-radius:'+String(document.querySelector('#border-radius').value)+';'+'\n'+
          '    background-color:'+String(document.querySelector('#background-color').value)+';'+'\n'+
          '    background-image:'+String(document.querySelector('#background-image').value)+';'+'\n'+
          '    background-position:'+String(document.querySelector('#background-position').value)+';'+'\n'+
          '    background-size:'+String(document.querySelector('#background-size').value)+';'+'\n'+
          '    background-clip:'+String(document.querySelector('#background-clip').value)+';'+'\n'+
          '    background-repeat:'+String(document.querySelector('#background-repeat').value)+';'+'\n'+
          '    background-origin:'+String(document.querySelector('#background-origin').value)+';'+'\n'+
          '    background-attachment:'+String(document.querySelector('#background-attachment').value)+';'+'\n'+
          '    box-shadow:'+String(document.querySelector('#box-shadow').value)+';'+'\n'+
          '    box-direction:'+String(document.querySelector('#box-direction').value)+';'+'\n'+
          '    background:'+String(document.querySelector('#background').value)+';'+'\n'+
          '    margin-top:'+String(document.querySelector('#margin-top').value)+';\n'+'}'+'\n';
     }
     //document.querySelector('#python-code').innerHTML =  build_css_code+select_element+'{'+'\n'+'    width:'+String(document.querySelector('#width').value)+';'+'\n'+'}'+'\n';
}

// Save Css Code Users
function save_css(){
     var save_css_code = String(document.querySelector('.cc').value);
     var select_costom = String(document.querySelector('#select-obj').value);
     var build_css_code1 = String(document.querySelector('#python-code').value);
     document.querySelector('#python-code').innerHTML =  build_css_code1+select_costom+'{'+'\n'+save_css_code+'\n'+'}'+'\n';

}

// plus JS Code Users
//function plus_js(){
//     var code_js = document.querySelector('.code-js').value;
 //    document.querySelector('.js-tag').innerHTML = code_js;
//}


function plus_css(){
     var select_obj1 = String(document.querySelector('#select-obj').value);
     var css_code = String(document.querySelector('.cc').value);
     document.querySelector(select_obj1).style = css_code;
     //document.querySelector(select_element).style = String(document.querySelector('#background').value);
}


// Delete Element
function delete_element(){
     var select_element_delete = String(document.querySelector('#select-delete').value);
     document.querySelector(select_element_delete).style.display = 'none';
     
}

// Create Div Tag
function create_div(){
     var class_name_div = String(document.querySelector('#class-name-div').value);
     var id_name_div = String(document.querySelector('#id-name-div').value);
     var value_div_new = String(document.querySelector('#style-div').value);
     var value_div = document.querySelector('#html-code').value;
     var select_edit = String(document.querySelector('#select-edit').value);

     const div = document.createElement('div');
     const divTxt = document.createTextNode(value_div_new);
     div.appendChild(divTxt);
     div.classList.add(class_name_div);
     div.id = id_name_div;
     document.querySelector(select_edit).appendChild(div);


     document.querySelector('#html-code').innerHTML =  value_div+'<div class="'+class_name_div+'" id="'+id_name_div+'">'+value_div_new+'</div>';

}


// Create h1 Tag
function create_h1(){
     var class_name_h1 = String(document.querySelector('#class-name-h1').value);
     var id_name_h1 = String(document.querySelector('#id-name-h1').value);
     var value_h1_new = String(document.querySelector('#style-h3').value);
     var value_h1 = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#Layout-h1').value);


     const hone = document.createElement('h1');
     const hoTxt = document.createTextNode(value_h1_new);
     hone.appendChild(hoTxt);
     hone.classList.add(class_name_h1);
     hone.id = id_name_h1;
     document.querySelector(layout).appendChild(hone);


     document.querySelector('#html-code').innerHTML =  value_h1+'<h1 class="'+class_name_h1+'" id="'+id_name_h1+'">'+value_h1_new+'</h1>';

}

// Craete h2 Tag
function create_h2(){
     var class_name_h2 = String(document.querySelector('#class-name-h2').value);
     var id_name_h2 = String(document.querySelector('#id-name-h2').value);
     var value_h2_new = String(document.querySelector('#style-h2').value);
     var value_h2 = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-h2').value);


     const h2 = document.createElement('h2');
     const h2Txt = document.createTextNode(value_h2_new);
     h2.appendChild(h2Txt);
     h2.classList.add(class_name_h2);
     h2.id = id_name_h2;
     document.querySelector(layout).appendChild(h2);


     document.querySelector('#html-code').innerHTML =  value_h2+'<h2 class="'+class_name_h2+'" id="'+id_name_h2+'">'+value_h2_new+'</h2>';

}

// Create h3 
function create_h3(){
     var class_name_h3 = String(document.querySelector('#class-name-h3').value);
     var id_name_h3 = String(document.querySelector('#id-name-h3').value);
     var value_h3_new = String(document.querySelector('#style-htree').value);
     var value_h3 = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-h3').value);


     const h3 = document.createElement('h3');
     const h3Txt = document.createTextNode(value_h3_new);
     h3.appendChild(h3Txt);
     h3.classList.add(class_name_h3);
     h3.id = id_name_h3;
     document.querySelector(layout).appendChild(h3);


     document.querySelector('#html-code').innerHTML =  value_h3+'<h3 class="'+class_name_h3+'" id="'+id_name_h3+'">'+value_h3_new+'</h3>';

}

// Create p Tag
function create_p(){
     var class_name_p = String(document.querySelector('#class-name-p').value);
     var id_name_p = String(document.querySelector('#id-name-p').value);
     var value_p_new = String(document.querySelector('#style-p').value);
     var value_p = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-p').value);


     const p = document.createElement('p');
     const h3Txt = document.createTextNode(value_p_new);
     p.appendChild(h3Txt);
     p.classList.add(class_name_p);
     p.id = id_name_p;
     document.querySelector(layout).appendChild(p);


     document.querySelector('#html-code').innerHTML =  value_p+'<p class="'+class_name_p+'" id="'+id_name_p+'">'+value_p_new+'</p>';

}

// Create a Tag
function create_a(){
     var class_name_a = String(document.querySelector('#class-name-a').value);
     var id_name_a = String(document.querySelector('#id-name-a').value);
     var value_a_new = String(document.querySelector('#style-a').value);
     var value_a = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-a').value);
     var href_a = String(document.querySelector('#hrdf-a').value);


     const a = document.createElement('a');
     const h3Txt = document.createTextNode(value_a_new);
     a.appendChild(h3Txt);
     a.classList.add(class_name_a);
     a.id = id_name_a;
     a.href = href_a;
     document.querySelector(layout).appendChild(a);


     document.querySelector('#html-code').innerHTML =  value_a+'<a class="'+class_name_a+'" id="'+id_name_a+'">'+value_a_new+'</a>';

}

// Create span tag
function create_span(){
     var class_name_span = String(document.querySelector('#class-name-span').value);
     var id_name_span = String(document.querySelector('#id-name-span').value);
     var value_span_new = String(document.querySelector('#style-span').value);
     var value_span = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-span').value);


     const span = document.createElement('span');
     const h3Txt = document.createTextNode(value_span_new);
     span.appendChild(h3Txt);
     span.classList.add(class_name_span);
     span.id = id_name_span;
     document.querySelector(layout).appendChild(span);


     document.querySelector('#html-code').innerHTML =  value_span+'<span class="'+class_name_span+'" id="'+id_name_span+'">'+value_span_new+'</span>';

}

// Create img Tag
function create_img(){
     var class_name_img = String(document.querySelector('#class-name-img').value);
     var id_name_img = String(document.querySelector('#id-name-img').value);
     var value_img_new = String(document.querySelector('#style-img').value);
     var value_img = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-img').value);
     var src = String(document.querySelector('#src-img').value);


     const img = document.createElement('img');
     const imgTxt = document.createTextNode(value_img_new);
     img.appendChild(imgTxt);
     img.classList.add(class_name_img);
     img.id = id_name_img;
     img.src = src;
     document.querySelector(layout).appendChild(img);


     document.querySelector('#html-code').innerHTML =  value_img+'<img src="'+src+'" class="'+class_name_img+'" id="'+id_name_img+'">';

}

// Create Video Tag
function create_video(){
     var class_name_video = String(document.querySelector('#class-name-video').value);
     var id_name_video = String(document.querySelector('#id-name-video').value);
     var value_video_new = String(document.querySelector('#style-video').value);
     var value_video = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-video').value);
     var src = String(document.querySelector('#url-video').value);


     const video = document.createElement('video');
     const videoTxt = document.createTextNode(value_video_new);
     video.appendChild(videoTxt);
     video.classList.add(class_name_video);
     video.id = id_name_video;
     video.src = src;
     document.querySelector(layout).appendChild(video);


     document.querySelector('#html-code').innerHTML =  value_video+'<video src="'+src+'" class="'+class_name_video+'" id="'+id_name_video+'">'+value_video_new+'</video>';

}

// Create Btn Tag
function create_btn(){
     var class_name_btn = String(document.querySelector('#class-name-btn').value);
     var id_name_btn = String(document.querySelector('#id-name-btn').value);
     var value_btn_new = String(document.querySelector('#style-btn1').value);
     var value_btn = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-btn').value);
     var type = String(document.querySelector('#type-btn').value);


     const btn = document.createElement('button');
     const btnTxt = document.createTextNode(value_btn_new);
     btn.appendChild(btnTxt);
     btn.classList.add(class_name_btn);
     btn.id = id_name_btn;
     btn.src = type;
     document.querySelector(layout).appendChild(btn);


     document.querySelector('#html-code').innerHTML =  value_btn+'<button type="'+type+'" class="'+class_name_btn+'" id="'+id_name_btn+'">'+value_btn_new+'</button>';

}

// Create input Tag 
function create_input(){
     var class_name_input = String(document.querySelector('#class-name-input').value);
     var id_name_input = String(document.querySelector('#id-name-input').value);
     var value_input_new = String(document.querySelector('#style-input').value);
     var value_input = document.querySelector('#html-code').value;
     var layout = String(document.querySelector('#layout-input').value);
     var type = String(document.querySelector('#type-input').value);


     const input = document.createElement('input');
     const inputTxt = document.createTextNode(value_input_new);
     input.appendChild(inputTxt);
     input.classList.add(class_name_input);
     input.id = id_name_input;
     input.src = type;
     document.querySelector(layout).appendChild(input);


     document.querySelector('#html-code').innerHTML =  value_input+'<input type="'+type+'" class="'+class_name_input+'" id="'+id_name_input+'">'+value_input_new+'</input>';

}

// Edit Element
function editing(){
     var element_edit = String(document.querySelector('#edit-element-new').value);
     var value_edit = String(document.querySelector('#style-edit1').value);

     // edit value element selected
     document.querySelector(element_edit).innerHTML = value_edit;
}
