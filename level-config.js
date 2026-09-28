/**
 * Hindi Matras & Consonants Definitions for Grade 1
 */
export const MATRAS = {
    MUKTA: '',      // अ (बिना मात्रा)
    AA: 'ा',        // आ की मात्रा
    CHHOTI_I: 'ि',   // इ की मात्रा (ह्रस्व)
    BADI_I: 'ी',     // ई की मात्रा (दीर्घ)
    CHHOTA_U: 'ु',   // उ की मात्रा (ह्रस्व)
    BADA_U: 'ू',     // ऊ की मात्रा (दीर्घ)
    E: 'े',          // ए की मात्रा
    AI: 'ै',         // ऐ की मात्रा
    O: 'ो',          // ओ की मात्रा
    AU: 'ौ'          // औ की मात्रा
};

export const COMMON_CONSONANTS = [
    'क', 'ख', 'ग', 'घ',
    'च', 'छ', 'ज', 'झ',
    'ट', 'ठ', 'ड', 'ढ',
    'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म',
    'य', 'र', 'ल', 'व',
    'श', 'ष', 'स', 'ह'
];

/**
 * Level Configurations — Hindi Balloon Matra Pehchan Pop (20 Levels)
 * Progressive difficulty starting with one मात्रा family at a time for Grade 1:
 * - Levels 1–2: आ की मात्रा ( ा )
 * - Level 3: इ की मात्रा ( ि )
 * - Level 4: आ vs इ भेद
 * - Level 5: ई की मात्रा ( ी )
 * - Level 6: इ vs ई भेद (कि vs की, मि vs मी)
 * - Level 7: आ, इ, ई संयुक्त अभ्यास
 * - Level 8: उ की मात्रा ( ु )
 * - Level 9: ऊ की मात्रा ( ू )
 * - Level 10: उ vs ऊ भेद (कु vs कू, रु vs रू)
 * - Level 11: आ, इ, ई, उ, ऊ अभ्यास
 * - Level 12: ए की मात्रा ( े )
 * - Level 13: ऐ की मात्रा ( ै )
 * - Level 14: ए vs ऐ भेद (के vs कै, मे vs मै)
 * - Level 15: ओ की मात्रा ( ो )
 * - Level 16: औ की मात्रा ( ौ )
 * - Level 17: ओ vs औ भेद (को vs कौ, पो vs पौ)
 * - Level 18: ए, ऐ, ओ, औ अभ्यास
 * - Level 19: मात्रा भेद चुनौती (सूक्ष्म ध्वनि भेद)
 * - Level 20: मात्रा मास्टर (संपूर्ण १० मात्राएँ)
 *
 * Exactly 20 levels, 10 XP max per level (200 total campaign XP).
 */
