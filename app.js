
// old code using literal object notation
(function() {
    var shop1 = {
        location: 'PDX Airport',
        minCustomers: 23,
        maxCustomers: 65,
        avgCookiesPerCustomer: 6.3,

        dailyCookiesPerHourLog: [ [],     // first array element: hour (string)
                                [] ],   // second array element: number of cookies (integer)
                                    
        totalCookies: 0,

        checkCustomersThisHour: function() {
            var customers = Math.floor(
                Math.random()
                * (this.maxCustomers - this.minCustomers + 1) 
                + this.minCustomers
            );
            console.log('customers: ' + customers);
            return customers;
        },

        calcLogs: function() {
            for(var i = 6; i <= 20; i++){
                if(Math.floor(i / 12) === 0) {
                    this.dailyCookiesPerHourLog[0].push( (i) + 'am: ' );
                }
                else {
                    this.dailyCookiesPerHourLog[0].push( (i % 12) + 'pm: ');
                }
                this.dailyCookiesPerHourLog[1].push(
                Math.floor(
                    this.checkCustomersThisHour() * this.avgCookiesPerCustomer 
                ) 
                );
            }
            console.log(this.dailyCookiesPerHourLog);
            return this.dailyCookiesPerHourLog;
        },

        calcTotalCookies: function() {
            this.totalCookies = 0;
            for(var i = 0; i < this.dailyCookiesPerHourLog[1].length; i++) {
                this.totalCookies += this.dailyCookiesPerHourLog[1][i];
            }
            return this.totalCookies;
        },

        cookiesToDOM: function() {
            var mainVar = document.getElementById('main');
            var articleVar = document.createElement('article');

            var h3Var = document.createElement('h3');
            h3Var.innerText = this.location;

            var ulVar = document.createElement('ul');
            for(var i = 0; i <= this.dailyCookiesPerHourLog[0].length; i++) {
                if(i !== this.dailyCookiesPerHourLog[0].length) {
                    var liVar = document.createElement('li');
                    liVar.innerText = this.dailyCookiesPerHourLog[0][i]      // time string (eg '6am: ')
                                    + this.dailyCookiesPerHourLog[1][i]    // number of cookies
                                    + " cookies";
                    ulVar.appendChild(liVar);
                }
                else {
                    var totalLiVar = document.createElement('li');
                    totalLiVar.innerText = 'Total cookie count: ' + this.calcTotalCookies();
                    ulVar.appendChild(totalLiVar);
                }
            }
            articleVar.appendChild(h3Var);
            articleVar.appendChild(ulVar);
            mainVar.appendChild(articleVar);
        },

        //render();
    }

})();





var shopProps = {
    location:               
        ['PDX Airport', 'Pioneer Square', 'Powell\'s', 'St. John\'s', 'Waterfront'],
    minCustomers:           
        [           23,                3,          11,            20,            2],
    maxCustomers:           
        [           65,               24,          38,            38,           16],
    avgCookiesPerCustomer:  
        [          6.3,              1.2,         3.7,           2.3,          4.6],
}


function Shop(shopProps, shopIndex) {
    this.location = shopProps.location[shopIndex];
    this.minCustomers = shopProps.minCustomers[shopIndex];
    this.maxCustomers = shopProps.maxCustomers[shopIndex];
    this.avgCookiesPerCustomer = shopProps.avgCookiesPerCustomer[shopIndex];

    this.dailyCookiesPerHourLog = [ [],     // first array element: hour (string)
                                    [] ];   // second array element: number of cookies (integer)    
    this.tossersNeededLog = [];
}

Shop.prototype.totalCookies = 0;

Shop.prototype.checkCustomersThisHour = function() {
    var customers = Math.floor(
        Math.random()
        * (this.maxCustomers - this.minCustomers + 1) 
        + this.minCustomers
    );
    console.log('customers: ' + customers);
    return customers;
};

Shop.prototype.calcLogs = function() {
    for(var i = 6; i <= 20; i++){

        if(Math.floor(i / 12) === 0) {
            this.dailyCookiesPerHourLog[0].push( (i) + 'am: ' );
        }
        else {
            this.dailyCookiesPerHourLog[0].push( (i % 12) + 'pm: ');
        }


        customersThisHour = this.checkCustomersThisHour();
        
        this.dailyCookiesPerHourLog[1].push(
            Math.floor(
                customersThisHour * this.avgCookiesPerCustomer 
            ) 
        );

        tossersNeeded = Math.ceil(customersThisHour / 20);
        if(tossersNeeded <= 2) {
            this.tossersNeededLog.push(2);
        }
        else {
            this.tossersNeededLog.push(tossersNeeded);
        }

    }
    console.log(this.dailyCookiesPerHourLog);
    return this.dailyCookiesPerHourLog;
};

