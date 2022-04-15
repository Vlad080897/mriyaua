import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../../../../images/PhotoReports/photo9.jpg'
import img2 from '../../../../images/PhotoReports/image2.jpg'
import img3 from '../../../../images/PhotoReports/image3.jpg'
import img4 from '../../../../images/PhotoReports/image4.jpg'
import img5 from '../../../../images/PhotoReports/image5.jpg'
import img6 from '../../../../images/PhotoReports/image6.jpg'
import img7 from '../../../../images/PhotoReports/image7.jpg'
import img8 from '../../../../images/PhotoReports/image8.jpg'
import img9 from '../../../../images/PhotoReports/image9.jpg'
import img10 from '../../../../images/PhotoReports/image10.jpg'
import img11 from '../../../../images/PhotoReports/image11.jpg'
import img12 from '../../../../images/PhotoReports/image12.jpg'
import img13 from '../../../../images/PhotoReports/image13.jpg'
import img14 from '../../../../images/PhotoReports/image14.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import '../../../../styles/PhotoReports/PhotoReportsFull.css'

const PhotoReportsFull = () => {
  const [modal, setModal] = useState(false);
  const [tmpImgSrc, setTmpImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState('');

  const getImg = (imgSrc, index) => {
    setTmpImgSrc(imgSrc);
    setCurrentIndex(index);
    setModal(true);
  };
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <div>
      <div className='photo_reports_container' id='photoReports'>
        <div className='photo_reports_title'>
          <span>ФОТОЗВІТ</span>
        </div>
        <div className={modal ? 'modal open' : 'modal'} id='modal_container'>
          <CloseIcon sx={{
            position: 'absolute',
            top: 20,
            right: 15,
            color: '#FFFF',

          }}
            onClick={() => setModal(false)}
            fontSize='large'
          />
          {currentIndex === 0 ?
            ''
            :
            <ArrowBackIosIcon
              onClick={() => {
                let prevPhoto = itemData[currentIndex - 1].img
                setCurrentIndex(currentIndex - 1)
                setTmpImgSrc(prevPhoto)
              }}
              sx={{
                color: '#FFFF',
                paddingLeft: '20px',
              }}
              fontSize='large'
            />}

          <img
            src={tmpImgSrc}
            alt='modal'
            id='modal' />
          {currentIndex === (itemData.length - 1) ?
            ''
            :
            <ArrowForwardIosIcon
              onClick={() => {
                let nextPhoto = itemData[currentIndex + 1].img
                setCurrentIndex(currentIndex + 1)
                setTmpImgSrc(nextPhoto)
              }}
              sx={{ color: '#FFFF', paddingRight: '20px' }}
              fontSize='large' />
          }
        </div>
        <ImageList
          sx={{ width: '100%', height: 'fit-content', paddingLeft: '5px', paddingBottom: '10px' }}
          variant="quilted"
          cols={4}
          rowHeight={180}
          gap={15}
        >
          {itemData.map((item, index) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                className='photo_reports_img'
                onClick={(e) => getImg(item.img, index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}

const itemData = [
  {
    img: img1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
  },
  {
    img: img4,
    title: 'Coffee',
    cols: 1,
  },
  {
    img: img5,
    title: 'Coffee',
    cols: 1,
  },
  {
    img: img6,
    title: 'Hats',
    cols: 1,
  },
  {
    img: img7,
    title: 'Hats',
    cols: 1,
  },
  {
    img: img8,
    title: 'Hats',
    cols: 1,
  },
  {
    img: img9,
    title: 'Hats',
    cols: 1,
  },
  {
    img: img10,
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 1,
  },
  {
    img: img11,
    title: 'Basketball',
  },
  {
    img: img14,
    title: 'Fern',
    cols: 2,
    rows: 2,
  },
  {
    img: img12,
    title: 'Mushrooms',
    rows: 1,
    cols: 1,
  },
  {
    img: img13,
    title: 'Tomato basil',
  },
];

export default PhotoReportsFull


