var instance = new vidbg(".vidio",{
    mp4: "vidio/world.mp4",// URL or relative path to MP4 vidio
    webn: "vidio/world.webm",// URL or relative path to webn vidio
    poster: "vidio/poster.jpg",// URL or relative path to fallback image
    overlay: false, //Boolean to display the overlay or not
});
var rellax = new Rellax(".rocket");
if (document.body.clientWidth < 576) {
    rellax.destroy();
}
AOS.init();