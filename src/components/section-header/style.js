import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  .section-header {
    width: 100%;
    color: ${props => props.theme.text.secondaryColor};
  }
  .hover-part:hover .icon-more-arrow {
    display: block;
  }
  .hover-part {
    cursor: pointer;
    display: flex;
    justify-content: start;
  }
  section {
    .title {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
    }
    .subTitle {
      font-size: 16px;
      line-height: 24px;
      margin-top: 12px;
    }
  }

  .icon-more-arrow {
    padding-bottom: 8px;
    padding-top: 8px;
    padding-left: 16px;

    width: 16px;
    height: 16px;

    align-self: center;

    display: none;
  }
`;
