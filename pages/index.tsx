import { useState } from "react";
import Loading from "../components/Loading";
import { NftCard } from "../components/NftCard";
import { NFT } from "../types";

const Home = () => {
  const [wallet, setWalletAddress] = useState(
    "0x60e04615FB0155B92015412d48EB64B80F6A7e35"
  );
  const [NFTs, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    setNFTs([]);
    setLoading(true);

    const api_key = "4UeStsafXvjSmpynjL8U9wQ1fdWDQz5J";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };
    const fetchURL = `${baseURL}?owner=${wallet}`;

    try {
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } catch (e) {
      console.log("Error", e);
    }

    if (nfts) {
      setNFTs(nfts.ownedNfts);
    }
    setLoading(false);
  };

  console.log(NFTs);

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/5 p-2.5"
          type={"text"}
          value={wallet}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Wallet address or ENS"
        />
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 rounded-lg w-1/5"
          }
          onClick={fetchNFTs}
        >
          Get NFTs
        </button>

        <div className="flex flex-wrap gap-y-3 mt-4 w-5/6 gap-x-2 justify-center">
          {loading ? (
            <Loading />
          ) : (
            NFTs.map((nft, i) => <NftCard key={i} nft={nft} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
