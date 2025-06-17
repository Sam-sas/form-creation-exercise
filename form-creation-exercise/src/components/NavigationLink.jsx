import { Link } from "react-router";

export default function NavigationLink({linkName, linkUrl}) {
  return (
    <Link
      to={linkUrl}
      className="text-2xl my-4 mx-4 md:mx-8 antialiased"
    >
      {linkName}
    </Link>
  );
}
