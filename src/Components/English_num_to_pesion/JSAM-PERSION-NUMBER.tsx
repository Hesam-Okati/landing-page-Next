import React from "react";

interface PersianNumberProps {
  children: string | number;
}

const convertNumbersToPersian = (text: string | number): string => {
  const englishNumbers = '0123456789';
  const persianNumbers = '۰۱۲۳۴۵۶۷۸۹';

  return text.toString().replace(/[0-9]/g, (char) => persianNumbers[englishNumbers.indexOf(char)]);
};

const JSAM_PERSION_NUMBER: React.FC<PersianNumberProps> = ({ children }) => {
  return <span>{convertNumbersToPersian(children)}</span>;
};

export default JSAM_PERSION_NUMBER;