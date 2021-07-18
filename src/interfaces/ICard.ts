import React from "react";

export interface ICardComposition {
  Section: React.FC;
  Row: React.FC;
  Title: React.FC;
  MiniDesc: React.FC;
  Desc: React.FC<{ pos: number }>;
  Split: React.FC;
  SubTitle: React.FC;
  Button: React.FC;
  Price: React.FC;
}
