import { ReactNode } from "react";
import ReactDOM from "react-dom";

const idPortal = "portal-root";

function getContainer() {
  let rootPortal = document.getElementById(idPortal);
  if (rootPortal) {
    return rootPortal;
  }
  rootPortal = document.createElement("div");
  rootPortal.id = idPortal;

  return document.body.appendChild(rootPortal);
}

export default function Portal({ children }: { children: ReactNode }) {
  return ReactDOM.createPortal(<div>{children}</div>, getContainer());
}
