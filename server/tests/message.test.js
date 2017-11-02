var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./../utils/message');

describe('Generate message', () => {
  // synchronous
  it('should generate the correct message object', () => {
    var from = 'Ato';
    var text = 'Hehehe';
    var mesObj = generateMessage(from, text); 
    expect(mesObj.createdAt).toBeA('number');
    expect(mesObj).toInclude({text, from});
  });
});

describe('Generate location message', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var createdAt = new Date().getTime();
    var longitude = 1;
    var latitude = 1;

    var locObj = generateLocationMessage(from, longitude, latitude);
    expect(locObj.createdAt).toBeA('number');
    expect(locObj.url).toBe(`http://www.google.com/maps/@${latitude},${longitude}`);
  });
});