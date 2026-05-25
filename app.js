const categories = [
  "Todas",
  "Origen histórico",
  "Ley de 1927",
  "Madre heroica",
  "Literatura",
  "Lectura actual"
];

const phrases = [
  {
    "id": 1,
    "category": "Origen histórico",
    "text": "El 27 de mayo no nació solo como una fecha familiar, sino como memoria histórica de una resistencia femenina.",
    "explanation": "La fecha enlaza el homenaje familiar con la memoria de la Coronilla. Esa unión permite estudiar el papel de las mujeres en un episodio de resistencia colectiva.",
    "source": "Servicio Estatal de Autonomías. Heroínas de la Coronilla. Ley de 8 de noviembre de 1927."
  },
  {
    "id": 2,
    "category": "Origen histórico",
    "text": "La Coronilla recuerda a mujeres que ingresaron en la historia nacional desde la defensa colectiva.",
    "explanation": "La conmemoración no se limita a una biografía individual. Remite a una acción colectiva que fue transformada en memoria nacional.",
    "source": "Pau, A. (2013). Las heroínas de la Coronilla, entre la realidad y el mito."
  },
  {
    "id": 3,
    "category": "Ley de 1927",
    "text": "La madre boliviana fue convertida por la ley de 1927 en símbolo cívico, escolar y moral.",
    "explanation": "La ley llevó el homenaje a los colegios y a los establecimientos de instrucción. Por eso la fecha no solo pertenece a la familia, también a la pedagogía cívica.",
    "source": "Ley de 8 de noviembre de 1927. Día de la Madre."
  },
  {
    "id": 4,
    "category": "Ley de 1927",
    "text": "La memoria oficial reconoce a la mujer, pero muchas veces la nombra desde la maternidad antes que desde la ciudadanía.",
    "explanation": "El reconocimiento público se organiza en torno a la madre. Esa lectura puede dejar en segundo plano otras dimensiones: la mujer como ciudadana, escritora, combatiente y trabajadora.",
    "source": "Ley de 8 de noviembre de 1927. Ayllón, V. (2016)."
  },
  {
    "id": 5,
    "category": "Origen histórico",
    "text": "La mujer de la Coronilla no fue únicamente madre: fue sujeto histórico en un momento de ruptura política.",
    "explanation": "El sentido de la fecha se amplía cuando se reconoce que las mujeres no solo simbolizan afecto o sacrificio, sino intervención histórica.",
    "source": "Servicio Estatal de Autonomías. Heroínas de la Coronilla."
  },
  {
    "id": 6,
    "category": "Madre heroica",
    "text": "La figura de la madre heroica une patria, sacrificio y educación cívica.",
    "explanation": "El discurso escolar convirtió el episodio histórico en una imagen pedagógica. La madre heroica aparece como ejemplo moral para la nación.",
    "source": "Ley de 8 de noviembre de 1927."
  },
  {
    "id": 7,
    "category": "Madre heroica",
    "text": "La celebración del Día de la Madre en Bolivia conserva una raíz patriótica que la diferencia de otras conmemoraciones.",
    "explanation": "En Bolivia la fecha se conecta con la Coronilla. Esa raíz histórica le da un sentido distinto al homenaje convencional a la madre.",
    "source": "Servicio Estatal de Autonomías. Heroínas de la Coronilla."
  },
  {
    "id": 8,
    "category": "Ley de 1927",
    "text": "La escuela fue uno de los primeros espacios encargados de transmitir el sentido público del 27 de mayo.",
    "explanation": "La norma de 1927 asignó a los colegios un papel directo en el homenaje, por medio de lecciones, conferencias y visitas a monumentos.",
    "source": "Ley de 8 de noviembre de 1927."
  },
  {
    "id": 9,
    "category": "Ley de 1927",
    "text": "En la ley de 1927, la maternidad aparece como virtud social y como memoria nacional.",
    "explanation": "La maternidad se presenta como valor público. Esa formulación articula afecto familiar, moral social y memoria patriótica.",
    "source": "Ley de 8 de noviembre de 1927."
  },
  {
    "id": 10,
    "category": "Origen histórico",
    "text": "El relato de las Heroínas de la Coronilla muestra una participación femenina que desborda el espacio doméstico.",
    "explanation": "La participación en la defensa de la ciudad ubica a las mujeres en el espacio público de la historia, no solo en el hogar.",
    "source": "Pau, A. (2013). Servicio Estatal de Autonomías."
  },
  {
    "id": 11,
    "category": "Madre heroica",
    "text": "La memoria patriótica tiende a convertir a las mujeres en símbolos; la literatura permite verlas como sujetos.",
    "explanation": "El símbolo simplifica y ordena. La literatura abre conflictos, voces, ironías y contradicciones que no caben en una ceremonia cívica.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 12,
    "category": "Literatura",
    "text": "Lindaura Anzoátegui de Campero incorporó a las mujeres al relato histórico de la nación boliviana.",
    "explanation": "Su narrativa histórica permitió mirar la independencia y la República desde figuras femeninas insertas en procesos políticos.",
    "source": "Ayllón, V. (2016). Ayllón, V. (2022)."
  },
  {
    "id": 13,
    "category": "Literatura",
    "text": "En la narrativa de Lindaura Anzoátegui, la mujer participa en la construcción moral y política de la República.",
    "explanation": "Su obra conserva rasgos del ideal femenino decimonónico, pero también ubica a las mujeres dentro de la formación republicana.",
    "source": "Ayllón, V. (2022)."
  },
  {
    "id": 14,
    "category": "Literatura",
    "text": "Adela Zamudio cuestionó los privilegios masculinos y denunció la desigualdad que marcaba la vida de las mujeres.",
    "explanation": "Su obra convierte la desigualdad de género en problema público. La crítica al privilegio masculino atraviesa su poesía y su narrativa.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 15,
    "category": "Literatura",
    "text": "En Adela Zamudio, la mujer no acepta ser solo figura decorativa del hogar o de la patria.",
    "explanation": "Zamudio desplaza a la mujer desde el lugar pasivo hacia una voz que observa, juzga y cuestiona el orden social.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 16,
    "category": "Literatura",
    "text": "La crítica de Zamudio al matrimonio revela que la vida privada también es un espacio de poder.",
    "explanation": "El matrimonio aparece como institución atravesada por jerarquías, reputación y obediencia. La vida íntima adquiere lectura social y política.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 17,
    "category": "Literatura",
    "text": "Hilda Mundy desmontó con ironía los discursos solemnes sobre la guerra, la ciudad y la mujer.",
    "explanation": "Su escritura vanguardista altera el tono solemne del discurso público y trabaja la ironía como forma crítica.",
    "source": "Ayllón, V. (2024). Groppa, M. L. G. (2019)."
  },
  {
    "id": 18,
    "category": "Literatura",
    "text": "En Hilda Mundy, la escritura femenina se vuelve gesto de desacato frente al orden social establecido.",
    "explanation": "La autora no se ajusta a la figura femenina dócil. Su escritura discute las convenciones de género, literatura y autoridad.",
    "source": "Groppa, M. L. G. (2019). Ayllón, V. (2024)."
  },
  {
    "id": 19,
    "category": "Literatura",
    "text": "La literatura boliviana escrita por mujeres no niega la maternidad, pero rechaza que sea el único destino femenino.",
    "explanation": "Las escritoras amplían el campo de representación: mujer intelectual, crítica, urbana, política, irónica y creadora.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 20,
    "category": "Lectura actual",
    "text": "La mujer boliviana aparece en la historia como madre, combatiente, escritora, trabajadora, educadora y ciudadana.",
    "explanation": "Una lectura actual del 27 de mayo debe mostrar varias dimensiones de la experiencia femenina, no una identidad única.",
    "source": "Síntesis pedagógica basada en las fuentes revisadas."
  },
  {
    "id": 21,
    "category": "Lectura actual",
    "text": "El 27 de mayo puede leerse como homenaje, pero también como pregunta sobre qué mujeres fueron recordadas y cuáles quedaron anónimas.",
    "explanation": "Toda memoria pública selecciona nombres, símbolos y escenas. La app puede ayudar a visibilizar ese proceso de selección.",
    "source": "Pau, A. (2013)."
  },
  {
    "id": 22,
    "category": "Origen histórico",
    "text": "La Coronilla permite discutir el lugar de las mujeres populares en la memoria nacional.",
    "explanation": "El relato histórico no debe concentrarse solo en nombres consagrados. También debe atender a las participantes anónimas y populares.",
    "source": "Pau, A. (2013)."
  },
  {
    "id": 23,
    "category": "Madre heroica",
    "text": "La madre abnegada es una imagen poderosa, pero insuficiente para comprender la experiencia femenina boliviana.",
    "explanation": "La abnegación explica una parte del discurso oficial, pero no alcanza para representar la pluralidad social y cultural de las mujeres.",
    "source": "Ayllón, V. (2016). Ley de 8 de noviembre de 1927."
  },
  {
    "id": 24,
    "category": "Literatura",
    "text": "Las escritoras bolivianas ampliaron la representación de la mujer más allá del sacrificio y la obediencia.",
    "explanation": "La escritura de mujeres introduce conflicto, crítica, ironía, deseo de autonomía y reflexión sobre las instituciones sociales.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 25,
    "category": "Literatura",
    "text": "La mujer como sujeto literario piensa, escribe, ironiza y disputa el sentido de la nación.",
    "explanation": "La literatura permite mirar a la mujer como productora de pensamiento y no solo como objeto de homenaje.",
    "source": "Ayllón, V. (2016). Groppa, M. L. G. (2019)."
  },
  {
    "id": 26,
    "category": "Madre heroica",
    "text": "La maternidad patriótica reconoce a las mujeres, pero puede reducir su diversidad social, cultural e intelectual.",
    "explanation": "El reconocimiento simbólico es valioso, pero debe evitar que una sola imagen represente a todas las mujeres.",
    "source": "Ley de 8 de noviembre de 1927. Ayllón, V. (2016)."
  },
  {
    "id": 27,
    "category": "Lectura actual",
    "text": "El Día de la Madre en Bolivia une memoria histórica y afecto familiar, pero requiere una lectura crítica.",
    "explanation": "La fecha puede conservar su dimensión afectiva y, al mismo tiempo, abrir preguntas sobre historia, género y ciudadanía.",
    "source": "Síntesis pedagógica basada en las fuentes revisadas."
  },
  {
    "id": 28,
    "category": "Lectura actual",
    "text": "La figura de la madre heroica debe dialogar con la mujer autónoma que aparece en la literatura boliviana.",
    "explanation": "La memoria cívica y la literatura no tienen que excluirse. Pueden articularse para ofrecer una comprensión más amplia de la mujer boliviana.",
    "source": "Ayllón, V. (2016)."
  },
  {
    "id": 29,
    "category": "Lectura actual",
    "text": "Recordar a las Heroínas de la Coronilla exige mirar también a las mujeres sin nombre que sostuvieron la resistencia.",
    "explanation": "La memoria histórica se fortalece cuando incluye a quienes participaron sin quedar registradas como protagonistas individuales.",
    "source": "Pau, A. (2013). Servicio Estatal de Autonomías."
  },
  {
    "id": 30,
    "category": "Lectura actual",
    "text": "Una app sobre el 27 de mayo debe presentar a la mujer boliviana como memoria, voz, acción y pensamiento.",
    "explanation": "La aplicación puede servir como recurso didáctico para conectar historia, literatura, género y educación cívica.",
    "source": "Síntesis pedagógica basada en las fuentes revisadas."
  }
];

