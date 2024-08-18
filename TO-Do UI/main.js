let userInput = document.getElementById("userInput")
let homeContent = document.getElementById("homeContent")

let items = []
if( localStorage.getItem("allItem") != null){
item = JSON.parse(localStorage.getItem("allItems"))
displayItem()
    }

function addItem(){
    items.push(userInput.value)
    userInput.value = ""
    displayItem()

    
    localStorage.setItem("allItems",JSON.stringify(items))
   
    
    
}
function displayItem(){
    let cartona = ``
    items.forEach((item,ind)=>{
        cartona += `<div
        class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
        <p id="item"class="m-0 p-0">${item}</p>
        <i class="fa-sharp fa-solid fa-trash" onClick="removeItem(${ind})"></i>
        </div>`
    })
        homeContent.innerHTML = cartona
}

function removeItem(index){
    items.splice(index,1)
    displayItem()
    localStorage.setItem("allItem",JSON.stringify(items))
}
searchInput.addEventListener("input",function(event){
searchItem(event.target.value)
})

function searchItem(searchValue){
    let cartona = ``

    items.forEach((item,ind)=>{
        if (item.tolowercase().includes(searchValue.tolowercase())){
            cartona += `<div
            class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
            <p id="item"class="m-0 p-0">${item}</p>
            <i class="fa-sharp fa-solid fa-trash" onClick="removeItem(${ind})"></i>
            </div>`           
                    }
                })
    homeContent.innerHTML = cartona
}


