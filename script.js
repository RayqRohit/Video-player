// let listVideo = document.querySelector('.video-list .vid');
// let mainVideo = document.querySelector('.main-video video');
// let title = document.querySelector('.main-video .title');

// listVideo.forEach(video => {
//     video.onclick = () => {
//         listVideo.forEach(vid => vid.classList.remove('active'));

//         video.classList.add('active');
//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttribute('src');
//             mainVideo.src = src;
//         };
//     };
// });

let videoList = document.querySelectorAll('.video-list .vid');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video .main-video1').src = src;
      document.querySelector('.main-video .main-video1').play();
      document.querySelector('..main-video .main-list-title').innerHTML = title;
   };
});