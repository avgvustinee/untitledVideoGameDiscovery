import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardsContainer from "./GameCardsContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardsContainer>
              <GameCardSkeleton key={skeletons} />
            </GameCardsContainer>
          ))}
        {games.map((game) => (
          <GameCardsContainer>
            <GameCards key={game.id} game={game} />
          </GameCardsContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