export const LEVELS_CONFIG = [
    {
        level: 1,
        label: 'आ की मात्रा (का, मा, ना)',
        targetMatras: ['ा'],
        contrastMatras: ['', 'ि'],
        consonants: ['क', 'म', 'न', 'ल', 'र', 'स'],
        balloonCount: 3,
        xpWeight: 1,
        description: 'आ की मात्रा की पहचान (भाग १)'
    },
    {
        level: 2,
        label: 'आ की मात्रा (पा, ता, दा)',
        targetMatras: ['ा'],
        contrastMatras: ['', 'ि'],
        consonants: ['प', 'त', 'ब', 'ग', 'च', 'द', 'ज', 'ह'],
        balloonCount: 3,
        xpWeight: 1,
        description: 'आ की मात्रा की पहचान (भाग २)'
    },
    {
        level: 3,
        label: 'इ की मात्रा (ि - छोटी इ)',
        targetMatras: ['ि'],
        contrastMatras: ['', 'ा'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स'],
        balloonCount: 3,
        xpWeight: 1,
        description: 'छोटी इ की मात्रा की पहचान'
    },
    {
        level: 4,
        label: 'आ vs इ (का vs कि)',
        targetMatras: ['ा', 'ि'],
        contrastMatras: ['', 'ा', 'ि'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'ल', 'र', 'स'],
        balloonCount: 3,
        xpWeight: 1,
        description: 'आ और इ की मात्रा में भेद'
    },
    {
        level: 5,
        label: 'ई की मात्रा (ी - बड़ी ई)',
        targetMatras: ['ी'],
        contrastMatras: ['', 'ा', 'ि'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'च', 'ज'],
        balloonCount: 3,
        xpWeight: 1,
        description: 'बड़ी ई की मात्रा की पहचान'
    },
    {
        level: 6,
        label: 'इ vs ई (कि vs की, मि vs मी)',
        targetMatras: ['ि', 'ी'],
        contrastMatras: ['ि', 'ी', '', 'ा'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'च'],
        balloonCount: 3,
        xpWeight: 1,
        description: 'छोटी इ और बड़ी ई की मात्रा में सूक्ष्म भेद'
    },
    {
        level: 7,
        label: 'आ, इ, ई का अभ्यास',
        targetMatras: ['ा', 'ि', 'ी'],
        contrastMatras: ['', 'ा', 'ि', 'ी'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'ग', 'ज'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'आ, इ और ई की मात्राओं का संयुक्त अभ्यास'
    },
    {
        level: 8,
        label: 'उ की मात्रा (ु - छोटा उ)',
        targetMatras: ['ु'],
        contrastMatras: ['', 'ा', 'ि'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ग', 'स', 'ल', 'च'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'छोटे उ की मात्रा की पहचान'
    },
    {
        level: 9,
        label: 'ऊ की मात्रा (ू - बड़ा उ)',
        targetMatras: ['ू'],
        contrastMatras: ['', 'ा', 'ु'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ग', 'स', 'ल', 'भ'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'बड़े ऊ की मात्रा की पहचान'
    },
    {
        level: 10,
        label: 'उ vs ऊ (कु vs कू, रु vs रू)',
        targetMatras: ['ु', 'ू'],
        contrastMatras: ['ु', 'ू', '', 'ा'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ग', 'स', 'ल', 'र'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'छोटे उ और बड़े ऊ की मात्रा में भेद'
    },
    {
        level: 11,
        label: 'आ से ऊ तक का अभ्यास',
        targetMatras: ['ा', 'ि', 'ी', 'ु', 'ू'],
        contrastMatras: ['', 'ा', 'ि', 'ी', 'ु', 'ू'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'ग', 'ब'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'प्रथम ५ मात्राओं का मिला-जुला अभ्यास'
    },
    {
        level: 12,
        label: 'ए की मात्रा (े)',
        targetMatras: ['े'],
        contrastMatras: ['', 'ा', 'ी'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'र', 'ब'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'ए की मात्रा की पहचान'
    },
    {
        level: 13,
        label: 'ऐ की मात्रा (ै)',
        targetMatras: ['ै'],
        contrastMatras: ['', 'ा', 'े'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'ब', 'थ'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'ऐ की मात्रा की पहचान'
    },
    {
        level: 14,
        label: 'ए vs ऐ (के vs कै, मे vs मै)',
        targetMatras: ['े', 'ै'],
        contrastMatras: ['े', 'ै', '', 'ा'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'ब', 'र'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'ए और ऐ की मात्रा में भेद'
    },
    {
        level: 15,
        label: 'ओ की मात्रा (ो)',
        targetMatras: ['ो'],
        contrastMatras: ['', 'ा', 'े'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'र', 'च'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'ओ की मात्रा की पहचान'
    },
    {
        level: 16,
        label: 'औ की मात्रा (ौ)',
        targetMatras: ['ौ'],
        contrastMatras: ['', 'ा', 'ो'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'च', 'ह'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'औ की मात्रा की पहचान'
    },
    {
        level: 17,
        label: 'ओ vs औ (को vs कौ, पो vs पौ)',
        targetMatras: ['ो', 'ौ'],
        contrastMatras: ['ो', 'ौ', '', 'ा'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'च', 'ब'],
        balloonCount: 4,
        xpWeight: 1,
        description: 'ओ और औ की मात्रा में भेद'
    },
    {
        level: 18,
        label: 'ए, ऐ, ओ, औ का अभ्यास',
        targetMatras: ['े', 'ै', 'ो', 'ौ'],
        contrastMatras: ['े', 'ै', 'ो', 'ौ', ''],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'ब', 'च'],
        balloonCount: 5,
        xpWeight: 1,
        description: 'ए, ऐ, ओ, औ की मात्राओं का अभ्यास'
    },
    {
        level: 19,
        label: 'मात्रा भेद चुनौती (सूक्ष्म ध्वनि)',
        targetMatras: ['ि', 'ी', 'ु', 'ू', 'े', 'ो'],
        contrastMatras: ['ि', 'ी', 'ु', 'ू', 'े', 'ो', 'ा'],
        consonants: ['क', 'म', 'न', 'प', 'त', 'द', 'ल', 'स', 'ग', 'च'],
        balloonCount: 5,
        xpWeight: 1,
        description: 'समान ध्वनि वाली मात्राओं में भेद'
    },
    {
        level: 20,
        label: 'मात्रा मास्टर (संपूर्ण १० मात्राएँ)',
        targetMatras: ['', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ'],
        contrastMatras: ['', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ'],
        consonants: ['क', 'ख', 'ग', 'घ', 'च', 'ज', 'ट', 'ड', 'त', 'द', 'न', 'प', 'ब', 'म', 'य', 'र', 'ल', 'व', 'श', 'स', 'ह'],
        balloonCount: 5,
        xpWeight: 1,
        description: 'सभी मात्राओं की संपूर्ण महा-पहचान'
    }
];
