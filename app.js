
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

    calcHourlyCookieLog: function() {
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

    toDOM: function() {
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

    publish: function() {
        this.calcHourlyCookieLog();
        this.toDOM();
    }
}

var shop2 = {
    location: 'Pioneer Square',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerCustomer: 1.2,

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

    calcHourlyCookieLog: function() {
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

    toDOM: function() {
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

    publish: function() {
        this.calcHourlyCookieLog();
        this.toDOM();
    }
}

var shop3 = {
    location: 'Powell\'s',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerCustomer: 3.7,

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

    calcHourlyCookieLog: function() {
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

    toDOM: function() {
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

    publish: function() {
        this.calcHourlyCookieLog();
        this.toDOM();
    }
}

var shop4 = {
    location: 'St. John\'s',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerCustomer: 2.3,

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

    calcHourlyCookieLog: function() {
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

    toDOM: function() {
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

    publish: function() {
        this.calcHourlyCookieLog();
        this.toDOM();
    }
}

var shop5 = {
    location: 'Waterfront',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerCustomer: 4.6,

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

    calcHourlyCookieLog: function() {
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

    toDOM: function() {
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
                liVar.setAttribute("font-style", 'bold')
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

    publish: function() {
        this.calcHourlyCookieLog();
        this.toDOM();
    }
}



publishAll();

function publishAll() {
    shop1.publish();
    shop2.publish();
    shop3.publish();
    shop4.publish();
    shop5.publish();
}