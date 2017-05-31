var kitty = {
    name: "",
    kittyMeter: 5,
    cozyMeter: 5,
    hungerMeter: 5,
    funMeter: 5,
    happyCat: true,
    stroke: function (cozyMeter) {
        if (cozyMeter <=10) {
            cozyMeter++
        } else {
            cozyMeter = 0
        }
    },
    feed: function (hungerMeter) {
        if (hungerMeter <= 10) {
            hungerMeter++
        } else {
            hungerMeter = 0
        }
    },
    play: function (funMeter) {
        if (funMeter <= 10) {
            funMeter++
        } else {
            funMeter = 0
    }
}}

$('#submit').on('click', function (){
    kitty.name = $('#input').val()
})
console.log(kitty.name)

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
