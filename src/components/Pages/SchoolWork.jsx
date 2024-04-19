import { Helmet } from "react-helmet-async";
import Playing from "./Playing";
import StudentDialogue from "./StudentDialogue";
import Ifter from "./Ifter";

const SchoolWork = () => {
    return (
        <div className="">
            <Helmet>
                <title>প্রতিষ্ঠানিক কার্যক্রম Thakurgaon sugar mills high school</title>
            </Helmet>
            <Playing />
            <Ifter />
            <StudentDialogue />
        </div>
    );
};

export default SchoolWork;