const API_KEY = "AIzaSyCAhcxb7VJrUoHIk6rOgiqoEbR9dAcssgk";

// const API_URL = 'https://tenor.googleapis.com/v1/trending?q=';

var SEARCH_URL = "https://tenor.googleapis.com/v2/search?q="
const TRENDING_URL = "https://tenor.googleapis.com/v2/featured?key="

const filterSalient = document.getElementById('filterSalient')

const limit = 5;

const generateBody = async () => {

  // const URL = `${API_URL}&key=${API_KEY}&limit=${limit}`;

  // await fetch(URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.results);
  //     for (let i = 0; i < limit; i++) {
  //       let img = document.createElement('img')
  //       img.src = data.results[i]["media_formats"]["nanogif"]["url"]
  //       filterSalient.appendChild(img)
  //       console.log(img);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error al obtener los GIFs:', error);
  //   });

  let trendingURL = `${TRENDING_URL}${API_KEY}&limit=${limit}`

  await fetch(trendingURL)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < limit; i++) {
        let img = document.createElement('img')
        img.src = data.results[i]["media_formats"]["nanogif"]["url"]
        filterSalient.appendChild(img)
      }
    })
    .catch(error => {
      console.error('Error al obtener los GIFs:', error);
    });


}

window.addEventListener("DOMContentLoaded", generateBody);



function getData() {

  let search = document.getElementById("search")

  search.addEventListener('keydown', async function (event) {
    if (event.keyCode === 13) {
      filterSalient.innerHTML = ""
      const searchWord = search.value;
      searchWord.innerHTML = "";
      let trendingURL = `${SEARCH_URL}${searchWord}&key=${API_KEY}&limit=${limit}`
      await fetch(trendingURL)
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < limit; i++) {
            let img = document.createElement('img')
            img.src = data.results[i]["media_formats"]["nanogif"]["url"]
            filterSalient.appendChild(img)
          }
        })
        .catch(error => {
          console.error('Error al obtener los GIFs:', error);
        });
    }
  });

}

getData()