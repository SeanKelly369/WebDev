-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 15, 2018 at 07:20 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdev`
--

-- --------------------------------------------------------

--
-- Table structure for table `Quiz_Results`
--

CREATE TABLE `Assignment4_Quiz` (
  `Name` varchar(80) NOT NULL,
  `Attempt` int(4) NOT NULL,
  `Score` varchar(4) NOT NULL,
  `dates` varchar(20) NOT NULL,
  `id` int(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Quiz_Results`
--

INSERT INTO `Quiz_Results` (`Name`, `Attempt`, `Score`, `dates`, `id`) VALUES
('Willy Ford', 1, '75%', '2018-03-15 18:04:08', 1),
('Reggie Johnson', 1, '65%', '2018-03-15 18:08:07', 2),
('Gregory Smith', 2, '80%', '2018-03-15 18:10:28', 3),
('Sebastian Vettel', 1, '25%', '2018-03-15 18:12:46', 4),
('Christian Eriksen', 1, '60%', '2018-03-15 18:15:19', 5),
('Roy Keane', 1, '100%', '2018-03-15 18:17:38', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Quiz_Results`
--
ALTER TABLE `Quiz_Results`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Quiz_Results`
--
ALTER TABLE `Quiz_Results`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
