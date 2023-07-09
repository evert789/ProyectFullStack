document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  


    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
   
    var data = {
      nombre: nombre,
      email: email,
      mensaje: mensaje,
    };

    console.log('data', data);
  
   
    fetch("http://127.0.0.1:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
        console.log('respuesta', response.json());
      if (response.ok) {
      
        alert("Datos enviados correctamente");
      } else {
        
        alert("Error al enviar los datos");
      }
    })
    .catch(function(error) {
     
      alert("Error de red");
    });
  });
  


