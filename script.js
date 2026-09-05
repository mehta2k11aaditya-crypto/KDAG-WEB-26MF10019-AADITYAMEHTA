console.log("Test");
function Ondata(){
    console.log("Submit Call");
    var x = document.getElementById("username").value;
    var y = document.getElementById("roll").value;
    var z = document.getElementById("mail").value;
    var w = document.getElementById("dept").value;
    var v = document.getElementById("query").value;

    var correct;

    if((x == "") || (y == "") || (z == "") || (w == "")){
        alert("Kindly fill all the required fields!");
        correct = 0;
    }
    else if(y.length != 9){     
        alert("Roll Number is not of length 9!");
        correct = 0;
    }
    else if(z.endsWith("@kgpian.iitkgp.ac.in")){
        correct = 1;
    }
    else{
        alert("Enter valid KGP email Id only.");
        correct = 0;
    }

    if(correct == 1){
        document.getElementById("forms").classList.add("hidden");
        document.getElementById("popup").classList.remove("hidden");
    }
}
