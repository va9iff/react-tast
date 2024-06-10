import React from 'react'
import './Modal.css'

const Modal = ({ show, handleClose, children }) => {
	const showHideClassName = show
		? 'modal display-block'
		: 'modal display-none'

	const {
		established_year,
		name,
		city,
		region,
		student_count,
		type,
		academic_level,
	} = show || {}

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				{children}
				<h1>{show?.name}</h1>
				here are some details:
        <ul>
          {established_year ? <li>{established_year}</li> : ""}
          {city ? <li>{city}</li> : ""}
          {region ? <li>{region}</li> : ""}
          {student_count ? <li>{student_count}</li> : ""}
          {type ? <li>{type}</li> : ""}
          {academic_level ? <li>{academic_level}</li> : ""}

        </ul>
				<button onClick={handleClose}>Close</button>
			</section>
		</div>
	)
}

export default Modal
