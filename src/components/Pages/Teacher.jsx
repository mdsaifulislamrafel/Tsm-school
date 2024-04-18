import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HeadTeacher from "./HeadTeacher";
import AllTeacher from "./AllTeacher";
import Worker from "./Worker";

const Teacher = () => {
    return (
        <div>
            <Helmet>
                <title>Employees Thakurgaon sugar mills high school</title>
            </Helmet>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>প্রধান শিক্ষক</Tab>
                        <Tab>শিক্ষক বৃন্দ</Tab>
                        <Tab>কর্মকর্তা-কর্মচারী</Tab>
                    </TabList>

                    <TabPanel>
                        <HeadTeacher />
                    </TabPanel>
                    <TabPanel>
                        <AllTeacher />
                    </TabPanel>
                    <TabPanel>
                        <Worker />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Teacher;

