import Classes from "../../Home/Classes/Classes";

const Service = ({ course }) => {
  return (
    <>
      <Classes course={course}>
        {course.isAvailable ? (
          <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-base hover:bg-pink-500 hover:shadow-xl transition">
            Enroll Now
          </button>
        ) : (
          <p className="bg-red-600 text-white rounded-full p-1 cursor-not-allowed">
            Admission is closed!!
          </p>
        )}
      </Classes>
    </>
  );
};

export default Service;
