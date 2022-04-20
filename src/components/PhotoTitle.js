import './Photo.css';

const PhotoTitle = (props) =>{
    return(
        <div className='photo-title'>
           <h2>{props.title}</h2>
        </div>
    )
}

export default PhotoTitle