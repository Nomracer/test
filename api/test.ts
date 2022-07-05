export default function(req,res){
    if(req.method=="POST"){
        res.json({message:'Mesaj'})
    }
}