import React from 'react';
import { useHistory } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useStyles } from './styles';
import { TableSortLabel } from '@material-ui/core';
import { useFormatMessage } from 'react-intl-hooks';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

interface IData {
  header: string;
  category: string;
  language: string;
  status: string;
  date: string;
}

interface IHeadCell {
  id: keyof IData;
  label: React.ReactNode;
}

interface IEnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IData
  ) => void;
  order: Order;
  orderBy: string;
  headCells: IHeadCell[];
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((el: any, index: number) => [el, index]);

  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map((el: any) => el[0]);
}

function EnhancedTableHead(props: IEnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property: keyof IData) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell: IHeadCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface IPost {
  id: number;
  header: string;
  category: string;
  language: string;
  status: string;
  date: string;
}

interface IProps {
  data?: IPost[];
}

const TableOfPosts = (props: IProps) => {
  const classes = useStyles();
  const t = useFormatMessage();
  const history = useHistory();

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IData>('header');

  const { data } = props;

  const headCells: IHeadCell[] = [
    {
      id: 'header',
      label: t({ id: 'tableOfPosts.header', defaultMessage: 'Nadpis' }),
    },
    {
      id: 'category',
      label: t({ id: 'tableOfPosts.category', defaultMessage: 'Kategorie' }),
    },
    {
      id: 'language',
      label: t({ id: 'tableOfPosts.language', defaultMessage: 'Jazyk' }),
    },
    {
      id: 'status',
      label: t({ id: 'tableOfPosts.status', defaultMessage: 'Stav' }),
    },
    {
      id: 'date',
      label: t({ id: 'tableOfPosts.date', defaultMessage: 'Datum' }),
    },
  ];

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handlePostRowClick = (id: number) => {
    return history.push(`${routes.AllCustomersPage}/${id}`);
  };

  return (
    <Table className={classes.table} aria-label='table'>
      <EnhancedTableHead
        classes={classes}
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
        headCells={headCells}
      />
      {data &&
        stableSort(data, getComparator(order, orderBy)).map(
          (row: IPost, index: number) => {
            const { date } = row;
            const dateObject = new Date(date ? date : '');
            const day = dateObject.getDay();
            const month = dateObject.getMonth() + 1;
            const year = dateObject.getFullYear();

            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableBody key={row.id}>
                <TableRow className={classes.spacer} />
                <TableRow
                  className={classes.tableRow}
                  hover={true}
                  tabIndex={-1}
                  onClick={() => handlePostRowClick(row.id)}
                >
                  <TableCell component='th' id={labelId} scope='row'>
                    {row.header}
                  </TableCell>
                  <TableCell>
                    {t({
                      id: `tableOfPosts.category.${row.category}`,
                      defaultMessage: 'Shipper',
                    })}
                  </TableCell>
                  <TableCell>
                    {t({
                      id: `tableOfPosts.language.${row.language}`,
                      defaultMessage: 'Slovenčina',
                    })}
                  </TableCell>
                  <TableCell>
                    {t({
                      id: `tableOfPosts.status.${row.status}`,
                      defaultMessage: 'Koncept',
                    })}
                  </TableCell>
                  <TableCell>{`${day}.${month}.${year}`}</TableCell>
                </TableRow>
              </TableBody>
            );
          }
        )}
    </Table>
  );
};

export default TableOfPosts;
