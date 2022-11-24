import React from 'react'
import BoxStats from './BoxStats';
import { Link } from 'react-router-dom';

function BoxOrganization(props) {

  const getNumVoluntariados = () => {

    let list = [];
    list = props.getNumVoluntariados;

    let strVol = list[props.idOrg] + " Voluntariado";

    return list[props.idOrg] === 1 ? strVol : strVol + "s";
  }

  return (
    <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${props.idOrg}/Perfil`} onClick={() => this.forceUpdate()}>
      <BoxStats
      image={props.image}
      name={props.name}
      component={getNumVoluntariados()}
      desc={props.desc}
    /></Link>
  )
}

export default BoxOrganization
