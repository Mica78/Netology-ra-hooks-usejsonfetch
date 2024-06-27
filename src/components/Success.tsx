
import { useJsonFetch } from "../hooks/useJsonFetch";
import { UI } from "./UI";



export const Success = () => {

  const [ {data, loading, error} ] = useJsonFetch(
    "http://localhost:8000",
    "data",
  );

  return (
    <div>
      <h1>Success</h1>
      <UI data={data} loading={loading} error={error} />
    </div>
  );
};
