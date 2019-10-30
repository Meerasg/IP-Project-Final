function login()
{
    var email=document.getElementById("email_field").value;
    var pass=document.getElementById("password_field").value;

   // firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     //..
//   });
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
      
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password. Please try putting password again!');
    }
    else {
     alert(errorMessage);
     window.location.href="Accessories.html";
    
    }
  
  });
  
  firebase.auth().onAuthStateChanged(function(user) 
  {
    if (user) {
      // User is signed in.
    //   var displayName = user.displayName;
    var email = user.email;
    console.log(email);
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
     window.open('prr.html');

      // ...
    } else {
      // User is signed out.
      // ...

    }
  });
}