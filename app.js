'use strict';

var stores = [];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var cookieTable = document.getElementById('store-table');

function SalmonStand(storeName, minCust, maxCust, avgCookieSale) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlyCookieSales = [];
  this.custPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
}

new SalmonStand('1st and Pike', 23, 65, 6.3);
new SalmonStand('SeaTac Airport', 3, 24, 1.3);
new SalmonStand('Seattle Center', 11, 38, 3.7);
new SalmonStand('Capitol Hill', 20, 38, 3.7);
new SalmonStand('Alki', 2, 16, 4.6);


SalmonStand.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.custPerHour.push(Math.ceil(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    //console.log(this.custPerHour);
  }
}

SalmonStand.prototype.cookiesPerHour = function () {
  this.calcCustPerHour();
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookieSales.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
    this.dailyTotal += this.hourlyCookieSales[i];
    console.log(this.cookiesPerHour)
  }
}

SalmonStand.prototype.dailyTotalCookies = function () {
  for (var i = 0; i < this.hourlyCookieSales.length; i++) {
    this.dailyTotal += this.hourlyCookieSales[i];
  }
  return this.dailyTotal;
}

function callingStores() {
  for (var i = 0; i < stores.length; i++){
    stores[i].calcCustPerHour();
    stores[i].cookiesPerHour();
    stores[i].dailyTotalCookies ();
    //need daily total
  }
}
callingStores();


function makeHeaderRow() {                                  //render header
 
  var trEl = document.createElement('tr'); 

  var thEl = document.createElement('th');  
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');  
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);         //adds hours to the row
  };

  var thEl = document.createElement('th');  
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);     //adds to the table
};

makeHeaderRow();

SalmonStand.prototype.render = function () {                        //render store data

var trEl = document.createElement('tr');    // make a tr
var tdEl = document.createElement('td');    //// make a td
tdEl.textContent = this.storeName;          //give it name content
trEl.appendChild(tdEl);                     //append it to the tr 

for (var i = 0; i < this.hourlyCookieSales.length; i++) {
tdEl = document.createElement('td');
tdEl.textContent = this.hourlyCookieSales[i];
trEl.appendChild(tdEl);
  }
tdEl = document.createElement('td');
tdEl.textContent = this.dailyTotal;
trEl.appendChild(tdEl);
cookieTable.append(trEl);
}

var renderStores = function () {
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

renderStores();
 


//***** need to made a function to loop through all 5 locations and each hour (loop in a loop)  (WEDNESDAY LAB)
//footer portion of form
function cookieFooter() {

var hourlyTotal = 0;
var dailyStoreTotals = [];

  for (var i = 0; i < hours.length; i++){
    var initialTotal = 0;

    for (var j = 0; j < stores.length; j++){
      initialTotal += stores[j].hourlyCookieSales[i];
    }
    hourlyTotal += initialTotal;
    dailyStoreTotals.push(initialTotal);
  }

dailyStoreTotals.push(hourlyTotal);

//***** append table with hourly totals to the DOM
var trEl = document.createElement('tr');   
var thEl = document.createElement('th');    
thEl.textContent = 'hourly total';          
trEl.setAttribute('id', 'footer');     //setAttribute is where you lock the footer at the bottom of footer
trEl.appendChild(thEl); 
cookieTable.appendChild(trEl);

for (var k = 0; k < dailyStoreTotals.length; k++) {
  var tdEl = document.createElement('td');
  tdEl.textContent = dailyStoreTotals[k];
  trEl.appendChild(tdEl);
  }
}

cookieFooter();

var newStoreLocaton = document.getElementById('add-stores');
newStoreLocaton.addEventListener('submit', handleAdditionSubmit);

function handleAdditionSubmit(event) {
  event.preventDefault();

  //validation

  if (!event.target.storeName.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookieSale.value){
    return alert('Fields cannot be empty');
  }

var storeName = event.target.storeName.value;
var minCust = event.target.minCust.value; 
var maxCust = event.target.maxCust.value;
var avgCookie = event.target.avgCookieSale.value;

document.getElementById('footer').innerHTML = '';
cookieTable.innerHTML = '';

//if (isNaN(averageSale)) {
  // return alert('Please input only numbers for Average Sale per Customer');
   //}
  //**make functionality that allow for adding new store dynamically
var newDynamicStore = new SalmonStand (storeName, minCust, maxCust, avgCookie);
event.target.storeName.value = null;     //sets fields as null
event.target.minCust.value = null;
event.target.maxCust.value = null;
event.target.avgCookieSale.value = null;

// makeHeaderRow();

newDynamicStore.calcCustPerHour();
newDynamicStore.cookiesPerHour();
newDynamicStore.dailyTotalCookies();


//render
renderStores();

//footer
cookieFooter();
}

//renderStores();










//console.table(stores);

// This function is the event handler for the submission of comments        -from demo
// function handleCommentSubmit(event) {
//   console.log('log of the event object', event);
//   console.log('log of the event.target', event.target);
//   console.log('log of the event.target.who', event.target.who);
//   console.log(event.target.says.value);

//   event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event