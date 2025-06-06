let Customers;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.141.82:8301";
  let route= "/Customers"
  Customers = $.getJSON(link+route).responseJSON;
  console.log(Customers)
  generateCards(Customers);

  
}

function generateCards(Customers){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

   
  for(let i=0; i<Customers.length; i++){
    let Customer = Customers[i]
    build += `<div class="card" >`
    build += `	<h3> Customers ID : ${Customer.customers_id}</h3>`;
    build += `	<div> First Name : ${Customer.FName}</div>`;
    build += `	<div> Last Name : ${Customer.LName}</div><br>`;
	build += `  <img src="img/ProfilePic.webp">`;
    build += `	<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let name = document.getElementById("n").value;
  console.log(name);

  let nameList = []; //create a list of songs searched for
  
  for(let i=0; i<Customers.length;i++){
    let Customer = Customers[i] //get each sog
    //make sure the list is no
    if( Customer.FName == name ) {
          //add to the new list
          nameList.push(Customer);
       }
  }
  console.log(`number found ${nameList.length}`)
  generateCards(nameList);
  
}