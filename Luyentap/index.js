// index.js

function goBack() {
    window.location.href = "../index.html";
}

var exams = [
    { id: 1, subject: "Toán", startButtonId: "startExam1" },
    { id: 2, subject: "Văn", startButtonId: "startExam2" },
    { id: 3, subject: "Anh", startButtonId: "startExam3" }
];

// Lặp qua danh sách bài thi và tạo hàng cho mỗi bài thi
var immediateExamListTable = document.getElementById("immediateExamListBody");
exams.forEach(function(exam) {
    var row = createExamRow(exam.id, exam.subject, exam.startButtonId);
    immediateExamListTable.appendChild(row);
});

// Danh sách các bài thi mở theo thời gian
var timedExams = [
    { id: 4, subject: "Lịch sử", startTime: "8:00 AM" },
    { id: 5, subject: "Địa lý", startTime: "10:00 AM" }
];

// Lặp qua danh sách bài thi mở theo thời gian và tạo hàng cho mỗi bài thi
var timedExamListTable = document.getElementById("timedExamListBody");
timedExams.forEach(function(exam) {
    var row = createTimedExamRow(exam.id, exam.subject, exam.startTime);
    timedExamListTable.appendChild(row);
});

// Hàm tạo hàng cho bài thi có thể làm ngay lập tức
function createExamRow(id, subject, startButtonId) {
    var row = document.createElement("tr");

    var numberCell = document.createElement("td");
    numberCell.textContent = id;
    row.appendChild(numberCell);

    var subjectCell = document.createElement("td");
    subjectCell.textContent = subject;
    row.appendChild(subjectCell);

    var startButtonCell = document.createElement("td");
    var startButton = document.createElement("button");
    startButton.textContent = "Bắt đầu làm bài";
    startButton.setAttribute("id", startButtonId);
    startButtonCell.appendChild(startButton);
    row.appendChild(startButtonCell);

    return row;
}

// Hàm tạo hàng cho bài thi mở theo thời gian
function createTimedExamRow(id, subject, startTime) {
    var row = document.createElement("tr");

    var numberCell = document.createElement("td");
    numberCell.textContent = id;
    row.appendChild(numberCell);

    var subjectCell = document.createElement("td");
    subjectCell.textContent = subject;
    row.appendChild(subjectCell);

    var startTimeCell = document.createElement("td");
    startTimeCell.textContent = startTime;
    row.appendChild(startTimeCell);

    var startButtonCell = document.createElement("td");
    var startButton = document.createElement("button");
    startButton.textContent = "Bắt đầu làm bài";
    startButtonCell.appendChild(startButton);
    row.appendChild(startButtonCell);

    return row;
}

// Function to update current time
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var currentTime = hours + ':' + minutes + ':' + seconds;

    var clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = currentTime;
    }
}

// Update clock every second
setInterval(updateClock, 1000);
