export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className="w-full text-center">
      <p className="text-xs">designed by paris osuch // {year}</p>
    </div>
  );
}
