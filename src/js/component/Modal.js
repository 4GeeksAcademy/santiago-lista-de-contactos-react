import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
	const [contacName, setcontactName]=useState("")
	const [address, setAddress]=useState("")
	const [phone, setPhone]=useState("")
	const [email, setEmail]=useState("")


	useEffect (()=>{
		if(props.index==-1){
			//Crear nuevo contacto
		} else if(props.index>=0){
			//Editar contacto
		} else {
			//Indice invalido
		}
	},[])



	return (
		<div className="modal fade" tabIndex ="-1" role="dialog" id={"editModal-"+props.index} aria-labelledby={"modalLabel-"+props.index} aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Contacto {props.index}</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						)}
					</div>
					<div className="modal-body">
					<div className="mb-3">
  <label htmlFor="nameInput" className="form-label">Full name</label>
  <input type="text" className="form-control" id="nameInput" placeholder="Santiago Mendez" 
  value={contacName}
onChange={(e)=>setcontactName(e.target.value)}
   />
</div>

<div className="mb-3">
  <label htmlFor="addressInput" className="form-label">Address</label>
  <input type="text" className="form-control" id="adrressInput" placeholder="Popayan, Colombia" 
  value={address}
  onChange={(e)=>setAddress(e.target.value)}
   />
</div>
<div className="mb-3">
  <label htmlFor="phoneInput" className="form-label">Phone number</label>
  <input type="text" className="form-control" id="phoneInput" placeholder="1122334455" 
  value={phone}
  onChange={(e)=>setPhone(e.target.value)}
  />
</div>
<div className="mb-3">
  <label htmlFor="emailInput" className="form-label">Email address</label>
  <input type="email" className="form-control" id="emailInput" placeholder="ejemplo@4geeks.com" 
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  />
</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
