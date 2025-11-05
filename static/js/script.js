// ฟังก์ชันทักทาย (ตามที่คุณเรียกในปุ่มอยู่แล้ว)
function sayHello(name) {
  alert(`สวัสดีครับ ${name} ยินดีที่ได้รู้จัก!`);
}

// เอฟเฟกต์ตกแต่ง: ลอย emoji น่ารักเบาๆ เมื่อคลิกพื้นที่ว่าง
document.body.addEventListener('click', function (e) {
  // ไม่รบกวนถ้าคลิกปุ่ม
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;

  const emojis = ['✨', '🎮', '🍜', '💻', '🎉'];
  const emoji = document.createElement('div');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = 'absolute';
  emoji.style.left = `${e.pageX}px`;
  emoji.style.top = `${e.pageY}px`;
  emoji.style.fontSize = '24px';
  emoji.style.pointerEvents = 'none';
  emoji.style.animation = 'floatUp 1s ease-out forwards';
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 1000);
});
function sayHello(name) {
  const jumpscare = document.getElementById("jumpscare");
  const video = document.getElementById("jumpscareVideo");
  const audio = document.getElementById("jumpscareAudio");

  jumpscare.style.display = "block";
  video.currentTime = 0;
  audio.currentTime = 0;
  video.muted = false;
  audio.play();
  video.play();

  video.onended = () => {
    jumpscare.style.display = "none";
  };
}
function closeJumpscare() {
  document.getElementById('jumpscare').style.display = 'none';
  document.getElementById('jumpscareVideo').pause();
  document.getElementById('jumpscareVideo').currentTime = 0;
}
