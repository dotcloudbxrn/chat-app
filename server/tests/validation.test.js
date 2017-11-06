const expect = require('expect');
var {isRealString} = require('./../utils/validation');

describe('Authentication for accessing chat rooms (Is Real String)', () => {
  it('should allow a user to log in if he provides all arguments', () => {
    // is a sync job, so no done function callback
  var params = {
    name: '   Valid',
    room: 'More Valid'
  }
  expect(isRealString(params.name)).toBe(true);
  expect(isRealString(params.room)).toBe(true);
  });

  it('should reject nonstring values', () => {
    var params = {
      name : 1234,
      room: 3213
    }

    for(param in params) {
      expect(isRealString(params[param])).toBe(false);
    }
  });

  it('should reject string with only spaces', () => {
    var params = {
      name : '    ',
      room: ' '
    }

    expect(isRealString(params.name)).toBe(false);
  });
});