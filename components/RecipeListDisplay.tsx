import React from "react";
import RecipeMiniDisplay from "@/components/RecipeMiniDisplay";
import { Grid } from "@mui/material";

export default function RecipeListDisplay({ maxNftCount }: { maxNftCount: number }) {
    const nftList = Array.from({ length: maxNftCount }, (_, i) => i + 1);
  return (
    <>
      <Grid container spacing={2}>
        {nftList.map((id) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
            <RecipeMiniDisplay id={id.toString()} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}