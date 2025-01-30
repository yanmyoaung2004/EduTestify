import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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
                label: "Correct Answers",
                data: Object.values(topicResults).map(
                    (result) => (result.correct / result.total) * 100
                ),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Performance by Topic",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: "Percentage Correct",
                },
            },
        },
    };

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Quiz Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">
                            Your Score: {score} / {totalQuestions}
                        </h2>
                        <p className="text-xl">{percentage.toFixed(2)}%</p>
                    </div>
                    <Progress value={percentage} className="w-full h-4" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Topic Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[400px]">
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
