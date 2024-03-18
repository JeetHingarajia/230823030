import React from 'react';
import Image from './photo.webp';

const IndexPage = () => {
  return (
    <>
    <div style={{ textAlign: 'left', maxWidth: '800px', margin: '2px auto', backgroundColor: '#fff', borderRadius: '8px', padding: '0px' }}>
      <p style={{ marginLeft: '150px' }}>If you think Adventure is dangerous, try routine, it's genuinely lethal!</p>
      <p style={{ marginLeft: '150px' }}>Good morning all friends</p>

      <img src={Image} alt="Image" style={{ marginLeft:'150px', width: '500px', height: '250px', display: 'block', margin: '0px auto', borderRadius: '8px' }} />

      <div style={{ float: 'right', margin: '70px', marginTop: '10px',marginRight:'150px'}}>
        <a href="#" style={{ display: 'inline-block', padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgb(999, 100, 300)', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Follow</a>
        <a href="#" style={{ display: 'inline-block', padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgb(219, 219, 238)', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Ignore</a>
      </div>
    </div>
    </>
  );
};


export default IndexPage;

