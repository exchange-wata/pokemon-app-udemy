import { Pokemon, Pokemons } from 'types/pokemon';

export const getAll = (url: string): Promise<Pokemons> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error('レスポンスが正しくありませんでした。');

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

export const getEach = (url: string): Promise<Pokemon> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error('レスポンスが正しくありませんでした。');

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};
