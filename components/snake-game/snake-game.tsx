/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useCallback } from "react";

type Coordinate = {
  x: number;
  y: number;
};

const gridSize = 20;
const cellSize = 15;
const initialSpeed = 200;
const dotSize = 10;

export function SnakeGame() {
  const [snake, setSnake] = useState<Coordinate[]>([{ x: 2, y: 2 }]);
  const [food, setFood] = useState<Coordinate>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Coordinate>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(initialSpeed);
  const [fruitsEaten, setFruitsEaten] = useState(0);
  const [foodCount, setFoodCount] = useState(10);

  useEffect(() => {
    if (gameOver) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          e.preventDefault();
          setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          e.preventDefault();
          setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          e.preventDefault();
          setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  const checkCollision = (head: Coordinate) => {
    for (const segment of snake) {
      if (head.x === segment.x && head.y === segment.y) return true;
    }
    return head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize;
  };

  const moveSnake = useCallback(() => {
    if (foodCount === 0) return; // Stop moving if all food is eaten
    const newSnake = [...snake];
    const newHead = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    if (checkCollision(newHead)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
      let newFood;
      do {
        newFood = {
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
        };
      } while (checkCollision(newFood));
      setFood(newFood);
      setFruitsEaten((prevFruitsEaten) => prevFruitsEaten + 1); // Increment fruits eaten
      setFoodCount((prevFoodCount) => prevFoodCount - 1); // Decrement food count
      setSpeed((prevSpeed) => Math.max(50, prevSpeed - 10)); // Increase speed
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, foodCount]);

  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(moveSnake, speed); // Use speed for interval
    return () => clearInterval(timer);
  }, [moveSnake, gameOver, speed]);

  const startGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setSpeed(initialSpeed); // Reset speed
    setFruitsEaten(0); // Reset fruits eaten
    setFoodCount(10); // Reset food count to default
  };

  return (
    <div className="flex flex-col items-center justify-center md:h-screen">
      <div className="mb-6 flex flex-col lg:flex-row items-center justify-center">
        <div
          className="grid rounded-lg shadow-lg border-2 border-[#43d9ac18]"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const x = index % gridSize;
            const y = Math.floor(index / gridSize);
            const isSnake = snake.some(
              (segment) => segment.x === x && segment.y === y
            );
            const isFood = food.x === x && food.y === y;
            return (
              <div
                key={index}
                className={
                  isSnake
                    ? "bg-[#43D9AD]"
                    : isFood
                    ? "bg-[#43D9AD] shadow-[0_0_0_6px_rgba(67,217,173,0.2)] animate-pulse"
                    : ""
                }
                style={{
                  width: cellSize,
                  height: cellSize,
                  borderRadius: isFood ? dotSize : 0,
                  border: isFood ? "2px solid #43D9AD " : "none",
                }}
              />
            );
          })}
        </div>
        <div className="bg-[#3c9a7e4a] flex flex-col items-center justify-center mx-4 px-4 py-2 rounded-lg mt-8 md:mt-0">
          <span>// use keyboard</span>
          <span>&nbsp; // arrows to play</span>
          <div className="flex flex-col items-center space-y-2 p-6">
            <button className="bg-[#010C15] text-white w-12 h-8 rounded-md flex items-center justify-center">
              <span className="block transform -rotate-90">&gt;</span>
            </button>
            <div className="flex space-x-2">
              <button className="bg-[#010C15] text-white w-12 h-8 rounded-md flex items-center justify-center">
                <span className="block">&lt;</span>
              </button>
              <button className="bg-[#010C15] text-white w-12 h-8 rounded-md flex items-center justify-center">
                <span className="block transform rotate-90">&gt;</span>
              </button>
              <button className="bg-[#010C15] text-white w-12 h-8 rounded-md flex items-center justify-center">
                <span className="block">&gt;</span>
              </button>
            </div>
          </div>
          <div className="text-md">// fruits eaten: {fruitsEaten}</div>
          <div className="text-md">
            {fruitsEaten < 10 && (
              <span className="block mt-4">// food left: </span>
            )}
            {Array.from({ length: foodCount }).map((_, index) => (
              <div
                key={index}
                className="bg-[#43D9AD] shadow-[0_0_0_3px_rgba(67,217,173,0.2)] animate-pulse"
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: dotSize,
                  display: "inline-block",
                  margin: "0 4px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 md:gap-36">
        {gameOver
          ? foodCount > 0 && (
              <div className="absolute -mt-4 ml-2 text-center text-bold">
                Game Over!
              </div>
            )
          : foodCount === 0 && (
              <div className="absolute -mt-4 ml-2 text-center text-bold text-[#43D9AD]">
                Well done!
              </div>
            )}
        <button
          className="bg-[#FEA55F] text-[#011627] p-2 rounded-md mt-4 hover:bg-[#f8976a] transition-colors duration-200"
          onClick={startGame}
        >
          start-game
        </button>
      </div>
    </div>
  );
}
