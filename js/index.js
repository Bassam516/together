$(document).ready(() => {
    let imgArr = [
      "../images/slider01.jpg",
      "../images/slider02.jpg",
      "../images/slider03.jpg",
    ];
    let i = 1;

    $("#slide").attr("src", `${imgArr[0]}`);

    setInterval(() => {
      $("#slide").attr("src", `${imgArr[i]}`);

      if (i < imgArr.length - 1) {
        i++;
      } else {
        i = 0;
      }
    }, 5000);
})


