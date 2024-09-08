// function toggleShowMore() {
//     const about =  document.getElementById("showMoreText")
//     const btn = document.getElementById ("moreBtn")
//     if (about.style.display === "none" || about.style.display === "") {
//         about.style.display  = "none";
//         btn.innerHTML  = "Read More..."
//     }else{
//         about.style.display = "inline";
//         btn.innerHTML =  " Readless";
//     }
// }

function toggleShowMore() {
  const content = document.getElementById("readMoreContent");
  const toggleText = document.getElementById("readMoreToggle");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "inline";
    toggleText.innerHTML = "Read Less...";
  } else {
    content.style.display = "none";
    toggleText.innerHTML = "Read More...";
  }

  function openModal() {
    document.getElementById("testimonialModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("testimonialModal").style.display = "none";
  }
}
