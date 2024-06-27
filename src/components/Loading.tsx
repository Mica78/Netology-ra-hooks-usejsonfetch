import { useJsonFetch } from "../hooks/useJsonFetch";
import { UI } from "./UI";

export const Loading = () => {
  const [ {data, loading, error} ] = useJsonFetch(
    "http://localhost:8000",
    "loading",
  );

  return (
    <div>
      <h1>Loading</h1>
      <UI data={data} loading={loading} error={error} />
    </div>
  );
};
