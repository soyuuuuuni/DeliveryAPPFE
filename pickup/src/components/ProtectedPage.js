import { useEffect, useState } from "react";
import useAxios from "../util/axiosInstance";

function ProtectedPage() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("http://localhost:8000/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();

  }, []);

  return (
    <div>
      <h1>Projected Page</h1>
      <p>{res}</p>
    </div>
  );
}

export default ProtectedPage;