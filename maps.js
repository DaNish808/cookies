


var mapBank = {
    elNav: document.getElementById('location-nav'),
    elButtons: [],
    elMapDiv: document.getElementById('map-container'),
    locations: [ 'PDX Airport',
                 'Pioneer Square', 
                 'Powell\'s', 
                 'St. John\'s', 
                 'Waterfront' ],
    maps: [ '<div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Portland%20International%20Airport%2C%20Northeast%20Airport%20Way%2C%20Portland%2C%20OR%2C%20USA&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>google maps <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:400px;width:750px;}.gmap_canvas {background:none!important;height:400px;width:750px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=%2Cpioneer%20square%20portland%20or%2C%20us&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:400px;width:750px;}.gmap_canvas {background:none!important;height:400px;width:750px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=1005%20W%20Burnside%20St%2C%20Portland%2C%20OR%2097209&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:400px;width:750px;}.gmap_canvas {background:none!important;height:400px;width:750px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=777%20NE%20Martin%20Luther%20King%20Jr%20Blvd%2C%20Portland%2C%20OR%2097232&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:400px;width:750px;}.gmap_canvas {background:none!important;height:400px;width:750px;}</style></div>',
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=2001%20SW%20River%20Dr%2C%20Portland%2C%20OR%2097201&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{overflow:hidden;height:400px;width:750px;}.gmap_canvas {background:none!important;height:400px;width:750px;}</style></div>' ],
    testArray: ['A', 'b', 'c', 'D', 'e'],
    createElButtons: function() {
        for(var i = 0; i < this.locations.length; i++) {
            this.elButtons[i] = document.createElement('button');
            this.elButtons[i].innerText = this.locations[i];
            this.elNav.appendChild(this.elButtons[i]);
        }
    },

    displayMap: function(index) {
        this.elMapDiv.innerHTML = '';
        this.elMapDiv.innerHTML = this.maps[index];
        // this.elMapDiv.innerText = this.testArray;
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

mapBank.displayMap(1);


for(var i = 0; i < mapBank.elButtons.length; i++){
    mapBank.createListener(i);
}