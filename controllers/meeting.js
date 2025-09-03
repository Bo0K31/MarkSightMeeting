const Meeting = require('../models/meeting');

exports.getMeetings = async (req, res, next) => {
    try{
        const meetings = await Meeting.find()
        res.status(200).json({
            success: true, 
            count: meetings.length, 
            data: meetings
        });
    } catch(err){
        res.status(400).json({success:false});
    }
}

exports.createMeeting = async (req, res, next) => {
    const meeting = await Meeting.create(req.body)
    res.status(200).json({
        success: true, 
        data: meeting
    });
}

exports.updateMeeting = async (req,res,next)=>{
    try{
        const meeting = await Meeting.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true,
        });
        if(!meeting){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data: meeting});
    } catch(err){
        res.status(400).json({success:false});
    }
}

exports.deleteMeeting = async (req,res,next)=>{
    try{
        const meeting = await Meeting.findByIdAndDelete(req.params.id);
        if(!meeting){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data: {}});
    } catch(err){
        res.status(400).json({success:false});
    }
}