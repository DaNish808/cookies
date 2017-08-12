


var mapBank = {
    elNav: document.getElementById('location-nav'),
    elButtons: [],
    elMapDiv: document.getElementById('map-container'),
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
    info: [ '',
            '',
            '',
            '',
            '' ],
    images: [ './pictures/frosted-cookie.jpg',
              './pictures/shirt.jpg',
              './pictures/',
              './pictures/cutter.jpeg',
              './pictures/' ],


    createElButtons: function() {
        for(var i = 0; i < this.locations.length; i++) {
            this.elButtons[i] = document.createElement('button');
            this.elButtons[i].innerText = this.locations[i];
            this.elNav.appendChild(this.elButtons[i]);
        }
    },

    displayMap: function(index) {
        this.elMapDiv.innerHTML = '';
        // throw new Error('Google Map Error');
        this.elMapDiv.innerHTML = this.maps[index];
    },

    // getEventIndex: function(e) {
    //     var i = 0;
    //     var el = '';
    //     while(e.previousSibling !== null) {
    //         el = e.previousSibling;
    //         i++;
    //     }
    //     return i;
    // },

    // createListener: function() {
    //     var checkE = 0;
    //     this.elNav.addEventListener('click', this.displayMap( checkE = function(e) {
    //         this.getEventIndex(e);
    //     } ), false);
    //     console.log(checkE);
    // },

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

        });
    }
}

mapBank.createElButtons();

mapBank.displayMap(0);


for(var i = 0; i < mapBank.elButtons.length; i++){
    mapBank.createListener(i);
}

clear();