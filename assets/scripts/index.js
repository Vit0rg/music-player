/*Importação dos arquivos, aqui futuramente
JSONS pode ser recebido e tratado*/
const songs = 
[
  {
    id:'1',
    songName: "Pots And Pans VIP (ft. Messinian)",
    artistName: "AUDIGY",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/1.mp3"
  },
  {
    id:'2',
    songName: "Illusion [NCS Release]",
    artistName: "Max Brhon",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/2.mp3"
  },
  {
    id:'3',
    songName: "Pain [NCS Release]",
    artistName: "Max Brhon",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/3.mp3"
  },
  {
    id:'4',
    songName: "The Future [NCS Release]",
    artistName: "Max Brhon",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/4.mp3"
  },
  {
    id:'5',
    songName: "Neon Night",
    artistName: "Nikky DiJaffy",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/5.mp3"
  },
  {
    id:'6',
    songName: "Clouds [NCS Release]",
    artistName: "Anna Yvette & AFK",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/6.mp3"
  },
  {
    id:'7',
    songName: "Paralyzed (feat. Tyler Fiore) [NCS Release]",
    artistName: "DM Galaxy",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/7.mp3"
  },
  {
    id:'8',
    songName: "Twisted Reality [NCS Release]",
    artistName: "Unknown Brain & Anna Yvette",
    poster: "./assets/img/monika.png",
    songSource: "./assets/audio/8.mp3"
  }
]

let artists = 
[
  {
    id: "1",
    artistName: "AUDIGY",
    poster: "./assets/img/monika.png",
    followers: "30001"
  },
  {
    id: "2",
    artistName: "Max Brhon",
    poster: "./assets/img/monika.png",
    followers: "1000300"
  },
  {
    id: "3",
    artistName: "Anna Yvette",
    poster: "./assets/img/monika.png",
    followers: "10405000"
  },
  {
    id: "4",
    artistName: "AFK",
    poster: "./assets/img/monika.png",
    followers: "2900000"
  },
  {
    id: "5",
    artistName: "Nikky DiJaffy",
    poster: "./assets/img/monika.png",
    followers: "1400430"
  },
  {
    id: "6",
    artistName: "Unknown Brain",
    poster: "./assets/img/monika.png",
    followers: "1006070"
  },
  {
    id: "7",
    artistName: "DM Galaxy",
    poster: "./assets/img/monika.png",
    followers: "1006070"
  },
  {
    id: "8",
    artistName: "The Chainsmokers",
    poster: "./assets/img/monika.png",
    followers: "696070"
  },
  {
    id: "9",
    artistName: "No Mana",
    poster: "./assets/img/monika.png",
    followers: "696370"
  },
  {
    id: "10",
    artistName: "Deadmau5",
    poster: "./assets/img/monika.png",
    followers: "696070"
  }
]

/*Inicialização geral de elementos:*/
let mainTitle = document.querySelector("h1");
let music = new Audio(songs[0].songSource);
mainTitle.innerText = `${songs[0].songName} - ${songs[0].artistName}`;
let containerSongs = document.querySelector(".container_songs");
let containerArtists = document.querySelector(".container_artists");
const menuSong = document.querySelector("#menu_song");
const masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
document.getElementById("currentEnd").innerText = "00:00";
let volumeInput = document.getElementById("volume");
let volumeCur = document.getElementById("curVolume");
volumeCur.style.width = `${volumeInput.value}%`;
let index = 1;
let nameSongPlaying =  document.querySelector("#song_playing h4");
let artistSongPlaying =  document.querySelector("#song_playing h5");
nameSongPlaying.innerHTML = songs[0].songName;


/*Trecho responsável por colapsar ou expandir os submenus 
dentro do menu na barra lateral*/
const collapseButton = document.querySelector("img.collapse");
const sideMenus = document.querySelectorAll("nav#menu_side ul");
const mainContent = document.querySelector("article main");

collapseButton.addEventListener("click", () =>
{
  sideMenus.forEach(menu => 
  {
    menu.classList.toggle("hidden");
  });
  sideMenus[0].parentNode.classList.toggle("collapsed");
  mainContent.classList.toggle("collapsed");
});

