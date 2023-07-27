// Bienvenue dans notre projet : Qui parle du francais Grammaire

function genererMessageAleatoire() {

    // Initialisation des valeurs

    const messages = [
        "La grammaire française est basée sur des règles précises.",
      "Les verbes français sont souvent conjugués selon le temps et le mode.",
      "Les pronoms personnels en français sont : je, tu, il/elle, nous, vous, ils/elles.",
      "Les articles définis en français sont : le, la, les.",
      "Les articles indéfinis en français sont : un, une, des.",
      "Les adjectifs en français s'accordent en genre et en nombre avec le nom qu'ils qualifient.",
      "La négation en français se forme en utilisant le mot 'ne' suivi d'un autre mot négatif.",
      "Les prépositions en français indiquent la relation entre deux mots dans une phrase."

    ];
    //Generer le messqge

  }
  const messageAleatoire = messages[Math.floor(Math.random() * messages.length)];
  genererMessageAleatoire();