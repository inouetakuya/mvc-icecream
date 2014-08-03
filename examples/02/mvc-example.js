//MODEL: アイスクリーム一覧
var icecreamModel = {
    list: [
        {id:'t1', name:"バニラ"},
        {id:'t2', name:"チョコレートチップ"},
        {id:'t3', name:"オレンジシャーベット"},
        {id:'t4', name:"チョコミント"},
        {id:'t5', name:"ストロベリー"},
        {id:'t6', name:"抹茶"}
    ],
    //すべてのアイスクリームオブジェクトを返す(getter)
    getAll: function() {
        return this.list;
    },
    //IDで指定したアイスクリームオブジェクトを返す
    findById: function(id) {
        return $.grep(this.list,function(val) {
                          return id == val.id;
                      })[0];
    }
};

//MODEL: 選択されているアイスクリームの管理
var selectionModel = {
    
    //選択されているアイスクリームが入る
    list: [],
    //アイスクリームの個数
    icecreamNumber: 2,
    
    //アイスクリームを追加する
    add: function(item) {
        var list = this.list;
        list.push(item);
        if (list.length > this.icecreamNumber) { //アイスクリーム制限個数以上の場合は
            list.shift(); //0番目を捨てる
        }
        this.updateViews(); //Viewを更新
    },
    
    //アイスクリームをクリアする
    clear: function() { 
        this.list = [];
        this.updateViews();
    },
    
    //指定したアイスクリームが選択されていれば true が返る
    contain: function(icecream) {
        return this.list.indexOf(icecream) >= 0;
    },
    
    //IDで指定したアイスクリームが選択されていれば true が返る
    containById: function(id) {
        return this.contain(icecreamModel.findById(id));
    },

    //選択されているアイスクリームを返す（getter）
    getIcecreams: function() {
        return this.list;
    },
    
    //Viewを更新する
    updateViews: function() {
        updateSelection();
        updateIcecreamList();
    }
};

//VIEW: 選択一覧を更新するView
function updateSelection() {
    $('#icecreams input[type="checkbox"]').each(
        function(i,elm) {
            elm.checked = selectionModel.containById( elm.name );
        });
}

//VIEW: チェックボックスを更新するView
function updateIcecreamList() {
    $("#icecream-list").text( 
        $.map(selectionModel.getIcecreams(),
              function(val) {
                  return val.name;
              }).join(" > "));
}

//CONTROLLER: GUIのイベントからModelの更新に変換
function onclickIcecream(event) {
    var checkbox = $(event.currentTarget).find("input[type='checkbox']");
    if (checkbox) {
        selectionModel.add(icecreamModel.findById(checkbox.attr("name")));
    }
}

//アイスクリーム一覧を構築してイベントを追加する
$(function () {
    var els = $('#icecreams');
      $.each(icecreamModel.getAll(), 
           function(i, icecream) {
               els.append(
                   $("<li>")
                       .append($("<input type='checkbox'>")
                               .attr('name', icecream.id))
                       .append($("<span>")
                               .text(icecream.name))
                       .click(function(event) {
                                  //Controller呼び出し
                                  onclickIcecream(event);
                              }));
        });
      selectionModel.updateViews();
      
      $("#clear-button").click(function() { selectionModel.clear(); });
  });

//////////////////////////////////////////////////
// モデルのテスト

//簡単なテストチェック関数
function ok(title,expect,value) {
    if (expect !== value) {
        console.log("NG : "+title+" ["+expect+"] --> ["+value+"]");
    } else {
        console.log("OK : "+title);
    }
}

//テスト内容
function testModels() {
    var all = icecreamModel.getAll();

    ok("icecreamModel:個数",all.length,6);
    ok("icecreamModel.findById",icecreamModel.findById("t4"),all[3]);

    ok("selectionModel:最初の個数",selectionModel.getIcecreams().length,0);
    ok("selectionModel.contain:空の場合",false,selectionModel.contain(all[0]));

    selectionModel.add(all[0]);
    ok("selectionModel:1つ目を追加した時の個数",selectionModel.getIcecreams().length,1);
    ok("selectionModel.contain:1つ目を追加した時のチェック",true,selectionModel.contain(all[0]));

    selectionModel.add(all[1]);
    ok("selectionModel:2つ目を追加した時の個数",selectionModel.getIcecreams().length,2);
    ok("selectionModel.contain:2つ目を追加した時のチェック",true,selectionModel.contain(all[1]));

    selectionModel.add(all[2]);
    ok("selectionModel:3つ目を追加した場合の",selectionModel.getIcecreams().length,2);
    ok("selectionModel.contain:3つ目を追加した時のチェック",true,selectionModel.contain(all[2]));
    ok("selectionModel.contain:3つ目を追加したら最初のものは消える",false,selectionModel.contain(all[0]));
    
    selectionModel.clear();
    ok("selectionModel:選択クリア",selectionModel.getIcecreams().length,0);
}

testModels();
