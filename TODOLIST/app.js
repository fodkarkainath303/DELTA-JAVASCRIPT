let btn=document.querySelector("button");
let inp=document.querySelector("input");
let lis=document.querySelectorAll("li");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
  let child=document.createElement("li");
  child.innerText=inp.value;
  ul.append(child);
  inp.value="";

  let delItem=document.createElement("button");
  delItem.innerText="delete";
  child.appendChild(delItem);
  delItem.classList.add("delete");
 
})

ul.addEventListener("click",function(event){
  
  if(event.target.nodeName=="BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();

    }
})


// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//   delBtn.addEventListener("click", function(){
//     let par=this.parentElement;
//     par.remove();
//   })
// }

// todo app using checkbox

//  button=document.querySelector("button")
//  input=document.querySelector("input");
//  ul=document.querySelector("ul");

// button.addEventListener("click",()=>{
//     if(input.value==""){
//         alert("enter task first")

//     }
//     else{
//         // div to wrap
//        const wrapper=document.createElement("div")
//        ul.append(wrapper)
    
//     //    input Element created
//     const uniqueId = "checkbox-" + Date.now();
//     const inp=document.createElement("input");
//     inp.setAttribute("type","checkbox");
//     inp.setAttribute("id",uniqueId);
//     inp.style.display="inline-block"
//     inp.innerText=input.value;

//     // label created 
//    const label=document.createElement("label");
//    label.setAttribute("for",uniqueId);
//    label.textContent=input.value;

// //    span cross created
//    const span=document.createElement("span");
//    span.innerText="\u274C"

// //    wrapped all three in div
//    wrapper.appendChild(inp);
//    wrapper.appendChild(label);
//    wrapper.appendChild(span)

//    span.addEventListener("click",()=>{
//     span.parentElement.remove()
//    })
 
//     }
//     input.value=""
// })


// let circles=document.querySelectorAll(".inner");

// // for(circle of circles){
// //     let ci=circle;
// //        ci.addEventListener("click",()=>{
// //         color=ci.getAttribute("id");
// //         let body=document.querySelector("body")
// //         body.style.backgroundColor=color;
// //     })
// // }

// circles.forEach((el) => {
//      el.addEventListener("click",()=>{
//     let  color=el.getAttribute("id");
//      let body=document.querySelector("body")
//         body.style.backgroundColor=color; 
//     })
    
// });

// span=document.querySelector("span");

// span.addEventListener("click",()=>{
//     input=document.querySelector("input");
//     input.classList.toggle("one");
    
// })

// xmark=document.querySelector("#xmark");
// nav=document.querySelector("nav");
// bar=document.querySelector(".bars");
// xmark.addEventListener("click",()=>{
//     // nav.classList.toggle("left");
//     // bar.classList.toggle("op");
//     nav.style.display="none"
// })
//  bar.addEventListener("click",()=>{
//     // nav.classList.toggle("left");
//     // bar.classList.toggle("op");
//     nav.style.display="block";
//     }
// )

// **character counter**;
// input=document.querySelector("input");
// console.dir(input)
// input.addEventListener("keydown",()=>{
//     //  filtered = input.value.replace(/[^a-zA-Z]/g,"")
//     length=input.value.length;
//     maxlength=input.maxLength
//     p=document.querySelector("#count");
//     p.innerText=`total character: ${length}`;
//     r=document.querySelector("#remaining");
//     remain=maxlength-length;
//     r.innerText=`Remaining characters: ${remain}`
// })