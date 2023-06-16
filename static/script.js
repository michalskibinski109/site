$(document).ready(function () {
  let subjects = $(".subject");
  let modal = $("#subjectModal");
  subjects.click(function () {
    let subjectId = $(this).attr("id");
    populateModal(subjectId);
    $("#subjectModal").modal();
  });
});

let getData = () => {
  return $.getJSON("static/data.json");
};

const populateModal = (subjectId) => {
  getData().done((data) => {
    let subjectData = data[subjectId];
    let title = subjectData["title"];
    let description = subjectData["description"];
    let modalBodyData = "";

    for (let key in subjectData) {
      if (key !== "title" && key !== "description") {
        let element = `<a href="${subjectData[key]}" class="list-group-item ">${key}</a>`;
        modalBodyData += element;
      }
    }

    let modalTitle = $("#modalTitle");
    let modalBody = $("#modalBody");

    modalTitle.text(title);
    modalBody.html(modalBodyData);
    $("#modalDescription").text(description);

    // populate modal with data
  });
};
