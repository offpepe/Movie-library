global.fetch = require('cross-fetch');


export const login = async (setToken, email, password) => {
    const log = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        }),
      });
    const login = await log.json();
    setToken(login.token);  
    return login;
  };

export const getMovies = async (setter) => {
  const { movies } = await (await fetch('http://localhost:3000/movies')).json();
  if (movies) {
    setter(movies);
    return true
  } else {
    return false;
  };
}

export const getMovieCover = async (filename, setter) => {
  const rawImage = await fetch(`http://localhost:3000/movies/img/${filename}`, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'inline; filename="picture.png"'
    }
  });
  setter(rawImage);
}