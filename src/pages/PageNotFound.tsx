import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <h1>Page not found...</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default PageNotFound;
