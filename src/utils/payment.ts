// Base URL (env based)
export const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";


export async function createPremiumOrder(examType: string) {

  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_BASE}/api/payment/create-order?examType=${examType}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Order create failed");

  return res.json();
}


export async function verifyPayment(data: any) {

  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_BASE}/api/payment/verify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  );

  if (!res.ok) throw new Error("Verify failed");
}
