import React from 'react'
import './Home1.css'
import Crousel from './Crousel'
const Home1 = () => {
  return (
  <>
  <section className="video-section678">
      <video className="background-video678" autoPlay loop muted>
        <source src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <Crousel />
  </>
  )
}

export default Home1