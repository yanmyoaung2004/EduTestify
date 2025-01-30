import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

type QuizQuestion = {
    id: number;
    question: string;
    options: { id: number; text: string }[];
    correctAnswer: number;
    topic: string;
};

type QuizContentProps = {
    quizSet: QuizQuestion[];
    onQuizComplete: (
        score: number,
        totalQuestions: number,
        topicResults: Record<string, { correct: number; total: number }>
    ) => void;
};

export function QuizContent({ quizSet, onQuizComplete }: QuizContentProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<
        Record<number, number>
    >({});
    const [topicResults, setTopicResults] = useState<
        Record<string, { correct: number; total: number }>
    >({});

    const handleSelectAnswer = useCallback(
        (questionId: number, answerId: number) => {
            setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerId }));

            const currentQuiz = quizSet[currentQuestion];
            setTopicResults((prev) => {
                const topic = currentQuiz.topic;
                const isCorrect = answerId === currentQuiz.correctAnswer;
                return {
                    ...prev,
                    [topic]: {
                        correct:
                            (prev[topic]?.correct || 0) + (isCorrect ? 1 : 0),
                        total: (prev[topic]?.total || 0) + 1,
                    },
                };
            });
        },
        [currentQuestion, quizSet]
    );

    const handleNext = useCallback(() => {
        if (currentQuestion < quizSet.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            const score = Object.values(topicResults).reduce(
                (acc, { correct }) => acc + correct,
                0
            );
            onQuizComplete(score, quizSet.length, topicResults);
        }
    }, [currentQuestion, quizSet.length, topicResults, onQuizComplete]);

    const handlePrevious = useCallback(() => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    }, [currentQuestion]);

    const currentQuiz = quizSet[currentQuestion];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl"
            >
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Question {currentQuestion + 1}
                    </h2>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                            style={{
                                width: `${
                                    ((currentQuestion + 1) / quizSet.length) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuiz.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-700 mb-6">
                            {currentQuiz.question}
                        </h3>
                        <div className="space-y-4">
                            {currentQuiz.options.map((option) => (
                                <motion.button
                                    key={option.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() =>
                                        handleSelectAnswer(
                                            currentQuiz.id,
                                            option.id
                                        )
                                    }
                                    className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                                        selectedAnswers[currentQuiz.id] ===
                                        option.id
                                            ? "bg-indigo-600 text-white"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                >
                                    {option.text}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className="flex items-center justify-center px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-5 h-5 mr-2" />
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition-colors duration-200"
                    >
                        {currentQuestion === quizSet.length - 1
                            ? "Finish"
                            : "Next"}
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
