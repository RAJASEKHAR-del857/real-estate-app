
const db = require('../config/db');

exports.getProperties = (req,res,next)=>{
  db.query("SELECT * FROM properties", (err,result)=>{
    if(err) return next(err);
    res.json(result);
  });
};
