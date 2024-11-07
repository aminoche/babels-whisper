// Full Interpretations array with structured explanations for each line
const interpretations = [
  '', // Placeholder for index 0

  // Title: 𒂗𒆠𒄭.com
  `<strong>Literal Translation:</strong> "𒂗𒆠𒄭" refers to Enkidu, a character from the Epic of Gilgamesh, symbolizing untamed nature and raw humanity.
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> Adding ".com" merges ancient Sumerian symbols with modern digital culture. Enkidu, representing primal human nature, is now rebranded in a digital domain, suggesting modernity's commodification of ancient myths.
   <br><br>
   <strong>Philosophical Interpretation:</strong> The blending of sacred and commercial asks if our technological age strips myth of its spiritual power. Enkidu’s essence, once untethered and wild, now fits within the sterile limitations of the internet.
   <br><br>
   <strong>Meta Interpretation:</strong> Enkidu as a digital icon raises questions about authenticity in the modern age. Are we, like Enkidu, becoming simulations of ourselves, fragmenting our identity into commodifiable pieces while losing touch with our intrinsic nature?`,

  // Subtitle: Babel's Whisper: Rapture via Retrocausality
  `<strong>Literal Translation:</strong> "Babel's Whisper: Rapture via Retrocausality" references the Tower of Babel, symbolizing humanity's unity disrupted by ambition, and the idea of retrocausality—effects of the future influencing the past.
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> Babel, here, stands as a reminder of human diversity and the collapse of unity. "Retrocausality" implies that reconnecting with the past can spark future enlightenment, suggesting that echoes of unity still linger within our divisions.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This subtitle suggests enlightenment is not in a future destination but in retracing steps to our ancient roots. It implies that modern divides could heal by reconnecting with our collective past.
   <br><br>
   <strong>Meta Interpretation:</strong> By searching for enlightenment within fragmentation, we confront Babel’s ultimate paradox: that all knowledge is intertwined, and to "go forward" may mean finding ancient truths hidden in modern complexity.`,

  // Line 1: Στη μούσα μου, τη Ρέα, ​​τη سیمرغ και μητέρα του Δία
  `<strong>Literal Translation:</strong> "To my muse, Rhea, the Simurgh, and the mother of Zeus."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> This dedication merges Greek and Persian mythology, honoring Rhea (mother of Zeus) and Simurgh, a Persian bird symbolizing unity and wisdom. It acknowledges the cultural depth of East and West.
   <br><br>
   <strong>Philosophical Interpretation:</strong> The line reflects humanity’s diverse spiritual heritage. By invoking both Rhea and Simurgh, it emphasizes how cultural myths overlap and reinforce one another, representing creativity as a universal phenomenon.
   <br><br>
   <strong>Meta Interpretation:</strong> The poet invokes divine figures across cultures to create a muse that is both personal and collective, mirroring how each of us channels ancient, collective knowledge. Here, the muse becomes an avatar for cross-cultural unity, a "whisper" in the Babel-like cacophony.`,

  // Line 2: La petite mort aux quatre cent cinq.
  `<strong>Literal Translation:</strong> "The little death on the 405 freeway."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> "La petite mort" in French is a euphemism for orgasm. Paired with LA's 405 freeway, notorious for its chaos, it contrasts the sensual with the mundane, invoking irony.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This line juxtaposes urban monotony with intimate transcendence. It suggests that urban life can numb us to sensuality and deeper experiences, embodying the conflict between desire and societal demands.
   <br><br>
   <strong>Meta Interpretation:</strong> The collision of ecstasy and mundanity reflects Babel’s irony: in the quest for connection, we’ve created isolating structures. This line hints that true transcendence is elusive, a fleeting “little death” within the artificial confines of modern life.`,

  // Line 3: El oeste es mejor. Vea cómo ganamos el capitalismo.
  `<strong>Literal Translation:</strong> "The West is better. See how we win capitalism."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> In Spanish, this line asserts Western superiority, showcasing the pride in capitalism, while subtly mocking it. The choice of Spanish evokes colonial history, adding irony.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This line critiques the Western obsession with economic "victory," which, though materially impressive, often overlooks unity or deeper human connections.
   <br><br>
   <strong>Meta Interpretation:</strong> It suggests a Babel-like tragedy: Western capitalism’s pride has led to division and hollow victories. True connection becomes difficult in a society that celebrates economic dominance over shared humanity.`,

  // Line 4: El este es mejor. Vea cómo ganamos el socialismo.
  `<strong>Literal Translation:</strong> "The East is better. See how we win socialism."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> Mirroring the previous line, this phrase in Spanish praises socialism as the East’s achievement, pointing to ideological pride in opposition to capitalism.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This parallel critique suggests that both capitalism and socialism, in their ideological purity, fail to bridge human divides, acting as opposing towers of Babel.
   <br><br>
   <strong>Meta Interpretation:</strong> This line underlines a deeper irony: ideological superiority fragments us, mirroring Babel’s curse. True unity isn’t found in either ideology but in transcending the pride both carry.`,

  // Line 5: Santa Mónica y San Gabriel, en el nombre de Cristo.
  `<strong>Literal Translation:</strong> "Santa Monica and San Gabriel, in the name of Christ."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> This line references two areas of Los Angeles, invoking Christ to connect these culturally different places. Spanish here recalls the region's colonial past.
   <br><br>
   <strong>Philosophical Interpretation:</strong> The line questions the ability of religious faith to unify disparate communities, hinting at a failure of organized religion to overcome social divides.
   <br><br>
   <strong>Meta Interpretation:</strong> This is a modern Babel—a reminder that our efforts to connect often fall short. In invoking Christ, the poet highlights the irony of fragmented faiths within one shared city.`,

  // Line 6: Los magos de Navsari te piden que correrse en su puño de tierra.
  `<strong>Literal Translation:</strong> "The magi of Navsari ask you to reach ecstasy in their fist of earth."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> "Correrse" (to orgasm) contrasts with the sacred Zoroastrian magi of Navsari, merging the spiritual and the carnal. Earth here symbolizes a grounded, sensual spirituality.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This line suggests that transcendence is found within physical connection to the earth, where sensual and spiritual overlap.
   <br><br>
   <strong>Meta Interpretation:</strong> This represents a dualistic transcendence—a recognition that earth and spirit are inseparable, echoing the Babel paradox: unity found within fragmentation, the sacred experienced in the corporeal.`,

  // Line 7: Ustedes dos merecen una લીલો દુકાળ bíblica.
  `<strong>Literal Translation:</strong> "You two deserve a biblical green famine."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> A "green famine" is a paradox: abundance leading to emptiness. Gujarati and Spanish represent heritage and colonial past.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This karmic curse criticizes ideological pride (East and West alike), warning that material success without meaning is ultimately barren.
   <br><br>
   <strong>Meta Interpretation:</strong> It suggests that human ambition, though abundant in appearance, can lack true fulfillment. Like Babel, ideological divides bring emptiness, urging us to see the futility in such separation.`,

  // Line 8: Entonces todos podemos ser los ángeles.
  `<strong>Literal Translation:</strong> "Then we can all be angels."
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> "Los ángeles" plays on "angels" and "Los Angeles," suggesting a dual identity of hope and irony.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This line explores the human desire for transcendence, even as divisions persist. It’s a nod to Babel’s hope, where we long for harmony despite differences.
   <br><br>
   <strong>Meta Interpretation:</strong> The line hints at humanity’s dual nature: we strive to be “angels” but remain fragmented. Los Angeles, as a city of dreams and divides, becomes a symbol of Babel’s lingering whisper.`,

  // Line 9: 𐬀𐬵𐬎𐬥𐬀 𐬬𐬀𐬌𐬭𐬌𐬌𐬀 𐬀𐬵𐬎𐬥𐬀 𐬬𐬀𐬌𐬭𐬌𐬌𐬀 𐬀𐬴𐬆𐬨 𐬬𐬊𐬵𐬏
  `<strong>Literal Translation:</strong> A line in Avestan invoking "Asha," or cosmic order and truth.
   <br><br>
   <strong>Linguistic/Cultural Interpretation:</strong> Avestan, an ancient language of Zoroastrianism, carries a sacred resonance, invoking universal truth.
   <br><br>
   <strong>Philosophical Interpretation:</strong> This line speaks to a harmony that predates Babel’s division, implying unity beneath all human separation.
   <br><br>
   <strong>Meta Interpretation:</strong> This final blessing hints that, even within Babel’s fractures, a cosmic order persists. True unity, unlike fragmented ideologies, endures beyond language, connecting us to something timeless and indivisible.`,
];

