console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getDogImg(){
    fetch("imgURL")
    .then( res => res.json())
    .then(dogData => {
       let dogArr = dogData.message
       dogArr.forEach(dog => addDogImgs(dog));
       console.log(dog)
    })
}

getDogImg()

 function addDogImgs(dog){
    let dogDiv = document.getElementById("dog_image_container")
    let dogImg = document.createElement('li')
    dogImg.innerHTML = `<img src="${dog}">`
    console.log(dogImg)
    dogDiv.appendChild(dogImg)
 }

 addDogImgs() 