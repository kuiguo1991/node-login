/* SQL Manager for MySQL                              5.7.2.52112 */
/* -------------------------------------------------------------- */
/* Host     : localhost                                           */
/* Port     : 3306                                                */
/* Database : login                                               */


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES 'utf8' */;

SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE `login`
    CHARACTER SET 'utf8'
    COLLATE 'utf8_general_ci';

USE `login`;

/* Structure for the `user` table : */

CREATE TABLE `user` (
  `ID` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `USERNAME` VARCHAR(255) COLLATE utf8_general_ci NOT NULL,
  `AGE` TINYINT(4) NOT NULL,
  `PASSWORD` VARCHAR(12) COLLATE utf8_general_ci NOT NULL,
  `PHONE` VARCHAR(11) COLLATE utf8_general_ci NOT NULL,
  `EMAIL` VARCHAR(24) COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY USING BTREE (`ID`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'
;

/* Data for the `user` table  (LIMIT 0,500) */

INSERT INTO `user` (`ID`, `USERNAME`, `AGE`, `PASSWORD`, `PHONE`, `EMAIL`) VALUES
  (1,'隗果',27,'9999','15889604341','570515038@qq.com'),
  (2,'韩慧平',53,'8888','15889604341','570515038@qq.com'),
  (3,'隗仕理',52,'5555','15889604341','570515038@qq.com'),
  (4,'张三',120,'12222','15889604341','570515038@qq.com'),
  (5,'李四',20,'99999','15889604341','570515038@qq.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;