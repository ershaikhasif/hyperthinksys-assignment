import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";

interface User {
  userId: number;
  id: number;
  body: string;
  title: string;
}

const useUserData = (userId: number = 4) => {
  const [user, setUser] = useState<User[]>([{ userId: 0, id: 0, body: "", title: "" }]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}users/${userId}/posts/`);
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data: Array<User> = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return { user, loading, error };
};

export default useUserData;
