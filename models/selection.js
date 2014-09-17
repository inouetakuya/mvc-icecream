var selectionModel = {
  list: [],

  getIcecreams: function () {
    return this.list;
  },

  add: function (icecream) {
    this.list.push(icecream);
  },

  contain: function (icecream) {
    return this.list.indexOf(icecream) >= 0;
  }
};
