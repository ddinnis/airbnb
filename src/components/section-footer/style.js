import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  margin-bottom: 40px;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;

  .section-footer {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      padding-right: 6px;
      color: rgb(0, 132, 137);

      :hover {
        text-decoration: underline;
      }

      & + .icon {
        color: rgb(0, 132, 137);
      }
    }

    .text {
      font-weight: 600;
      display: inline;
      margin-right: 6px;
      padding-right: 6px;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
