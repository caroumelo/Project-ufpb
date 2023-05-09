import express, { response } from 'express';
import admin from 'firebase-admin';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))



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
app.post('/pitSitters/create', async (request,response) =>{
    try{
        console.log(request.body);
        const data =  request.body;
        console.log('New USer',data); 
        await User.add({data})
        response.send({msg:'User add'});
    } catch(error){
        response.send(error);
    }
    
})
//error
app.delete('/:id', async(request,response) =>{
    try{
        const id = request.params.id;
        console.log('id',id)
        await User.doc(id).delete();
        response.send({msg:'Deleted'})

    }catch(error){
        console.log('error',error)
        response.send(error);

    }
})






app.listen(3000,() => console.log('Api iniciada'));