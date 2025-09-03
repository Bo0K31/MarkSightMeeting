const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    meeting_name: {
        type: String,
        require: true
    },
    
    appointment_id:{
        type: String,
        required: [true, 'Please add appointment ID'],
        trim: true,
        maxlength: [10, 'Appointment ID cannot be more than 10 characters']
    },
    // might need to add more field for zoom api call
    
    meeting_link:{
        type:String,
        required: true
    },

    createAt: {
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Meeting', meetingSchema);