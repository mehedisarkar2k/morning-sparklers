import { useHistory } from "react-router";
import Classes from "../../Home/Classes/Classes";

const Service = ({ course }) => {
  const history = useHistory();
  return (
    <>
      <Classes course={course}>
        {course.isAvailable ? (
          <button
            onClick={() => {
              history.push("/enroll");
            }}
            className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-base hover:bg-pink-500 hover:shadow-xl transition"
          >
            Enroll Now
          </button>
        ) : (
          <p className="bg-red-600 text-white rounded-full p-1 cursor-not-allowed select-none">
            Admission is closed!!
          </p>
        )}
      </Classes>
    </>
  );
};

export default Service;
