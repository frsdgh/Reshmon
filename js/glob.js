/*   to disappear searchUser button in search while typing   */
// function disSearchUser() {
//   document.getElementById("userSearchBtn").style.display = "none";
// }

// function shoSearchUser() {
//   document.getElementById("userSearchBtn").style.display = "flex";
// }

// function displaySearchUser() {
//   userSearchBtn = document.getElementById("userSearchBtn");
//   if (userSearchBtn.style.display === 'none') {
//     userSearchBtn.style.display = 'flex'
//   } else {
//     userSearchBtn.style.display = 'none'
//   }
// }

function displaySearchUser() {
  document.getElementById("userSearchBtn").classList.toggle("disNone");
}

function appearLoading(value) {
  if (value == 0) {
    document.getElementById("appearLoading").style.display = "none";
    document.getElementById("conInputs").style.borderRadius = "8px";
  } else {
    document.getElementById("appearLoading").style.display = "block";
    document.getElementById("conInputs").style.borderRadius = "8px 8px 0 0";
    document.getElementById("wrapLoader").classList.add("loader");
  }
}