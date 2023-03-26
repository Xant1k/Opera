function save_options() {
  var select = document.getElementById("overall_whitelist");
  var whitelist = select.value;
  localStorage["overall_whitelist"] = whitelist;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var whitelist = localStorage["overall_whitelist"];
  if (!whitelist) {
    return;
  }
  var select = document.getElementById("overall_whitelist");
  select.value = whitelist;
}

(function () {
  restore_options();
}())

document.querySelector('#save').addEventListener('click', save_options);
