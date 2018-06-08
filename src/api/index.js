//import pictures from './pictures'

export const fetchPictures = async () => {
  console.log("before fetch");
  
  let pictures = await fetch('http://www.mocky.io/v2/5b1a50913300007700fb1376')
    .then(response => response.json())
    .then(data => data.slider)
  return pictures
}