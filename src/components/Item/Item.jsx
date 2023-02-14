

export const Item = ({item}) => {
  return (
    <div className="card mb-3 cardProducto border-light">
    <img src={item.pictureUrl} className="card-img-top" alt={"producto"} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.description}</p>
      <p className="card text-primary mb-3"> $ {new Intl.NumberFormat ('de-DE').format (item.price)}</p>
      <button type="button" className="btn btn-primary">VER PRODUCTO</button>
    </div>
  </div>

  )
}

