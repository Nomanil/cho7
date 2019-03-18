DROP TABLE IF EXISTS etat_avancement, users, creation;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) UNIQUE NOT NULL COLLATE utf8_general_ci  ,
  password varchar(64) NOT NULL COLLATE utf8_general_ci,
  email varchar(254) NOT NULL COLLATE utf8_general_ci,
  presentation varchar(512) COLLATE utf8_general_ci,
  avatar varchar(200) COLLATE utf8_general_ci,
  role varchar(20) NOT NULL COLLATE utf8_general_ci
);

INSERT INTO users (username,password,email,role)
VALUES ('Admin','Admin','','ROLE_CREATEUR');

CREATE TABLE creation (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomfichier varchar(50) COLLATE utf8_general_ci,
  titre varchar(50) NOT NULL COLLATE utf8_general_ci,
  description varchar(2048) COLLATE utf8_general_ci,
  nbecoute int(11) DEFAULT 0,
  sommenotes int(11) DEFAULT 0,
  nbnote int(11) DEFAULT 0,
  miseajour DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO creation (nomfichier,titre,description)
VALUES 
  ('oui.mp3','oui','abc'),
  (null,'en cours','son avec des etats'),
  (null,'en cours 2',null),
  ('201mdi.mp3','un humour','efg');

CREATE TABLE etat_avancement (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  libelle varchar(50) NOT NULL COLLATE utf8_general_ci,
  valeuravancement int(11) DEFAULT 0,
  idcreation int(11), 
  FOREIGN KEY (idcreation) REFERENCES creation(id) ON DELETE CASCADE
);

INSERT INTO etat_avancement (libelle,valeuravancement,idcreation)
VALUES 
  ('avancement 1 1',10,2),
  ('avancement 2 1',3,2),
  ('avancement 1 2',0,3),
  ('avancement 2 2',40,3),
  ('avancement 3 2',97,3);