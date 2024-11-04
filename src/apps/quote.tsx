import { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("Loading...");

  async function fetchQuote(): Promise<string> {
    const response = await fetch(
      "https://corporatebs-generator.sameerkumar.website/"
    );
    const text = await response.json();

    return text.phrase;
  }

  useEffect(() => {
    const handle = setInterval(async () => {
      setQuote(await fetchQuote());
    }, 1000);

    return () => clearInterval(handle);
  }, []);

  return <>{quote}</>;
}
