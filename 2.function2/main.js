function palindrome(message){
  // wirte your code here
  var msg = message.split('').reverse().join('');
  if(msg == message){
      return true;
  }
  else{
      return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
