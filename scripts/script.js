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
            this.cozyMeter = 1
            $('html, body').animate({scrollTop:0}, 'fast');
            $('h1').text(this.name + " has been over-stimulated by pets and pounces on your face! You die :(")
            setTimeout(function (){window.location.reload()}, 4000)
        }

        // console.log("hello")
    },
    feed: function () {
        if (this.hungerMeter <= 9) {
            this.hungerMeter++
        } else {
            this.hungerMeter = 1
            $('html, body').animate({scrollTop:0}, 'fast');
            $('h1').text(this.name + " is so full.. Too full! " + this.name + " Takes a nap that never ends :(")
            setTimeout(function (){window.location.reload()}, 4000)
        }
    },
    play: function () {
        if (this.funMeter <= 9) {
            this.funMeter++
        } else {
            this.funMeter = 1
            $('html, body').animate({scrollTop:0}, 'fast');
            $('h1').text(this.name + " is feeling far TOO playful and attacks your computer. Your computer crashes to the ground, starting a fire.")
            setTimeout(function (){window.location.reload()}, 7000)
    }

}}

$('#messageBox').text('Welcome to the KittyCareCenter')

$('#submit').on('click', function () {
    kitty.name = $('#input').val()
    $('html, body').animate({scrollTop:0}, 'fast');
    $('#messageBox').text("Your kitty's name is " + kitty.name + ". Congratulations!! You are a cat-sitter.")
    startDecay();
    buttonsOn();
    // deadCheck();
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
        deadCheck();
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
        $('html, body').animate({scrollTop:0}, 'fast');
        $('#messageBox').text('Poor ' + kitty.name + ' has passed away! :(');
        setTimeout(function () {window.location.reload()}, 2000)
        }
    };
