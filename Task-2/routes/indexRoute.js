const express = require('express');
const router = express.Router();
const labelModel=require('../model/label');
const taskModel=require('../model/task');


router.post('/create_label', function(req,res,next){

    labelModel.createLabel(req.body).then((labelData)=>{
        res.send(labelData);
    }).catch(err=>{
        res.send(err);
    })


});


router.delete('/delete_label/:id',function(req,res,next){
    labelModel.deleteLabel(req.params.id).then((data)=>{
        res.send("Successfully Deleted");
    }).catch(err=>{
        res.send(err);
    })
});


router.put('/update_label/:id',function(req,res,next){
    labelModel.editLabel(req.params.id,req.body).then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
});


router.post('/create_task', function(req,res,next){

    taskModel.createTask(req.body).then((taskData)=>{
        res.send(taskData);
    }).catch(err=>{
        res.send(err);
    })


});


router.delete('/delete_task/:id',function(req,res,next){
    taskModel.deleteTask(req.params.id).then((data)=>{
        res.send("Successfully Task Deleted ");
    }).catch(err=>{
        res.send(err);
    })
});


router.put('/update_task/:id',function(req,res,next){
    taskModel.editTask(req.params.id,req.body).then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
});



router.put('/move_task/:id',function(req,res,next){
    taskModel.editTask(req.params.id,req.body).then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
});

router.get('/gettask', function(req,res,next)
{
     taskModel.displaytask().then((taskData)=>
     { res.json({ task:taskData, status:true, msg:"successfully got task", }); })
.catch(err=>{ res.send(err); }) });
module.exports  = router;