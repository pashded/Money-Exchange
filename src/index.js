// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = {};
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
    if (currency <= 0) {
        return obj;
    }
    if (Math.floor(currency / 50)) {
        obj.H = Math.floor(currency / 50);
        currency -= Math.floor(currency / 50) * 50;
    }
    if (Math.floor(currency / 25)) {
        obj.Q = Math.floor(currency / 25);
        currency -= Math.floor(currency / 25) * 25;
    }
    if (Math.floor(currency / 10)) {
        obj.D = Math.floor(currency / 10);
        currency -= Math.floor(currency / 10) * 10;
    }

    if (Math.floor(currency / 5)) {
        obj.N = Math.floor(currency / 5);
        currency -= Math.floor(currency / 5) * 5;
    }
    if (currency) {
        obj.P = currency;
    }
    return obj;

}
