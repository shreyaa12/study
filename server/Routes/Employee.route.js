// Importing important packages
const express = require('express');

// Importing express and route
const app = express();
const employeeRoute = express.Router();

//Importing module employee for crud
let employeeModel = require('../model/Employee');

//fetch all the employees
employeeRoute.route('/').get( function (req,res){
    employeeModel.find(function(err,employee){
        if(err){
            console.log(err);
        }
        else{
            if(!employee){res.json("No Employee data found");}
            else{res.json(employee);}
        }
    });
});

//Get employeeBy id
employeeRoute.route('/:id').get( function(req,res){
    employeeModel.findById(req.params.id,function(err,employee){
        if(!employee){
            console.log(err);
        }
        else{
            res.json(employee);
        }
    })
})

//Add a employee
employeeRoute.route('/addEmp').post( function(req,res){
    let employee = new employeeModel(req.body);
    employee.save()
    .then( game => {
        res.status(200).json({'employee':'Employee added suuccessfully'})
    })
    .catch( err=> {res.satus(400).send("Something went wrong")
    });
});

//UPDATE EMPLOYEE
employeeRoute.route('/editEmp/:id').put(function(req, res){
    employeeModel.findById(req.params.id, function(err,employee){
        if(!employee){
            console.log(err);
            res.status(404).json("Employee with the id not found");
        }
        else{
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.email = req.body.email;
            employee.phone= req.body.phome;
            employee.save().then(
                res.status(200).json("Updated employee succcessfully")
            ).catch( err => {
                res.status(404).json("Employee data couldn't be updated!")
            })
        }    
    })
});

//Delete a record 

employeeRoute.route('/deleteEmp/:id').delete( function(req,res){
    employeeModel.findByIdAndDelete({_id:req.params.id},function(err,employee){
        if(err) res.json(err);
        else res.status(200).json("Employee deleted successfully")
    })
})




module.exports = employeeRoute;