// script.js
document.addEventListener("DOMContentLoaded", () => {
    const subjects = [
        {
            name: "Math",
            image: "img/mathh.jpeg",
            link: "https://en.wikipedia.org/wiki/Mathematics",
            description: "Mathematics is a body of abstract knowledge resulting from logical deductions applied to various mathematical objects such as sets, numbers, shapes, structures and transformations. It is also the science that helps in understanding quantitative relationships, geometry and statistics. Mathematics is also concerned with the study of topics such as quantity, structure, space and change, as it occupies most of our lives."
        },
        {
            name: "Physics",
            image: "img/physics.jpeg",
            link: "https://en.wikipedia.org/wiki/Physics#:~:text=Physics%20is%20the%20scientific%20study,physics%20is%20called%20a%20physicist.",
            description: "Physics is a branch of natural sciences, which enters into special, unique and interesting areas of research, and has - like other sciences - foundations, rules and principles, and there are many ways to learn and master it. Physics is concerned with many issues that it tries to explain and link together. It arose and developed from the study of nature and philosophy, until near the end of the nineteenth century when the concept of the philosophy of nature appeared. Now physics can be defined as the study of matter, energy and the relationship between them."
        },
        {
            name: "Chemistry",
            image: "img/Chemistry.jpeg",
            link: "https://en.wikipedia.org/wiki/Chemistry",
            description: "Chemistry is the science that studies matter and the changes that occur to it, specifically by studying its properties, structure, composition, behavior, interactions and what happens through them. Chemistry studies atoms and the bonds that occur between them to form molecules, and how these molecules are linked together to form matter. It also studies the interactions that occur between them. Chemistry is of great importance in our lives, and it enters into many fields and plays an important role in industries of various kinds, such as food industries, the manufacture of cleaning materials, paints, dyes, the manufacture of medicines and drugs, textiles, clothing, weapons and others. It has other applications in medicine and other sciences. Chemistry is called the central science due to its essential role in linking the natural sciences together."
        },
        {
            name: "Biology",
            image: "img/piology.jpeg",
            link: "https://en.wikipedia.org/wiki/Biology",
            description: "Biology is a natural science that studies life and living organisms, including their structures, functions, growth, development, distribution, and classification. Modern biology is a broad field that consists of many branches and sub-disciplines, but it includes some general unifying concepts that link its different branches and on which all studies and research proceed. In biology, the cell is generally viewed as the basic unit of life, the gene as the basic unit of heredity, and evolution as the engine that creates new species. It is also understood in present-day biology that all living organisms survive by consuming and converting energy, and by regulating the internal environment to maintain a stable and vital state."
        }
    ];

    const contentDiv = document.getElementById("content");

    subjects.forEach(subject => {
        const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("subject");

        subjectDiv.innerHTML = `
            <h2>${subject.name}</h2>
            <img src="${subject.image}" alt="${subject.name}">
            <p>${subject.description}</p>
            <p>
                <a href="${subject.link}" target="_blank">Click here to learn more ${subject.name}</a>
            </p>
        `;

        contentDiv.appendChild(subjectDiv);
    });
});