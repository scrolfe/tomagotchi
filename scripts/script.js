var cat = {
    name: "",
    kittyMeter: 5,
    cozyMeter: 5,
    hungerMeter: 5,
    funMeter: 5,
    happyCat: true,
    stroke: function () {
        if (cozyMeter > 5) {
        } else {
        }
    },
    feed: function () {
        if (hungerMeter > 5) {
        } else {
        }
    },
    play: function () {
        if (funMeter > 5) {

        } else {
    }
};

//appendNewElement function
var body = document.body
var appendNewElement = function (parent, parentIndex, element) {
    var el = document.createElement(element)
    document.getElementsByTagName(parent)[parentIndex]
    body.appendChild(el)
};
//test
appendNewElement("body", 0, "h1")
//addInnerHtml function
var addInnerHtml = function (location, text) {
    //example use: adderInnerHtml('body h1', "I'm a cat, a cat, a cat!")
    var parent = document.querySelectorAll(location)
    parent.innerHTML(text)
}
//header function
var header = function(size, text) {
    if (size === "h1") {
        //appendNewElement function
        appendNewElement("body", 0, "h1")
    } else if (size === "h2") {

    } else if (size === "h3") {

    } else {

    }
};
//invoke name
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
