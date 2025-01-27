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
import { Calendar, Clock, AlertTriangle } from "lucide-react";
import { Layout } from "@/layouts/Layout";

const exams = [
    {
        id: 1,
        title: "Final Math Exam",
        date: "2023-06-15",
        duration: 180,
        status: "Upcoming",
    },
    {
        id: 2,
        title: "Physics Midterm",
        date: "2023-06-10",
        duration: 120,
        status: "Completed",
    },
    {
        id: 3,
        title: "Chemistry Lab Test",
        date: "2023-06-20",
        duration: 90,
        status: "Upcoming",
    },
];

export default function ExamsPage() {
    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Exams</h1>
                    <Button>Schedule New Exam</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {exams.map((exam) => (
                        <Card key={exam.id}>
                            <CardHeader>
                                <CardTitle>{exam.title}</CardTitle>
                                <CardDescription>
                                    <div className="flex items-center">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {new Date(
                                            exam.date
                                        ).toLocaleDateString()}
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <Clock className="mr-1 h-4 w-4" />
                                        Duration: {exam.duration} minutes
                                    </div>
                                    <Badge
                                        variant={
                                            exam.status === "Upcoming"
                                                ? "default"
                                                : "secondary"
                                        }
                                    >
                                        {exam.status}
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                {exam.status === "Upcoming" ? (
                                    <Button className="w-full">
                                        Start Exam
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        View Results
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Card className="bg-yellow-50 dark:bg-yellow-950">
                    <CardHeader>
                        <CardTitle className="flex items-center text-yellow-700 dark:text-yellow-400">
                            <AlertTriangle className="mr-2 h-5 w-5" />
                            Important Notice
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-yellow-700 dark:text-yellow-400">
                            Remember to check your exam schedule regularly.
                            Ensure you have a stable internet connection before
                            starting any online exams.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
