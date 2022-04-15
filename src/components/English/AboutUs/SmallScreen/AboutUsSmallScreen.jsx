import React from 'react'
import img from '../../../../images/mobileversion/activities/1.png'
import '../../../../styles/AboutUs/AboutUsSmallScreen.css'

const AboutUsSmallScreen = () => {
  return (
    <div className='mobile_about_us_container'>
      <div>
        <span className='mobile_about_us_title'>We are Ukrainians</span>
        <span className='mobile_about_us_info'>
          We are born in Ukraine, and want to live in our country, peacefully and safely.
          Every day we do everything we can to make it happened. We dream of peace and we will reach it all together.
          Like everyone in our great and beloved country, we lived, worked, made plans,
          dreamed, strived for goals, believed in a bright future and waited for everything to work out. However,
          in the morning of February 24, 2022, this all ended abruptly. Fear, pain, suffering and danger came to our country.
          Many of us were forced to leave our homes and run to save their families. Many people lost their homes because they
          were destroyed and evacuated as quickly as they could. Those who remained were subjected to trials that we would not
          wish on anyone. Those who left, for the most part, went nowhere. People evacuated as best they could, evacuated their
          parents, children, relatives and friends.
        </span>
      </div>
      <img src={img} alt="" />
      <div>
        <span className='mobile_about_us_info'>
          Human is an outstanding creature that can adapt to things pretty quickly.
          Those who were able to adapt faster sent their forces to help those in need.
          Also, many countries and international organizations sent their resources to help people across the country.
          We also hope to do something for our citizens. Therefore, we founded <span>MriyaUA</span> project to help families,
          children, medical institutions, military and other organizations.
          As well as all other ukrainians we are employees of companies, entrepreneurs.
          So, we clearly understand, how terrible the situation right now!
        </span>
      </div>
    </div>
  )
}

export default AboutUsSmallScreen