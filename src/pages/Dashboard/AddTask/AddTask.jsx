import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import axios from "axios";
const AddTask = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const newTask = {
      title: data.title,
      priority: data.priority,
      date: data.date,
      description: data.description,
      email: user?.email,
    };
    axios.post("http://localhost:3000/todo", newTask).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("WoooW!!", "Service Added!", "success");
      }
      reset();
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
                  {...register("title", { required: true })}
                  placeholder="Title"
                  className="input input-bordered border-2 border-main-blue-300 rounded-lg w-full "
                />
              </div>
              <div className="md:w-1/2">
                <select
                  {...register("priority", { required: true })}
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
                  {...register("date", { required: true })}
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
                  {...register("description", { required: true })}
                />
              </div>
            </div>

            <div className="mt-5">
              <input
                type="submit"
                value="Add Task"
                className="btn mb-10 bg-red-500  text-[white] text-lg font-bold btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
