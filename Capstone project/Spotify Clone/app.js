const music = new Audio('vande.mp3');

// create Array

const songs = [
    {
        id:'1',
        songName:` Summrs
        <div class="subtitle">What We Have</div>`,
        poster: "images/what we have summrs.png",
    },
    {
        id:'2',
        songName:`Pink Pantheress
        <div class="subtitle">Last Valentine</div>`,
        poster: "images/last valentine.png",
    },
    {
        id:'3',
        songName:`MF DOOM
        <div class="subtitle">Doomsday</div>`,
        poster: "images/doomsday.jpeg",
    },
    {
        id:'4',
        songName:` Yeat 
        <div class="subtitle">Mysëlf</div>`,
        poster: "images/afterlife.jpeg",
    },
    {
        id:'5',
        songName:`Tampa Impala
        <div class="subtitle">Let It Happen</div>`,
        poster: "images/currents.jpeg",
    },
    {
        id:'6',
        songName:`Lucki <br>
        <div class="subtitle">Randomly</div>`,
        poster: "images/randomly.png",
    },
    {
        id:'7',
        songName:` Deftones<br>
        <div class="subtitle">Mascara</div>`,
        poster: "images/last valentine.png",
    },
    {
        id:'8',
        songName:`Kanye West<br>
        <div class="subtitle">Good Life w/ T-pain</div>`,
        poster: "images/graduation.jpeg",
    },
    {
        id:'9',
        songName:`Linkin park<br>
        <div class="subtitle">Forgotten</div>`,
        poster: "images/hybird theory.jpeg",
    },
    {
        id:'10',
        songName:` Jhygs & 9lives<br>
        <div class="subtitle">Xtayalive</div>`,
        poster: "images/xtayalive.jpeg",
    },
    {
        id:'11',
        songName:`Yhapojj<br>
        <div class="subtitle">Hope ulike me</div>`,
        poster: "images/hope ulike me.jpeg",
    },
    {
        id:'12',
        songName:`Nettspend<br>
        <div class="subtitle">Shine N Peace</div>`,
        poster: "images/shine n peace.jpeg",
    },
    
    //all Object type
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');


masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');       
    }
})