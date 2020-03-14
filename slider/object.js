var kpop = {
    name: 'black-pink',
    isTurnOn: false,
    speed: 120,
    howmany: {
        col: 6,
        average: 25
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 150;
        this.howmany.col = 10;
        this.howmany.average = 26;
    }
};