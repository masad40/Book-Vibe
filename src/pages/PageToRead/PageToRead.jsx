import React from 'react';
import { useLoaderData } from 'react-router';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as BarTooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Tooltip as PieTooltip,
  Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF'];

const PageToRead = () => {
  const bookData = useLoaderData();

  // Transform bookData to chart format
  const chartData = bookData.map(book => ({
    name: book.bookName,
    pages: book.totalPages
  }));

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-6">Pages to Read Chart</h2>

      
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          dataKey="pages"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <PieTooltip />
      </PieChart>
    </div>
  );
};

export default PageToRead;