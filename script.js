//FUNCTION FOR THE CAMERAS
  let qrScanner = new Instascan.Scanner({
    video: document.getElementById('preview')
  });

  let barcodeScannerInitialized = false;

  function initializeBarcodeScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#preview"),
            constraints: {
                width: 640,
                height: 480,
            },
        },
        decoder: {
            readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader"],
        },
    }, function (err) {
        if (err) {
            console.error(err);
            return;
        }

        Quagga.start();
        barcodeScannerInitialized = true;
    });

    Quagga.onDetected(function (result) {
        const code = result.codeResult.code;
        document.getElementById('student-id').value = code;
        document.getElementById('beepSound').play();
    });
  }

  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        qrScanner.start(cameras[0]);
        initializeBarcodeScanner();
    } else {
        alert('No cameras found!');
    }
  }).catch(function (err) {
    console.error(err);
  });

  qrScanner.addListener('scan', function (content) {
    document.getElementById('student-id').value = content;
    document.getElementById('beepSound').play();
  });

  document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('student-id').value = '';
  });

//FUNCTION FOR FORMS
    //FUNCTION FOR FORMS    
    const form = document.getElementById('entry-form');
    const locationSelect = document.getElementById('location');
    const studentIdInput = document.getElementById('student-id');

    //Location selection
    const locationPrefixMap = {
      manila: 'TUPM',
      cavite: 'TUPC',
      taguig: 'TUPT',
      visayas: 'TUPV'
    };

    locationSelect.addEventListener('change', function() {
      const prefix = locationPrefixMap[locationSelect.value];
      const currentStudentId = studentIdInput.value;

      if (!currentStudentId.startsWith(prefix)) {
        studentIdInput.value = prefix;
      }
    });

    
    //Submit button function
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch('process.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if (data === "Connected successfully") {
          console.log("Database connection successful.");
        } else if (data.startsWith("New record created successfully")) {
          const modalMessage = `
            Successfully logged in.<br><br>
            Student ID: ${formData.get('student-id')}<br>
            Location: ${formData.get('location')}<br>
            College Name: ${formData.get('college-name')}<br>
            Department Name: ${formData.get('department-name')}<br>
            Entry Type: ${formData.get('entry-type')}
          `;
          showModal(modalMessage);
        } else {
          console.error("Error:", data);
        }
      })
      .catch(error => console.error('Error:', error));
      clearFormFieldsExceptEntryId();
    });

    function clearFormFieldsExceptEntryId() {
    const inputs = form.querySelectorAll('input[type="text"], select');
    inputs.forEach(input => {
        if (input.name!== 'entry-id') {
            input.value = ''; // Clear the input field
        }
    });
}
    //Entry ID function
    document.addEventListener('DOMContentLoaded', function() {
    // Generate a random entry ID when the page loads
    const entryIdInput = document.getElementById('entry-id');
    entryIdInput.value = generateRandomString();

    // Function to generate a random alphanumeric string
    function generateRandomString() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Update the entry ID when the form is submitted
    const form = document.getElementById('entry-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        entryIdInput.value = generateRandomString(); // Regenerate the entry ID
        // Continue with your existing form submission logic...
    });
});

    //Modal function
    function showModal(content) {
      const modal = document.getElementById('modal');
      const modalMessage = document.getElementById('modal-message');
      const closeBtn = document.querySelector('.modal .close');

      modalMessage.innerHTML = content;
      modal.style.display = 'block';

      closeBtn.onclick = function() {
        modal.style.display = 'none';
      };

      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }

// FUNCTION FOR DATE AND TIME
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