const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb://localhost:27017/carRentalApp',
  {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  }
)
.then(
    ()=>{
        console.log('Mongodb connected successfully')
    }
)


}

connectDB()

module.exports = mongoose