let data = {
  about:
    "I am a full stack software engineer. Raised on the central coast of CA and now residing in Sacramento, CA. I enjoy working on various tech stacks, mostly in the web development realm.",
};

export default function About() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">About</h1>
      <p className="font-mono text-sm sm:text-md">{data.about}</p>
    </div>
  );
}
