import React from "react";
import { createContext } from "react";
import { useReceiptApi } from "../hooks/useReceiptApi";

const ReceiptServiceContext = createContext();

const ReceiptServiceProvider = ({ children }) => {
  const [{typeReceipt,receiptsAll, receipt, loading},{saveReceiptApi,getAllReceiptByCategory ,getOne}]= useReceiptApi();
    const values= {
        typeReceipt,
        loading,
        receipt,
        receiptsAll,
        saveReceiptApi,
        getOne,
        getAllReceiptByCategory,
      }
  return (
    <ReceiptServiceContext.Provider
      value={values}
    >
      {children}
    </ReceiptServiceContext.Provider>
  );
};
export {ReceiptServiceContext,ReceiptServiceProvider}