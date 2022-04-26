const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogBreedArr = []


function getDogImg(){
    fetch(imgUrl)
    .then( res => res.json())
    .then(dogData => {
       let dogArr = dogData.message
       dogArr.forEach(dog => addDogImgs(dog));
    })
}

 function addDogImgs(dog){
    let dogDiv = document.getElementById("dog_image_container")
    let dogImg = document.createElement('img')
    dogImg.src = dog
    dogDiv.appendChild(dogImg)
 }

function getDogBreeds(){
   fetch(breedUrl)
   .then(res => res.json())
   .then(breeds => {
      const dogBreedObj = breeds.message
      dogBreedArr = Object.keys(dogBreedObj)
      dogBreedArr.forEach(dogBreed => addDogBreed(dogBreed))
      
   })
}

function addDogBreed(dogBreed){
   let dogUl = document.getElementById("dog-breeds")
   let dogLi = document.createElement('li')
   dogLi.textContent = dogBreed
   dogUl.appendChild(dogLi)
}

function changeTxtColor(){
   let dogList = document.getElementById("dog-breeds")
   dogList.addEventListener('click', function onClick(e){
      e.target.style.color = '#CBC3E3'
   })
}

function filterBreeds(){
   const dropdown = document.getElementById("breed-dropdown")
   dropdown.addEventListener('change', () =>{
      const letter = event.target.value
      document.getElementById("dog-breeds").innerHTML = ''
      const newDogBreed = dogBreedArr.filter(dogBreed => dogBreed.startsWith(letter))
      newDogBreed.forEach(dog => {
      const newLi = document.createElement('li')
      newLi.textContent = dog
      document.getElementById("dog-breeds").appendChild(newLi)
      })
   })
}

changeTxtColor()
getDogImg()
getDogBreeds()
filterBreeds()