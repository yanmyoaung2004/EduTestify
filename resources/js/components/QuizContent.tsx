import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import type { QuizQuestion } from "./QuizSession";
import { motion, AnimatePresence } from "framer-motion";

type QuizContentProps = {
    quizSet: QuizQuestion[];
    handleAnswer: (id: number, answer: number) => void;
    handleSubmit: () => void;
};

export function QuizContent({
    quizSet,
    handleAnswer,
    handleSubmit,
}: QuizContentProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<
        Record<number, string>
    >({});

    const handleNext = () => {
        if (currentQuestion < quizSet.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSelectAnswer = (value: string) => {
        const currentQuiz = quizSet[currentQuestion];
        setSelectedAnswers((prev) => ({
            ...prev,
            [currentQuiz.id]: value,
        }));
        handleAnswer(currentQuiz.id, Number.parseInt(value, 10));
    };

    const currentQuiz = quizSet[currentQuestion];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 w-full"
        >
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Question {currentQuestion + 1}
                        </h2>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuiz.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-4">
                                <p className="text-lg text-slate-800">
                                    {currentQuiz.question}
                                </p>
                                {currentQuiz.questionImage && (
                                    <div className="w-full h-72 flex justify-center">
                                        <img
                                            src={
                                                currentQuiz.questionImage ||
                                                "/placeholder.svg"
                                            }
                                            alt="Question Image"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                )}

                                <RadioGroup
                                    onValueChange={handleSelectAnswer}
                                    value={
                                        selectedAnswers[currentQuiz.id] || ""
                                    }
                                    className={
                                        currentQuiz.type === "image"
                                            ? "grid grid-cols-2 gap-4 pt-3"
                                            : "space-y-2  pt-3"
                                    }
                                >
                                    {currentQuiz.options.map(
                                        (option, index) => (
                                            <motion.button
                                                key={option.id}
                                                whileHover={{ scale: 1.01 }}
                                                // whileTap={{ scale: 1.02 }}
                                            >
                                                <div
                                                    key={index}
                                                    className={
                                                        currentQuiz.type ===
                                                        "image"
                                                            ? "flex flex-col items-center space-y-2"
                                                            : "flex items-center space-x-2"
                                                    }
                                                >
                                                    <label
                                                        htmlFor={`option-${currentQuiz.id}-${index}`}
                                                        className="cursor-pointer hover:bg-slate-100 w-full px-3 rounded-lg"
                                                    >
                                                        {"image" in option && (
                                                            <div className="w-full h-56 mb-2 flex justify-start">
                                                                <img
                                                                    src={
                                                                        option.image ||
                                                                        "/placeholder.svg"
                                                                    }
                                                                    alt={
                                                                        option.text
                                                                    }
                                                                    className="max-h-full max-w-full object-cover rounded-md"
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem
                                                                value={option.id.toString()}
                                                                id={`option-${currentQuiz.id}-${index}`}
                                                            />
                                                            <Label
                                                                htmlFor={`option-${currentQuiz.id}-${index}`}
                                                                className="text-md text-slate-800 cursor-pointer py-2 text-start"
                                                            >
                                                                {option.text}
                                                            </Label>
                                                        </div>
                                                    </label>
                                                </div>
                                            </motion.button>
                                        )
                                    )}
                                </RadioGroup>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                    >
                        Previous
                    </Button>
                    <div className="text-center">
                        <p className="mb-2">
                            {currentQuestion + 1} / {quizSet.length}
                        </p>
                        <Progress
                            value={
                                ((currentQuestion + 1) / quizSet.length) * 100
                            }
                            className="w-[200px]"
                        />
                    </div>
                    {currentQuestion === quizSet.length - 1 ? (
                        <Button onClick={handleSubmit}>Submit</Button>
                    ) : (
                        <Button
                            onClick={handleNext}
                            disabled={currentQuestion === quizSet.length - 1}
                        >
                            Next
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
