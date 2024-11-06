import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col gap-2">
        <h1>Error :(</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data?.message}</p>}

        <Link to="/">Home</Link>
      </div>
    );
  } else {
    return (
      <>
        <h1>Error :(</h1>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default ErrorBoundary;
