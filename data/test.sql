/* SQL Manager for MySQL                              5.7.2.52112 */
/* -------------------------------------------------------------- */
/* Host     : localhost                                           */
/* Port     : 3306                                                */
/* Database : test                                                */


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES 'utf8' */;

SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE `test`
    CHARACTER SET 'utf8'
    COLLATE 'utf8_general_ci';

USE `test`;

/* Structure for the `websites` table : */

CREATE TABLE `websites` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `name` CHAR(20) COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '站点名称',
  `url` VARCHAR(255) COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `alexa` INTEGER(11) NOT NULL DEFAULT 0 COMMENT 'Alexa 排名',
  `country` CHAR(10) COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '国家',
  PRIMARY KEY USING BTREE (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=37 ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'
;

/* Data for the `websites` table  (LIMIT 0,500) */

INSERT INTO `websites` (`id`, `name`, `url`, `alexa`, `country`) VALUES
  (1,'九重天','www.jiuchongtian.com',500,'中国'),
  (2,'google','www.google.com',240,'美国'),
  (3,'阿里巴巴','www.alibaba.com',210,'中国'),
  (4,'百度','www.baidu.com',210,'中国');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;