const quiz = [
  {
    "q": "¿Qué hecho histórico se asocia al 27 de mayo en Bolivia?",
    "options": [
      "La batalla de la Coronilla",
      "La fundación de Bolivia",
      "La Guerra del Chaco",
      "La Revolución de 1952"
    ],
    "answer": 0,
    "feedback": "La fecha se relaciona con la resistencia en la colina de San Sebastián, conocida como la Coronilla."
  },
  {
    "q": "¿Qué hizo la Ley de 8 de noviembre de 1927?",
    "options": [
      "Instituyó el homenaje del 27 de mayo a la Madre",
      "Creó una universidad en Cochabamba",
      "Declaró feriado nacional el 6 de agosto",
      "Reguló el matrimonio civil"
    ],
    "answer": 0,
    "feedback": "La norma estableció el homenaje en colegios y establecimientos de instrucción."
  },
  {
    "q": "¿Qué permite observar la literatura escrita por mujeres?",
    "options": [
      "A la mujer como sujeto de pensamiento",
      "Solo la vida doméstica idealizada",
      "Una historia sin conflicto",
      "La desaparición de la memoria"
    ],
    "answer": 0,
    "feedback": "La literatura amplía la representación de la mujer más allá del símbolo maternal."
  },
  {
    "q": "¿Qué autora cuestionó con fuerza los privilegios masculinos?",
    "options": [
      "Adela Zamudio",
      "Juana Manuela Gorriti",
      "Gabriela Mistral",
      "Alfonsina Storni"
    ],
    "answer": 0,
    "feedback": "Adela Zamudio es una figura clave para analizar la crítica boliviana a la desigualdad de género."
  },
  {
    "q": "¿Cuál es el riesgo de reducir el 27 de mayo solo a la madre abnegada?",
    "options": [
      "Simplificar la diversidad histórica de las mujeres",
      "Eliminar la educación cívica",
      "Negar toda memoria nacional",
      "Desconocer la literatura universal"
    ],
    "answer": 0,
    "feedback": "La madre abnegada es una imagen significativa, pero no representa toda la experiencia femenina boliviana."
  }
];

