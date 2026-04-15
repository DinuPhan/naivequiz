// aws-quiz/sm2.js

// quality: 0 (total blackout) to 5 (perfect response)
function calculateSM2(quality, previousData = null) {
    let repetitions, interval, easeFactor;

    if (!previousData) {
        repetitions = 0;
        interval = 1;
        easeFactor = 2.5;
    } else {
        repetitions = previousData.repetitions || 0;
        interval = previousData.interval || 1;
        easeFactor = previousData.easeFactor || 2.5;
    }

    if (quality >= 3) {
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions++;
    } else {
        repetitions = 0;
        interval = 1;
    }

    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    // Calculate next review date
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return {
        repetitions,
        interval,
        easeFactor,
        nextReview: nextReview.toISOString()
    };
}
