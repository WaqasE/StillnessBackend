const moment = require('moment');
//1s-59s 1m-59m 1h-23h 1d-6d 1w-3w 1M-11M 1Y
function Time(joined) {
    return moment(joined, 'MMMM Do YYYY, h:mm:ss a').fromNow();
}

module.exports = Time;