// Vanilla FadeOut Effect (As seen in jQuery)

function fadeOut(element, duration = 600) {
  element.style.display = '';
  element.style.opacity = 1;
  var last = +new Date();
  var tick = function() {
    element.style.opacity = Number(+element.style.opacity - (new Date() - last) / duration).toFixed(4);
    last = +new Date();
    if (-element.style.opacity <= 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}
