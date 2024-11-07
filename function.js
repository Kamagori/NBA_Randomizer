// Lista de nomes de arquivo das imagens
const imageNames = [
    'Hornets.png',
    '8190_atlanta_hawks-primary-2021.png',
    'boston_celtics_logo_primary_19977628.png',
    'brooklyn_nets_logo_primary_2025_sportslogosnet-1591.png',
    'chicago_bulls_logo_primary_19672598.png',
    'cleveland_cavaliers_logo_primary_2023_sportslogosnet-5369.png',
    '3463_dallas_mavericks-primary-2018.png',
    '8926_denver_nuggets-primary-2019.png',
    'detroit_pistons_logo_primary_20185710.png',
    '3152_golden_state_warriors-primary-2020.png',
    '6830_houston_rockets-primary-2020.png',
    '4812_indiana_pacers-primary-2018.png',
    'los_angeles_clippers_logo_primary_2025_sportslogosnet-5542.png',
    'los_angeles_lakers_logo_primary_2024_sportslogosnet-7324.png',
    '4373_memphis_grizzlies-primary-2019.png',
    'burm5gh2wvjti3xhei5h16k8e.png',
    'milwaukee_bucks_logo_primary_20165763.png',
    '9669_minnesota_timberwolves-primary-2018.png',
    'new_orleans_pelicans_logo_primary_2024_sportslogosnet-9292.png',
    'new_york_knicks_logo_primary_2024_sportslogosnet-7170.png',
    'khmovcnezy06c3nm05ccn0oj2.png',
    'orlando_magic_logo_primary_20117178.png',
    '7034_philadelphia_76ers-primary-2016.png',
    'phoenix_suns_logo_primary_20143696.png',
    '9725_portland_trail_blazers-primary-2018.png',
    '4043_sacramento_kings-primary-2017.png',
    '2547_san_antonio_spurs-primary-2018.png',
    '7024_toronto_raptors-primary-2021.png',
    'utah_jazz_logo_primary_2023_sportslogosnet-8513.png',
    '5671_washington_wizards-primary-2016.png',

];

let slideshowInterval;
let currentImageIndex = 0;
const slideshowButton = document.getElementById('slideshowButton');
const slideshowImage = document.getElementById('slideshowImage');

// Função para iniciar ou parar o slideshow
function toggleSlideshow() {
    if (!slideshowInterval) {
        slideshowInterval = setInterval(showNextImage, 10); // 0.01 segundos
        slideshowButton.textContent = 'Finalizar Sorteio';
    } else {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        slideshowButton.textContent = 'Começar Sorteio';
    }
}

// Função para exibir a próxima imagem
function showNextImage() {
    const imageUrl = `images/${imageNames[currentImageIndex]}`;
    slideshowImage.src = imageUrl;
    currentImageIndex = (currentImageIndex + 1) % imageNames.length;
}

// Adiciona um event listener para o botão
slideshowButton.addEventListener('click', toggleSlideshow);