let mode = "mobile";
function selectOption(type){

mode = type;

let options = document.querySelectorAll(".option");
let label = document.getElementById("inputLabel");
let input = document.getElementById("searchInput");

/* remove active class from all */

options.forEach(option=>{
option.classList.remove("active");
});

/* add active class to clicked */

event.currentTarget.classList.add("active");


/* change input field */

if(type === "mobile"){

label.innerText = "Registered Mobile Number *";
input.placeholder = "Enter 10-digit mobile number";

}

else{

label.innerText = "Customer ID *";
input.placeholder = "Enter Customer ID";

}

}

async function searchCustomer(){

let value = document.getElementById("searchInput").value;

let result = document.getElementById("result");

result.innerHTML = "Searching...";


let url = "https://script.google.com/macros/s/AKfycbwUpjLUbO0FN1rxORNj3ZoTt9c9j023VicElHDKSx-UbXRyvDnsBVJxa2mfxP51Gb34aw/exec?query=" + value + "&type=" + mode;

try{

let response = await fetch(url);

let data = await response.json();

if(data.status === "found"){

result.innerHTML = `
<div class="tracking-card">

<h3>Tracking Details</h3>
<p><b>Customer ID:</b> ${data.customerId}</p>
<p><b>Tracking ID:</b> ${data.trackingId}</p>
<p><b>Mobile Number:</b> ${data.mobile}</p>
<p><b>Dispatch Month:</b> ${data.dispatchMonth}</p>
<p><b>Date:</b> ${new Date(data.date).toLocaleDateString('en-GB')}</p>

</div>
`;

}

else{

result.innerHTML = "<p style='color:red;'>No record found.</p>";

}

}

catch(error){

result.innerHTML = "Error fetching data.";

}

}