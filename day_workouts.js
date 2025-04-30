// PUSH PULL LEGS Workout Plans
const workoutPlans = {
  1: [
    { exercise: "Bench Press", sets: 4, reps: 10 },
    { exercise: "Incline Dumbbell Press", sets: 3, reps: 10 },
    { exercise: "Seated Shoulder Press", sets: 3, reps: 10 },
    { exercise: "Lateral Raises", sets: 3, reps: 15 },
    { exercise: "Triceps Rope Pushdown", sets: 3, reps: 12 },
    { exercise: "Overhead Tricep Extension", sets: 2, reps: 15 },
    { exercise: "Hanging Leg Raises", sets: 3, reps: 15 }
  ],
  2: [
    { exercise: "Lat Pulldown (wide grip)", sets: 4, reps: 10 },
    { exercise: "Barbell Row", sets: 3, reps: 10 },
    { exercise: "V-bar Seated Row", sets: 3, reps: 10 },
    { exercise: "Barbell Curl", sets: 3, reps: 12 },
    { exercise: "Hammer Curl", sets: 2, reps: 12 },
    { exercise: "Russian Twists", sets: 3, reps: 20 }
  ],
  3: [
    { exercise: "Squats", sets: 4, reps: 10 },
    { exercise: "Leg Press", sets: 3, reps: 12 },
    { exercise: "Leg Curl", sets: 3, reps: 12 },
    { exercise: "Calf Raise", sets: 4, reps: 15 },
    { exercise: "Incline Walk (cardio)", sets: 1, reps: 10 }
  ],
  4: [
    { exercise: "Incline Machine Press", sets: 4, reps: 12 },
    { exercise: "Cable Chest Fly", sets: 3, reps: 15 },
    { exercise: "Arnold Press", sets: 3, reps: 10 },
    { exercise: "Upright Row", sets: 3, reps: 12 },
    { exercise: "Dips", sets: 3, reps: 12 },
    { exercise: "Plank", sets: 3, reps: 1 }
  ],
  5: [
    { exercise: "Pull-ups", sets: 3, reps: 8 },
    { exercise: "Lat Pullover", sets: 3, reps: 12 },
    { exercise: "Close Grip Row", sets: 3, reps: 12 },
    { exercise: "Preacher Curl", sets: 3, reps: 10 },
    { exercise: "Concentration Curl", sets: 3, reps: 10 },
    { exercise: "Cable Crunch", sets: 3, reps: 20 }
  ],
  6: [
    { exercise: "Romanian Deadlift", sets: 4, reps: 10 },
    { exercise: "Dumbbell Lunges", sets: 3, reps: 12 },
    { exercise: "Hip Thrusts", sets: 3, reps: 15 },
    { exercise: "Calf Raise Drop Set", sets: 4, reps: 20 },
    { exercise: "Stairmaster (cardio)", sets: 1, reps: 20 },
    { exercise: "Decline Sit-ups", sets: 3, reps: 20 }
  ]
};

