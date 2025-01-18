document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
  
    video.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);

    const video1 = document.getElementById('myVideo1');
  
    video1.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  });
  