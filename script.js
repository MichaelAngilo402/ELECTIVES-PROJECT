function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Pad single digits with leading zeros
    var formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    var day = now.getDate();
    var month = now.getMonth() + 1; // getMonth() returns 0-11, so add 1
    var year = now.getFullYear();
  
    // Format the date
    var formattedDate = `${month}/${day}/${year}`;
  
    // Combine date and time
    var dateTimeString = `${formattedDate} ${formattedTime}`;
  
    // Update the label
    document.getElementById('liveDateTimeLabel').textContent = dateTimeString;
  }
  
  // Call the function once to initialize
  updateTime();
  
  // Then, call it every second to update the time
  setInterval(updateTime, 1000);