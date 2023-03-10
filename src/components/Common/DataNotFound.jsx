/** @format */

export const DataNotFound = ({ text = "Opps..! movies not found" }) => (
  <p className="text-center mt-5" data-testid="data-not-found">
    {text}
  </p>
);
