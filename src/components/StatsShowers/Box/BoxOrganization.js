import React from 'react'
import BoxStats from './BoxStats';

function BoxOrganization({image, name, desc, getNumVoluntariados}) {
  
  const getNumVolt = () => {

    let strVol = getNumVoluntariados + " Voluntariado";

    return getNumVoluntariados===1 ? strVol : strVol+"s";
  }

  return (
        <BoxStats
            image={image}
            name={name}
            component={getNumVolt()}
            desc={desc}
        />
  )
}

export default BoxOrganization
