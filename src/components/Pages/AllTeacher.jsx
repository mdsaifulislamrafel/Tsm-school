import DataHook from "../DataHook/DataHook";
import Teachers from "./Teachers";

const AllTeacher = () => {
    const { data } = DataHook();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
                {
                    data.map(teacher => <Teachers key={teacher.id} teacher={teacher}></Teachers>)
                }
            </div>
        </div>
    );
};

export default AllTeacher;