export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Typecasts', href: '#typecasts' },
  { label: 'Signature Roles', href: '#signature-roles' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Filmography', href: '#filmography' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Press', href: '#press' },
  { label: 'Awards', href: '#awards' },
  { label: "Director's Note", href: '#directors-note' },
  { label: 'Press Kit', href: '#press-kit' },
  { label: 'Contact', href: '#contact' },
];

export const heroNotes = [
  'International actress for film & series',
  'Playing age: 25–35',
  'Strong dramatic presence',
  'English / Russian',
  'Available for international projects',
];

export const positioningTags = [
  'High-end drama',
  'Psychological thrillers',
  'Auteur cinema',
  'Prestige television',
  'Historical projects',
  'Supernatural stories',
  'Character-driven films',
];

export const positioningFestivals = [
  'Academy Awards level cinema',
  'Cannes Film Festival',
  'Venice Film Festival',
  'Berlin International Film Festival',
  'Netflix prestige drama',
  'HBO limited series',
  'A24-style psychological cinema',
  'European auteur film',
  'International co-productions',
];

export interface Typecast {
  n: string;
  title: string;
  desc: string;
}

export const typecasts: Typecast[] = [
  { n: '01', title: 'Dark Queen', desc: 'Powerful. Magnetic. Dangerous. Unforgettable.' },
  { n: '02', title: 'Sovereign Woman', desc: 'Commanding. Intelligent. Born to lead.' },
  { n: '03', title: 'Woman Leader', desc: 'Strategic. Controlled. Emotionally precise.' },
  { n: '04', title: 'Anti-Heroine', desc: 'Complex. Wounded. Morally unpredictable.' },
  { n: '05', title: 'Trickster', desc: 'Sharp. Playful. Manipulative. Impossible to read.' },
  { n: '06', title: 'Femme Fatale', desc: 'Elegant. Seductive. Dangerous without effort.' },
  { n: '07', title: 'Mystical Woman', desc: 'Intuitive. Enigmatic. Spiritually charged.' },
  { n: '08', title: 'Witch / Oracle', desc: 'Ancient knowledge. Inner vision. Supernatural truth.' },
  { n: '09', title: 'Artist', desc: 'Sensitive. Wild. Free. Devoted to creation.' },
  { n: '10', title: 'Woman of High Status', desc: 'Luxury, discipline, silence, influence.' },
  { n: '11', title: 'Caregiving Mother', desc: 'Protective. Warm. Fierce when threatened.' },
  { n: '12', title: 'Ice Queen', desc: 'Cold surface. Burning interior.' },
  { n: '13', title: 'Fallen Queen', desc: 'A woman who lost everything and still stands.' },
  { n: '14', title: 'Warrior Queen', desc: 'Brave. Physical. Noble. Unbreakable.' },
  { n: '15', title: 'Urban Madwoman', desc: 'Unstable, wounded, prophetic, painfully alive.' },
];

export interface Collection {
  roman: string;
  title: string;
  includes: string;
  roles: string;
  placeholder: string;
}

export const collections: Collection[] = [
  {
    roman: 'I',
    title: 'Dark Power',
    includes: 'Dark Queen, Ice Queen, Fallen Queen, Femme Fatale',
    roles: 'Queen, Empress, Duchess, Lady of the Manor, CEO, billionaire wife, political leader, intelligence director, crime boss, mafia queen, cult leader, vampire queen, dark sorceress, elite lawyer, judge, prosecutor, corporate villain, elegant assassin, widow with a secret.',
    placeholder: 'Dark Queen portrait — black jacket, direct gaze, candle / mirror / dark wall',
  },
  {
    roman: 'II',
    title: 'Mystic Vision',
    includes: 'Mystical Woman, Witch, Oracle',
    roles: 'Witch, white witch, dark witch, oracle, seer, psychic, medium, shaman, healer, occult scholar, paranormal investigator, demon hunter, keeper of ancient knowledge, woman with supernatural gift.',
    placeholder: 'Mystical portrait — low light, soft shadows, intense gaze',
  },
  {
    roman: 'III',
    title: 'Authority & Intellect',
    includes: 'Sovereign Woman, Woman Leader, Woman of High Status',
    roles: 'CEO, startup founder, politician, senator, ambassador, attorney, judge, FBI agent, CIA officer, detective, police captain, military commander, surgeon, psychiatrist, professor, journalist, museum director, fashion house director.',
    placeholder: 'Elegant business / black turtleneck / controlled posture',
  },
  {
    roman: 'IV',
    title: 'Dangerous Intelligence',
    includes: 'Anti-Heroine, Trickster',
    roles: 'Con artist, spy, double agent, hacker, assassin, thief, art forger, smuggler, casino player, blackmailer, political manipulator, survivor, undercover detective, criminal psychologist with a dark side.',
    placeholder: 'Sharper look, half-shadow, movement, street / interior',
  },
  {
    roman: 'V',
    title: 'Fierce Care',
    includes: 'Caregiving Mother, Warrior Queen',
    roles: 'Mother, foster mother, doctor, pediatrician, nurse, therapist, social worker, teacher, human rights lawyer, military medic, rescue team leader, crisis negotiator, woman protecting her family, widow raising children.',
    placeholder: 'Soft but strong portrait — warmer light, emotional close-up',
  },
  {
    roman: 'VI',
    title: 'The Artist',
    includes: 'Artist',
    roles: 'Actress, theatre actress, ballerina, opera singer, musician, pianist, fashion model, photographer, film director, screenwriter, choreographer, dancer, performance artist, TV presenter, creative director.',
    placeholder: 'Notebook / camera / theatre / rehearsal aesthetic',
  },
];

