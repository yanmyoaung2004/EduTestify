import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Progress } from "@/components/ui/progress";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { Badge } from "@/components/ui/badge";
import { BookOpen, BookOpenText, LogIn, Trophy } from "lucide-react";
import { Layout } from "@/layouts/Layout";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

type Subject = {
    id: number;
    name: string;
    chapters: Chapter[];
    completedQuestions: number;
    totalQuestions: number;
    progress: number;
};

type Chapter = {
    id: number;
    chapter: string;
    topics: Topic[];
};

type Topic = {
    id: number;
    name: string;
};

export default function PracticePage({
     subjects: initialSubject,
     subjectTitles: initialSubjectTitles,
     }
     : { subjects: Subject[], subjectTitles: Subject[] }) {
    const [subjects, setSubjects] = useState(initialSubject || []);   
    const [subjectTitle, setSubjectTitle] = useState(initialSubjectTitles || []);
    const [currentSubject, setCurrentSubject] = useState<number | null>(null);
    
    useEffect(() => {
        if (currentSubject) {
            router.get('/practice', { subject:  currentSubject}, {
                preserveState: true,
                onSuccess: (page: any) => setSubjects(page.props.subjects),
                onError: (error: any) => console.error(error),
            });
        }
    }, [currentSubject]);

    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Practice</h1>
                    <Select onValueChange={(value) => setCurrentSubject(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Subjects</SelectLabel>
                                <SelectItem className="cursor-pointer" value={"all"}>
                                    All Subjects
                                </SelectItem>
                                {subjectTitle.map((title : {id: number, name: string}) => (
                                    <SelectItem className="cursor-pointer" key={title.id} value={title.id}>
                                        {title.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-6">
                    {subjects.map((subject) => (
                        <Card key={subject.id}>
                            <CardHeader>
                                <CardTitle className="flex items-center"><BookOpenText className="w-5 h-5 mr-2" /> <span>{subject.name}</span></CardTitle>
                                {/* <CardDescription>
                                    {subject.completedQuestions} / {subject.totalQuestions} questions completed
                                </CardDescription> */}
                            </CardHeader>
                            <CardContent>
                                {/* <Progress value={subject.progress} className="w-full" /> */}
                                {/* <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                    <span>Progress: {subject.progress}%</span>
                                    <span>{subject.totalQuestions - subject.completedQuestions} questions left</span>
                                </div> */}
                                <Accordion type="single" collapsible>
{subject.chapters.map((sub) => (
                                    <AccordionItem value={sub.chapter} key={sub.id}>
                                    <AccordionTrigger>{sub.chapter}</AccordionTrigger>
                                    {
                                        sub.topics.length > 0 ? 
                                         sub.topics.map((topic) => (
                                            <AccordionContent key={topic.id}>
                                                <p >{topic.name}</p>
                                            </AccordionContent>)) :
                                            (<AccordionContent>
                                                <p>No topics available</p>
                                            </AccordionContent>)
                                        
                                    }
                                    <AccordionContent>
                                     
                                    </AccordionContent>
                                  </AccordionItem>))}
</Accordion>

                                
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div className="flex items-center">
                                    <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                                    <Badge variant="secondary">Level {Math.floor(subject.progress / 20) + 1}</Badge>
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

//practice card
{/* <Card key={subject.id}>
                            <CardHeader>
                                <CardTitle>{subject.name}</CardTitle>
                                <CardDescription>
                                    {subject.completedQuestions} / {subject.totalQuestions} questions completed
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={subject.progress} className="w-full" />
                                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                    <span>Progress: {subject.progress}%</span>
                                    <span>{subject.totalQuestions - subject.completedQuestions} questions left</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div className="flex items-center">
                                    <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                                    <Badge variant="secondary">Level {Math.floor(subject.progress / 20) + 1}</Badge>
                                </div>
                                <Button>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Practice Now
                                </Button>
                            </CardFooter>
                        </Card> */}