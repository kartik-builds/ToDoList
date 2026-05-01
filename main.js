console.log("Hello world....")
document.querySelector(".taskButton").addEventListener("click", () => {
    const taskInput = document.querySelector(".taskInput");
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.textContent = task;
        li.addEventListener("click", (e) => {
            // prevent double toggle when clicking checkbox itself
            if (e.target.tagName !== "INPUT") {
                checkbox.checked = !checkbox.checked;

                // optional: trigger change event (for strike-through)
                checkbox.dispatchEvent(new Event("change"));
            }
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        document.querySelector(".taskList").appendChild(li);
        taskInput.value = "";
        taskInput.focus();
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });
    }
})
document.querySelector(".deleteButton").addEventListener("click", () => {
    const tasks = document.querySelectorAll(".taskList li");
    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            task.remove();
        }
    });
})
const taskInput = document.querySelector(".taskInput");

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.querySelector(".taskButton").click();
    }
});


