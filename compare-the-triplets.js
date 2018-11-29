var ar1 = [17, 28, 30],
  ar2 = [99, 16, 30],
  result = [0, 0];
for (var i = 0; i < ar1.length || i < ar2.length; i++) {
  if (ar1[i] > ar2[i]) {
    result[0] += 1;
  } else if (ar1[i] < ar2[i]) {
    result[1] += 1;
  }
}
console.log(result);
