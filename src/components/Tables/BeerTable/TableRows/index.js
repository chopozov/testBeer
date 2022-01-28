import styled from "styled-components";

const TableRows = ({ rows, onOpenModal }) => {
  return (
    <Container>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <CellContent>{row.name}</CellContent>
          <CellContent>{row.tagline}</CellContent>
          <CellContent>
            <img src={row.image_url} alt="ПИВО" style={{ width: "64px" }} onClick={() => onOpenModal(row.id)} />
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
  justify-content: space-between;
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

export default TableRows;
