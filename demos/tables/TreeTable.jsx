/* eslint-disable no-console, no-alert, no-unused-vars, react/prop-types */
import React from 'react';
import {
  Table,
} from '../../src';

const data = [
  {
    id: 100,
    name: 'Adam',
    age: 55,
    children: [
      {
        id: 101,
        name: 'Joe',
        age: 12,
      },
    ],
  },
  {
    id: 102,
    name: 'Brian',
    age: 62,
    children: [
      {
        id: 103,
        name: 'Mike',
        age: 22,
      },
      {
        id: 104,
        name: 'Jack',
        age: 33,
      },
    ],
  },
];

const columns = [
  {
    property: 'name',
    header: 'Name',
    cell: ({ value }) => (
      <span>
        <span
          className="show-more"
          onClick={e => console.log('clicked', value)}
        />
        {value}
      </span>
    ),
  },
  {
    property: 'age',
    header: 'Age',
  },
];

const TreeTable = () => (
  <Table
    className="pure-table pure-table-striped"
    columns={columns}
    data={data}
  >
    <Table.Header />

    <Table.Body
      rowKey="id"
      row={(row, rowIndex) => ({
        className: rowIndex % 2 ? 'odd-row' : 'even-row',
      })}
    />
  </Table>
);

export default TreeTable;
