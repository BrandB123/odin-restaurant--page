const HomeContentController = () => {
    let contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    let image = document.createElement("img");
    let headline = document.createElement("div");
    let bodyText = document.createElement("div");
    image.src = "../src/chad-montano-eeqbbemH9-c-unsplash.jpg";
    image.style = "width: 100%; height: 100%";
    headline.textContent = "Restaurant Headline";
    bodyText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque totam rerum sapiente eligendi. Repudiandae dolor error explicabo recusandae sapiente, sequi enim ipsam eaque hic esse totam blanditiis nobis adipisci perferendis."
    contentContainer.appendChild(image);
    contentContainer.appendChild(headline);
    contentContainer.appendChild(bodyText);
};

export { HomeContentController };