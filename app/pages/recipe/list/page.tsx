"use client"; // This file is a client-side file
import React from "react";
import RecipeListDisplay from "@/components/RecipeListDisplay";

const MAX_NFT_COUNT = 17; // this will eventually be dynamic. A call to the nft contract. "maxNFTs"

export default function RecipeList() {
  return (
    <>

      <RecipeListDisplay maxNftCount={MAX_NFT_COUNT} />

     
    </>
  );
}