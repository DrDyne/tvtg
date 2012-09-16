$(function () {
  $('.delete-post').toggle(function (event) {
    $('#deletePost').animate({'margin-left':0});
  }, function (event) {
    $('#deletePost').animate({'margin-left':-73});
  });
});
