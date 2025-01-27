import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy } from "lucide-react";
import { Layout } from "@/layouts/Layout";

const subjects = [
    {
        id: 1,
        name: "Mathematics",
        progress: 65,
        totalQuestions: 500,
        completedQuestions: 325,
    },
    {
        id: 2,
        name: "Physics",
        progress: 40,
        totalQuestions: 400,
        completedQuestions: 160,
    },
    {
        id: 3,
        name: "Chemistry",
        progress: 80,
        totalQuestions: 300,
        completedQuestions: 240,
    },
    {
        id: 4,
        name: "Biology",
        progress: 55,
        totalQuestions: 450,
        completedQuestions: 247,
    },
];

export default function PracticePage() {
    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Practice</h1>
                    <Button variant="outline">View All Subjects</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {subjects.map((subject) => (
                        <Card key={subject.id}>
                            <CardHeader>
                                <CardTitle>{subject.name}</CardTitle>
                                <CardDescription>
                                    {subject.completedQuestions} /{" "}
                                    {subject.totalQuestions} questions completed
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress
                                    value={subject.progress}
                                    className="w-full"
                                />
                                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                    <span>Progress: {subject.progress}%</span>
                                    <span>
                                        {subject.totalQuestions -
                                            subject.completedQuestions}{" "}
                                        questions left
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div className="flex items-center">
                                    <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                                    <Badge variant="secondary">
                                        Level{" "}
                                        {Math.floor(subject.progress / 20) + 1}
                                    </Badge>
                                </div>
                                <Button>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Practice Now
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
