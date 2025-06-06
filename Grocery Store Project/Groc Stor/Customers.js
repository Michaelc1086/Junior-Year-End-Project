let Order_Items;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.141.82:8301";
  let route= "/Order_Items"
  Order_Items = $.getJSON(link+route).responseJSON;
  
  generateCards(Order_Items)


}

function generateCards(Order_Items){
  let centerpanel = document.getElementById("mainpanel");
  let build ="";

  for(let i=0; i<Order_Items.length; i++){
    let Order_Item = Order_Items[i]
    build += `<div class="card" >`
    build += `<h1>Products</h1>`;
	build += `<h2>${Order_Item.Product_Name}</h2>`
	build += `<div>Quantity: ${Order_Item.quantity}</div>`
	build += `<div>Price: ${Order_Item.price}</div>`
    build += `<br><hr>`;
    build += `</div>`;
  }

 
  centerpanel.innerHTML = build;
  

}

function filter(){
  let name = document.getElementById("n").value;
  
  let newData = []; 
  
  for(let i=0; i<Order_Items.length;i++){
    let Order_Item = Order_Items[i] 
    
    if(  Order_Item.Product_Name == name ) {
          
          newData.push(Order_Item);
       }
  }
  generateCards(newData);
  
}