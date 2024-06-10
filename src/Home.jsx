// Login.jsx
import React, { useState } from 'react'
import Filter from './Filter'

import schools from './schools.jsx'
import highschools from './highschools.jsx'
import universities from './universities.jsx'

import "./App.css"

const Home = ({ onLogin }) => {
  const [loading, setLoading] = useState(false)
  async function fakeFetch(url) {
    setLoading(true)
    let data
    switch(url) {
      case "/schools": 
        data = schools
        break
      case "/highschools":
        data = highschools
        break
      case "/universities":
        data=universities
        break;
    }
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        res(data)
        setLoading(false)
      }, 1000 * Math.random())
    })

  }

	const [pane, setPane] = useState('welcome')
  const [filterData, setFilterData] = useState([])
	return (
		<div className="row">
			<nav className="col sidebar">
				<a
          className="sidebarLink"
					href="#"
					onClick={async () => {
						setPane('schools')
            setFilterData(await fakeFetch("/schools"))
					}}
				>
					Schools
				</a>
				<a
          className="sidebarLink"
					href="#"
					onClick={async () => {
						setPane('universities')
            setFilterData(await fakeFetch(("/universities")))
					}}
				>
					Universities
				</a>
				<a
          className="sidebarLink"
					href="#"
					onClick={async () => {
						setPane('highschools')
            setFilterData(await fakeFetch("/highschools"))
					}}
				>
					Highschools
				</a>
        <details>
          <summary>Task</summary>
          <ol>
            <li>Səhifədə login üçün inputlar olmalıdır və sistemə daxil olduqda sol menu və əsas content açılmalıdır.</li>
            <li>Sol menuda 3 bölmə olmalıdır: Universitetlər, Məktəblər, Liseylər, sağ tərəfdə isə seçilən route uyğun kontent açılmalıdır</li>
            <li>Kontent hissəsində hər 3-nün yuxarısında filter olmalıdır və bu filter componenti elə yazılmalıdır ki, gələcəkdə 30 səhifəyə də tətbiq olunarsa hamısı üçün yararlı olsun</li>
            <li>Bu səhifələrin filterlərində, selectlər, number, date və text inputu kimi filterlər və bu filterləri təmizləmək üçün ayrıca bir düymə olmalıdır</li>
            <li>Filterləri seçərkən, yazarkən və ya dəyərini dəyişərkən backendə sorğu getməlidir</li>
            <li>Universitelər səhifəsində məlumatların list kimi göstərilməsi cədvəlində Korpus sütutunda hər bir sətirdə bax düyməsi olmalıdır və ona klikləyəndə həmin universitetin korpuslarının listli modalda açılmalıdır</li>
            <li>Hər bir səhifədə Universitet, Məktəb və ya Lisey itemini siləndə confirm dialog açılmalıdır və bu confirm dialog custom component kimi yazılmalıdır</li>
            <li>Servis kimi mock apilər istifadə edilə bilər</li>
          </ol>

          <hr />

          Fərqli səhifələrdə fərqli filterlər olacaq, misal üçün universitetlərdə universitetin yaranma ili, regiona görə axtarış  olacaq. Yəni hər səhifənin filter filedləri fərqli olmalıdır.
          Burada lisey, universitet və məktəb var. Elə filedlər olmalıdır ki, hərəsinin öz individual filteri olsun.
          Və bu filter componenti hamısı üçün işləyən bir component olsun.
        </details>
			</nav>
			<div className="content grow">
				{
					{
						schools: (
							<div className="col">
								<h1>Schools in our service</h1>
								<Filter
									data={filterData}
                  loading={loading}
									opts={{
										name: true,
										min_student_count: true,
                    region: true
                    
									}}
								/>
							</div>
						),
						universities: <div className="col">
              <h1>Universities that we are partnered with</h1>
                <Filter
                  data={filterData}
                  loading={loading}
                  opts={{
                    name: true,
                    min_student_count: true,
                    established_date: true ,
                    region: true
                  }}
                />
            </div>
              ,
						highschools: <div className="col">
              <h1>Highschools in our service </h1>
              <Filter
                data={filterData}
                loading={loading}
                opts={{
                  name: true,
                  region: true

                  // min_student_count: true,
                }}
              />
            </div>,
            welcome: <h1>Select a category from right pane to continue</h1>
					}[pane]
				}
			</div>
		</div>
	)
}

export default Home
