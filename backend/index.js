import express from 'express'
import cors from 'express'
import admin from 'firebase-admin';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
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
//salvando sem body
// app.post('/pitSitters/create', async (request,response) =>{
//     try{
//         console.log(request.body);
//         const data =  request.body;
//         console.log('New USer',data); 
//         await User.add(data) // só alterei essa linha, pq quando pesquisei, disse:  No Firebase, o método add espera um objeto diretamente, não um objeto com uma propriedade data. Então, em vez de User.add({data}), ficou User.add(data).mas não testei
//         response.send({msg:'User add'});
//     } catch(error){
//         response.send(error);
//     }
// })
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

app.delete('/pitSitters/delete', async(request,response) =>{
try{
    const id = request.body.id;
    console.log('id',id)
    await User.doc(id).delete();
   response.send({msg:"Deleted"});

    }catch(error){
        console.log('error',error)
        response.send(error);

    }
})
app.post("/pitSitters/update",async (request,response) =>{
    try{
        const id = request.body.id;
        console.log('id',id)
        delete request.body.id;
        const data = request.body;
        console.log("data",data)
        await User.doc(id).update(data);
       response.send({msg:"Updated"});
    }catch(error){
        response.send(error)
    }
    
    })


app.listen(3000,() => console.log('Api iniciada'));