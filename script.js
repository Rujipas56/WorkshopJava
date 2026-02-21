function calculateGrade() {
  let score = document.getElementById("score").value;
  let result = document.getElementById("result");

  if (score === "") {
    result.innerText = "กรุณากรอกคะแนน";
    return;
  }

  score = Number(score);

  if (score < 0 || score > 100) {
    result.innerText = "คะแนนต้องอยู่ระหว่าง 0 - 100";
  } 
  else if (score >= 80) {
    result.innerText = "เกรดที่ได้: A";
  } 
  else if (score >= 70) {
    result.innerText = "เกรดที่ได้: B";
  } 
  else if (score >= 60) {
    result.innerText = "เกรดที่ได้: C";
  } 
  else if (score >= 50) {
    result.innerText = "เกรดที่ได้: D";
  } 
  else {
    result.innerText = "เกรดที่ได้: F";
  }
}
