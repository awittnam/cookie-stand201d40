'use strict';

// Object literal notation
// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


//First Location: 1st and Pike
function getRandomIntInclusive (minCust, maxCust) {
    return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
  }

  var pike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    hourlyCookieSales: [],
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
           
        }
    }
}
  
pike.cookiesPerHour();
  

pike.render = function() {
    
    var pikeUl = document.getElementById('Pike');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]}`;
      
      pikeUl.appendChild(liEl);
    }
  }

  pike.render();

  //location two:  SeaTac Airport

  function getRandomIntInclusive (minCust, maxCust) {
    return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
  }

  var seaTac = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    hourlyCookieSales: [],
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
           
        }
    }
}
  
seaTac.cookiesPerHour();
  

seaTac.render = function() {
    
    var seaTacUl = document.getElementById('SeaTac');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]}`;
      
      seaTacUl.appendChild(liEl);
    }
  }

  seaTac.render();

  //location three: Seattle Center

  function getRandomIntInclusive (minCust, maxCust) {
    return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
  }

  var seattleCenter = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    hourlyCookieSales: [],
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
           
        }
    }
}
  
seattleCenter.cookiesPerHour();
  
//pushes cookie sales/hr to sales.html
seattleCenter.render = function() {
    
    var seattleCenterUl = document.getElementById('Seattle Center');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]}`;
      
      seattleCenterUl.appendChild(liEl);
    }
  }

  seattleCenter.render();


//location four: Capitol Hill

function getRandomIntInclusive (minCust, maxCust) {
    return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
  }

  var capitolHill = {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    hourlyCookieSales: [],
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
           
        }
    }
}
  
capitolHill.cookiesPerHour();
  

capitolHill.render = function() {
    
    var capitolHillUl = document.getElementById('Capitol Hill');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]}`;
      
      capitolHillUl.appendChild(liEl);
    }
  }

  capitolHill.render();











