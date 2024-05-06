const music = new Audio('Roxas.mp3');

//create array

const songs = [
    {
        id: '1',
        songName:`What We Have 
        <div class="subtitle">summrs</div>`,
        poster: "img/what we have summrs.jpeg"
    },
    {
        id: '2',
        songName:` Last Valentine <br>
        <div class="subtitle">Pink Pantheress</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '3',
        songName:` Doomsday <br>
        <div class="subtitle">MF DOOM</div>`,
        poster: "img/Doomsday.jpeg"
    },
    {
        id: '4',
        songName:`  Mysëlf<br>
        <div class="subtitle">Yeat</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '5',
        songName:`Let It Happen<br>
        <div class="subtitle">Tame Impala</div>`,
        poster: "img/currents.jpeg"
    },
    {
        id: '6',
        songName:` Randomly <br>
        <div class="subtitle">Lucki</div>`,
        poster: "img/Randomly.jpeg"
    },
    {
        id: '7',
        songName:` Mascara <br>
        <div class="subtitle">Pink Pantheress</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '8',
        songName:` Good Life w/ T-pain <br>
        <div class="subtitle">Kanye West</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '9',
        songName:` Forgotten <br>
        <div class="subtitle">Linkin Park</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '10',
        songName:` Xtayalive<br>
        <div class="subtitle">Jhygs & 9lives</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '11',
        songName:` Hope ulike me <br>
        <div class="subtitle">Yhapojj</div>`,
        poster: "img/last valentine.jpeg"
    },
    {
        id: '12',
        songName:` Shine n Peace <br>
        <div class="subtitle">Nettspend</div>`,
        poster: "img/last valentine.jpeg"
    },
    { 
        id: '13',
        songName:`Glass House <br>
        <div class="subtitle">xxxtentacion</div>`,
        poster: "img/heartbreak hotel.jpeg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
})