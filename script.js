function predictPlacement() {

    let name = document.getElementById("name").value;

    let attendance = Number(document.getElementById("attendance").value);

    let midterm = Number(document.getElementById("midterm").value);

    let finalscore = Number(document.getElementById("finalscore").value);

    let assignment = Number(document.getElementById("assignment").value);

    let project = Number(document.getElementById("project").value);

    let study = Number(document.getElementById("study").value);

    let output = document.getElementById("output");

    let message = document.getElementById("message");

    let confidence = document.getElementById("confidence");

    let status = document.getElementById("status");

    if (
        attendance >= 85 &&
        finalscore >= 75 &&
        project >= 70 &&
        study >= 12
    ) {

        output.innerHTML = "✅ Placement Eligible";
        output.className = "approved";

        confidence.innerHTML = "95%";

        status.innerHTML = "Eligible";

        message.innerHTML =
            "<b>" + name + "</b>, your academic performance indicates that you are eligible for campus placements. Continue improving your technical, aptitude, and interview skills.";

    }

    else {

        output.innerHTML = "❌ Placement Not Eligible";
        output.className = "rejected";

        confidence.innerHTML = "78%";

        status.innerHTML = "Not Eligible";

        message.innerHTML =
            "<b>" + name + "</b>, you need to improve your academic performance, attendance, and project work to become eligible for placements.";

    }

}
