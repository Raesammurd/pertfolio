// Skills
// $('.skills').waypoint(function () {
//   $('.progress .progress-bar').each(function () {
//       $(this).css("width", $(this).attr("aria-valuenow") + '%');
//   });
// }, {offset: '80%'});


const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach(progressBar => {
  const progressValue = progressBar.parentNode.previousElementSibling.querySelector("p:last-child").textContent.trim();
  progressBar.style.width = progressValue + "%";
});
