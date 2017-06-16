'use strict'

const db = require('APP/db')
    , {Actor, Director, Movie, Movie_director, Movie_genre, Role, User, Thing, Favorite, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    things: things(),
    actors: actors(),
    directors: directors(), 
    movies: movies(),
    // movies_directors: movies_directors(),
    // movies_genres: movies_genres(),
    // roles: roles(),
  }

  seeded.favorites = favorites(seeded)
  seeded.movies_directors = movies_directors(seeded)
  seeded.movies_genres = movies_genres(seeded)
  seeded.roles = roles(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
})

const things = seed(Thing, {
  surfing: {name: 'surfing'},
  smiting: {name: 'smiting'},
  puppies: {name: 'puppies'},
})

const actors = seed(Actor, {
  jja: {
    id: 1254,
    first_name: 'J.J.',
    last_name: 'Abrams',
    gender: 'M'
  },
  jalala: {
    id: 3452,
    first_name: 'Jalal',
    last_name: 'Agha',
    gender: 'M'
  },
  hafeza: {
    id: 5069,
    first_name: 'Hafez',
    last_name: 'al-Assad',
    gender: 'M'
  },
  franka: {
    id: 5774,
    first_name: 'Frank(I)',
    last_name: 'Albertson',
    gender: 'M'
  },
  woodya: {
    id: 8286,
    first_name: 'Woody',
    last_name: 'Allen',
    gender: 'M'
  },
  johna: {
    id: 11633,
    first_name: 'Jogn(I)',
    last_name: 'Anderson',
    gender: 'M'
  },
  briana: {
    id: 12488,
    first_name: 'Brian(I)',
    last_name: 'Andrews',
    gender: 'M'
  },
  billa: {
    id: 13736,
    first_name: 'Bill',
    last_name: 'Anthony',
    gender: 'M'
  },
  gregoirea: {
    id: 18781,
    first_name: 'Gregoire',
    last_name: 'Aslan',
    gender: 'M'
  },
  bolajib: {
    id: 22700,
    first_name: 'Bolaji',
    last_name: 'Badejo',
    gender: 'M'
  },
  tobinb: {
    id: 35387,
    first_name: 'Tobin',
    last_name: 'Bell',
    gender: 'M'
  },
  nedb: {
    id: 35463,
    first_name: 'Ned',
    last_name: 'Bellamy',
    gender: 'M'
  },
  lionelb: {
    id: 35821,
    first_name: 'Lionel',
    last_name: 'Belmore',
    gender: 'M'
  },
  clemb: {
    id: 41316,
    first_name: 'Clem',
    last_name: 'Bevans',
    gender: 'M'
  },
  tedb: {
    id: 42938,
    first_name: 'Ted',
    last_name: 'Billings',
    gender: 'M'
  },
  paulb: {
    id: 49420,
    first_name: 'Paul',
    last_name: 'Bonifas',
    gender: 'M'
  },
  donb: {
    id: 58600,
    first_name: 'Don',
    last_name: 'Brodie',
    gender: 'M'
  },
  johnc: {
    id: 74195,
    first_name: 'John(I)',
    last_name: 'Carpenter',
    gender: 'M'
  },
  onealc: {
    id: 93244,
    first_name: "O'Neal",
    last_name: 'Compton',
    gender: 'M'
  },
  ianb: {
    id: 212283,
    first_name: 'Ian',
    last_name: 'Holm',
    gender: 'M'
  },
  romanoo: {
    id: 356711,
    first_name: 'Romano',
    last_name: 'Orzari',
    gender: 'M'
  },
})

const directors = seed(Director,{
  woodya: {
    id: 1364,
    first_name: 'Woody',
    last_name: 'Allen'
  },
  johnc: {
    id: 12332,
    first_name: 'John(I)',
    last_name: 'Carpenter'
  },
  jeremiahc: {
    id: 13774,
    first_name: 'Jeremiah S',
    last_name: 'Chechik'
  },
  stanleyd: {
    id: 20713,
    first_name: 'Stanley',
    last_name: 'Donen'
  },
  alfredh: {
    id: 34658,
    first_name: 'Alfred(I)',
    last_name: 'Hitchcock'
  },
  henryk: {
    id: 42430,
    first_name: 'Henry',
    last_name: 'Koster'
  },
  emirk: {
    id: 43477,
    first_name: 'Emir',
    last_name: 'Kusturica'
  },
  ridleys: {
    id: 71703,
    first_name: 'Ridley',
    last_name: 'Scott'
  },
  rameshs: {
    id: 73972,
    first_name: 'Ramesh',
    last_name: 'Sippy'
  },
  jamesw: {
    id: 84063,
    first_name: 'James',
    last_name: 'Wan'
  },
  jameswh: {
    id: 85169,
    first_name: 'James(I)',
    last_name: 'Whale'
  },
})

