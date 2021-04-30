import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Transaction from "../transaction/Transaction";
import useTheme from "../../useTheme.js";

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
  box-shadow: 0px 0px 1px ${(props) => props.theme.lightWhite};
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
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
  margin-bottom: 4px;
  font-size: ${(props) => props.theme.fontSize20};
`;

const TransactionsSubTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize12};

  color: ${(props) => props.theme.fontColor};
`;

const TransactionsNumber = styled.span`
  font-weight: ${(props) => props.theme.fontWeight};
`;

export default DxcTransactions;
