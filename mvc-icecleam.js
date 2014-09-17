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
            var checkbox = $(event.currentTarget).find("input[type='checkbox']");
            selectionModel.add(icecreamModel.findById(checkbox.attr("name")));

            var selectionText = $.map(selectionModel.getIcecreams(), function (val) {
              return val.name;
            }).join(" > ");

            $("#icecream-list").text(selectionText);
          })
      );
    }
  );
});
