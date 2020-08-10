import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    methos: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();
        return resp;
      }
      throw new Error('Não foi possível cadastrar os dados ;( ');
    });
}

export default {
  create,
};
