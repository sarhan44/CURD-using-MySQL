const connection = require('../DB/connection')

// ===========[ Create Vehicle Data ]===========
const create = (req, res) => {
    let { licensePlateNumber, manufacturerName, model, fuelType, ownerName, rc_status, vehicleColor, registrationDate, insuranceUpto, fitnessUpto, roadTaxUpto } = req.body
    //query- insert data in table
    var query = "insert into vehicle (licensePlateNumber,manufacturerName,model,fuelType,ownerName,rc_status,vehicleColor,registrationDate,insuranceUpto,fitnessUpto,roadTaxUpto) values(?,?,?,?,?,?,?,?,?,?,?)";
    //pass query parameters
    connection.query(query, [licensePlateNumber, manufacturerName, model, fuelType, ownerName, rc_status, vehicleColor, registrationDate, insuranceUpto, fitnessUpto, roadTaxUpto], (err, results) => {

        if (!err) {
            //if not error send response massage
            return res.status(201).send({ message: 'new vehical added successfully' })
        } else {
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    });

}

// ===========[ Get All Vehicle Data ]===========
const read = (req, res) => {
    //query- read data from table
    var query = 'select * from vehicle';
    connection.query(query, (err, results) => {
        if(!err){
            return res.status(200).send({ message: 'Vehicle List', data: results });
        }else{
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    })
}

// ===========[ Update Vehicle Data by Id ]===========
const update = (req, res) => {
    let id = req.params.id
    let { licensePlateNumber, manufacturerName, model, fuelType, ownerName, rc_status, vehicleColor, registrationDate, insuranceUpto, fitnessUpto, roadTaxUpto } = req.body
    // query- update table
    var query = "update vehicle set licensePlateNumber=?,manufacturerName=?,model=?,fuelType=?,ownerName=?,rc_status=?,vehicleColor=?,registrationDate=?,insuranceUpto=?,fitnessUpto=?,roadTaxUpto=? where id=?";
    
    connection.query(query, [licensePlateNumber, manufacturerName, model, fuelType, ownerName, rc_status, vehicleColor, registrationDate, insuranceUpto, fitnessUpto, roadTaxUpto,id], (err, results) => {

        if (!err) {
            if(results.affectedRows==0){
                return res.status(404).send({ message: 'Vehicle id does not found' })
            }
            return res.status(200).send({ message: 'vehical data updated successfully' })
        } else {
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    });

}

// ===========[ Delete Vehicle Data by Id ]===========
const deleteData = (req, res) => {
    let id = req.params.id;
    // query- delete row from table
    var query = 'delete from vehicle where id=?';

    connection.query(query,[id], (err, results) => {
        if (!err) {
            if(results.affectedRows==0){
                return res.status(404).send({ message: 'Vehicle id does not found' })
            }
            return res.status(200).send({ message: 'vehical data deleted successfully' })
        } else {
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    })
}

//====( Exports )========
module.exports.create = create; 
module.exports.read = read; 
module.exports.update = update; 
module.exports.deleteData = deleteData; 