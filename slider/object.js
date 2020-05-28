function kpop(name) {
    this.name = name;
    this.isTurnOn = false;
    this.speed = 120;
    this.howmany = {
        koll: 6,
        average: 25,
        isTurnOn: folse
    };

    this.start = function() {
        this.isTurnOn = false;
        this.speed = 140;
        this.howmany.col = 20;
        this.howmany.average = 26;
    }
};
var reno = new kpop('reno');
reno.start();
var mrs = new Car ('Mers');
mers.start();