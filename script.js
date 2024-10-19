// script.js
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('expanded');
        if (box.classList.contains('expanded')) {
            box.innerHTML = `
                <div>Choose Color:</div>
                <button style="background-color:red;">Red</button>
                <button style="background-color:blue;">Blue</button>
                <button style="background-color:green;">Green</button>
                <div>Choose Size:</div>
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>`;
        } else {
            box.innerHTML = box.id; // Reset to original text
        }
    });
});