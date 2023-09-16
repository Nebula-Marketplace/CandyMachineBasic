"use client";

import { useState } from "react";
import { useShuttle } from "@delphi-labs/shuttle-react";
import { MsgExecuteContract } from "@delphi-labs/shuttle-react";

import useWallet from "@/hooks/useWallet";

interface Mint {

}

export function SignMessage() {
  const { sign } = useShuttle();
  const wallet = useWallet();

  const contract_address = "";
  const mint_price = 1 * (10 ** 18) + (10**18) * 0.03; // 1.03 INJ, 0.03 INJ is Nebula fee
  const mint_msg: Mint = {};
  const sender = wallet.account.address;

  const onSign = () => {
    sign({
        messages: [new MsgExecuteContract({
            sender,
            contract: contract_address,
            msg: mint_msg,
            funds: [{ denom: "inj", amount: mint_price.toString() }],
        })]
    })
      .then(async (result) => {
        console.log("message result: ", result);
      })
      .catch((error) => {
        console.error("sign error", error);
      });
  };

  return (
    <>
      <h2>Sign Contract Message</h2>
      <button onClick={onSign}>Sign</button>
    </>
  );
}
