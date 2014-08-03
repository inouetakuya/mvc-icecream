var icecreamModel = {
  list: [
    {id: 'topping1', name: "バニラ"},
    {id: 'topping2', name: "チョコレートチップ"},
    {id: 'topping3', name: "オレンジシャーベット"},
    {id: 'topping4', name: "チョコミント"},
    {id: 'topping5', name: "ストロベリー"},
    {id: 'topping6', name: "抹茶"}
  ],

  // すべてのアイスクリームオブジェクトを返す
  getAll: function() {
    return this.list;
  }
};
