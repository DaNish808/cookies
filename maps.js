


var mapBank = {
    elNav: document.getElementById('location-nav'),
    elButtons: [],
    elMapDiv: document.getElementById('map-container'),
    elInfoDiv: document.getElementById('store_info'),
    elImageDiv: document.getElementById('img_div'),


    locations: [ 'PDX Airport',
                 'Pioneer Square', 
                 'Powell\'s', 
                 'St. John\'s', 
                 'Waterfront' ],

    maps: [ '<div class="mapouter"><div class="gmap_canvas"><iframe width="2000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=10280%20NE%20Cascades%20Pkwy%2C%20Portland%2C%20OR%2097220&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:500px;width:2000px;}.gmap_canvas {background:none!important;height:500px;width:2000px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="2000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=pioneer%20square%2C%20Portland%2C%20OR%2097220&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:500px;width:2000px;}.gmap_canvas {background:none!important;height:500px;width:2000px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="2000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=pdx%20codefellows%2C%20Portland%2C%20OR%2097220&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:500px;width:2000px;}.gmap_canvas {background:none!important;height:500px;width:2000px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="2000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=6635%20N%20Baltimore%20Ave%20%23102%2C%20Portland%2C%20OR%2097203&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:500px;width:2000px;}.gmap_canvas {background:none!important;height:500px;width:2000px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="2000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=W%20Burnside%20St%20%26%20Ankeny%2C%20Portland%2C%20OR%2097204&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:500px;width:2000px;}.gmap_canvas {background:none!important;height:500px;width:2000px;}</style></div>' ],

    info: [ '<h4>PDX Airport Location</h4><p>Come for our exquisitely decorated Salmon Cookies!</p><p>Address: 298323 NE Cascades Pkwy<br/>Portland, OR 97220</p><p>Phone: (555) 808-4383</p><p>Hours: 6:00am-8:00pm any day of the week</p>',
            '<h4>On Pioneer Square</h4><p>Shirts on sale, only 1e9 left!</p><p>Address: 700 SW 5th Ave<br/>Portland, OR 97220</p><p>Phone: (555) 808-2930</p><p>Hours: 6:00am-8:00pm any day of the week</p>',
            '<h4>Right next to Powell\'s</h4><p>All cookies made by these guys!</p><p>Address: 5.7 NW 10th Ave<br/>Portland, OR 97220</p><p>Phone: (555) 808-4383</p><p>Hours: 6:00am-8:00pm any day of the week</p>',
            '<h4>Just off the St. John Bridge</h4><p>Clearance Sale: all inventory must go!</p><p>Address: Willamette River off Cathedral Park<br/>Portland, OR 97220</p><p>Phone: (555) 808-8008</p><p>Hours: 6:00am-8:00pm any day of the week</p>',
            '<h4>On the Waterfront</h4><p>Our cookies are so good, they don\'t even look real!</p><p>Address: Tunnels beneath Skidmore Fountain<br/>Portland, OR 97220</p><p>Phone: look for the tin can on the string (hint: stormdrain)</p><p>Hours: 6:00am-8:00pm any day of the week</p>' ],
            
    images: [ 'frosted-cookie.jpg',
              'shirt.jpg',
              'family.jpg',
              'cutter.jpeg',
              'fish.jpg' ],


    createElButtons: function() {
        for(var i = 0; i < this.locations.length; i++) {
            this.elButtons[i] = document.createElement('button');
            this.elButtons[i].innerText = this.locations[i];
            this.elNav.appendChild(this.elButtons[i]);
        }
    },

    displayMap: function(index) {
        this.elMapDiv.innerHTML = this.maps[index];
    },

    displayInfo: function(index) {
        this.elInfoDiv.innerHTML = this.info[index];
    },

    displayImage: function(index) {
        this.elImageDiv.style.backgroundImage = 'url(' +this.images[index]+ ')';
    },

    onEvent: function(event) {
        console.log('event: ' + i);
        console.log('this: ' + this);
        console.log(event)
        mapBank.displayMap(i);
    },

    createListeners: function() {
        for(var i = 0; i < this.elButtons.length; i++) {
            this.elButtons[i].addEventListener('click', function() {
                event.preventDefault();
                console.log('event happened at button[' + i + ']');
                console.log(event);

            });
        }
    },

    createListener: function(i) {
        this.elButtons[i].addEventListener('click', function() {
            event.preventDefault();
            mapBank.displayMap(i);
            mapBank.displayInfo(i);
            mapBank.displayImage(i);
        });
    }
}



mapBank.createElButtons();
mapBank.displayMap(0);


for(var i = 0; i < mapBank.elButtons.length; i++){
    mapBank.createListener(i);
}
