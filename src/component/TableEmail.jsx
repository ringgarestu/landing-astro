import React, { useEffect, useState, useCallback, useMemo, useLayoutEffect, useRef } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Badge, CircularProgress } from "@nextui-org/react";

const columns = [
  { key: "number", label: "Number" },
  { key: "email", label: "Email" },
];

const TableEmail = () => {
  const [allEmails, setAllEmails] = useState([]);
  const [displayedEmails, setDisplayedEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const scrollPositionRef = useRef(0);

  const apiUrl = "https://reqres.in/api/users?page=1&per_page=12"; // Mengambil lebih banyak email

  const shuffleArray = useCallback((array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const fetchEmails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const emails = data.data.map((user) => ({ email: user.email }));
      setAllEmails(emails);
      setDisplayedEmails(emails.slice(0, 4)); // Menampilkan 4 email pertama
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  useLayoutEffect(() => {
    window.scrollTo(0, scrollPositionRef.current);
  });

  const handleShuffle = useCallback(() => {
    scrollPositionRef.current = window.pageYOffset;
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = shuffleArray(allEmails);
      setDisplayedEmails(shuffled.slice(0, 4)); // Mengambil 4 email acak
      setShuffleCount((prevCount) => prevCount + 1);
      setIsShuffling(false);
    }, 1000); // Delay for 1 second to show the CircularProgress
  }, [allEmails, shuffleArray]);

  const handleReset = useCallback(() => {
    scrollPositionRef.current = window.pageYOffset;
    setDisplayedEmails(allEmails.slice(0, 4)); // Menampilkan 4 email pertama lagi
    setShuffleCount(0);
  }, [allEmails]);

  if (loading) return <CircularProgress aria-label="Loading..." />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-[#ffffff] flex justify-center items-center">
      <div className="w-2/3 h-2/4 bg-[#006676] dark:bg-[#00494d] rounded-lg p-6">
        <p className="text-white font-bold text-2xl mb-5">List Email</p>
        <Table isStriped aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
          <TableBody>
            {displayedEmails.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-around mt-5">
          <Badge content={shuffleCount} size="sm" color="primary">
            <Button className="text-white font-bold bg-[#28E7DB] dark:bg-[#86a0a3]" onClick={handleShuffle} disabled={isShuffling}>
              {isShuffling ? <CircularProgress size="sm" aria-label="Shuffling..." /> : "Shuffle Email"}
            </Button>
          </Badge>
          <Button className="text-white font-bold bg-[#28E7DB] dark:bg-[#86a0a3] ml-2" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableEmail;
