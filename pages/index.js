//next image
import Image from "next/image";

//componenet
import Avatar from '../components/Avatar'
import ProjectsBtn from '../components/ProjectsBtn'
import ParticlesContainer from '../components/ParticlesContainer'

//framer motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'


const Home = () => {
  return(
   <div  className="bg-primary/60 h-full">
  {/*text*/}
  <div  className="w-full h-full bg-gardient-to-r from-primary/10 via-black/30 to-black/10">
    <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto" >
{/*title*/}
<h1 className="h1">Transforming ideas <br/> Info {' '}
    <span className="text-accent"> Digital Reality</span>
     </h1>
       {/*Subtite*/}
  <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"> bla 2 bla bla bla </p>
     {/*btn*/}
     <div className="flex justify-center xl: relative">
     <ProjectsBtn/>
    </div>
    </div>
  </div>
  {/*image*/}
  <div>image</div>
  </div>)
};

export default Home;
