import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const getChapters = async (
  exam: string,
  className: string,
  subject: string,
  category?: string
) => {
  const res = await axios.get(
    `${API_BASE}/api/pdf/fetch`,
    {
      params: { exam, className, subject ,category}
    }
  );

  // 🔥 VERY IMPORTANT
  return res.data.data;
};
