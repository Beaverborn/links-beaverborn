function timedUpdate(currentDate = new Date()) {
  const timedElementsLive = document.getElementsByClassName("timed");
  const timedElements = Array.from(timedElementsLive);
  for(let element of timedElements) {
    if(! element.hasAttribute("start-date") && element.hasAttribute("end-date")) {
      continue;
    }
    let startDate = new Date(element.getAttribute("start-date"));
    let endDate = new Date(element.getAttribute("end-date"))
    let isWithinTime = startDate <= currentDate && currentDate <= endDate;
    if(isWithinTime) {
      element.classList.remove("timed");
    }
  };
  
}

document.addEventListener("DOMContentLoaded", timedUpdate());