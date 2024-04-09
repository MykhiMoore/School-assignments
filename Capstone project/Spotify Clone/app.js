const music = new Audio('vande.mp3');
// create Array

const songs = [
    {
        id:'1',
        songName:` What We Have
        <div class="subtitle">summrs</div>`,
        poster: "images/what we have summrs.png",
    },
    {
        id:'2',
        songName:`Last Valentine
        <div class="subtitle">Pink Pantheress</div>`,
        poster: "images/last valentine.png",
    },
    {
        id:'3',
        songName:`Doomsday
        <div class="subtitle">MF DOOM</div>`,
        poster: "images/doomsday.jpeg",
    },
    {
        id:'4',
        songName:` Mysëlf 
        <div class="subtitle">Yeat</div>`,
        poster: "images/afterlife.jpeg",
    },
    {
        id:'5',
        songName:`Let It Happen
        <div class="subtitle">Tampa Impala</div>`,
        poster: "images/currents.jpeg",
    },
    {
        id:'6',
        songName:`Randomly <br>
        <div class="subtitle">Lucki</div>`,
        poster: "images/randomly.png",
    },
    {
        id:'7',
        songName:` Mascara<br>
        <div class="subtitle">Deftones</div>`,
        poster: "images/around the fur.jpg",
    },
    {
        id:'8',
        songName:`Good Life w/ T-pain<br>
        <div class="subtitle">Kanye West</div>`,
        poster: "images/graduation.jpeg",
    },
    {
        id:'9',
        songName:`Forgotten<br>
        <div class="subtitle">Linkin Park</div>`,
        poster: "images/hybird theory.jpeg",
    },
    {
        id:'10',
        songName:` Xtayalive<br>
        <div class="subtitle">Jhygs & 9lives</div>`,
        poster: "images/xtayalive.jpeg",
    },
    {
        id:'11',
        songName:`Hope ulike me<br>
        <div class="subtitle">Thapojj</div>`,
        poster: "images/hope ulike me.jpeg",
    },
    {
        id:'12',
        songName:`Shine n Peace<br>
        <div class="subtitle">Nettspend</div>`,
        poster: "images/shine n peace.jpeg",
    },
    {
        id:'13',
        songName:`93 till infinity<br>
        <div class="subtitle">Souls Of Mischief</div>`,
        poster: "images/Souls Of mischief.jpeg",
    },
    
    
    //all Object type
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
 

let masterPlay = document.getElementById('masterPlay');
let wave =document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2')        
    }
})

const makeAllPlays = () =>{
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('bi-play-circle-fill')
        element.classList.remove('bi-pause-circle-fill')

    })
}

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill')
        e.target.classList.add('bi-pause-circle-fill')
        music.src = `audio/${index}.mp3`;
        music.play();
    })
})