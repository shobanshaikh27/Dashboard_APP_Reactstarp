// import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Purchase: 4000,
        Sales: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        Purchase: 3000,
        Sales: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        Purchase: 2000,
        Sales: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        Purchase: 2780,
        Sales: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Purchase: 1890,
        Sales: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        Purchase: 2390,
        Sales: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        Purchase: 3490,
        Sales: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        Purchase: 1398,
        Sales: 2300,
        amt: 2100,
    },
    {
        name: 'Sep',
        Purchase: 3220,
        Sales: 1300,
        amt: 2100,
    },
    {
        name: 'Oct',
        Purchase: 3490,
        Sales: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        Purchase: 2350,
        Sales: 3300,
        amt: 2100,
    },
    {
        name: 'Dec',
        Purchase: 3880,
        Sales: 300,
        amt: 2100,
    },
];

const SP_BarChart = () => {
    const [theme, setTheme] = useState(null); // Use square brackets here


    setInterval(() => {
        const themes = localStorage.getItem("vite-ui-theme");
        setTheme(themes);
    }, 100);




    return (
        <>
            <div className='w-100 h-100'>
                <ResponsiveContainer width="100%" height={450}>
                    <BarChart
                        // width={500}
                        // height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 5,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" tickLine={{ stroke: '#1F472E' }} tick={{ fill: '#1F472E' }} />
                        <YAxis tickLine={{ stroke: '#1F472E' }} tick={{ fill: '#1F472E' } } />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="Sales"
                            fill={theme === 'light' ? "#353e45" : (theme === 'dark' ? "#8884d8" : null)}
                            activeBar={<Rectangle fill={theme === 'dark' ? "#3a0054" : "#3a0054"} stroke="none" />}
                        />
                        <Bar dataKey="Purchase" fill="#83DE87" activeBar={<Rectangle fill={theme === 'dark' ? "#1F472E" : "#66AC69"} stroke="none" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default SP_BarChart;
