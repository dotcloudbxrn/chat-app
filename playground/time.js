const moment = require('moment');

var timeStamp = new Date().getTime();
var newDate = moment(timeStamp);

var someTimestamp = moment().valueOf();

console.log(newDate.format('h:mm a'));