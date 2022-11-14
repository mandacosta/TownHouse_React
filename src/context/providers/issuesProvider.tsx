import React from "react";
import { IssuesOutlet } from "../../pages/IssuesOutlet/issuesOutlet";
import { IssuesProvider } from "../issuesContext";

export const IssuesProviderComponent = () => {
  return (
    <IssuesProvider>
      <IssuesOutlet />
    </IssuesProvider>
  );
};
