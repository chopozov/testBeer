import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBeers, selectCurrentBeer } from "../../reducer/beer/selector";
import { getBeer } from "../../reducer/beer/action";
import styled from "styled-components";
import BeerTable from "../../components/Tables/BeerTable";
import BeerModal from "../../components/BeerModal";
import useGoogleCharts from "../../hooks/useGoogleCharts";
import ColumnChart from "../../components/Charts/ColumnChart";
import DualRingLoader from "../../components/DualRingLoader";
import { changeBeerToColumnChart } from "../../helpers";
import { COLUMNS } from "./constants";

const Beers = () => {
 const google = useGoogleCharts();
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    data: beersList,
    isLoading: beersListIsLoading,
  } = useSelector(selectBeers);

  const {
    data: currentBeer,
    isLoading: currentBeerIsLoading,
  } = useSelector(selectCurrentBeer);

  const onCloseModal = () => setModalIsOpen(false);

  const getCurrentBeer = (id) => dispatch(getBeer(id));

  return (
    <>
      <Container>
        <ChartContainer>
          {(!beersListIsLoading && !google)  ?
            <DualRingLoader height="30px" width="30px" />
            :
            <ColumnChart google={google} info={changeBeerToColumnChart(beersList)} />
          }
        </ChartContainer>
        <BeerTable
          columns={COLUMNS}
          onOpenModal={(id) => {
            setModalIsOpen(true)
            getCurrentBeer(id);
          }}
          width="1200px"
          withPagination
        />
        <BeerModal
          data={currentBeer}
          isOpen={modalIsOpen}
          isLoading={currentBeerIsLoading}
          onClose={onCloseModal}
        />
      </Container>
    </>
  )
};

const Container = styled.div``;

const ChartContainer = styled.div`
  width: 1200px;
  height: 300px;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center
`;

export default Beers;
