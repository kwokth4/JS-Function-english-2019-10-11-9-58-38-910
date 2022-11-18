function alphabetSort(message){
  // wirte your code here
  var msg = message.split("").sort().join("");
  return msg;
}
alphabetSort('hello'); // should return 'ehllo'
