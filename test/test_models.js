function testModels() {
  var all = icecreamModel.getAll();

  ok('getAll', all.length, 6);

  // ok('findById');
  // ok('updateViews');
}

testModels();
