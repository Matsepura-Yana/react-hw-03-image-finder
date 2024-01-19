import { ImageGalleryItem } from 'ImageGalleryItem'

export const ImageGallery = ({ arr }) => {
    const styleUl = { display: 'flex', width: '1000px' }
    return (
        <ul className="gallery" style={styleUl}>
            {arr.map(e => {
                return (
                    <ImageGalleryItem src={e.webformatURL}></ImageGalleryItem>
                )
            })}
        </ul>
    )
}
