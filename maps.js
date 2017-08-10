

console.log(document.getElementById('location-nav'));


var mapBank = {
    elNav: document.getElementById('location-nav'),
    elButtons: [],
    locations: [ 'PDX Airport',
                 'Pioneer Square', 
                 'Powell\'s', 
                 'St. John\'s', 
                 'Waterfront' ],
    maps: [],

    createElButtons: function() {
        for(var i = 0; i < this.locations.length; i++) {
            this.elButtons[i] = document.createElement('button');
            this.elButtons[i].innerText = this.locations[i];
            this.elNav.appendChild(this.elButtons[i]);
        }
    },
}

mapBank.createElButtons();