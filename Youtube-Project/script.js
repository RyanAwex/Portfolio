import { videoData } from "./video-data.js";

const menuBtn = document.getElementById('menu-toggle');
const iconsName = document.querySelectorAll('.nav-name');
const sideBar = document.querySelector('.sidebar');
const sideBarDiv = document.querySelectorAll('.sidebar-div');
const bodyClass = document.querySelector('.body-class');
// const divImage = document.querySelectorAll('.sidebar-image');

menuBtn.addEventListener('click', () => {
  iconsName.forEach((el) => {
    el.classList.toggle('nav-name-active');
  });

  sideBar.classList.toggle('sidebar-active');

  sideBarDiv.forEach((el) => {
    el.classList.toggle('sidebar-div-active');
  });
  
  bodyClass.classList.toggle('body-active');

  // divImage.forEach((el) => {
  //   el.classList.toggle('sidebar-img-active');
  // });
});



let videosHtml = "";

videoData.forEach((video) => {
  videosHtml += `
    <div class="video-preview">
  
      <div class="thumbnail-row">
        <a href="${video.videoLink}">
          <img class="thumbnail" src="${video.thumbnail}" >
        </a>
        <div class="video-time">${video.videoTime}</div>
      </div>

      <div class="video-info-grid">

        <div>
          <img src="${video.profileImage}" class="profile-picture">
        </div>

        <div>
          <p class="video-title">
            ${video.title}
          </p>

          <p class="video-author"> 
            ${video.author}
          </p>
    
          <p class="video-state">
            ${video.views}
          </p>
        </div>

      </div>
    </div>
  `;
});

document.querySelector(".js-videos-grid").innerHTML = videosHtml;
console.log('hello');