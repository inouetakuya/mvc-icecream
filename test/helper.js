function ok(title, expect, value) {
  if (expect === value) {
    console.log('OK: ' + title);
  } else {
    console.log('NG: ' + title + '[' + expect + '] -> [' + value + ']');
  }
}
