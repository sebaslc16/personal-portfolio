function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.about');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.skills');
});

link3.addEventListener('click', () => {
    scrollToElement('.projects');
});

link4.addEventListener('click', () => {
    scrollToElement('.contact');
});

// Define the language reload
var language = {
    eng: {
        welcome:
            "Hi, I'm a Software developer. I am passionate about the world of technology and being able to create creative solutions."
    },
    es: {
        welcome:
            "Hola, Soy desarrollador de software. Me apasiona el mundo de la tecnología y poder crear soluciones creativas."
    },
    hin: {
        welcome:
            "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
            "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
            "भाषा को चुन सकते हैं!",
    },
};

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Check if a hash value exists in the URL
if (window.location.hash) {
  
    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#es") {
      siteContent.textContent =
        language.es.welcome;
    }
    
    if (window.location.hash == "#en") {
        siteContent.textContent =
          language.eng.welcome;
      }
  }