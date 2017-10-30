var expect = require('expect');
var {generateMessage} = require('./../utils/message');

describe('Generate message', () => {
  it('should generate the correct message object', () => {
    var from = 'Ato';
    var text = 'Hehehe';
    var mesObj = generateMessage(from, text); 
    expect(mesObj.createdAt).toBeA('number');
    expect(mesObj).toInclude({text, from});
  });
});