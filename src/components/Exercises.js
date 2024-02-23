import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material/";
import { Box, Stack, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 2;

  const inexOfLastExercise = currentPage * exercisePerPage;

  const inexOfFirstExercise = inexOfLastExercise - exercisePerPage;

  const currentExercises = exercises.slice(
    inexOfFirstExercise,
    inexOfLastExercise
  );

  //Material UI is sending an event and value through pagination component
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1800", behaviour: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };
    
    fetchExerciseData();

  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 4 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 4)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
