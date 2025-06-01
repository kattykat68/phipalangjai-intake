document.getElementById("intake-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // ดึงค่าจาก input ด้วย id โดยตรง
  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    intent: document.getElementById("intent").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyvOBZU4RiiH4EkD8pBZ0nReKggNhwbaJDCqFBs7T0dXZjOWxV3eLCFnajT1F8OOPx9/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  // สุ่มข้อความกำลังใจ
  const messages = [
    "💙 ขอบคุณที่กรอกแบบฟอร์มค่ะ พี่พลังใจอยู่ตรงนี้เสมอนะ",
    "🌱 คุณกำลังเริ่มต้นใหม่ พี่พลังใจดีใจมากเลย!",
    "🫶 แบบฟอร์มนี้คือก้าวแรกที่กล้าหาญ",
    "✨ พี่พลังใจขอส่งพลังให้คุณวันนี้เต็มที่เลยนะ"
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("response").innerText = message;

  // ล้างค่าในฟอร์ม
  document.getElementById("intake-form").reset();
});
