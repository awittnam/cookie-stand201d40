'use strict';

var stores = [];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


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
    //need daily total
  }
}
callingStores();

var cookieTable = document.getElementById('store-table');

//render header

function makeHeaderRow() {
 
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

//render store date
SalmonStand.prototype.render = function () {

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
 


//***** need to made a function to loop through all 5 locations and each hour (loop in a loop)

//***** append table with hourly totals 

//**make functionality that allow for adding dynamically added new stores to be included in the above */










makeHeaderRow();
renderStores();
//console.table(stores);






// This function is the event handler for the submission of comments        -from demo
// function handleCommentSubmit(event) {
//   console.log('log of the event object', event);
//   console.log('log of the event.target', event.target);
//   console.log('log of the event.target.who', event.target.who);
//   console.log(event.target.says.value);

//   event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event