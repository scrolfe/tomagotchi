var kitty = {
    name: "",
    kittyMeter: 5,
    cozyMeter: 5,
    hungerMeter: 5,
    funMeter: 5,
    happyCat: true,
    stroke: function () {
        if (this.cozyMeter <=10) {
            // console.log("hello")
            this.cozyMeter++
        } else {
            this.cozyMeter = 0
        }
        // console.log("hello")
    },
    feed: function () {
        if (this.hungerMeter <= 10) {
            this.hungerMeter++
        } else {
            this.hungerMeter = 0
        }
    },
    play: function () {
        if (this.funMeter <= 10) {
            this.funMeter++
        } else {
            this.funMeter = 0
    }
}}

$('#messageBox').text('Welcome to the KittyKareSenter')

$('#submit').on('click', function () {
    kitty.name = $('#input').val()
    $('#messageBox').text("Your kitty's name is " + kitty.name + ". Congratulations!! You are now a cat-sitter.")
})

$('#stroke').on('click', function () {
    kitty.stroke()
    $('#cozy').text(kitty.cozyMeter)
    console.log(kitty.cozyMeter)
})
$('#feed').on('click', function () {
    kitty.feed()
    $('#hungry').text(kitty.hungerMeter)
})
$('#play').on('click', function () {
    kitty.play()
    $('#fun').text(kitty.funMeter)
})
// //tests
// kitty.name
// kitty.kittyMeter
// kitty.cozyMeter
// kitty.hungerMeter
// kitty.funMeter
// kitty.happyCat
// kitty.stroke()
// kitty.feed()
// kitty.play()
