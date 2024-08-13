# TUP Student Entry Logging System - Electives Project

## Project Description
This project was developed as a group requirement for the Electives subject, instructed by Minabelle Villafuerte, at the Technological University of the Philippines (TUP). It stems from the topic of Database Management Systems and aims to address the inefficiencies of the manual student attendance record system. The project provides a solution that automates the logging of students' entry into the school premises, allowing professors and guardians to track students' attendance more efficiently.

## Technologies Used
This program utilizes HTML, CSS, and SQL and was developed using Visual Studio Code. The database management is handled by XAMPP, which records and stores data for the project.

## Installation Instructions

1. **Clone or Download the Repository**:
   - Click on the "Code" button at the top right of this repository and choose either to clone the repository using GitHub Desktop or Bash by copying the link, or directly download the ZIP file by selecting "Download ZIP."

2. **Access the Project Files**:
   - Navigate to the directory where the project was cloned or extracted. Locate the `main.html` file. You can double-click this file if your operating system recognizes it, or manually drag it into your preferred web browser.

3. **Initialize XAMPP**:
   - Open the XAMPP Control Panel and activate the necessary modules: Apache, MySQL, and FileZilla.

4. **Grant Permissions**:
   - Upon running the project, allow the necessary permissions in your browser, such as access to the camera for the QR code scanner.

5. **Run the Program**:
   - Ensure you have an active internet connection to keep the scanner library operational. You can now run the program as intended.

## Usage
The interface is divided into two main sections:
- **Left Column**: Contains the QR code scanner and a "Clear" button.
- **Right Column**: Displays the output, including detailed student information and required fields for manual input if necessary.

### How to Use:
1. Align the QR code on the TUP ID with the camera to scan. Avoid sudden movements or obstructions that may interfere with the scanning process.
2. If the scanner fails to recognize the QR code, or if the ID is not available, students can manually enter their TUP ID number, entry type, location, college name, and department.
3. After submitting, the program will fetch the student’s information from the university’s database and display it on the screen. The logging information is then securely recorded in the university's database and remains confidential unless needed for priority purposes.

## Project Status
This project is complete.

## Developers
This program was developed by dedicated engineering students of TUP, section BET-CPET-3G STEM. Special recognition goes to Michael Angilo and Joey Boy for their wholehearted contributions to the project's completion.
