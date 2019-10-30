// function login()
// {
//     var email=document.getElementById("email_field").value;
//     var pass=document.getElementById("password_field").value;

   
// firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
    
//     window.alert('You have successfully signed in');

//   }
//   );
  
    
 
// }



function login() {
    var email = document.getElementById("email_field").value;
    var pass = document.getElementById("password_field").value;

  
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(res => {
        window.alert("You have successfully signed in");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }






  