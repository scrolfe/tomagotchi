var cat = {
    name: "",
    age: 4,
    hunger: 3,
    meow: function (){
        alert(this.name + " says 'MEOWWW'")
    },
    feed: function () {
        alert(this.name + " says 'Yum!!'")
        this.hunger = 0
    }
};

var catName = document.getElementById('catName')
catName.addEventListener('click', function() {
    var name = document.getElementById('catName').value
    cat.name = name;
});

var meowButton = document.getElementById('meow')
meowButton.addEventListener("click", function() {
    cat.meow()
});
