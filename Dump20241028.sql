-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: roldb
-- ------------------------------------------------------
-- Server version	8.4.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `eventId` int NOT NULL AUTO_INCREMENT,
  `book` varchar(75) NOT NULL,
  `Campaign` varchar(150) NOT NULL,
  `description` longtext,
  `date` date NOT NULL,
  `location` varchar(250) NOT NULL,
  `duration` varchar(45) NOT NULL,
  `dungeonMaster` varchar(65) NOT NULL,
  `userIdCreator` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`eventId`),
  UNIQUE KEY `idEvento_UNIQUE` (`eventId`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Dungeon&Dragons','El bosque sombrío','Una aventura para encontrar un artefacto en un bosque maldito.','2025-01-01','Calle de Alcalá, 45, Madrid','Campaña(6d)','Paqui laraña',56),(2,'Call of Cthulhu','Los susurros en la noche','Investigadores descubren extrañas actividades en una mansión.','2025-02-02','Calle Mayor, 12, Madrid','Aventura Corta(2d-6d)','Manolo el mandador',1),(3,'Pathfinder','La fortaleza olvidada','Los héroes deben liberar una fortaleza de un hechicero oscuro.','2025-02-04','Gran Vía, 30, Madrid','Campaña(6d)','Jai el silencioso',1),(4,'Vampire the Masquerade','Sangre y sombras','Una intriga vampírica enfrenta a antiguos clanes.','2024-05-06','Plaza de España, 5, Madrid','One Shot(1d)','Lorenz de Arasia',1),(5,'La leyenda de los cinco anillos','Honor y venganza','Los samuráis deben restaurar el honor de su clan.','2024-05-08','Calle de Serrano, 42, Madrid','Aventura Corta(2d-6d)','Juancho',1),(6,'Dungeon&Dragons','La isla perdida','Exploración en una isla repleta de criaturas y misterios.','2024-06-10','Calle de Atocha, 15, Madrid','One Shot(1d)','Lorenz de Arasia',61),(7,'Call of Cthulhu','El enigma de los ancestros','Un pueblo vive aterrado por fenómenos inexplicables.','2024-07-12','Calle del Prado, 8, Madrid','Campaña(6d)','Paqui laraña',61),(8,'Pathfinder','El templo de la serpiente','Los héroes deben detener un mal ancestral en un templo sagrado.','2024-09-14','Calle de San Bernardo, 60, Madrid','Aventura Corta(2d-6d)','Manolo el mandador',1),(9,'Vampire the Masquerade','La mascarada rota','Vampiros luchan por el control de la ciudad.','2024-01-16','Calle de Fuencarral, 18, Madrid','Campaña(6d)','Jai el silencioso',1),(10,'La leyenda de los cinco anillos','La senda del samurái','Un grupo de samuráis debe defender sus tierras.','2024-03-18','Plaza Mayor, 1, Madrid','One Shot(1d)','Juancho',1),(11,'Dungeon&Dragons','El abismo oscuro','Una misión para salvar un pueblo de una maldición.','2024-08-20','Calle de Hortaleza, 40, Madrid','Aventura Corta(2d-6d)','Jai el silencioso',1),(12,'Call of Cthulhu','Los horrores del abismo','Investigadores enfrentan fuerzas cósmicas en la ciudad.','2024-09-22','Calle de Preciados, 25, Madrid','Campaña(6d)','Juancho',61),(13,'Pathfinder','La leyenda del rey sin trono','Los héroes luchan contra tiranos en un reino.','2024-09-24','Calle de Cuchilleros, 5, Madrid','One Shot(1d)','Lorenz de Arasia',1),(14,'Vampire the Masquerade','Noche de venganza','Una historia de traición en el submundo vampírico.','2024-09-26','Calle de Toledo, 32, Madrid','Aventura Corta(2d-6d)','Paqui laraña',56),(15,'La leyenda de los cinco anillos','El juicio del emperador','Samuráis compiten para ganar el favor del emperador.','2024-09-28','Calle de Lavapiés, 20, Madrid','Campaña(6d)','Manolo el mandador',61),(16,'Dungeon&Dragons','Las ruinas prohibidas','Una antigua ciudad esconde secretos y peligros.','2024-10-01','Paseo del Prado, 10, Madrid','Campaña(6d)','Manolo el mandador',1),(17,'Call of Cthulhu','El misterio del hospital','Un antiguo hospital tiene rumores de eventos paranormales.','2024-10-02','Calle de la Princesa, 38, Madrid','Aventura Corta(2d-6d)','Jai el silencioso',61),(18,'Pathfinder','Los defensores de la arboleda','Una amenaza surge en un bosque que debe ser protegido.','2024-10-26','Calle de Embajadores, 22, Madrid','One Shot(1d)','Paqui laraña',56),(19,'Vampire the Masquerade','Almas en la sombra','La política vampírica se vuelve aún más mortal.','2024-10-27','Calle de Argumosa, 16, Madrid','Campaña(6d)','Juancho',1),(20,'La leyenda de los cinco anillos','La noche de los espíritus','Los samuráis enfrentan espíritus en su tierra.','2024-11-29','Calle del Doctor Cortezo, 10, Madrid','Aventura Corta(2d-6d)','Lorenz de Arasia',1),(21,'Dungeon&Dragons','La torre perdida','Una torre mística guarda secretos y poder.','2024-11-29','Calle de Leganitos, 12, Madrid','One Shot(1d)','Lorenz de Arasia',1),(22,'Call of Cthulhu','La llamada del vacío','Algo oscuro despierta en una ciudad costera.','2024-11-12','Calle del Desengaño, 3, Madrid','Aventura Corta(2d-6d)','Juancho',1),(23,'Pathfinder','Los héroes de la ciudadela','Una amenaza surge en una fortaleza abandonada.','2024-11-14','Calle de la Montera, 27, Madrid','Campaña(6d)','Manolo el mandador',1),(24,'Vampire the Masquerade','Bajo el velo de la noche','Un enfrentamiento sobre la comunidad de vampiros.','2024-11-16','Calle de Santa Isabel, 40, Madrid','Aventura Corta(2d-6d)','Jai el silencioso',1),(25,'La leyenda de los cinco anillos','El reto del shogun','Samuráis deben superar desafíos para demostrar su valor.','2024-12-18','Calle de Conde de Romanones, 8, Madrid','One Shot(1d)','Paqui laraña',56);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(15) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId_UNIQUE` (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jaime','$2b$08$JaU/oslqT0TVtF4w.sAYquU7e89syQkELPsyInJ886QAJFZzrmxnG','admin'),(54,'Camila','$2b$08$GzaON9BetTu.6QqnNfg.auY6BEzT6SZ50.TCmq1UBGa4fUuIS0UxS','regular'),(55,'Jose Alfredo Jimenez','$2b$08$gc.1LrcT.MaaZS/nrC8ob.hfvPX5AsTC9bTujE9UoBGiPEpoctmPm','regular'),(56,'Paquita','$2b$08$usURznMK3tn8AaqupLa1E.p.bb6RUSMpH9abJUlIQjXb2rvvZfUsC','admin'),(57,'Eustaquio','$2b$08$vWnwPF.wXoaJqHWfpiBJouQpEdqTZCI1rHEgGWsCfeNNVmpQhuePy','regular'),(58,'Demetrio','$2b$08$OxkvGifUBcZzEVbQTUqv.esCk.oGzcyy5vWE2hLf4GTEQibhTtD/G','regular'),(59,'Patricio','$2b$08$0GlgHJSa/aXBnmwFGUr2hucYZmXtWcOA6aUKIuAlH7ifOqNtkCeje','regular'),(60,'Manuela','$2b$08$VIZdneBRWTheqCRpRQ2WGuHiomYH7DaH9lWWsv1DBD8QtxJlRdwxy','regular'),(61,'Neil','$2b$08$NHO5bSgQBGImmu8BXBbyXO8oN7tQEDADKf1pXG6ymhAJ1aZPxhBBC','admin'),(74,'Dddddd','$2b$08$9m8TdgbdoM2eV6t5OKrSvOT55FbAebmoJ8EdEx.R2azMdTv7xoHtC','regular');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-28 18:32:41
