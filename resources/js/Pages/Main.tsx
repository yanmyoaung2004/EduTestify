import QuizSession from "@/components/QuizSession";
import { Layout } from "@/layouts/Layout";

const Dashboard = () => {
    return (
        <Layout>
            <main className="flex-1 overflow-y-auto  ">
                <QuizSession />
            </main>
        </Layout>
    );
};

export default Dashboard;
