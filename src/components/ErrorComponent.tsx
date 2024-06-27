import { useJsonFetch } from "../hooks/useJsonFetch";
import { UI } from "./UI";

export const ErrorComponent = () => {
  const [ {data, loading, error} ] = useJsonFetch(
    "http://localhost:8000",
    "error",
  );

  return (
    <div>
      <h1>Error</h1>
      <UI data={data} loading={loading} error={error} />
    </div>
  );

};
