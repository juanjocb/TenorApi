const API_KEY = 'AIzaSyCAhcxb7VJrUoHIk6rOgiqoEbR9dAcssgk';
const API_URL = 'https://api.example.com/endpoint';

// Función para hacer la solicitud a la API
function fetchData() {
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Manejo de la respuesta de la API
        console.log(xhr.responseText);
      } else {
        console.error('Error al obtener los datos:', xhr.statusText);
      }
    }
  };
  
  xhr.open('GET', API_URL, true);
  xhr.setRequestHeader('Authorization', `Bearer ${API_KEY}`);
  xhr.send();
}

// Llamar a la función para obtener los datos
fetchData();