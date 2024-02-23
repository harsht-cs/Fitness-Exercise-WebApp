import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#FFa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        textTransform="capitalize"
        fontweight="bold"
        t="11px"
        pb="10px"
        color="#000"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
