var {Users} = require('./../utils/users');
const expect = require('expect');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    },{
      id: 2,
      name: 'Jen',
      room: 'React Course'
    },{
      id: 3,
      name: 'Wulf',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      name: 'Guy',
      id: 123,
      room: 'Fans'
    }
    var responseUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should not find user based on an invalid ID', () => {
    var id = 99;
    var user = users.getUser(id);
    expect(user).toNotExist();
  });

  it('should return names for nodes course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Wulf']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });

  it('should return user when you look it up from his name', () => {
    var user = users.getUser(1);
    expect(user).toEqual(users.users[0]);
  });

  it('should delete an user by his ID and return it to us', () => {
    var myUser = users.removeUser(2);
    expect(users.users.length).toBe(2);
  })
});