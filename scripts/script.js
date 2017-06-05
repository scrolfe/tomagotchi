var kitty = {
    name: "",
    cozyMeter: 5,
    hungerMeter: 5,
    funMeter: 5,
    stroke: function () {
        if (this.cozyMeter <=9) {
            // console.log("hello")
            this.cozyMeter++
        } else {
            this.cozyMeter = 0
            $('html, body').animate({scrollTop:0}, 'fast');
            $('h1').text(this.name + " has been over-stimulated by pets and pounces on your face! You die :(")

        }
        // console.log("hello")
    },
    feed: function () {
        if (this.hungerMeter <= 9) {
            this.hungerMeter++
        } else {
            this.hungerMeter = 0
            $('html, body').animate({scrollTop:0}, 'fast');
            $('h1').text(this.name + " is so full.. Too full! " + this.name + " Takes a nap that never ends :(")
        }
    },
    play: function () {
        if (this.funMeter <= 9) {
            this.funMeter++
        } else {
            this.funMeter = 0
            $('html, body').animate({scrollTop:0}, 'fast');
            $('h1').text(this.name + " is feeling far TOO playful and attacks your computer charger. Your computer crashes to the ground, exploding and starting a small fire.")
    }
}}

$('#messageBox').text('Welcome to the KittyCareCenterForKet')

$('#submit').on('click', function () {
    kitty.name = $('#input').val()
    $('html, body').animate({scrollTop:0}, 'fast');
    $('#messageBox').text("Your kitty's name is " + kitty.name + ". Congratulations!! You are now an official cat-sitter.")
    startDecay();
    buttonsOn();
    deadCheck();
});
var buttonsOn = function () {
    $('#stroke').on('click', function () {
        kitty.stroke()
        $('#cozy').text(kitty.cozyMeter)
    })
    $('#feed').on('click', function () {
        kitty.feed()
        $('#hungry').text(kitty.hungerMeter)
    })
    $('#play').on('click', function () {
        kitty.play()
        $('#fun').text(kitty.funMeter)
    })
};
var startDecay = function () {
    setInterval(function () {
        kitty.cozyMeter--
        $('#cozy').text(kitty.cozyMeter)
    }, 2000);
    setInterval(function () {
        kitty.hungerMeter--
        $('#hungry').text(kitty.hungerMeter)
    }, 2000);
    setInterval(function () {
        kitty.funMeter--
        $('#fun').text(kitty.funMeter)
    }, 2000)
};

var deadCheck = function () {
    console.log("check")
    if (kitty.cozyMeter <= 0 || kitty.hungerMeter <= 0 || kitty.funMeter <= 0) {
        console.log("check2")
        $('html, body').animate({scrollTop:0}, 'fast');
        $('#messageBox').text('Poor ' + kitty.name + ' has passed away! Big time frowny face :()');
        setTimeout(function () {
            window.location.reload();
        }, 4000);
    }
};

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
