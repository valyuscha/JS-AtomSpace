import './styles/styles.scss'

const getPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/')
  const people = await res.json()
  let id = 0
  const person = people.results.map(person => {
    return {
      id: ++id,
      name: person.name,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      mass: person.mass,
      img: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }
  })

  const personCard = person.map(person => {
    return `
      <div class="person-wrapper">
        <div>
          <img src="${person.img}" alt="">        
        </div>
        <div>
          <h2>${person.name}</h2>
          <p>Birth Year: ${person.birthYear}</p>
          <p>Eye Color: ${person.eyeColor}</p>
          <p>Hair Color: ${person.hairColor}</p>
          <p>Mass: ${person.mass}</p>
        </div>
      </div>
    `
  })
  document.getElementById('root').insertAdjacentHTML('afterbegin', personCard)
}

getPeople()