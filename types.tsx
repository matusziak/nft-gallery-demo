export type NFT = {
  media: { gateway: string }[];
  title: string;
  id: { tokenId: string };
  contract: { address: string };
  description: string;
};
