
function assertEqual(msg, v1, v2) {
  if (v1 !== v2 || !(v1 !== v1 && v2 !== v2)) {
    console.error(msg)
  }
}

module.exports = {
  assertEqual
};