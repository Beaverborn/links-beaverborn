function timedUpdate(currentDate = new Date()) {

  // Get all elements with the class "timed"
  // and store it in an array so that it doesn't update with the page
  const timedElementsLive = document.getElementsByClassName("timed");
  const timedElements = Array.from(timedElementsLive);
  
  // Get year value of the current date
  const currentYear = currentDate.getFullYear();

  // Iterate over elements to find ones that have the required attributes
  // and make visible if within the start and end dates
  for(let element of timedElements) {
    if(! element.hasAttribute("start-date") && element.hasAttribute("end-date")) {
      continue;
    }
    // Save these attributes as strings since they not be valid date format yet
    let startDate = element.getAttribute("start-date");
    let endDate = element.getAttribute("end-date");

    // Use current year to seed start and end dates if use-current-year attribute is present
    if(element.hasAttribute("use-current-year")) {
      startDate = currentYear + "-" + startDate;
      endDate = currentYear + "-" + endDate;
    }
    // Convert into Date objects now that format should be valid
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    // Check that current date is within range and make visible if so
    let isWithinTime = startDate <= currentDate && currentDate <= endDate;
    if(isWithinTime) {
      // The timed class hides the element - remove it to make visible on page
      element.classList.remove("timed");
    }
  };
  
}

document.addEventListener("DOMContentLoaded", timedUpdate());