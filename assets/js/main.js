let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
];

const content = document.getElementById("content");

const title = document.createElement("h1");
title.setAttribute("id", "top");
title.textContent = "QUIZ";
document.body.insertBefore(title, content);

const sprungmarke = document.createElement("a");
sprungmarke.setAttribute("href", "#top");
sprungmarke.classList.add("sprungmarke");
sprungmarke.innerHTML = "&#128640;";
document.body.appendChild(sprungmarke);


data.forEach((element, index) => {
    // Elemente erstellen
    const section = document.createElement("section"); // Parent-container
    const imgContainer = document.createElement("div"); // Img-container
    const questionElement = document.createElement("h2"); // Question Heading 2
    const choiceContainer = document.createElement("div"); // Choice-container
    const outputMessage = document.createElement("p"); // Output message (right, false)

    // Elemente im HTML-Dokument unterbringen
    content.appendChild(section);
    section.appendChild(imgContainer);
    section.appendChild(questionElement);
    section.appendChild(choiceContainer);
    section.appendChild(outputMessage);

    // Füge CSS Klassen
    section.classList.add("section");
    imgContainer.classList.add("imgContainer");
    questionElement.classList.add("qHeading");
    choiceContainer.classList.add("choiceContainer");
    outputMessage.classList.add("message");

    // Elemente beschreiben bzw. stylen
    imgContainer.style.backgroundImage = `url(${element.url})`;
    questionElement.textContent = element.question;

    // Generiere einen Button für jede Antwortmöglichkeit
    element.choice.forEach(choiceElement => {
        // console.log(choiceElement);
        const choiceButtons = document.createElement("button"); // Button for each choice
        choiceButtons.textContent = choiceElement;
        choiceButtons.classList.add("buttonStyle");
        choiceContainer.appendChild(choiceButtons);
        // console.log(choiceButtons.innerText);

        choiceButtons.addEventListener("click", () => {
            // console.log(choiceElement);
            // console.log(choiceButtons.textContent);
            choiceButtons.style.backgroundColor = "black";
            if (element.answer.toString() === choiceButtons.textContent) {
                choiceButtons.style.backgroundColor = "green";
                outputMessage.textContent = "Richtig!";
                outputMessage.style.color = "green";
            } else {
                choiceButtons.style.backgroundColor = "red";
                outputMessage.textContent = "Leider Falsch";
                outputMessage.style.color = "red";
            }
            // choiceButtons.style.backgroundColor = "inherit";
        });
        // choiceButtons.style.removeProperty(backgroundColor);
    });

});

