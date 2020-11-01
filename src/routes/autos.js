const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const autos = require('../sample.json')
console.log(autos);

router.get('/', (req, res)=>{
res.json(autos);
});

router.post('/',(req, res)=>{
 const{ Marca,Pais,Tipo,Modelo}=req.body;
    if(Marca && Pais && Tipo && Modelo){
        const id= autos.length+1;
        const newautos ={...req.body, id};

        console.log(newautos);
        autos.push(newautos);
        res.json(autos);
    }else    {

        res.status(500).json({error: 'Ocurrio un error'});
    }
});
router.put('/:id', (req, res)=>{
    const { id }=req.params;
    const{ Marca,Pais,Tipo,Modelo}=req.body;
    if(Marca && Pais && Tipo && Modelo){
        _.each(autos,(auto)=>{
        if(auto.id == id){
            auto.Marca= Marca;
            auto.Pais = Pais;
            auto.Tipo = Tipo;
            auto.Modelo = Modelo;
        }
        });
        res.json(autos);
      }
      else{
        res.status(500).json({error: 'Ocurrio un error'});
      }
    });

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    _.each(autos, (auto, i)=>{
        if(auto.id == id){
            autos.splice(i, 1);
        }
    });
res.send(autos);
});

module.exports = router;