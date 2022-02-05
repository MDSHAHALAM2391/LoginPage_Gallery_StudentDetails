import React from 'react';
import 'aos/dist/aos.css';
import Card from '../Comp/Card';
import { myData } from './data';


console.log(myData);
const Gallery = () => {
  return (
  <section className='py-4 py-lg-5 container'>
      <div className='row d-flex justify-content-center'>
        <div className="col-md-12">
          <h1 className="display-5 mt-4 mb-4">
            Gallery
          </h1>
          <a href="/" className="btn btn-primary mt-3 mb-3 float-start" style={{ width: '200px' }}>Go Back</a>
        </div>
      
        <Card image="https://wallpaperaccess.com/full/110304.jpg" data={myData.Animal} title="Animal" />
        <Card image="https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg" data={myData.Nature} title="Nature"   />
        <Card image="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sunglasses_cool_emoji_grande.png?v=1571606093" data={myData.Emoji} title="Emoji"   />
        <Card image="https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?k=20&m=1037503798&s=612x612&w=0&h=NSpb-VCBTDPicGg37wiCVd9V0jXGrEBmqIIgK6D3x2o=" data={myData.Fish} title="Fish"   />
        <Card image="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" data={myData.Computer} title="Computer"   />

      


</div>
 </section>
 )
};

export default Gallery;
