import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTodo = () => {
  const { _id, title, priority, description, date } = useLoaderData();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const updateTodo = {
      title: data.title,
      priority: data.priority,
      date: data.date,
      description: data.description,
    };
    axios.put(`http://localhost:3000/todo/${_id}`, updateTodo).then((res) => {
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/dashboardHome");
      }
    });
  };
  return (
    <div>
      <div className="md:flex justify-center px-10 items-center ">
        {/* img */}

        {/* form */}
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="md:flex  gap-5 ">
              <div className="md:w-1/2">
                <input
                  type="text"
                  {...register("title")}
                  defaultValue={title}
                  placeholder="Title"
                  className="input input-bordered border-2 border-main-blue-300 rounded-lg w-full "
                />
              </div>
              <div className="md:w-1/2">
                <select
                  {...register("priority")}
                  defaultValue={priority}
                  className="select select-bordered border-2 border-main-blue-300 rounded-lg w-full ">
                  <option disabled defaultValue>
                    Choose Publisher
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="md:flex  gap-5 ">
              <div className="w-full mt-4">
                <input
                  type="datetime-local"
                  {...register("date")}
                  defaultValue={date}
                  className="input input-bordered border-2 border-main-blue-300 rounded-lg w-full "
                />
              </div>
            </div>

            {/* description */}
            <div className="md:flex mt-4  gap-10 ">
              <div className="md:w-full">
                <textarea
                  placeholder="Description"
                  className="input py-2 h-40 input-bordered w-full border-2 border-main-blue-300 rounded-lg"
                  {...register("description")}
                  defaultValue={description}
                />
              </div>
            </div>

            <div className="mt-5">
              <input
                type="submit"
                value="Update Task"
                className="btn mb-10 bg-red-500  text-[white] text-lg font-bold btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
