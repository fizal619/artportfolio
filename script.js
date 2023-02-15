const gallery = document.getElementById('lightgallery');
const files = [
  "2019_1_com.png",
  "2020_1.gif",
  "2020_2_com.png",
  "2020_3.gif",
  "2020_4.png",
  "2021_1_com.png",
  "2021_2_com.png",
  "2021_3.png",
  "2021_4.png",
  "2021_5.png",
  "2022_1.png",
  "2022_2.png",
  "2022_3_com.png",
  "2022_4.gif",
  "2022_5.png",
  "2022_6.gif",
  "2022_7.png",
  "2023_1.png",
  "2023_2_com.jpg"
]

files.reverse()

files.forEach(file => {
  gallery.innerHTML += `
    <a href="/assets/${file}" >
        <img class="thumb" alt="file" src="/assets/thumb-${file}" />
    </a>
  `;
});

lightGallery(gallery, {
  plugins: [lgZoom, lgThumbnail],
  speed: 500
});
