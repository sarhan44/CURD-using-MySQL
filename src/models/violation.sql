CREATE TABLE violation(
    id int NOT NULL AUTO_INCREMENT,
    licensePlateNumber varchar(255) NOT NULL,
    violationType varchar(255) NOT NULL,
    violationstatus enum('paid','unpaid') NOT NULL,
    violationDate date DEFAULT NULL,
    violationTime time NOT NULL,
    violationLocation varchar(255) NOT NULL,
    videoUrl varchar(255) NOT NULL,
    PRIMARY KEY (id)
);