import { Library } from "../utils/Library";

function Book() {
  const bookInfo = Library.map((book) => (
    <div className="overflow-x-auto mt-5 mx-5" key={book.id}>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>{book.id}</th>
            <td>{book.buku}</td>
            <td>{book.price}</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
  return bookInfo;
}

export default Book;
