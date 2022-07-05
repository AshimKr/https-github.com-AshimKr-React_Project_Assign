import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PhotoCollections = () => {
  const [photos, setPhotos] = useState([]);
  const [modalPhoto, setModalPhoto] = useState('');

  const url = 'https://pixabay.com/api/?key=28420107-7cc29fea39bfc34d117d0c78a&q=photography&image_type=photo&pretty=true';


  useEffect(async () => {
    const { data } = await axios.get(url);
    // console.log(data.hits);
    setPhotos(data.hits);
  }, [])


  const imgData = photos.map((data, i) => {
    return (
      <div className="col" onClick={()=>{setModalPhoto(data.largeImageURL)}}
        data-bs-toggle="modal" data-bs-target="#exampleModal" key={i} style={{ lineHeight: '10vh', marginBottom: '2px', border: '1px solid black' }} >
        <img className='img-fluid w-20' src={data.largeImageURL} alt='image' style={{ height: '28vh', width: '24vw' }} />

        <span style={{ height: '5vh' }}> {data.tags}</span>
      </div>
    )
  })
// console.log('preview',modalPhoto);

  return (
    <main>
      <div className="container">
        <div className="row row-cols-4">
          {imgData}
        </div>
      </div>


      <div className="modal fade"
        id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Image Preview</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p=0">
               <img className='img-fluid'
                 src={modalPhoto}
                 alt='image' />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PhotoCollections;