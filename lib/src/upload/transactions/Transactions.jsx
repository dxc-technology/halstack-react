import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Transaction from "../transaction/Transaction";
import useTheme from "../../useTheme";

const DxcTransactions = ({ transactions }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.upload}>
      <DXCTransactions>
        <TransactionsText>
          <TransactionsTitle>Files uploaded</TransactionsTitle>
          <TransactionsSubTitle>
            <TransactionsNumber>
              {transactions && transactions.filter((file) => file.status === "success").length}
            </TransactionsNumber>{" "}
            documents in total
          </TransactionsSubTitle>
        </TransactionsText>
        {transactions.map((transaction) => {
          return (
            <Transaction
              name={transaction.name}
              type={transaction.type}
              status={transaction.status}
              message={transaction.message}
            />
          );
        })}
      </DXCTransactions>
    </ThemeProvider>
  );
};

DxcTransactions.propTypes = {
  transactions: PropTypes.array,
};

const DXCTransactions = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  max-width: 100%;
  width: 35%;
  padding-top: 46px;
  padding-left: 65px;
  border-radius: 4px 0px 4px 4px;
  box-shadow: 0px 0px 1px ${(props) => props.theme.shadowColor};
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${(props) => props.theme.scrollBarTrackColor};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${(props) => props.theme.scrollBarThumbColor};
  }
`;

const TransactionsText = styled.span`
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

const TransactionsTitle = styled.span`
  font-size: ${(props) => props.theme.uploadedFilesTitleFontSize};
  font-style: ${(props) => props.theme.uploadedFilesTitleFontStyle};
  font-weight: ${(props) => props.theme.uploadedFilesTitleFontWeight};
  text-transform: ${(props) => props.theme.uploadedFilesTitleFontTextTransform};
  color: ${(props) => props.theme.uploadedFilesTitleFontColor};
  margin-bottom: 4px;
`;

const TransactionsSubTitle = styled.span`
  font-size: ${(props) => props.theme.uploadedFilesSubtitleFontSize};
  font-style: ${(props) => props.theme.uploadedFilesSubtitleFontStyle};
  font-weight: ${(props) => props.theme.uploadedFilesSubtitleFontWeight};
  text-transform: ${(props) => props.theme.uploadedFilesSubtitleFontTextTransform};
  color: ${(props) => props.theme.uploadedFilesSubtitleFontColor};
`;

const TransactionsNumber = styled.span`
  font-weight: ${(props) => props.theme.uploadedFilesNumberFontWeight};
`;

export default DxcTransactions;
