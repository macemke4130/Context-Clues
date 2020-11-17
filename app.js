var friend = ["Brennan", "Dan", "Nick", "Dean", "Kris"];
var weapon = ["Knife", "Sword", "Pedal Wrench", "Bag of Rocks", "Chainring", "Chain Whip", "Sack of Poop", "Dog Teeth", "Butt Gun", "Pipe", "Coffee Pot", "Hammer", "Nailgun", "Candle Stick", "String Cheese", "Bat", "Club", "Fart", "Side Cutters", "Box Cutter"];
var myLocation = ["Bremen Cafe", "Fule Cafe", "Comet Cafe", "High Dive Cafe", "Roast Cafe", "Hyperion Cafe", "Anodyne Cafe", "Alderon Cafe", "Ugly Mug Cafe", "Spyhouse Cafe"];
var lines = ["I accuse ", ", with the ", " in the ", "!"];

for (var i = 1; i <= 100; i++) {
    var $newH3 = $('<h3></h3>');
    $newH3.attr('id', i);
    $newH3.addClass('h3-title');
    $newH3.text('Accusation ' + i);
    $('body').append($newH3);

    $newH3.click(function () {
        buildScript()(this.id);
    });
}

function buildScript() {
    return function (i) {
        // Variable "i" in this scope is the heading ID number --

        var thisFriend = friend[i % friend.length];
        var thisWeapon = weapon[i % weapon.length];
        var thisLocation = myLocation[i % myLocation.length];

        var script = lines[0] + thisFriend + lines[1] + thisWeapon + lines[2] + thisLocation + lines[3];
        alert(script);
    }
}