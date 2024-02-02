const express=require("express")
const mongoose=require("mongoose")
const app =express()
app.use(express.json())
const router=require("./route/route")


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://RameshwarJay:RUlNC8QtlA8A91jX@rameshwarnavathar.dujri1m.mongodb.net/")

.then(()=>{console.log("Database is Conected * !")})
.catch((err)=>{console.log(err)})

app.use("/",router)

app.listen(4000,function(){
    console.log("Server is Start * !"+4000)
})
  