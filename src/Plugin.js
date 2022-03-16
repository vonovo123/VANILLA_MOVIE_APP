export const loadImage = function(src){
  return new Promise((resolve, _) => {
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('load', () =>{
      resolve();
    })
  })
}