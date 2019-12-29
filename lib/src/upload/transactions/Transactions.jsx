import React from "react";
import styled from "styled-components";
import "../../common/OpenSans.css";
import PropTypes from "prop-types";
import Transaction from "../transaction/Transaction";
import {colors} from "../../common/variables.js";

const DxcTransactions = ({ transactions }) => {
  return (
    <DXCTransactions>
      <TransactionsText>
        <TransactionsTitle>Files uploaded</TransactionsTitle>
        <TransactionsSubTitle>
          <TransactionsNumber>{transactions && transactions.filter(file => file.status === "success").length}</TransactionsNumber>{" "}
          documents in total
        </TransactionsSubTitle>
      </TransactionsText>
      {transactions.map(transaction => {
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
  );
};

DxcTransactions.propTypes = {
  transactions: PropTypes.array
};

const DXCTransactions = styled.div`
  font-family: "Open Sans", sans-serif;
  max-width: 100%;
  width: 35%;
  padding-top: 46px;
  padding-left: 65px;
  border-radius: 4px 0px 4px 4px;
  box-shadow: 0px 0px 1px ${colors.black}29;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${colors.lightGrey};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${colors.darkGrey};
  }
`;

const TransactionsText = styled.span`
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

const TransactionsTitle = styled.span`
  margin-bottom: 4px;
  font-size: 20px;
`;

const TransactionsSubTitle = styled.span`
  font-size: 12px;
  color: ${colors.darkGrey};
`;

const TransactionsNumber = styled.span`
  font-weight: bold;
`;

export default DxcTransactions;
