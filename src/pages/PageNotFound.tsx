import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col gap-2">
      Page not found
      <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
