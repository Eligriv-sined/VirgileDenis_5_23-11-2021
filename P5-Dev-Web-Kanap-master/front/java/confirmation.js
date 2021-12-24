function confirmComande(){
    const idComande = document.getElementById("orderId");
    idComande.innerText = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"))
    
}

confirmComande();

