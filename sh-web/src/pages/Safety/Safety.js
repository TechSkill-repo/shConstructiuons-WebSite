import Description from '../../components/Safety/Description/Description';
import Hero from '../../components/Safety/Hero/Hero';
import SafetyTypes from '../../components/Safety/SafetyTypes/SafetyTypes';
import SafetyWorks from '../../components/Safety/SafetyWorks/SafetyWorks';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Safety/Gallery/Gallery';

function Safety() {
  return (
    <>

   <Hero></Hero>
   <SafetyTypes></SafetyTypes>
   <SafetyWorks></SafetyWorks>
   <Description></Description>
   <Gallery></Gallery>
   <Footer></Footer>
    </>
  )
}

export default Safety