$(document).ready(() => {
  // main slider
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
  
  // status counter

  let statusValue = $(".status span");
  const $statusVar = $(statusValue);

  let dataValues = $statusVar.map(function () {
    return $(this).data('value');
  }).get()

  let duration = dataValues.map((e) => e * 4);
  let maxDuration = Math.max(...duration);

  $statusVar.each(function (index) {
    let init = 0;
    let x = setInterval(() => {
      if (init >= dataValues[index] - 1) {
        clearInterval(x);
      }
      init += 1;
      $(this).html(init);
    }, maxDuration / dataValues[index]);
  })

  // team info

  let team = [
    {
      imgSrc: "images/team1.png",
    },
    {
      imgSrc: "images/team2.png",
    },
    {
      imgSrc: "images/team3.png",
    }
  ];

  let head = $(".volunteers .volunteersMem .content h6");

  for (const [index, value] of Array.from(head).entries()) {
    $(value).click(function () {
      let teamInfo = team[index];
      
      $(".teamInfo .memCard .img").html(
        `<img src="${teamInfo.imgSrc}" alt="team1" class="img-fluid">`
      );
    })
  }

  $(".teamInfo").fadeOut();
  $(".volunteers .volunteersMem .content h6").click(function () {
    $(".teamInfo").fadeIn(500);
  });

  $(".memCard").click(function (e) {
    e.stopPropagation();
  });

  $(".teamInfo").click(function () {
    $(this).fadeOut(500);
  });
})


