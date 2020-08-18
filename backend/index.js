const express=require('express')
const app=express();
app.use(express.json())
const PORT=process.env.PORT || 5000

app.post('/',(request,response)=>{
    try{
        const num1=parseInt(request.body.num1)
        const num2=parseInt(request.body.num2)
        const sum=num1+num2;
        response.status(200).send({sum})
    }catch(error){
        return response.sendStatus(500)
    }
})


app.get('/',(request,response)=>{
    response.sendStatus(200).send("Backend is working properly.")
})

app.listen(PORT,()=>{
    console.log("Backend is running at port 5000")
})