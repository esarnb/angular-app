interface singleCard {
  title: string,
  desc: string,
  img: string, 
  alt: string,
  color: string
}

function Card({ title, desc, img, alt, color }: singleCard) {
  return (
    <div className={"box box-down " + color}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={img} alt={alt} />
    </div>
  )
}

export default Card;