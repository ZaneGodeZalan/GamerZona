const indieData = {
    'hollow': {
        name: "Hollow Knight",
        desc: "A Hollow Knight egy gyönyörűen megrajzolt akció-kalandjáték, amely egy hatalmas, összefüggő rovarvilágban játszódik. A játékosok egy névtelen lovagot irányítanak, ami Hallownest romos királyságát fedezi fel a mélyben. A játék híres a precíz irányításáról, a rendkívül nehéz boss harcairól és a melankolikus hangulatáról. Minden egyes terület sajátos atmoszférával és titkokkal rendelkezik, amelyek fokozatosan fedik fel a birodalom bukásának történetét. Ez a metroidvania az indie fejlesztés egyik legalapvetőbb remekműve.",
        img: "img/hollowKinght.jpg"
    },
    'stardew': {
        name: "Stardew Valley",
        desc: "A Stardew Valley egy végtelenül barátságos farm-szimulátor, ahol nagyapád elhanyagolt gazdaságát kell virágzó birtokká varázsolnod. A játék során nemcsak ültethetsz, hanem horgászhatsz, bányászhatsz és barátságokat is köthetsz a falu lakóival. Az évszakok váltakozása és a különböző közösségi események gondoskodnak arról, hogy a vidéki élet sose váljon unalmassá. Egyetlen fejlesztő, ConcernedApe készítette, és ez a személyes odaadás minden egyes pixelben érezhető. Tökéletes választás a stresszmentes kikapcsolódásra.",
        img: "img/expedition33.jpg"
    },
    'hades': {
        name: "Hades",
        desc: "A Hades egy pörgős, rogue-like akciójáték, amely a görög mitológia világába kalauzolja el a játékosokat. Zagreus, az alvilág hercegének bőrébe bújva a célunk, hogy áttörjünk apánk, Hádész birodalmának védelmi vonalain, és feljussunk az Olümposzra. Minden egyes szökési kísérlet során különböző olümposzi istenek áldásait nyerhetjük el, ami teljesen egyedi fegyverkombinációkat tesz lehetővé. A játék zsenialitása abban rejlik, hogy a halál nem a kudarcot jelenti, hanem a történet továbbgördülését és a karakterünk folyamatos fejlődését.",
        img: "img/hades.jpg"
    },
    'celeste': {
        name: "Celeste",
        desc: "A Celeste egy kőkemény, mégis hihetetlenül inspiráló precíziós platformer játék, amely Madeline történetét meséli el. A fital lány elhatározza, hogy megmássza a rejtélyes Celeste-hegyet, miközben saját belső démonaival, a szorongással és a bizenytalansággal is meg kell küzdenie. A játékmenet rendkívül letisztult, de komoly ügyességet követel meg: ugrás, mászás és a levegőben való lökődés segítségével kell navigálnunk. A zseniális szinttervezés és a gyönyörű, érzelmes zenei aláfestés miatt ez a játék felejthetetlen élmény.",
        img: "img/celeste.jpg"
    },
    'outer': {
        name: "Outer Wilds",
        desc: "Az Outer Wilds egy egyedülálló, felfedezésre épülő sci-fi kalandjáték, amely egy 22 perces időhurokba zárt naprendszerben játszódik. Játékosként az űrprogram legújabb tagjaként indulunk útnak, hogy felderítsük egy ősi, rejtélyes civilizáció titkait. A hurok végén a nap szupernóvává válik, elpusztítva mindent, mi pedig újra a kiindulóponton ébredünk, de a megszerzett tudásunk megmarad. A játékban nincsenek hagyományos szintlépések, az egyetlen fejlődési forrásunk a saját kíváncsiságunk.",
        img: "img/outerwilds.jpg"
    }
};

// Első betöltés automatizálása
function initPage() {
    const firstBtn = document.querySelector('.list-btn');
    if(firstBtn) {
        showIndie('hollow', firstBtn);
    }
}

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

// Eredeti hírek tárolása a visszaállításhoz (így nem kell az oldalt újratölteni)
const newsFirstPage = {
    1: { title: "Hades II Bővítés", text: "Hatalmas frissítést jelentettek be az Early Access verzióhoz. Új fegyverek érkeznek..." },
    2: { title: "Silksong Jelek", text: "A Team Cherry adatbázis-frissítéseket végzett. Új mechanikák szivárogtak ki a mozgásról..." },
    3: { title: "Manor Lords Siker", text: "Az egyetlen fejlesztő által összerakott középkori stratégia letarolta az eladási listákat..." }
};

const newsSecondPage = {
    1: { title: "Hades II: Új Olympus Update", text: "A belsős források szerint az új frissítéssel érkezik egy teljesen új fegyver, két eddig nem látott olümposzi patrónus, valamint a sztori mód folytatása." },
    2: { title: "Silksong: A fizika átalakul", text: "A legújabb tesztfázisban a fejlesztők finomítottak a hálóvetési mechanikákon, amivel minden eddiginél gyorsabbá válik a vertikális harcrendszer." },
    3: { title: "Manor Lords: Folytatás", text: "A fejlesztő bejelentette, hogy a bevétel jelentős részét a stúdió bővítésére és egy teljesen új ostrommechanika lefejlesztésére fordítja." }
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
            content.querySelector('h5').innerText = newsFirstPage[id].title;
            content.querySelector('.news-text').innerText = newsFirstPage[id].text;
            button.innerText = "RÉSZLETEK >>";
        }
        content.classList.remove('fade-out');
    }, 300);
}