// BRO SPLIT Workout Plans
const broSplitPlans = {
  1: [
    { exercise: "Bench Press", sets: 4, reps: 8 },
    { exercise: "Incline Dumbbell Press", sets: 3, reps: 10 },
    { exercise: "Chest Fly (Cable or Machine)", sets: 3, reps: 12 },
    { exercise: "Push-ups", sets: 2, reps: 20 }
  ],
  2: [
    { exercise: "Lat Pulldown", sets: 4, reps: 10 },
    { exercise: "Seated Cable Row", sets: 3, reps: 10 },
    { exercise: "Dumbbell Row", sets: 3, reps: 10 },
    { exercise: "Deadlift (light)", sets: 3, reps: 6 }
  ],
  3: [
    { exercise: "Overhead Shoulder Press", sets: 4, reps: 10 },
    { exercise: "Side Lateral Raise", sets: 3, reps: 12 },
    { exercise: "Front Raise", sets: 3, reps: 12 },
    { exercise: "Rear Delt Fly", sets: 3, reps: 12 }
  ],
  4: [
    { exercise: "Barbell Curl", sets: 3, reps: 12 },
    { exercise: "Dumbbell Hammer Curl", sets: 3, reps: 12 },
    { exercise: "Tricep Rope Pushdown", sets: 3, reps: 12 },
    { exercise: "Overhead Tricep Extension", sets: 3, reps: 12 },
    { exercise: "Concentration Curl", sets: 2, reps: 15 }
  ],
  5: [
    { exercise: "Leg Press", sets: 4, reps: 10 },
    { exercise: "Walking Lunges", sets: 3, reps: 20 },
    { exercise: "Seated Leg Curl", sets: 3, reps: 12 },
    { exercise: "Leg Extension", sets: 3, reps: 12 },
    { exercise: "Calf Raises", sets: 3, reps: 20 }
  ],
  6: [
    { exercise: "Incline Machine Press", sets: 3, reps: 12 },
    { exercise: "Pec Deck (Machine Fly)", sets: 3, reps: 12 },
    { exercise: "EZ Bar Curl", sets: 3, reps: 12 },
    { exercise: "Tricep Dips", sets: 3, reps: 12 },
    { exercise: "Dumbbell Curl (Light, Slow)", sets: 2, reps: 15 }
  ]
};

// HOME WORKOUT Plans
const homeWorkoutPlans = {
  1: [
    { exercise: "Push-ups", sets: 4, reps: 15 },
    { exercise: "Incline Push-ups", sets: 3, reps: 15 },
    { exercise: "Decline Push-ups", sets: 3, reps: 12 },
    { exercise: "Wide Push-ups", sets: 2, reps: 20 },
    { exercise: "Chest Squeeze", sets: 3, reps: 30 }
  ],
  2: [
    { exercise: "Superman Hold", sets: 4, reps: 30 },
    { exercise: "Superman Pulls", sets: 3, reps: 15 },
    { exercise: "Reverse Snow Angels", sets: 3, reps: 15 },
    { exercise: "Backpack Row", sets: 4, reps: 12 },
    { exercise: "Backpack Deadlift", sets: 3, reps: 15 }
  ],
  3: [
    { exercise: "Pike Push-ups", sets: 4, reps: 10 },
    { exercise: "Wall Walk", sets: 3, reps: 5 },
    { exercise: "Front Arm Raises (Water Bottle)", sets: 3, reps: 15 },
    { exercise: "Side Arm Raises (Water Bottle)", sets: 3, reps: 15 },
    { exercise: "Arm Circles", sets: 3, reps: 1 }
  ],
  4: [
    { exercise: "Close-grip Push-ups", sets: 4, reps: 12 },
    { exercise: "Backpack Bicep Curls", sets: 4, reps: 12 },
    { exercise: "Dips on Chair/Table", sets: 4, reps: 12 },
    { exercise: "Hammer Curls with Bottles", sets: 3, reps: 15 },
    { exercise: "Plank to Push-up", sets: 2, reps: 20 }
  ],
  5: [
    { exercise: "Bodyweight Squats", sets: 4, reps: 20 },
    { exercise: "Wall Sit", sets: 3, reps: 30 },
    { exercise: "Step-ups (Chair/Bed)", sets: 3, reps: 15 },
    { exercise: "Bulgarian Split Squats", sets: 3, reps: 10 },
    { exercise: "Standing Calf Raises", sets: 3, reps: 25 }
  ],
  6: [
    { exercise: "Normal Push-ups", sets: 3, reps: 20 },
    { exercise: "Backpack Curls", sets: 3, reps: 12 },
    { exercise: "Incline Push-ups", sets: 2, reps: 20 },
    { exercise: "Tricep Dips on Chair", sets: 3, reps: 15 },
    { exercise: "Push-up Hold", sets: 2, reps: 30 }
  ]
};
