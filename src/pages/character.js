const character = () => {
    const view = `
        <main class="character-inner">
            <article class="character-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Episodes: </h3>
                <h3>Statuss: </h3>
                <h3>Species: </h3>
                <h3>Gender: </h3>
                <h3>Origin: </h3>
                <h3>Last Location: </h3>
            </article>
        </main>
    `;
    return view;
};

export default character;