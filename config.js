// Configuration File for Valentine's Website
// Customize these settings to personalize the experience

const CONFIG = {
    // Website titles and headers
    website: {
        title: "Our Love Story - Valentine's Day 2026",
        heading: "Happy Valentine's Day",
        subtitle: "To My Beautiful LDR Love ❤️",
        description: "Even though we're miles apart, you're always in my heart. This website is a celebration of our love across the distance."
    },

    // Love letter content - Customize this with your own message!
    loveLetter: {
        greeting: "My Dearest,",
        paragraphs: [
            "Today, on Valentine's Day, I want to remind you of something I feel every single day: you are the most important person in my life. Even though we're separated by distance, my heart belongs completely to you.",
            
            "Every morning when I wake up, the first thing I do is think of you. Every night before I sleep, I whisper a little prayer that we'll be together soon. Distance means so little when someone means so much. Our love is stronger than any miles between us.",
            
            "I love the way you smile, even through a screen. I love how you make me laugh when I'm having a bad day. I love your kindness, your strength, your beautiful soul. You inspire me to be a better person every single day.",
            
            "This distance is temporary, but our love is forever. Every day brings us closer to being together, and I can't wait for the moment I can hold you in my arms again.",
            
            "You are my greatest adventure, my sweetest dream, and my truest love."
        ],
        closing: "Forever yours,",
        signature: "Your Love"
    },

    // Color scheme customization
    colors: {
        primary: "rose", // rose, red, pink, purple
        primaryShade: "600", // 500-700
        accent: "pink" // for gradients
    },

    // Animation settings
    animations: {
        enableHeartBeat: true,
        enableFloatingElements: true,
        enableFallingPetals: true,
        petalFrequency: 0.7 // Higher = more petals (0-1)
    },

    // Feature toggles
    features: {
        showPhotoGallery: true,
        showDaysCounter: true,
        showQuoteGenerator: true,
        showCountdown: true,
        showReasonsList: true,
        showMessageBoard: true
    },

    // Customizable messages
    messages: {
        selectDatePrompt: "Please select a date",
        selectReasonPrompt: "Please write a reason!",
        messageSentMessage: "Message sent! 💌",
        letterSavedMessage: "Your custom message has been saved! 💕"
    },

    // Social sharing (optional)
    sharing: {
        enabled: true,
        title: "Check out my LDR love letter!",
        text: "I created a special Valentine's Day website for my girlfriend!"
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
