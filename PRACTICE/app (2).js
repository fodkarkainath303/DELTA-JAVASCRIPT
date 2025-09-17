// button=document.querySelector("button");
// input=document.querySelector("input") 
// button.addEventListener("click",()=>{
   
//    inp=document.createElement("input");
//    inp.setAttribute("type","checkbox");
//    inp.setAttribute("id","checkbox");

//    inp.innerText=input.value;

//    label=document.createElement("label");
//    label.setAttribute("For","checkbox");
//    label.textContent=input.value;
//    ul=document.querySelector("ul")
//    ul.appendChild(inp);
//    ul.appendChild(label);


// })


// const btnEle =document.querySelector(".btn")
// const inputEle = document.querySelector("#input-field")
// const taskEle = document.querySelector(".list-item")

// btnEle.addEventListener("click", ()=>{
//     // console.log("you clicked me!")
//     // console.log(inputEle.value)
//     if(inputEle.value === ""){
//         alert("Please add your task first")
//     }else{
//         let listEle = document.createElement("li")
//         listEle.textContent = inputEle.value
//         taskEle.appendChild(listEle)

//         let spanEle = document.createElement("span")
//         spanEle.textContent = "\u00d7"
//         listEle.appendChild(spanEle)

//     }
//     inputEle.value = ""
//     saveELe()
// })

// taskEle.addEventListener("click", (e)=>{
//     if(e.target.tagName == "LI"){
//         e.target.classList.toggle("checked")
//         saveELe()
//     }else if(e.target.tagName == "SPAN"){
//         e.target.parentElement.remove()
//         saveELe()
       
//     }
// })

// function saveELe(){
//     localStorage.setItem("task", taskEle.innerHTML)
// }

// function getEle(){
//     taskEle.innerHTML = localStorage.getItem("task")
// }

// getEle()


 button=document.querySelector("button")
 input=document.querySelector("input");
 ul=document.querySelector("ul");

button.addEventListener("click",()=>{
    if(input.value==""){
        alert("enter task first")

    }
    else{
        // div to wrap
       const wrapper=document.createElement("div")
       ul.append(wrapper)
    
    //    input Element created
    const uniqueId = "checkbox-" + Date.now();
    const inp=document.createElement("input");
    inp.setAttribute("type","checkbox");
    inp.setAttribute("id",uniqueId);
    inp.style.display="inline-block"
    inp.innerText=input.value;

    // label created 
   const label=document.createElement("label");
   label.setAttribute("for",uniqueId);
   label.textContent=input.value;

//    span cross created
   const span=document.createElement("span");
   span.innerText="\u274C"

//    wrapped all three in div
   wrapper.appendChild(inp);
   wrapper.appendChild(label);
   wrapper.appendChild(span)

   span.addEventListener("click",()=>{
    span.parentElement.remove()
   })
 
    }
    input.value=""
})





