import '../css/index.styl';

// load images
$('.preload-photo').each((i, el) => {
  const img = new Image();
  img.onload = () => {
    $(el).addClass('loaded');
  };
  img.src = $(el).data('background');
});
