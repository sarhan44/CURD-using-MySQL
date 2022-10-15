const connection = require('../DB/connection')

// ===========[ New Violation ]=============
const create = (req, res) => {
    let { licensePlateNumber, violationType, violationstatus, violationDate, violationTime, violationLocation, videoUrl } = req.body
    //query- insert data in table
    var query = "insert into violation (licensePlateNumber,violationType,violationStatus,violationDate,violationTime,violationLocation,videoUrl) values(?,?,?,?,?,?,?)";
    //pass query parameters
    connection.query(query, [licensePlateNumber, violationType, violationstatus, violationDate, violationTime, violationLocation, videoUrl ], (err, results) => {

        if (!err) {
            //if not error send response massage
            return res.status(201).send({ message: 'new violation added successfully' })
        } else {
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    });

}

// ===========[ Get All Violation Data ]===========
const read = (req, res) => {
    //query- read data from table
    var query = 'select * from violation';
    connection.query(query, (err, results) => {
        if(!err){
            return res.status(200).send({ message: 'violation List', data: results });
        }else{
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    })
}

// ===========[ Update Violation Data ]===========
const update = (req, res) => {
    let id = req.params.id
    let { licensePlateNumber,violationType,violationstatus,violationDate,violationTime,violationLocation,videoUrl } = req.body
    // query- update table
    var query = "update violation set licensePlateNumber=?,violationType=?,violationStatus=?,violationDate=?,violationTime=?,violationLocation=?,videoUrl=? where id=?";
    
    connection.query(query, [licensePlateNumber,violationType,violationstatus,violationDate,violationTime,violationLocation,videoUrl,id], (err, results) => {

        if (!err) {
            if(results.affectedRows==0){
                return res.status(404).send({ message: 'violation id does not found' })
            }
            return res.status(200).send({ message: 'violation data updated successfully' })
        } else {
            return res.status(500).send({ message: 'failed', error: err.message })
        }
    });

}

// ===========[ Delete Violation Data ]===========
const deleteData = (req, res) => {
    let id = req.params.id;
    // query- delete row from table
    var query = 'delete from violation where id=?';

    connection.query(query,[id], (err, results) => {
        if (!err) {
            if(results.affectedRows==0){
                return res.status(404).send({ message: 'violation id does not found' })
            }
            return res.status(200).send({ message: 'violation data deleted successfully' })
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