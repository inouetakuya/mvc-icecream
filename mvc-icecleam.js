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
          .click(function (event) {

            // どのアイスクリームにチェックを入れたのか取得する
            var checkbox = $(event.currentTarget).find("input[type='checkbox']");

            // チェックを入れたアイスクリームをセレクションに追加する
            selectionModel.add(icecreamModel.findById(checkbox.attr("name")));

            // セレクションを取得して、テキストを表示する
            var selectionText = $.map(selectionModel.getIcecreams(), function (icecream) {
              return icecream.name;
            }).join(" > ");

            $("#icecream-list").text(selectionText);
          })
      );
    }
  );
});