//Seletor de categoria no menu lateral:
let categories = document.getElementsByClassName("category");
Array.from(categories).forEach((category)=>
{
  category.addEventListener('click', ()=>
  {
    Array.from(categories).forEach((item) =>
    {
      item.classList.remove("selected");
    })
    category.classList.add("selected");
  })
})

//Inicializar itens de artista:
let generateAllArtistItems = Array.from(artists).forEach((item)=>
{
  containerArtists.appendChild(createArtistItem(item.artistName, item.id))
})

//Criar item de artista:
function createArtistItem(name, indexArtist) 
{
  let li = document.createElement('li');
  li.className = "artist_item";
  li.title = name;
  li.innerHTML = `<img class="svg" src="${artists[indexArtist-1].poster}">`;
  return li;  
}

/*Trecho responsável pela inicialização dos arquivos de música
*/
let hasPoster = false;
let isInSidebar = true;
let generateAllSongItems = Array.from(songs).forEach(item => 
{
  if (item.id < 6)
  {
    menuSong.appendChild(createSongItem(item.id, hasPoster, isInSidebar))
    return
  }
  isInSidebar = false
  hasPoster = true;    
  containerSongs.appendChild(createSongItem(item.id, hasPoster, isInSidebar))            
});

//Criar item de música:
function createSongItem(index, hasPoster, isInSidebar) 
{
  let li = document.createElement('li');
  li.className = "songItem playlistItem";
  li.title = `${songs[index-1].songName} ${songs[index-1].artistName}`;
  li.id = songs[index-1].id;
  li.innerHTML = `
  <span class="container_song_author"> 
    <h4>
      ${songs[index-1].songName}
    </h4>
    <h5>
      ${songs[index-1].artistName}
    </h5>
  </span>`;
  if(isInSidebar)
  {
    li.innerHTML = `
    <span class="container_song_author"> 
      <h4>
        ${songs[index-1].songName}
      </h4>
      <h5>
        ${songs[index-1].artistName}
      </h5>
    </span>
    <img class="svg" src="./assets/img/play-fill.svg">
    `;
  }
  if (hasPoster)
  {
    li.style.backgroundImage = `url("${songs[index-1].poster}")`;
  }
  return li;
}

//Buscar artista ou música:
let artistItems = document.querySelectorAll('.artist_item');
let songItems = document.querySelectorAll('.songItem');
let allSongNames =  document.querySelectorAll(".container_song_author h4");
let allArtistNames =  document.querySelectorAll(".container_song_author h5");
let searchInput = document.querySelector("#search input");

searchInput.addEventListener("input", (e) =>
{
  const value = e.target.value.toLowerCase();
  songItems.forEach(item =>
  {
    const isVisible = allArtistNames[item.id - 1].innerText.toLowerCase().includes(value)
    || allSongNames[item.id -1].innerText.toLowerCase().includes(value);
    item.classList.toggle("hidden", !isVisible);
  })
  Array.from(containerArtists.children).forEach(item =>
    {
      const isVisible = item.title.toLowerCase().includes(value);
      item.classList.toggle("hidden", !isVisible);
    })
})

//Controle do botão play/pause:
masterPlay.addEventListener('click', ()=>
{
  if (music.paused || music.currentTime <= 0) 
  {
    music.play();
    masterPlay.src = "./assets/img/pause-fill.svg";
    wave.classList.add("waves_animation_active");
    return
  } 
    
  music.pause();
  masterPlay.src = "./assets/img/play-fill.svg"
  wave.classList.remove("waves_animation_active");
});


/*Reset de botões*/
const makeAllPlays = () =>
{

Array.from(document.getElementsByClassName("playlistItem")).forEach(
  (item)=>
  {
    item.src = "./assets/img/play-fill.svg"
  })
}

/*Reset de songItems*/
const resetItems = () =>
{

Array.from(document.getElementsByClassName("songItem")).forEach(
  (item)=>
  {
    item.src = "./assets/img/play-fill.svg"
    item.classList.remove("highlight_list_item");
  })
}
makeAllPlays();

//Gatilhos da função setToPlay: 
Array.from(document.getElementsByClassName("playlistItem")).forEach(
(item)=>
{
  item.addEventListener('click', (e)=>
  {
    index = e.target.parentNode.id;
    setToPlay();
    music.addEventListener("ended", () =>
    {
      wave.classList.remove("waves_animation_active");
      masterPlay.src = "./assets/img/pause-fill.svg";
    })
  })
})

