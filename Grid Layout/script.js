let isDrawing = false;

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mousedown", function() {
        isDrawing = true;
        this.classList.add("clicked"); 
    });

   
    item.addEventListener("mousemove", function() {
        if (isDrawing) {
            this.classList.add("clicked");
        }
    });

  
    document.addEventListener("mouseup", function() {
        isDrawing = false;
    });
});