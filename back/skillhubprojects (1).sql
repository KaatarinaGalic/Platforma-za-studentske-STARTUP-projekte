-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2024 at 02:28 PM
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
-- Database: `skillhubprojects`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `ID_korisnika` int(11) NOT NULL,
  `ime` varchar(25) NOT NULL,
  `prezime` varchar(25) NOT NULL,
  `email` varchar(64) NOT NULL,
  `lozinka` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`ID_korisnika`, `ime`, `prezime`, `email`, `lozinka`) VALUES
(1000, 'Ivan', 'Horvat', 'ivan.horvat@gmail.com', 'ivan123lozinka'),
(1256, 'Ana', 'Kosir', 'ana.kosir@gmail.com', 'ana123lozinka'),
(1458, 'Marko', 'Mlikota', 'marko.mlikota@gmail.com', 'marko123lozinka'),
(1485, 'Ivana', 'Novak', 'ivana.novak@gmailcom', 'ivana123lozinka'),
(1753, 'test', 'test1', 'mail', 'passwd'),
(1754, 'John', 'Doe', 'john.doe@example.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `prijava`
--

CREATE TABLE `prijava` (
  `ID_prijave` int(11) NOT NULL,
  `ID_korisnika` int(11) NOT NULL,
  `ID_projekta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prijava`
--

INSERT INTO `prijava` (`ID_prijave`, `ID_korisnika`, `ID_projekta`) VALUES
(500, 1000, 103),
(501, 1256, 104),
(502, 1458, 109),
(503, 1485, 122);

-- --------------------------------------------------------

--
-- Table structure for table `projekt`
--

CREATE TABLE `projekt` (
  `ID_projekta` int(11) NOT NULL,
  `naziv` varchar(50) NOT NULL,
  `slika_url` varchar(255) NOT NULL,
  `Datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projekt`
--

INSERT INTO `projekt` (`ID_projekta`, `naziv`, `slika_url`, `Datum`) VALUES
(100, 'Budget Tracker', 'https://play-lh.googleusercontent.com/HS4tTLPOdT5lr9xS7DxsDZCd942KgyOYUHQ8GprU51kKeRopqjQ3smDaLMV5EoVXNw=w526-h296-rw', '2024-08-01'),
(101, 'Travel Agency System', 'https://www.crmjetty.com/wp-content/uploads/2021/02/Online_Travel_Portal_The_Future_of_Travel_Business-F.png', '2024-09-01'),
(102, 'Online Healthcare Consultation Platform', 'https://us.123rf.com/450wm/artinspiring/artinspiring2103/artinspiring210300262/164856815-pediatrician-online-service-or-platform-set-doctor-examining-a-child.jpg?ver=6', '2024-10-01'),
(103, 'Coding Platform for Modern Applications', 'https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png', '2024-05-01'),
(104, 'Webwave Platform React', 'https://cdn.appsfomo.com/wp-content/uploads/2022/11/Webwave-featured-image.png', '2023-12-22'),
(105, 'Gaming Community Platform', 'https://media.licdn.com/dms/image/D4D12AQHFQpu3jU6_TA/article-cover_image-shrink_600_2000/0/1685282685141?e=2147483647&v=beta&t=83dIvdHOPaOZ-XCrhkztmM0qHox_B8rXIGJA1MHzlZU', '2024-08-02'),
(106, 'Weather Forecasting App', 'https://cdn.dribbble.com/userupload/4850232/file/original-af34380af4823ea9da1a4cc1c0c24684.png?resize=752x', '2024-09-02'),
(107, 'Cryptocurrency Wallet', 'https://t3.ftcdn.net/jpg/02/39/50/30/240_F_239503004_ByNsatpxpDpTDVtEzWYUGM4SmGlbMJzN.jpg', '2024-10-02'),
(108, 'Network Intrusion Detection System', 'https://bleuwire.com/wp-content/uploads/2018/12/network-intrusion-detection-system.jpg', '2024-11-02'),
(109, 'Personal Blog Platform', 'https://www.vouchsolutions.com/blog/wp-content/uploads/2019/06/Best-15-Free-Blog-Sites-for-Creating-Quick-Personal-Blogs-1300x530.jpg', '2024-02-02'),
(110, 'Fitness Community App', 'https://trafft.com/wp-content/uploads/2021/02/nike-training.jpg', '2024-08-03'),
(111, 'Local Service Finder', 'https://localservicefinder.net/wp-content/uploads/2022/03/31958-scaled.jpg', '2024-09-03'),
(112, 'Home Automation System', 'https://miro.medium.com/v2/resize:fit:1400/1*eumNIzPYyE8X7On5iM02Hw.jpeg', '2024-10-03'),
(113, 'Virtual Reality Tour App', 'https://rockpaperreality.com/wp-content/uploads/AR-in-Travel-and-Tourism.jpg', '2024-11-03'),
(114, 'Fashion Blog', 'https://www.blueangel.host/blog/wp-content/uploads/2017/12/fashion-blog-1024x585.webp', '2024-12-03'),
(115, 'Online Examination System', 'https://www.syntacticsinc.com/wp-content/uploads/2021/12/ONLINE-EXAMINATION-SYSTEMS_-ITS-FEATURES-AND-BENEFITS.jpg', '2024-08-04'),
(116, 'Event Ticketing System', 'https://i.pinimg.com/736x/13/66/36/1366368c55fe3dca5a392aff7455b061.jpg', '2024-09-04'),
(117, 'Sports News Portal', 'https://leaguelane.com/wp-content/uploads/2024/03/The-art-of-betting-on-football.webp', '2024-10-04'),
(118, 'Restaurant Reservation System', 'https://www.altexsoft.com/media/2019/01/restaurant-reservation-software-1.png', '2024-11-04'),
(119, 'E-library', 'https://t3.ftcdn.net/jpg/06/08/83/64/360_F_608836456_mHSejPSpYbKVdlNJR6JZebSygodG7awY.jpg', '2024-12-04'),
(120, 'Photo Sharing Network', 'https://www.secureverifyconnect.info/sites/default/files/2022-02/57_Online-File-Sharing-01.png', '2024-08-05'),
(121, 'Recipe Sharing App', 'https://cdn.dribbble.com/users/1191138/screenshots/11518039/homepage_2x_2x_4x.png', '2024-09-05'),
(122, 'Vote Online', 'https://cacm.acm.org/wp-content/uploads/2019/09/081919_Getty_Online-Voting.jpg?w=250', '2024-01-05'),
(123, 'Pixel Portal', 'https://cdn1.epicgames.com/ue/product/Screenshot/Screenshot0-1920x1080-f726a9fa18653c644d7eac167073c75b.jpg?resize=1&w=1920', '2024-11-05'),
(124, 'Web Pulse Platform', 'https://www.pulsesoftware.com/wp-content/uploads/2021/05/Pulse-Software-Learning-Module-1-e1622768859623.png', '2024-12-05'),
(125, 'Online Quiz Platform', 'https://images.prismic.io/edapp-website/NzZmYTljYzktYTNmMS00YTM2LThhZjgtOTBlY2MwM2Y0ZWY0_online_quiz_platforms_-_edapp.png?auto=format,compress', '2024-08-06'),
(126, 'Training Zone App', 'https://miro.medium.com/v2/resize:fit:808/1*8Ck-Kot2ztVHD3uyq1gkfQ.png', '2024-09-06');

-- --------------------------------------------------------

--
-- Table structure for table `projekt_tehnologija`
--

CREATE TABLE `projekt_tehnologija` (
  `ID_pro_tehn` int(11) NOT NULL,
  `ID_projekta` int(11) NOT NULL,
  `ID_tehnologije` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projekt_tehnologija`
--

INSERT INTO `projekt_tehnologija` (`ID_pro_tehn`, `ID_projekta`, `ID_tehnologije`) VALUES
(201, 100, 1),
(202, 100, 2),
(203, 100, 15),
(204, 101, 1),
(205, 101, 26),
(206, 101, 18),
(207, 101, 31),
(208, 102, 29),
(209, 102, 26),
(210, 102, 18),
(211, 102, 30),
(212, 103, 24),
(213, 103, 4),
(214, 103, 18),
(215, 104, 3),
(216, 104, 5),
(217, 105, 3),
(218, 105, 4),
(219, 105, 6),
(220, 106, 21),
(221, 106, 11),
(222, 106, 31),
(223, 107, 4),
(224, 107, 24),
(225, 107, 3),
(226, 108, 1),
(227, 108, 2),
(228, 108, 6),
(229, 109, 7),
(230, 109, 8),
(231, 109, 9),
(232, 110, 10),
(233, 110, 11),
(234, 111, 10),
(235, 111, 4),
(236, 111, 11),
(237, 112, 4),
(238, 112, 20),
(239, 112, 6),
(240, 113, 12),
(241, 113, 13),
(242, 113, 32),
(243, 114, 8),
(244, 114, 9),
(245, 115, 7),
(246, 115, 22),
(247, 115, 18),
(248, 116, 19),
(249, 116, 3),
(250, 116, 18),
(251, 117, 14),
(252, 117, 24),
(253, 117, 16),
(254, 118, 5),
(255, 118, 17),
(256, 118, 18),
(257, 119, 14),
(258, 119, 24),
(259, 119, 16),
(260, 120, 3),
(261, 120, 20),
(262, 120, 6),
(263, 121, 23),
(264, 121, 24),
(265, 121, 18),
(266, 122, 23),
(267, 122, 5),
(268, 122, 9),
(269, 123, 25),
(270, 123, 26),
(271, 123, 28),
(272, 124, 7),
(273, 124, 17),
(274, 124, 9),
(275, 125, 3),
(276, 125, 20),
(277, 125, 6),
(278, 126, 27),
(279, 126, 11);

-- --------------------------------------------------------

--
-- Table structure for table `tehnologija`
--

CREATE TABLE `tehnologija` (
  `ID_tehnologije` int(11) NOT NULL,
  `naziv` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tehnologija`
--

INSERT INTO `tehnologija` (`ID_tehnologije`, `naziv`) VALUES
(1, 'Java'),
(2, 'Spring Boot'),
(3, 'React'),
(4, 'Node.js'),
(5, 'Vue.js'),
(6, 'MongoDB'),
(7, 'PHP'),
(8, 'WordPress'),
(9, 'MySQL'),
(10, 'Swift'),
(11, 'Firebase'),
(12, 'Unity'),
(13, 'C#'),
(14, 'ASP.NET'),
(15, 'OracleDB'),
(16, 'Microsoft SQL Server'),
(17, 'Laravel'),
(18, 'PostgreSQL'),
(19, 'Django'),
(20, 'Express.js'),
(21, 'Kotlin'),
(22, 'Symfony'),
(23, 'Ruby on Rails'),
(24, 'Angular'),
(25, 'HTML/CSS'),
(26, 'Javascript'),
(27, 'Flutter'),
(28, 'Adobe Photoshop'),
(29, 'Python'),
(30, 'Figma'),
(31, 'Git'),
(32, 'Flask');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`ID_korisnika`);

--
-- Indexes for table `prijava`
--
ALTER TABLE `prijava`
  ADD PRIMARY KEY (`ID_prijave`),
  ADD KEY `FK5` (`ID_korisnika`),
  ADD KEY `FK6` (`ID_projekta`);

--
-- Indexes for table `projekt`
--
ALTER TABLE `projekt`
  ADD PRIMARY KEY (`ID_projekta`);

--
-- Indexes for table `projekt_tehnologija`
--
ALTER TABLE `projekt_tehnologija`
  ADD PRIMARY KEY (`ID_pro_tehn`),
  ADD KEY `FK` (`ID_projekta`),
  ADD KEY `FK1` (`ID_tehnologije`);

--
-- Indexes for table `tehnologija`
--
ALTER TABLE `tehnologija`
  ADD PRIMARY KEY (`ID_tehnologije`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `ID_korisnika` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1755;

--
-- AUTO_INCREMENT for table `prijava`
--
ALTER TABLE `prijava`
  MODIFY `ID_prijave` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504;

--
-- AUTO_INCREMENT for table `projekt`
--
ALTER TABLE `projekt`
  MODIFY `ID_projekta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `projekt_tehnologija`
--
ALTER TABLE `projekt_tehnologija`
  MODIFY `ID_pro_tehn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- AUTO_INCREMENT for table `tehnologija`
--
ALTER TABLE `tehnologija`
  MODIFY `ID_tehnologije` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `prijava`
--
ALTER TABLE `prijava`
  ADD CONSTRAINT `FK5` FOREIGN KEY (`ID_korisnika`) REFERENCES `korisnik` (`ID_korisnika`),
  ADD CONSTRAINT `FK6` FOREIGN KEY (`ID_projekta`) REFERENCES `projekt` (`ID_projekta`);

--
-- Constraints for table `projekt_tehnologija`
--
ALTER TABLE `projekt_tehnologija`
  ADD CONSTRAINT `FK` FOREIGN KEY (`ID_projekta`) REFERENCES `projekt` (`ID_projekta`),
  ADD CONSTRAINT `FK1` FOREIGN KEY (`ID_tehnologije`) REFERENCES `tehnologija` (`ID_tehnologije`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
