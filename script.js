$(document).ready(function() {
  $('#example-enableCollapsibleOptGroups').multiselect({
    enableCollapsibleOptGroups: true
  });

  $('#example-enableCollapsibleOptGroups-new').multiselect({
    enableCollapsibleOptGroups: true
  });

  enhanceCollapsibleButton();
});

function enhanceCollapsibleButton() {
  $(
    '#example-enableCollapsibleOptGroups-new .multiselect-container .caret-container'
  ).addClass('open');
  $(
    '#example-enableCollapsibleOptGroups-new .multiselect-container .caret-container'
  ).click(function() {
    console.log(this);
    $(this).toggleClass('open close');
  });
}
