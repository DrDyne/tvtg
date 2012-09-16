!$(function () {
  function bindDeletePostAnimation () {
    $('.delete-post').toggle(function (event) {
      $(this).parents('li').animate({'margin-right':'+=73'});
    }, function (event) {
      $(this).parents('li').animate({'margin-right':'-=73'});
    });
  }


  bindDeletePostAnimation();
});
