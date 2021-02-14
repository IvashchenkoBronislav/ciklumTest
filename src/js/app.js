


let iName = document.getElementById('imputName');
let buttonCreate = document.getElementById('create');


let select = document.querySelector('.select');
let partId = "0";



let keyName = localStorage.getItem('key');

let name=NaN;
let dayEvent = NaN;
let timeEvent = NaN;





let nexPage = (page)=>{
    document.location.href = page;
}

let newPage = ()=>{
    if (document.title === "Calendar"){
        document.querySelector('.new_event_butt').addEventListener('click', ()=>{
            nexPage("./newEvent.html")
        })
    }else if(document.title ==="New Event+"){
        document.querySelector('.cancel').addEventListener('click', ()=>{
            nexPage("./calendar.html")
        })
    }
}
//---------------------------------------------------------------------------
let createNewEvent = ()=>{

    if(document.title ==="New Event+"){

    document.querySelector('.sel').addEventListener('click',(event)=>{  
        if(event.target.innerText === "Olga"){
            if(document.getElementById("Olga")===null){
                select.innerHTML += `<div class='sel_div' id='Olga'>Olga<span class='left'>_</span><span class='right'>_</span> </div>`
                document.querySelector('.sel').classList = "sel"
            }else{
                document.querySelector('.sel').classList = "sel"
            }
        }else if(event.target.innerText === "Alex"){
            if(document.getElementById("Alex")===null){
                select.innerHTML += `<div class='sel_div' id='Alex'>Alex<span class='left'>_</span><span class='right'>_</span> </div>`
                document.querySelector('.sel').classList = "sel"
            }else{
                document.querySelector('.sel').classList = "sel"
            }
        }else if(event.target.innerText === "Deni"){
            if(document.getElementById("Deni")===null){
                select.innerHTML += `<div class='sel_div' id='Deni'>Deni<span class='left'>_</span><span class='right'>_</span> </div>`
                document.querySelector('.sel').classList = "sel"
            }else{
                document.querySelector('.sel').classList = "sel"
            }
        }
    })
        
//---------------------------------------------------------------------------
    document.querySelector('.select').addEventListener('mouseover',()=>{
        document.querySelector('.sel').classList = "sel act"
    })
    document.querySelector('.sel').addEventListener('mouseover',()=>{
        document.querySelector('.sel').classList = "sel act"
    })
    document.querySelector('.select').addEventListener('mouseout',()=>{
        document.querySelector('.sel').classList = "sel"
    })

    document.querySelector('.sel').addEventListener('mouseout',()=>{
        document.querySelector('.sel').classList = "sel"
    })
//---------------------------------------------------------------------------

    if(keyName === null){
        localStorage.setItem('key', 0)
    }
    
        buttonCreate.addEventListener("click",()=>{

            let keyId = Number(localStorage.getItem('key'))
            
            name = iName.value;
            timeEvent = document.getElementById('time_event').value
            dayEvent = document.getElementById('day_week').value
            let arry_parti=[];

            document.querySelectorAll('.sel_div').forEach((el)=>{

                console.log(el.id)
                arry_parti.push(`${el.id}`)
            })

            console.log(arry_parti)

            let object = {
                name:name,
                part:arry_parti,
                time:timeEvent,
                day:dayEvent,
                keyId: keyId,
            }

            console.log(object)

                for(let i=0; i < keyName; i++){
                    let obj = JSON.parse(localStorage.getItem(i))
                    
                    console.log(obj)
                    
                    if(object.name === ''){
                        document.querySelector('.error').innerText = `Please enter event name!`
                        document.querySelector('.error').classList +=` error__act`
                        console.log(3)
                    }else if(object.part.length === 0){
                        document.querySelector('.error').innerText = `Please add participants!`
                        document.querySelector('.error').classList +=` error__act`
                        console.log(5)
                    }else if(obj === null ){
                        let localObjeck = JSON.stringify(object)
                        localStorage.setItem(`${keyId}`,localObjeck)               
                        localStorage.setItem('key', keyId+1)
                        console.log(2)
                        nexPage("./calendar.html")
                    }else if(object.time === obj.time && object.day === obj.day){
                        document.querySelector('.error').innerText = `Failed to create an event. Time slot is already booked.`
                        document.querySelector('.error').classList +=` error__act`
                        console.log(1)
                    }else if(object.time != obj.time || object.day != obj.day){
                        let localObjeck = JSON.stringify(object)
                        localStorage.setItem(`${keyId}`,localObjeck)               
                        localStorage.setItem('key', keyId+1)
                        console.log(2)
                        nexPage("./calendar.html")
                    }
                        
                    
                   
                    
                }                
        })
    }
}

export {newPage, createNewEvent}