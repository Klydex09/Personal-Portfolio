// Weekly budget
export const budget = 3000;


// Weekly expense records
export const expenses = [
  {
    date: "2026-08-02",
    day: "Sunday",
    category: "Weekly Expenses",
    description: "Sunday Expenses",
    amount: 160
  },
  {
    date: "2026-08-03",
    day: "Monday",
    category: "Weekly Expenses",
    description: "Monday Expenses",
    amount: 146
  },
  {
    date: "2026-08-04",
    day: "Tuesday",
    category: "Weekly Expenses",
    description: "Tuesday Expenses",
    amount: 189
  },
  {
    date: "2026-08-05",
    day: "Wednesday",
    category: "Weekly Expenses",
    description: "Wednesday Expenses",
    amount: 397
  },
  {
    date: "2026-08-06",
    day: "Thursday",
    category: "Weekly Expenses",
    description: "Thursday Expenses",
    amount: 27
  },
  {
    date: "2026-08-07",
    day: "Friday",
    category: "Weekly Expenses",
    description: "Friday Expenses",
    amount: 497
  },
  {
    date: "2026-08-08",
    day: "Saturday",
    category: "Weekly Expenses",
    description: "Saturday Expenses",
    amount: 269
  }
];


// Required expenses that should be followed
export const requiredExpenses = [
  {
    category: "Transportation (IN)",
    target: 0
  },
  {
    category: "Lunch",
    target: 0
  },
  {
    category: "Recess",
    target: 0
  },
  {
    category: "Dinner",
    target: 0
  },
  {
    category: "Transportation (OUT)",
    target: 0
  }
];


// Weekly expense summary
export const weeklyExpenses = [
  {
    week: "Week 1",
    startDate: "August 2, 2026",
    endDate: "August 8, 2026",

    dailyExpenses: [
      {
        day: "Sunday",
        date: "August 2",
        amount: 160
      },
      {
        day: "Monday",
        date: "August 3",
        amount: 146
      },
      {
        day: "Tuesday",
        date: "August 4",
        amount: 189
      },
      {
        day: "Wednesday",
        date: "August 5",
        amount: 397
      },
      {
        day: "Thursday",
        date: "August 6",
        amount: 27
      },
      {
        day: "Friday",
        date: "August 7",
        amount: 497
      },
      {
        day: "Saturday",
        date: "August 8",
        amount: 269
      }
    ],

    total: 1685
  }
];