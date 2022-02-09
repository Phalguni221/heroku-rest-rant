const React = require('react')
const Def = require('./default')

function index(data) {
let placesFormatted = data.places.map((place) => {
  return (
    <div className="col-sm-6">
      <h2>
        <a href={`/places2/${place.id}`} >
          {place.name}
        </a>
      </h2>
      <p className="text-center">
        {place.cuisines}
      </p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
    </div>
)
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
)

}
  module.exports = index