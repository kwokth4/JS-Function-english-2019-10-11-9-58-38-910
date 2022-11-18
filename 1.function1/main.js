function reverseString(message){
  // wirte your code here
  var msg = message.split('').reverse().join('');
  console.log(msg);
  return msg;
}
reverseString('hello'); // should return 'olleh'
