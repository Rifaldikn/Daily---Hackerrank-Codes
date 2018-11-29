var ar = [338, 65, 713, 595, 428, 610, 728, 573, 871, 868];
function arraysum(ar) {
  var result = 0;
  for (var i = 0; i < ar.length; i++) {
    result += ar[i];
  }
  console.log(result);
}

arraysum(ar);
