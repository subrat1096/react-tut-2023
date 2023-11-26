import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center gap-3">
      <h1 className="text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="font-oswald text-lg">
        <i>Result {error.statusText || error.message}</i>
      </p>
      <button
        className="underline underline-offset-[2px] flex items-center text-xl"
        onClick={() => navigate("/")}
      >
        Go back to HomePage
      </button>
    </div>
  );
}
