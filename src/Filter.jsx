// Home.jsx
import React, { useState } from 'react'
import './Filter.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

const Filter = ({ data, opts, loading }) => {
	const [nameFilter, setNameFilter] = useState('')
	const [minStudentCountFilter, setMinStudentCountFilter] = useState(0)
	const [establishedDateFilter, setEstablishedDateFilter] = useState(
		new Date(1990, 0, 1)
	)

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
		(!opts.established_date ||
			new Date(entry.established_year, 0, 1) > establishedDateFilter)

	return (
		<div className="col">
			<div className="row wrap fields">
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
						}}
					>
						Təmizlə
					</button>
				</div>
			</div>
			<div className="result box">
				{loading
					? 'loading...'
					: data.filter(filterFunction).map((entry) => (
							<div className="item row" key={entry.key}>
								{entry.name}
								{opts.student_count
									? ` (~${entry.student_count})`
									: ''}
								{opts.established_year
									? ` (01/01/${entry.established_year})`
									: ''}
								<div className="empty grow"></div>
								{entry.region}/{entry.city}
								<button className="listItemModalButton">
									bax
								</button>
							</div>
					  ))}
			</div>
		</div>
	)
}

export default Filter
