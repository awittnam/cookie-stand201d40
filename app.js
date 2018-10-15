'use strict';

// Object literal notation
// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


function getRandomIntInclusive (minCust, maxCust) {
    return (Math.random() * (maxCust - minCust + 1)) + minCust; //The maximum is inclusive and the minimum is inclusive 
  }

  var pike = {
    name: '1st and Pike',
    minCust: '23',
    maxCust: '65',
    avgCookieSale: '6.3',
    hourlyCookieSales: [],
    cookiesPerHour:  function() {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookieSales.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookieSale));
            //console.log(estimatedCust);
            //var custPerHour = getRandomIntInclusive(minCust, maxCust)avgCookieSale; 
        }
    }
}
  
pike.cookiesPerHour();
  

//pike.estimatedCust = estimatedCust(pike.minCust, pike.maxCust);
    





//randomNumGen: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }

// pike.render = function() {
//     //access  
//     var pike = document.getElementById('pike');
//     //for each element inthe seagullCount array, we need to
//     for (var i = 0; i < alki.seagullCount.length; i++) {
//         console.log(this.seagullCount[i], 'Alki gulls');
//     // 1.  create a <li> element
//     var liEl = document.createElement('li');
//     // 2.  give that <li> element content 
//     liEl.textContent = `${days[i]}: ${this.seagullCount[i]}`;
//     console.log(liEl, 'LiEl');
//     // 3.  append the <li> to the <ul>
//     alkiUl.appendChild(liEl); 
//     }
// }

// var goldenGardens = {
//     name: 'Golden Gardens Beach',
//     neighborhood: 'Ballard',
//     seagullCount: [12, 42, 33, 18, 2, 34, 17]
// };

// var goldenGardensUl = document.getElementById('gg');

// var edmonds = {
//     name: 'Edmonds Beach',
//     neighborhood: 'Edmonds',
//     seagullCount: [65, 48, 89, 1, 56, 62, 89]
// };

// var edmondsUl = document.getElementById('edmonds');


// alki.render();

// //goldenGardens.render();
// //edmonds.render();