const movies = seed(Movie, {
  alien: {
    id: 10830,
    name: 'Alien',
    year: 1979,
    rank: 8.3
  },
  psycho: {
    id: 266574,
    name: 'Psycho',
    year: 1960,
    rank: 8.6
  },
  diabolique: {
    id: 85611,
    name: 'Diabolique',
    year: 1996,
    rank: 5.0
  },
  nosferatn: {
    id: 235282,
    name: 'Nosferatn',
    year: 1990,
    rank: 5.8
  },
  halloween: {
    id: 137655,
    name: 'Halloween',
    year: 1978,
    rank: 7.6
  },
  frankenstein: {
    id: 118916,
    name: 'Frankenstein',
    year: 1931,
    rank: 7.9
  },
  saw: {
    id: 289167,
    name: 'Saw',
    year: 2004,
    rank: 7.3
  },
  sholay: {
    id: 299603,
    name: 'Sholay',
    year: 1975,
    rank: 7.4
  },
  underground: {
    id: 346269,
    name: 'Underground',
    year: 1995,
    rank: 7.8
  },
  manhattan: {
    id: 204163,
    name: 'Manhattan',
    year: 1979,
    rank: 8.2
  },
  charade: {
    id: 59411,
    name: 'Charade',
    year: 1963,
    rank: 8.1
  },
  harvey: {
    id: 139786,
    name: 'Harvey',
    year: 1950,
    rank: 8.1
  },
})

const movies_directors = seed(Movie_director,
  ({movies, directors}) =>({
    '71': {
      director_id: 71703,
      movie_id: 10830
    },
    '25': {
      director_id: 20713,
      movie_id: 59411
    },
    '18': {
      director_id: 13774,
      movie_id: 85611
    },
    '81': {
      director_id: 85169,
      movie_id: 118916
    },
    '11': {
      director_id: 12332,
      movie_id: 137655
    },
    '41': {
      director_id: 42430,
      movie_id: 139786
    },
    '12': {
      director_id: 1364,
      movie_id: 204163
    },
    '32': {
      director_id: 34658,
      movie_id: 266574
    },
    '82': {
      director_id: 84063,
      movie_id: 289167
    },
    '72': {
      director_id: 73972,
      movie_id: 299603
    },
    '43': {
      director_id: 43477,
      movie_id: 346269
    },
  })
  )

const movies_genres = seed(Movie_genre,
  ({Movie}) => ({
    '1': {
      movie_id: 10830,
      genre: 'Horror'
    },
    '2': {
      movie_id: 266574,
      genre: 'Horror'
    },
    '3': {
      movie_id: 85611,
      genre: 'Horror'
    },
    '4': {
      movie_id: 235282,
      genre: 'Horror'
    },
    '5': {
      movie_id: 137655,
      genre: 'Horror'
    },
    '6': {
      movie_id: 118916,
      genre: 'Horror'
    },
    '7': {
      movie_id: 289167,
      genre: 'Horror'
    },
    '8': {
      movie_id: 299603,
      genre: 'Comedy'
    },
    '9': {
      movie_id: 346269,
      genre: 'Comedy'
    },
    '10': {
      movie_id: 204163,
      genre: 'Comedy'
    },
    '11': {
      movie_id: 59411,
      genre: 'Comedy'
    },
    '12': {
      movie_id: 139786,
      genre: 'Comedy'
    },
  })
  )

const roles = seed(Role, 
  ({Actor, Movie}) => ({
    '1': {
      actor_id: 22700,
      movie_id: 10830,
      role: 'Alien'
    },
    '2': {
      actor_id: 212283,
      movie_id: 10830,
      role: 'Ash'
    },
    '3': {
      actor_id: 5774,
      movie_id: 266574,
      role: 'Tom Cassidy'
    },
    '4': {
      actor_id: 11633,
      movie_id: 266574,
      role: 'Charlie'
    },
    '5': {
      actor_id: 1254,
      movie_id: 85611,
      role: 'Video photographer'
    },
    '6': {
      actor_id: 93244,
      movie_id: 85611,
      role: 'Irv Danziger'
    },
    '7': {
      actor_id: 356711,
      movie_id: 235282,
      role: 'Walker'
    },
    '8': {
      actor_id: 12488,
      movie_id: 137655,
      role: "Thomas 'tommy' DOyle"
    },
    '9': {
      actor_id: 74195,
      movie_id: 137655,
      role: "Paul, Annie's boyfriend"
    },
    '10': {
      actor_id: 35821,
      movie_id: 118916,
      role: 'Herr Vogel'
    },
    '11': {
      actor_id: 42938,
      movie_id: 118916,
      role: 'Villager'
    },
    '12': {
      actor_id: 35387,
      movie_id: 289167,
      role: 'John'
    },
    '13': {
      actor_id: 35463,
      movie_id: 289167,
      role: 'Jeff'
    },
    '14': {
      actor_id: 3452,
      movie_id: 299603,
      role: 'Bnjo player'
    },
    '15': {
      actor_id: 5069,
      movie_id: 346269,
      role: 'Himself'
    },
    '16': {
      actor_id: 8286,
      movie_id: 204163,
      role: 'Isaac Davis'
    },
    '17': {
      actor_id: 13736,
      movie_id: 204163,
      role: 'Porsche Own'
    },
    '18': {
      actor_id: 18781,
      movie_id: 59411,
      role: 'Insp. Edouard Grandpierre'
    },
    '19': {
      actor_id: 49420,
      movie_id: 59411,
      role: 'Mr. Felix'
    },
    '20': {
      actor_id: 41316,
      movie_id: 139786,
      role: 'Mr. Herman'
    },
    '21': {
      actor_id: 58600,
      movie_id: 139786,
      role: 'Mailman'
    },
  })
  )

const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, things}) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id,    // users.barack is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
    },
    'god is into smiting': {
      user_id: users.god.id,
      thing_id: things.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      thing_id: things.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      thing_id: things.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, things, favorites, movies, actors, directors, movies_directors, movies_genres, roles})
