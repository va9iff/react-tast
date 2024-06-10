import React from 'react'
import './Modal.css'

const Deletor = ({ show, handleClose, confirm, children }) => {
	const showHideClassName = show
		? 'modal display-block'
		: 'modal display-none'

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<h1>Are you sure you want to delete {show?.name}</h1>
				<button style={{ backgroundColor: "#a33", padding: "20px 30px", margin: "7px" }} onClick={()=>{confirm(); handleClose()}}>confirm</button>
				<button style={{ backgroundColor: "#3a3", padding: "20px 30px", margin: "7px" }} onClick={handleClose}>cancel</button>
			</section>
		</div>
	)
}

export default Deletor
