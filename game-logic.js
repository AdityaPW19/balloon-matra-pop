import { COMMON_CONSONANTS } from './level-config.js';

/**
 * Phonetically and visually related matras for smart distractor selection
 */
export const MATRA_LOOKALIKES = {
    'ा': ['', 'ि', 'ी', 'ो'],
    'ि': ['ी', 'ा', '', 'े'],
    'ी': ['ि', 'े', 'ै', 'ा'],
    'ु': ['ू', 'ो', 'ौ', ''],
    'ू': ['ु', 'ो', 'ौ', 'ा'],
    'े': ['ै', 'ि', 'ी', 'ा'],
    'ै': ['े', 'ी', 'ौ', 'ा'],
    'ो': ['ौ', 'ा', 'ु', 'ू'],
    'ौ': ['ो', 'ा', 'ै', 'ू'],
    '': ['ा', 'ि', 'ु', 'े']
};

/**
 * Combine consonant and matra
 */
export function combineCharMatra(consonant, matra) {
    return consonant + (matra || '');
}

/**
 * Generate smart distractors for Matra Pehchan:
 * Focus on the SAME consonant with different matras (minimal acoustic / visual pairs)
 * as shown in example:
 * Target: "का" -> Balloons: "क", "का", "कि"
 * Target: "कि" -> Balloons: "की", "कि", "कु"
 */
function generateMatraDistractors(baseConsonant, targetMatra, count, levelDef, mistakeHistory = {}) {
    const targetCombination = combineCharMatra(baseConsonant, targetMatra);
    const set = new Set([targetCombination]);

    const targetPool = levelDef.targetMatras || ['ा'];
    const contrastPool = levelDef.contrastMatras || ['', 'ि'];
    const allCandidateMatras = Array.from(new Set([...targetPool, ...contrastPool]));

    // 1. Prioritize combinations previously missed for this consonant
    Object.keys(mistakeHistory).forEach(item => {
        if (item !== targetCombination && item.startsWith(baseConsonant) && set.size < count) {
            set.add(item);
        }
    });

    // 2. Add closely related/confusing matras on the SAME consonant
    const lookalikes = MATRA_LOOKALIKES[targetMatra] || [];
    for (const m of lookalikes) {
        if (set.size >= count) break;
        if (allCandidateMatras.includes(m) && m !== targetMatra) {
            set.add(combineCharMatra(baseConsonant, m));
        }
    }

    // 3. Fill from contrastPool & targetPool on the same consonant
    const shuffledPool = [...allCandidateMatras].sort(() => Math.random() - 0.5);
    for (const m of shuffledPool) {
        if (set.size >= count) break;
        if (m !== targetMatra) {
            set.add(combineCharMatra(baseConsonant, m));
        }
    }

    // 4. If still need options (e.g. higher balloon count), try other lookalikes
    for (const m of lookalikes) {
        if (set.size >= count) break;
        if (m !== targetMatra) {
            set.add(combineCharMatra(baseConsonant, m));
        }
    }

    // 5. Fallback: use another consonant with the target matra or related matra
    if (set.size < count) {
        const otherConsonants = (levelDef.consonants || COMMON_CONSONANTS).filter(c => c !== baseConsonant);
        const shuffledCons = [...otherConsonants].sort(() => Math.random() - 0.5);
        for (const c of shuffledCons) {
            if (set.size >= count) break;
            set.add(combineCharMatra(c, targetMatra));
        }
    }

    return Array.from(set).sort(() => Math.random() - 0.5);
}

export class GameLogic {
    /**
     * Generate a new challenge question for the given level
     * @param {Object} levelDef - Level configuration entry from level-config.js
     * @param {Object} options - { currentLevel, mistakeHistory, previousTarget }
     * @returns {Object} Question definition:
     *   - target: identifier/value of the correct answer (e.g. 'का')
     *   - promptDisplay: string to display on the challenge card
     *   - promptSubtext: text above prompt ("मात्रा पहचानो")
     *   - speechText: text for Hindi TTS speech (e.g. "पहचानो 'का'")
     *   - options: array of balloon options [{ value, display, isCorrect }]
     */
    static generateQuestion(levelDef, options = {}) {
        const mistakeHistory = options.mistakeHistory || {};
        const previousTarget = options.previousTarget || null;

        const consonants = levelDef.consonants || COMMON_CONSONANTS;
        const targetMatras = levelDef.targetMatras || ['ा'];

        // Pick a consonant and a target matra for this round
        let baseConsonant = consonants[Math.floor(Math.random() * consonants.length)];
        let targetMatra = targetMatras[Math.floor(Math.random() * targetMatras.length)];
        let targetCombination = combineCharMatra(baseConsonant, targetMatra);

        // Avoid immediate repeat if multiple options exist
        if (targetCombination === previousTarget && consonants.length > 1) {
            const altConsonants = consonants.filter(c => combineCharMatra(c, targetMatra) !== previousTarget);
            if (altConsonants.length > 0) {
                baseConsonant = altConsonants[Math.floor(Math.random() * altConsonants.length)];
                targetCombination = combineCharMatra(baseConsonant, targetMatra);
            }
        }

        const balloonCount = Math.min(Math.max(levelDef.balloonCount || 3, 3), 6);
        const distractors = generateMatraDistractors(baseConsonant, targetMatra, balloonCount, levelDef, mistakeHistory);

        const balloonOptions = distractors.map(combo => ({
            value: combo,
            display: combo,
            isCorrect: combo === targetCombination,
        }));

        return {
            target: targetCombination,
            promptDisplay: targetCombination,
            promptSubtext: 'मात्रा पहचानो',
            speechText: `पहचानो '${targetCombination}'`,
            options: balloonOptions,
        };
    }

    /**
     * Check if a tapped balloon is correct
     * @param {*} tappedValue
     * @param {*} targetValue
     * @returns {boolean}
     */
    static checkAnswer(tappedValue, targetValue) {
        return tappedValue === targetValue;
    }

    /**
     * Record mistake for adaptive distractor generation
     */
    static recordMistake(mistakeHistory, tappedValue) {
        mistakeHistory[tappedValue] = (mistakeHistory[tappedValue] || 0) + 1;
    }
}