//Inserir dados em diversos campos da página, inicia reprodução:
let setToPlay =() =>
{
  resetItems();
  makeAllPlays();
  masterPlay.src = "./assets/img/pause-fill.svg";
  document.getElementById(`${index}`).classList.add("highlight_list_item");
  mainTitle.innerText = `${songs[index-1].songName} - ${songs[index-1].artistName}`;
  wave.classList.add("waves_animation_active");
  nameSongPlaying.innerHTML = songs[index-1].songName;
  music.src = songs[index-1].songSource;
  music.volume = volumeInput.value/100;
  music.play();
}

/*Timer: */
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let progressBar = document.getElementById("progressBar")
seek.value = 0;

music.addEventListener('timeupdate', () => 
{
  //Injetar dados do início e fim da música atual:
  currentEnd.innerText = "00:00";
  let music_cur = music.currentTime;
  let hour_cur = Math.floor(music_cur / 360);
  let min_cur = Math.floor(music_cur / 60);
  let sec_cur = Math.floor(music_cur % 60);

  if(min_cur < 10)
    min_cur = `0${min_cur}`;
  
  if(sec_cur < 10)
    sec_cur = `0${sec_cur}`;

  if (hour_cur < 1)
    currentStart.innerText = `${min_cur}:${sec_cur}`;
  else
    currentStart.innerText = `${hour_cur}:${min_cur}:${sec_cur}`;

  let music_dur = music.duration;
  let hour = Math.floor(music_dur / 360);
  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  
  if(min < 10)
    min = `0${min}`;
  
  if(sec < 10)
    sec = `0${sec}`;

  if (hour < 1)
    currentEnd.innerText = `${min}:${sec}`;
  else
    currentEnd.innerText = `${hour}:${min}:${sec}`;

  let progressIndex = parseInt((music_cur/music_dur)*100);
  seek.value = progressIndex;
  progressBar.style.width = `${progressIndex + 2}%`
  if (progressIndex > 50)
    progressBar.style.width = `${progressIndex - 1}%`;
})
//Seeker para tempo específico da música:
seek.addEventListener('change', () => 
{
  music.currentTime = seek.value * music.duration/100; 
})

//Ponto de entrada para reprodução automática:
music.addEventListener("ended", () =>
{
  index++;
  if(index > Array.from(document.getElementsByClassName("playlistItem")).length)
    index = 1;
  setToPlay();
})

//Controlador do volume:
let volIcon = document.getElementById("vol_icon");
volumeInput.addEventListener('change', ()=>
{
  music.volume = volumeInput.value/100
  volumeCur.style.width = `${(music.volume)*100}%`;
  if (music.volume < 0.5)
    volumeCur.style.width = `${(music.volume)*100 + 5}%`;

  if(volumeInput.value == 0)
  {
    volIcon.src = "./assets/img/volume-mute-fill.svg"
    return
  }
  if (volumeInput.value > 50)
  {
    volIcon.src = "./assets/img/volume-up-fill.svg"
    return
  }
  volIcon.src = "./assets/img/volume-down-fill.svg"
})

//Botões de voltar e avançar música:
let back = document.getElementById("back");
let next = document.getElementById("next");

//Botão voltar:
back.addEventListener('click', ()=>
{
  index --;
  if(index < 1)
  {
    index = Array.from(document.getElementsByClassName("playlistItem")).length
  }
  setToPlay();
})

//Botão avançar
next.addEventListener('click', ()=>
{
  index ++;
  if(index > Array.from(document.getElementsByClassName("playlistItem")).length)
  {
    index = 1;
  }
  setToPlay();
})

//Controladores de scroll horizontal:
generateHorizontalScrolls(document.getElementById("left_scroll_songs"),
                          document.getElementById("right_scroll_songs"),
                          containerSongs)

generateHorizontalScrolls(document.getElementById("left_scroll_artists"), 
                          document.getElementById("right_scroll_artists"), 
                          containerArtists)

//Gerador de scrolls horizontais:
function generateHorizontalScrolls(leftButton, rightButton, target)
{
  
  leftButton.addEventListener('click', () =>
  {
    target.scrollLeft -= (window.innerWidth / 4);
  })
  
  rightButton.addEventListener('click', () =>
  {
    target.scrollLeft += (window.innerWidth / 4);
  })
}

