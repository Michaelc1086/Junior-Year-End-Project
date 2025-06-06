let data;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "100.80.141.82:8300";
  let route= "/customers"
  data = $.getJSON(link+route).responseJSON;

  generateCards(data)


}

function generateCards(data){
  let centerpanel = document.getElementById("mainpanel");
  let build ="";

  for(let i=0; i<data.length; i++){
    let genres = data[i]
    build += `<div class="card" >`
    build += `<h2> Customers</h2>`;
    build += `<h3>${Customers.FName}</h3>`
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}

function filter(){
  let name = document.getElementById("genre").value;
  
  let newData = []; //create a list of songs searched for
  
  for(let i=0; i<data.length;i++){
    let genres = data[i] //get each sog
    //make sure the list is no
    if( customers.Name  == name ) {
          //add to the new list
          newData.push(genres);
       }
  }
  generateCards(newData);
  
}