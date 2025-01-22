import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './App.css';
import HabitTracker from './components/habit-tracker';

function App() {

    // Sample data for the heatmap
  const values = [
    { date: '2024-01-01', count: 1 },
    { date: '2024-01-15', count: 3 },
    { date: '2024-02-01', count: 2 },
    // Add more data points as needed
  ];
  const habitData = {
  
    // TODO all these data points are shifted later by 1 day (e.g. jan 1 is now written on jan 2) b/c theres a bug in the calendar heatmap

    "writing": [
      { "date": "2025-01-04", "count": 1 },
      { "date": "2025-01-06", "count": 1 },
      { "date": "2025-01-08", "count": 1 },
      { "date": "2025-01-10", "count": 1 },
      { "date": "2025-01-13", "count": 1 },
      { "date": "2025-01-15", "count": 1 },
      { "date": "2025-01-16", "count": 1 },
      { "date": "2025-01-17", "count": 1 },
      { "date": "2025-01-20", "count": 2 },
      // { "date": "2025-01-03", "count": 1 },
      // { "date": "2025-01-05", "count": 1 },
      // { "date": "2025-01-07", "count": 1 },
      // { "date": "2025-01-09", "count": 1 },
      // { "date": "2025-01-12", "count": 1 },
      // { "date": "2025-01-14", "count": 1 },
      // { "date": "2025-01-15", "count": 1 },
      // { "date": "2025-01-16", "count": 1 },
      // { "date": "2025-01-19", "count": 2 },
    ],
    "coding": [
      { "date": "2025-01-02", "count": 1 },
      { "date": "2025-01-03", "count": 1 },
      { "date": "2025-01-04", "count": 1 },
      { "date": "2025-01-05", "count": 1 },
      { "date": "2025-01-06", "count": 1 },
      { "date": "2025-01-07", "count": 1 },
      { "date": "2025-01-08", "count": 1 },
      { "date": "2025-01-09", "count": 1 },
      { "date": "2025-01-10", "count": 1 },
      { "date": "2025-01-11", "count": 1 },
      { "date": "2025-01-12", "count": 1 },
      { "date": "2025-01-13", "count": 1 },
      { "date": "2025-01-14", "count": 1 },
      { "date": "2025-01-15", "count": 1 },
      { "date": "2025-01-16", "count": 1 },
      { "date": "2025-01-17", "count": 1 },
      { "date": "2025-01-18", "count": 1 },
      { "date": "2025-01-19", "count": 1 },
      { "date": "2025-01-20", "count": 1 },
      { "date": "2025-01-21", "count": 1 },

      // { "date": "2025-01-01", "count": 1 },
      // { "date": "2025-01-02", "count": 1 },
      // { "date": "2025-01-03", "count": 1 },
      // { "date": "2025-01-04", "count": 1 },
      // { "date": "2025-01-05", "count": 1 },
      // { "date": "2025-01-06", "count": 1 },
      // { "date": "2025-01-07", "count": 1 },
      // { "date": "2025-01-08", "count": 1 },
      // { "date": "2025-01-09", "count": 1 },
      // { "date": "2025-01-10", "count": 1 },
      // { "date": "2025-01-11", "count": 1 },
      // { "date": "2025-01-12", "count": 1 },
      // { "date": "2025-01-13", "count": 1 },
      // { "date": "2025-01-14", "count": 1 },
      // { "date": "2025-01-15", "count": 1 },
      // { "date": "2025-01-16", "count": 1 },
      // { "date": "2025-01-17", "count": 1 },
      // { "date": "2025-01-18", "count": 1 },
      // { "date": "2025-01-19", "count": 1 },
      // { "date": "2025-01-20", "count": 1 },
    ],
    "yoga": [
      { "date": "2025-01-02", "count": 2 },
      { "date": "2025-01-03", "count": 1 },
      { "date": "2025-01-08", "count": 1 },
      { "date": "2025-01-10", "count": 1 },
      { "date": "2025-01-13", "count": 1 },
      { "date": "2025-01-15", "count": 1 },
      { "date": "2025-01-18", "count": 1 },
      { "date": "2025-01-20", "count": 1 },

      // { "date": "2025-01-01", "count": 2 },
      // { "date": "2025-01-02", "count": 1 },
      // { "date": "2025-01-03", "count": 0 },
      // { "date": "2025-01-04", "count": 0 },
      // { "date": "2025-01-05", "count": 0 },
      // { "date": "2025-01-06", "count": 0 },
      // { "date": "2025-01-07", "count": 1 },
      // { "date": "2025-01-08", "count": 0 },
      // { "date": "2025-01-09", "count": 1 },
      // { "date": "2025-01-10", "count": 0 },
      // { "date": "2025-01-11", "count": 0 },
      // { "date": "2025-01-12", "count": 1 },
      // { "date": "2025-01-13", "count": 0 },
      // { "date": "2025-01-14", "count": 1 },
      // { "date": "2025-01-15", "count": 0 },
      // { "date": "2025-01-16", "count": 0 },
      // { "date": "2025-01-17", "count": 1 },
      // { "date": "2025-01-18", "count": 0 },
      // { "date": "2025-01-19", "count": 1 },
      // { "date": "2025-01-20", "count": 0 },

    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Habitual</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-6">
              {Object.entries(habitData).map(([habit, data]) => (
                <HabitTracker key={habit} habit={habit} data={data} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