// Function to display interpretation with opacity transition and show the overview button
function showInterpretation(lineIndex) {
  const interpretationText = document.getElementById('interpretation');
  const overviewButton = document.getElementById('return-overview');

  // Fade out current interpretation, display selected interpretation, and show the overview button
  interpretationText.style.opacity = 0;
  overviewButton.style.display = 'block';

  setTimeout(() => {
    interpretationText.innerHTML = interpretations[lineIndex];
    interpretationText.style.opacity = 1; // Fade in
  }, 300);
}

// Function to return to the summary view and hide the overview button
function showSummary() {
  const interpretationText = document.getElementById('interpretation');
  const overviewButton = document.getElementById('return-overview');

  // Fade out current interpretation, display overview, and hide the overview button
  interpretationText.style.opacity = 0;
  overviewButton.style.display = 'none';

  setTimeout(() => {
    interpretationText.innerHTML = `
      <p><strong>“Babel’s Whisper: Rapture via Retrocausality”</strong> explores the fractured state of modern humanity, invoking the ancient story of the Tower of Babel, where ambition led to linguistic and cultural division. Each line in the poem is a blend of language, history, myth, and irony, drawing on figures like Enkidu and Simurgh, philosophical reflections on East and West, and critiques of ideologies like capitalism and socialism.</p>
      <p>The poem traces humanity’s search for transcendence amidst its own self-imposed barriers—be it through materialism, ideology, or faith. Each line asks whether the modern world has sacrificed the sacred for convenience, challenging the reader to consider if meaning can be recovered within the fragmented, commodified state of contemporary life.</p>
      <p>Through paradox, linguistic layering, and cultural symbols, <em>“Babel’s Whisper”</em> suggests that true unity may only be achievable by reconnecting with an ancient, universal essence that transcends our current divides. The final lines invoke "Asha," a cosmic order in Zoroastrianism, implying that within the chaos of Babel’s divisions, a deeper harmony persists—one that goes beyond language and ideology.</p>
    `;
    interpretationText.style.opacity = 1; // Fade in
  }, 300);
}

// Background Audio Control
const audioElement = document.getElementById('background-audio');
audioElement.volume = 0.1; // Set low volume for ambient effect
