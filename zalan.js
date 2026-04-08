const indieData = {
    'hollow': {
        name: "Hollow Knight",
        desc: "A Hollow Knight egy gyönyörűen megrajzolt akció-kalandjáték, amely egy hatalmas, összefüggő rovarvilágban játszódik. A játékosok egy névtelen lovagot irányítanak, aki Hallownest romos királyságát fedezi fel a mélyben. A játék híres a precíz irányításáról, a rendkívül nehéz boss harcairól és a melankolikus hangulatáról. Minden egyes terület sajátos atmoszférával és titkokkal rendelkezik, amelyek fokozatosan fedik fel a birodalom bukásának történetét. Ez a metroidvania az indie fejlesztés egyik legmagasabb szintű alkotása, amely felejthetetlen élményt nyújt.",
        img: "img/hollowKinght.jpg"
    },
    'stardew': {
        name: "Stardew Valley",
        desc: "A Stardew Valley egy végtelenül barátságos farm-szimulátor, ahol nagyapád elhanyagolt gazdaságát kell virágzó birtokká varázsolnod. A játék során nemcsak ültethetsz, hanem horgászhatsz, bányászhatsz és barátságokat is köthetsz a falu lakóival. Az évszakok váltakozása és a különböző közösségi események gondoskodnak arról, hogy a vidéki élet sose váljon unalmassá. Egyetlen fejlesztő, ConcernedApe készítette, és ez a személyes odaadás minden egyes pixelben érezhető. Tökéletes választás azoknak, akik egy kis nyugalomra és stresszmentes kikapcsolódásra vágynak.",
        img: "img/expedition33.jpg"
    }
};

function showIndie(key, element) {
    const content = document.getElementById('indieContent');
    const placeholder = document.getElementById('placeholder-info');
    const data = indieData[key];

    if (data) {
        placeholder.style.display = 'none';
        content.style.display = 'block';

        document.getElementById('indieName').innerText = data.name;
        document.getElementById('indieDesc').innerText = data.desc;
        document.getElementById('indieImg').src = data.img;

        document.querySelectorAll('.list-btn').forEach(b => b.classList.remove('active'));
        element.classList.add('active');
    }
}

const newsSecondPage = {
    1: {
        title: "Silksong: A belsős infó",
        text: "A legutóbbi tesztek alapján a játék már játszható állapotban van, de a Team Cherry tökéletességre törekszik. Megjelenés: Amikor kész lesz."
    },
    2: {
        title: "A magyar siker titka",
        text: "A 'Project Budapest' nevű játék már 100.000 eladásnál jár. A fejlesztő szerint a siker kulcsa a közösségi visszajelzés volt."
    },
    3: {
        title: "Pixel Art jövője",
        text: "A kutatások szerint a játékosok 40%-a a hangulat miatt választja a pixeles stílust a fotorealisztikus helyett."
    }
};

function flipNews(id) {
    const card = document.getElementById(`news-card-${id}`);
    const content = card.querySelector('.news-content');
    const button = card.querySelector('.btn-neon-mini');
    content.classList.add('fade-out');
    
    setTimeout(() => {
        if (button.innerText === "RÉSZLETEK >>") {
            content.querySelector('h5').innerText = newsSecondPage[id].title;
            content.querySelector('.news-text').innerText = newsSecondPage[id].text;
            button.innerText = "<< VISSZA";
        } else {
            location.reload();
        }
        content.classList.remove('fade-out');
    }, 300);
}