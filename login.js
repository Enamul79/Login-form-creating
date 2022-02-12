document.getElementById('submit-btn').addEventListener('click',function(){
   // console.log('submit-btn clicked');
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value; 

   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   if(userEmail == 'enahaque79@gmail.com' && userPassword == 'enahaque79@'){
         // console.log('valid user');
        
         window.location.href='dhoni.html';
   }
})