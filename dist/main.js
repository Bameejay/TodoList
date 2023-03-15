let form = document.getElementById("addform")
let listItem = document.getElementById("list")

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let newInput = document.getElementById("input-value").value
    // console.log(newInput);
    let li = document.createElement('li')
    li.className = "py-6 text-3xl text-gray-500 list-added"
    li.innerHTML = newInput
    // console.log(newInput);


    let button = document.createElement('button')
    button.className = "bg-red-600 text-white py-4 px-8 self-center rounded-lg font-semibold text-2xl hover:bg-red-400 btn mt-2 float-right"
    button.innerHTML="x"

    li.appendChild(button)
    listItem.appendChild(li)
})

listItem.addEventListener('click', (e)=>{
    // e.preventDefault()
    // console.log(e.target);
    if(e.target.classList.contains('float-right')){
        let li = e.target.parentElement
        // console.log(li);
        listItem.removeChild(li)
    }
})   

