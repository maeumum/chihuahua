document.addEventListener("DOMContentLoaded", () => {
  const iphoneFrame = document.querySelector(".iphone-frame");
  const startButton = document.querySelector(".center-group");
  const screen1 = document.querySelector(".screen-1");
  const screen2 = document.querySelector(".screen-2");
  const screen3 = document.querySelector(".screen-3");
  const clickText = document.querySelector(".click-text");
  const screen4 = document.querySelector(".screen-4");
  const screen5 = document.querySelector(".screen-5");
  const screen4Text = document.querySelector(".screen4-text");

  if (!iphoneFrame || !startButton || !screen1 || !screen2 || !screen3 || !clickText || !screen4 || !screen5 || !screen4Text) return;

  startButton.style.cursor = "pointer";

  startButton.addEventListener("click", () => {
    // 첫 화면 숨기고 두 번째 화면 표시
    screen1.style.display = "none";
    screen2.style.display = "block";

    // 전체 톤을 하얀 화면에 맞게 조정
    iphoneFrame.style.background = "#FFFFFF";
    document.body.style.background = "#FFFFFF";

    // 1초 동안은 완전히 빈 하얀 화면 유지
    screen2.classList.remove("show-content");
    setTimeout(() => {
      // 1초 뒤에 이미지와 텍스트 서서히 나타나게
      screen2.classList.add("show-content");
    }, 1000);
  });

  // "클릭해봐!!"를 누르면 세 번째 슬라이드로
  clickText.style.cursor = "pointer";
  clickText.addEventListener("click", () => {
    screen2.style.display = "none";
    screen3.style.display = "block";
  });

  // Screen 3 전체를 클릭하면 Screen 4로
  screen3.style.cursor = "pointer";
  screen3.addEventListener("click", () => {
    screen3.style.display = "none";
    screen4.style.display = "block";
  });

  // Screen 4 중앙 텍스트를 클릭하면 Screen 5로
  screen4Text.style.cursor = "pointer";
  screen4Text.addEventListener("click", () => {
    screen4.style.display = "none";
    screen5.style.display = "block";
  });
});
