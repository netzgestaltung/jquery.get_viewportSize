/**
 * get the width and height of the "html" element.
 *
 * for touch devices is this the "viewport"
 *
 * @ Homepage: https://github.com/netzgestaltung/jquery.get_viewportSize/
 * @ Copyright 2015 nexxar/Thomas Fellinger
 * @ License GPLv2
 *
 * @return  {object}  size  object which contains width and height in numbers (pixels)
 */
jQuery.get_viewportSize = function get_viewportSize() {
  var size = {
    width: window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
    height: $('html').innerHeight()
  }
  return size;
};
