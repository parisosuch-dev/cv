let education = {
  name: "Sonoma State University",
  study: "Computer Science and Astronomy",
  start: "2018",
  end: "2023",
};

export default function Education() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">Education</h1>
      <div className="flex flex-row w-full justify-between items-center">
        <h2 className="font-semibold text-sm sm:text-lg">{education.name}</h2>
        <p className="text-gray-500 text-sm text-center">
          {education.start} - {education.end}
        </p>
      </div>
      <p className="text-xs sm:text-md font-light font-mono">
        {education.study}
      </p>
    </div>
  );
}
