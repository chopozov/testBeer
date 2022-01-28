import TableHeader from "./TableHeader";
import styled from "styled-components";
import TableRows from "./TableRows";
import { useDispatch, useSelector } from "react-redux";
import { selectBeers } from "../../../reducer/beer/selector";
import { useEffect, useMemo, useState } from "react";
import { getBeersList } from "../../../reducer/beer/action";
import { COLUMNS } from "../../../pages/Beers/constants";

const BeerTable = ({ 
  onOpenModal,
  width,
  withPagination,
}) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [asc, setAsc] = useState(false);

  const {
    data: beersList,
    isLoading: beersListIsLoading,
  } = useSelector(selectBeers);

  useEffect(() => {
    dispatch(getBeersList(page));
  }, [dispatch, page]);

  const sortedBeers = useMemo(() => {
    if (asc === null) return beersList;
    return beersList.sort((a, b) => asc ? b.abv - a.abv : a.abv - b.abv);
  }, [beersList, asc]);

  return (
    <>
      {!beersListIsLoading &&
        <TableContainer width={width}>
          <TableHeader columnsList={COLUMNS} changeSort={() => setAsc((asc) => !asc)} />
          <TableRows rows={sortedBeers} onOpenModal={onOpenModal} />
          {withPagination && (
            <PaginationContainer>
              <StyledButton onClick={() => setPage((page) => page - 1)} disabled={page === 1}>Previous</StyledButton>
              <StyledButton onClick={() => setPage((page) => page + 1)}>Next</StyledButton>
            </PaginationContainer>
          )}
        </TableContainer>
      }
    </>
  )
};

const TableContainer = styled.div`
  width: ${({ width }) => width};
  min-width: 300px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  margin-top: 10px
`;

export default BeerTable;
