import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React ,{useCallback} from "react";



const ParticlesContainer = () => {
//init 
const ParticlesInit = useCallback(async(engine)=>{
  await loadFull(engine)
},[]);//hello
const ParticlesLoaded = useCallback(async ()=>{ 
},[])

return(
  <Particles id='tsparticles'   />
)
}



;

export default ParticlesContainer;
