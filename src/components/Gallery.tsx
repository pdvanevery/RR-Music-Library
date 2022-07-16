import GalleryItem, { GalleryItemData } from './GalleryItem'

interface GalleryProps {
    data: GalleryData[]
}

interface GalleryData {
    item: GalleryItemData,
    index: number
}

function Gallery(props:GalleryProps){

    const display = props.data.map((item: any, index: any ) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
