/** @format */

import Table from "react-bootstrap/Table";

const DataTable = () => {
  return (
    <Table bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Episode</th>
          <th>Name</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DataTable;
