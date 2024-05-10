import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Jan', Bank: 19592, Cash: 19592 },
    { name: 'Feb', Bank: 18800, Cash: 36560 },
    { name: 'Mar', Bank: 36660, Cash: 14947 },
    { name: 'Apr', Bank: 14947, Cash: 12592 },
    { name: 'May', Bank: 15692, Cash: 17700 },
    { name: 'Jun', Bank: 25500, Cash: 15692 },
    { name: 'Jul', Bank: 36560, Cash: 33360 },
    { name: 'Aug', Bank: 25697, Cash: 25697 },
    { name: 'Sep', Bank: 12592, Cash: 36660 },
    { name: 'Oct', Bank: 19200, Cash: 25247 },
    { name: 'Nov', Bank: 32360, Cash: 18800 },
    { name: 'Dec', Bank: 25247, Cash: 32360 },
];

const BS_LineChart = () => {
    const [theme, setTheme] = useState(null); // Use square brackets here


    setInterval(() => {
        const themes = localStorage.getItem("vite-ui-theme");
        setTheme(themes);
    }, 100);
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Bank" stroke={theme === 'light' ? "#2e2e38" : (theme === 'dark' ? "#8884d8" : null)} activeDot={{ r: 8 }} strokeWidth={2}  />
                <Line type="monotone" dataKey="Cash" stroke={theme === 'light' ? "#74C578" : (theme === 'dark' ? "#82ca9d" : null)}activeDot={{ r: 8 }} strokeWidth={2}  />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default BS_LineChart;