/**
 * アイスクリーム一覧を構築してイベントを追加する
 */
$(function () {
  var els = $('#icecreams');

  $.each(icecreamModel.getAll(),
    function (i, icecream) {
      els.append($("<li>")
        .append($("<input type='checkbox'>").attr('name', icecream.id))
        .append($("<span>").text(icecream.name))
        .click(function () {
          // TODO: コントローラ呼び出し
        })
      );
    }
  );
});
