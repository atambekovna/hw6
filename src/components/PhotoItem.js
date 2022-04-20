import './Photo.css'

const PhotoItem = (props) =>{
  return(
    <div className='photo-item'>
      <img src={props.img} />
    </div>
  )
}

export default PhotoItem;