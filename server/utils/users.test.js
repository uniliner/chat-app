const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'mike',
      room: 'node course'
    },{
      id: '2',
      name: 'jane',
      room: 'react course'
    },{
      id: '3',
      name: 'julie',
      room: 'node course'
    }]
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'ron',
      room: 'the room'
    };
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  })

  it('should return names for node course', () => {
    var names = users.getUserList('node course');

    expect(names).toEqual(['mike','julie']);
  });

  it('should return names for react course', () => {
    var names = users.getUserList('react course');

    expect(names).toEqual(['jane']);
  });

  it('should get existing user', () => {
    var user = users.getUser('2');
    expect(user).toEqual(users.users[1]);
  });

  it('should return undefined for non-existing user', () => {
    var user = users.getUser('700');
    expect(user).toBeFalsy();
  });

  it('should remove existing user', () => {
    var user = users.removeUser('2');
    expect(user.id).toBe('2');
    expect(users.users.length).toBe(2);
  });

  it('should not remove non-existing user', () => {
    var user = users.removeUser('700');
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });
});
