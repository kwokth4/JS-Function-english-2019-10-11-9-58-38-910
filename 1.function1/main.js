function reverseString(message){
  // wirte your code here
  var msg = message.split('').reverse().join('');
  return msg;
}
reverseString('hello'); // should return 'olleh'
