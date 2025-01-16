let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];


const quizQuestions = [
    {
        question: "Which programming language is primarily used for web development?",
        options: ["Python", "JavaScript", "C#", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Modern Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is known for its simplicity and readability?",
        options: ["Java", "Python", "C", "Ruby"],
        correctAnswer: "Python"
    },
    {
        question: "What is the extension of a JavaScript file?",
        options: [".js", ".java", ".jsx", ".ts"],
        correctAnswer: ".js"
    },
    {
        question: "Which company developed the Java programming language?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        correctAnswer: "Sun Microsystems"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following is a Python framework for web development?",
        options: ["Django", "React", "Angular", "Spring"],
        correctAnswer: "Django"
    },
    {
        question: "Which keyword is used to define a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the main feature of Node.js?",
        options: ["Asynchronous I/O", "Strong typing", "Static typing", "Synchronous processing"],
        correctAnswer: "Asynchronous I/O"
    },
    {
        question: "Which of these is a JavaScript framework?",
        options: ["React", "Django", "Laravel", "Spring Boot"],
        correctAnswer: "React"
    },
    {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/* */", "--"],
        correctAnswer: "#"
    },
    {
        question: "Which of these languages is known as a backend language?",
        options: ["HTML", "CSS", "Java", "Photoshop"],
        correctAnswer: "Java"
    },
    {
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Private Hypertext Processor", "PHP: Hypertext Preprocessor", "Preprocessor Hypertext Protocol"],
        correctAnswer: "PHP: Hypertext Preprocessor"
    },
    {
        question: "Which JavaScript method is used to write into the console?",
        options: ["console.log()", "print()", "write()", "document.write()"],
        correctAnswer: "console.log()"
    },
    {
        question: "Which of these is a version control system?",
        options: ["Git", "Docker", "MySQL", "TensorFlow"],
        correctAnswer: "Git"
    },
    {
        question: "Which of these is a NoSQL database?",
        options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
        correctAnswer: "MongoDB"
    },
    {
        question: "What is the file extension of a Java file?",
        options: [".java", ".jar", ".js", ".class"],
        correctAnswer: ".java"
    },
    {
        question: "What is the correct syntax for a for loop in Python?",
        options: [
            "for (i = 0; i < 10; i++) {}",
            "for i in range(10):",
            "for each i in range(10):",
            "foreach i in range(10)"
        ],
        correctAnswer: "for i in range(10):"
    },
    {
        question: "Which of these is a Python library for data analysis?",
        options: ["NumPy", "Pandas", "TensorFlow", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Object Node", "Java Syntax Object Notation", "JavaScript Offline Node"],
        correctAnswer: "JavaScript Object Notation"
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        options: ["func", "function", "def", "method"],
        correctAnswer: "function"
    },
    {
        question: "Which of the following is a valid way to declare an array in JavaScript?",
        options: [
            "let arr = []",
            "let arr = {}",
            "let arr = ()",
            "let arr = <>"
        ],
        correctAnswer: "let arr = []"
    },
    {
        question: "What is the use of the `id` attribute in HTML?",
        options: ["Styling", "JavaScript interaction", "DOM manipulation", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which is not a frontend framework?",
        options: ["Vue.js", "Angular", "Flask", "React"],
        correctAnswer: "Flask"
    },
    {
        question: "Which programming language is used for Android development?",
        options: ["Kotlin", "Java", "Both", "Swift"],
        correctAnswer: "Both"
    },
    {
        question: "Which of these is not a relational database?",
        options: ["SQLite", "PostgreSQL", "Redis", "MySQL"],
        correctAnswer: "Redis"
    },
    {
        question: "Which language is used to query databases?",
        options: ["SQL", "NoSQL", "HTML", "C++"],
        correctAnswer: "SQL"
    },
    {
        question: "What is React primarily used for?",
        options: ["Server-side rendering", "Client-side rendering", "Database management", "Package management"],
        correctAnswer: "Client-side rendering"
    },
    {
        question: "Which method is used to fetch data in JavaScript?",
        options: ["get()", "fetch()", "query()", "httpGet()"],
        correctAnswer: "fetch()"
    },
    {
        question: "What does API stand for?",
        options: ["Application Program Interface", "Application Programming Interface", "Application Protocol Interface", "Advanced Programming Integration"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "Which JavaScript library is used for DOM manipulation?",
        options: ["React", "jQuery", "Vue", "Bootstrap"],
        correctAnswer: "jQuery"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["background-color", "color", "bg-color", "background"],
        correctAnswer: "background-color"
    },
    {
        question: "Which Python module is used for working with regular expressions?",
        options: ["re", "regex", "exp", "match"],
        correctAnswer: "re"
    },
    {
        question: "Which keyword is used for inheritance in Java?",
        options: ["extend", "implements", "extends", "inherit"],
        correctAnswer: "extends"
    },
    {
        question: "Which of the following is a strongly-typed language?",
        options: ["Python", "C++", "JavaScript", "PHP"],
        correctAnswer: "C++"
    },
    {
        question: "Which of these is a CSS framework?",
        options: ["Bootstrap", "Django", "Flask", "Vue"],
        correctAnswer: "Bootstrap"
    },
    {
        question: "What is the purpose of Docker?",
        options: ["Containerization", "Database management", "Version control", "Frontend development"],
        correctAnswer: "Containerization"
    },
    {
        question: "Which is the default package manager for Node.js?",
        options: ["npm", "pip", "composer", "yarn"],
        correctAnswer: "npm"
    },
    {
        question: "Which operator is used for comparison in Python?",
        options: ["=", "==", "!=", "==="],
        correctAnswer: "=="
    },
    {
        question: "Which Python library is used for machine learning?",
        options: ["scikit-learn", "NumPy", "Pandas", "Flask"],
        correctAnswer: "scikit-learn"
    },
    {
        question: "What is the output of '5' + 5 in JavaScript?",
        options: ["10", "55", "Error", "Undefined"],
        correctAnswer: "55"
    },
    {
        question: "Which of these is a static typed language?",
        options: ["Python", "JavaScript", "TypeScript", "PHP"],
        correctAnswer: "TypeScript"
    },
    {
        question: "Which of these is an example of a scripting language?",
        options: ["Python", "C", "Java", "Kotlin"],
        correctAnswer: "Python"
    },
    {
        question: "What does OOP stand for?",
        options: ["Object-Oriented Programming", "Object Optimization Programming", "Overloaded Object Protocol", "Open Object Programming"],
        correctAnswer: "Object-Oriented Programming"
    },
    {
        question: "What is the main purpose of Git?",
        options: ["Version control", "Database management", "Frontend development", "Code execution"],
        correctAnswer: "Version control"
    },
    {
        question: "Which of these is an interpreted language?",
        options: ["C++", "Java", "Python", "C"],
        correctAnswer: "Python"
    },
    {
        question: "What does the 'const' keyword do in JavaScript?",
        options: [
            "Declares a variable that cannot be reassigned",
            "Declares a function",
            "Creates a class",
            "None of the above"
        ],
        correctAnswer: "Declares a variable that cannot be reassigned"
    },
    {
        question: "What is Big-O notation used for?",
        options: [
            "Measuring the execution time of algorithms",
            "Optimizing a database",
            "Defining syntax rules",
            "Structuring code"
        ],
        correctAnswer: "Measuring the execution time of algorithms"
    },
    {
        question: "Which of these is a type of sorting algorithm?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the primary use of SQL?",
        options: ["Designing web pages", "Querying databases", "Building APIs", "Writing scripts"],
        correctAnswer: "Querying databases"
    },
    {
        question: "Which Python function is used to open a file?",
        options: ["file()", "open()", "read()", "write()"],
        correctAnswer: "open()"
    },
    {
        question: "What does DOM stand for in web development?",
        options: [
            "Document Object Model",
            "Data Output Module",
            "Document Oriented Markup",
            "Dynamic Object Model"
        ],
        correctAnswer: "Document Object Model"
    },
    {
        question: "Which of these is not a JavaScript data type?",
        options: ["String", "Boolean", "Integer", "Undefined"],
        correctAnswer: "Integer"
    },
    {
        question: "Which programming language is best for statistical computing?",
        options: ["R", "C#", "PHP", "Kotlin"],
        correctAnswer: "R"
    },
    {
        question: "Which language is most commonly used for AI and machine learning?",
        options: ["Python", "Ruby", "PHP", "C++"],
        correctAnswer: "Python"
    },
    {
        question: "Which of the following is an open-source front-end framework?",
        options: ["Bootstrap", "Flask", "Laravel", "Express"],
        correctAnswer: "Bootstrap"
    },
    {
        question: "What does the keyword 'return' do in a function?",
        options: [
            "Exits the function and returns a value",
            "Pauses the function temporarily",
            "Declares a variable",
            "Starts a loop"
        ],
        correctAnswer: "Exits the function and returns a value"
    },
    {
        question: "Which of these is a strongly-typed language?",
        options: ["TypeScript", "JavaScript", "PHP", "Ruby"],
        correctAnswer: "TypeScript"
    },
    {
        question: "Which of the following is a framework for JavaScript?",
        options: ["Angular", "Django", "Flask", "Spring"],
        correctAnswer: "Angular"
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function inside another function that can access its variables",
            "A type of loop",
            "A method to bind events",
            "A class that creates objects"
        ],
        correctAnswer: "A function inside another function that can access its variables"
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "Which of these is not a JavaScript framework or library?",
        options: ["React", "Vue", "Django", "Svelte"],
        correctAnswer: "Django"
    },
    {
        question: "What is recursion?",
        options: [
            "A function that calls itself",
            "A type of data structure",
            "A way to loop over an array",
            "None of the above"
        ],
        correctAnswer: "A function that calls itself"
    },
    {
        question: "What is the default port for HTTP?",
        options: ["21", "80", "443", "8080"],
        correctAnswer: "80"
    },
    {
        question: "Which of these is a database indexing method?",
        options: ["B-Tree", "Linked List", "Queue", "Stack"],
        correctAnswer: "B-Tree"
    },
    {
        question: "Which Python module is used for data visualization?",
        options: ["Matplotlib", "NumPy", "Flask", "Requests"],
        correctAnswer: "Matplotlib"
    },
    {
        question: "What is a JavaScript Promise used for?",
        options: [
            "Handling asynchronous operations",
            "Declaring variables",
            "Making the code synchronous",
            "None of the above"
        ],
        correctAnswer: "Handling asynchronous operations"
    },
    {
        question: "What is the correct file extension for a TypeScript file?",
        options: [".js", ".ts", ".jsx", ".tsx"],
        correctAnswer: ".ts"
    },
    {
        question: "What is the default scope of a variable declared with 'var' in JavaScript?",
        options: ["Global", "Local", "Block", "Function"],
        correctAnswer: "Function"
    },
    {
        question: "Which HTML tag is used to include JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correctAnswer: "<script>"
    },
    {
        question: "Which of these is a type of linked list?",
        options: ["Singly", "Doubly", "Circular", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What does MVC stand for in software development?",
        options: [
            "Model View Controller",
            "Module Version Control",
            "Multi View Controller",
            "Model Value Component"
        ],
        correctAnswer: "Model View Controller"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        question: "What is the result of dividing a number by 0 in JavaScript?",
        options: ["NaN", "Infinity", "Error", "Undefined"],
        correctAnswer: "Infinity"
    },
    {
        question: "Which of the following is an interpreted language?",
        options: ["JavaScript", "C", "C++", "Rust"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which sorting algorithm has a worst-case time complexity of O(n^2)?",
        options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
        correctAnswer: "Bubble Sort"
    },
    {
        question: "Which of these is a functional programming language?",
        options: ["Haskell", "JavaScript", "Ruby", "C++"],
        correctAnswer: "Haskell"
    },
    {
        question: "What does the 'this' keyword represent in JavaScript?",
        options: ["The current object", "The global object", "The parent function", "The DOM"],
        correctAnswer: "The current object"
    },
    {
        question: "Which JavaScript method removes the last element of an array?",
        options: ["pop()", "push()", "shift()", "slice()"],
        correctAnswer: "pop()"
    },
    {
        question: "Which of these is not a programming paradigm?",
        options: ["Object-oriented", "Functional", "Procedural", "Widget-oriented"],
        correctAnswer: "Widget-oriented"
    },
    {
        question: "Which CSS property is used to align text?",
        options: ["text-align", "font-align", "align", "justify"],
        correctAnswer: "text-align"
    },
    {
        question: "Which of these is an immutable data structure in Python?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        correctAnswer: "Tuple"
    },
    // Programming Basics
    { question: "What does 'HTML' stand for?", options: ["Hyper Text Markup Language", "High Tool Markup Language", "Hyperlink Text Mark Language", "Hyper Transfer Markup Language"], correctAnswer: "Hyper Text Markup Language" },
    { question: "What is the primary function of a compiler?", options: ["Execute code", "Translate code to machine language", "Edit code", "Manage memory"], correctAnswer: "Translate code to machine language" },
    { question: "What symbol is used to denote a single-line comment in Python?", options: ["//", "#", "<!--", "--"], correctAnswer: "#" },
    { question: "What is an IDE?", options: ["Integrated Design Environment", "Integrated Development Environment", "Internet Data Execution", "Independent Development Execution"], correctAnswer: "Integrated Development Environment" },
    { question: "Which of these is a backend programming language?", options: ["HTML", "CSS", "Node.js", "React"], correctAnswer: "Node.js" },

    // Python Questions
    { question: "What keyword is used to define a function in Python?", options: ["func", "function", "def", "define"], correctAnswer: "def" },
    { question: "Which method is used to remove whitespace from the start and end of a string?", options: ["strip()", "trim()", "clean()", "remove()"], correctAnswer: "strip()" },
    { question: "What is the output of 5 // 2 in Python?", options: ["2", "2.5", "3", "Error"], correctAnswer: "2" },
    { question: "Which Python library is used for data analysis?", options: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"], correctAnswer: "Pandas" },
    { question: "What does the 'len()' function do?", options: ["Prints a list", "Returns length of an object", "Deletes an element", "Returns a list"], correctAnswer: "Returns length of an object" },

    // JavaScript Questions
    { question: "Which keyword is used to declare a constant in JavaScript?", options: ["const", "let", "var", "constant"], correctAnswer: "const" },
    { question: "What will 'typeof null' return in JavaScript?", options: ["object", "null", "undefined", "number"], correctAnswer: "object" },
    { question: "Which of the following is not a JavaScript framework?", options: ["React", "Vue", "Angular", "Laravel"], correctAnswer: "Laravel" },
    { question: "How do you write a single-line comment in JavaScript?", options: ["<!-- -->", "#", "//", "/* */"], correctAnswer: "//" },
    { question: "Which operator is used to compare both value and type?", options: ["==", "===", "!=", "="], correctAnswer: "===" },

    // Data Structures
    { question: "Which of these is a linear data structure?", options: ["Tree", "Graph", "Queue", "Heap"], correctAnswer: "Queue" },
    { question: "What data structure follows the Last In, First Out (LIFO) principle?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: "Stack" },
    { question: "Which searching algorithm has O(log n) time complexity?", options: ["Linear Search", "Binary Search", "Depth-First Search", "Breadth-First Search"], correctAnswer: "Binary Search" },
    { question: "What does a hash table use to store elements?", options: ["Keys", "Indexes", "Pointers", "None"], correctAnswer: "Keys" },
    { question: "Which of the following is used to represent hierarchical data?", options: ["Array", "Tree", "Queue", "Stack"], correctAnswer: "Tree" },

    // Algorithms
    { question: "Which sorting algorithm has the best time complexity?", options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"], correctAnswer: "Merge Sort" },
    { question: "Which algorithm is used to find the shortest path in a graph?", options: ["Dijkstra's Algorithm", "DFS", "Merge Sort", "Bubble Sort"], correctAnswer: "Dijkstra's Algorithm" },
    { question: "Which of these is not a divide-and-conquer algorithm?", options: ["Merge Sort", "Quick Sort", "Binary Search", "Bubble Sort"], correctAnswer: "Bubble Sort" },
    { question: "What is the time complexity of a linear search?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: "O(n)" },
    { question: "Which algorithm uses recursion for sorting?", options: ["Bubble Sort", "Quick Sort", "Heap Sort", "Selection Sort"], correctAnswer: "Quick Sort" },

    // Databases
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"], correctAnswer: "Structured Query Language" },
    { question: "Which command is used to delete all rows in a table?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correctAnswer: "TRUNCATE" },
    { question: "What does the SELECT command do?", options: ["Deletes data", "Inserts data", "Fetches data", "Updates data"], correctAnswer: "Fetches data" },
    { question: "Which clause is used to filter rows?", options: ["WHERE", "ORDER BY", "GROUP BY", "FILTER"], correctAnswer: "WHERE" },
    { question: "Which of the following is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], correctAnswer: "MongoDB" },

    // General Programming
    { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Program Interaction", "Applied Program Interface"], correctAnswer: "Application Programming Interface" },
    { question: "Which of these languages is used to style a webpage?", options: ["HTML", "CSS", "Python", "Java"], correctAnswer: "CSS" },
    { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "Hyper Tool Transfer Protocol", "Hyper Transfer Text Protocol", "None"], correctAnswer: "HyperText Transfer Protocol" },
    { question: "What is the purpose of a for loop?", options: ["Repeat a block of code", "Exit a program", "Create a class", "Sort data"], correctAnswer: "Repeat a block of code" },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "JavaScript Output Name", "Java Oriented Notation", "Java Syntax Object Node"], correctAnswer: "JavaScript Object Notation" },

    // Additional
    { question: "Which of these is not a programming paradigm?", options: ["Procedural", "Functional", "Declarative", "Creative"], correctAnswer: "Creative" },
    { question: "Which language is primarily used for mobile app development on Android?", options: ["Java", "Swift", "Kotlin", "C#"], correctAnswer: "Kotlin" },
    { question: "What does the 'public' keyword mean in Java?", options: ["Accessible anywhere", "Accessible within a class", "Accessible within a package", "None"], correctAnswer: "Accessible anywhere" },
    { question: "Which programming language is best for creating iOS apps?", options: ["Swift", "Kotlin", "JavaScript", "C++"], correctAnswer: "Swift" },
    { question: "What is the full form of JSON?", options: ["JavaScript Object Notation", "Java Syntax Oriented Network", "Java System Object Name", "None"], correctAnswer: "JavaScript Object Notation" }
];


// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to ensure exactly 30 randomized questions
function getThirtyRandomQuestions() {
    const shuffledQuestions = shuffleArray([...quizQuestions]);

    // If there are fewer than 30 questions, repeat questions
    while (shuffledQuestions.length < 30) {
        const remaining = 30 - shuffledQuestions.length;
        shuffledQuestions.push(...shuffleArray([...quizQuestions]).slice(0, remaining));
    }

    // Slice to exactly 30 and shuffle again for random placement
    return shuffleArray(shuffledQuestions.slice(0, 30));
}

function startQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    score = 0;
    currentQuestionIndex = 0;

    // Get exactly 30 randomized questions
    selectedQuestions = getThirtyRandomQuestions();

    showQuestion();
    quizContainer.style.display = 'block';
}

function showQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    let optionsHtml = '';
    currentQuestion.options.forEach(option => {
        optionsHtml += `<button class="quiz-option" onclick="checkAnswer('${option}')">${option}</button><br>`;
    });

    quizContainer.innerHTML = `
        <h3>Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}</h3>
        <h4>${currentQuestion.question}</h4>
        ${optionsHtml}
    `;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <h3>Quiz Complete</h3>
        <p>Your Score: ${score} / ${selectedQuestions.length}</p>
        <button onclick="startQuiz()">Try Again</button>
        <button onclick="goToHomePage()">Go to Home Page</button>
    `;
}

function goToHomePage() {
    window.location.href = 'index.html';
}

