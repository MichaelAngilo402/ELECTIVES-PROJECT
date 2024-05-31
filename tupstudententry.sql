-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2024 at 12:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tupstudententry`
--

-- --------------------------------------------------------

--
-- Table structure for table `entry_logs`
--

CREATE TABLE `entry_logs` (
  `id` int(6) UNSIGNED NOT NULL,
  `entry_id` varchar(30) NOT NULL,
  `student_id` varchar(30) NOT NULL,
  `entry_type` varchar(10) NOT NULL,
  `location` varchar(30) NOT NULL,
  `college_name` varchar(30) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `entry_logs`
--

INSERT INTO `entry_logs` (`id`, `entry_id`, `student_id`, `entry_type`, `location`, `college_name`, `department_name`, `reg_date`) VALUES
(1, '1231412', '123123', 'in', 'manila', 'cit', 'engineering', '2024-05-30 08:05:48'),
(2, 'asdfasdfga', 'TUPM', 'in', 'manila', 'cit', 'food technology', '2024-05-30 08:23:57'),
(3, 'asdfasdfasdf', 'TUPV-34234', 'in', 'visayas', 'cla', 'techno', '2024-05-30 08:43:18'),
(4, 'asdfasdfasdf', 'TUPV', 'out', 'visayas', 'cafa', 'techno', '2024-05-30 08:47:27'),
(5, 'asdfasdf', 'TUPC', 'in', 'cavite', 'cit', 'asdfasdf', '2024-05-30 10:32:39'),
(6, 'asdfasdfasdf', 'TUPV', 'in', 'visayas', 'cit', 'asdfasdgy3ewrtwert', '2024-05-30 10:40:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entry_logs`
--
ALTER TABLE `entry_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entry_logs`
--
ALTER TABLE `entry_logs`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
