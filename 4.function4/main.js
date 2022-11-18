function countWords(message){
  // wirte your code here
  var words=message.split(" ").length;
  return words;
}
countWords('Good morning, I love JavaScript.'); // should return 5
