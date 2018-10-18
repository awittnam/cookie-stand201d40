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
    //total cookies sold;
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
 

// function renderAllStores() {
//     for (var i = 0; i < stores.length; i++) {
//     stores[i].render();
//     }
//   }
// Now we need to call our functions: the one for the header row, and the one for generating the individual cat rows
//   makeHeaderRow();
//   renderAllCats();
//render workflow, review Cat Demo
// SalmonStand.prototype.render = function () {
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.hourlyCookieSales = this.hourlyCookieSales
//   }

//   pike.render = function() {   /////pushes sales number to populate HTML
//     var pikeUl = document.getElementById('Pike');
//     for (var i = 0; i < this.hourlyCookieSales.length; i++) {
//         var liEl = document.createElement('li');     
//         liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
//         pikeUl.appendChild(liEl);
//         }
//         liEl.textContent = `Total: ${this.dailyTotal} cookies`;
//          pikeUl.appendChild(liEl);
//         }

//pike.render();

makeHeaderRow();
renderStores();
//console.table(stores);






// constructor syntax
// function Student(firstName, lastName, preferredName, hometown) {
//     this.course = '201d40';
//     this.enrolled = true;
//     this.instructor = 'Sam';
//     this.teachingAssistants = ['Noah', 'Tara', 'Zahra'];
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.preferredName = preferredName;
//     this.hometown = hometown;
//     Student.all.push(this);
//   }


//First Location: 1st and Pike
// function getRandomIntInclusive (minCust, maxCust) {
//     return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
//   }

//   var pike = {
//     name: '1st and Pike',
//     minCust: 23,
//     maxCust: 65,
//     avgCookieSale: 6.3,
//     hourlyCookieSales: [], 
//     dailyTotal: 0, 
    // cookiesPerHour:  function() {
    //     for (var i = 0; i < hours.length; i++) {
    //         this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
    //         //console.log(this.hourlyCookieSales);
    //         this.dailyTotal += this.hourlyCookieSales[i];
//         }
//     }
// }

// pike.cookiesPerHour();


// pike.render = function() {   /////pushes sales number to populate HTML

//     var pikeUl = document.getElementById('Pike');

//     for (var i = 0; i < this.hourlyCookieSales.length; i++) {
//       var liEl = document.createElement('li');     
//       liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
//       pikeUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     pikeUl.appendChild(liEl);
//   }

//   pike.render();

  //location two:  SeaTac Airport

//   function getRandomIntInclusive (minCust, maxCust) {
//     return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
//   }

//   var seaTac = {
//     name: 'SeaTac Airport',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     hourlyCookieSales: [],
//     dailyTotal: 0,
//     cookiesPerHour:  function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
//             this.dailyTotal += this.hourlyCookieSales[i];
//         }
//     }
// }

// seaTac.cookiesPerHour();


// seaTac.render = function() {

//     var seaTacUl = document.getElementById('SeaTac');

//     for (var i = 0; i < this.hourlyCookieSales.length; i++) {

//       var liEl = document.createElement('li');

//       liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;

//       seaTacUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     seaTacUl.appendChild(liEl);
//   }

//   seaTac.render();

//   //location three: Seattle Center

//   function getRandomIntInclusive (minCust, maxCust) {
//     return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
//   }

//   var seattleCenter = {
//     name: 'Seattle Center',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     hourlyCookieSales: [],
//     dailyTotal: 0,
//     cookiesPerHour:  function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
//             this.dailyTotal += this.hourlyCookieSales[i];
//         }
//     }
// }

// seattleCenter.cookiesPerHour();

// //pushes cookie sales/hr to sales.html
// seattleCenter.render = function() {

//     var seattleCenterUl = document.getElementById('Seattle Center');

//     for (var i = 0; i < this.hourlyCookieSales.length; i++) {

//       var liEl = document.createElement('li');

//       liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;

//       seattleCenterUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleCenterUl.appendChild(liEl);
//   }

//   seattleCenter.render();


// //location four: Capitol Hill

// function getRandomIntInclusive (minCust, maxCust) {
//     return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
//   }

//   var capitolHill = {
//     name: 'Capitol Hill',
//     minCust: 20,
//     maxCust: 38,
//     avgCookieSale: 2.3,
//     hourlyCookieSales: [],
//     dailyTotal: 0,
//     cookiesPerHour:  function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
//             this.dailyTotal += this.hourlyCookieSales[i];
//         }
//     }
// }

// capitolHill.cookiesPerHour();


// capitolHill.render = function() {

//     var capitolHillUl = document.getElementById('Capitol Hill');

//     for (var i = 0; i < this.hourlyCookieSales.length; i++) {

//       var liEl = document.createElement('li');

//       liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;

//       capitolHillUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     capitolHillUl.appendChild(liEl);
//   }

//   capitolHill.render();


//   //location five: Alki 

//   function getRandomIntInclusive (minCust, maxCust) {
//     return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
//   }

//   var alki = {
//     name: 'Alki',
//     minCust: 2,
//     maxCust: 16,
//     avgCookieSale: 4.6,
//     hourlyCookieSales: [],
//     dailyTotal: 0,
//     cookiesPerHour:  function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
//             this.dailyTotal += this.hourlyCookieSales[i];
//         }
//     }
// }

// alki.cookiesPerHour();


// alki.render = function() {

//     var alkiUl = document.getElementById('Alki');

//     for (var i = 0; i < this.hourlyCookieSales.length; i++) {

//       var liEl = document.createElement('li');

//       liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;

//       alkiUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     alkiUl.appendChild(liEl);
//   }

//   alki.render();

