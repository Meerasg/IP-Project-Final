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
            firebaseRef.child("user31/name").set("White Knot top");
            firebaseRef.child("user31/cost").set("500")


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
            firebaseRef.child("user32/name").set("Crop Top");
            firebaseRef.child("user32/cost").set("600")


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
            firebaseRef.child("user33/name").set("Yellow Blouse");
            firebaseRef.child("user33/cost").set("900")


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
            firebaseRef.child("user34/name").set("White Tshirt");
            firebaseRef.child("user34/cost").set("400")


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
            firebaseRef.child("user35/name").set("Tank Top");
            firebaseRef.child("user35/cost").set("600")


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
            firebaseRef.child("user36/name").set("Long Sleeves");
            firebaseRef.child("user36/cost").set("700")


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
            firebaseRef.child("user37/name").set("White Top");
            firebaseRef.child("user37/cost").set("700")


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
            firebaseRef.child("user38/name").set("Blouse");
            firebaseRef.child("user38/cost").set("550")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}
