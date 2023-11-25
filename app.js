document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.getElementById("memeForm");
    const memesContainer = document.getElementById("memesContainer");

    memeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const imageURL = document.getElementById("imageURL").value;
        const topText = document.getElementById("topText").value;
        const bottomText = document.getElementById("bottomText").value;

        // Create meme container
        const memeContainer = document.createElement("div");
        memeContainer.classList.add("meme");

        // Create meme image
        const memeImage = document.createElement("img");
        memeImage.src = imageURL;
        memeContainer.appendChild(memeImage);

        // Create meme text
        const memeText = document.createElement("div");
        memeText.innerHTML = `<p>${topText}</p><p>${bottomText}</p>`;
        memeContainer.appendChild(memeText);

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("removeBtn");
        removeButton.addEventListener("click", function () {
            memesContainer.removeChild(memeContainer);
        });
        memeContainer.appendChild(removeButton);

        // Append meme container to memes container
        memesContainer.appendChild(memeContainer);

        // Clear form inputs
        memeForm.reset();
    });
});
