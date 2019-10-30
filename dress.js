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
            firebaseRef.child("user21/name").set("BodyCon Dress");
            firebaseRef.child("user21/cost").set("1200")


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
            firebaseRef.child("user22/name").set("Floral Dress");
            firebaseRef.child("user22/cost").set("700")


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
            firebaseRef.child("user23/name").set("Sequin Dress");
            firebaseRef.child("user23/cost").set("1100")


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
            firebaseRef.child("user24/name").set("Formal Dress");
            firebaseRef.child("user24/cost").set("5000")


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
            firebaseRef.child("user25/name").set("Boho Dress");
            firebaseRef.child("user25/cost").set("900")


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
            firebaseRef.child("user26/name").set("SunDress");
            firebaseRef.child("user26/cost").set("1500")


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
            firebaseRef.child("user27/name").set("Knee Lenght Dress");
            firebaseRef.child("user27/cost").set("700")


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
            firebaseRef.child("user28/name").set("Gown");
            firebaseRef.child("user28/cost").set("2000")


        }

        else{
            alert("Please Login or Sign Up");
        }
    });
}
