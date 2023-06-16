$(document).ready(function () {
  let subjects = $(".subject");
  let modal = $("#subjectModal");
  subjects.click(function () {
    modal.modal("show");
    let subjectId = $(this).attr("data-id");
    let subjectName = $(this).attr("data-name");
    console.log(subjectName);
  });
});
