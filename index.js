const saveLead = document.getElementById("but-el")
const tab = document.getElementById("tab-bnt")

let myLabes = []
const inputEl = document.getElementById("input-el")
const ulEl= document.getElementById("ul-El")
const leadfromlocalstorage = JSON.parse(localStorage.getItem("mylead"))
const deletBUt = document.getElementById("delete-btn")
tab.addEventListener("click", function() {
   
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => { 
        myLabes.push(tabs[0].url)
        localStorage.setItem("mylabe", JSON.stringify(myLabes))
        leadout(myLabes)
    });
    
})
deletBUt.addEventListener("click", function() {
    console.log ("double clicked")
    localStorage.clear()
    myLabes = []
    leadout(myLabes)
})
if (leadfromlocalstorage) { 
    myLabes = leadfromlocalstorage
    leadout(myLabes)

}

saveLead.addEventListener("click", function(){
    
    myLabes.push(inputEl.value)
    localStorage.setItem("mylead",JSON.stringify(myLabes))
    leadout(myLabes)
    inputEl.value = ""
    
    console.log( localStorage.getItem("mylead") )


})
function leadout(lead){
    
    let listitem = ""
    for( let i = 0; i < lead.length ; i++) {
        
        listitem += `<li>
               <a href = '${lead[i]}' target = '_blank' >${lead[i]}</a>
        
        </li>`
    
    
    
    }
    
    ulEl.innerHTML = listitem
    

}



