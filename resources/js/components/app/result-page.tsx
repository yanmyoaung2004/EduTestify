import React from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultPageProps {
    score: number;
    totalQuestions: number;
    topicResults: Record<string, { correct: number; total: number }>;
}

export function ResultPage({
    score,
    totalQuestions,
    topicResults,
}: ResultPageProps) {
    const percentage = (score / totalQuestions) * 100;

    const chartData = {
        labels: Object.keys(topicResults),
        datasets: [
            {
                data: Object.values(topicResults).map(
                    (result) => (result.correct / result.total) * 100
                ),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(153, 102, 255, 0.8)",
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
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                position: "bottom" as const,
            },
        },
        cutout: "70%",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Quiz Results
                </h2>
                <div className="flex flex-col items-center mb-8">
                    <div className="text-6xl font-bold text-indigo-600 mb-2">
                        {percentage.toFixed(0)}%
                    </div>
                    <p className="text-xl text-gray-600">
                        You scored {score} out of {totalQuestions}
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Performance by Topic
                    </h3>
                    <div className="w-full max-w-xs mx-auto">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>
                </div>
                <div className="space-y-4">
                    {Object.entries(topicResults).map(([topic, result]) => (
                        <div
                            key={topic}
                            className="flex justify-between items-center"
                        >
                            <span className="text-gray-700">{topic}</span>
                            <span className="font-semibold text-indigo-600">
                                {(
                                    (result.correct / result.total) *
                                    100
                                ).toFixed(0)}
                                %
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
