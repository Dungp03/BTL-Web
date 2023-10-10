function toggleHeartIcon(event) {
    var clickedIcon = event.target;
    var heartIcon = clickedIcon.parentElement.getElementsByClassName('bx-heart')[0];
    var heartIconAlt = clickedIcon.parentElement.getElementsByClassName('bxs-heart')[0];
    
    if (heartIcon.style.display !== 'none') {
      heartIcon.style.display = 'none';
      heartIconAlt.style.display = 'block';
    } else {
      heartIcon.style.display = 'block';
      heartIconAlt.style.display = 'none';
    }
  }