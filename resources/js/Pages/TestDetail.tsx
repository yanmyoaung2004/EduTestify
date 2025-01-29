
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, BookOpen, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Layout } from "@/layouts/Layout"

// // This would typically come from a database or API
// const examData = {
//   id: 1,
//   title: "Final Math Exam",
//   date: "2023-06-30",
//   startTime: "10:00 AM",
//   duration: 180,
//   questions: 50,
//   subject: "Mathematics",
//   status: "Upcoming",
//   description:
//     "This comprehensive exam covers all topics studied in the Mathematics course this semester. Make sure to review all chapters and practice problems before the exam.",
//   topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics"],
//   requirements: ["Scientific calculator", "Pencil and eraser", "Scratch paper"],
// }

interface Test {
  id: number;
  teacher_id: number;
  type: string;
  duration: string;
  start_date: string; 
  description: string | null;
  created_at: string;
  updated_at: string;
  test_questions: Question[];
}

interface Question{
  id: number,
  test_id: number,
  question_id: number,
  created_at?: string,
  updated_at?: string,
}

interface CoverTopics{
  id:number,
  name: string,
}

export default function TestDetail({ params,testData, coverTopics }: { params: { examId: string }, testData: any, coverTopics: CoverTopics[] }) {
  
  console.log(testData,coverTopics);
  const test = testData.testStudent.test;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{test.type}</h1>
          <Badge className="capitalize" variant={testData.testStudent.status !== "completed" ? "default" : "secondary"}>{testData.testStudent.status}</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Exam Details</CardTitle>
            <CardDescription>{test.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Date: {new Date(test.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Start Time: {new Date(test.start_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Duration: {test.duration} minutes</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Questions: {testData.testQuestionsLength}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Topics Covered:</h3>
              <ul className="list-disc list-inside">  
                {coverTopics.map((topic, index) => (
                  <li key={index}>{topic.name}</li>
                ))}
              </ul>
            </div>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="/tests" >
              <Button variant="outline">Back to Exams</Button>
            </a>
            {testData.testStudent.status !== "completed" ? (
              <a href={`/tests/${test.id}/take`} >
                <Button>Start Exam</Button>
              </a>
            ) : (
              <Button variant="secondary">View Results</Button>
            )}
          </CardFooter>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Exam Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-400">
              <li>Read each question carefully before answering.</li>
              <li>Manage your time wisely. Don't spend too long on any single question.</li>
              <li>Double-check your answers before submitting if time allows.</li>
              <li>If you encounter any technical issues, contact the exam supervisor immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-950">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-700 dark:text-yellow-400">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700 dark:text-yellow-400">
              Ensure you have a stable internet connection before starting the exam. Once started, the exam timer cannot
              be paused. Good luck!
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

