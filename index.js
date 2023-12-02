let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //to clear out he input field
    inputEl.value = ""
    // 2. Call the renderLeads() function
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    }
    ulEl.innerHTML = listItems  
}

// let listItems = ""
// for (let i = 0; i < myLeads.length; i++) {
//     // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
//     listItems += "<li>" + myLeads[i] + "</li>"
    
// }
// // 3. Render the listItems inside the unordered list using ulEl.innerHTML
// ulEl.innerHTML = listItems

