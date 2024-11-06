import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardsContainer from "./GameCardsContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeletons) => (
          <GameCardsContainer key={skeletons}>
            <GameCardSkeleton />
          </GameCardsContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardsContainer key={game.id}>
          <GameCards game={game} />
        </GameCardsContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
