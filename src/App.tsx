import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './App.css';


function App() {

    // Sample data for the heatmap
  const values = [
    { date: '2024-01-01', count: 1 },
    { date: '2024-01-15', count: 3 },
    { date: '2024-02-01', count: 2 },
    // Add more data points as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Calendar Heatmap</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <CalendarHeatmap
            startDate={new Date('2024-01-01')}
            endDate={new Date('2024-12-31')}
            values={values}
            classForValue={(value) => {
              if (!value) return 'color-empty';
              return `color-scale-${value.count}`;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
