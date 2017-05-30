var cat = {
    name: "",
    attitudeLevel: 7,
    kittyMeter: 5,
    hunger: 7
    stroke: function () {
        if (kittyMeter===10) {
            alert(this.name + " jumps 10 feets, kicks your face three times, and darts under the bed")
            this.kittyMeter = 0
            } else {
            alert(this.name + " says 'MEOWWW'")
            this.kittyMeter++
        }
    },
    feed: function () {
        if (this.hunger===0) {
            alert(this.name + " runs under the bed!")
        } else {
            alert(this.name + " says 'Yum!!'")
            this.kittyMeter = 0
        }
    }
};

var catName = document.getElementById('catName')
catName.addEventListener("click", function () {
    cat.name = document.getElementById('nameInput').value
    alert(cat.name + " says meow (hello) to user!")
});
//get these 2 to react to feeding, stroking, and playing
var kittyMeter = document.getElementById('kittyMeter')
var hunger = document.getElementById('hunger')

//get these 3 to cause kittyMeter and hunger to go up or down
var strokeButton = document.getElementById('stroke')
var playButton = document.getElementById('play')

strokeButton.addEventListener("click", function () {
    cat.stroke()
})
var feedButton = document.getElementById('feed')
