/** @format */

import Table from "react-bootstrap/Table";

const DataTable = ({ movieList = [] }) => {
  return (
    <Table bordered hover size="lg" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Episode</th>
          <th>Name</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movieList?.map((movie, index) => (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>Episode {movie?.episode_id}</td>
            <td>
              Episode {movie?.episode_id} - {movie?.title}
            </td>
            <td>{new Date(`${movie?.created}`)?.getFullYear()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
