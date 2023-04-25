function addnewWEField() {
  //  console.log("Adding new field");

 let newNode=document.createElement('textarea');
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter Here")


 let weOb=document.getElementById("we");
 let weAddButtonOb=document.getElementById("weAddButton");

 weOb.insertBefore(newNode,weAddButtonOb);
}

function addnewAQField() {
    //  console.log("Adding new field");
  
   let newNode=document.createElement('textarea');
   newNode.classList.add("form-control");
   newNode.classList.add("aqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter Here")
  
  
   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");
  
   aqOb.insertBefore(newNode,aqAddButtonOb);
  }

  //generating CV
  function generateCV()
  {
   // console.log("generating")



  let nameField=document.getElementById("nameField").value;

  let nameT1=document.getElementById("nameT1");

  nameT1.innerHTML=nameField;

  //direct


  //contact

  let contactField=document.getElementById("contactField").value;

  let contactT1=document.getElementById("contactT1");

  contactT1.innerHTML=contactField;

  document.getElementById("contactT1").innerHTML=document.getElementById("contactField").value;

  //address

  document.getElementById("addressT1").innerHTML=document.getElementById("addressField").value;
 //social
  document.getElementById("fbT1").innerHTML=document.getElementById("fbField").value;

  document.getElementById("instaT1").innerHTML=document.getElementById("instaField").value;

  document.getElementById("linkedinT1").innerHTML=document.getElementById("linkedField").value;

  //code for setting image

  let file=document.getElementById("imgField").files[0];

  console.log(file);

  let reader=new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set image to template

reader.onloadend=function(){
  document.getElementById("imgTemplate").src=reader.result;
};

// second image
let fil=document.getElementById("imgField1").files[0];

console.log(file);

let reade=new FileReader();

reade.readAsDataURL(fil);

console.log(reade.result);

//set image to template

reade.onloadend=function(){
document.getElementById("imgTemplate1").src=reade.result;
};
 
  document.getElementById("cv-form").style.display="none";

  document.getElementById("cv-template").style.display="block";

  }

  //print CV
  function printCV()
  {
    document.getElementById("cv-form").style.display="none";
    window.print();
  }