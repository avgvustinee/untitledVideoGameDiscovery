import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardsContainer from "./GameCardsContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardsContainer key={skeletons}>
              <GameCardSkeleton />
            </GameCardsContainer>
          ))}
        {data.map((game) => (
          <GameCardsContainer key={game.id}>
            <GameCards game={game} />
          </GameCardsContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
