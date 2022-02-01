import styled from "styled-components";

const BeerModal = ({ data, onClose, isOpen, isLoading }) => {
  if (!isOpen || isLoading) return null;

  return (
    <ModalContainer>
      <ContentModalContainer>
        <CloseContainer onClick={onClose}>
          <button>Close</button>
        </CloseContainer>
        <Characteristic>Name: {data.name}</Characteristic>
        <Characteristic>Tagline: {data.tagline}</Characteristic>
        <Characteristic>ABV: {data.abv}</Characteristic>
        <Characteristic>Description: {data.description}</Characteristic>
        <Characteristic>Brewer's tips: {data.brewers_tips}</Characteristic>
        <Characteristic>First brewed: {data.first_brewed}</Characteristic>
        <img src={data.image_url} alt="ПИВО" style={{ width: "64px"}}/>
      </ContentModalContainer>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentModalContainer = styled.div`
  height: 50%;
  width: 50%;
  background-color: black;
  position: fixed;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
`;

const CloseContainer = styled.div`
  position: fixed;
  right: 26%;
  top: 25%;
  
  &:hover {
    cursor: pointer;
  }
`;

const Characteristic = styled.div`
  margin-bottom: 5px;
`;

export default BeerModal;
