import styled from "styled-components";

const TableHeader = ({ columnsList, changeSort }) => {
  return (
    <Container>
      {columnsList.map((column, index) => (
        <TableRow key={index}>
          <StyledColumnHeader onClick={column === "ABV" ? changeSort : () => {}} column={column}>{column}</StyledColumnHeader> 
        </TableRow>
      ))}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  text-align: left;
  width: 100%;
  min-width: 250px;
`;

const TableRow = styled.div`
  width: 25%;
  justify-content: center;
  border-left: 1px solid gray;
  padding: 10px;

  &:first-child {
    border: none
  };
`;

const StyledColumnHeader = styled.div`
  cursor: ${({column}) => column === "ABV" ? "pointer" : "auto"};
`;

export default TableHeader;
