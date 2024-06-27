import { TJsonFetchResult } from '../hooks/useJsonFetch'

export const UI = (props: TJsonFetchResult) => {
  const { data, loading, error } = props
  return (
    <div>
      <div>Data status: {data && data.status}</div>
      <div>Loading Status: {loading ? "loading..." : "loaded"}</div>
      {error ? (
        <div>
          Error: {error.message}
        </div>
      ): "no error"}
    </div>
  )
}
