const text = [
    "Philosophy (from Greek: φιλοσοφία, philosophia, 'love of wisdom') is the systematized study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language. Such questions are often posed as problems to be studied or resolved. Some sources claim the term was coined by Pythagoras (c. 570 – c. 495 BCE); others dispute this story, arguing that Pythagoreans merely claimed use of a preexisting term. Philosophical methods include questioning, critical discussion, rational argument, and systematic presentation.",
    "Historically, philosophy encompassed all bodies of knowledge and a practitioner was known as a philosopher. From the time of Ancient Greek philosopher Aristotle to the 19th century, 'natural philosophy' encompassed astronomy, medicine, and physics. For example, Newton's 1687 Mathematical Principles of Natural Philosophy later became classified as a book of physics. In the 19th century, the growth of modern research universities led academic philosophy and other disciplines to professionalize and specialize. Since then, various areas of investigation that were traditionally part of philosophy have become separate academic disciplines, and namely the social sciences such as psychology, sociology, linguistics, and economics.",
    "Today, major subfields of academic philosophy include metaphysics, which is concerned with the fundamental nature of existence and reality; epistemology, which studies the nature of knowledge and belief; ethics, which is concerned with moral value; and logic, which studies the rules of inference that allow one to derive conclusions from true premises. Other notable subfields include philosophy of religion, philosophy of science, political philosophy, aesthetics, philosophy of language, and philosophy of mind."
]

const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector(".generated-lorem");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value < 0 || value > text.length) {
        result.innerHTML = `<p class="result">${text[random]}</p>`
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="result"> ${item}</p>`;
        })
        .join("")
        result.innerHTML = tempText;
    }
})