export const showreelBlocks = [
  { title: 'Main Showreel', desc: 'Drama, mystery, authority, emotional transformation.' },
  { title: 'Dramatic Reel', desc: 'Psychological depth, silence, conflict, inner fracture.' },
  { title: 'Mystery / Thriller Reel', desc: 'Secrets, danger, intuition, control.' },
  { title: 'Leader / Authority Reel', desc: 'Power, intelligence, decisions, command.' },
  { title: 'Emotional Reel', desc: 'Vulnerability, loss, love, protection.' },
  { title: 'Comedy / Light Reel', desc: 'Optional: irony, charm, timing, contrast.' },
];

export const filmographyCategories = [
  { title: 'Film', desc: 'Project title / Role / Director / Year / Country' },
  { title: 'Series', desc: 'Project title / Role / Director / Platform / Year' },
  { title: 'Theatre', desc: 'Production / Role / Theatre / Director' },
  { title: 'Short Films', desc: 'Project title / Role / Director / Festival status' },
  { title: 'Voice / Music / Performance', desc: 'Voice work, songs, performance pieces, AI media projects' },
];

export const galleryCategories = [
  'Headshots',
  'Editorial Portraits',
  'Dark Queen',
  'Mystic',
  'Leader',
  'Anti-Heroine',
  'Mother / Caregiver',
  'Artist',
  'Behind the Scenes',
  'Black & White',
  'Festival / Red Carpet',
];

export const festivalDirection = [
  'Academy Awards qualifying strategy',
  'Cannes Film Festival',
  'Venice Film Festival',
  'Berlin International Film Festival',
  'Toronto International Film Festival',
  'Sundance',
  'Tribeca',
  'Locarno',
  'Karlovy Vary',
  'BFI London',
  'SXSW',
  'Rotterdam',
  'Busan',
  'Sarajevo',
  'European Film Awards',
];

export const awardsBlocks = [
  { title: 'Awards', desc: 'Best Actress / Best Performance / Rising Talent' },
  { title: 'Official Selections', desc: 'Festival title / Project / Year' },
  { title: 'Nominations', desc: 'Category / Project / Festival' },
  { title: 'Industry Goals', desc: 'Prestige cinema, auteur directors, international co-productions, streaming drama.' },
];

export const pressBlocks = [
  { title: 'Interviews', desc: 'Long-form conversations about craft, transformation, film, and artistic identity.' },
  { title: 'Features', desc: 'Magazine and editorial publications.' },
  { title: 'Reviews', desc: 'Director, critic, and audience responses.' },
];

export const pressQuotes = [
  'She carries mystery before she says a word.',
  'An actress with a rare combination of elegance, intelligence, and danger.',
  'Her stillness has narrative weight.',
];

export const pressKitItems = [
  'Full Resume',
  'Short Biography',
  'Full Biography',
  'Headshots',
  'Editorial Portraits',
  'Showreel Links',
  'Filmography',
  'Typecast Portfolio',
  'Contact Sheet',
  'Festival / Awards Information',
];

export const representation = [
  { role: 'Talent Agent', fields: 'Name / Agency / Email / Phone' },
  { role: 'Manager', fields: 'Name / Company / Email' },
  { role: 'Publicist', fields: 'Name / Company / Email' },
  { role: 'Legal / Business', fields: 'Contact details' },
];

export const footerLinks = [
  'IMDb',
  'Spotlight',
  'Actors Access',
  'Backstage',
  'Casting Networks',
  'Stage 32',
  'Instagram',
  'Press Kit',
  'Contact',
];
