import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React ,{useCallback} from "react";



const ParticlesContainer = () => {
//init 
const ParticlesInit = useCallback(async(engine)=>{
  await loadFull(engine)
},[]);
// const ParticlesLoaded = useCallback(async ()=>{ 
// },[])

<div>ParticlesContainer</div>

}



;

export default ParticlesContainer;
