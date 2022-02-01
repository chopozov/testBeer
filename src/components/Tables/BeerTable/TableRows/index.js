import styled from "styled-components";
import DualRingLoader from "../../../DualRingLoader";

const TableRows = ({ rows, onOpenModal, isLoading }) => {

  if (isLoading) return (
    <TableRow>
      <LoadingContainer>
        <DualRingLoader height="30px" width="30px" />
      </LoadingContainer>
    </TableRow>
  )

  if (!rows.length) return (
    <TableRow>
      <NothingFound>
        Sorry, nothing found. Please try later.
      </NothingFound>
    </TableRow>
  )

  return (
    <Container>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <CellContent>{row.name}</CellContent>
          <CellContent>{row.tagline}</CellContent>
          <CellContent>
            <BeerImage src={row.image_url} alt="ПИВО" style={{ width: "64px" }} onClick={() => onOpenModal(row.id)}/>
          </CellContent>
          <CellContent>{row.abv}</CellContent>
        </TableRow>
      ))}
    </Container>
  )
};

const Container = styled.div``;

const TableRow = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid gray;
  border-top: none;
  width: 100%;
`;

const CellContent = styled.div`
  width: 50%;
  justify-content: center;
  padding: 10px;
  border-left: 1px solid gray;

  &:first-child {
    border: none;
  }
`;

const LoadingContainer = styled.div`
  width: 60px;
  height: 60px;
`;

const NothingFound = styled.span`
  margin: 10px 0;
`;

const BeerImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export default TableRows;
