const header = () => {
    const view = `
            <img src="../src/img/1200px-Rick_and_Morty.svg.png" alt="Logo Rick and Morty">
            <div class= "header__title-container">
                <h1>Catálogo de personajes de la serie Rick and Morty</h1>
                <p>Este landing page te ayuda a navegar entre los diferentes personajes que trae la serie Rick and Morty</p>
            </div>
            <nav>
                <a href="#/about/">About</a>
            </nav>
    `;
    return view;
};

export default header;