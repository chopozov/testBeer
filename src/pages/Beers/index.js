import BeerTable from "../../components/Tables/BeerTable";
import { COLUMNS } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { selectBeers, selectCurrentBeer } from "../../reducer/beer/selector";
import { getBeer } from "../../reducer/beer/action";
import { useState } from "react";
import BeerModal from "../../components/BeerModal";
import styled from "styled-components";
import useGoogleCharts from "../../hooks/useGoogleCharts";
import ColumnChart from "../../components/Charts/ColumnChart";
import { changeBeerToColumnChart } from "../../helpers";

const Beers = () => {
 const google = useGoogleCharts();
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    data: beersList,
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
      <ColumnChart google={google} info={changeBeerToColumnChart(beersList)}/>
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
        data={currentBeer[0]} 
        isOpen={modalIsOpen} 
        isLoading={currentBeerIsLoading} 
        onClose={onCloseModal}
      />
    </Container>
  </>
  )
};

const Container = styled.div``;

export default Beers;
