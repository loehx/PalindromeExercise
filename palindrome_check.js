function is_palindrome(str) {
  str = str.toLowerCase();
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1])
      return false;
  }
  return true;
}

console.log("Is palindrome?")
console.log("John", is_palindrome("John"))
console.log("Hannah", is_palindrome("Hannah"))
