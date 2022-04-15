import React from 'react'
import image1 from '../../../../images/AboutUs/image1.jpg'
import image2 from '../../../../images/AboutUs/image2.jpg'
import '../../../../styles/AboutUs/AboutUsFullScreen.css'

const AboutUsFullScreen = () => {
  return (
    <div className='about_us_container'>
      <div className='about_us_info'>
        <div className='text_block top'>
          <span>
            <span className='aboutUs_title' id='aboutUs'>WE ARE UKRAINIANS</span>
            <br />
            We are born in Ukraine, and want to live in our country, peacefully and safely.
            Every day we do everything we can to make it happened. We dream of peace and we will reach it all together.
            Like everyone in our great and beloved country, we lived, worked, made plans, dreamed, strived for goals,
            believed in a bright future and waited for everything to work out. However, in the morning of February 24,
            2022, this all ended abruptly. Fear, pain, suffering and danger came to our country.
            Many of us were forced to leave our homes and run to save their families. Many people lost their
            homes because they were destroyed and evacuated as quickly as they could. Those who remained were subjected
            to trials that we would not wish on anyone. Those who left, for the most part, went nowhere. People evacuated
            as best they could, evacuated their parents, children, relatives and friends.
          </span>
        </div>
        <div>
          <img src={image1} alt="Image1" />
        </div>
        <div>
          <img src={image2} alt="Image2" />
        </div>
        <div className='text_block bottom'>
          <span>
            Human is an outstanding creature that can adapt to things pretty quickly.
            Those who were able to adapt faster sent their forces to help those in need.
            Also, many countries and international organizations sent their resources to help people across the country.
            We also hope to do something for our citizens. Therefore, we founded <b>MriyaUA</b>  project to help families,
            children, medical institutions, military and other organizations. As well as all other ukrainians we are
            employees of companies, entrepreneurs. So, we clearly understand, how terrible the situation right now!
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutUsFullScreen