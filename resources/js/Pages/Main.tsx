import { QuizManager } from "@/components/app/quiz-manager";
import { Layout } from "@/layouts/Layout";
const quiz = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: [
            { id: 1, text: "Berlin" },
            { id: 2, text: "Madrid" },
            { id: 3, text: "Paris" },
            { id: 4, text: "Rome" },
        ],
        correctAnswer: 3,
        topic: "Geography",
    },
    {
        id: 2,
        question: "What is 2 + 2?",
        options: [
            { id: 1, text: "3" },
            { id: 2, text: "4" },
            { id: 3, text: "5" },
            { id: 4, text: "6" },
        ],
        correctAnswer: 2,
        topic: "Math",
    },
    {
        id: 3,
        question: "Who wrote 'Hamlet'?",
        options: [
            { id: 1, text: "Charles Dickens" },
            { id: 2, text: "William Shakespeare" },
            { id: 3, text: "Jane Austen" },
            { id: 4, text: "Mark Twain" },
        ],
        correctAnswer: 2,
        topic: "Literature",
    },
];

const Dashboard = () => {
    return (
        <Layout>
            <main className="flex-1 overflow-y-auto  ">
                <QuizManager quizSet={quiz} />
                {/* <ResultPage
                    score={10}
                    totalQuestions={15}
                    topicResults={{
                        Math: {
                            correct: 8,
                            total: 10,
                        },
                        Science: {
                            correct: 5,
                            total: 10,
                        },
                        History: {
                            correct: 7,
                            total: 10,
                        },
                    }}
                /> */}
            </main>
        </Layout>
    );
};

export default Dashboard;