Shop.prototype.calcTotalCookies = function() {
    this.totalCookies = 0;
    for(var i = 0; i < this.dailyCookiesPerHourLog[1].length; i++) {
        this.totalCookies += this.dailyCookiesPerHourLog[1][i];
    }
    return this.totalCookies;
};

Shop.prototype.calcAvgTossers = function() {
    var avgTossers = 0;
    var totalTossers = 0;
    for(var i = 0; i < this.tossersNeededLog.length; i++) {
        totalTossers += this.tossersNeededLog[i];
    }
        avgTossers = Math.floor(totalTossers / this.tossersNeededLog.length * 100) / 100; //rounds avg to hundreth place
    return avgTossers;

};

Shop.prototype.cookiesToDOM = function() {
    var elTBody = document.getElementsByTagName('tbody')[0];
    var elTr = document.createElement('tr');
    
    var elTh = document.createElement('th');        // add shop name to first column
    elTh.innerText = this.location;
    elTr.appendChild(elTh);

    for(var i = 0; i < this.dailyCookiesPerHourLog[0].length; i++) {   // add data
        var elTd = document.createElement('td');
        elTd.innerText = this.dailyCookiesPerHourLog[1][i];
        elTr.appendChild(elTd);
    }

    var elShopTotal = document.createElement('th');
    elShopTotal.innerText = this.calcTotalCookies();
    elTr.appendChild(elShopTotal);

    elTBody.appendChild(elTr);

};

Shop.prototype.tossersToDOM = function() {
    var elTBody = document.getElementsByTagName('tbody')[1];
    var elTr = document.createElement('tr');
    
    var elTh = document.createElement('th');        // add shop name to first column
    elTh.innerText = this.location;
    elTr.appendChild(elTh);

    for(var i = 0; i < this.tossersNeededLog.length; i++) {   // add data
        var elTd = document.createElement('td');
        elTd.innerText = this.tossersNeededLog[i];
        elTr.appendChild(elTd);
    }

    var elShopTotal = document.createElement('th');
    elShopTotal.innerText = this.calcAvgTossers();
    elTr.appendChild(elShopTotal);

    elTBody.appendChild(elTr);

};

Shop.prototype.render = function() {
    this.calcLogs();
    this.cookiesToDOM();
}

function renderTime(tableNum) {
    var elTHead = document.getElementsByTagName('thead')[tableNum];
    var elTr = document.createElement('tr');

    var elTh = document.createElement('th');
    elTh.innerText = 'Time:';
    elTr.appendChild(elTh);

    for(var i = 6; i <= 20; i++){
        var elTh = document.createElement('th');
        if(Math.floor(i / 12) === 0) {
            elTh.innerText = ( (i) + 'am' );
        }
        else {
            elTh.innerText = ( (i % 12) + 'pm');
        }
        elTr.appendChild(elTh);
    }

    var elTh = document.createElement('th');
    if(tableNum === 0) {
        elTh.innerText = 'Totals';
    }
    else {
        elTh.innerText = 'Averages';
    }
    elTr.appendChild(elTh);

    elTHead.appendChild(elTr);
}

function calcTotalAtHour(shops, time) {
    var total = 0;
    for(var i = 0; i < shopProps.location.length; i++) {
        total += shops[i].dailyCookiesPerHourLog[1][time];
    }
    return total;
}

function calcGrandTotal(shops) {
    var grandTotal = 0;
    for(var i = 0; i < shopProps.location.length; i++) {
        grandTotal += shops[i].calcTotalCookies();
    }
    return grandTotal;
}

function renderTotals(shops) {
    var elTFoot = document.getElementsByTagName('tfoot')[0];
    var elTr = document.createElement('tr');

    var elTh = document.createElement('th');
    elTh.innerText = 'Total:';
    elTr.appendChild(elTh);

    for(var i = 0; i < shops[0].dailyCookiesPerHourLog[0].length; i++){
        var elTh = document.createElement('th');
        elTh.innerText = calcTotalAtHour(shops, i);
        elTr.appendChild(elTh);
    }

    var elTh = document.createElement('th');
    elTh.innerText = calcGrandTotal(shops);
    elTr.appendChild(elTh);

    elTFoot.appendChild(elTr);
}


function renderAll() {
    var shops = [];

    renderTime(0);

    for(var i = 0; i < shopProps.location.length; i++) {
        shops[i] = new Shop(shopProps, i);
        shops[i].render();
    }

    renderTotals(shops);

    renderTime(1);

    for(var i = 0; i < shopProps.location.length; i++) {
        shops[i].tossersToDOM();
    }
}


renderAll();