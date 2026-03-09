<script>
window.addEventListener("load", () => {
  const left = document.querySelector(".curtain.left");
  const right = document.querySelector(".curtain.right");
  const intro = document.getElementById("intro");

  left.style.animation = "curtainOpenLeft 1.5s ease forwards 2s";
  right.style.animation = "curtainOpenRight 1.5s ease forwards 2s";

  setTimeout(() => {
    intro.style.display = "none"; // يشيل الانترو بعد 3.5 ثانية تقريبًا
  }, 3500);
});
</script>
