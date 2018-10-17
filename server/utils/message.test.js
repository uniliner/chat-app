const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('it\'s me', 'some text');

    expect(message).toMatchObject({
      from: message.from,
      text: message.text
    });
    expect(typeof message.createdAt).toBe('number');
  });
});
