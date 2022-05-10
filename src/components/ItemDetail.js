import ItemCount from "./ItemCount"




function ItemDetail({ item }) {
 
    return <>
  
        <div className="card" style="width: 18rem;">
                        <img src="https://i.ibb.co/ssZW7Md/sahumerio.png" class="card-img-top" alt="..." width="220" height="150"/>
                        <div className="card-body">
                            <h5 className="card-title">Sahumerio</h5>
                            <p className="card-text">Tipo tibetano, aroma concentrado que perdura en el ambiente, duracion aproximada de <strong>30min</strong> <strong>Precio:</strong> $200/12u  </p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                </div>
        <ItemCount/>
      </>
    }

    export default ItemDetail
