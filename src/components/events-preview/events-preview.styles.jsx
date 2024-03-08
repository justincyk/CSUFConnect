import styled from "styled-components";

export const h2 = styled.h2``;

export const EventsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10vw;
`;

export const EventsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-bottom: 2px;
  }
`;

export const EventsItemContainer = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
`;
