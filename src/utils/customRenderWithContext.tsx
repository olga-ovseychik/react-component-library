import { render, type RenderResult } from "@testing-library/react";
import React, { ReactNode } from "react";

type ProviderConfig<T> = {
  context: React.Context<T>,
  value: T,
}

export default function customRenderWithContext(
  ui: ReactNode,
  providers: ProviderConfig<any>[],
): RenderResult {
  const wrappedUI = providers.reduceRight((children, { context, value }) => (
    <context.Provider value={value}>{children}</context.Provider>
  ), ui);

  return render(wrappedUI);
}
