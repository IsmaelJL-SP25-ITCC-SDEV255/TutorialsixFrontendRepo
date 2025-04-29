addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for(let song of songs){
        html += ` <li>${song.title} - ${song.artist} - <a href="detaiks.html?id=${songID}">Details</a> </li>`
            
        
    }

    document.querySelector("tbody").innerHTML = html

    
    })
