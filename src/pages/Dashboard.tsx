import {FaChartLine, FaCogs, FaTasks, FaUsers} from "react-icons/fa";

import Card from "../components/Card.tsx";

import {FaDollarSign} from "react-icons/fa6";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export function Dashboard() {
    const lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Fields Monitored",
                data: [10, 15, 20, 18, 25, 30],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // Smooth line
            },
            {
                label: "Staff Assigned",
                data: [8, 12, 14, 16, 18, 22],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4, // Smooth line
            },
            {
                label: "Crop data",
                data: [5, 9, 13, 20, 26, 27],
                borderColor: "rgb(106,141,186)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4, // Smooth line
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Monthly Monitoring Trends",
            },
        },
    };

// Bar chart data and options
    const barChartData = {
        labels: ["Field ", "Crop", "Staff", "Equipment"],
        datasets: [
            {
                label: "Filed Area",
                data: [120, 150, 100, 180, 200],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
            {
                label: "Vehicles Used",
                data: [5, 8, 10, 7, 6],
                backgroundColor: "rgba(255, 159, 64, 0.6)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
            },

        ],
    };

    const barChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Crop,Vehicle,Staff Usage by Field",
            },
        },
    };
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Main Content */}
            <main className="p-8 ml-6 mr-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Welcome Back!
                </h1>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    <Card icon={<FaUsers/>} title="Users" value="1,234"/>
                    <Card icon={<FaChartLine/>} title="Field" value="12.5%"/>
                    <Card icon={<FaDollarSign/>} title="Crop" value="$10K"/>
                    <Card icon={<FaTasks/>} title="Staff" value="76%"/>
                    <Card icon={<FaCogs />} title="Euiqment" value="232"/>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                    {/* Line Chart */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            User Growth
                        </h2>
                        <Line data={lineChartData} options={lineChartOptions}/>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Revenue Overview
                        </h2>
                        <Bar data={barChartData} options={barChartOptions}/>
                    </div>
                </div>
            </main>
        </div>

    );
}