import Link from "next/link";

const INPUT = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${INPUT}`}
        defaultValue="ada"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${INPUT}`}
        defaultValue="123"
      />
      <label htmlFor="wd-ai-signin-note" className="mb-1 block text-sm text-neutral-600">
        Sample note
      </label>
      <input id="wd-ai-signin-note" placeholder="sample note" className={INPUT} />
      <Link
        id="wd-signin-btn"
        href="/dashboard"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
      <Link id="wd-signup-link" href="/account/signup" className="text-blue-600">
        Sign up
      </Link>
    </div>
  );
}
