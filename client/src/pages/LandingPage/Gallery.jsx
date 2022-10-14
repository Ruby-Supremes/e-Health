import React from 'react'
import * as Io from 'react-icons/io'
import ButtonHashTag from '../../components/ButtonHashTag'
import ImageGrid from '../../components/ImageGrid'

function Gallery() {
  const serv=[
    "Diagnostic examination with consultation of an ophthalmologist",
    "Children Care",
    "Consultation with a medical specialist",
    "Laser treatments for sleeping sickness and glaucoma",
    "Laser vision correction",
    "Treatment of cataract",
    "SUrgical treatment of glaucoma",
    "Surgical treatment of high levels of refractive anomalies",
    "Treatment for keratoconus",
    "Hardware treatment(myopia,amblyopia...)",
  ]
  function data(){
    
  }
  return (
    <div>
      <div className="gallery">
        <h3>Gallery</h3>
        <div className="about">
          <h1>Check out our clinic great gallery</h1>
          <div className="grid-btn">
            <ButtonHashTag word={"Clinic"} />
            <ButtonHashTag word={"Surgical"} />
            <ButtonHashTag word={"Truthfulness"} />
            <ButtonHashTag word={"Trust"} />
          </div>
        </div>
        <div>
          <a href="sample" className="fa fa-telegram"></a>
          <a href="sample" className="fa fa-twitter"></a>
          <a href="sample" className="fa fa-facebook"></a>
          <a href="sample" className="fa fa-whatsapp"></a>
        </div>
      </div>
      <ImageGrid />
      <div>
        <div className="services">
          <h3>Services</h3>
          <h1>Excelent services of our clinic</h1>
        </div>
        <ul></ul>
      </div>
      <ImageGrid/>

    <div>
        <div className="services">
            <h3>Services</h3>
            <h1>Excelent services of our clinic</h1>
            

        </div>
        <ul className='service-ul'>
          
          {
            serv.map(item=>(<li><span>{item}</span> <Io.IoIosArrowRoundForward classNameName='radious2'/></li>))
          }
        </ul>
    </div>
    </div>
  )
}

export default Gallery;
