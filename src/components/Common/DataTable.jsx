/** @format */

import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../redux/action";

const DataTable = ({ movieList = [] }) => {
  const dispatch = useDispatch();

  const handleOnClickOnMovie = (movie) => {
    dispatch(getMovieDetails(movie));
  };

  return (
    <Table bordered hover size="lg" responsive data-testid="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Episode</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {movieList?.map((movie, index) => (
          <tr
            key={index + 1}
            className="table-row"
            onClick={() => handleOnClickOnMovie(movie)}
          >
            <td>{index + 1}</td>
            <td>Episode {movie?.episode_id}</td>
            <td>
              Episode {movie?.episode_id} - {movie?.title}
            </td>
            <td>{new Date(`${movie?.created}`)?.toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
