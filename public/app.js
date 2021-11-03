
const contactform= document.querySelector('.contact-form');
const Name=document.getElementById("name");
const email=document.getElementById("mail");
const msg=document.getElementById("message");


contactform.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('clicked');


  let formdata={
 Name : Name.value,
  Email : email.value,
  Msg : msg.value,
  }
  
  let xhr= new XMLHttpRequest();
  xhr.open('POST','/');
  xhr.setRequestHeader('content-type','application/json');
  xhr.onload = function(){
 console.log(xhr.responseText);
 if(xhr.responseText=='success')
 {
 alert('email sent');
 Name.value='';
 email.value='';
 msg.value='';
  }
else{
  alert('something went wrong');
}

  }

 xhr.send(JSON.stringify(formdata));
})