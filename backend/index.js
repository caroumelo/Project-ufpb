import express, { response } from 'express'
import cors from 'express'
import admin from 'firebase-admin';



const app = express();
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
     }});



admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});
const db = admin.firestore();
const User = db.collection('pitSitters')

app.get('/pitSitters',(request,response) =>{
   
   
    admin.firestore()
    .collection('pitSitters')
    .get()
    .then(snapshot =>{ 
        const petSitters = snapshot.docs.map(doc=>(
        {
            ...doc.data(),
            uid: doc.id
        }))
        console.log('pitSitters',petSitters);
        response.json(petSitters)
    })
   
})


app.get('/pitSitters/:id',async (request,response)=>{
    try{
        const userRef = User.doc(request.params.id);
        const res = await userRef.get();
        response.send(res.data());

    }
    catch(error){
        response.send(error);
    }
})
app.put("/pitSitters/update/:id",async (request,response) =>{
    try{
        const id = request.params.id;
        delete request.body.id;
        const data = request.body;
        await User.doc(id).update(data);
       response.send({msg:"Updated"});
    }catch(error){
        response.send(error)
    }
    
    })
app.post('/pitSitters/create', async (request,response) =>{
    try{
        console.log(request.body);
        const data =  request.body;
        console.log('New USer',data); 
        await User.add(data)
        response.send({msg:'User add'});
    } catch(error){
        response.send(error);
    }
    
})

app.delete('/pitSitters/delete/:id', async(request,response) =>{
try{
    const id = request.params.id;
    console.log('id',id)
    await User.doc(id).delete();
   response.send({msg:"Deleted"});

    }catch(error){
        console.log('error',error)
        response.send(error);

    }
})



app.listen(3000,() => console.log('Api iniciada'));