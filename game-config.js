/**
 * Game Configuration
 * Customize this file to configure global branding, speech options, storage, audio and palettes.
 */
export const GAME_CONFIG = {
    // Unique ID for local progress storage
    storageKey: 'balloonMatraPopProgress',

    // Analytics & XP System Configuration
    analytics: {
        gameId: 'balloon-matra-pop',
        totalCampaignXp: 200, // Strict invariant: max 200 XP per campaign/run (10 XP max per level across 20 levels)
        usePerformanceTiers: true, // 100% (0 mistakes), 80% (1 mistake), 60% (2+ mistakes)
    },

    // TTS & Voice Configuration
    tts: {
        source: 'balloon-matra-pop',
        language: 'hi-IN', // 'hi-IN' for natural Hindi matra pronunciation
        rate: 0.9,
        pitch: 1,
        volume: 1.0,
    },

    // Audio assets & sound settings
    audio: {
        bgMusic: 'assets/audio/game-music.mp3',
        levelComplete: 'assets/audio/level-complete.mp3',
        bgMusicVolume: 0.1,
        bgMusicPlaybackRate: 1.0,
        levelCompleteVolume: 0.5,
        menuDialogueVolume: 0.7,
    },

    // Gameplay limits
    round: {
        popsPerRound: 5,
    },

    // Voice Feedback Lines
    feedback: {
        correct: ['शाबाश!', 'बहुत बढ़िया!', 'सही जवाब!', 'हाँ!'],
        wrong: 'फिर से सोचो.',
        levelComplete: [
            'कमाल कर दिया! लेवल पूरा हुआ!',
            'बहुत खूब!',
            'शाबाश! अगला लेवल खुल गया!'
        ],
        // Pre-recorded voice dialogue audio clips (fallback to TTS if empty or unavailable)
        audioDialogues: {
            positive: [
                'assets/sparkyDialogues/positive/aahaa-positive.mp3',
                'assets/sparkyDialogues/positive/bilkul-sahi.mp3',
                'assets/sparkyDialogues/positive/bohot-badhiya.mp3',
                'assets/sparkyDialogues/positive/bohot-khoob.mp3',
                'assets/sparkyDialogues/positive/bohot-sahi.mp3',
                'assets/sparkyDialogues/positive/maza-aa-gaya.mp3',
                'assets/sparkyDialogues/positive/sahi-jawab.mp3',
                'assets/sparkyDialogues/positive/sahi-pakde.mp3',
                'assets/sparkyDialogues/positive/supper.mp3',
            ],
            negative: [
                'assets/sparkyDialogues/negative/ahaan-negative.mp3',
                'assets/sparkyDialogues/negative/dhayan-se-dekho.mp3',
                'assets/sparkyDialogues/negative/lag-bhag-sahi.mp3',
                'assets/sparkyDialogues/negative/phir-se.mp3',
                'assets/sparkyDialogues/negative/koshish-karo.mp3',
                'assets/sparkyDialogues/negative/phir-se-socho.mp3',
                'assets/sparkyDialogues/negative/phir-try-kro.mp3',
            ],
            levelcomplete: [
                'assets/sparkyDialogues/levelcomplete/7-crore.mp3',
                'assets/sparkyDialogues/levelcomplete/jhakaas.mp3',
                'assets/sparkyDialogues/levelcomplete/kamal-kar-diya.mp3',
                'assets/sparkyDialogues/levelcomplete/alag-hi-level.mp3',
                'assets/sparkyDialogues/levelcomplete/tum-to-pro.mp3',
            ],
            menuDialogue: [
                'assets/sparkyDialogues/menuDialogue/bark.mp3',
                'assets/sparkyDialogues/menuDialogue/goobare-phoden.mp3',
                'assets/sparkyDialogues/menuDialogue/laal-peele-goobare.mp3',
                'assets/sparkyDialogues/menuDialogue/meow.mp3',
                'assets/sparkyDialogues/menuDialogue/yo-aapka-bhai-sparky.mp3',
                'assets/sparkyDialogues/menuDialogue/sparky-bhai-ke-aage.mp3'
            ],
        },
    },

    // Mascot sparky labels
    sparkyLabels: {
        curious: 'Sparky is curious',
        speaking: 'Sparky is speaking',
        happy: 'Sparky is happy',
        thinking: 'Sparky is thinking',
        celebrate: 'Sparky celebrates',
        idle: 'Sparky is ready',
        correct: 'Sparky gives a thumbs up',
        kind: 'Sparky is cheering you on',
    },

    // Balloon visual color palette
    balloonPalette: [
        { base: '#ff4d6d', light: '#ff758f', knot: '#c9184a' }, // Pink
        { base: '#38bdf8', light: '#7dd3fc', knot: '#0284c7' }, // Sky Blue
        { base: '#4ade80', light: '#86efac', knot: '#16a34a' }, // Mint Green
        { base: '#fbbf24', light: '#fde047', knot: '#d97706' }, // Yellow
        { base: '#a855f7', light: '#c084fc', knot: '#7e22ce' }, // Purple
        { base: '#fb923c', light: '#fdba74', knot: '#ea580c' }, // Orange
    ],

    // Sticker Album rewards unlocked on level completion (1 starter + 20 level rewards)
    stickers: [
        { id: 0, asset: 'emoji_u2b50.svg', name: 'सुपर स्टार' },
        { id: 1, asset: 'emoji_u1f308.svg', name: 'इंद्रधनुष' },
        { id: 2, asset: 'emoji_u1f680.svg', name: 'रॉकेट' },
        { id: 3, asset: 'emoji_u1f995.svg', name: 'डाइनो' },
        { id: 4, asset: 'emoji_u1f41d.svg', name: 'मधुमक्खी' },
        { id: 5, asset: 'emoji_u1f43c.svg', name: 'पांडा' },
        { id: 6, asset: 'emoji_u1f984.svg', name: 'यूनिकॉर्न' },
        { id: 7, asset: 'emoji_u1f419.svg', name: 'ऑक्टोपस' },
        { id: 8, asset: 'emoji_u2600.svg', name: 'सूरज' },
        { id: 9, asset: 'emoji_u1f98b.svg', name: 'तितली' },
        { id: 10, asset: 'emoji_u1f422.svg', name: 'कछुआ' },
        { id: 11, asset: 'emoji_u1f981.svg', name: 'शेर' },
        { id: 12, asset: 'emoji_u1f433.svg', name: 'व्हेल' },
        { id: 13, asset: 'emoji_u1f916.svg', name: 'रोबोट' },
        { id: 14, asset: 'emoji_u1f47d.svg', name: 'एलियन' },
        { id: 15, asset: 'emoji_u1f409.svg', name: 'ड्रैगन' },
        { id: 16, asset: 'emoji_u1f989.svg', name: 'उल्लू' },
        { id: 17, asset: 'emoji_u1f98a.svg', name: 'लोमड़ी' },
        { id: 18, asset: 'emoji_u1f427.svg', name: 'पेंगुइन' },
        { id: 19, asset: 'emoji_u1f988.svg', name: 'शार्क' },
        { id: 20, asset: 'emoji_u1f3c6.svg', name: 'मात्रा चैंपियन' }
    ]
};
