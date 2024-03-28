"use client";

import { GlobalStyles } from "../style/GlobalStyles";
import { ChildrenProps } from "../interfaces";

const GlobalStyleProvider = ({ children }: ChildrenProps) => (
  <GlobalStyles>{children}</GlobalStyles>
);

export default GlobalStyleProvider;
