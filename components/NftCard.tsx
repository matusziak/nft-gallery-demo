import React from "react";
import { NFT } from "../types";

type NftCardProps = {
  nft: NFT;
};

export const NftCard = ({ nft }: any) => {
  return (
    <div className="w-1/5 h-96 flex flex-col ">
      <div className="rounded-md">
        <img
          className="object-cover h-72 w-full rounded-t-md"
          src={nft.media[0].gateway}
        ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-xl text-gray-800">{nft.title}</h2>
          <p className="text-gray-60 truncate">Id: {nft.id.tokenId}</p>
          <p className="text-gray-600 truncate">{nft.contract.address}</p>
        </div>
      </div>
    </div>
  );
};
