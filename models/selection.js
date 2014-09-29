var selectionModel = {
  list: [],

  getIcecreams: function () {
    return this.list;
  },

  add: function (icecream) {
    this.list.push(icecream);
    if (this.list.length > 2) {
      this.list.shift();
    }
  },

  contain: function (icecream) {
    return this.list.indexOf(icecream) >= 0;
  },

  containById: function(id) {
    return this.contain(icecreamModel.findById(id));
  }
};
