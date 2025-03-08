const calculateAverageRating = (reviews?: { rating: number }[]): string => {
  if (!reviews || reviews.length === 0) return "0.0";
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};

export { calculateAverageRating };