const state = {
  category: "Todas",
  query: "",
  favorites: JSON.parse(localStorage.getItem("mujerBolivianaFavs") || "[]"),
  quizIndex: 0,
  score: 0,
  answered: false
};

const chips = document.getElementById("chips");
const cards = document.getElementById("cards");
const resultCount = document.getElementById("resultCount");
const favCount = document.getElementById("favCount");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalSource = document.getElementById("modalSource");

function saveFavorites() {
  localStorage.setItem("mujerBolivianaFavs", JSON.stringify(state.favorites));
  favCount.textContent = state.favorites.length;
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderChips() {
  chips.innerHTML = categories.map(cat => `<button class="chip ${state.category === cat ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("");
  document.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      renderChips();
      renderCards();
    });
  });
}

function getFiltered() {
  const q = normalize(state.query.trim());
  return phrases.filter(item => {
    const byCategory = state.category === "Todas" || item.category === state.category;
    const byQuery = !q || normalize(item.text + " " + item.category + " " + item.explanation).includes(q);
    return byCategory && byQuery;
  });
}

function renderCards() {
  const filtered = getFiltered();
  resultCount.textContent = `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    cards.innerHTML = `<div class="empty">No hay resultados con esos criterios.</div>`;
    return;
  }

  cards.innerHTML = filtered.map(item => {
    const active = state.favorites.includes(item.id);
    return `
      <article class="card">
        <div class="card-top">
          <span class="tag">${item.category}</span>
          <button class="fav ${active ? "active" : ""}" data-fav="${item.id}" aria-label="Guardar frase">${active ? "★" : "☆"}</button>
        </div>
        <p class="phrase">${item.text}</p>
        <p class="mini">${item.explanation.slice(0, 112)}...</p>
        <div class="card-actions">
          <button data-open="${item.id}">Leer explicación</button>
          <button class="secondary" data-copy="${item.id}">Copiar</button>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.open)));
  });

  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const item = phrases.find(p => p.id === Number(btn.dataset.copy));
      try {
        await navigator.clipboard.writeText(item.text);
        btn.textContent = "Copiada";
        setTimeout(() => btn.textContent = "Copiar", 900);
      } catch (error) {
        btn.textContent = "No copió";
        setTimeout(() => btn.textContent = "Copiar", 900);
      }
    });
  });

  document.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(Number(btn.dataset.fav)));
  });
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(x => x !== id);
  } else {
    state.favorites.push(id);
  }
  saveFavorites();
  renderCards();
}

function openModal(id) {
  const item = phrases.find(p => p.id === id);
  modalTag.textContent = item.category;
  modalTitle.textContent = item.text;
  modalText.textContent = item.explanation;
  modalSource.textContent = "Fuente de base: " + item.source;
  modal.classList.add("active");
}

document.getElementById("closeModal").addEventListener("click", () => modal.classList.remove("active"));

modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.remove("active");
});

search.addEventListener("input", event => {
  state.query = event.target.value;
  renderCards();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("mujerBolivianaTheme", next);
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.panel).classList.add("active");
  });
});

function renderQuiz() {
  const item = quiz[state.quizIndex];
  state.answered = false;
  document.getElementById("questionText").textContent = item.q;
  document.getElementById("feedback").textContent = "Selecciona una respuesta.";
  document.getElementById("scoreLabel").textContent = `${state.score} de ${state.quizIndex}`;
  document.getElementById("options").innerHTML = item.options.map((op, index) => `<button class="option" data-option="${index}">${op}</button>`).join("");
  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => answerQuiz(Number(btn.dataset.option)));
  });
}

function answerQuiz(index) {
  if (state.answered) return;
  state.answered = true;
  const item = quiz[state.quizIndex];
  document.querySelectorAll(".option").forEach((btn, i) => {
    if (i === item.answer) btn.classList.add("correct");
    if (i === index && i !== item.answer) btn.classList.add("wrong");
  });
  if (index === item.answer) state.score += 1;
  document.getElementById("feedback").textContent = item.feedback;
  document.getElementById("scoreLabel").textContent = `${state.score} de ${state.quizIndex + 1}`;
}

document.getElementById("nextQuestion").addEventListener("click", () => {
  state.quizIndex += 1;

  if (state.quizIndex >= quiz.length) {
    const finalScore = state.score;
    document.getElementById("questionText").textContent = "Resultado final";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").textContent = `Obtuviste ${finalScore} de ${quiz.length}. Puedes repetir la evaluación para revisar los conceptos.`;
    document.getElementById("scoreLabel").textContent = `${finalScore} de ${quiz.length}`;
    state.quizIndex = 0;
    state.score = 0;
    return;
  }

  renderQuiz();
});

const storedTheme = localStorage.getItem("mujerBolivianaTheme");
if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);

renderChips();
renderCards();
renderQuiz();
saveFavorites();
