CREATE TABLE vehicle(
    id int NOT NULL AUTO_INCREMENT,
    licensePlateNumber varchar(255) NOT NULL,
    manufacturerName varchar(255) NOT NULL,
    model varchar(255) NOT NULL,
    fuelType varchar(255) NOT NULL,
    ownerName varchar(255) NOT NULL,
    rc_status varchar(255) NOT NULL,
    vehicleColor varchar(255) NOT NULL,
    registrationDate date DEFAULT NULL,
    insuranceUpto date NOT NULL,
    fitnessUpto date NOT NULL,
    roadTaxUpto date NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uq_lpNumber Unique (licensePlateNumber)
);