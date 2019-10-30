var RootRef=firebase.database().ref().child("User");
RootRef.on("child_added",snap => {
    var item1=snap.child("User");
    var name= snap.child("name").val();
    var cost= snap.child("cost").val();
    
    var btn= document.createElement("button");
    btn.innerHTML="Remove";
     
   
    $("#table_body").append("<tr><td id='row'>" + name + "</td>" +"<td id='row1'>" + cost + "</td>" +"<td><div buttons>"+
                                  "<button onclick='deletebtn(item1)'>Remove</button>"+
                                  "</div></td></tr>");
    

  


});

var total=0;
RootRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot)
    {
    
    var cost= childSnapshot.child("cost").val();
    total=total+parseInt(cost);
    
});
$("#table_body").append("<tr><td>Total</td><td>"+ total + "</td></tr>");

});

function deletebtn(item1)
{

    RootRef.child(item1).remove();
    
    
}

function myclick()
{
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user11/name").set("Shorts");
            firebaseRef.child("user11/cost").set("500")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });




}
 
function click2()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user12/name").set("Striped Pants");
            firebaseRef.child("user12/cost").set("600")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });


}
function click3()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user13/name").set("Formal Pants");
            firebaseRef.child("user13/cost").set("1400")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}
function click4()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user14/name").set("Joggers");
            firebaseRef.child("user14/cost").set("900")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}
function click5()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user15/name").set("Frilled pants");
            firebaseRef.child("user15/cost").set("1100")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}
function click6()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user16/name").set("Formal Pants");
            firebaseRef.child("user16/cost").set("1500")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });

}

function click7()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user17/name").set("Cotton Pants");
            firebaseRef.child("user17/cost").set("700")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}

function click8()
{
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var firebaseRef = firebase.database().ref("User");
            firebaseRef.child("user18/name").set("Bech Pants");
            firebaseRef.child("user18/cost").set("1200")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}
