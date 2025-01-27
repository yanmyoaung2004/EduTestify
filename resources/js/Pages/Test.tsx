type Props = {
    test: string;
};

const Test = ({ test }: Props) => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-red-600">
                Hello world, EduTestify!
            </h1>
            <span className="font-bold text-blue-500 italic">
                This is EduTestify Project
            </span>
        </>
    );
};

export default Test;
