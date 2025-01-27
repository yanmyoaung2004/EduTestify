import { Layout } from "@/layouts/Layout";
import Dashboard from "./Dashboard";

const Main = () => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">Welcome to EduTestify</h1>
            <Dashboard />
        </Layout>
    );
};

export default Main;
