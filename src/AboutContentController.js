const AboutContentController = () => {
    let contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    let image = document.createElement("img");
    let headline = document.createElement("div");
    let bodyText = document.createElement("div");
    image.src = "../src/chad-montano-eeqbbemH9-c-unsplash.jpg";
    image.style = "width: 100%; height: 100%";
    headline.textContent = "About the Restaurant";
    bodyText.textContent = "About section text"
    contentContainer.appendChild(image);
    contentContainer.appendChild(headline);
    contentContainer.appendChild(bodyText);
};

export { AboutContentController };