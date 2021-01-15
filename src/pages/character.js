import getHash from '../utils/getHash';
import getData from '../utils/getData';

const character = async() => {
    const id = getHash();
    const character = await getData(id);
    const view = `
        <main>
            <section class="card--container">
                <article class="character-card">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </article>
                <article class="character-card--details">
                    <h3>Episodes: <span>${character.episode.length}</span></h3>
                    <h3>Statuss: <span>${character.status}</span></h3>
                    <h3>Species: <span>${character.species}</span></h3>
                    <h3>Gender: <span>${character.gender}</span></h3>
                    <h3>Origin: <span>${character.origin.name}</span></h3>
                    <h3>Last Location: <span>${character.location.name}</span></h3>
                </article>
            </section>
        </main>
    `;
    return view;
};

export default character;