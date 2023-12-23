import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyTodos = () => {
  const { user } = useContext(AuthContext);
  const { data: todo = [], refetch } = useQuery({
    queryKey: ["todo", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/todo?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/todo/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 py-5 px-2 gap-5">
      {todo?.map((t) => {
        //convert each date individually
        const parseDate = moment(t?.date);
        const formateDate = parseDate.format("MM/DD/YYYY");
        return (
          <div key={t?._id} className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{t?.title}</h2>
              <p>Priority : {t?.priority}</p>
              <p>Deadline : {formateDate}</p>
              <p>Description : {t?.description}</p>
              <div className="card-actions justify-between">
                <Link to={`/dashboard/updateTodo/${t?._id}`}>
                  <button className="mt-5 bg-green-500 rounded-lg font-bold px-6 py-3 text-white  ">
                    {`Update`}
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(t?._id)}
                  className="mt-5 bg-[#e94c3d] rounded-lg font-bold px-6 py-3 text-white  ">
                  {`Delete`}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyTodos;
