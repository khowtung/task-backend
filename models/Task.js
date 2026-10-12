const mongoose = require('mongoose');

// 1. สร้างพิมพ์เขียว (Schema) คล้ายการสร้าง struct ในภาษา C
const taskSchema = new mongoose.Schema({
    // บังคับว่า title ต้องเป็นข้อความ และห้ามว่าง
    title: {
        type: String,
        required: true
    },

    // ระดับความสำคัญของงานที่ส่งมาจากหน้าบ้าน
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },

    // บังคับว่า completed ต้องเป็น true/false เท่านั้น
    // ถ้าไม่ส่งมาให้ตั้งค่าเป็น false อัตโนมัติ
    completed: {
        type: Boolean,
        default: false
    }
});

// 2. แปลงพิมพ์เขียวให้กลายเป็น Model (ชิ้นส่วนที่พร้อมใช้งาน)
const Task = mongoose.model('Task', taskSchema);

// 3. ส่งออกไปให้ไฟล์อื่น (เช่น server.js) เอาไปใช้งาน
module.exports = Task;
