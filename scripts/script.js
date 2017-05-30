var cat = {
    name: "",
    attitudeLevel: 7,
    meow: function (){
        alert(cat.name + " says 'MEOWWW'")
    },
    feed: function () {
        alert(this.name + " says 'Yum!!'")
        this.hunger = 0
    }
};

var catName = document.getElementById('catName')
var strokeButton = document.getElementById('stroke')
var feedCat = document.getElementById('feed')
var playWithCat = document.getElementById('play')
