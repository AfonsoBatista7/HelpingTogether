import React from 'react'
import BoxStats from './BoxStats';

function BoxOrganization(props) {
  
  const getNumVoluntariados = () => {

    let list = [];
    list = props.getNumVoluntariados;

    let strVol = list[props.idOrg] + " Voluntariado";

    return list[props.idOrg] === 1 ? strVol : strVol + "s";
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
