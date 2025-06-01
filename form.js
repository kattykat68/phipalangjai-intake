document.getElementById("intake-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    age: form.age.value,
    intent: form.intent.value
  };

  fetch("https://script.google.com/macros/s/AKfycbx8F6QPt_MJWgrrl3hcgDlyU7lTWTPV1SB8KR32ZuXZWHr3glvRJbXWv4hhrc_Mq4Tk/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  document.getElementById("response").innerText = "ส่งข้อมูลสำเร็จ! ขอบคุณที่กรอกแบบฟอร์มค่ะ 💙 พี่พลังใจเป็นกำลังใจให้นะคะ ✨";
  form.reset();
});
document.getElementById("response").innerText = "ส่งข้อมูลสำเร็จ! ขอบคุณที่กรอกแบบฟอร์มค่ะ 💙 พี่พลังใจเป็นกำลังใจให้นะคะ ✨";
const messages = [
  "💙 ขอบคุณที่กรอกแบบฟอร์มค่ะ พี่พลังใจอยู่ตรงนี้เสมอนะ",
  "🌱 คุณกำลังเริ่มต้นใหม่ พี่พลังใจดีใจมากเลย!",
  "🫶 แบบฟอร์มนี้คือก้าวแรกที่กล้าหาญ",
  "✨ พี่พลังใจขอส่งพลังให้คุณวันนี้เต็มที่เลยนะ"
];
const message = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("response").innerText = message;
