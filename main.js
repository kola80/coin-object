let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random())
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        coin.flip()
        if (this.state === 0){
document.body.append('Tails')
        }

        else {
            document.body.append('Heads ')
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');

        if (this.state === 0){
            image.src = 'https://www.thepatrioticmint.com/pub/media/catalog/product/cache/d48ad8856c1a6e03d10c8c6aaff41c62/2/0/2019-america-the-beautiful-quarters-w.jpg'
            document.body.append(image)
        }

        else {
            image.src = 'https://cdn.mos.cms.futurecdn.net/GbeyotssX2xFPLvyo9V58F-1200-80.jpg'
            document.body.append(image)
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function display20Flips (){
    for ( let i = 0; i < 20; i++ ){
        coin.toString()
    }
}

display20Flips()

function display20images (){
    for (let i = 0; i < 20; i++){
        coin.toHTML()
    }
}

display20images()