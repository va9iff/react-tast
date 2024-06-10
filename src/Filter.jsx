// Home.jsx
import React, { useState } from 'react'
import './Filter.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import Modal from "./Modal";
import Deletor from "./Deletor";

const Filter = ({ data, opts, loading }) => {
	const [nameFilter, setNameFilter] = useState('')
	const [minStudentCountFilter, setMinStudentCountFilter] = useState(0)
  const [regionFilter, setRegionFilter] = useState("")
	const [establishedDateFilter, setEstablishedDateFilter] = useState(
		new Date(1990, 0, 1)
	)

  const [modal, setModal] = useState(null)
  const [deletor, setDeletor] = useState(null)

	// that's my filter function. I know it had to make a request and wait for
	// backend to filter it, but for demonstrative purposes, I'm filtering
	// in client side. adapting it to make requests wouldn't be hard either.
	// for async version, the function called fakeFetch() is being used (which
	// gathers the array of unis/highscls/schools). I'm just short in time :)

	// also this can be used for "optimistic updates" where I filter it instantly
	// with the existing data, show feedback, then wait for response and update
	// with the backend's latest data
	const filterFunction = (entry) =>
		(!opts.name ||
			entry.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
		(!opts.min_student_count ||
			entry.student_count > minStudentCountFilter) &&
    (!opts.min_student_count ||
      entry.student_count > minStudentCountFilter) &&
		(!opts.established_date ||
			new Date(entry.established_year, 0, 1) > establishedDateFilter) &&
    (!opts.region || !regionFilter ||
      entry.region == regionFilter)


	return (
		<div className="col">
			<div className="row wrap fields">
				{opts.region && (
					<div className="centered row field">
						<span>Region</span>
            <select value={regionFilter} onChange={e=>setRegionFilter(e.target.value)}>
              <option value="">hamısı</option>
              <option value="Abşeron">Abşeron</option>
              <option value="Lənkəran">Lənkəran</option>
              <option value="Gəncə">Gəncə</option>
              <option value="Sumqayıt">Sumqayıt</option>
              <option value="Şəki">Şəki</option>
              <option value="Şəmkir">Şəmkir</option>
              <option value="Mingəçevir">Mingəçevir</option>
              <option value="Şirvan">Şirvan</option>
              <option value="Bərdə">Bərdə</option>
              <option value="Naxçıvan">Naxçıvan</option>
              <option value="Qəbələ">Qəbələ</option>
              <option value="Quba">Quba</option>
              <option value="Qusar">Qusar</option>
              <option value="Liman">Liman</option>
              <option value="Biləsuvar">Biləsuvar</option>
              <option value="Tovuz">Tovuz</option>
              <option value="Astara">Astara</option>
              <option value="Şamaxı">Şamaxı</option>
              <option value="Sabirabad">Sabirabad</option>
              <option value="Zaqatala">Zaqatala</option>
              <option value="Abşeron">Abşeron</option>
              <option value="Sumqayıt">Sumqayıt</option>
              <option value="Şəki">Şəki</option>
              <option value="Gəncə">Gəncə</option>
              <option value="Abşeron">Abşeron</option>
            </select>
					</div>
				)}
        {opts.name && (
          <div className="centered row field">
            <span>Ad</span>
            <input
              type="text"
              value={nameFilter}
              onInput={(e) => {
                setNameFilter(e.target.value)
              }}
            />
          </div>
        )}
				{opts.min_student_count && (
					<div className="centered row field">
						<span>Minimum Şagird sayı</span>
						<input
							type="number"
							value={minStudentCountFilter}
							onInput={(e) => {
								setMinStudentCountFilter(e.target.value)
							}}
						/>
					</div>
				)}
				{opts.established_date && (
					<div className="centered row field">
						<span>Ən gec təsis olunma tarixi</span>
						<DatePicker
							selected={establishedDateFilter}
							onChange={(date) => setEstablishedDateFilter(date)}
						/>
					</div>
				)}
				<div className="centered row field">
					<button
						onClick={() => {
							setMinStudentCountFilter(0)
							setNameFilter('')
							setEstablishedDateFilter(new Date(1990, 0, 1))
              setRegionFilter("")
						}}
					>
						Təmizlə
					</button>
				</div>
			</div>

			{loading ? (
				'loading...'
			) : (
				<table className="result">
					<tbody>
						{data.filter(filterFunction).map((entry) => (
							<tr className="item" key={entry.key}>
								<td>{entry.name}</td>
								{opts.min_student_count ? (
									<td>~{entry.student_count}</td>
								) : (
									''
								)}
								{opts.established_date ? (
									<td>{`01/01/${entry.established_year}`}</td>
								) : (
									''
								)}
								<td>
									{entry.region}/{entry.city}
								</td>
								<td>
									<div className="row wrap" style={{ gap: "14px"}}>
										<button className="listItemModalButton" onClick={()=>setModal(entry)}>
											bax
										</button>
										<button onClick={()=>setDeletor(entry)}>sil</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
      <Modal show={modal} handleClose={()=>setModal(null)} />
      <Deletor show={deletor} confirm={()=>alert(`entry ${deletor.name} has been deleted in the backend :d`)} handleClose={()=>setDeletor(null)} />
		</div>
	)
}

export default Filter
