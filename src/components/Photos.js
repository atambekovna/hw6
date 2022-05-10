import { useState, useEffect } from 'react'
import { PhotosCard } from './PhotosCard'
import './Photos.css'

const Photos = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
                .then(response => response.json())
                .then(data => setPhotos(data));
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <>
            {photos.map((photo) => (
                <PhotosCard key={photo.id}>
                    <div className='title-id-block'>
                        <h3>{photo.title}</h3>
                        <h2>{photo.id}</h2>
                    </div>
                    <img src={photo.thumbnailUrl} />
                </PhotosCard>
            ))}
        </>

    )


}

export default Photos