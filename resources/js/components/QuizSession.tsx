import { useState } from "react";
import { QuizContent } from "./QuizContent";
import { usePage } from "@inertiajs/react";

type TextOption = {
    id: number;
    text: string;
};

type ImageOption = {
    id: number;
    text: string;
    image: string;
};

type QuizOption = TextOption | ImageOption;

export type QuizQuestion = {
    id: number;
    question: string;
    type: "text" | "image";
    options: QuizOption[];
    correctAnswer: number;
    questionImage?: string;
};

const quizSet: QuizQuestion[] = [
    {
        id: 7,
        question:
            "Which of the following is the design for securing safety and reliability known as “foolproof”?",
        type: "text",
        options: [
            {
                text: "A redundant configuration, such as duplication, can be used so that even when a device failure occurs, the functions of the overall system are not affected.",
                id: 1,
            },
            {
                text: "Even when the user performs an incorrect operation, a problem does not occur in the system.",
                id: 2,
            },
            {
                text: "When a device failure occurs, the system runs even if the usable functions are restricted, and the processing efficiency is reduced.",
                id: 3,
            },
            {
                text: "When a device failure occurs, the system runs even if the usable functions are restricted, and the processing efficiency is reduced.",
                id: 4,
            },
        ],
        correctAnswer: 1,
    },
    {
        id: 17,
        question:
            "Which of the following is an appropriate explanation of feedback control?",
        type: "text",
        options: [
            { text: "It performs control in a predetermined order.", id: 7 },
            {
                text: "It performs control to keep the output in line with the target value.",
                id: 5,
            },
            {
                text: "It performs control to prevent external disturbances from affecting the output.",
                id: 6,
            },
            { text: "It performs control without using the output.", id: 8 },
        ],
        correctAnswer: 5,
    },
    {
        id: 1,
        question: `There are two microprocessors: a 32-bit CPU capable of executing each of 32-bit, 16-bit,
                    and 8-bit long instructions in 1 cycle, and a 16-bit CPU capable of executing each of 16-bit
                    and 8-bit long instructions in 1 cycle. Additionally, the 16-bit CPU can execute a 32-bit
                    long instruction in 2 cycles. When the appearance ratio of 32-bit long instructions is 40%, of
                    16-bit long instructions is 40%, and of 8-bit long instructions is 20% respectively, what is
                    the percentage improvement in total execution time with the 32-bit CPU compared to the
                    16-bit CPU? Here, both the 32-bit and 16-bit CPU operate at the same clock speed and have
                    the same performance except for the executable instruction length in 1 cycle.`,
        type: "text",
        options: [
            { text: "28.57 ", id: 9 },
            { text: "40", id: 10 },
            { text: "50", id: 11 },
            { text: "71.43", id: 12 },
        ],
        correctAnswer: 9,
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        type: "image",
        options: [
            {
                id: 13,
                text: "Mars",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
            {
                id: 14,
                text: "Jupiter",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
            {
                id: 15,
                text: "Venus",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
            {
                id: 16,
                text: "Saturn",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
        ],
        correctAnswer: 13,
    },
    {
        id: 3,
        question:
            "When an HDD has the specifications below, what is the average access time for an HDD to transfer 1 MB of data in ms? Here, the average access time can be calculated as the sum of the average seek time, controller overhead, rotational latency, and transfer time. Other overheads can be ignored.",
        type: "image",
        questionImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
        options: [
            {
                id: 17,
                text: "A",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
            {
                id: 18,
                text: "B",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
            {
                id: 19,
                text: "C",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
            {
                id: 20,
                text: "D",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpGXUhmVGzpEhEAouBMrTw8DE5VQg_-yn9hPsRtocFjATuoMNkFDfIMTECo1RqLzH8k&usqp=CAU",
            },
        ],
        correctAnswer: 17,
    },
    {
        id: 4,
        question: "Which of these is not a primary color?",
        type: "text",
        options: [
            { text: "Red", id: 21 },
            { text: "Blue", id: 22 },
            { text: "Green", id: 23 },
            { text: "Yellow", id: 24 },
        ],
        correctAnswer: 21,
    },
];

type Answer = {
    questionId: number;
    answerId: number;
};

const QuizSession = () => {
    const [answers, setAnswers] = useState<Answer[]>();
    const { user } = usePage().props;
    const handleAnswer = (id: number, answer: number): void => {
        setAnswers((prev) => {
            if (!prev) return [{ questionId: id, answerId: answer }];
            const existingIndex = prev.findIndex(
                (item) => item.questionId === id
            );
            if (existingIndex !== -1) {
                return prev.map((item) =>
                    item.questionId === id
                        ? { ...item, answerId: answer }
                        : item
                );
            }
            return [...prev, { questionId: id, answerId: answer }];
        });
    };

    const handleSubmit = (): void => {
        if (!answers) {
            console.log("No answers submitted.");
            return;
        }
        let score = 0;

        if (!user) {
            answers.forEach(({ questionId, answerId }) => {
                const question = quizSet.find((q) => q.id === questionId);
                if (question && question.correctAnswer === answerId) {
                    score += 1;
                }
            });

            console.log(`Your score is: ${score} out of ${quizSet.length}`);
        }
    };

    return (
        <>
            <QuizContent
                quizSet={quizSet}
                handleAnswer={handleAnswer}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default QuizSession;
