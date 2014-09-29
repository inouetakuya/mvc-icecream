var icecreamModel = {
  list: [
    {id: 'topping1', name: "バニラ"},
    {id: 'topping2', name: "チョコレートチップ"},
    {id: 'topping3', name: "オレンジシャーベット"},
    {id: 'topping4', name: "チョコミント"},
    {id: 'topping5', name: "ストロベリー"},
    {id: 'topping6', name: "抹茶"}
  ],

  getAll: function() {
    return this.list;
  },

  findById: function (id) {
    return $.grep(this.list, function (val) {
      return id == val.id;
    })[0];
  }
};
