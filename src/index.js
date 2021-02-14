import {newPage,createNewEvent} from './js/app'

let end = localStorage.getItem('key')

console.log(end)

if(document.title === "Calendar"){
    let arry_sort = "All";
    document.getElementById("sort").addEventListener("click",()=>{
        arry_sort = document.getElementById("sort").value
        console.log(arry_sort)

        if(end != null){
            for (let i=0 ; i < end; i++){
                let obj = JSON.parse(localStorage.getItem(i))
                if(obj != null){
                    console.log(obj.part)
                    
    
                    if(arry_sort === "All"){
                        document.getElementById(`${obj.day + obj.time}`).innerHTML = `<div class='activEvent'>${obj.name}. Partion:${obj.part}</div>`
    
                        document.getElementById(`${obj.day + obj.time}`).addEventListener('click',(event)=>{
                            document.querySelector(".modail").classList +=" modail__act"
                            document.getElementById("no").addEventListener("click",()=>{
                                document.querySelector(".modail").classList = "modail"
                            })
                            
                        })
                    }else if(arry_sort != "All"){
                        console.log(obj.part.includes(arry_sort))
                        document.getElementById(`${obj.day + obj.time}`).innerHTML =``
                        if(obj.part.includes(arry_sort) === true){
                            document.getElementById(`${obj.day + obj.time}`).innerHTML = `<div class='activEvent'>${obj.name}. Partion:${obj.part}</div>`
                        }
                    }
                }
            }
        }

        
        
    })
    
    console.log(arry_sort)
    
    if(end != null){
        for (let i=0 ; i < end; i++){
            let obj = JSON.parse(localStorage.getItem(i))
            if(obj != null){
                console.log(obj.part)

                if(arry_sort === "All"){
                    document.getElementById(`${obj.day + obj.time}`).innerHTML = `<div class='activEvent' id='${obj.keyId}'>${obj.name}. Partion:${obj.part}</div>`

                    document.getElementById(`${obj.day + obj.time}`).addEventListener('click',(event)=>{
                            
                        document.getElementById(`${obj.day + obj.time}`).addEventListener('click',(event)=>{
                            document.querySelector(".modail").classList +=" modail__act"
                            let delDiv = event.target
                            let textSpan = event.target.innerText
                            console.log(textSpan)

                            document.getElementById("text").innerText = `Are you sure you want to delete "${textSpan}" event?`                           

                            document.getElementById("no").addEventListener("click",()=>{
                                document.querySelector(".modail").classList = "modail"
                            })

                            document.getElementById("yas").addEventListener('click',()=>{
                                delDiv.remove()
                                document.querySelector(".modail").classList = "modail"
                                localStorage.removeItem(`${delDiv.id}`)
                                console.log(delDiv.id)
                            })
                            
                            
                        })
                    })
                }
            }
        }
    }
}

newPage()

createNewEvent()

export {end}