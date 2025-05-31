
document.getElementById("intake-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    age: form.age.value,
    intent: form.intent.value
  };
  console.log("ส่งข้อมูล:", data);
  document.getElementById("response").innerText = "ส่งข้อมูลสำเร็จ! ขอบคุณที่กรอกแบบฟอร์มค่ะ 💙";
});
