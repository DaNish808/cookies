
var shopProps = {

    location:               
        ['PDX Airport', 'Pioneer Square', 'Powell\'s', 'St. John\'s', 'Waterfront'],
    minCustomers:           
        [           23,                3,          11,            20,            2],
    maxCustomers:           
        [           65,               24,          38,            38,           16],
    avgCookiesPerCustomer:  
        [          6.3,              1.2,         3.7,           2.3,          4.6],

    newShop: function(location, minCustomers, maxCustomers, avgCookies) {
        this.location.push(location);
        this.minCustomers.push(minCustomers);
        this.maxCustomers.push(maxCustomers);
        this.avgCookiesPerCustomer.push(avgCookies);
    },
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
};



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

function clearTables() {
    var theads = document.getElementsByTagName('thead');
    for(var i = 0; i < theads.length; i++) {
        theads[i].innerHTML = '';
    }
    var tbodys = document.getElementsByTagName('tbody');
    for(var i = 0; i < tbodys.length; i++) {
        tbodys[i].innerHTML = '';
    }
    var tfoots = document.getElementsByTagName('tfoot');
    for(var i = 0; i < tfoots.length; i++) {
        tfoots[i].innerHTML = '';
    }
}

function setListener() {
    
    var elForm = document.getElementsByTagName('form')[0];
    elForm.addEventListener('submit', function() {

        event.preventDefault();
        if(parseInt(this.min_customers.value) > parseInt(this.max_customers.value)) {
            alert('invalid input');
        }
        else {
            shopProps.newShop(
                this.location.value,
                parseFloat(this.min_customers.value),
                parseInt(this.max_customers.value),
                parseInt(this.avg_cookies.value)
            );

            this.location.value = '...';
            this.min_customers.value = "###";
            this.max_customers.value = "###";
            this.avg_cookies.value = "";

            renderAll();

        }
    });
}

function renderAll() {
    var shops = [];
    clearTables();

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

    setListener();
}


renderAll();