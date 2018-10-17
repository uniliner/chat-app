const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var message = generateLocationMessage('it\'s me', 123, 456);

    expect(message).toMatchObject({
      from: message.from,
      url: `https://www.google.com/maps?q=123,456`
    });
    expect(typeof message.createdAt).toBe('number');
  });
});
