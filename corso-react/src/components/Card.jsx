import './Card.css'

function Card({title, imgUrl, children}){

  return(
    <div className="rounded-md">
      <img className='immagine' src={imgUrl} alt=""></img>
      <div className="flex flex-col">
        <h2 className='title'>{title}</h2>
        <p className='para'>{children}</p>
      </div>
    </div>
  )
}

export default Card