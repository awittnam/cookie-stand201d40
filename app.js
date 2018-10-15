'use strict';

// Object literal notation

// Let's model some Seattle beaches in code
// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var alki = {
  name: 'Alki Beach',
  neighborhood: 'West Seattle',
  seagullCount: [35, 77, 23, 347, 55, 72, 88]
};


alki.render = function() {
    //access  
    var alkiUl = document.getElementById('alkibeach');
    //for each element inthe seagullCount array, we need to
    for (var i = 0; i < alki.seagullCount.length; i++) {
        console.log(this.seagullCount[i], 'Alki gulls');
    // 1.  create a <li> element
    var liEl = document.createElement('li');
    // 2.  give that <li> element content 
    liEl.textContent = `${days[i]}: ${this.seagullCount[i]}`;
    console.log(liEl, 'LiEl');
    // 3.  append the <li> to the <ul>
    alkiUl.appendChild(liEl); 
    }
}

var goldenGardens = {
    name: 'Golden Gardens Beach',
    neighborhood: 'Ballard',
    seagullCount: [12, 42, 33, 18, 2, 34, 17]
};

var goldenGardensUl = document.getElementById('gg');

var edmonds = {
    name: 'Edmonds Beach',
    neighborhood: 'Edmonds',
    seagullCount: [65, 48, 89, 1, 56, 62, 89]
};

var edmondsUl = document.getElementById('edmonds');


alki.render();

//goldenGardens.render();
//edmonds.render();