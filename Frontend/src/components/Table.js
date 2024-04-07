export default function Table({el}) {
  console.log(el);
  
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right border-x-2 border-t-2 text-gray-500 ">
        <tbody>
          <tr className="flex flex-row justify-between  bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {el[0]}
            </th>
            <td className="px-6 py-4 text-center">{el[1]}</td> {/* Add text-center class here */}
            <td className="px-6 py-4">{el[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
