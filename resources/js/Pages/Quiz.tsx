import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Book } from "lucide-react";
import { Layout } from "@/layouts/Layout";

const quizzes = [
    {
        id: 1,
        title: "Math Fundamentals",
        description: "Test your basic math skills",
        questions: 20,
        timeLimit: 30,
        difficulty: "Easy",
    },
    {
        id: 2,
        title: "Advanced Physics",
        description: "Challenge your understanding of complex physics concepts",
        questions: 25,
        timeLimit: 45,
        difficulty: "Hard",
    },
    {
        id: 3,
        title: "World History",
        description: "Explore key events in world history",
        questions: 30,
        timeLimit: 40,
        difficulty: "Medium",
    },
];

export default function QuizzesPage() {
    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Quizzes</h1>
                    <Button>Create New Quiz</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {quizzes.map((quiz) => (
                        <Card key={quiz.id}>
                            <CardHeader>
                                <CardTitle>{quiz.title}</CardTitle>
                                <CardDescription>
                                    {quiz.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <Book className="mr-1 h-4 w-4" />
                                        {quiz.questions} questions
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="mr-1 h-4 w-4" />
                                        {quiz.timeLimit} minutes
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <Badge
                                    variant={
                                        quiz.difficulty === "Easy"
                                            ? "secondary"
                                            : quiz.difficulty === "Medium"
                                            ? "default"
                                            : "destructive"
                                    }
                                >
                                    {quiz.difficulty}
                                </Badge>
                                <Button>Start Quiz</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
