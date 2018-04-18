-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 15, 2018 at 07:21 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs230`
--

-- --------------------------------------------------------

--
-- Table structure for table `reg`
--

CREATE TABLE `reg` (
  `username` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `fullName` varchar(80) NOT NULL,
  `userPassword` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reg`
--

INSERT INTO `reg` (`username`, `id`, `fullName`, `userPassword`) VALUES
('sean.kelly', 1, 'Sean Kelly', '2d5cf01f4abd91872d833cd573ce515f'),
('sean.kelly2', 2, 'Sean Connor', 'e10adc3949ba59abbe56e057f20f883e'),
('will1Am', 3, 'Willy Ford', 'eed8cdc400dfd4ec85dff70a170066b7'),
('coolrunnings', 4, 'Reggie Johnson', '0b4e7a0e5fe84ad35fb5f95b9ceeac79'),
('Greggo', 5, 'Gregory Smith', '074fd28eff0f5adea071694061739e55'),
('SeventhSon', 6, 'Sebastian Vettel', '79d886010186eb60e3611cd4a5d0bcae'),
('eric', 7, 'Christian Eriksen', 'f0e8fb430bbdde6ae9c879a518fd895f'),
('keano', 8, 'Roy Keane', 'f0e8fb430bbdde6ae9c879a518fd895f');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reg`
--
ALTER TABLE `reg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reg`
--
ALTER TABLE `reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
