const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;

if (!dbURI) {
  throw new Error('ไม่พบค่า MONGO_URI ในไฟล์ .env หรือ Environment Variables');
}

mongoose
  .connect(dbURI)
  .then(() => console.log('เชื่อมต่อ MongoDB สำเร็จ'))
  .catch(error => {
    console.error('เชื่อมต่อ MongoDB ไม่สำเร็จ:', error.message);
    process.exit(1);
  });

module.exports = mongoose;
