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
    dailyTotal: 0, 
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
            //console.log(this.hourlyCookieSales);
            this.dailyTotal += this.hourlyCookieSales[i];
        }
    }
}
  
pike.cookiesPerHour();
  

pike.render = function() {   /////pushes sales number to populate HTML
    
    var pikeUl = document.getElementById('Pike');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
      
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
            this.dailyTotal += this.hourlyCookieSales[i];
        }
    }
}
  
seaTac.cookiesPerHour();
  

seaTac.render = function() {
    
    var seaTacUl = document.getElementById('SeaTac');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
      
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
            this.dailyTotal += this.hourlyCookieSales[i];
        }
    }
}
  
seattleCenter.cookiesPerHour();
  
//pushes cookie sales/hr to sales.html
seattleCenter.render = function() {
    
    var seattleCenterUl = document.getElementById('Seattle Center');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
      
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
            this.dailyTotal += this.hourlyCookieSales[i];
        }
    }
}
  
capitolHill.cookiesPerHour();
  

capitolHill.render = function() {
    
    var capitolHillUl = document.getElementById('Capitol Hill');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
      
      capitolHillUl.appendChild(liEl);
    }
  }

  capitolHill.render();


  //location five: Alki 
  
  function getRandomIntInclusive (minCust, maxCust) {
    return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
  }

  var alki = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    hourlyCookieSales: [],
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
            this.dailyTotal += this.hourlyCookieSales[i];
        }
    }
}
  
alki.cookiesPerHour();
  

alki.render = function() {
    
    var alkiUl = document.getElementById('Alki');
    
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      
      var liEl = document.createElement('li');
      
      liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
      
      alkiUl.appendChild(liEl);
    }
  }

  alki.render();

