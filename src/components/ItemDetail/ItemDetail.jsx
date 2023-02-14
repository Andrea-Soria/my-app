import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {
  return (
    <div className="row g-0">
        <div className="colmd-4">
            <img src={item.pictureUrl} alt={`imagen de ${item.title}`} className="img fluid rounded-start imgDetail"/>
         </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className='clard-title'> {item.title} </h5>
                <p className='card-text'> Modelo: {item.id} </p>
                <p className='card-text'> Percio: $ {new Intl.NumberFormat ('de-DE').format (item.price)}</p>
                <p className='card-text'>Stock: {item.stock} </p>
                <ItemCount valorInicial={1} stock={item.stock}/>
                <button className='btn btn-secondary'> Finalizar Compra</button>
            </div>
        </div>
    </div>
  )
}
