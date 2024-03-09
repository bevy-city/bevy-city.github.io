var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const getInTouchElem = document.getElementsByClassName('header__center-r-b-button')[0]
const burgerMenuElem = document.getElementsByClassName('burger-menu')[0]
const closeMobileElem = document.getElementById('contact-dialog__close-mobile')

const contactDialogElem = document.getElementsByClassName('contact-dialog')[0]

let dialogOpenState = false

const openCloseDialog = () => {
  if (dialogOpenState) {
    dialogOpenState = false
    contactDialogElem.classList.remove('contact-dialog--open')
  } else {
    dialogOpenState = true
    contactDialogElem.classList.add('contact-dialog--open')
  }
}

getInTouchElem.onclick = openCloseDialog

burgerMenuElem.onclick = openCloseDialog

closeMobileElem.onclick = () => {
    dialogOpenState = false
    contactDialogElem.classList.remove('contact-dialog--open')
}


}
/*
     FILE ARCHIVED ON 13:15:36 Nov 25, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:19:32 Mar 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.085
  esindex: 0.009
  LoadShardBlock: 145.336 (6)
  PetaboxLoader3.datanode: 188.683 (7)
  load_resource: 311.656
  PetaboxLoader3.resolve: 227.857
*/