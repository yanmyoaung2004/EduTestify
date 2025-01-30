import React, { useState } from "react";
import { ResultPage } from "./result-page";
import { QuizContent } from "./quiz-content";

type QuizQuestion = {
    id: number;
    question: string;
    options: { id: number; text: string }[];
    correctAnswer: number;
    topic: string;
};

interface QuizManagerProps {
    quizSet: QuizQuestion[];
}

export function QuizManager({ quizSet }: QuizManagerProps) {
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizResults, setQuizResults] = useState<{
        score: number;
        totalQuestions: number;
        topicResults: Record<string, { correct: number; total: number }>;
    } | null>(null);

    const handleQuizComplete = (
        score: number,
        totalQuestions: number,
        topicResults: Record<string, { correct: number; total: number }>
    ) => {
        setQuizResults({ score, totalQuestions, topicResults });
        setQuizCompleted(true);
    };

    if (quizCompleted && quizResults) {
        return <ResultPage {...quizResults} />;
    }

    return (
        <QuizContent quizSet={quizSet} onQuizComplete={handleQuizComplete} />
    );
}
