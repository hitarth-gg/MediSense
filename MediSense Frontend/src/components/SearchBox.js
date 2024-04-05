export default function SearchBox() {
  return (
    <div className="bg-gray-200 rounded-md mx-2">
      <div className="relative">
        <input
          type="text"
          className="h-10 w-55 pr-8 pl-5 rounded-md z-0 border-gray-300 border-[1.8px] focus:shadow focus:outline-none"
          placeholder="Search anything..."
        />
        <div className="absolute top-4 right-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
        </div>
      </div>
      
    </div>
  );
}
