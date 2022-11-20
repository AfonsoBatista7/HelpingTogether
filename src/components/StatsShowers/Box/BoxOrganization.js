import React from 'react'
import BoxStats from './BoxStats';

function BoxOrganization(props) {
  
  const getNumVoluntariados = () => {

    let strVol = props.getNumVoluntariados + " Voluntariado";

    return props.getNumVoluntariados===1 ? strVol : strVol+"s";
  }

  return (
        <BoxStats
            image={props.image}
            name={props.name}
            component={getNumVoluntariados()}
            desc={props.desc}
        />
  )
}

export default BoxOrganization
