/**
 * get the width and height of the viewport.
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
    height: window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
  }
  return size;
};
