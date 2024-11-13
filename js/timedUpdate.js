function timedUpdate(currentDate = new Date()) {
  const timedElements = document.getElementsByClassName("timed");
  for(let element of timedElements) {
    let startDate = new Date(element.getAttribute("start-date"));
    let endDate = new Date(element.getAttribute("end-date"))
    let isWithinTime = startDate <= currentDate && currentDate <= endDate;
    if(isWithinTime) {
      element.classList.remove("timed");
    }
  };
  
}

document.addEventListener("DOMContentLoaded", timedUpdate());